let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let carouselDom = document.querySelector(".carousel");
let listItemDom = document.getElementById("list");
let thumbnailDom = document.getElementById("thumbnail");

const slides = [
  {
    img: "image/img1.jpg",
    author: "Karan",
    title: "Forgotten Love",
    topic: "Novel",
    des: "The writer of the Novel \"Forgotten Love\" is Karan Negi. This Novel is art of fiction and the whole story moves around three people named Rishi, Gaurav and Mehak. Rishi is helping Gaurav to impress Mehak. Mehak is in her dark phase and completely disconnected from world. Gaurav is trying hard to convience her for proposal. But Rishi suddenly fades away into the air. What will happen now? ",
  },
  {
    img: "image/img2.jpg",
    author: "Rishi",
    title: "Friend",
    topic: "Mystery",
    des: "Rishi is the mysterious guy about whom no body knows. There is no proof of his existence. Rishi is the guy who knows everything about everyone. How? Do you think he is the Undercover agent who was on the mission or if it was a ghost?",
  },
  {
    img: "image/img3.jpg",
    author: "Gaurav",
    title: "The Guy in Love",
    topic: "Romance",
    des: "This is the guy about whom you will be listening about in the whole story. How a failure becomes the topper. The journey of a loser to the Lover.",
  },
  {
    img: "image/img4.jpg",
    author: "Mehak",
    title: "The Final Chapter",
    topic: "Thriller",
    des: "The leading girl of the story, whose past is still a mystery. She is a simple girl who is living her corporate life while maintaining social distance by disconnecting with the world. Could you imagine her life? And now a guy named Gaurav comes in her life. Will he be able to change her life?",
  },
];

function generateSlides() {
  listItemDom.innerHTML = "";
  thumbnailDom.innerHTML = "";

  slides.forEach((slide, index) => {
    let item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `
      <img src="${slide.img}" alt="" />
      <div class="content">
        <div class="author">${slide.author}</div>
        <div class="title">${slide.title}</div>
        <div class="topic">${slide.topic}</div>
        <div class="des">${slide.des}</div>
        <div class="buttons">
          <button>SEE MORE</button>
          <button>SUBSCRIBE</button>
        </div>
      </div>
    `;
    listItemDom.appendChild(item);

    let thumbnailItem = document.createElement("div");
    thumbnailItem.classList.add("item");
    thumbnailItem.innerHTML = `
      <img src="${slide.img}" alt="" />
      <div class="content">
        <div class="title">Name Slider</div>
        <div class="des">Description</div>
      </div>
    `;
    thumbnailDom.appendChild(thumbnailItem);
  });
}

nextDom.onclick = function () {
  showSlider("next");
};
prevDom.onclick = function () {
  showSlider("prev");
};

let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(() => {
  nextDom.click();
}, timeAutoNext);

function showSlider(type) {
  let itemSlider = document.querySelectorAll(".carousel .list .item");
  let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");

  if (type === "next") {
    listItemDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
    carouselDom.classList.add("next");
  } else {
    let positionLastItem = itemSlider.length - 1;
    listItemDom.prepend(itemSlider[positionLastItem]);
    thumbnailDom.prepend(itemThumbnail[positionLastItem]);
    carouselDom.classList.add("prev");
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRunning);

  clearTimeout(runAutoRun);
  runAutoRun = setTimeout(() => {
    nextDom.click();
  }, timeAutoNext);
}

document.addEventListener("DOMContentLoaded", generateSlides);
