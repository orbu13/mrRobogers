console.log("loaded");
let arr = []

function counting(userInput) {
  for (let index = 0; index <= userInput; index++) {
    arr[index] = index;

    if (arr[index] === 1) {
      arr[index] = "beep"
    } else if (arr[index] === 2) {
      arr[index] = "boop"
    } else if (arr[index] === 3) {
      arr[index] = "neighbor"
    } else {
      arr[index] = index
    }

  }
  console.log(arr);


}

