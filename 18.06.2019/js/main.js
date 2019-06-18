"use strict";

const showToaster = document.getElementsByClassName("show-toaster")[0];
const titleInput = document.getElementById("title");
const messageInput = document.getElementById("message");

showToaster.onclick = function() {
  const title = titleInput.value.trim();
  const message = messageInput.value.trim();

  if (title !== "" && message !== "") {
    //create toaster

    //get background color from input radios
    const bgColorClass = document.querySelector("input[name=toastType]:checked")
      .value;
    const positionClass = document.querySelector("input[name=position]:checked")
      .value;

    Toaster(title, message, bgColorClass, positionClass, 3);
  }
};

function Toaster(title, message, bgClass, position, duration) {
  const toaster = document.createElement("div");
  toaster.classList.add("toaster", bgClass, position);

  const titleTag = document.createElement("h4");
  titleTag.innerText = title;

  const messageTag = document.createElement("p");
  messageTag.innerText = message;

  const progressBar = document.createElement("div");
  progressBar.classList.add("progres", "progres-animate");

  const closeIcon = document.createElement("i");
  closeIcon.classList.add("fas", "fa-times", "close_it_baby");

  closeIcon.onclick = function() {
    toaster.remove();
  };

  toaster.appendChild(titleTag);
  toaster.appendChild(messageTag);
  toaster.appendChild(progressBar);
  toaster.appendChild(closeIcon);

  document.body.appendChild(toaster);

  const timeoutFunc = setTimeout(() => {
    toaster.remove();
  }, duration * 1000);

  toaster.onmouseover = function() {
    progressBar.remove();
    clearTimeout(timeoutFunc);
  };
}
