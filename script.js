// Global scope variable
let globalCounter = 0;

// Function with parameters & return value
function calculateScale(base, multiplier) {
  return base * multiplier;
}

// Animate box on button click
document.getElementById("animateBtn").addEventListener("click", function() {
  const box = document.querySelector(".box");

  // Toggle animation
  box.classList.toggle("animate");

  // Use function
  globalCounter++;
  console.log("Box animated " + globalCounter + " times.");
  console.log("Scale result:", calculateScale(2, globalCounter));
});

// Card flip
document.getElementById("toggleCard").addEventListener("click", function() {
  const card = document.querySelector(".card");

  // Local scope example
  let flipMessage = "Card flipped!";
  card.classList.toggle("flipped");

  console.log(flipMessage);
});
