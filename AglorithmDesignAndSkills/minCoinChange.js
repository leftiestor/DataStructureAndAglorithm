/*
* 动态规划： 与分而治之是不同的方法，分而治之是把问题分解成相互独立的子问题，然后组合他们的答案，而动态规划则是将问题分解成相互依赖的子问题。
* 例如斐波那契数列解法就是动态规划。
* */
/*
* 最小硬币找零问题：
*  最少硬币找零问题是给出要找零的钱数，以及可用的硬币面额d1,…, dn及其数量，找到所需的最少的硬币个数
* @param: coins 面额数组, 例如[1,5,10,25]
* @param: amount 找零钱数 例如 37
* 输出 [1, 1, 10, 25]
* */
export function minCoinChange(coins, amount) {
    const cache = [];               // 记忆化
    const makeChange = (value) => {
        if (! value) {
            return [];
        }
        if (cache[value]) {
            return cache[value];
        }
        let min = [];
        let newMin, newAmount;
        for (let i = 0; i < coins.length; i++) {
            const coin = coins[i];
            newAmount = value - coin;
            if (newAmount >= 0) {
                newMin = makeChange(newAmount);
            }
            // 如果
            if (newAmount >= 0 &&
                (newMin.length < min.length -1 || ! min.length) &&
                (newMin.length || ! newAmount)) {
                min = [coin].concat(newMin);
                console.log('new Min ' + min + ' for ' + value);
            }
        }
        console.log('new cache [' + value + '] is  ' + min  );
        return (cache[value] = min);
    };
    return makeChange(amount);
}

