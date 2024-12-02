const fs = require('fs');


function isSafeReport(levels) {
    let direction = null;

    for (let i = 0; i < levels.length - 1; i++) {
        const diff = levels[i + 1] - levels[i];

       
        if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
            return false;
        }

        
        if (direction === null) {
            direction = diff > 0; 
        } else if ((direction && diff < 0) || (!direction && diff > 0)) {
           
            return false;
        }
    }

    return true;
}


function canBeSafeWithDampener(levels) {
    for (let i = 0; i < levels.length; i++) {
        const modifiedLevels = levels.slice(0, i).concat(levels.slice(i + 1));
        if (isSafeReport(modifiedLevels)) {
            return true;
        }
    }
    return false;
}


fs.readFile("data.txt", 'utf-8', (error, data) => {
    if (error) {
        console.log(error);
    } else {
        let count = 0;
        const reports = data.split("\n").filter(line => line.trim() !== "");

        for (let i = 0; i < reports.length; i++) {
            const levels = reports[i].trim().split(" ").map(Number);

            if (isSafeReport(levels) || canBeSafeWithDampener(levels)) {
                count++;
            }
        }

        console.log(count);
    }
});
