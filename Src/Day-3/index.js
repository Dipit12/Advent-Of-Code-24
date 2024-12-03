const fs = require("fs");

fs.readFile("data.txt", "utf-8", (error, data) => {
    if (error) {
        console.log(error);
    } else {
        let mainString = data;
        const RegExPattern = /mul\(\d{1,3},\d{1,3}\)/g;
        // Array to store the correct mul() formats
        let arr = mainString.match(RegExPattern) || [];
        console.log(arr); // Array of correct mul() format

        let sum = 0;
        const pattern_for_extracting_nums = /mul\((\d{1,3}),(\d{1,3})\)/;

        
        arr.forEach((match) => {
           
            const [_, num1, num2] = match.match(pattern_for_extracting_nums);
            sum += Number(num1) * Number(num2);
        });

        console.log(sum);
    }
});
