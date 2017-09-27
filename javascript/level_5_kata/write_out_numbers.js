// Create a function that transforms any positive number to a string representing the number in words. The function should work for all numbers between 0 and 999999.


function transform(num){
    var dg = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    var tw = ["", "", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    var th = "thousand";
    var numStr = num.toString();
    var str = "";

    switch (true){
        case num < 20:
            str = dg[num]
            break;
        case num > 19 && num < 100:
            str = `${tw[numStr[0]]}-${dg[numStr[1]]}`
            break;
        case num > 99 && num < 1000:
            str = `${dg[numStr[0]]} hundred`
            if(numStr[1] !== "0"){
                str += ` ${numStr[2] !== "0" ? tw[numStr[1]] + "-" + dg[numStr[2]] : tw[numStr[1]]}`
            }
            
            break;
        default:
            str = "invalid number"
    }

    return str;

}

var test = transform(547);
test 