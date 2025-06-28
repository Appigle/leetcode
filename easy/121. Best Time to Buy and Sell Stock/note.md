## ✅ Objective Recap

We want to:

- Buy on some day `i`
- Sell on a later day `j > i`
- Maximize profit `prices[j] - prices[i]`

The code should return:

- `maxProfit`
- the `buyDay`, `sellDay`, and their respective prices

---

## 🧠 Code Deep Dive

```js
var maxProfit = function(prices) {
    let left = 0; // Buy day
    let right = 1; // Sell day
    let maxProfit = 0;

    let buyDay = 0;
    let sellDay = 0;
```

- Initializes `left` as the **potential buy day**
- `right` scans ahead for a potential **sell day**
- `buyDay` and `sellDay` are used to **record the best opportunity**

---

### 🔁 Main Loop

```js
while (right < prices.length) {
  if (prices[right] > prices[left]) {
    let profit = prices[right] - prices[left];
    if (profit > maxProfit) {
      maxProfit = profit;
      buyDay = left;
      sellDay = right;
    }
  } else {
    left = right; // New lower price, better buying opportunity
  }
  right++;
}
```

#### ✅ This logic is correct because:

- **`left` tracks the lowest price seen so far**
- **`right` looks for a price higher than `left`**
- When `prices[right] <= prices[left]`, it's pointless to sell, so we reset the `left` (buy) pointer to `right`

---

## ✅ Edge Case Testing

Let’s test a few edge cases mentally:

### 1. **Increasing prices**

```js
[1, 2, 3, 4, 5];
```

- Buy at 1, sell at 5 → Profit = 4 ✅

### 2. **Decreasing prices**

```js
[9, 7, 5, 3, 1];
```

- No profit possible → Buy and sell never update → Profit = 0 ✅

### 3. **Only 1 price**

```js
[5];
```

- `right = 1`, `prices.length = 1` → loop never runs → Profit = 0 ✅

### 4. **Multiple equal max profits**

```js
[2, 4, 1, 3, 0, 2];
```

- Best profit = 2 (buy at 0, sell at 2) → Only one best recorded ✅

---

## ❗ Final Check: `buyPrice` and `sellPrice` Access

```js
return {
  maxProfit,
  buyDay,
  buyPrice: prices[buyDay],
  sellDay,
  sellPrice: prices[sellDay],
};
```

✅ Safe because:

- `buyDay` and `sellDay` are always within bounds
- Even when `maxProfit = 0`, default values remain `0`, which match index `0`

---

## 🟨 Optional Improvement (for clarity)

You can move this inside the `else`:

```js
else {
    left = right;
    // Make sure right > left in next iteration
}
```

But current code is already safe and readable.

---

## ✅ Final Verdict

### ✔️ Is the code correct?

**Yes**, it correctly:

- Identifies the best buy/sell days
- Maximizes profit
- Handles all edge cases gracefully

---

### 🧪 Example Output

```js
maxProfit([7, 2, 8, 1, 3, 6, 4]);
```

Returns:

```js
{
  maxProfit: 6,
  buyDay: 1,
  buyPrice: 2,
  sellDay: 2,
  sellPrice: 8
}
```

✅ This is correct!

---
