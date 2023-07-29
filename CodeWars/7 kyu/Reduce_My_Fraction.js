function reduce(a, b) {
    // let [numerator, denominator] = fraction

    // for (let iterator = Math.min(...fraction); iterator > 0; iterator -= 1) {
    //     if (numerator % iterator === 0 && denominator % iterator === 0) {
    //         numerator = numerator / iterator
    //         denominator = denominator / iterator
    //     }
    // }

    // return [numerator, denominator]

    if (b != 0) {
        return reduce(b, a % b);
      } else {
        return a;
      }

}

console.log(reduce(80, 120))