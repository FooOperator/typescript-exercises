type DotaAttribute = 'Strength' | 'Agility' | 'Intelligence'
type CastType = 'Point' | 'No Target' | 'Channel' | 'Target Point' | 'Target Unit'
type Affectable = 'Enemies' | 'Self' | 'Allies' | 'Enemy Heroes' | 'Allied Heroes'
type Damage = 'Physical' | 'Magical' | 'Pure'
type DotaUnitRangeType = 'Melee' | 'Ranged' | 'Both'

interface IDotaAbility {
    name: string,
    manaCost?: number,
    cooldown: number,
    charges?: number,
    damage?: Damage,
    castType: [CastType] | undefined,
    affects: [Affectable] | undefined,

}

class DotaAbility implements IDotaAbility {
    name: string
    manaCost?: number
    cooldown: number
    charges?: number
    damage?: Damage
    castType: [CastType] | undefined
    affects: [Affectable] | undefined

}

interface IDotaHero {
    name: string,
    range: DotaUnitRangeType,
    mainAttribute: DotaAttribute,
    strengthGainPerLevel: number,
    agilityGainPerLevel: number,
    intelligenceGainPerLevel: number,
    abilities: {
        Q: DotaAbility,
        W: DotaAbility,
        E: DotaAbility,
        R: DotaAbility,
        D?: DotaAbility,
        F?: DotaAbility,
        T?: DotaAbility,
    },
    displayAbilities?(): void

}

class DotaHero implements IDotaHero {
    name: string
    range: DotaUnitRangeType
    mainAttribute: DotaAttribute
    strengthGainPerLevel: number
    agilityGainPerLevel: number
    intelligenceGainPerLevel: number
    abilities: {
        Q: DotaAbility,
        W: DotaAbility,
        E: DotaAbility,
        R: DotaAbility,
        D?: DotaAbility,
        F?: DotaAbility,
        T?: DotaAbility
    }

    constructor(data: DotaHero) {
        this.name = data.name
        this.range = data.range
        this.mainAttribute = data.mainAttribute
        this.strengthGainPerLevel = data.strengthGainPerLevel
        this.agilityGainPerLevel = data.agilityGainPerLevel
        this.intelligenceGainPerLevel = data.intelligenceGainPerLevel
        this.abilities = data.abilities
    }

    displayAbilities?(): void {
        for (const key in this.abilities) {
            const element = this.abilities[key]['name'];
            console.log(`${key}: ${element}`)
        }
    }

}

const ability_quas: DotaAbility = {
    name: "Quas",
    cooldown: 0,
    castType: ["No Target"],
    affects: ["Self"]
}

const ability_wex: DotaAbility = {
    name: "Wex",
    cooldown: 0,
    castType: ["No Target"],
    affects: ["Self"]
}

const ability_exort: DotaAbility = {
    name: "Exort",
    cooldown: 0,
    castType: ["No Target"],
    affects: ["Self"]
}

const ability_invokedSpell: DotaAbility = {
    name: "Empty Spell Slot",
    cooldown: 0,
    castType: undefined,
    affects: undefined
}

const ability_invoke: DotaAbility = {
    name: "Invoke",
    cooldown: 6,
    castType: ["No Target"],
    affects: ["Self"]
}

const invokerAbilities = [ability_quas, ability_wex, ability_exort, ability_invoke, ability_invokedSpell]

const invoker: DotaHero = {
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
}

let hero_invoker = new DotaHero(invoker)

console.log(!hero_invoker)
console.log(hero_invoker.name)
console.log(hero_invoker.range)
console.log(hero_invoker.mainAttribute)
console.log(hero_invoker.displayAbilities())