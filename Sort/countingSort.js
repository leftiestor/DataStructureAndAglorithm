
import { Compare, defaultCompare, swap } from '../util/util.js';

// 计数排序 ， 一种分布式排序， 使用组织好的辅助数据结构（桶），然后进行合并，得到排好序的数组。
//  使用一个用来存储每个元素在原始数组中出现次数的临时数组，在所有元素都计数完毕，临时数组已经排好序并可迭代以构建排序后的结果数组。

// 计数排序
export function countingSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const maxValue = findMaxValue(arr);     // 数组中最大值
    const counts = new Array(maxValue + 1);
    arr.forEach(ele => {
        if (! counts[ele]) {
            counts[ele] = 0;
        }
        counts[ele]++;
    });
    let sortedIndex = 0;
    counts.forEach((count, i) => {
        while (count > 0) {
            arr[sortedIndex++] = i;
            count--;
        }
    });
    return arr;
}

// 找到数组中最大值
function findMaxValue(arr) {
    let max = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}


