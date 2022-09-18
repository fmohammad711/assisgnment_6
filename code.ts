//1- Write a ts program to print all natural numbers from 1 to n. - using while loop

function printNatural(num:number){
    let a:number = 1;
    while (a<=num) {
        console.log(a);
        a++;
    }
}
printNatural(10)

//2. Write a ts program to print all natural numbers in reverse (from n to 1). - using while loop

function printNaturalReverse(num:number){
    
    let a:number = 1;
    while (num>=a) {
        console.log(num);
        num--;
    }
}
printNaturalReverse(10)

//3. Write a ts program to print all alphabets from a to z. - using while loop

function printAlphabets(){
    let n:number = 97;
    let chr:string;
    while (n>=97 && n<123) {
        chr = String.fromCharCode(n);
        console.log(chr);
        n++;  
    }
}
printAlphabets()

//4. Write a ts program to print all even numbers between 1 to 100. - using while loop
function printEvenNumbers(num:number){
    let a:number = 1;
    while (a<=num) {
        if(a%2==0)
            console.log(a);
        a++;
    }
}
printEvenNumbers(100)

//5. Write a ts program to print all odd number between 1 to 100.

function printOddNumbers(num:number){
    let a:number = 1;
    while (a<=num) {
        if(a%2!=0)
            console.log(a);
        a++;
    }
}
printOddNumbers(100)
//6. Write a ts program to find sum of all natural numbers between 1 to n.
function sumNatural(num:number){
    let sum:number = 0;
    for (let i = 1; i <= num; i++) {
        sum = sum + i;
    }
    return sum
}
console.log(sumNatural(100));
//7. Write a ts program to find sum of all even numbers between 1 to n.
function sumEven(num:number){
    let sum:number = 0;
    for (let i = 1; i <= num; i++) {
        if(i%2==0)
        sum = sum + i;
    }
    return sum
}
console.log(sumEven(100));

//8. Write a ts program to find sum of all odd numbers between 1 to n.
function sumOdd(num:number){
    let sum:number = 0;
    for (let i = 1; i <= num; i++) {
        if(i%2!=0)
        sum = sum + i;
    }
    return sum
}
console.log(sumOdd(100));
//9. Write a ts program to print multiplication table of any number.
function printMulTable(num:number){
    for (let i = 1; i < 11; i++){
        console.log(num + "*" + i + "=" + num*i);
    }
}
printMulTable(10)

// 10. Write a ts program to count number of digits in a number.

function getDigits(num:number){
    return num.toString().length
}
console.log("Number of digits in 2341: "+getDigits(2341))

// 11. Write a ts program to find first and last digit of a number.
function firstDigit(num:number){
    while(num>10)
        num = Math.floor(num/10)
    return num
}
function lastDigit(num:number){
    return num%10
}
console.log("First digit of 234234: "+firstDigit(234234))
console.log("Last digit of 234234: "+lastDigit(234234))

//12. Write a ts program to find sum of first and last digit of a number.
 
function sumOfFirstandLast(num:number){
    return firstDigit(num)+lastDigit(num) //reusing previous functions
}
console.log("Sum of first and last digit of number 23423432: "+sumOfFirstandLast(23423432))

//13. Write a ts program to swap first and last digits of a number.
function swapFirstAndLast(){
    let number:number = 594;
    console.log(number[0[0]]);
     let b:string[] = number.toString().split('');
     console.log(b);
     b[2] == b[0]
    let c:string = b[2];
    console.log(c);
    let d:string = b[0];
    console.log(d);
    b[0] = c;
    console.log(b[2]);
    b[2] = d;
    console.log(b[2]);
    console.log(b);
    
}
swapFirstAndLast()
//14. Write a ts program to calculate sum of digits of a number.
 
function sumDigits(num:number){
    let sum = 0
    while(num){
        sum+=num%10
        num= Math.floor(num/10)
    }
    return sum
}
console.log("Sum of digits 23412: "+sumDigits(23412))
 
//15. Write a ts program to calculate product of digits of a number.

function productDigits(num:number){
    let product = 1
    while(num){
        product*=num%10
        num= Math.floor(num/10)
    }
    return product
}
console.log("Product of digits 23412: "+productDigits(23412))
 

//16. Write a ts program to enter a number and print its reverse.
function reverseNumber(num:number){
    let res = 0
    while(num){
        res*=10
        res+=num%10
        num = Math.floor(num/10)
    }
    return res
}
console.log("Reverse number 1234: "+reverseNumber(1234))
                     
//17. Write a ts program to check whether a number is palindrome or not.  
function checkPalindrome(num:number){
    if(num == reverseNumber(num)) //reusing previous function
        return true
    else return false
}
console.log("Check palindrome number 1234: "+checkPalindrome(1234))

// 18. Write a ts program to find frequency of each digit in a given integer.

function frequencyDigits(n:number, d:number)
{
	let c:number = 0;
	while (n > 0)
	{
		if (n % 10 == d)
			c++;		
    	n = Math.floor(n / 10);
	}
	return c;
}
console.log("Number 2 in 1122322 have frequency: "+frequencyDigits(1122322, 2))

// 19. Write a ts program to enter a number and print it in words.
function digitWord(digit: number){
    switch(digit){
        case 0: return "zero"
        case 1: return "one"
        case 2: return "two"
        case 3: return "three"
        case 4: return "four"
        case 5: return "five"
        case 6: return "six"
        case 7: return "seven"
        case 8: return "eight"
        case 9: return "nine"
        default: return "unknown"
    }
}

function numberToWords(num: number){
    let words:string[] = []
    while(num){
        words.push(digitWord(num%10))
        num = Math.floor(num/10)
    }
    return words.concat(', ')
}
console.log("Converting 2342 to words: "+numberToWords(2342))

// 20. Write a ts program to print all ASCII character with their values.
// 21. Write a ts program to find power of a number using for loop.
// 22. Write a ts program to find all factors of a number.
// 23. Write a ts program to calculate factorial of a number.
// 24. Write a ts program to find HCF (GCD) of two numbers.
// 25. Write a ts program to find LCM of two numbers.
// 26. Write a ts program to check whether a number is Prime number or not.
// 27. Write a ts program to print all Prime numbers between 1 to n.
// 28. Write a ts program to find sum of all prime numbers between 1 to n.
// 29. Write a ts program to find all prime factors of a number.

// 30. Write a ts program to check whether a number is Armstrong number or not.

function checkArmstrongNumber(num: number){
    let sum = 0
    let temp:number = num
    const digits:number = num.toString().length
    
    while(temp>0){
        const remainder = temp % 10
        sum += remainder**digits
        temp = Math.floor( temp / 10 )
    }
    if(sum==num){
        return true
    }
    return false
}
console.log("Checking if 2343 is armstrong number "+checkArmstrongNumber(2343))
console.log("Checking if 1634 is armstrong number "+checkArmstrongNumber(1634))

// 31. Write a ts program to print all Armstrong numbers between 1 to n.

function printArmstrongNumbers(num: number){
    for(let i=1; i<=num; i++){
        if(checkArmstrongNumber(i)) //reusing previous function
            console.log(i)
    }
}
console.log("Printing armstrong number between 1 and 1000")
printArmstrongNumbers(1000)

// 32. Write a ts program to check whether a number is Perfect number or not.

function checkPrimeNumber(num: number){
    let temp:number = 0
    for(let i=1; i<num; i++){
        if(num%i === 0){
            temp+=i
        }
    }
    if(temp == num) return true
    return false
}
console.log("Checking if 28 is prime number "+checkPrimeNumber(28))
console.log("Checking if 1634 is prime number "+checkPrimeNumber(1634))

// 33. Write a ts program to print all Perfect numbers between 1 to n.

function printPrimeNumbers(num: number){
    for(let i=1; i<=num; i++){
        if(checkPrimeNumber(i)) //reusing previous function
            console.log(i)
    }
}
console.log("Printing prime number between 1 and 1000")
printPrimeNumbers(1000)

// 34. Write a ts program to check whether a number is Strong number or not.

function checkStrongNumber(num: number){
    let sum = 0
    let temp:number = num
    while(temp){
        const remainder = temp%10
        let fact = 1
        for(let i = 1; i<=remainder; i++)
            fact*=i
        sum+=fact
        temp = Math.floor(temp/10)
    }
    if(sum == num) return true
    return false
}
console.log("Checking if 145 is Strong number "+checkStrongNumber(145))
console.log("Checking if 1634 is Strong number "+checkStrongNumber(1634))

// 35. Write a ts program to print all Strong numbers between 1 to n.

function printStrongNumbers(num: number){
    for(let i=1; i<=num; i++){
        if(checkStrongNumber(i)) //reusing previous function
            console.log(i)
    }
}
console.log("Printing Strong number between 1 and 1000")
printStrongNumbers(1000)

// 36. Write a ts program to print Fibonacci series up to n terms.

function printFibonacciSeries(n: number){
    let n1 = 0, n2 = 1
    while(n!=0){
        console.log(n1)
        console.log(n2)
        n1 = n1+n2
        n2 = n1+n2

        n-=1
    }
}
console.log("Printing Fibonacci series upto 10 terms")
printFibonacciSeries(10)

// 37. Write a ts program to find one's complement of a binary number.

function invert(digit: string){
    if(digit == "0") return "1"
    else return "0"
}

function onesCompliment(binary: string){
    let compliment = ""
    for(let i=0;i<binary.length;i++){
        compliment += invert(binary[i])
    }
    return compliment
}
console.log("Taking 1s compliment of 101011 "+onesCompliment("101011"))


//38. Write a ts program to find two's complement of a binary number.


function twosCompliment(binary: string){
    const n = binary.length
    let i
    for(i = n-1; i>=0; i--){
        if(binary.charAt(i)=='1')
            break;
    }
    if(i == -1)
        return "1"+binary
    for(let k=i-1;k>=0;k--){
        if(binary.charAt(k) == "1")
            binary = binary.substring(0, k)+"0"+binary.substring(k+1, binary.length)
        else
            binary = binary.substring(0, k)+"1"+binary.substring(k+1, binary.length)
    }
    return binary
}
console.log("Taking 2s compliment of 101010 "+twosCompliment("101010"))

// 39. Write a ts program to convert Binary to Octal number system.
function binaryToOctal(binary: string){
    return parseInt(binary,2).toString(8)
}

console.log("Converting 100110 to Octal: "+binaryToOctal("100110"))
// 40. Write a ts program to convert Binary to Decimal number system.
function binaryToDecimal(binary: string){
    return parseInt(binary,2).toString()
}

console.log("Converting 100110 to Decimal: "+binaryToDecimal("100110"))
// 41. Write a ts program to convert Binary to Hexadecimal number system.
function binaryToHex(binary: string){
    return parseInt(binary,2).toString(16)
}

console.log("Converting 100110 to Hexadecimal: "+binaryToHex("100110"))
// 42. Write a ts program to convert Octal to Binary number system.
function octalToBinary(octal: string){
    return parseInt(octal,8).toString(2)
}

console.log("Converting octal 123 to Binary: "+octalToBinary("123"))
// 43. Write a ts program to convert Octal to Decimal number system.
function octalToDecimal(octal: string){
    return parseInt(octal,8).toString()
}

console.log("Converting octal 123 to Decimal: "+octalToDecimal("123"))
// 44. Write a ts program to convert Octal to Hexadecimal number system.
function octalToHex(octal: string){
    return parseInt(octal,8).toString(16)
}

console.log("Converting octal 123 to Hexadecimal: "+octalToHex("123"))
// 45. Write a ts program to convert Decimal to Binary number system.
function decimalToBinary(decimal: string){
    return parseInt(decimal).toString(2)
}

console.log("Converting decimal 123 to Binary: "+decimalToBinary("123"))
// 46. Write a ts program to convert Decimal to Octal number system.
function decimalToOctal(decimal: string){
    return parseInt(decimal).toString(8)
}

console.log("Converting decimal 123 to Octal: "+decimalToOctal("123"))
// 47. Write a ts program to convert Decimal to Hexadecimal number system.
function decimalToHex(decimal: string){
    return parseInt(decimal).toString(16)
}

console.log("Converting decimal 123 to Hexadecimal: "+decimalToHex("123"))
// 48. Write a ts program to convert Hexadecimal to Binary number system.
function hexToBinary(hex: string){
    return parseInt(hex, 16).toString(2)
}

console.log("Converting hexadecimal 123 to Binary: "+hexToBinary("123"))
// 49. Write a ts program to convert Hexadecimal to Octal number system.
function hexToOctal(hex: string){
    return parseInt(hex, 16).toString(8)
}

console.log("Converting hexadecimal 123 to Octal: "+hexToOctal("123"))
// 50. Write a ts program to convert Hexadecimal to Decimal number system.
function hexToDecimal(hex: string){
    return parseInt(hex, 16).toString()
}
console.log("Converting hexadecimal 123 to decimal: "+hexToDecimal("123"))
// 51. Write a ts program to print Pascal triangle upto n rows.
function getPascalTriangle(rows: number){
    const array:number[][] = []
    for(let i=0; i<rows;i++){
        const row = [1]
        for(let j=1;j<i;j++){
            row.push(array[i-1][j-1] + array[i-1][j])
        }
        if(i>0) row.push(1)

        array.push(row)
    }
    return array
}
function printPascalTriangle(rows:number){
    let array = getPascalTriangle(rows)
    array.forEach(row=>console.log(row.join(", ")))
}

console.log("Printing pascal triangle upto 10 rows")
printPascalTriangle(10)