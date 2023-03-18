let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line
// 用 function 使 兩個不同的物件共用同一個方法
const glideMixin = function(obj){
  obj.glide = function(){
    console.log('Gliding, wooosh!');
  }
}

glideMixin(bird);
glideMixin(boat);