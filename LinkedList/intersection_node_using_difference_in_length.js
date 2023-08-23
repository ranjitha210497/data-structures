class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function findIntersectionNode(headA, headB) {
  let length_of_list1 = 0;
  let length_of_list2 = 0;
  let list1 = headA;
  let list2 = headB;
  while (headA) {
    headA = headA.next;
    length_of_list1++;
  }
  while (headB) {
    headB = headB.next;
    length_of_list2++;
  }
  console.log(length_of_list1, length_of_list2);
  let greater_list = list1;
  let smaller_list = list2;
  let difference = 0;
  if (length_of_list1 > length_of_list2) {
    difference = length_of_list1 - length_of_list2;
  } else {
    difference = length_of_list2 - length_of_list1;
    greater_list = list2;
    smaller_list = list1;
  }
  while (difference > 0) {
    greater_list = greater_list.next;
    difference--;
  }

  while (greater_list != smaller_list) {
    greater_list = greater_list.next;
    smaller_list = smaller_list.next;
    console.log(greater_list);
  }
  return greater_list;
}

const commonNode = new ListNode(8, new ListNode(9));
const list1 = new ListNode(1, new ListNode(2, commonNode));
const list2 = new ListNode(3, new ListNode(4, new ListNode(5, commonNode)));

const intersectionNode = findIntersectionNode(list1, list2);
console.log(intersectionNode ? intersectionNode.val : "No intersection");
