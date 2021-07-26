
import { Compare, defaultCompare } from '../util/util.js';
import { Node } from './TreeNode.js';
import { BinarySearchTree } from './BinarySearchTree.js';


// 自平衡二叉搜索树  AVL树(Adelson-Velskill-Landi)
class AVLTree extends BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = compareFn;
        this.root = null;
    }

    //获取节点高度: 从节点到其任意子节点的边的最大值
    getNodeHeight(node) {
        if (node == null) { return -1; }
        return Math.max( this.getNodeHeight(node.left), this.getNodeHeight(node.right) ) + 1;
    }

    // 平衡因子计数器常量
    const BalanceFactor = {
        UNBALANCED_RIGHT: 1,
        SLIGHTLY_UNBALANCED_RIGHT: 2,
        BALANCED: 3,
        SLIGHTLY_UNBALANCED_LEFT: 4,
        UNBALANCED_LEFT: 5
    }
    // 计算平衡因子
    getBalanceFactor(node) {
        const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
        switch (heightDifference) {
            case -2:    return BalanceFactor.UNBALANCED_RIGHT;              // 1
            case -1:    return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;     // 2
            case 1:     return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;      // 4
            case 2:     return BalanceFactor.UNBALANCED_LEFT;               // 5
            default:    return BalanceFactor.BALANCED;                      // 3
        }
    }``

    // L-L  向右的单旋转
    rotationLL(node) {
        const temp = node.left;
        node.left = temp.right;
        temp.right = node;
        return temp;
    }
    // R-R 向左的单旋转
    rotationRR(node) {
        const temp = node.right;
        node.right = temp.left;
        temp.left = node;
        return temp;
    }
    // L-R 向右的双旋转：左子树先RR旋转再本节点ll旋转
    rotationLR(node) {
        node.left = this.rotationRR(node.left);
        return this.rotaionLL(node);
    }
    // R-L 向左的双旋转：右子树先LL旋转再本节点RR旋转
    rotationRL(node) {
        node.right = this.rotationLL(node.right);
        reurn this.rotationRR(node);
    }

    // 插入一个节点
    insert(key) {
        this.root = this.insertNode(this.root, key);
    }
    // insertNode
    insertNode(node, key) {
        if (node == null) {   return new Node(key);  }
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.insertNode(node.left, key);
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.insertNode(node.right, key);
        } else {
            return node;    // 重复的键
        }
        // 如果需要，将进行平衡操作
        const balanceFactor = this.getBalanceFactor(node);
        if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
            if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
                node = this.rotationLL(node);       // LL旋转
            } else {
                return this.rotationLR(node);       // LR选择
            }
        }
        if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
            if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
                node = this.rotationRR(node);       // RR旋转
            } else {
                return this.rotationRL(node);       // RL旋转
            }
        }
    }

    // 移除一个节点
    remove(key) {
        this.root = this.removeNode(this.root, key);
    }
    // removeNode
    removeNode(node, key) {
        node = super.removeNode(node, key);
        if (node == null) { return node; }
        //检测是否平衡
        const balanceFactor = this.getBalanceFactor(node);
        if (balanceFactor === BalanceFactor.UNBALANCED_LEFT ) {
            const balanceFactorLeft = this.getBalanceFactor(node.left);
            if (balanceFactorLeft === BalanceFactor.BALANCED || balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT ) {
                return this.rotationLL(node);
            }
            if (balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT ) {
                return this.rotationLR(node.left);
            }
        }
        if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT ) {
            const balanceFactorRight = this.getBalanceFactor(node.right);
            if (balanceFactorRight === BalanceFactor.BALANCED || balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT ) {
                return this.rotationRR(node);
            }
            if (balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT ) {
                return this.rotationRL(node.right);
            }
        }
        return node;
    }



}

