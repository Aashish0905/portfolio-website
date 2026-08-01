
console.log("Portfolio Website Loaded Successfully");



const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});



const text = [
  "Frontend Developer",
  "Web Designer",
  "JavaScript Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

  if(count === text.length){
      count = 0;
  }

  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".hero h3").textContent = letter;

  if(letter.length === currentText.length){
      count++;
      index = 0;
      setTimeout(type,1500);
  }
  else{
      setTimeout(type,100);
  }

})();