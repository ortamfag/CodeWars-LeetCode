const productExceptSelf = (nums) => {
    const answer = [];
    for (let i = 0; i < nums.length; i += 1) {
        const product = nums.reduce((sum, current, index) => {
            if (index === i) {
                return sum
            }
            return sum * current
        }, 1)
        answer.push(product);
    }

    return answer
};

console.log(productExceptSelf([4,3,2,1,2]))