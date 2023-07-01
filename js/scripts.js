console.log("loaded");
// User Interface Logic

function handleSubmit(event) {
  event.preventDefult();

  let inputUser = document.querySelector("#numberInput").value
}

// Business Logic
let arr = []

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

