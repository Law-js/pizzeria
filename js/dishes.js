const getData = async () => {
  const btns = document.querySelectorAll(".overlay-menu button");
  const title = document.querySelector(".main-header h1");
  const cards = document.querySelector(".cards");
  const body = document.querySelector("body");
  const linkTop = document.querySelector(".main-footer > a");

  await fetch("./../data.json")
    .then((res) => res.json())
    .then(({ data }) => {
      btns.forEach((btn) => {
        btn.addEventListener("click", () => {
          body.style.overflowY = "initial";
          let value = btn.value;
          title.textContent = "Nos " + value;
          cards.innerHTML = data
            .filter((item) => item.type === value)
            .sort((a, b) => a.name - b.name)
            .map(
              (item) =>
                // add button to click show img
                `
                <div class="card"            
                 data-aos="fade-up"
                data-aos-duration="500"
                data-aos-easing="ease-in-out">

                    <h2>${item.name}</h2>
                    <p>${item.descr}.</p>
                    <p>${item.price}€</p>
                
                </div>
          `
            )
            .join("");
        });
        linkTop.addEventListener("click", () => {
          body.style.overflowY = "hidden";
        });
      });
    });
};
getData();
