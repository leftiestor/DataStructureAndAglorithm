
import { Compare, defaultCompare, swap } from '../util/util.js';

//划分，排序，返回
const partition = (arr, left, right, compareFn) => {
    const pivot = arr[ Math.floor((left + right) / 2) ];
    let i = left, j = right;
    while (i <= j) {
        while (compareFn(arr[i], pivot) === Compare.LESS_THAN) {
            i++;
        }
        while (compareFn(arr[j], pivot) === Compare.BIGGER_THAN) {
            j--;
        }
        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
}

//分治法
const quick = (arr, left, right, compareFn) => {
    let index;
    if (arr.length > 1) {
        index = partition(arr, left, right, compareFn);
        if (left < index -1) {
            quick(arr, left, index -1, compareFn);
        }
        if (right > index) {
            quick(arr, index, right, compareFn);
        }
    }
    return arr;
}

// 快速排序
export const quickSort = (arr, compareFn = defaultCompare) => {
    return quick(arr, 0, arr.length - 1, compareFn);
}







