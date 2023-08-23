class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function addLinkedList(list1, list2) {
  const sum_array = [];
  let carry = 0;
  let remainder = 0;
  while (list1 != null && list2 != null) {
    let sum = list1.val + list2.val + carry;
    remainder = sum % 10;
    if (sum >= 10) {
      carry = sum / 10;
    }
    sum_array.push(remainder);
    list1 = list1.next;
    list2 = list2.next;
  }
  return sum_array.reverse().join("");
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
const arr1 = [2, 4, 3];
const arr2 = [5, 6, 4];
const list1 = createLinkedList(arr1);
const list2 = createLinkedList(arr2);
console.log(addLinkedList(list1, list2));
