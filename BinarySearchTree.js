class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(arr) {
        const sorted = [...new Set(arr)].sort((a, b) => a - b);
        this.root = this.buildTree(sorted, 0, sorted.length - 1);
    }

    buildTree(array, start, end) {

        if (start > end) return null;

        const mid = Math.floor(start + (end - start) / 2);

        const root = new Node(array[mid]);

        root.left = this.buildTree(array, start, mid - 1);
        root.right = this.buildTree(array, mid + 1, end);

        return root;
    }

    includes(value) {
        let current = this.root;

        while (current) {
            if (value === current.data) {
                return true;
            } else if (value < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return false;
    }

    insert(value) {
        let current = this.root;

        while (true) {
            if (value === current.data) {
                return;
            }

            if (value < current.data) {
                if (current.left === null) {
                    current.left = new Node(value);
                    return;
                } else {
                    current = current.left;
                }
            } else {
                if (current.right === null) {
                    current.right = new Node(value);
                    return;
                } else {
                    current = current.right;
                }
            }
        }

    }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
        return;
    }

    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }

    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);

    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5]);

// prettyPrint(tree.root);