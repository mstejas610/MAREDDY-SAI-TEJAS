The provided PDF introduces the Haskell programming environment, focusing on the Glasgow Haskell Compiler (GHC) and its interactive interpreter, GHCi. Here's a structured summary of key concepts and features:

---

### **1. Haskell Tools**
- **GHC**: Optimizing compiler for native code, supports parallelism, debugging, and performance analysis.
- **GHCi**: Interactive interpreter for testing expressions, debugging, and exploring modules.
- **runghc**: Executes Haskell scripts without prior compilation.

---

### **2. Basic GHCi Usage**
- **Calculator-like operations**:
  ```haskell
  ghci> 2 + 2        -- 4
  ghci> 9.0 / 4.0    -- 2.25
  ```
- **Negative numbers**: Require parentheses in infix expressions to avoid parsing errors:
  ```haskell
  ghci> 2 + (-3)     -- Valid
  ghci> 2 + -3       -- Error
  ```

---

### **3. Type System**
- **Strong, static, and inferred types**:
  - No implicit type conversions (e.g., `True && 1` causes an error).
  - Use `:type` to check types:
    ```haskell
    ghci> :type 'a'   -- 'a' :: Char
    ```
- **Common types**:
  - `Int`, `Integer`, `Double`, `Bool`, `Char`, `String`.

---

### **4. Lists and Tuples**
- **Lists**: Homogeneous, with functions like `head`, `tail`, `take`, `drop`:
  ```haskell
  ghci> tail [1,2,3]   -- [2,3]
  ghci> take 2 "Hello"  -- "He"
  ```
- **Tuples**: Fixed-size, heterogeneous collections:
  ```haskell
  ghci> (True, "Haskell") :: (Bool, String)
  ```

---

### **5. Functions**
- **Definition**:
  ```haskell
  add :: Int -> Int -> Int
  add x y = x + y
  ```
- **Conditionals**: Both branches must have the same type:
  ```haskell
  isEven n = if n `mod` 2 == 0 then True else False
  ```
- **Lazy evaluation**: Defers computation until needed (e.g., avoids infinite loops unless required).

---

### **6. Modules and I/O**
- **Loading modules**:
  ```haskell
  ghci> :module + Data.Ratio  -- For rational numbers (e.g., 11 % 29)
  ```
- **Basic I/O**:
  ```haskell
  main = do
    putStrLn "Enter your name:"
    name <- getLine
    putStrLn ("Hello, " ++ name)
  ```

---

### **7. Key Features**
- **Pure functions**: No side effects (e.g., `length`).
- **Impure functions**: Marked with `IO` (e.g., `getLine :: IO String`).
- **Recursion and pattern matching**: Core to Haskell’s design (e.g., factorial example).

---

### **8. Common Pitfalls**
- **Operator precedence**: Use parentheses to clarify (e.g., `head (drop 4 "azerty")`).
- **Whitespace sensitivity**: Indentation matters in multi-line definitions.
- **Type errors**: Strict type checks prevent runtime errors (e.g., mixing `Bool` and `Int`).

---

### **9. Example Workflow**
1. Write functions in a `.hs` file:
   ```haskell
   -- myDrop.hs
   myDrop n xs = if n <= 0 || null xs then xs else myDrop (n-1) (tail xs)
   ```
2. Load into GHCi:
   ```haskell
   ghci> :load myDrop.hs
   ghci> myDrop 2 "Haskell"  -- "skell"
   ```

---

This guide provides a foundation for using Haskell’s tools, understanding its type system, and writing functional code. Practice in GHCi is essential to grasp lazy evaluation and Haskell’s unique paradigms.
