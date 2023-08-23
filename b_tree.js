class BTreeNode {
  constructor(order, leaf = true) {
    this.order = order;
    this.keys = [];
    this.children = [];
    this.leaf = leaf;
  }

  insert(key) {
    let i = this.keys.length - 1;

    if (this.leaf) {
      // Insert the key into a leaf node
      while (i >= 0 && key < this.keys[i]) {
        this.keys[i + 1] = this.keys[i];
        i--;
      }
      this.keys[i + 1] = key;
    } else {
      // Insert the key into an internal node
      while (i >= 0 && key < this.keys[i]) {
        i--;
      }
      if (this.children[i + 1]?.isFull()) {
        this.splitChild(i + 1);
        if (key > this.keys[i + 1]) {
          i++;
        }
      }
      this.children[i + 1].insert(key);
    }
  }

  splitChild(index) {
    const child = this.children[index];
    const newChild = new BTreeNode(child.order, child.leaf);

    this.keys.splice(index, 0, child.keys[this.order - 1]);
    this.children.splice(index + 1, 0, newChild);

    for (let j = 0; j < this.order - 1; j++) {
      newChild.keys[j] = child.keys[j + this.order];
    }

    if (!child.leaf) {
      for (let j = 0; j < this.order; j++) {
        newChild.children[j] = child.children[j + this.order];
      }
    }

    child.keys.length = this.order - 1;
    child.children.length = this.order;
  }

  isFull() {
    return this.keys.length === this.order - 1;
  }

  search(key) {
    let i = 0;
    while (i < this.keys.length && key > this.keys[i]) {
      i++;
    }
    if (this.keys[i] === key) {
      return this; // Key found in the current node
    }
    if (this.leaf) {
      return null; // Key not found and no more child nodes to explore
    }
    return this.children[i].search(key); // Recursively search in the appropriate child node
  }
}

class BTree {
  constructor(order) {
    this.root = new BTreeNode(order, true); // Create an empty B-tree with the specified order
    this.order = order;
  }

  insert(key) {
    const root = this.root;
    if (root.isFull()) {
      const newRoot = new BTreeNode(this.order, false);
      this.root = newRoot;
      newRoot.children[0] = root;
      newRoot.splitChild(0);
    }
    root.insert(key);
  }

  search(key) {
    return this.root.search(key);
  }
}

// Example usage
const bTree = new BTree(3);

bTree.insert(8);
bTree.insert(3);
bTree.insert(10);
bTree.insert(1);
bTree.insert(6);
bTree.insert(14);
bTree.insert(4);
bTree.insert(7);
bTree.insert(13);

console.log(bTree);

console.log(bTree.search(6)); // Output: BTreeNode object representing the node containing the key
console.log(bTree.search(12)); // Output: null (key not found)
