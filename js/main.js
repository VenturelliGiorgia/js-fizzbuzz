for (let i = 0; i < 100; i++) {


    if (i % 3 === 0 & i % 5 === 0) { //se i è divisibile per 3 e 5 scrivi FizzBuzz
        console.log("FizzBuzz");
    }
    else if (i % 5 === 0) { //se i è divisibile per 5 scrivi Buzz
        console.log("Buzz");
    }
    else if (i % 3 === 0) { //se i è divisibile per 3 scrivi Fizz
        console.log("Fizz");
    }
    else {
        console.log(i);
    }

}