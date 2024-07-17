const infoCard = document.querySelector("[info-card]");
const infoCardContainer = document.querySelector("[info-card-container]");
const searchBar = document.querySelector("[data-search]");

let users = [];

searchBar.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  users.forEach((user) => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.brand.toLowerCase().includes(value) ||
      user.description.toLowerCase().includes(value);

    user.element.classList.toggle("hide", !isVisible);
  });

  const hasVisibleCards = users.some(
    (user) => !user.element.classList.contains("hide")
  );
  infoCardContainer.classList.toggle("hide", !hasVisibleCards);

  if (!value.trim()) {
    users.forEach((user) => {
      user.element.classList.add("hide");
    });
  }
});




fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    users = data.map((user) => {
      const card = infoCard.content.cloneNode(true).children[0];
      const Title = card.querySelector("[data-title]");
      const Brand = card.querySelector("[data-brand]");
      const Description = card.querySelector("[data-description]");
      Title.textContent = user.username;
      Brand.textContent = user.company.name;
      Description.textContent = user.company.bs;
      infoCardContainer.append(card);
      return {
        name: user.username,
        brand: user.company.name,
        description: user.company.bs,
        element: card,
      };
    });
    
    // Initial check to hide cards if there is no input
    if (!searchBar.value.trim()) {
        infoCardContainer.classList.add("hide");
      }
    });