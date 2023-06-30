console.log("loaded");
let arr = []

function counting(userInput) {
  for (let index = 0; index <= userInput; index++) {
    arr[index] = index;

    if (arr.includes(3)) {
      arr[index] = "neighbor"
    } else if (arr.includes(2)) {
      arr[index] = "boop"
    } else if (arr.includes(1)) {
      arr[index] = "beep"
    } else {
      arr[index] = index
    }

  }
  console.log(arr);


}

