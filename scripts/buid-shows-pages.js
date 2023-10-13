const concerts = [
  {
    date: "Mon, Sept, 6 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue, Sept, 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri, Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Saturday, Nov 6 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

function generateConcertsElement(concert) {
  const concertsContainer = document.getElementById("concerts-container");

  const divElement = document.createElement("div");
  divElement.classList.add("shows__container__info");
  divElement.addEventListener("click", selectElement(divElement));

  const headDateElement = document.createElement("p");
  headDateElement.classList.add("shows__container__info__head");
  headDateElement.textContent = "Date";

  const dateElement = document.createElement("p");
  dateElement.classList.add("shows__container__info__date");
  dateElement.textContent = concert.date;

  const headVenueElement = document.createElement("p");
  headVenueElement.classList.add("shows__container__info__head");
  headVenueElement.textContent = "Venue";

  const placeElement = document.createElement("p");
  placeElement.classList.add("shows__container__info__place");
  placeElement.textContent = concert.venue;

  const headLocationElement = document.createElement("p");
  headLocationElement.classList.add("shows__container__info__head");
  headLocationElement.textContent = "Location";

  const townElement = document.createElement("p");
  townElement.classList.add("shows__container__info__town");
  townElement.textContent = concert.location;

  divElement.appendChild(headDateElement);
  divElement.appendChild(dateElement);
  divElement.appendChild(headVenueElement);
  divElement.appendChild(placeElement);
  divElement.appendChild(headLocationElement);
  divElement.appendChild(townElement);

  const divButton = document.createElement("div");
  divButton.classList.add("button");

  const buttonElement = document.createElement("button");
  buttonElement.textContent = "BUY TICKETS";
  //   divElement.appendChild(buttonElement);

  divButton.appendChild(buttonElement);

  divElement.appendChild(divButton);
  concertsContainer.appendChild(divElement);
}

document.addEventListener("DOMContentLoaded", (event) => {
  for (let index = 0; index < concerts.length; index++) {
    console.log(concerts[index]);
    generateConcertsElement(concerts[index]);
  }
});
function selectElement(divElement) {
  return function () {
    const selectedClassName = "shows__container__info--selected";
    const removeClass = document.getElementsByClassName(selectedClassName);
    for (let i = 0; i < removeClass.length; i++) {
      removeClass[i].classList.remove(selectedClassName);
    }
    divElement.classList.add(selectedClassName);
    alert("click");
  };
}

// TODO REMOVE HTML 