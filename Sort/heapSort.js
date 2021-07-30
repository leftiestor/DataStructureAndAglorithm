



import { Compare, defaultCompare, swap } from '../util/util.js';


// 下移操作
const heapify = (arr, index, size, compareFn ) => {
    let ele = index;
    const left  = 2 * index + 1;
    const right = 2 * index + 2;
    if (left < size && compareFn(arr[left], arr[ele]) > Compare.LESS_THAN) {
        ele = left;
    }
    if (right < size && compareFn(arr[right], arr[ele]) > Compare.LESS_THAN) {
        ele = right;
    }
    if (index !== ele) {
        swap(arr, index, ele);
        heapify(arr, ele, size, compareFn);
    }
}


// 构建最大堆
const buildMaxHeap = (arr, compareFn) => {
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        heapify(arr, i, arr.length, compareFn);
    }
    return arr;
}

// 堆排序
export const  heapSort = (arr, compareFn = defaultCompare) => {
    let heapSize = arr.length;
    buildMaxHeap(arr, compareFn);    // 创建最大堆
    while (heapSize > 1) {
        swap(arr, 0, --heapSize);
        heapify(arr, 0, heapSize, compareFn);
    }
    return arr;
}


