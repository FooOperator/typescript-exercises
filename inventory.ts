import { isEqual } from "lodash"

type Item = {
    name: string,
    price: number
}

type StackableItem = Item & { maxStack: number }

const t_bottle : Item = {
    name: "Bottle",
    price: 650
}

const t_stick : Item = {
    name: "Magic Stick",
    price: 200
}

const t_clarity : StackableItem = {
    name: "Clarity",
    price: 50,
    maxStack: 10
}

interface IInventory {
    slots: {
        [key: string]: undefined | Item | {StackableItem: StackableItem, currentStack: number}
    }

    displayItems?: () => void 
    evalutation?: () => number
}

function isItem(slot: any): slot is Item {
    return (<Item>slot).name !== undefined
}


class Inventory implements IInventory {
    slots: { 
        [key: string]: Item | {StackableItem: StackableItem, currentStack: number}; 
    }

    constructor(data : IInventory) {
        this.slots = data.slots
    }

    displayItems = () => {
        for (const slot in this.slots) {
            const currentItem = this.slots[slot]
            if (isItem(currentItem)) {
                console.log(`Name: ${(<Item>currentItem).name}`)
            } else {
                console.log(`Name: ${currentItem.StackableItem.name} ${currentItem.currentStack > 1 ? `(${currentItem.currentStack})` : ''}`)
            }
        }
    }
    evalutation = () => {
        let value = 0
        for (const slot in this.slots) {
            const currentItem = this.slots[slot]
            if (isItem(currentItem)) {
                value += (<Item>currentItem).price
            } else {
                value += currentItem.StackableItem.price * currentItem.currentStack
            }
        }
        return value
    }

}

const d_inventory1 : IInventory = {
    slots: {
        'Slot 1': t_bottle,
        'Slot 2': { StackableItem: t_clarity, currentStack: 1 },
        'Slot 3': t_stick,
        'Slot 4': { StackableItem: t_clarity, currentStack: 9 }
    },
    
}

const inventory1 = new Inventory(d_inventory1)

let display = inventory1.displayItems
let result = inventory1.evalutation
console.log(result())
console.log(display())