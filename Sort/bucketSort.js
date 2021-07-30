
import { Compare, defaultCompare, swap } from '../util/util.js';
import { insertionSort } from './insertionSort.js';

// 桶排序， bucketSize 桶的容量
export function bucketSort(arr, bucketSize = 5) {
    if (arr.length < 2) {
        return arr;
    }
    const buckets = createBuckets(arr, bucketSize);
    return sortBuckets(buckets);
}


//创建桶， 并给每个桶添加元素
function createBuckets(arr, size) {
    let minValue = arr[0];
    let maxValue = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
        }else if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
    const bucketCount = Math.floor((maxValue - minValue) / size) + 1;
    const buckets = [];
    for (let i = 0; i < bucketCount; i++) {
        buckets[i] = [];
    }
    for (let i= 0; i < arr.length; i++) {
        const bucketIndex = Math.floor((arr[i] - minValue) / size);
        buckets[bucketIndex].push(arr[i]);
    }
    return buckets;
}

// 将每个桶进行排序
function sortBuckets(buckets) {
    const sortedArray = [];
    for (let i = 0; i < buckets.length; i++) {
        if (buckets[i] != null) {
            insertionSort(buckets[i]);     // 插入排序（适合短数组）
            sortedArray.push(...buckets[i]);
        }
    }
    return sortedArray;
}





