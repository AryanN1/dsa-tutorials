cont LinkedList = require('./linkedListClass');
const { display, size, isEmpty, findPrevious, findLast } = require('./linkedListFunctions')

function main() {
    let SLL = new LinkedList();

    SLL.insertLast('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    SLL.insertLast('Tauhida');

    SLL.remove('squirell');

    SLL.insertBefore('Athena', 'Boomer');
    SLL.insertAfter('Hotdog', 'Helo');
    SLL.insertAt('Kat', 3);

    SLL.remove('Tauhida');

    display(SLL);
    size(SLL);
    isEmpty(SLL);
    findPrevious(SLL, 'Athena');
    findLast(SLL);
}

main();