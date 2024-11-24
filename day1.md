# Day -1 
## 21st November 2024
---
## Hackerrank two problems soleved
- [x] ~~Problem 1:~~ [Plus Minus](https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one)

- [x] ~~Problem 2:~~ [Mini-Max Sum](https://www.hackerrank.com/challenges/one-week-preparation-kit-mini-max-sum?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one)

- [ ] <mark> Problem 3:[Time Conversion](https://www.hackerrank.com/challenges/one-week-preparation-kit-time-conversion/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one)</mark>

### <span style = "color: Purple;">Problem 1: Plus Minus</span>
#### *Problem Description :*
***Given an array of integers, calculate the fractions of positive, negative and zero numbers in the array.***
#### Approach :
Use counters for positive, negative and zero numbers in the array. Loop through the array iteratively using a `for` loop and use conditional `if` statements to increment the counters set up for counting the positive, negative and zero numbers in the array. The output is printed by dividing the counters set up for positive, negative and zero numbers after iterating through the array.

#### Pseudocode :
```
initialize p,n,z
## These are the counters set up for counting the positive, negative and zero numbers in the array.
for i in range(len(arr)):
  if arr[i] > 0:
    p += 1
  elif arr[i] < 0:
    n += 1
  else :
    z += 1
```

### Problem 2: Mini-Max Sum
#### Problem Description :
***Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.***

#### Approach:
Use the `sort` and `sum` functions to Sort the array and find out the sum of the elements in the array. Now from the sorted array subtract the first and last elements to return the values `min`sum and `max`sum

#### Code :
```
sort.arr()
sum = sum(arr)
min = sum - arr[4]
max = sum - arr[0]
return min,max
```

---

## Git CLI 
### Git CLI commands used
| Command | Description |
| --- | --- |
| `git add .` | Add all files in the current directory to the staging area. |
| `git commit -m "commit message"` | Commit the changes with a meaningful commit message.
| `git push origin main` | Push the committed changes to the remote repository. |
|![Screenshot 2024-11-21 214456](https://github.com/user-attachments/assets/f6f7c11e-a272-4022-b73d-6991f7138c46)| Changes the global editor to `VS Code`  and Opens `VS Code` to change the global variables

![Batch](https://img.shields.io/badge/Batch-22CYS-brightgreen)
![UG](https://img.shields.io/badge/UG-blue)
![Subject](https://img.shields.io/badge/Subject-ii-orange)</br>
![Lecture](https://img.shields.io/badge/Lecture-2-red)
![Practical](https://img.shields.io/badge/Practical-3-yellow)
![Credits](https://img.shields.io/badge/Credits-3-orange)
![Regular_Students](https://img.shields.io/badge/Regular%20Students-72-yellow)
