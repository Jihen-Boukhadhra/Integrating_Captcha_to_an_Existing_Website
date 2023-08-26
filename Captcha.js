// BMI = weight (in kg)/hight² (in cm)
const BMIData = [
  { name: "Slim", color: "midnightblue", range: [0, 18.5] },
  { name: "Good Health", color: "green", range: [18.5, 25] },
  { name: "Hyper Weight", color: "lightcoral", range: [25, 30] },
  { name: "Modered Obesity", color: "orange", range: [30, 35] },
  { name: "Severe Obesity", color: "crimson", range: [35, 40] },
  { name: "Morbid Obesity", color: "purple", range: [40,80] },
];
// Second Chance of Submit
const form = document.querySelector("form");
form.addEventListener("submit", handleForm);
function handleForm(e) {
  e.preventDefault();
  calculateBMI();
}
// BMI Calculator
const inputs = document.querySelectorAll("input");
function calculateBMI() {
  const height = inputs[0].value;
  const weight = inputs[1].value;
  if (!height || !weight || height <= 0 || weight <= 0) {
    handleError();
    return;
  }
  const BMI = (weight / Math.pow(height / 100, 2)).toFixed(1);
  showResult(BMI);
}

// Error Message
const displayBMI = document.querySelector(".bmi-value");
const result = document.querySelector(".result");
function handleError() {
  displayBMI.textContent = "Wops !";
  displayBMI.style.color = "Inherit";
  result.textContent = "Fill correctly the fields";}
// Print IBM
function showResult(BMI) {
  const rank = BMIData.find((data) => {
    if (BMI >= data.range[0] && BMI < data.range[1]) {
      return data;
    } else if (typeof data.range === "number" && BMI >= data.range) {
      return data;}});
  displayBMI.textContent = BMI;
  displayBMI.style.color = `${rank.color}`;
  result.textContent = `Result : ${rank.name}`;
  console.log(rank);}
// captcha code
let captcha;
function generate() {
	// Clear old input
	document.getElementById("submit").value = "";
	// Access the element to store
	// the generated captcha
	captcha = document.getElementById("image");
	let uniquechar = "";
	const randomchar =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	// Generate captcha for length of
	// 5 with random character
	for (let i = 1; i < 5; i++) {
		uniquechar += randomchar.charAt(
			Math.random() * randomchar.length)
	}
	// Store generated input
	captcha.innerHTML = uniquechar;
}
function printmsg() {
	const usr_input = document
		.getElementById("submit").value;

	// Check whether the input is equal
	// to generated captcha or not
	if (usr_input == captcha.innerHTML) {
		let s = document.getElementById("key")
		generate();
        alert("Matched"); 
	}
	else {
		let s = document.getElementById("key")
            generate();
        alert("Not Matched");}
}