function add(x, y) {
    return x + y;
}
function concat(x, y) {
    return "".concat(x, " ").concat(y);
}
function toThePowerOf(collection, desiredPower) {
    var modifiedCollection = [];
    collection.forEach(function (number) {
        modifiedCollection.push(Math.pow(number, desiredPower));
    });
    return modifiedCollection;
}
function smallestAndLargest(collection) {
    var smallest = 0;
    var largest = 0;
    collection.forEach(function (number) {
        if (number > largest) {
            largest = number;
        }
        else if (number < smallest) {
            smallest = number;
        }
    });
    return { smallest: smallest, largest: largest };
}
var add_result = add(1, 1);
var concat_result = concat('Hi', 'there');
var toThePowerOf_result = toThePowerOf([1, 2, 3], 2);
var smallestAndLargest_result = smallestAndLargest([2, 5, 3]);
console.log("add_result: ".concat(add_result, "\ntype ").concat(typeof add_result));
console.log("concat_result: ".concat(concat_result, "\ntype ").concat(typeof concat_result));
console.log("toThePowerOf_result: ".concat(toThePowerOf_result, "\ntype ").concat(typeof toThePowerOf_result));
console.log("smallest: ".concat(smallestAndLargest_result['smallest'], "\nlargest: ").concat(smallestAndLargest_result['largest'], " \ntype ").concat(typeof smallestAndLargest_result, " "));
