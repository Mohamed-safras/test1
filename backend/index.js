let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let size = array.length - 1;

const binarySearch = (value, array) => {
  let lower = 0;
  let upper = array.length - 1;

  while (lower <= upper) {
    let mid = Math.floor((lower + upper) / 2);
    if (value === array[mid]) {
      return mid;
    } else if (value > array[mid]) {
      lower = mid + 1;
    } else if (value < array[mid]) {
      upper = mid - 1;
    }
  }
  return "given value not in the array";
};

console.log(binarySearch(8, array));

const greenTea = () => "greenTea";
const blackTea = () => "blackTea";

const prepareTea = (teaType, numberOfTeas, price) => {
  let teaCups = [];

  for (let i = 0; i < numberOfTeas; i++) {
    const tea = teaType();

    teaCups.push({ name: tea, price });
  }
  return teaCups;
};

const tea1 = prepareTea(greenTea, 20, 30);
const tea2 = prepareTea(blackTea, 40, 50);

const tea = [...tea1, ...tea2];
console.log(tea);

const totalTeaCost = tea.reduce((total, teaCost) => {
  return total + teaCost.price;
}, 0);

console.log(`totalTeaCost is ${totalTeaCost}`);

const alphabeticalOrder = (array) => {
  return array.sort((a, b) => {
    return a > b ? 0 : a === b ? 0 : -1;
  });
};

console.log(alphabeticalOrder(["a", "a", "a", "a", "x", "t"]));

var globalArray = [1, -1, -4];

const nonMutatingSort = (arr) => {
  const newArray = [...arr];
  return newArray.sort((a, b) => a - b);
};

console.log(nonMutatingSort(globalArray));

function bubbleSort(arr) {
  const newArray = arr.slice();
  for (let i = 0; i < newArray.length - 1; i++) {
    for (let j = 0; j < newArray.length - 1 - i; j++) {
      if (newArray[j] > newArray[j + 1]) {
        let temp = newArray[j];
        newArray[j] = newArray[j + 1];
        newArray[j + 1] = temp;
        //swapping
        //[newArray[j], newArray[j + 1]] = [newArray[j + 1], newArray[j]];
      }
    }
  }
  return newArray;
}

console.log(bubbleSort(globalArray));

function urlSlug(title) {
  const url = title
    .split(" ")
    .filter((e) => e.trim().length)
    .join("-")
    .toLowerCase();
  return url;
}

console.log(urlSlug("Hold The Door"));
