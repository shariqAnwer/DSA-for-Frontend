// best time to buy and sell stocks 

// function bestTimetoSellStocks(prices) {
//     let maxProfit = 0;
//     for(let i = 0 ;i < prices.length-1; i++) {
//         for(let j = i+1; j < prices.length; j++) {
//             let profit = prices[j] - prices[i]
//             maxProfit = Math.max(profit, maxProfit)
//         }
//     }
//     return maxProfit;
// }

//using Greedy algo----------------------------------
function bestTimetoSellStocks(prices) {
     let minPrice = prices[0];
     let maxProfit = 0;
     
     for(let i = 1; i < prices.length; i++) {
        if(prices[i] < minPrice) minPrice = prices[i]
        let diff = prices[i] - minPrice
        maxProfit = Math.max(maxProfit, diff)
     }
     return maxProfit;
}
let arr = [7, 1, 5, 3, 6, 4]
let arr1 = [7, 6, 4, 3, 1]
console.log(bestTimetoSellStocks(arr)); // Output: 5
console.log(bestTimetoSellStocks(arr1)); // Output: 0