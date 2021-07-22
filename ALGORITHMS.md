Searching Algorithm

1. Linear Searching
Pseudocode:
the function acceps an array and a value,
loop through the array and check if current element equal to value
if it is return the index at which the element is found
if the value is never found, find -1.
indexOf(), includes(), find(), findIndex()
O(n) - Time Complexity
Best Case: O(1) Worst Case: O(n)

2. Binary Searching
It is faster
It can eliminate half of the iteams at a time
It only works on sorted list
Pseudowcode:
Function accepts a sorted array and value,
create left pointer at the start of the array, and a right pointer at the end of the array
while left pointer comes before the right pointer
   create a pointer in the middle
   if you find the value you want, return the index.
   if the value is too small, move the pointer up
   if value is too large move the right pointer down
if you never find the value return -1
Time Complexity:
Worst case = O(log n) Best Case: O(1)

3. Naive String search
Search a substring in a string
Pseudocode:
Loop over longer string
loop over shorter string
if characters dont match break out inner loop
if chanracters match keep going
if you complete the inner loop and found match  increment the count of matches
return count

Sorting Algorithm:
Built-in sort:
It accepts an optional comparator function
the comparator looks at pairs of elements (a and b), determines their sort order based on return value

1. Bubble Sort
the idea of bubbling largest element to the top
Swapping:
ES5
var temp = arr[idx1];
arr[idx1] =arr[idx2];
arr[idx2] = temp;
Es2015
[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]

Pseudocode:
start looping with a variable called i, from the end of array to the beginning
start a inner loop from beginning to i-1
if arr[j] is greated than arr[j+1] then swap;
return the sorted array
Tim-complexity = O(n2) worst case,  O(n) best case

2. Selection Sort
Similar to bubble sort, but instead of placing larger values into sorted position, it places small values into sorted position.
We are selecting smallest one and placing the element in beginning.
Pseudocode:
store the first element as smallest value, you have see so far
compare this item to the next item in the array untill you find smaller number.
if smaller number is found, designate that smaller number to be new minimum and continue untill the end of array.
if the minimum is not the value you initially began , then swap the two values.
repeat this with next element untill array is sorted.
Time Complexity:
worst:O(n2)  Best: O(n2)

3. Insertion Sort
Pseudocode:
Start by picking the second element in the array
Now compare the scecond element with the one before and swap if necessary
Continue to the next element and if it is in the incorrect order, iterate through the sorted position to place the element in the correct place.
Repeat untill array is sorted.
Time Complexity: O(n2) best case O(n)

SPace complexity for all the three sorts is O(1);

Faster Sorts:
To improve the complexity from O(n2) to O(n log n)

1. Merge Sort
WE split big array into individual arrays and we then start merging them.
8 elements arra -> split into 2, 4 elements arrays --> 4, 2 elements arrays -> 8, 1 element arrays --> merge 2 1 element arrays -> merge 2  2 element array -> merge 2 4 element arrays
--> Final sorted array

First we need to know how to merge two sorted arrays.
Pseudocode for Merge two arrays:
create an empty array, look for the smallest values in each empty array.
if arr1 value  is smaller than arr2 value, then push first value in arr1 to results and move on to the next value in arr1
if arr2 value  is smaller than arr1 value, then push the value in arr2 to results and move on to the next value in arr2
once we exhaust one array, push in all the remaining values from other array

Pseudocode for merge sort:
Break up the array into halves untill you have arrays that are empty or have one element
Once you have smaller arrays, merge those arrays with other sorted arrays untill you have the full array

Time Complexity:
O(nlogn)
For 8 elements we are splitting it in 3 decompositions and for 32 elements we are splitting in 5 decompositions, so the relation is O(log n) i.e  2**3 = 8 2**5 = 32 ---> log 8 = 3;
And we are making n comparisons which is O(n)
Space Complexity:
O(n)

2. Quick Sort
Unlike the merge sort, it all depends on the pivot.

Pivot Helper Pseudocode:
it can accept three arguments, aray, start index and end index (default to 0 , and array length minus 1)
grab the pivot from start of the array
store the current pivot index in a variable
loop through from start untill the end
    if pivot > currentElement, increment the pivot index then swap the current element with element at the pivot index
swap the starting element with the pivot index
return the pivot index

Quicksort Pseudocode:
call the pivot helper on the array
when the helper returns the pivot index, recursively call the pivot helper on the subarray to the left and right of index

Big O complexity:
O(logn) decoppositions and O(n) comparisons per decomposition
O(nlogn) Best case
O(n2) worst case - (When we try to sort the sorted array)

3. Radix Sort
It works on list of numbers
It never makes comparisons between elements
Initiall create helper methods for getDigit, mostDigits, digitCount.

Radix sort Pseudocode:
define a function that accepts a list of numbers.
Figure out how many digits largest number has
loop from k=0 to the largest number of digits
for each iteration of the loop:
   create bucket for each digit (0 to 9)
   place each digit in corresponding bucket of kth digit
Replace existing array with values in our buckets starting from 0 to 9 bucket
return list at end
Time Complexity:
O(nk) -- > where n is no of numbers and k is the number of digits
space Complexity:
O(n+k)
