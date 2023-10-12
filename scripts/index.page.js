const comments = [
  {
    name: "Connor Walton",
    timestamp: "02/17/2021",
    text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    timestamp: "01/09/2021",
    text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    timestamp: "12/20/2020",
    text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

function displayComment(comment) {
  const commentsDiv = document.getElementById("comments");

  const divElement = document.createElement("div");
  divElement.classList.add("testimony__comments");

  const detailsElement = document.createElement("div");
  detailsElement.classList.add("details");

  const header = document.createElement("h4");
  header.classList.add("fans");
  header.textContent = comment.name;

  const date = document.createElement("p");
  date.classList.add("date");
  date.textContent = comment.timestamp;

  const paragraph = document.createElement("p");
  paragraph.classList.add("testimony__article");
  paragraph.textContent = comment.text;

  detailsElement.appendChild(header);
  detailsElement.appendChild(date);

  divElement.appendChild(detailsElement);
  divElement.appendChild(paragraph);

  commentsDiv.appendChild(divElement);
}

function functSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const timestamp = new Date().toLocaleDateString();
  const text = document.getElementById("comment").value;

  const inputComment = { name, timestamp, text };
  console.log(inputComment);

  addNewComment(inputComment);

  document.getElementById("myForm").reset();

  const commentsDiv = document.getElementById("comments");
  removeAllChildNodes(commentsDiv);

  for (let index = 0; index < comments.length; index++) {
    console.log(comments[index]);
    displayComment(comments[index]);
  }
}

window.addEventListener("DOMContentLoaded", (event) => {
  const el = document.getElementById("myForm");
  if (el) {
    el.addEventListener("submit", functSubmit);
  }
});

function addNewComment(inputComment) {
  comments.unshift(inputComment);
  console.log(comments);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    console.log(parent.firstChild);
    parent.removeChild(parent.firstChild);
  }
}

//TODO add the new child details flexblox into js
