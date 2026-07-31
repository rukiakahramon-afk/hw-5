let user = {
    name: "joe",
    age: 19,
    [Symbol.iterator]() {
        let num = 1
        let res = this.age

        return {
            next() {
                if (num > res) {
                    return { done: true }
                }
                let str = ""

                if (num === 1) {
                    str = `${num}год`
                } else if (num === 2 || num === 3 || num === 4) {
                    str = `${num}годa`
                } else {
                    str = `${num} лет`
                }
                num++
                return {
                    value: str,
                    done: false
                }
            }
        }
    }
}

for (let value of user) {
    console.log(value);
}
