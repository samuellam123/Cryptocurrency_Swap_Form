var sum_to_n_a = function(n) {
    // Summation = n(n+1)/2; O(1) time, O(1) space
    return (n * (n + 1)) / 2; 
};

var sum_to_n_b = function(n) {
    // For loop; O(n) time, O(1) space
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
};

var sum_to_n_c = function(n) {
    //Dynamic Programming, avoid redundant calculations; O(n) time, O(n) space
    if (n <= 0) return 0;

    let dp = new Array(n + 1).fill(0);
  
    for (let i = 1; i <= n; i++) {
      dp[i] = dp[i - 1] + i;
    }
  
    return dp[n];
};
