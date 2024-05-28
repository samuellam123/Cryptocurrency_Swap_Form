var sum_to_n_a = function(n) {
    // For loop, O(n)
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
};

var sum_to_n_b = function(n) {
    // Summation = n(n+1)/2, O(1)
    return (n * (n + 1)) / 2;
};

var sum_to_n_c = function(n) {
    // Recursion, 
    if (n === 1) {
    return 1;
    }
    return n + sum_to_n(n - 1);
};