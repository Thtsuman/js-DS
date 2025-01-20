/*
create a linked list in class and function
*/

// CLASS
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.size = 0;
  }
}

let node1 = new Node(2);
let node2 = new Node(3);

node1.next = node2;

const classList = new LinkedList(node1);

// FUNCTION

function linkedListWithFunction() {
  function node(data) {
    return {
      data,
      next: null,
    };
  }

  function linkedList(head = null) {
    return { head };
  }

  let node1 = node(2);
  let node2 = node(3);

  node1.next = node2;

  let list = linkedList(node1);

  console.log(list.head);
  return list
}

linkedListWithFunction();
