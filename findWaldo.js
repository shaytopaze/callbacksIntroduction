var waldoIndex = [];
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {

    if (arr[i] === "Waldo") {
      waldoIndex.push(i);
      found();

         // execute callback
    }

  }
  waldoIndex.push(arr[i]);
}

function actionWhenFound() {
  console.log("Found Waldo at index " + waldoIndex);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);