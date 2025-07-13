var showMoreBtn = document.querySelector(".ShowMore");

showMoreBtn.addEventListener("click", function () {
  var hiddenProducts = document.querySelectorAll(".boxin.hidden");

  if (hiddenProducts.length > 0) {
    for (var i = 0; i < hiddenProducts.length; i++) {
      hiddenProducts[i].classList.remove("hidden");
    }
    showMoreBtn.textContent = "Show Less";
  } else {
    var allProducts = document.querySelectorAll(".boxin");
    for (var j = 8; j < allProducts.length; j++) {
      allProducts[j].classList.add("hidden");
    }
    showMoreBtn.textContent = "Show More";
  }
});


function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.width === "250px") {
    sidebar.style.width = "0";
  } else {
    sidebar.style.width = "250px";
  }
}


let currentIndex = 0;

function moveSlide(direction) {
  const slider = document.getElementById("sliderTrack");
  const slideWidth = slider.querySelector("img").clientWidth + 20;
  const maxIndex = slider.children.length - 1;

  currentIndex += direction;

  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > maxIndex) currentIndex = maxIndex;

  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  
}
