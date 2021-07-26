
import { Compare, defaultCompare, swap } from '../util/util.js';

// 桶排序
function bucketSort(arr, bucketSize = 5) {
    if (arr.length < 2) {
        return arr;
    }
    const buckets = createBuckets(arr, bucketSize);
    return sortBuckets(buckets);
}


//创建桶
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







