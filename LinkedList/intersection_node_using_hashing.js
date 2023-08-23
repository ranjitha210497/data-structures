class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function findIntersectionNode(headA, headB) {
  const nodeSet = new Set();
  let currentA = headA;
  while (currentA) {
    nodeSet.add(currentA);
    currentA = currentA.next;
  }
  let currentB = headB;
  while (currentB) {
    if (nodeSet.has(currentB)) {
      return currentB;
    }
    currentB = currentB.next;
  }
  return null;
}

const commonNode = new ListNode(8, new ListNode(9));
const list1 = new ListNode(1, new ListNode(2, commonNode));
const list2 = new ListNode(3, new ListNode(4, new ListNode(5, commonNode)));

const intersectionNode = findIntersectionNode(list1, list2);
console.log(list1);
console.log(list2);
console.log(intersectionNode ? intersectionNode.val : "No intersection");
