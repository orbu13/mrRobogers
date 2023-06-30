console.log("loaded");
let arr = []

function counting(userInput) {
  for (let index = 0; index <= userInput; index++) {
    arr[index] = index;
  }

  if (arr === 1) {
    arr[1] = "beep"
    console.log(arr[1]);
  }
}

