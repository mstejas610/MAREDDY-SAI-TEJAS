Here are the basic Haskell programs for the given tasks without using any external packages or switch-case-like structures.


---

Set 1 - Categorize Age & Student Score Management System

1. Categorize Age Function

```
categorizeAge :: Int -> String
categorizeAge age
    | age < 0   = "Invalid"
    | age <= 13 = "Child"
    | age <= 20 = "Teenager"
    | age <= 65 = "Adult"
    | otherwise = "Senior Citizen"

main :: IO ()
main = do
    putStrLn "Enter age: "
    ageInput <- getLine
    let age = read ageInput :: Int
    putStrLn ("The person is categorized as: " ++ categorizeAge age)
```
---

2. Student Score Management System

```
import System.IO (hFlush, stdout)

manageScores :: [Int] -> IO ()
manageScores scores = do
    putStrLn "\nStudent Score Management System"
    putStrLn "1. Add Score"
    putStrLn "2. View All Scores"
    putStrLn "3. Find Highest Score"
    putStrLn "4. Exit"
    putStr "Enter your choice: "
    hFlush stdout
    choice <- getLine

    case choice of
        "1" -> do
            putStr "Enter score: "
            hFlush stdout
            scoreInput <- getLine
            let score = read scoreInput :: Int
            putStrLn "Score added successfully!"
            manageScores (score : scores)
        "2" -> do
            putStrLn "Scores: "
            print scores
            manageScores scores
        "3" -> do
            if null scores 
                then putStrLn "No scores available!"
                else putStrLn ("Highest score: " ++ show (maximum scores))
            manageScores scores
        "4" -> putStrLn "Exiting..."
        _   -> do
            putStrLn "Invalid choice, try again."
            manageScores scores

main :: IO ()
main = manageScores []
```

---

Set 2 - Triangle Type & Shopping Cart System

1. Triangle Type Function

```
triangleType :: (Int, Int, Int) -> String
triangleType (a, b, c)
    | a + b <= c || a + c <= b || b + c <= a = "Not a valid triangle"
    | a^2 + b^2 == c^2 || a^2 + c^2 == b^2 || b^2 + c^2 == a^2 = "Right Triangle"
    | a^2 + b^2 > c^2 && a^2 + c^2 > b^2 && b^2 + c^2 > a^2 = "Acute Triangle"
    | otherwise = "Obtuse Triangle"

main :: IO ()
main = do
    putStrLn "Enter three sides of the triangle:"
    putStr "Side 1: "
    aInput <- getLine
    putStr "Side 2: "
    bInput <- getLine
    putStr "Side 3: "
    cInput <- getLine

    let a = read aInput :: Int
        b = read bInput :: Int
        c = read cInput :: Int

    putStrLn ("The triangle is classified as: " ++ triangleType (a, b, c))

```
---

2. Shopping Cart Management System

```
import System.IO (hFlush, stdout)

type Item = (String, Int)

shoppingCart :: [Item] -> IO ()
shoppingCart cart = do
    putStrLn "\nShopping Cart Management System"
    putStrLn "1. Add Item to Cart"
    putStrLn "2. View All Items"
    putStrLn "3. Calculate Total Price"
    putStrLn "4. Exit"
    putStr "Enter your choice: "
    hFlush stdout
    choice <- getLine

    case choice of
        "1" -> do
            putStr "Enter item name: "
            hFlush stdout
            itemName <- getLine
            putStr "Enter item price: "
            hFlush stdout
            priceInput <- getLine
            let price = read priceInput :: Int
            putStrLn "Item added successfully!"
            shoppingCart ((itemName, price) : cart)
        "2" -> do
            putStrLn "Items in Cart:"
            mapM_ (
```
