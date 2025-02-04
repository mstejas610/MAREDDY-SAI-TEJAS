# HASKELL BASICS

#### Printing

- putStrLn prints a string only, if you want to print variables of other types, show funtion must be used to print those.
- print can handle any datatype.
- Technically print uses show on putStrLn

#### Getting input

- getLine read only as a string
- readLn reads the datatype declared
- readLn read a => IO a
- examples of readLn .. let a = readLn :: IO Int  
  same with getLine would be  
  num <- getLine  
  let a = read num :: Int

#### Lists 

A List is a sequence of elements of same type.

Here are some functions on a list
haskell
ghci> let x = [1,2,3,4,5]
ghci> head x
1
ghci> last [1,2,3,4,5]
5
ghci> tail x
[2,3,4,5]
ghci> x !! 2
3
ghci> x !! 4
5
ghci> x !! 5
*** Exception: Prelude.!!: index too large
CallStack (from HasCallStack):
  error, called at libraries/base/GHC/List.hs:1368:14 in base:GHC.List
  tooLarge, called at libraries/base/GHC/List.hs:1378:50 in base:GHC.List
  !!, called at <interactive>:6:3 in interactive:Ghci6
ghci> take 3 x
[1,2,3]
ghci> drop 3 x
[4,5]
ghci> length x
5
ghci> sum x
15
ghci> product x
120
ghci> reverse x
[5,4,3,2,1]
ghci> x ++ [6, 7]
[1,2,3,4,5,6,7]


#### Types
haskell
ghci> :t ['a', 'b', 'c']
['a', 'b', 'c'] :: [Char]
ghci> :t ('a', 'b', 'c')
('a', 'b', 'c') :: (Char, Char, Char)
ghci> :t [(True, 'a'), (False, 'b')]
[(True, 'a'), (False, 'b')] :: [(Bool, Char)]
ghci> :t ([True, False], [0, 1])
([True, False], [0, 1]) :: Num a => ([Bool], [a])
ghci> :t [tail, init, reverse]
[tail, init, reverse] :: [[a] -> [a]]

ghci> second xs = head (tail xs)
ghci> :t second
second :: [a] -> a
ghci> swap (x,y) = (y,x)
ghci> :t swap
swap :: (b, a) -> (a, b)
ghci> pair x y = (x,y)
ghci> :t pair
pair :: a -> b -> (a, b)
ghci> double x = x*2
ghci> :t double 
double :: Num a => a -> a
ghci> palindrome xs = reverse xs == xs
ghci> :palindrome
unknown command ':palindrome'
use :? for help.
ghci> :t palindrome
palindrome :: Eq a => [a] -> Bool
ghci> twice f x = f (f x)
ghci> :t twice
twice :: (t -> t) -> t -> t


#### Conditional Statements

haskell
-- Basic if-else example
checkEvenOdd :: Int -> String
checkEvenOdd x = if x `mod` 2 == 0 then "Even" else "Odd"

-- Nested if-else example 
checkNumber :: Int -> String
checkNumber x = if x > 0 then "Positive" 
                else if x == 0 then "Zero" else "Negative"

-- Using guards for conditions
checkGrade :: Int -> String
checkGrade grade
  | grade >= 90 = "A"
  | grade >= 80 = "B"
  | grade >= 70 = "C"
  | grade >= 60 = "D"
  | otherwise   = "F"

#### Recursion

haskell
--and :: [bool] -> bool
and :: [bool] -> bool
and [] = True
and (True:xs) = and xs
and (False:_) = False

--concat :: [[a]] -> [a]
concat :: [[a]] -> [a]
concat [] = []
concat [x] = [x]
concat (x:xs) = x ++ concat xs

--replicate :: Int -> a -> [a]
replicate :: Int -> a -> [a]
replicate 0 _ = []
replicate n x = x ++ replicate (n-1) x

--(!!) :: [a] -> Int -> a
(!!) :: [a] -> Int -> a
(!!) [] n = error "Index too large"
(!!) (x:xs) 0 = x
(!!) (x:xs) n = (!!) xs n-1

--elem :: Eq a => a -> [a] -> Bool
elem :: Eq a => a -> [a] -> Bool
elem a [] = False
elem a (x:xs) = if a == x then True else elem a xs

#### Higher Order Functions;

what are fucntons that return fuctions better known as 

Functions that return other functions are commonly known as higher-order functions in functional programming. More specifically, when a function returns another function, it is often referred to as currying or function composition, depending on how it's used.

Key Concepts:  
Higher-Order Functions: Functions that take functions as arguments or return functions as results.  
Curried Functions: Functions that return another function instead of taking all arguments at once.  
Function Composition: Creating new functions by combining existing functions.

Express the comprehension [f x | x <- xs, p x] using functions filter and map.

haskell
map f (filter p xs)


redefine map f and filter p using foldr.
