const validAnagram= (s1, s2) => {
    if(s1.length !== s2.length) return false;
    s1 = s1.split('').sort().join('');
    s2 = s2.split('').sort().join('');
    return s1 === s2;
}

console.log(validAnagram('abc', 'babc'))

// Time Complexity: O(m × log(m) + n × log(n))
// Space Complexity:  O(1)