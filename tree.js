class TreeNode {
  constructor(value) {
    this.value = value; //The value stored in the node
    this.children = [];
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(value, parentValue) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      const parentNode = this.findNode(parentValue);
      if (parentNode) {
        parentNode.children.push(newNode);
      } else {
        console.log("Parent node not found");
      }
    }
  }

  findNode(value) {
    return this.findNodeRecursive(this.root, value);
  }

  findNodeRecursive(node, value) {
    if (node === null) {
      return null;
    }

    if (node.value === value) {
      return node;
    }

    for (const child of node.children) {
      const foundNode = this.findNodeRecursive(child, value);
      if (foundNode !== null) {
        return foundNode;
      }
    }

    return null;
  }

  remove(value) {
    if (this.root === null) {
      return;
    }

    if (this.root.value === value) {
      this.root = null;
    } else {
      this.removeNode(this.root, value);
    }
  }

  removeNode(node, value) {
    const children = node.children;
    for (let i = 0; i < children.length; i++) {
      if (children[i].value === value) {
        children.splice(i, 1);
        return;
      } else {
        this.removeNode(children[i], value);
      }
    }
  }

  traverse(callback) {
    this.traverseNode(this.root, callback);
  }

  traverseNode(node, callback) {
    if (node === null) {
      return;
    }

    callback(node.value);

    for (const child of node.children) {
      this.traverseNode(child, callback);
    }
  }
}

const tree = new Tree();

tree.insert("A", null);
tree.insert("B", "A");
tree.insert("C", "A");
tree.insert("D", "B");
tree.insert("E", "B");
tree.insert("F", "C");

console.log("Depth first traversal");
tree.traverse((value) => console.log(value));

tree.remove("B");

console.log("Depth-first traversal after removing node B:");
tree.traverse((value) => console.log(value));

console.log(tree);
