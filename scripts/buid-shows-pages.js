const concerts = [
    {
        date: 'Mon, Sept, 6 2021',
        venue: 'Ronald Lane',
        location: 'San Francisco, CA', 
    },
    {
        date: 'Tue, Sept, 21 2021',
        venue: 'Pier 3 East',
        location: 'San Francisco, CA',
    },
    {
        date:'Fri, Oct 15 2021',
        venue: 'View Lounge',
        location: 'San Francisco, CA',
    },
    {
        date: 'Saturday, Nov 6 2021',
        venue: 'Hyatt Agency',
        location: 'San Francisco, CA',
    },
    {
        date: 'Fri Nov 26 2021',
        venue: 'Moscow Center',
        location: 'San Francisco, CA',
    },
    {
        date: 'Wed Dec 15 2021',
        venue: 'Press Club',
        location: 'San Francisco, CA',
    }
]

function generateConcertsElement (concert) {
    const concertsContainer = document.getElementById("concerts-container");

    const divElement = document.createElement("div");
    divElement.classList.add("shows__container__info");

    const headDateElement = document.createElement("p");
    headDateElement.classList.add("shows__container__info__head");
    headDateElement.textContent = "Date";

    const dateElement = document.createElement("p");
    dateElement.classList.add("shows__container__info__date");
    dateElement.textContent = concerts.date;

    const headVenueElement = document.createElement("p");
    headVenueElement.classList.add("shows__container__info__head");
    headVenueElement.textContent = "Venue";

    const placeElement = document.createElement("p");
    placeElement.classList.add("shows__container__info__place");
    placeElement.textContent = concerts.place;

    const headLocationElement = document.createElement("p");
    headLocationElement.classList.add("shows__container__info__head");
    headLocationElement.textContent = "Location";

    const townElement = document.createElement("p");
    townElement.classList.add("shows__container__info__town");
    townElement.textContent = concerts.town;

    divElement.appendChild(headDateElement);
    divElement.appendChild(dateElement);
    divElement.appendChild(headVenueElement); 
    divElement.appendChild(placeElement);
    divElement.appendChild(headLocationElement);
    divElement.appendChild(townElement);

    const buttonElement = document.createElement("button");
    buttonElement.textContent = "BUY TICKETS";
    concertElement.appendChild(buttonElement);

    concertsContainer.appendChild(divElement);
    concertsContainer.appendChild(buttonElement);
}

    
