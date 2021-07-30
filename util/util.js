// 比较字面量
export const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
};

// 默认比较函数
export function defaultCompare(a, b) {
    if (a === b) {
        return 0;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

// 交换函数
export function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    // [arr[a], arr[b]] = [arr[b], arr[a]]
}
