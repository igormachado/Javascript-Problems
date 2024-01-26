### Basic Operations on Linked List  ⚡⚡

#### Search an element in a Linked List (Iterative and Recursive)🤖

****Given a linked list and a key X in, the task is to check if  X is present in the linked list or not.**** 🧠

***Examples:*** 🚨

**Input:** 14->21->11->30->10, X = 14  
**Output:** Yes  
**Explanation:** 14 is present in the linked list.

**Input:** 6->21->17->30->10->8, X = 13  
**Output:** No

* Follow the below steps to solve the problem: 💬
1. Initialize a node pointer, **current = head**. 🔵

2. Do following while current is not NULL 🔵
   
   * If the current value (i.e., **current->key**) is equal to the key being searched return true. ✳
   
   * Otherwise, move to the next node (**current = current->next**). ✳

3. If the key is not found, return false ✳

```js
function search(head , value) {
    let currentNode = head;
    while (current !== null) {
        if (currentNode.data === value) return true;
        currentNode = currentNode.next;    
    }
    return false
}
```

3.1.  Search an element in a Linked List (Recursive Approach):💬

*Follow the below steps to solve the problem:* 🔵

* if the head is null, return false. ✳

* if the head.data is the same as value, return true; ✳

* else recursively search in the next node ->  (head.next). ✳

```js
function search(head, value) {
    if (head === null) return false;

    if (head.data === value) return true;

    return search(head.next, value);
}
```
