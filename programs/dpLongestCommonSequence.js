const lcs = (str1, str2) => {
    let m = str1.length
    let n = str2.length
    // craete a matrix of m*n
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0))
    // [    a   b   c
    //   a [ 0, 0, 0, 0 ],
    //   b [ 0, 0, 0, 0 ],
    //   c [ 0, 0, 0, 0 ],
    //   d [ 0, 0, 0, 0 ],
    //   e [ 0, 0, 0, 0 ],
    //     [ 0, 0, 0, 0 ]
    // ]

    for(let i = m-1; i >=0; i--) {
        for (let j = n-1; j >= 0; j--) {
            if ( str1[i] === str2[j] ) {
                // go diagonally up
                dp[i][j] = 1 + dp[i+1][j+1]
            } else {
                // go up
                dp[i][j] = Math.max(dp[i][j + 1], dp[i+1][j])
            }
        }
    }

    return dp[0][0]
}

// time complexity O(m*n)
// Space complexity O(m*n)

console.log(lcs('abcde', 'ace'))