const slider = document.querySelector(".slider");
const btnLeft = document.getElementById("moveLeft");
const btnRight = document.getElementById("moveRight");

let baseSliderWidth = slider.offsetWidth;
let activeIndex = 0; 

let movies = [
  {
    src:
      "./assests/img/i-dont-feel.jpg",
      name: "I Don't Feel",
  },
  {
    src:
      "./assests/img/clinical.jpg",
      name: "Clinical",
  },

  {
    src:
      "./assests/img/madre.jpg",
      name: "Madre",
  },

  {
    src:
      "./assests/img/mercy.jpg",
      name: "Mercy",
  },
  {
    src:
      "./assests/img/special-correspondents.jpg",
      name: "Special Correspondents",
  },
  {
    src:
      "./assests/img/tramps.jpg",
      name: "Tramps",
  },
  {
    src:
      "./assests/img/old-guard.jpg",
      name: "Old Guard",
  },
  {
    src:
      "./assests/img/money-hiest.jpg",
      name: "Money Hiest",
  },
  {
    src:
      "./assests/img/the-gray-man.jpg",
      name: "The Gray Man",
  },
  {
    src:
      "./assests/img/american-factory.jpg",
      name: "American Factory",
  },
  {
    src:
      "./assests/img/arq-2016.jpg",
      name: "ARQ 2016",
  },
  {
   src:
      "./assests/img/barry-2016.jpg",
      name: "Barry 2016",
  },
  {
    src:
      "./assests/img/crouching-tiger-hidden.jpg",
      name: "Crouching Tiger Hidden",
  },
  {
    src:
      "./assests/img/interceptor.jpg",
      name: "Interceptor",
  },

  {
    src:
      "./assests/img/large-riverdale.jpg",
      name: "Large Riverdale",
  },
  {
    src:
      "./assests/img/millie-bobby-brown.jpg",
      name: "Millie Bobby Brown",
  },
  {
    src:
      "./assests/img/power.jpg",
      name: "Power",
  },
  {
    src:
      "./assests/img/i-dont-feel.jpg",
      name: "I don't Feel",
  },
];


function populateSlider() {
  movies.forEach((image) => {
    const newMovie = document.getElementById("movie0");
    let clone = newMovie.cloneNode(true);
    let img = clone.querySelector("img");
    let h2 = clone.querySelector("h2");
    img.src = image.src;
    h2.innerText = image.name;

    slider.insertBefore(clone, slider.childNodes[slider.childNodes.length - 1]);
  });
}

populateSlider();
populateSlider();


const initialMovie = document.getElementById("movie0");
initialMovie.remove();
btnLeft.addEventListener("click", (e) => {
  let movieWidth = document.querySelector(".movie").getBoundingClientRect()
    .width;
  let scrollDistance = movieWidth * 6;

  slider.scrollBy({
    top: 0,
    left: -scrollDistance,
    behavior: "smooth",
  });
  activeIndex = (activeIndex - 1) % 3;
  console.log(activeIndex);
  updateIndicators(activeIndex);
});

// Scroll Right button
btnRight.addEventListener("click", (e) => {
  let movieWidth = document.querySelector(".movie").getBoundingClientRect()
    .width;
  let scrollDistance = movieWidth * 6; 

  console.log(`movieWidth = ${movieWidth}`);
  console.log(`scrolling right ${scrollDistance}`);
  if (activeIndex == 2) {
    populateSlider();
    slider.scrollBy({
      top: 0,
      left: +scrollDistance,
      behavior: "smooth",
    });
    activeIndex = 0;
    updateIndicators(activeIndex);
  } else {
    slider.scrollBy({
      top: 0,
      left: +scrollDistance,
      behavior: "smooth",
    });
    activeIndex = (activeIndex + 1) % 3;
    console.log(activeIndex);
    updateIndicators(activeIndex);
  }
});

// slider.addEventListener("scroll", (e) => {
//   console.log(slider.scrollLeft);
//   console.log(slider.offsetWidth);
// });
