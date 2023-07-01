function calculate(a){

const int_stack = []
// used for storing the integers
const pop_stack = []
// used to store the operators accourding to their priority
const int_array = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const operator_array = ['+', '/', '*']
const values = { '+': 0, '*': 1, '/': 2 }

for (var i = 0; i < a.length; i++) {
    var compare = a.charAt(i)
    if (compare == '.') {
        if (int_array.includes(a.charAt(i+1))) {
            let a1= parseFloat(int_stack.pop() + '' + '.' + a.charAt(++i))
            int_stack.push(a1)
        }
        continue
    }
    if (operator_array.includes(compare)) {
        // divde to divde 
        if (compare == '/') {
            // to check float point numbers
            if(i+3 < a.length && a.charAt(i+1)=='.'){
            }
            int_stack.push(int_stack.pop() / parseFloat((a.charAt(++i))))
            continue
        }
        if (values[pop_stack.slice(-1)] > values[compare]) {
            console.log(values[pop_stack.slice(-1)] > values[compare])
            while (values[pop_stack.slice(-1)] > values[compare]) {
                mathematical_value(pop_stack.slice(-1))
                pop_stack.pop()
            }
            pop_stack.push(compare)
        }
        else {
            pop_stack.push(compare)
        }
    }
    else {
        var s = ''
        let x = false
        if (compare === "-") {
            if (values[pop_stack.slice(-1)] > values['+']) {
                mathematical_value(pop_stack.slice(-1))
                pop_stack.pop()
            }
            pop_stack.push('+')
            i += 1;
            console.log("Yaa, I gone")
            s += '-'
        }
        while (a.charAt(i) in int_array) {
            s = s + a.charAt(i)
            x = true
            i += 1
        }
        if (x) {
            i -= 1 // checking whether
            int_stack.push(parseInt(s))
        }
    }
}
while (pop_stack.length != 0) {
    mathematical_value(pop_stack.slice(-1))
    pop_stack.pop()
}
return int_stack.pop()
function mathematical_value(c) {
    let a = int_stack.pop()
    let b = int_stack.pop()
    console.log(`${c} is`)
    let v = 0
    if (c == '+') {
        v = a + b
    }
    else if (c == '-') {
        v = a - b
    }
    else if (c == '*') {
        v = a * b
    }
    else if (c == '/') {
        v = a / b
    }
    console.log(v)
    int_stack.push(v)

// function float_value(){ // finding decimal...
//     let a1= int_stack.pop()
//     let s=''
//     while(int_array.includes(a.charAt(++i))){
//         s+=a.charAt(i)
//     }
//     a1=parseFloat(a1+s)
//     int_stack.push(a1)
// }
}
}
module.exports=calculate