// Delete the node in linked list where access is given only to the node to be deleted

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function getNode(head, val) {
  while (head.val != val) {
    head = head.next;
  }
  return head;
}

function deleteNode(head) {
  head.val = head.next.val;
  head.next = head.next.next;
}

function createLinkedList(arr) {
  let current = null;
  let head = null;
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

const arr1 = [1, 2, 3, 4, 5, 6];
const list1 = createLinkedList(arr1);
const nodeToBeDeleted = getNode(list1, 4);
deleteNode(nodeToBeDeleted);
console.log(linkedListToArray(list1));
