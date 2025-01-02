/*

Observe the index.html page.

It has:

A heading <h1> with the id "mainHeading"
A paragraph <p> element with the id "description"
A <div> element with the id "colorBox" that will act as a "box."

Without making any changes to the html, write JavaScript that:

1) Changes the text content of the <h1> element from "Welcome to Color Changer!" to "DOM Manipulation is Fun!"
2) Changes the text content of the <p> element from "This is a simple DOM manipulation exercise." to "Look at how we changed the elements!"
3) Changes the background color of the <div> element to light blue and doubles its current size
4) Adds a new <p> element inside the <div> with the text: "This is a new paragraph inside the box!". */

//Your Code below

const heading = document.getElementById("mainHeading");
heading.textContent = "DOM Manipulation is Fun!";

const paragraph = document.getElementById("description");
paragraph.textContent = "Look at how we changed the elements!";

const box = document.getElementById("colorBox");
box.style.backgroundColor = "lightblue";

const newP = document.createElement("p");
newP.textContent = "This is a new paragraph inside the box!";
box.appendChild(newP);

function doubleSize() {
  const currentWidth = box.offsetWidth;
  const currentHeight = box.offsetHeight;

  box.style.width = currentWidth * 2 + "px";
  box.style.height = currentHeight * 2 + "px";
}
doubleSize(box);
