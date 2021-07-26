
import { Compare, defaultCompare, swap } from '../util/util.js';

//冒泡排序
export function bubbleSort(arr, compareFn = defaultCompare) {
    const { length } = arr;
    for (let i = 0; i < length; i++) {
        for (let j=0; j < length -1; j++ ) {
            if (compareFn(arr[j], arr[j + 1]) === Compare.BIGGER_THAN) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}


// 改进后的冒泡排序  从内循环减去外循环已跑过的轮数
export function modifiedBubbleSort(arr, compareFn = defaultCompare) {
    const { length } = arr;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++ ) {      // 改进
            if(compareFn(arr[j], arr[j + 1]) === Compare.BIGGER_THAN) {
                swap(arr, j, j + 1);
            }
        }
    }`c`
    return arr;
}

