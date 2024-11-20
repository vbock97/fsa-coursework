
// creating a variable with objects and properties
const shoe = {
  brand: "converse",
  laces: true,
  velcro: false,
  color: "purple",
  activity: ["running", "fashion", "walking"],
  material: ["leather", "suede"],
  wear() {
    console.log("Wear shoe.");
  },
  clean: function () {
    console.log("Clean the shoe.");
  },
  size: ["s", "m", "l"]
};
console.table(shoe)
// Calling the variable shoe to see in the console what is properties of "shoe" are
// console.log(shoe.brand);
// console.log(shoe.activity[1]);
// shoe.wear();

// console.log(shoe.brand)
// This is changing the object "brand" 
// shoe.brand = "nike";
// Checking that it changed the brand of shoe
// console.log(shoe.brand);
//Removing an object from the variable
delete shoe.color

console.table(shoe)
//getting a values out of an array in the variable
for(const shoeSize in shoe.size){
    console.log(shoe.size[shoeSize])
}