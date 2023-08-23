class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function removeNthFromEnd(head, n) {
  const start = new ListNode();
  start.next = head;
  let fast = start;
  let slow = start;
  for (let i = 1; i <= n; i++) {
    fast = fast.next;
  }
  while (fast.next != null) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return start.next;
}

function createLinkedList(arr) {
  let head = null;
  let current = null;
  for (const val of arr) {
    const newNode = new ListNode(val);
    if (!head) {
      head = newNode;
      current = newNode;
    } else {
      current.next = newNode;
      current = newNode;
    }
  }
  return head;
}

function linkedListToArray(head) {
  const arr = [];
  let current = head;
  while (current) {
    arr.push(current.val);
    current = current.next;
  }
  return arr;
}

const arr1 = [3, 7, 5, 9, 4, 2, 12, 15, 1];
const list1 = createLinkedList(arr1);
console.log(removeNthFromEnd(list1, 4));
