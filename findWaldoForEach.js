var waldoIndex = [];
function findWaldo(arr, found) {
  arr.forEach(function (name) {

    if (name === "Waldo") {
      waldoIndex.push(arr.indexOf(name));
      found();

         // execute callback
    }

  });

}

function actionWhenFound() {
  console.log("Found Waldo at index " + waldoIndex);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);