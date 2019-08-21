const LinkedList = require('./linkedListClass');
const { display, size, isEmpty, findPrevious, findLast } = require('./linkedListFunctions');

/* Mystery Program
Loops through the node and removes the duplicate values
Big O: O(n^2)*/

// Reverse a List \\

function reverseList(list) {
    let currNode = list.head;
    let previousNode = null;
    let nextNode = list.head;

    while (currNode !== null) {
        nextNode = currNode.next;
        currNode.next = previousNode;
        previousNode = currNode;
        currNode = nextNode;
    }
    list.head = previousNode;
}

// 3rd from the end \\

    function thirdFromEnd(list) {
        if (!list.head || !list.head.next.next) {
            return null;
        }

        let currNode = list.head;
        while (currNode.next.next.next !== null) {
            currNode = currNode.nextl
        }

        console.log(`The 3rd item from the end is ${currNode.value}`);
    }

    function main() {
        let SLL = new LinkedList();
        SLL.insertLast('Apollo');
        SLL.insertLast('Boomer');
        SLL.insertLast('Helo');
        SLL.insertLast('Husker');

        display(SLL);
        reverseList(SLL);
        display(SLL);
        thirdFromEnd(SLL);
        display(SLL);
    }
        main();