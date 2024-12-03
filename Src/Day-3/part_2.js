const fs = require("fs");

fs.readFile("data.txt", "utf-8", (error, data) => {
    if (error) {
        console.log(error);
    } else {
        let mainString = data;

        
        const mulPattern = /mul\((\d{1,3}),(\d{1,3})\)/g; 
        const doDontPattern = /do\(\)|don't\(\)/g; 

        let sum = 0; 
        let isEnabled = true; 

        
        const instructions = mainString.match(/do\(\)|don't\(\)|mul\(\d{1,3},\d{1,3}\)/g) || [];

        for (let instruction of instructions) {
            if (instruction === "do()") {
                isEnabled = true; 
            } else if (instruction === "don't()") {
                isEnabled = false; 
            } else {
                
                if (isEnabled) {
                    let matches = instruction.match(mulPattern);
                    if (matches) {
                        const [_, num1, num2] = instruction.match(/mul\((\d{1,3}),(\d{1,3})\)/);
                        sum += Number(num1) * Number(num2); // Add product to sum
                    }
                }
            }
        }

        console.log(sum);
    }
});
