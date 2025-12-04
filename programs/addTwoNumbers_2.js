/**
 * Adds two numbers represented as linked lists in reverse order.
 * Each node contains a single digit, and the digits are stored in reverse order.
 * The function handles carry-over during addition.
 *
 * @param {ListNode} l1 - The first linked list representing a number in reverse order
 * @param {ListNode} l2 - The second linked list representing a number in reverse order
 * @returns {ListNode} A new linked list representing the sum in reverse order
 *
 * @example
 * // Input: l1 = 2 -> 4 -> 3, l2 = 5 -> 6 -> 4
 * // Represents: 342 + 465 = 807
 * // Output: 7 -> 0 -> 8
 * addTwoNumbers(l1, l2);
 * // Returns: ListNode { val: 7, next: ListNode { val: 0, next: ListNode { val: 8, next: null } } }
 */

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

const createLinkedList = (arr) => {
    if(arr.length === 0) return null;
    const head = new ListNode(arr[0])
    let current = head

    for (let i=1; i < arr.length; i++) {
        current.next = new ListNode(arr[i])
        current = current.next
    }
    return head;
}

const l1 = createLinkedList([9,9,9,9,9])
const l2 = createLinkedList([9,9,9])

const addTwoNumbers = (l1, l2) => {
    // create a result listnode
    let resultList = createLinkedList([0]);

    let pointer = resultList;
    let carry = 0;

    while ( l1 || l2 ) {
        let sum = 0 + carry;

        if( l1 != null ) {
            sum = sum + l1.val
            l1 = l1.next
        }

        if(l2 != null) {
            sum = sum + l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);
        sum = sum % 10;
        pointer.next = new ListNode(sum)
        pointer = pointer.next
    }

    if(carry === 1) {
        pointer.next = new ListNode(1)
    }
    return resultList.next;
}

const printList = (head) => {
    let result = [];
    let current = head;

    while(current != null) {
        result.push(current.val)
        current = current.next
    }
    return result.join(' -> ');
}

console.log(printList(addTwoNumbers(l1,l2)))
