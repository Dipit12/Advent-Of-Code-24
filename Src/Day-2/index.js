const fs = require('fs');

fs.readFile("data.txt", 'utf-8', (error, data) => {
    if (error) {
        console.log(error);
    } else {
        let count = 0;
        const reports = data.split("\n");

        for (let i = 0; i < reports.length; i++) {
            const levels = reports[i].trim().split(" ").map(Number);
            let isSafe = true;
            let direction = null;

            for (let j = 0; j < levels.length - 1; j++) {
                const diff = levels[j + 1] - levels[j];

                
                if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
                    isSafe = false;
                    break;
                }

                
                if (direction === null) {
                    direction = diff > 0; 
                } else if ((direction && diff < 0) || (!direction && diff > 0)) {
                    
                    isSafe = false;
                    break;
                }
            }

            if (isSafe) {
                count++;
            }
        }

        console.log(count);
    }
});
