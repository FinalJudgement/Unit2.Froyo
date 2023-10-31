// Prompt the user to give flavors seperated by commas

const getFroyoOrder = prompt(
  "Please provide Frozen Yogurt Flavors seperated by commas. Example: vanilla,chocolate,pistachio,vanilla,strawberry"
);
// Create an object in which to store orders
const order = {};

// Create a function that will take the prompt, and split it into an iterable array

const addOrders = (flavors) => {
  const flavorsArray = flavors.split(",");
  // iterate through the array of flavors
  for (flavor of flavorsArray) {
    // if the flavor doesn't exsist in the object yet. add the flavor to the order
    // else if the order already exsists in the orders list. just add 1 more order to that flavor
    !order[flavor] ? (order[flavor] = 1) : order[flavor]++;
  }
};

addOrders(getFroyoOrder);

console.table(order);
