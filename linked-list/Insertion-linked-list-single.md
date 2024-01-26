# Basic Operations on Linked List

## Insertion in Linked List🤖

### How to Insert a Node at the front of Linked List?🧠

1. To insert a node at the beginning, we need to: 💬
* Make the first node of Linked Llist linked to the new node. 🔵

* Remove the head from the original first node of Linked List. 🔵

* Make the new node as the head of the Linked List.🔵

```js
// null -> 1 -> 2 -> 3 -> null , newNode = 5

function addNewNodeInTheBegnning(head) {

// Make next of new Node as head let

newNode.next = head;

// Move the head of point to new node.

head = newNode;

}
```

### How to Insert a Node after a Give Node in Linked list?🧠

**To insert a node after a given node in a Linked List, we need to:** 💬

1. Check if the given node exists or not.🔵
* If it do not exists.✳

* Terminate the process.✳
2. If the given node exists.🔵
* Make the element to be inserted as a new node.✳

* Change the next pointer of given node to the new Node.✳

* Now shift the original next pointer of given to the next pointer of new node.✳

```js
/*
 Input: LinkedList = 2->3->4->5, NewNode = 1, InsertAfter = 2
 Output: LinkedList = 2->1->3->4->5

 Input: LinkedList = , NewNode = 1, InsertAfter = 2
 Output: No such node found

*/


function insertAfter(head,value) {

if (head == null) {

return

}

let currentNode = head;

currentNode.next = head.next;

head.next = currentNode;

}
```

### How to insert a Node ath the end of Linked List?🧠

**To insert a node at the end of Linked List, we need:**💬

1. Go to the last node of the Linked List.🔵

2. Change the next pointer of last node from Null to the new node.🔵

3. Make the next pointer of new node as Null to show end of Linked list.🔵

```js
function insertAtTheEnd(head,newNode) {

if (head == null) {

return

}



let currentNode = head;

while (currentNode.next !== null) {

currentNode = currentNode.next;

}



currentNode.next = newNode;

newNode.next = null;



return head

}
```
