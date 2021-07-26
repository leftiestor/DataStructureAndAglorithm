
import { Compare, defaultCompare, swap } from '../util/util.js';

//插入排序  ，假定以一个已经排好序了，第二应该插入到第一个的前面还是后面呢，第一二已经排好序了，第三个应该插入到哪个位置呢？
export  function insertionSort(arr, compareFn = defaultCompare) {
    const { length } = arr;
    let temp;
    for (let i = 1; i < length; i++) {
        let j = i;
        temp = arr[i];          //待定值
        while (j > 0 && compareFn(arr[j-1], temp) === Compare.BIGGER_THAN) {
            arr[j] = arr[j-1];          // 如果待定值比前面的小，则前面的元素一个挨个一个往后移，直到找到合适位置
            j--;
        }
        arr[j] = temp;          // 后移后，空位插入待定值
    }
    return arr;
}



