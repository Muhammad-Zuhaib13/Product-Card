const btnViews = document.querySelectorAll(".btnView");
const imgContainersTwo = document.querySelectorAll(".img-container-two");

// Add event listeners to each button
btnViews.forEach((btnView, index) => {
  btnView.addEventListener("mouseover", () => {
    showImgDiv(index);
  });
  btnView.addEventListener("mouseout", () => {
    hideImgDiv(index);
  });
});

// Show the image container for the specified index
const showImgDiv = (index) => {
  imgContainersTwo[index].classList.add("change-z-index-pos");
  imgContainersTwo[index].classList.remove("change-z-index-neg");
};

// Hide the image container for the specified index
const hideImgDiv = (index) => {
  imgContainersTwo[index].classList.remove("change-z-index-pos");
  imgContainersTwo[index].classList.add("change-z-index-neg");
};
