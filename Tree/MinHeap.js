
import { defaultCompare, swap } from '../util/util.js';

/*
* 二叉堆是一棵完全二叉树，表示树的每一层都有左侧和右侧子节点（除了最后一层的叶节点），并且最后一层的叶节点尽可能都是左侧子节点。（结构特性）
*
* 二叉堆不是最小堆就是最大堆，最小堆允许你快速导出树的最小值，最大堆允许你导出树的最大值。所有节点都大于等于（即最大堆）或小于等于（即最小堆）每个它的子节点。（堆特性）
*
* */

/*
* 对于给定位置 index 的节点，她的左侧子节点的位置是 2* index +1（如果位置可用）；她的右侧子节点的位置是 2* index +2（如果位置可用）；她的父节点位置是 index/2 。
* */




// 最小二叉堆
export class MinHeap {
    constructor(compareFn = defaultCompare ) {
        this.compareFn = compareFn;
        this.heap = [];  // 数据存储数据
    }

    getLeftIndex(index) {
        return 2 * index + 1;
    }
    getRightIndex(index) {
        return 2 * index + 2;
    }
    getParentIndex(index) {
        if (index === 0) return undefined;
        return Math.floor((index - 1) / 2);
    }

    size() {
        return this.heap.length;
    }
    isEmpty() {
        return this.size() === 0;
    }
    findMinmun(){
        return this.isEmpty() ? undefined : this.heap[0];
    }

    // 上移操作
    siftUp(index) {
        let parent = this.getParentIndex(index);
        while (index > 0 && this.compareFn(this.heap[parent], this.heap[index]) > Compare.BIGGER_THAN) {
            swap( this.heap, parent, index);   // 交换节点
            index = parent;
            parent = this.getParentIndex(index);
        }
    }

    // 插入节点
    insert(value) {
        if (value != null) {
            this.heap.push(value);
            this.siftUp(this.heap.length - 1);   //上移
            return true;
        }
        return false;
    }

    // 导出堆中最小值或最大值
    extract() {

    }



}



