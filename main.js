let shareBtn = document.querySelector(".share-icon");
let shareBtnSvg = document.querySelector(".share-icon svg path");
let shareWindow = document.querySelector(".share-window");

shareBtn.onclick = () => {
  shareWindow.classList.toggle("active");
  shareBtn.classList.toggle("icon-active");
  if (shareWindow.classList.contains("active")) {
    shareBtnSvg.style.cssText = "fill: white;";
  } else {
    shareBtnSvg.style.cssText = "fill: #6E8098;";
  }
};

