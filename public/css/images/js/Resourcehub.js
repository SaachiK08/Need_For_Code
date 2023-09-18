const fundsSection = document.querySelector(".funds");
const datesSection = document.querySelector(".dates");
const locationSection = document.querySelector(".location");
const degreeSection = document.querySelector(".degree");

// Function to deactivate all sections except the clicked one
function deactivateSections(activeSection) {
  const allSections = [fundsSection, datesSection, locationSection, degreeSection];
  
  allSections.forEach((section) => {
    if (section !== activeSection) {
      section.classList.remove("filter-extend");
    }
  });
}

fundsSection.addEventListener("click", () => {
  fundsSection.classList.toggle("filter-extend");
  deactivateSections(fundsSection);
});

datesSection.addEventListener("click", () => {
  datesSection.classList.toggle("filter-extend");
  deactivateSections(datesSection);
});

locationSection.addEventListener("click", () => {
  locationSection.classList.toggle("filter-extend");
  deactivateSections(locationSection);
});

degreeSection.addEventListener("click", () => {
  degreeSection.classList.toggle("filter-extend");
  deactivateSections(degreeSection);
});

const checkboxes = document.querySelectorAll("input[type=checkbox]");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", (event) => {
    event.stopPropagation(); 
    
  });
});

const removeFilterButton = document.querySelector(".remove-filter");

const check_boxes = document.querySelectorAll("input[type=checkbox]");


removeFilterButton.addEventListener("click", () => {
  check_boxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
});

const rightArrow = document.querySelectorAll('.right-arrow');
const leftArrow = document.querySelectorAll('.left-arrow');
const uniInfoDivs = document.querySelectorAll('.uni-info');
let currentIndex = 0;
let translateXValue = 0;

function slideLeft() {
  if (currentIndex > 0) {
    currentIndex--;
    translateXValue += 100;
    uniInfoDivs.forEach((div, index) => {
      div.style.transform = `translateX(${translateXValue}%)`;
    });
  }
}

function slideRight() {
  if (currentIndex < uniInfoDivs.length - 1) {
    currentIndex++;
    translateXValue -= 100;
    uniInfoDivs.forEach((div, index) => {
      div.style.transform = `translateX(${translateXValue}%)`;
    });
  }
}

rightArrow.forEach((button) => {
  button.addEventListener('click', slideRight);
});

leftArrow.forEach((button) => {
  button.addEventListener('click', slideLeft);
});
