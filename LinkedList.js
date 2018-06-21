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

