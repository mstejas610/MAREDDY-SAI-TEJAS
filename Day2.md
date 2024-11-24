# Day-2
## 22nd November 2024
----
## HackerRank problems

### Problem 1 : Time Conversion
#### Problem Description :
***Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.***
#### Approach :
Split hours `AM/PM` from the input string `s`. If `AM` is in string s and hours is 12, then hours = 0 else hours remain same . If `PM` is in string and hours != 12 then hours = hours+12 else hours remain same.
#### Code :
```
  hours = int(s[:2])
    if "AM" in s:
        hours = 0 if hours == 12 else hours
    else:
        hours = hours if hours == 12 else hours + 12
    return f"{hours:02}{s[2:8]}"
```
### Problem 2 : Compare the Triplets
#### Problem Description :
Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

- If a[i] > b[i], then Alice is awarded 1 point.
- If a[i] < b[i], then Bob is awarded 1 point.
- If a[i] = b[i], then neither person receives a point.
Comparison points is the total points a person earned.

***Given a and b, determine their respective comparison points.***

#### Approach :
- Initialize counters Aice and Bob to compare their respective comparision points.
- Using a `for` loop to iterate throug the elements in the arrays
  - `if a[i] > b[i] :` increment the score counter for **Alice**
  - `elif a[i] < b[i] :` increment counter for **Bob**
- Then reurn alice 
#### Code :
```
Alice = 0
Bob =0
    
for i in range(len(a)):
   if a[i] > b[i] :
      Alice += 1
   elif a[i] < b[i] :
      Bob += 1
            
   return(Alice, Bob)
```
