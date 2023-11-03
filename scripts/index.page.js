function displayComment(comment) {
  const commentsDiv = document.getElementById("comments");

  const divElement = document.createElement("div");
  divElement.classList.add("testimony__comments");

  const avatarElement = document.createElement("div");
  avatarElement.classList.add("testimony__comments__avatar");
  divElement.appendChild(avatarElement);

  const divisionElement = document.createElement("div");
  divisionElement.classList.add("testimony__division");
  divElement.appendChild(divisionElement);

  const detailsElement = document.createElement("div");
  detailsElement.classList.add("testimony__division__details");
  divisionElement.appendChild(detailsElement);

  const header = document.createElement("h4");
  header.classList.add("testimony__division__details__fans");
  header.textContent = comment.name;
  detailsElement.appendChild(header);

  const date = document.createElement("p");
  date.classList.add("testimony__division__details__date");
  date.textContent = convertTimestampToDate(comment.timestamp);
  detailsElement.appendChild(date);

  const paragraph = document.createElement("p");
  paragraph.classList.add("testimony__division__article");
  paragraph.textContent = comment.comment;
  divisionElement.appendChild(paragraph);

  commentsDiv.appendChild(divElement);
}

function convertTimestampToDate(timestamp) {
  let date = new Date(timestamp);
  return date.toLocaleDateString();
}

function functSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const timestamp = new Date().toLocaleDateString();
  const comment = document.getElementById("comment").value;

  const inputComment = { name, comment };
  addNewComment(inputComment);

  document.getElementById("myForm").reset();

  const commentsDiv = document.getElementById("comments");
  removeAllChildNodes(commentsDiv);

  retrieveAndDisplayComments();
}

window.addEventListener("DOMContentLoaded", (event) => {
  const el = document.getElementById("myForm");
  if (el) {
    el.addEventListener("submit", functSubmit);
  }
  const comments = document.getElementById("comments");
  if (comments) {
    retrieveAndDisplayComments();
  }
});

function addNewComment(inputComment) {
  const addNewCommentToAPI = axios
    .post(
      "https://project-1-api.herokuapp.com/comments?api_key=7808a60f-f0a0-4469-8bfe-db68f24f6b64",
      {
        name: inputComment.name,
        comment: inputComment.comment,
      }
    )
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function retrieveAndDisplayComments() {
  let dataAPI = {};
  const retrieveCommentsPromisse = axios
    .get(
      "https://project-1-api.herokuapp.com/comments?api_key=7808a60f-f0a0-4469-8bfe-db68f24f6b64"
    )
    .then(
      (result) => {
        dataAPI = result.data;
        dataAPI.forEach((comment) => {
          displayComment(comment);
        });
      },
      (error) => {
        console.log(error);
      }
    );
}
