// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name)
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}

function appendCat(name) {
    const copyOfCats = [
        ...cats.slice(), 
        name
    ];
    return copyOfCats
}

function prependCat(name) {
    const copyOfCats = [
        name, 
        ...cats.slice()
    ];
    return copyOfCats
}

function removeLastCat(name) {
    const copyOfCats = [...cats.slice(0, -1)];
    return copyOfCats
}

function removeFirstCat(name) {
    const copyOfCats = [...cats.slice(1)];
    return copyOfCats
}