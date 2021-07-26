
import { Compare, defaultCompare, swap } from '../util/util.js';

// 合并函数
function merge(left, right, compareFn) {
    let i = 0, j = 0;
    const result = [];
    while (i < left.length && j < right.length) {
        result.push( compareFn(left[i], right[j]) === Compare.LESS_THAN ? left[i++] : right[j++] );
    }
    return result.concat( i < left.length ? left.slice(i) : right.slice(j) );
}

// 归并排序  ，将原始数组切分成小数组直到一个元素，在合并排序
export function mergeSort(arr, compareFn = defaultCompare) {
    if (arr.length > 1) {
        const { length } = arr;
        const middle = Math.floor(length / 2);
        const left = mergeSort(arr.slice(0, middle), compareFn);    //递归
        const right = mergeSort(arr.slice(middle, length), compareFn);   //递归
        arr = merge(left, right, compareFn);             //合并两个数组
    }
    return arr;
}




