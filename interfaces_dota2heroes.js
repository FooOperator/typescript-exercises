var DotaAbility = /** @class */ (function () {
    function DotaAbility() {
    }
    return DotaAbility;
}());
var DotaHero = /** @class */ (function () {
    function DotaHero(data) {
        this.name = data.name;
        this.range = data.range;
        this.mainAttribute = data.mainAttribute;
        this.strengthGainPerLevel = data.strengthGainPerLevel;
        this.agilityGainPerLevel = data.agilityGainPerLevel;
        this.intelligenceGainPerLevel = data.intelligenceGainPerLevel;
        this.abilities = data.abilities;
    }
    DotaHero.prototype.displayAbilities = function () {
        for (var key in this.abilities) {
            var element = this.abilities[key]['name'];
            console.log("".concat(key, ": ").concat(element));
        }
    };
    return DotaHero;
}());
var ability_quas = {
    name: "Quas",
    cooldown: 0,
    castType: ["No Target"],
    affects: ["Self"]
};
var ability_wex = {
    name: "Wex",
    cooldown: 0,
    castType: ["No Target"],
    affects: ["Self"]
};
var ability_exort = {
    name: "Exort",
    cooldown: 0,
    castType: ["No Target"],
    affects: ["Self"]
};
var ability_invokedSpell = {
    name: "Empty Spell Slot",
    cooldown: 0,
    castType: undefined,
    affects: undefined
};
var ability_invoke = {
    name: "Invoke",
    cooldown: 6,
    castType: ["No Target"],
    affects: ["Self"]
};
var invokerAbilities = [ability_quas, ability_wex, ability_exort, ability_invoke, ability_invokedSpell];
var invoker = {
    name: "Invoker",
    range: "Ranged",
    mainAttribute: "Intelligence",
    strengthGainPerLevel: 1.4,
    agilityGainPerLevel: 1.2,
    intelligenceGainPerLevel: 4.4,
    abilities: {
        Q: invokerAbilities[0],
        W: invokerAbilities[1],
        E: invokerAbilities[2],
        R: invokerAbilities[3],
        D: invokerAbilities[4],
        F: invokerAbilities[4]
    }
};
var hero_invoker = new DotaHero(invoker);
console.log(!hero_invoker);
console.log(hero_invoker.name);
console.log(hero_invoker.range);
console.log(hero_invoker.mainAttribute);
console.log(hero_invoker.displayAbilities());
