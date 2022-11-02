const output = document.querySelector("div.output");
for (let i = 0; i < 100; i++) {


    if (i % 3 === 0 & i % 5 === 0) { //se i è divisibile per 3 e 5 scrivi FizzBuzz
        console.log("FizzBuzz");
        output.append(" FizzBuzz ");
    }
    else if (i % 5 === 0) { //se i è divisibile per 5 scrivi Buzz
        console.log("Buzz");
        output.append(" Buzz ");
    }
    else if (i % 3 === 0) { //se i è divisibile per 3 scrivi Fizz
        console.log("Fizz");
        output.append(" Fizz ");
    }
    else {
        console.log(i);
        output.append(" ");
        output.append(i);
        output.append(" ");
    }

}