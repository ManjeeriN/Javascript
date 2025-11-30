> 
    - When a line ends with `)` and the next line starts with `[,` the parser thinks: "Maybe this is array/bracket notation on the previous line" — like something()[index]. So ASI doesn't kick in.
    - Adding a semicolon after `)` tells the parser explicitly that the statement is complete, preventing it from trying to merge with line starts with `[,`.

- https://internshala.com/blog/infosys-power-programmer-coding-questions-and-answers/ in javaScript

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
## LCS - Longest Common subsequence. 
- The longest common subsequence (LCS) is the longest sequence that appears in the same relative order (not necessarily consecutively) in both given sequences.

## Infix Expression
- ("operand1 operator operand2" ) a + b
- The precedence order is as follows: (^) has the highest precedence and is evaluated from right to left, (* and /) come next with left to right associativity, and (+ and -) have the lowest precedence with left to right associativity.


| Operator |	| Precedence | 
| --- | --- | --- |
| Exponents | ^ |	High |
| Multiplication | * | Medium |
| Division | / | Medium |
| Addition | + | Low |
| Subtraction | - | Low |


## Prefix Expression
- In prefix notation, the operator is written first, followed by its operands. For example, the infix expression "a + b" would be written as "+ a b" in prefix notation.

## Postfix Expression
- the operator follows its operands.
-  operands are written first, followed by the operator. For example, the infix expression "5 + 2" would be written as "5 2 +" in postfix notation.

## Angarams
- If the strings are anagrams, then their characters will be the same, just rearranged. Therefore, if we sort the characters in both strings, the sorted strings will be identical if the original strings were anagrams.