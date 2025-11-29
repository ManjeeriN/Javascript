> 
    - When a line ends with `)` and the next line starts with `[,` the parser thinks: "Maybe this is array/bracket notation on the previous line" — like something()[index]. So ASI doesn't kick in.
    - Adding a semicolon after `)` tells the parser explicitly that the statement is complete, preventing it from trying to merge with line starts with `[,`.

## LinkedList: 
### A ListNode is an object that represents a "node" in a linked list, with two main fields
- Val (or value): The value stored in the node
- next: A reference to the next node in the list (or 'null' if it's the last one)

## Prime or not
> 6k+-1 algorithm
>-1,0,1 - not prime
>2,3 - prime
> check if divisible by 5, 7 upto sqrt of num
```
√29 ≈ 5.38, so i*i <= 29 means i <= 5
i=5: 29%5=4≠0, 29%7=1≠0  → continue
i=11: 11*11=121 > 29 → exit loop
Return true ✅ (29 is prime)
```
