type DotaRole =  'Carry' | 'Mid' | 'Core' | 'Support' | 'Hard Support'
type DotaRank = 'Archon' | 'Guardian' | 'Herald' | 'Crusader' | 'Divine' | 'Immortal'

interface IPerson {
    first: string,
    last: string,
    age: number
}

interface IDotaPlayer {
    role: DotaRole,
    rank: DotaRank,
    matchesPlayed?: number
}

class Person implements IPerson {
    first: string
    last: string
    age: number

    displayPersonInfo() : void {}
}

class DotaPlayer extends Person implements IDotaPlayer {
    userName: string | undefined
    role: DotaRole
    rank: DotaRank
    matchesPlayed: number

    displayPersonInfo(): void {
        
    }
}

const person : Person = {
    first: "John",
    last: "Talbain",
    age: 22,
    displayPersonInfo: function (): void {
        console.log(
            `   
            First Name: ${this.first}\n
            Last Name: ${this.last}\n
            Age: ${this.age}\n
            `
        )
    }
}

const dotaPlayer : DotaPlayer = {
    first: "Lucas",
    last: "Guerra",
    age: 21,
    role: "Mid",
    rank: "Crusader",
    userName: "FX443",
    matchesPlayed: 1430,
    displayPersonInfo: function (): void {
        console.log(
            `
            First Name: ${this.first}\n
            Last Name: ${this.last}\n
            Age: ${this.age}\n
            User Name: ${this.userName}\n
            Role: ${this.role}\n
            Rank: ${this.rank}\n
            Matches Played: ${this.matchesPlayed === undefined ? 'Couldn\'t fetch' : this.matchesPlayed}\n
            `
        )
    }
}

dotaPlayer.displayPersonInfo()
person.displayPersonInfo()
