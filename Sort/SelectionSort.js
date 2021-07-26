
import { Compare, defaultCompare, swap } from '../util/util.js';


// 选择排序，依次选择最小值放在第一位，第二位……
export function selectionSort(arr, compareFn = defaultCompare) {
    const { length }  = arr;
    let indexMin;
    for (let i = 0; i < length -1; i++ ) {
        indexMin = i;
        for (let j=i; j < length; j++) {    //内循环从 i 开始
            if (compareFn(arr[indexMin], arr[j]) === Compare.BIGGER_THAN) {
                indexMin = j;           //找到最小值
            }
        }
        if (i !== indexMin) {
            swap(arr, i, indexMin);
        }
    }
    return arr;
}









