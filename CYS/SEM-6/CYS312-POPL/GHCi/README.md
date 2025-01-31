Here's a concise guide to using **Haskell in GHCi** (Glasgow Haskell Compiler Interactive), covering essential commands and workflows:

---

### **1. Starting GHCi**
- Install GHC (via [GHCup](https://www.haskell.org/ghcup/)) if not already installed.
- Launch the REPL:
  ```bash
  ghci
  ```
  You’ll see a prompt like `Prelude>`.

---

### **2. Basic Commands**
| Command              | Description                                      |
|----------------------|--------------------------------------------------|
| `:q` or `:quit`      | Exit GHCi.                                       |
| `:l <file>`          | Load a Haskell file (e.g., `:l MyCode.hs`).      |
| `:r` or `:reload`    | Reload the current file after edits.             |
| `:t <expression>`    | Show the type of an expression.                  |
| `:i <name>`          | Get info about a function/type (e.g., `:i (+)`). |
| `:set prompt ">> "`  | Customize the prompt.                            |
| `:?`                 | List all available commands.                    |

---

### **3. Evaluating Expressions**
- Basic arithmetic:
  ```haskell
  Prelude> 2 + 3 * 4  -- Output: 14
  ```
- Lists and ranges:
  ```haskell
  Prelude> [1..5]  -- [1,2,3,4,5]
  Prelude> ['a'..'e']  -- "abcde"
  ```
- Strings:
  ```haskell
  Prelude> "Hello " ++ "Haskell!"  -- "Hello Haskell!"
  ```

---

### **4. Defining Functions/Values**
- Use `let` for definitions:
  ```haskell
  Prelude> let square x = x * x
  Prelude> square 5  -- 25
  ```
- Multi-line definitions with `:{` and `:}`:
  ```haskell
  Prelude> :{
  Prelude| let factorial n
  Prelude|     | n == 0 = 1
  Prelude|     | otherwise = n * factorial (n - 1)
  Prelude| :}
  Prelude> factorial 5  -- 120
  ```

---

### **5. Working with Modules**
- Import modules:
  ```haskell
  Prelude> import Data.List
  Data.List> nub [1,2,2,3]  -- Remove duplicates: [1,2,3]
  ```
- Check loaded modules:
  ```haskell
  :show imports
  ```

---

### **6. Debugging & Profiling**
- Trace evaluations with `:trace`:
  ```haskell
  Prelude> :trace factorial 3
  ```
- Enable timing stats:
  ```haskell
  Prelude> :set +s
  ```

---

### **7. Managing Scope**
- Variables/functions persist until you `:reload` or `:quit`.
- Remove a binding with `:module`:
  ```haskell
  Prelude> :module -Data.List  -- Unload Data.List
  ```

---

### **8. Advanced Features**
- Check the kind of a type:
  ```haskell
  Prelude> :k Maybe
  Maybe :: * -> *
  ```
- Run shell commands:
  ```haskell
  Prelude> :! ls  -- List files in the current directory
  ```

---

### **9. Example Workflow**
1. Create `Math.hs`:
   ```haskell
   -- Math.hs
   module Math where
   factorial 0 = 1
   factorial n = n * factorial (n - 1)
   ```
2. Load and test:
   ```haskell
   Prelude> :l Math.hs
   Math> factorial 5  -- 120
   Math> :t factorial  -- factorial :: Num a => a -> a
   Math> :r  -- After editing Math.hs
   ```

---

### **10. Tips & Tricks**
- Use **Tab completion** for commands and identifiers.
- Press **Up Arrow** to recall history.
- Customize GHCi with a `.ghci` file in your home directory:
  ```haskell
  -- .ghci
  :set prompt "λ> "
  import Data.List
  ```

---

### **Common Pitfalls**
- Redefining functions? Use `:reload` after editing your file.
- Shadowing variables? Use unique names or restart GHCi.
- Type errors? Check with `:t <expression>`.

---

This guide should help you navigate GHCi efficiently. Experiment and use `:?` to explore more commands!
