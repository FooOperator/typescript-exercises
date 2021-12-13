var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.displayPersonInfo = function () { };
    return Person;
}());
var DotaPlayer = /** @class */ (function (_super) {
    __extends(DotaPlayer, _super);
    function DotaPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DotaPlayer.prototype.displayPersonInfo = function () {
    };
    return DotaPlayer;
}(Person));
var person = {
    first: "John",
    last: "Talbain",
    age: 22,
    displayPersonInfo: function () {
        console.log("   \n            First Name: ".concat(this.first, "\n\n            Last Name: ").concat(this.last, "\n\n            Age: ").concat(this.age, "\n\n            "));
    }
};
var dotaPlayer = {
    first: "Lucas",
    last: "Guerra",
    age: 21,
    role: "Mid",
    rank: "Crusader",
    userName: "FX443",
    matchesPlayed: 1430,
    displayPersonInfo: function () {
        console.log("\n            First Name: ".concat(this.first, "\n\n            Last Name: ").concat(this.last, "\n\n            Age: ").concat(this.age, "\n\n            User Name: ").concat(this.userName, "\n\n            Role: ").concat(this.role, "\n\n            Rank: ").concat(this.rank, "\n\n            Matches Played: ").concat(this.matchesPlayed === undefined ? 'Couldn\'t fetch' : this.matchesPlayed, "\n\n            "));
    }
};
dotaPlayer.displayPersonInfo();
person.displayPersonInfo();
