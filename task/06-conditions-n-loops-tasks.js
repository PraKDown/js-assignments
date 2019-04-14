'use strict';

/**************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 **************************************************************************************************/


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
    if (num % 3 == 0 && num % 5 != 0) return 'Fizz';
    else if (num % 5 == 0 && num % 3 != 0) return 'Buzz';
    else if (num % 5 == 0 && num % 3 == 0) return 'FizzBuzz';
    else return num;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
    let k = 1;
    function f(l) {
        if (l == 1) return k;
        k *= l;
        return f(l - 1);  
    }
    return f(n);
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
    let sum = 0;
    for (let i = n1; i <= n2; i++) {
        sum += i;
    }
    return sum;
}


/**
 * Returns true, if a triangle can be built with the specified sides a,b,c and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a,b,c) {
    let f = true;
    if (a + b <= c) f = false;
    if (a + c <= b) f = false;
    if (c + b <= a) f = false;
    return f;
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object 
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 * 
 *  (5;5)
 *     -------------  
 *     |           | 
 *     |           |  height = 10
 *     ------------- 
 *        width=20    
 * 
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 * 
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 * 
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *  
 */
function doRectanglesOverlap(rect1, rect2) {
    if (rect1.top + rect1.height < rect2.top || rect1.left + rect1.width < rect2.left) return false;
    else return true;
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of 
 *  {
 *     center: {
 *       x: 5,       
 *       y: 5
 *     },        
 *     radius: 20
 *  }
 * 
 * Point is object of 
 *  {
 *     x: 5,
 *     y: 5
 *  }
 * 
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *   
 */
function isInsideCircle(circle, point) {
    if (Math.sqrt(Math.pow((circle.center.x - point.x), 2) + Math.pow((circle.center.y - point.y), 2)) < circle.radius) return true;
    else return false;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
    for (let i = 0; i < str.length; i++) {
        let k = 0;
        for (let j = 0; j < str.length; j++) {
            if(str[i] == str[j]) k++;
        }
        if (k == 1) return str[i];
    }
    return null;
}


/**
 * Returns the string representation of math interval, specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
    let start = "";
    let end = "";
    if (isStartIncluded === true) start = "[";
    else start = "("
    if (isEndIncluded === true) end = "]";
    else end = ")";
    if (a < b) return start + a + ", " + b + end;
    else return start + b + ", " + a + end;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
    let arr = str.split("");
    arr.reverse();
    return arr.join("");
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
    let str = String(num);
    return reverseString(str);
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
    let str = reverseString(String(ccn));
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (i % 2 == 0) arr.push(Number(str[i]));
        else {
            let s = String(Number(str[i]) * 2)
            if (s.length == 1) arr.push(Number(s));
            else arr.push(Number(s[0]) + Number(s[1]));
        }
    }
    return arr.reduce((acc, elem) => acc + elem) % 10 == 0;
}


/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
    let str = String(num);
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i])
    }
    if (String(sum).length == 1) return sum;
    else return getDigitalRoot(sum);
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true 
 */
function isBracketsBalanced(str) {
    let arr = [];
    let left = ["[","(","{","<"];
    let right = ["]",")","}",">"];
    for (let i = 0; i < str.length; i++) {
        if (left.indexOf(str[i]) != -1) arr.push(str[i]);
        else if(right.indexOf(str[i]) != -1) {
            if (left[right.indexOf(str[i])] == arr[arr.length - 1]) arr.pop();
            else return false;
        }
    }
    return arr.length == 0;
}


/**
 * Returns the human readable string of time period specified by the start and end time.
 * The result string should be constrcuted using the folliwing rules:
 *
 * ---------------------------------------------------------------------
 *   Difference                 |  Result
 * ---------------------------------------------------------------------
 *    0 to 45 seconds           |  a few seconds ago
 *   45 to 90 seconds           |  a minute ago
 *   90 seconds to 45 minutes   |  2 minutes ago ... 45 minutes ago
 *   45 to 90 minutes           |  an hour ago
 *  90 minutes to 22 hours      |  2 hours ago ... 22 hours ago
 *  22 to 36 hours              |  a day ago
 *  36 hours to 25 days         |  2 days ago ... 25 days ago
 *  25 to 45 days               |  a month ago
 *  45 to 345 days              |  2 months ago ... 11 months ago
 *  345 to 545 days (1.5 years) |  a year ago
 *  546 days+                   |  2 years ago ... 20 years ago
 * ---------------------------------------------------------------------
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @return {string}
 *
 * @example
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:00.200')  => 'a few seconds ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:05.000')  => '5 minutes ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-02 03:00:05.000')  => 'a day ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2015-01-02 03:00:05.000')  => '15 years ago'
 *
 */
function timespanToHumanString(startDate, endDate) {
	let ms = endDate - startDate;
	let years = ms / 31536000000;
	let months = (ms - Math.floor(years) * 31536000000)/2592000000;
	let days = (ms - Math.floor(years) * 31536000000 - Math.floor(months) * 2592000000)/86400000;
	let hours = (ms - Math.floor(years) * 31536000000 - Math.floor(months) * 2592000000 - Math.floor(days) * 86400000)/3600000;
	let minutes = (ms - Math.floor(years) * 31536000000 - Math.floor(months) * 2592000000 - Math.floor(days) * 86400000 - Math.floor(hours) * 3600000)/60000;
    let seconds = (ms - Math.floor(years) * 31536000000 - Math.floor(months) * 2592000000 - Math.floor(days) * 86400000 - Math.floor(hours) * 3600000 - Math.floor(minutes) * 60000)/1000;
    if (ms >= 63072000000) return `${Math.round(years)} years ago`;
	if (ms > 47088000000) return `2 years ago`;
	if (ms > 29808000000) return "a year ago";
    if (ms >= 5270400000) return `${Math.round((months * 2592000000 - 1)/2592000000 )} months ago`;
    if (ms > 3888000000) return `2 months ago`;
    if (ms > 2160000000) return `a month ago`;
    if (ms >= 172800000) return `${Math.round((days * 86400000 - 1)/86400000)} days ago`;
    if (ms > 129600000) return `2 days ago`;
    if (ms > 79200000) return `a day ago`;
    if (ms >= 7200000) return `${Math.round((hours * 3600000 - 1)/3600000)} hours ago`;
    if (ms > 5400000) return `2 hours ago`;
    if (ms > 2700000) return `an hour ago`;
    if (ms >= 120000) return `${Math.round((minutes * 1000 - 1)/1000)} minutes ago`;
	if (ms > 90000) return `2 minutes ago`;
    if (ms > 45000) return `a minute ago`;
    else return "a few seconds ago";
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n<=10) representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
    let perem = 0;
    let source = "0123456789";
    let input = String(num);
    let target = "";
    for (let i = 0; i < n; i++) {
        target += i;
    }
    let str = "";
    let arr = [];
    for(let i = 0; i < input.length; i++) {
      perem += source.indexOf(input[i]) * Math.pow(source.length, input.length - 1 - i);
    }
    let k = 0;
    function del(params) {
      if (params < target.length) {
        wherenull(0);
        str += target[params];
        return params;
      }
      let l = Math.floor(params / target.length);
      k++;
      if (l < target.length) {
        wherenull(k);
        str += target[l];
        return l * Math.pow(target.length, k);
      }
      else return del(l);
    }
    let b = true;
    while (b) {
      perem -= del(perem);
      if (perem == 0){
        wherenull(-1);
        b = false;
      }
      k = 0;
    }
    function wherenull(k) {
      if (k + 1 != arr[arr.length - 1]) {
        if (arr.length == 0) {
          arr.push(k);
        }
        else {
          let f = arr[arr.length - 1] - 1;
          for(let i = 0; i < f - k; i++) {
            str += target[0];
            arr.push(arr[arr.length - 1] - 1);
          }
          arr.push(k);
        }
      }
      else arr.push(k);
    }
    return str;
}


/**
 * Returns the commom directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
    let str1 = pathes[0];
    function f(str2) {
        let arr = [];
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] == str2[i]) arr.push(str2[i]);
            else break;
        }
        str1 = arr.join("");
    }
    for (let i = 1; i < pathes.length; i++) {
        f(pathes[i]);
    }
    let k = str1.lastIndexOf("/");
    return str1.slice(0, k + 1);
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
	let arr2 = [];
	for (let i = 0; i < m1.length; i++) {
			let arr = [];
			for (let j = 0; j < m2[0].length; j++) {
					let sum = 0;
					for (let l = 0; l < m1[i].length; l++) {
							sum += m1[i][l] * m2[l][j]; 
					}
					arr.push(sum);
			}
			arr2.push(arr);
	}
	return arr2;
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
    let b = ""
    for (let i = 0; i < position.length; i++) {
        if (i == 0) {
            if (position[i][0] != undefined) {
                if (position[i][0] == position[i + 1][1] && position[i][0] == position[i + 2][2]) { b = position[i][0]; break; }
                if (position[i][0] == position[i + 1][0] && position[i][0] == position[i + 2][0]) { b = position[i][0]; break; }
                if (position[i][0] == position[i][1] && position[i][0] == position[i][2]) { b = position[i][0]; break; }
            }
            if (position[i][1] != undefined) {
                if (position[i][1] == position[i + 1][1] && position[i][1] == position[i + 2][1]) { b = position[i][1]; break; }
            }
            if (position[i][2] != undefined) {
                if (position[i][2] == position[i + 1][2] && position[i][2] == position[i + 2][2]) { b = position[i][2]; break; }
                if (position[i][2] == position[i + 1][1] && position[i][2] == position[i + 2][0]) { b = position[i][2]; break; }
            }
        }
        else {
            if (position[i][0] != undefined) {
                if (position[i][0] == position[i][1] && position[i][0] == position[i][2]) { b = position[i][0]; break; }
            }
        }
    }
    if (b.length == 0) return undefined;
    else return b;
}


module.exports = {
    getFizzBuzz: getFizzBuzz,
    getFactorial: getFactorial,
    getSumBetweenNumbers: getSumBetweenNumbers,
    isTriangle: isTriangle,
    doRectanglesOverlap: doRectanglesOverlap,
    isInsideCircle: isInsideCircle,
    findFirstSingleChar: findFirstSingleChar,
    getIntervalString : getIntervalString,
    reverseString: reverseString,
    reverseInteger: reverseInteger,
    isCreditCardNumber: isCreditCardNumber,
    getDigitalRoot: getDigitalRoot,
    isBracketsBalanced: isBracketsBalanced,
    timespanToHumanString : timespanToHumanString,
    toNaryString: toNaryString,
    getCommonDirectoryPath: getCommonDirectoryPath,
    getMatrixProduct: getMatrixProduct,
    evaluateTicTacToePosition : evaluateTicTacToePosition
};
