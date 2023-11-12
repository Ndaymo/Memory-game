const section = document.querySelector("section");
const playersLivesCount = document.querySelector("span");
playersLives = 5;
playersLivesCount.textContent = playersLives;

const getData = () => [
  { imgSrc: "./Assets/arnold.webp", name: "arnold" },
  { imgSrc: "./Assets/steve.webp", name: "steve" },
  { imgSrc: "./Assets/aliko.webp", name: "aliko" },
  { imgSrc: "./Assets/dyson.webp", name: "dyson" },
  { imgSrc: "./Assets/mansa.webp", name: "mansa" },
  { imgSrc: "./Assets/gates.webp", name: "gates" },
  { imgSrc: "./Assets/bezos.webp", name: "bezos" },
  { imgSrc: "./Assets/mark.webp", name: "mark" },
  { imgSrc: "./Assets/arnold.webp", name: "arnold" },
  { imgSrc: "./Assets/steve.webp", name: "steve" },
  { imgSrc: "./Assets/aliko.webp", name: "aliko" },
  { imgSrc: "./Assets/dyson.webp", name: "dyson" },
  { imgSrc: "./Assets/mansa.webp", name: "mansa" },
  { imgSrc: "./Assets/gates.webp", name: "gates" },
  { imgSrc: "./Assets/bezos.webp", name: "bezos" },
  { imgSrc: "./Assets/mark.webp", name: "mark" },
];

//random

const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

// Lets create the cards
const cardGenerator = () => {
  const cardData = randomize();
  //here we start the html
  cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    // Add src of face img to src in the array
face.src = item.imgSrc;
    // Let's put the cards in the section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener('click', (e)=> {
        card.classList.add('toggleCard');
    })


  });
};
cardGenerator();
