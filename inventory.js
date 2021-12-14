"use strict";
exports.__esModule = true;
var t_bottle = {
    name: "Bottle",
    price: 650
};
var t_stick = {
    name: "Magic Stick",
    price: 200
};
var t_clarity = {
    name: "Clarity",
    price: 50,
    maxStack: 10
};
function isItem(slot) {
    return slot.name !== undefined;
}
var Inventory = /** @class */ (function () {
    function Inventory(data) {
        var _this = this;
        this.displayItems = function () {
            for (var slot in _this.slots) {
                var currentItem = _this.slots[slot];
                if (isItem(currentItem)) {
                    console.log("Name: ".concat(currentItem.name));
                }
                else {
                    console.log("Name: ".concat(currentItem.StackableItem.name, " ").concat(currentItem.currentStack > 1 ? "(".concat(currentItem.currentStack, ")") : ''));
                }
            }
        };
        this.evalutation = function () {
            var value = 0;
            for (var slot in _this.slots) {
                var currentItem = _this.slots[slot];
                if (isItem(currentItem)) {
                    value += currentItem.price;
                }
                else {
                    value += currentItem.StackableItem.price * currentItem.currentStack;
                }
            }
            return value;
        };
        this.slots = data.slots;
    }
    return Inventory;
}());
var d_inventory1 = {
    slots: {
        'Slot 1': t_bottle,
        'Slot 2': { StackableItem: t_clarity, currentStack: 1 },
        'Slot 3': t_stick,
        'Slot 4': { StackableItem: t_clarity, currentStack: 9 }
    }
};
var inventory1 = new Inventory(d_inventory1);
var display = inventory1.displayItems;
var result = inventory1.evalutation;
console.log(result());
console.log(display());
