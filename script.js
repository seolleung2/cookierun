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
