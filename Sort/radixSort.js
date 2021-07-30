

// 基数排序

export function radixSort(arr, radixBase = 10) {
    if (arr.lenght < 2) {
        return arr;
    }
    const min = findMinValue(arr);
    const max = findMaxValue(arr);
    let significantDigit = 1;     // 从第1个有效位开始
    while ((max - min) / significantDigit >= 1) {
        arr = countingSortForRadix(arr, radixBase, significantDigit, min);
        significantDigit *= radixBase;     //第2、3...个有效位
    }
    return arr;
}

//  基于有效位（基数）的计数排序
function countingSortForRadix(arr, radixBase, significantDigit, min) {
    let bucketsIndex;
    const buckets = [];
    const aux = [];
    for (let i = 0; i < radixBase ; i++) {
        buckets[i] = 0;
    }
    for (let i =0; i< arr.length ; i++) {
        bucketsIndex = Math.floor(((arr[i] - min) / significantDigit) % radixBase);
        buckets[bucketsIndex]++;
    }
    for (let i = 1; i < radixBase; i++) {
        buckets[i] += buckets[i - 1];
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        bucketsIndex = Math.floor(((arr[i] - min) / significantDigit) % radixBase);
        aux[ --buckets[bucketsIndex] ] = arr[i];
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = aux[i]
    }
    return arr;
}

// 找到数组中最小值
function findMinValue(arr) {
    let min = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
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
