// reverse linked list in groups of size k

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverse(head, k) {
  let count = 0;
  const list = head;
  while (head) {
    head = head.next;
    count++;
  }
  const dummy = new ListNode(0);
  dummy.next = list;
  let pre = dummy;
  let curr = dummy.next;
  let nex = curr.next;
  for (let i = 1; i < k; i++) {
    
  }
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

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
const list1 = createLinkedList(arr1);
