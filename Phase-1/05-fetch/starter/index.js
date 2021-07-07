// //Will run callback after dom has loaded
// document.addEventListener("DOMContentLoaded", () => {
//   fetchAllPokemon();
// });

const newTag = (string) => document.createElement(string);
const pick = (string) => document.querySelector(string);
const pickAll = (string) => document.querySelectorAll(string);

// // rendercards
// function renderSinglePokemon(pokemon) {
//   // create Element
//   // console.log(pokemon);
//   let divCard = newTag("div");
//   let divFrame = newTag("div");
//   let divImage = newTag("div");
//   let img = newTag("img");
//   let h1 = newTag("h1");

//   // create Attribute
//   divCard.className = "pokemon-card";
//   divFrame.className = "pokemon-frame";
//   divImage.className = "pokemon-image";
//   h1.className = "center-text";

//   // add content
//   img.src = pokemon.sprites.front;
//   h1.textContent = pokemon.name;

//   // combine element
//   divImage.append(img);
//   divFrame.append(divImage, h1);
//   divCard.append(divFrame);
//   // append to webpage
//   pick("#pokemon-container").append(divCard);

//   // Add Event Listner
//   divCard.addEventListener("click", () => showPokemon(pokemon.id));
// }

// function showPokemon(id) {
//   fetch(`http://localhost:3000/pokemon/${id}`)
//     .then((resp) => resp.json())
//     .then((json) => console.log(json));
// }

// // fetch All Pokemon
// function fetchAllPokemon() {
//   fetch("http://localhost:3000/pokemon")
//     .then((resp) => resp.json())
//     .then((json) => json.forEach(renderSinglePokemon));
// }

document.addEventListener("DOMContentLoaded", () => {
  fetchAllPokemon();
});

// rendercards
function renderSinglePokemon(pokemon) {
  // create Element
  // console.log(pokemon);
  let divCard = newTag("div");
  let divFrame = newTag("div");
  let divImage = newTag("div");
  let img = newTag("img");
  let h1 = newTag("h1");

  // create Attribute
  divCard.className = "pokemon-card";
  divFrame.className = "pokemon-frame";
  divImage.className = "pokemon-image";
  h1.className = "center-text";

  // add content
  img.src = pokemon.sprites.front;
  h1.textContent = pokemon.name;

  // combine element
  divImage.append(img);
  divFrame.append(divImage, h1);
  divCard.append(divFrame);
  // append to webpage
  pick("#pokemon-container").append(divCard);

  // create comment form
  let divForm = newTag("form");
  let labelNickName = newTag("label");
  let inputNickName = newTag("input");
  let labelComment = newTag("label");
  let inputComment = newTag("input");
  let submitBtn = newTag("button");

  labelNickName.textContent = "NickName";
  labelComment.textContent = "Comment";
  submitBtn.innerText = "submit";
  divForm.id = "review-form";
  inputNickName.name = "nickName";
  inputNickName.id = "nickName";
  inputComment.name = "comment";
  inputComment.id = "content";

  submitBtn.size = "20px";

  divForm.append(
    labelNickName,
    inputNickName,
    labelComment,
    inputComment,
    submitBtn
  );
  divCard.append(divForm);

  function postReviews(newReview) {
    // let divReview = newTag("div");
    let ulReview = newTag("ul");
    let liReview = newTag("li");
    let rmBtn = newTag("button");

    liReview.textContent = newReview.comment;
    liReview.className = "remove-item"
    rmBtn.innerText = "X";
    rmBtn.style.alignItems = "space-between"

    liReview.append(rmBtn)
    ulReview.append(liReview);
    

    divFrame.append(ulReview);
      // Remove Review
    rmBtn.addEventListener("click", (e) => {
      e.preventDefault()
      ulReview.remove()
    })
  }

  // Submit a Review Form
  divForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let newReview = {
      nickName: e.target.nickName.value,
      comment: e.target.comment.value,
    };
    postReviews(newReview);
    e.target.nickName.value = "";
    e.target.comment.value = "";
  });


  // Add Event Listener
  divFrame.addEventListener("click", () => showPokemon(pokemon.id));
}

function showPokemon(id) {
  fetch(`http://localhost:3000/pokemon/${id}`)
    .then((resp) => resp.json())
    .then((json) => console.log(json));
}

// fetch All Pokemon
function fetchAllPokemon() {
  fetch("http://localhost:3000/pokemon")
    .then((resp) => resp.json())
    .then((json) => json.forEach(renderSinglePokemon));
}
