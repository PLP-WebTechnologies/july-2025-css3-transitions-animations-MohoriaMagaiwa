// Part 2: Functions - Scope, Parameters & Return
function showMessage(msg) {
  document.getElementById("message").textContent = msg;
}

// Example of local vs global scope
let globalVar = "I am Global!";

function scopeExample() {
  let localVar = "I am Local!";
  console.log(globalVar); // Accessible
  console.log(localVar);  // Only inside this function
}
scopeExample();

// Function with parameters & return value
function calculateSquare(num) {
  return num * num;
}
console.log("Square of 5:", calculateSquare(5));

// Part 3: Combining CSS & JS
function toggleBox() {
  const box = document.querySelector(".magic-box");
  box.classList.toggle("active");
}
