### Basic Operations on Linked List ⚡⚡

### Write a function to get Nth node in a Linked List

Write a GetNth() function that takes a linked list and an integer index and returns the data value stored in the node at that index position. 🧠

**Examples**: 🚨

> Input:  1->10->30->14,  index = 2
> Output: 30  
> The node at index 2 is 30

### get Nth node in a Linked List: 🚨 🚨 🚨

Follow the steps below to solve the problem: 💬

1. Initialize count = 0 🔵

2. Loop through the link list 🔵
   
   - if the count is equal to the passed index then return the curren node✳
   
   - Increment count ✳
   
   - change current to point to next of the current. ✳

```js
function GetNthLinkedList(head,index) {
    let currentNode = head;
    let count = 0;
    while (currentNode !== null) {
        if (count == index) {
            return currentNode.data;
        }
        count += 1;
        currentNode = currentNode.next;
    }
    return -1;
}
```
