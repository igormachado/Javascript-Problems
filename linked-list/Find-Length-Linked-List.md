### Basic Operations on Linked List ⚡⚡

### Find Length of a Linked List (Iterative and Recursive) 🤖

***An iterative approach for finding the length of the linked list:*** 🧠

Examples: 🚨

****Input:**** 2->4->1->9->5->3->6  
****Output:**** 7

  Follow the given steps to solve the problem: 💬

1. Initialize count as 0. 🔵

2. Initialize a node pointer, current = head. 🔵

    3. Do following while current is not NULL. 🔵

- Increment count by 1. ✳

-  current = current -> next ✳
4. Return count. 🔵

```js
function lenghtOfLinkedList(head) {
    let currentNode = head;
    let count = 0;
    while (currentNode !== null) {
        count += 1;
        currentNode = currentNode.next;
    }
    return count;
}
```

***Recursive approach for finding the length of the linked list***

```js
function countLengthOfLinkedList(node,count) {
    if (node === null) return count;

    return lenghtOfLinkedList(node.next,count+1);
} 


function lengthOfLinkedList() {
    return countLengthOfLinkedList(head,0);
}
```
