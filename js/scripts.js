console.log("loaded");

// User Interface Logic
let arr = []
let inputTag = document.querySelector("#numberInput");
let form = document.querySelector("form");


form.addEventListener('submit', function (event) {
  event.preventDefault();
  let userInput = inputTag.value;
  console.log(userInput);
  counting(userInput);
  let paragraph = document.querySelector("#display-result")
  paragraph.innerText = arr

})

// Business Logic
function counting(userInput) {
  for (let index = 0; index <= userInput; index++) {
    arr[index] = index.toString();

    if (arr[index].includes("3")) {
      arr[index] = "Won't you be my neighbor?!"
    } else if (arr[index].includes("2")) {
      arr[index] = "BOOP!"
    } else if (arr[index].includes("1")) {
      arr[index] = "BEEP!"
    } else {
      arr[index] = index.toString();
    }
  }
  console.log(arr);
}

