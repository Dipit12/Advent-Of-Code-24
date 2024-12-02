const fs = require("fs");

let leftArray = [];
let rightArray = [];

fs.readFile("day_1.txt", "utf8", (err, data) => {
    // part-1
    if (err) {
        console.log(err);
    } else {
        const mainArr = data.split("\n").map(line => 
            line.trim().split(/\s+/) 
        );

        for (const parts of mainArr) {
            if (parts.length > 0) {
                leftArray.push(parts[0]); 
                if (parts.length > 1) {
                    rightArray.push(parts[1]); 
                }
            }
        }

        console.log("Left Array:", leftArray);
        console.log("Right Array:", rightArray);

        leftArray.sort();
        rightArray.sort();

        let sum = 0;
        for(let i = 0 ; i< leftArray.length; i++){
            sum += Math.abs(leftArray[i] - rightArray[i]);
        }
        console.log(sum);

        // part-2
        const frequencyMap = {};
        for (let i = 0; i < rightArray.length; i++) {
            const num = rightArray[i];
            if (frequencyMap[num]) {
                frequencyMap[num] += 1; 
            } else {
                frequencyMap[num] = 1; 
            }
        }

        
        let similarityScore = 0;
        for (let i = 0; i < leftArray.length; i++) {
            const num = leftArray[i];
            if (frequencyMap[num]) {
                similarityScore += num * frequencyMap[num]; 
            }
        }
        console.log(similarityScore);

}       
});
