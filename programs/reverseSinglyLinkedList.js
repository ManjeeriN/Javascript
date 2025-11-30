// Create a ListNode

// Time: O(n), Space: O(1) for iterative (interview favorite)  Constant extra space needed. just for temp
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// create a linkedList from Array
const createLinkedList = (arr) => {
    if(arr.length === 0) return null;

    const head = new ListNode(arr[0]);
    let current = head

    for( let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next
    }
    return head;
//     ListNode {
//   val: 1,
//   next: ListNode { val: 2, next: ListNode { val: 3, next: [ListNode] } }
// }
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

const reverseLinkedList = (head) => {
    let prev = null
    let current = head;
    while(current != null) {
        let temp = current.next
        current.next = prev
        prev = current
        current = temp
    }
    return prev;
   //(prev) null -> (current)head(1) -> (next) 2
    //temp = 2
   //(prev) 1 -> (current)2 -> (next) null

}


//something is wrong, not giving desired result
const hasCycle = (head) => {

    if(!head || !head.next) return false;

    let slow = head;
    let fast = head;

    while (fast && fast.next) {

        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast) {
            return true;
        }
    }
    return false;
}

let head = createLinkedList([1,2,3,4,5]);
console.log('current List: ', printList(head)) // current List:  1 -> 2 -> 3 -> 4 -> 5

let newHead = reverseLinkedList(head)
console.log('reversed List: ', printList(newHead))

let nhead = createLinkedList([1,2,3,4,5,3]);
console.log('check cycle : ', hasCycle(nhead));

