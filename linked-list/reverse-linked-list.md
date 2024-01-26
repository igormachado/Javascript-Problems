### Basic Operations on Linked List ⚡⚡

### Reverse a Linked List

Given a pointer to the head node of a linked list, the task is to reverse the linked list. We need to reverse the list by changing the links between nodes. 🧠

**Examples**: 🚨

> **Input**: Head of following linked list   
> 1->2->3->4->NULL   
> **Output**: Linked list should be changed to,   
> 4->3->2->1->NULL
> 
> **Input**: Head of following linked list   
> 1->2->3->4->5->NULL   
> **Output**: Linked list should be changed to,   
> 5->4->3->2->1->NULL
> 
> **Input**: NULL   
> **Output**: NULL

### Reverse a linked list by Iterative Method: 🚨 🚨 🚨

The idea is to use three pointers **curr**, **prev,** and **next** to keep track of nodes to update reverse links.

Follow the steps below to solve the problem: 💬

1. Initialize three pointers **prev** as NULL, **curr** as **head**, and **next** as NULL.🔵

2. Iterate through the linked list. In a loop, do the following:🔵
   
   * Before changing the next of currentNode, store the nextNode.✳
   
   * nextNode = currentNode.next✳
   
   * Now update the next pointer of currentNode to the prevNode.✳
   
   * currentNode.next = prevNode.✳
   
   * Update prevNode as currentNode and currentNode as nextNode.✳

```js
function reverseLinkedList(head) {
    let prevNode = null;
    let currentNode = head;
    let nextNode = null;
    while (currentNode !== null) {
        nextNode = currentNode.next;
        currentNode.next = prevNode
        prevNode = currentNode
        currentNode = nextNode
    }
    return prevNode
}
```
