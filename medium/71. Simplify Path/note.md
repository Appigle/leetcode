To **simplify a Unix-style absolute path**, we simulate the navigation using a **stack**. This mimics how directories are pushed and popped when you move into subfolders or backtrack (`..`).

---

## ✅ Canonical Path Simplification Rules Recap:

- `'/'` separates directories.
- `'.'` means **current directory** → ignore it.
- `'..'` means **go up to the parent directory** → pop from the stack (if any).
- Multiple `'/'` → treat as a **single slash**.
- Any other names (like `'...'`, `'folder'`) are treated as **valid directory names**.

---

## 🧠 Solution Approach:

1. Split the input path by `'/'`.
2. Use a **stack** to manage the directory names.
3. For each part:

   - Ignore empty strings and `'.'`
   - If `'..'` → pop from stack if not empty
   - Else → push the valid directory name onto the stack

4. Join the stack with `'/'` and add leading `'/'`.

---

## ✅ JavaScript Code:

```javascript
function simplifyPath(path) {
  const parts = path.split('/');
  const stack = [];

  for (const part of parts) {
    if (part === '' || part === '.') {
      continue;
    } else if (part === '..') {
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      stack.push(part);
    }
  }

  return '/' + stack.join('/');
}
```

---

## 🧪 Test Cases:

### 1. Input: `"/home/"`

**Output:** `"/home"`

### 2. Input: `"/home//foo/"`

**Output:** `"/home/foo"`

### 3. Input: `"/home/user/Documents/../Pictures"`

**Output:** `"/home/user/Pictures"`

### 4. Input: `"/../"`

**Output:** `"/"`
(_You can't go above root_)

### 5. Input: `"/.../a/../b/c/../d/./"`

**Output:** `"/.../b/d"`
(`"..."` is treated as a valid directory)

---

## 🔄 Time and Space Complexity

| Metric | Value          |
| ------ | -------------- |
| Time   | O(n)           |
| Space  | O(n) for stack |
