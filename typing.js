// List of sentences
var _CONTENT = [
  "Passionate Developer",
  "Front End Developer",
  "React Developer",
  "Dedicated Programmer",
  "UI Designer",
];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Cursor element
var _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() {
  // Get substring with 1 characater added
  var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
  _ELEMENT.innerHTML = text;
  _PART_INDEX++;

  // If full sentence has been displayed then start to delete the sentence after some time
  if (text === _CONTENT[_PART]) {
    // Hide the cursor
    _CURSOR.style.display = "none";

    clearInterval(_INTERVAL_VAL);
    setTimeout(function () {
      _INTERVAL_VAL = setInterval(Delete, 62);
    }, 2000);
  }
}

// Implements deleting effect
function Delete() {
  // Get substring with 1 characater deleted

  var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
  _ELEMENT.innerHTML = text;
  _PART_INDEX--;

  // If sentence has been deleted then start to display the next sentence
  if (text === "") {
    clearInterval(_INTERVAL_VAL);

    // If current sentence was last then display the first one, else move to the next
    if (_PART == _CONTENT.length - 1) _PART = 0;
    else _PART++;

    _PART_INDEX = 0;

    // Start to display the next sentence after some time
    setTimeout(function () {
      _CURSOR.style.display = "inline-block";
      _INTERVAL_VAL = setInterval(Type, 90);
    }, 100);
  }
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 86);
