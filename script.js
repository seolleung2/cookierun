const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

// console.log(document);
// console.dir(document);
const title = document.querySelector("#title");
console.dir(title);
const superEventHandler = {
  mouseOver: function () {
    title.style.color = colors[0];
    title.innerHTML = "앗? 제목에 마우스를 가져다 댔네요!🐹";
  },
  mouseLeft: function () {
    title.style.color = colors[1];
    title.innerHTML = "제목에서 마우스 커서가 멀어졌어요!🦉";
  },
  handleResized: function () {
    title.style.color = colors[2];
    title.innerHTML = "창 크기를 조절했어요! 😝";
  },
  rightClick: function () {
    title.style.color = colors[3];
    title.innerHTML = "우클릭해서 뭐 퍼가려고요?😤";
  },
};

title.addEventListener("mouseover", superEventHandler.mouseOver);
title.addEventListener("mouseleave", superEventHandler.mouseLeft);
window.addEventListener("resize", superEventHandler.handleResized);
window.addEventListener("contextmenu", superEventHandler.rightClick);

const midtitle = document.querySelector("#midtitle");

// const BASE_COLOR = "rgb(127, 140, 141)";
// const OTHER_COLOR = "rgb(22, 160, 133)";

// function clickMidTitle() {
//   const CURRENT_COLOR = midtitle.style.color;
//   if (CURRENT_COLOR === BASE_COLOR) {
//     midtitle.style.color = OTHER_COLOR;
//   } else {
//     midtitle.style.color = BASE_COLOR;
//   }
// }

// function init() {
//   midtitle.style.color = BASE_COLOR;
//   midtitle.addEventListener("click", clickMidTitle);
// }

// init();

const CLICKED_CLASS = "clicked";

// function handleClick() {
//   const currentClass = midtitle.className;
//   if (currentClass !== CLICKED_CLASS) {
//     midtitle.className = CLICKED_CLASS;
//   } else {
//     midtitle.className = " ";
//   }
// }

// function handleClick() {
//   const hasClass = midtitle.classList.contains(CLICKED_CLASS);

//   if (hasClass) {
//     midtitle.classList.remove(CLICKED_CLASS);
//   } else {
//     midtitle.classList.add(CLICKED_CLASS);
//   }
// }

function handleClick() {
  midtitle.classList.toggle(CLICKED_CLASS);
}

midtitle.addEventListener("click", handleClick);
