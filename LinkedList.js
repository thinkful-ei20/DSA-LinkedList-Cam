'use strict';
// ===== NODE CLASS ===================================
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

// ===== LINKEDLIST CLASS ==============================
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert item at the beginning
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  // Insert item at the end
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  // Insert a Node before a given node containing a key
  insertBefore(before, item) {
    // Check if the list is empty
    if (!this.head) {
      console.log('The list is empty');
      return;
    }

    // find beginning of the list to traverse it
    let previousNode = this.head;
    let currentNode = this.head;

    // if (before) is the first item
    if (this.head.value === before) {
      this.insertFirst(item);
      return;
    }

    // While the current node is not the last AND current node.value is not 'before'
    // previousNode = currentNode
    // currentNode = currentNode.next
    while ((currentNode !== null) && (currentNode.value !== before)) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    // if currentNode = null, return; because item you want to insert before could not be found
    if (currentNode === null) {
      return;
    } else {
    // previousNode.next = new _Node(item, currentNode);
      previousNode.next = new _Node(item, currentNode);
    }
  }

  // Insert a Node after a node containing the key
  insertAfter(after, item) {
    // Check if the list is empty
    if (!this.head) {
      console.log('The list is empty');
      return;
    }

    // find beginning of the list to traverse it
    let currentNode = this.head;

    // if (after) is the first item
    if (this.head.value === after) {
      this.insertLast(item);
      return;
    }

    // While the currentNode is not the last AND currentNode.value is not (after)
    while ((currentNode !== null) && (currentNode.value !== after)) {
      currentNode = currentNode.next;
    }

    // if currentNode = null, return; because item you want to insert after could not be found
    if (currentNode === null) {
      return;
    } else {
      let newNode = new _Node(item, currentNode.next);
      currentNode.next = newNode;
    }
  }

  // Insert a Node at a specific position in the list
  insertAt(index, item) {
    // Check if the list is empty
    if (!this.head) {
      console.log('The list is empty');
      return;
    }

    // If index is the head
    if (index === 0) {
      this.insertFirst(item);
      return;
    }

    // find beginning of the list to traverse it
    let currentNode = this.head;
    let previousNode = this.head;
    let counter = 0; // 0 = this.head

    while ((counter < index)) {
      counter++;
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    let newNode = new _Node(item, currentNode); // new node points to currentNode
    previousNode.next = newNode; // previousNode points to newNode
    currentNode = currentNode.next; // currentNode becomes currentNode.next
  }

  // Find item in the list
  find(item) {
    let currentNode = this.head;
    
    if (!this.head) {
      return null;
    }
    while (currentNode.value !== item) {
      if (currentNode.next === null) {
        return null;
      } else {
        currentNode = currentNode.next;
      }
    }
    return currentNode;
  }

  // Remove item from the list
  remove(item) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head;
    let previousNode = this.head;

    while ((currentNode !== null) && (currentNode.value !== item)) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currentNode.next;
  }
}

function main() {
  let SLL = new LinkedList();

  // Creating a singly linked list
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');

  // Add Tauhida
  SLL.insertLast('Tauhida');

  // Remove squirrel from the list
  SLL.remove('squirrel');

  // insert Athena before Boomer
  SLL.insertBefore('Boomer', 'Athena');

  // insert Hotdog after Helo
  SLL.insertAfter('Helo', 'Hotdog');

  // insert 'key' at 3rd index
  SLL.insertAt(3, 'Kat');
  
  // Remove Tauhida from the list
  SLL.remove('Tauhida');

  return JSON.stringify(SLL, null, 2);
}

console.log(main());