function getRandom(x) {

    return Math.floor(Math.random() * x) + 1;
}

let arr = [];
let n = 0;

function getPowerNum() {
    for (let i = 1; i <= 6; i++) {

        let num = getRandom(38);
        if (arr.indexOf(num) > -1) {
            i--;
            continue;
        }
        else {
            arr.push(num);
        }
    }



    arr.sort(function (a, b) {
        return a - b;
    });

    n = getRandom(8);

    return ` first section's number is: ${arr.join(",")}, second section's number is: ${n}`;
}

alert(getPowerNum());