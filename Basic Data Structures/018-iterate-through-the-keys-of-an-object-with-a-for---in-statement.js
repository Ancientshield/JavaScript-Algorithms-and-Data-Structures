const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Only change code below this line
  let count = 0;
  for(let name in usersObj){
    if(usersObj[name].online === true){
      count ++;
    }
  }
  return count;
  // Only change code above this line
}

console.log(countOnline(users));