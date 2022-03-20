let icon = document.querySelector(".icon");
let btn = document.querySelector(".navBtn");
let editMenu = document.querySelector(".editMenu");
let video_cards = document.querySelector(".videos");
let addBtn = document.querySelector(".addBtn");
let editBtn = document.querySelector(".editBtn");
let urlInput = document.querySelector(".urlInput");
let tittleInput = document.querySelector(".tittleInput");

btn.addEventListener("click", () => {
  icon.classList.toggle("fa-times");
  icon.classList.toggle("fa-bars");
  editMenu.classList.toggle("toggle");
});

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  videos.push({
    url: urlInput.value,
    tittle: tittleInput.value,
  });
  video_cards.textContent = "";
  videolarni_chiqarish();
  clr();
});
let qator = 3;
function videolarni_chiqarish() {
  let k = 0;

  for (let i = 0; i < qator; i++) {
    let card = document.createElement("div");
    card.classList.add("col-lg-4", "col-sm-6", "border", "card", "p-0", "my-3");
    card.style.height = "350px";

    let video_tag = document.createElement("iframe");
    video_tag.src = videos[i].url;
    video_tag.setAttribute("allowfullscreen", "");
    video_tag.classList.add("rounded-top");

    let h5 = document.createElement("h5");
    h5.innerText = videos[i].tittle;
    h5.classList.add("px-1", "py-3");

    let card_btn = document.createElement("button");
    card_btn.innerText = "Edit";
    card_btn.setAttribute("onclick", `edit_card(${k})`);
    card_btn.classList.add(
      "btn",
      "btn-danger",
      "w-75",
      "m-auto",
      "position-absolute",
      "bottom-0",
      "start-50",
      "translate-middle-x",
      "my-3"
    );
    card.appendChild(video_tag);
    card.appendChild(h5);
    card.appendChild(card_btn);
    video_cards.appendChild(card);
    k++;
  }
}

videolarni_chiqarish();

let qator_qoshish_btn = document.querySelector(".qator_qoshish");

qator_qoshish_btn.addEventListener("click", () => {
  if (qator < videos.length) {
    console.log(qator);
    qator += 3;
    video_cards.textContent = "";
    videolarni_chiqarish();
  } else {
    alert("Boshqa yoq aka");
    qator_qoshish_btn.style.display = "none";
  }
});

let index;
function edit_card(a) {
  index = a;
  editMenu.classList.remove("toggle");
  console.log(index + " " + videos.length);
  urlInput.value = videos[index].url;
  tittleInput.value = videos[index].tittle;
}

editBtn.addEventListener("click", (e) => {
  e.preventDefault();
  videos[index].url = urlInput.value;
  videos[index].tittle = tittleInput.value;
  video_cards.textContent = "";
  videolarni_chiqarish();
  clr();
});

function clr() {
  tittleInput.value = "";
  urlInput.value = "";
}
