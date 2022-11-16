const arr = [];
function makeNode() {
  var llSize = parseInt(document.getElementById("ll-size").value);
  var values = document.getElementById("values").value;
  var numbers = values.split(" ");

  for(let i=0; i < numbers.length; i++) {
    numbers[i] = parseInt(numbers[i]);
    arr[i] = parseInt(numbers[i]);
  }

   if(llSize != numbers.length) alert("Enter proper number of values");
  else {
    var outerDiv = document.getElementById("outerdiv");
    for(let i=0; i < numbers.length; i++) {
      setTimeout(function() {
        var innerDiv = document.createElement("div");
        var innermostDiv = document.createElement("div");
        var arrowDiv = document.createElement("div");
        innerDiv.classList.add("inner-div");
        innermostDiv.classList.add("innermost-div");
        arrowDiv.classList.add("arrow-div");
        outerDiv.appendChild(innerDiv);
        innerDiv.innerHTML = numbers[i];
        innerDiv.style.backgroundColor = "lightgray";
        innerDiv.appendChild(innermostDiv);
        outerDiv.appendChild(arrowDiv);
        if(i < numbers.length -1) arrowDiv.innerHTML = "➡";
      },i*1000);
    }
  }
}

function display() {
  let last = arr.pop();
  arr.unshift(last);

  var outerDiv = document.getElementById("outerdiv");
  outerDiv.innerHTML = "";
  for(let i=0; i < arr.length; i++) {
    var innerDiv = document.createElement("div");
    var innermostDiv = document.createElement("div");
    var arrowDiv = document.createElement("div");
    innerDiv.classList.add("inner-div");
    innermostDiv.classList.add("innermost-div");
    arrowDiv.classList.add("arrow-div");
    outerDiv.appendChild(innerDiv);
    innerDiv.innerHTML = arr[i];
    innerDiv.style.backgroundColor = "lightgray";
    innerDiv.appendChild(innermostDiv);
    outerDiv.appendChild(arrowDiv);
    if(i < arr.length -1) arrowDiv.innerHTML = "➡";
    if(i == 0) innerDiv.style.backgroundColor = "aqua";
  }
}



function rotate() {
  let size = parseInt(document.getElementById("ll-size").value);
  let lastElement = document.getElementsByClassName("inner-div")[size-1];
  let arrow = document.getElementsByClassName("arrow-div")[size-2];
  lastElement.style.backgroundColor = "green";
  lastElement.classList.add("move-div", "inner-div-last");
  lastElement.classList.remove("inner-div");
  arrow.classList.add("arrow-div-move", "arrow-div-last");
  arrow.classList.remove("arrow-div");

  let restElement = document.querySelectorAll(".inner-div");
  let restArrow = document.querySelectorAll(".arrow-div");
  for(const box of restElement) {
    box.classList.add("move-divAll");
  }
  for(const arrow of restArrow) {
    arrow.classList.add("move-arrow");
  }
  setTimeout(function() {
    display();
  }, 5000);
}

function clearData() {
  var outerDiv = document.getElementById("outerdiv").innerHTML = '';
  var values = document.getElementById("values").value = '';
  var size = document.getElementById("ll-size").value = '';
}
