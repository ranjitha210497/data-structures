class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeSortedLists(l1, l2) {
  if (l1 == null) return l2;
  if (l2 == null) return l1;
  if (l1.val > l2.val) {
    const temp = l1;
    l1 = l2;
    l2 = temp;
  }
  const res = l1;
  while (l1 != null && l2 != null) {
    let temp = null;
    while (l1 != null && l1.val <= l2.val) {
      temp = l1;
      l1 = l1.next;
    }
    temp.next = l2;
    temp = l1;
    l1 = l2;
    l2 = temp;
  }
  return res;
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

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
const list1 = createLinkedList(arr1);
const list2 = createLinkedList(arr2);

const mergedList = mergeSortedLists(list1, list2);
console.log(linkedListToArray(mergedList));
