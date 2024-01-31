/**
 * Identical Linked Lists

  Given two Singly Linked List of N and M nodes respectively. 
  The task is to check whether two linked lists are identical 
  or not. 
  Two Linked Lists are identical when they have same data and 
  with same arrangement too.

  Example 1:

  Input:
  LinkedList1: 1->2->3->4->5->6
  LinkedList2: 99->59->42->20
  Output: Not identical 

  Example 2:

  Input:
  LinkedList1: 1->2->3->4->5
  LinkedList2: 1->2->3->4->5
  Output: Identical
  
  Your Task:
  The task is to complete the function areIdentical() which 
  takes the head of both linked lists as arguments and returns 
  True or False.

  Constraints:
  1 <= N <= 103

  Expected Time Complexity : O(N)
  Expected Auxilliary Space : O(1)


  LinkedList1: 1->2->3->4->5->6
  LinkedList2: 99->59->42->20

  LinkedList1: 1->2->3->4->5->6
  LinkedList2: 1->2->3->4->5
 */

function IdenticalLinkedLists(LinkedList1,LinkedList2) {
  let currentNode01 = LinkedList1;
  let currentNode02 = LinkedList2;
  let isEqual;

  while (currentNode01 !== null || currentNode02 !== null) {
    if (currentNode01.value !== currentNode02.value) {
      isEqual = false;
      return isEqual;
    }

    if ((currentNode01 === null && currentNode02 !== null) || (currentNode02 === null && currentNode01 !== null)) {
      isEqual = false;
      return isEqual;
    }
    isEqual = true;
    currentNode01 = currentNode01.next;
    currentNode02 = currentNode02.next;
  }

  return isEqual;
}