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

        if(start > end) return null;

        const mid = Math.floor(start + (end - start) / 2);
             
        const root = new Node(array[mid]);            

        root.left = this.buildTree(array, start, mid - 1);
        root.right = this.buildTree(array, mid + 1, end);

        return root;
    }
}

