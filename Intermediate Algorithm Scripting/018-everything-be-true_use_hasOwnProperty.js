function truthCheck(collection, pre) {
  // Iterate through each object in the collection
  for (let i = 0; i < collection.length; i++) {
    // Check if the object has the property and its value is truthy
    if (!collection[i].hasOwnProperty(pre) || !collection[i][pre]) {
      return false;
    }
  }
  // If all objects have the property and its value is truthy, return true
  return true;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");