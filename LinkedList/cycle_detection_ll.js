class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function hasCycle(head) {
  if (!head || !head.next) {
    return false;
  }
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      return true;
    }
  }
  return false;
}

const list = new ListNode(3);
list.next = new ListNode(2);
list.next.next = new ListNode(0);
list.next.next.next = new ListNode(-4);
list.next.next.next.next = list.next;

console.log(hasCycle(list));
