# 🧠 What Is a Greedy Algorithm?

A **greedy algorithm** builds up a solution **step by step**, **always choosing the best (most optimal) option at each step**, without reconsidering previous decisions.

> It’s like making the best local choice in hopes it leads to the best global solution.

---

## 🏁 Classic Greedy Algorithm Characteristics:

| Property                              | Explanation                                                                                  |
| ------------------------------------- | -------------------------------------------------------------------------------------------- |
| **Local Optimal Choice**              | At each step, pick what looks best **right now**                                             |
| **No Backtracking**                   | Once a decision is made, it’s **never reversed**                                             |
| **Fast & Simple**                     | Usually runs in **O(n log n)** or **O(n)**                                                   |
| **Optimal only in specific problems** | Doesn't always give the correct answer unless the problem has the **greedy-choice property** |

---

## ✅ Real-World Examples of Classic Greedy Algorithms:

### 1. **Activity Selection Problem**

_Select the maximum number of non-overlapping meetings from a list of meeting times._

🔧 Greedy choice: Always pick the **earliest finishing meeting** next.

---

### 2. **Coin Change (Minimum Coins)**

_Find the minimum number of coins to make a certain amount._

🔧 Greedy choice: Always use the **largest coin denomination** first.

> ⚠️ This only works if the coin system is canonical (e.g., U.S. coins). It **fails** in some custom systems.

---

### 3. **Huffman Coding** (used in compression)

_Build an optimal prefix tree._

🔧 Greedy choice: Always combine the **two lowest-frequency characters**.

---

### 4. **Dijkstra’s Algorithm**

_Shortest path in a graph with non-negative edge weights._

🔧 Greedy choice: Always expand the **closest unvisited node**.

---

## 💥 Kadane’s Algorithm: A Greedy Example

In the **Maximum Subarray** problem:

- At each step, choose between:

  - Extending the current subarray
  - Starting a new one

This is **greedy** because:

- It always picks the **locally best option** (`max(currentNum, currentSum + currentNum)`)
- And never reconsiders earlier elements

---

## ⚠️ Greedy ≠ Always Optimal

A greedy algorithm only works **if the problem has:**

- **Greedy-choice property**: A globally optimal solution can be reached by choosing the best local option.
- **Optimal substructure**: A problem’s solution contains optimal solutions to subproblems.

---

## 🧩 Summary

| Term        | Meaning                                                    |
| ----------- | ---------------------------------------------------------- |
| Greedy      | Always take the best local choice at each step             |
| Classic     | Simple, clean greedy logic (no recursion or backtrack)     |
| Good for... | Optimization problems like scheduling, resource allocation |

---
