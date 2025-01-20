/*
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

*/

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

/*
    how linked list will be 
    const list = {
        head: {
            value: 6
            next: {
                value: 10                                             
                next: {
                    value: 12
                    next: {
                        value: 3
                        next: null    
                    }
                }
            }
        }
    }
};

*/

// var l1 = [2, 4, 3];
// var l2 = [5, 6, 4];

let l1node1 = new Node(2);
let l1node2 = new Node(4);
let l1node3 = new Node(3);

l1node1.next = l1node2;
l1node2.next = l1node3;

let l1 = new LinkedList(l1node1);

let l2node1 = new Node(2);
let l2node2 = new Node(4);
let l2node3 = new Node(3);

l2node1.next = l2node2;
l2node2.next = l2node3;

let l2 = new LinkedList(l2node1);

var reverseLinkedList = function (list) {
  var node = list;
  var previous = null;

  while (node) {
    var save = node.next;
    node.next = previous;
    previous = node;
    node = save;
  }
  return previous;
};

var addTwoNumbers = function (l1, l2) {
  console.log({ l1: l1.head });
  const totalL1 = reverseLinkedList(l1.head, null);
  console.log({ totalL1 });
};

const result = addTwoNumbers(l1, l2);

// console.log(result);
