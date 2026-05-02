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




fetch("https://jsonfakery.com/products ")
  .then((res) => res.json())
  .then((data) => {
    users = data.slice(0,5).map((product) => {
      const card = infoCard.content.cloneNode(true).children[0];
      const Title = card.querySelector("[data-title]");
      const Brand = card.querySelector("[data-brand]");
      const Description = card.querySelector("[data-description]");
      Title.textContent = product.name;
      Brand.textContent = product.manufacturer;
      Description.textContent = product.description;
      infoCardContainer.append(card);
      return {
        name: product.name,
        brand: product.manufacturer,
        description: product.description,
        element: card,
      };
    });
    
    // Initial check to hide cards if there is no input
    if (!searchBar.value.trim()) {
        infoCardContainer.classList.add("hide");
      }
    });

    function clickoff(){
      document.body.addEventListener('click', () =>{
      infoCardContainer.classList.add("hide");

      } )

    } 



    clickoff()