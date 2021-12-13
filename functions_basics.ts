function add(x: number, y: number): number {
    return x + y
}

function concat(x: string, y: string): string {
    return `${x} ${y}`
}

function toThePowerOf(collection: Array<number>, desiredPower: number): Array<number> {
    let modifiedCollection: Array<number> = []
    collection.forEach(number => {
        modifiedCollection.push(number ** desiredPower)
    });
    return modifiedCollection;
}

function smallestAndLargest(collection: Array<number>): object {
    let smallest: number = 0
    let largest: number = 0
    collection.forEach(number => {
        if (number > largest) {
            largest = number
        } else if (number < smallest) {
            smallest = number
        }
    })
    return { smallest: smallest, largest: largest }
}

let add_result = add(1, 1)
let concat_result = concat('Hi', 'there')
let toThePowerOf_result = toThePowerOf([1, 2, 3], 2)
let smallestAndLargest_result: object = smallestAndLargest([2, 5, 3])


console.log(`add_result: ${add_result}\ntype ${typeof add_result}`)
console.log(`concat_result: ${concat_result}\ntype ${typeof concat_result}`)
console.log(`toThePowerOf_result: ${toThePowerOf_result}\ntype ${typeof toThePowerOf_result}`)
console.log(`smallest: ${smallestAndLargest_result['smallest']}\nlargest: ${smallestAndLargest_result['largest']} \ntype ${ typeof smallestAndLargest_result } `)
