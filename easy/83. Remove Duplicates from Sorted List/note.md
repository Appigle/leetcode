83. Remove Duplicates from Sorted List

Time and Space Complexity
Time: O(n) – you visit each node once.
Space: O(1) – in-place.

How It Works (Step-by-Step Example)
Input: [1, 1, 2, 3, 3]

Initial List: 1 → 1 → 2 → 3 → 3

current = 1, current.next = 1 → duplicate → skip next
List becomes: 1 → 2 → 3 → 3

current = 1, current.next = 2 → not duplicate → move ahead

current = 2, current.next = 3 → not duplicate → move ahead

current = 3, current.next = 3 → duplicate → skip next
List becomes: 1 → 2 → 3

Done! ✅
