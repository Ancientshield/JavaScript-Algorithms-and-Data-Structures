function Bird(name) {
	this.name = name;
	this.numLegs = 2;
}

let canary = new Bird('Tweety');
let ownProps = [];
// Only change code below this line
// 只是用 hasOwnProperty 確認物件中是否有此屬性，有的話回傳 true，然後 push 進 Array 內
for (let property in canary) {
	if (canary.hasOwnProperty(property)) {
		ownProps.push(property);
	}
}
