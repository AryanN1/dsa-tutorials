const HashMap = require('./HashMap');

function main() {
    const lotr = new HashMap();
    lotr.set('Hobbit', 'Bilbo');
    lotr.set('Hobbit', 'Frodo');
    lotr.set('Wizard', 'Gandolf');
    lotr.set('Human', 'Aragon');
    lotr.set('Elf', 'Legolas');
    lotr.set('Maiar', 'The Necromancer');
    lotr.set('Maiar', 'Sauron');
    lotr.set('RingBearer', 'Gollum');
    lotr.set('LadyOfLight', 'Galadriel');
    lotr.set('HalfElven', 'Arwen');
    lotr.set('Ent', 'Treebeard');
    console.log(lotr);
}

main();

//1. All items have been hashed, but some have been overwritten.
//b. Values: Sauron and Frodo. Replaced previously written values at those keys
//c. Capacity of hash table: 24, Capacity was tripled when the size was overrun.

//WhattDoesThisDo?
//Output of code: 20 and 10 because the same key is being used and overwritten. 


//Remove Duplicates
function removeDuplicates(string) {
    //New Hashmap
    const hash = new HashMap();
    let result = '';
    //Loop through whole string
    for (let i = 0; i < string.length; i++) {
        try {
            hash.get(string[i]);
        }
        catch (e) {
            hash.set(string[i], string[i]);
            result += string[i];
        }
    }
    console.log(`result: `, result);
}

removeDuplicates('google all that you think can think of');

/*5. Any permutation a palindrome
    Check whether any permuttation of a sttring is a palindrome. should give true or false*/

function palindrome(string) {
    const hash = new HashMap();
    for (let i = 0; i < string.length; i++) {
        try {
            let check = hash.get(string[i]);
            hash.set(string[i], ++check);
        }
        catch (e) {
            hash.set(string[i], 1);
        }
    }

    let odd = null;
    for (let i = 0; i < string.length; i++) {
        const charCount = hash.get(string[i]);
        if (charCount % 2 === 1) {

            if (odd === null || odd === string[i]) {
                odd = string[i];
            }
            else {
                return false;
            }
        }


    }
    return true;
};

/*6 Anagram Grouping
    Write an algorithm to group a list of words into anagrams*/

function anagramGrouping(array) {
    //Set results to empty array
    let result = [];
    const subArray = new Map();

    array.forEach(word => {
        //split, sort, THEN join
        const alphabetized = word.split('').sort().join('');
        //Sets current to get alphabetized
        let curr = subArray.get(alphabetized);
        if (curr === undefined) {
            subArray.set(alphabetized, [word]);
        }
        else {
            const array = [...curr, word];
            subArray.set(alphabetized, array);
        }
    }
);
    for (let value of subArray.values()) {
    //Push the value
    result.push(value);
    }


    return result;
}