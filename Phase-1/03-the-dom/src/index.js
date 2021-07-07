//Create New Element in HTML
const newTag = function createElement(string) {
  return document.createElement(string);
};

//Create querySelector
const pick = function hTMLSelector(string) {
  return document.querySelector(string);
};

//Create querySelectorAll
const pickAll = function hTMLSelectorAll(string) {
  return document.querySelectorAll(string);
};

// Book Form Submit Event

pick("#book-form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  let newBook = {
    title: e.target.title.value,
    author: e.target.author.value,
    price: e.target.price.value,
    image_url: e.target.image_url.value,
    inventory: 0,
    reviews: [],
  };
  renderCard(newBook);
});

//Render ***********
function renderAside(storeObj) {
  //페이지 바꾸기
  // console.log(storeObj);
  pick(".location").textContent = storeObj.name;
  pick("#hours").textContent = storeObj.hours;
  // document.getElementById('hours').textContent = storeObj.hours
  // console.log(document.querySelectorAll("aside ul li"));
  pickAll("aside ul li")[0].textContent = storeObj.number;
  pickAll("aside ul li")[1].textContent = storeObj.address;
  // console.log(document.getElementsByTagName('div'))
}

function renderCard(book) {
  // make review ID

  // 데이터 받아와서 카드 민들기
  //Creating Container
  let li = newTag("li");
  let h4Title = newTag("h4");
  let h4Author = newTag("h4");
  let img = newTag("img");
  let pPrice = newTag("p");
  let pReviews = newTag("p");
  let pInventory = newTag("p");
  let btn = newTag("button");

  // Create ReviewForm
  let reviewForm = newTag("form");
  let labelUserID = newTag("label");
  let inputUserID = newTag("input");
  let labelContent = newTag("label");
  let inputContent = newTag("input");
  let reviewBtn = newTag("button");
  reviewForm.append(
    labelUserID,
    inputUserID,
    labelContent,
    inputContent,
    reviewBtn
  );

  // Adding Attributes to the Container
  li.className = "card";
  reviewForm.id = "review-form";
  reviewForm.className = "review-form";
  inputContent.type = "textarea";
  inputUserID.type = "text";
  inputUserID.id = "user_id";
  inputUserID.name = "user_id";
  inputContent.id = "content";
  inputContent.name = "content";
  reviewBtn.id = li.id;
  reviewBtn.className = "review";
  //Combining Containers
  li.append(
    img,
    h4Title,
    h4Author,
    pPrice,
    pInventory,
    pReviews,
    btn,
    reviewForm
  );
  pick("#book-list").append(li);

  //Getting Review Comments from Array
  const getOnlyComments = (book) =>
    book.reviews.map((review) => (review = review.content)).join("<br>");

  // Adding Data to Container
  img.src = book.image_url;
  h4Title.textContent = book.title;
  h4Author.textContent = book.author;
  pPrice.textContent = `Price: $ ${book.price}`;
  pReviews.innerHTML = getOnlyComments(book);
  pInventory.textContent = `In Stock: ${book.inventory}`;
  btn.textContent = "Add Inventory";

  // reviewForm Label Content
  labelUserID.textContent = "User ID";
  labelContent.textContent = "Comment";
  reviewBtn.textContent = "Submit";
  

  // Add Inventory when clicked
  btn.addEventListener("click", () => {
    book.inventory += 1;
    pInventory.textContent = `In Stock: ${book.inventory}`;
  });

  //Add reviews to data array
  function addReviewsToData(newReview) {
    let newReviewArray = book.reviews;
    newReviewArray.push(newReview);
    pReviews.innerHTML = getOnlyComments(book);
  }

  let rmBtn = newTag("button")
  rmBtn.innerText = "X"
  



  reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    let newReview = {
      user_id: e.target.user_id.value,
      content: e.target.content.value,
    };
    addReviewsToData(newReview);
    e.target.user_id.value = "";
    e.target.content.value = ""
  });
}

//Initial Render
function initialRender() {
  // 데이터 받아와서 각각의 펑션으로 뿌리기
  renderAside(bookStore);
  pick("#book-list li").remove();
  // bookStore.inventory.forEach(renderCard);
  // bookStore.inventory.forEach((book) => renderCard(book));
  bookStore.inventory.forEach((book, i) => {
    book.id = i + 1;
  });
  bookStore.inventory.forEach(renderCard);
}

initialRender();
