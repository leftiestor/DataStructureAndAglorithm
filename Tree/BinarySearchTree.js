
import { Compare, defaultCompare } from '../util/util.js';
import { Node } from './TreeNode.js';

// 二叉搜索树 BST
export default class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn;  // 比较节点值
        this.root = null;     // Node类型的根节点
    }

    // 插入方法
    insert(key) {
        if( this.root == null ) {
            this.root = new Node(key);
        } else {
            this.insertNode(this.root, key);
        }
    }
    // 插入一个节点
    insertNode(node, key) {
        if( this.compareFn(key, node.key) === Compare.LESS_THAN ) {
            if (node.left == null ) {
                node.left = new Node(key);
            } else {
                this.insertNode(node.left, key);
            }
        } else {
            if (node.right == null ) {
                node.right = new Node(key);
            } else {
                this.insertNode(node.right, key);
            }
        }
    }

    // 中序遍历  左 {父} 右
    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback);
    }
    //inOrderTraverseNode
    inOrderTraverseNode(node, callback) {
        if (node != null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right, callback);
        }
    }

    // 先序遍历  {父} 左 右
    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root, callback);
    }
    //preOrderTraverseNode
    preOrderTraverseNode(node, callback) {
        if (node != null) {
            callback(node.key);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }

    // 后序遍历   左 右 {父}
    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback);
    }
    //postOrderTraverseNode
    postOrderTraverseNode(node, callback) {
        if (node != null) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }

    // 搜索最小值
    min() {
        return this.minNode(this.root);
    }
    // minNode
    minNode(node) {
        let current = node;
        while(current != null && current.left != null) {
            current = current.left;
        }
        return current;
    }


    // 搜索最大值
    max() {
        return this.maxNode(this.root);
    }
    // maxNode
    maxNode(node) {
        let current = node;
        while(current != null && current.right != null) {
            current = current.right;
        }
        return current;
    }

    // 搜索一个特定值
    search(key) {
        return this.searchNode(this.root, key);
    }
    // searchNode
    searchNode(node, key) {
        if (node == null) { return false; }
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            return this.searchNode(node.left, key);
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            return this.searchNode(node.right, key);
        } else {
            return true;
        }
    }

    // 删除方法
    remove(key){
        this.root = this.removeNode(this.root, key);
    }
    // removeNode
    removeNode(node, key){
        if (node == null) return null;
        if (this.compare(key, node.key) == Compare.LESS_THAN) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            // key == node.key
            // 第一种情况 没有子节点，直接置空
            if (node.left == null && node.right == null) {
                node = null;
                return node;
            }
            // 第二种情况 没有左子节点或没有右子节点，直接上移
            if (node.left == null) {
                node = node.right;
                return node;
            } else if (node.right == null) {
                node = node.left;
                return node;
            }
            // 第三种情况 左右子节点均有，将右子树最小节点key替代此节点key,并删除右子树最小节点
            const aux = this.minNode(node.right);
            node.key = aux.key;
            node.right = this.removeNode(node.right, aux.key);
            return node;
        }
    }

    // toString
    // toString(){
    //
    // }

}

// const tree = new BinarySearchTree();
// tree.insert(11);
// tree.insert(5);
// tree.insert(7);
// console.log(tree);
