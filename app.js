// let myButtonElement = document.querySelector("#myButton");
let myInput = document.querySelector("#myInput");
let screenParagraph = document.querySelector("#myPara");
let form = document.querySelector("#weatherForm");
// let text = "<h1>hello</h1>"; //prompt("enter you name");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  let temp = Number(myInput.value); // temperature

  let condition = temp > 25;

  // console.log("🚀 ~ condition:", condition);

  if (condition) {
    screenParagraph.innerText = "SUMMER";

    console.log("SUMMER");
  } else {
    screenParagraph.innerText = "WINTER";

    console.log("WINTER");
  }

});