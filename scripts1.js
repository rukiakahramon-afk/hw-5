
function createMath() {
    function floor(n) {
        if (typeof n !== "number" || isNaN(n)) {
            console.error("Переданный аргумент должен быть валидным числом");
            return;
        }

        let strN = `${n}`;

        if (n >= 0) {
            return +strN.split(".")[0];
        } else if (strN.split(".").length > 1) {
            return strN.split(".")[0] - 1;
        } else {
            return +strN.split(".")[0];
        }
    }



    function ceil(n3) {
        if (typeof n3 !== "number" || isNaN(n3)) {
            console.error("Переданный аргумет должен быть валидным числом");
            return;
        }

        let strN1 = `${n3}`;

        if (n3 <= 0) {
            return +strN1.split(".")[0];

        } else if (strN1.split(".").length > 1) {
            return +strN1.split(".")[0] + 1

        } else {
            return +strN1.split(".")[0];
        }
    }



    function pow(n1, n2) {
        if (typeof n1 !== "number" || isNaN(n1)) {
            console.error("Переданный аргумент должен быть валидным числом");
            return;
        }
        if (typeof n2 !== "number" || isNaN(n2)) {
            console.error("Переданный аргумент должен быть валидным числом");
            return;
        }

        return n1 ** n2

    }



    function round(n4) {
        if (typeof n4 !== "number" || isNaN(n4)) {
            console.error("Переданный аргумент должен быть валидным чтслом");
            return;
        }

        let strN4 = `${n4}`;


        if (strN4.split(".").length === 1) {
            return +strN4.split(".")[0];
        }
        else if (+strN4.split(".")[1] >= 5) {
            return +strN4.split(".")[0] + 1
        }
        else {
            return +strN4.split(".")[0];
        }
    }



    function max(...others) {
        for (let number of others) {
            if (typeof number !== "number" || isNaN(number)) {
                console.error("Переданный аргумент должен быть валидным чтслом");
                return;
            }
        }

        let maXnum = others[0]

        for (let i = 1; i < others.length; i++) {
            if (others[i] > maXnum) {
                maXnum = others[i]
            }
        } return maXnum
    }



    function min(...others) {
        for (let number of others) {
            if (typeof number !== "number" || isNaN(number)) {
                console.error("Переданный аргумент должен быть валидным чтслом");
                return;
            }
        }

        let maXnum = others[0]

        for (let i = 1; i < others.length; i++) {
            if (others[i] < maXnum) {
                maXnum = others[i]
            }
        } return maXnum
    }



    return {
        floor: floor,
        ceil: ceil,
        pow: pow,
        round: round,
        max: max,
        min: min,
    };
}

const math = createMath();


console.log(math.floor(10.9));
console.log(math.ceil(7.1));
console.log(math.pow(2, 4));
console.log(math.round(5.8));
console.log(math.max(1, 2, 3, 4, 5, 6, 7, 8));
console.log(math.min(1, 2, 3, 4, 5, 6, 7, 8));
