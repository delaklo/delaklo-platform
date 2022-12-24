export const allQuestions = [
    {
        questionText: "What is printed as a result of executing the code segment?",
        id: 1,
        answerOptions: [
            {answerText: "hello undefined", isCorrect: false },
            {answerText: "HELLO undefined", isCorrect: false },
            {answerText: "hello HELLO", isCorrect: true },
            {answerText: "HELLO HELLO", isCorrect: false },
        ],
        explanation: ""
    },
    {
        questionText: "What is printed as a result of executing the code segment?",
        id: 2,
        answerOptions: [
            {answerText: "undefined", isCorrect: false },
            {answerText: "true", isCorrect: false },
            {answerText: "false", isCorrect: true },
            {answerText: "There is no correct answer", isCorrect: false },
        ],
        explanation: "The 'Number' object is a wrapper object that allows you to work with numeric values. In this particular example, we construct two independent objects a and b. Since the '===' operator will compare references leading to different objects, we will see 'false' in the console."
    },
    {
        questionText: "What is printed as a result of executing the code segment?",
        id: 3,
        answerOptions: [
            {answerText: "9", isCorrect: true },
            {answerText: "33", isCorrect: false },
            {answerText: "NaN", isCorrect: false },
            {answerText: "Syntax Error: Unexpected token '**='", isCorrect: false },
        ],
        explanation: "The '**=' operator first converts the left operand to a numeric type, then raises the result to a power, and then returns the result. In this example, the string '3' is quite successfully converted to 'number', respectively, the result of this example will be '9'."
    },
    {
        questionText: "Which operator determines whether an object belongs to a particular class?",
        id: 4,
        answerOptions: [
            {answerText: "constructor", isCorrect: false },
            {answerText: "super", isCorrect: false },
            {answerText: "typeof", isCorrect: false },
            {answerText: "instanceof", isCorrect: true },
        ],
        explanation: "According to the JS spec, the 'instanceof' operator checks if an object belongs to a particular class. In other words, a construct like 'object instanceof constructor' checks if 'constructor.prototype' is present in the 'object' prototype chain."
    },
    {
        questionText: "What is printed as a result of executing the code segment?",
        id: 5,
        answerOptions: [
            {answerText: "false false", isCorrect: false },
            {answerText: "true false", isCorrect: true },
            {answerText: "false true", isCorrect: false },
            {answerText: "true true", isCorrect: false },
        ],
        explanation: "The 'in' operator returns 'true' if the property is contained in the specified object or its prototype chain. In relation to arrays and in this case, the 'in' operator checks for the presence of one or another numerical index, but nothing more."
    },
    {
        questionText: "What is printed as a result of executing the code segment?",
        id: 6,
        answerOptions: [
            {answerText: "function", isCorrect: true },
            {answerText: "object", isCorrect: false },
            {answerText: "null", isCorrect: false },
            {answerText: "undefined", isCorrect: false },
        ],
        explanation: "The 'typeof' operator returns a string indicating the type of the operand. In this example, 'myFunc' is not called, so the 'typeof' operator will return the function type ('Function object' (implements '[[Call]]' in terms of 'ECMA-262')) - 'function'."
    },
    {
        questionText: "What is the global Proxy object for?",
        id: 7,
        answerOptions: [
            {answerText: "To intercept and process operations on objects", isCorrect: true },
            {answerText: "This global object is not implemented in the current language specification.", isCorrect: false },
            {answerText: "The Proxy object represents the eventual completion (or failure) of an asynchronous operation and its resulting value", isCorrect: false },
            {answerText: "The Proxy object provides atomic operations as static methods.", isCorrect: false },
        ],
        explanation: "the Proxy object wraps the 'target' object and can intercept (or independently process) operations on it."
    },
    {
        questionText: "What is printed as a result of executing the code segment?",
        id: 8,
        answerOptions: [
            {answerText: "true", isCorrect: false },
            {answerText: "SyntaxError: Unexpected token '>'", isCorrect: false },
            {answerText: "3 > 2 > 1", isCorrect: false },
            {answerText: "false", isCorrect: true },
        ],
        explanation: "In this example, the '>' operators are executed alternately from left to right. Simply put, in the first step, the operation '3 > 2' will return true. At the second step, the operation '1 > 1' (true will be implicitly cast to the number 1) will return false."
    },
    {
        questionText: "What method can be used to collapse an array into a single value?",
        id: 9,
        answerOptions: [
            {answerText: "Array.prototype.entries()", isCorrect: false },
            {answerText: "Array.prototype.reduce()", isCorrect: true },
            {answerText: "Array.prototype.shift()", isCorrect: false },
            {answerText: "Array.prototype.map()", isCorrect: false },
        ],
        explanation: "The current language standard defines the Array.prototype.reduce() method, which applies a function to each element of the array (in order, from left to right), returning a single result value as a result of its work."
    },
    {
        questionText: "What is printed as a result of executing the code segment?",
        id: 10,
        answerOptions: [
            {answerText: "11", isCorrect: false },
            {answerText: "false", isCorrect: false },
            {answerText: "undefined", isCorrect: true },
            {answerText: "12", isCorrect: false },
        ],
        explanation: "According to the Javascipt spec, the 'void' operator computes the expression passed as an operand and returns undefined. Sometimes the 'void' operator is used to get a primitive undefined value."
    },
    {
        questionText: "What is printed as a result of executing the code segment?",
        id: 11,
        answerOptions: [
            {answerText: "number", isCorrect: false },
            {answerText: "undefined", isCorrect: false },
            {answerText: "string", isCorrect: true },
            {answerText: "function", isCorrect: false },
        ],
        explanation: "The 'typeof' operator returns a string indicating the type of the operand. Since the result of the 'typeof' operator is always a string, calling this operator with the result of the first 'typeof' as an operand will always return 'string'."
    },
    {
        questionText: "What is printed as a result of executing the code segment?",
        id: 12,
        answerOptions: [
            {answerText: "5", isCorrect: false },
            {answerText: "40", isCorrect: true },
            {answerText: "undefined", isCorrect: false },
            {answerText: "null", isCorrect: false },
        ],
        explanation: "In an arrow function, 'this' is always referenced to the environment in which the function was created. In the global scope, 'this' will point to the global object. It doesn't really matter how the 'myFunc' arrow function is called, its 'this' value will point to the global object."
    },
    {
        questionText: "What is printed as a result of executing the code segment?",
        id: 13,
        answerOptions: [
            {answerText: "ReferenceError: Cannot access 'a' before initialization", isCorrect: false },
            {answerText: "6", isCorrect: false },
            {answerText: "2", isCorrect: false },
            {answerText: "undefined", isCorrect: true },
        ],
        explanation: "At compile time, an empty identifier 'a' is created, and the value is assigned already at the code execution stage. Since the output to the console occurs before the assignment of any value to 'a', then its initial state, that is, 'undefined', will be displayed in the console."
    },
    {
        questionText: "What is printed as a result of executing the code segment?",
        id: 14,
        answerOptions: [
            {answerText: "undefined", isCorrect: false },
            {answerText: "false", isCorrect: false },
            {answerText: "TypeError: Object.freeze is not a function", isCorrect: false },
            {answerText: "true", isCorrect: true },
        ],
        explanation: "Using the 'Object.freeze()' method, you can prevent adding new properties to an object, changing and deleting properties. In this case, this method returns a reference to the frozen source object."
    },
    {
        questionText: "What is printed as a result of executing the code segment?",
        id: 15,
        answerOptions: [
            {answerText: "Ok", isCorrect: false },
            {answerText: "Ok Bad Ooops End", isCorrect: false },
            {answerText: "Ok Bad End", isCorrect: true },
            {answerText: "Ok End", isCorrect: false },
        ],
        explanation: "The 'catch' handler catches only one exception thrown in the 'then' handler. Attempts to throw an exception 'catch' and 'finally' will not show the expected result, for the reason that there is no 'catch' behind them in the chain of promise handlers that would perform the necessary task. Therefore, the result will be printed in the console 'Ok' 'Bad' 'End'."
    },
    {
        questionText: "What is printed as a result of executing the code segment?",
        id: 16,
        answerOptions: [
            {answerText: "[object Object]", isCorrect: false },
            {answerText: "null", isCorrect: false },
            {answerText: "[object Undefined]", isCorrect: false },
            {answerText: "[object Null]", isCorrect: true },
        ],
        explanation: "To correctly use the 'Object.prototype.toString()' method with any object, you need to call the 'Function.prototype.call' or 'Function.prototype.apply' functions on it, passing the object you want as the first parameter 'thisArg'."
    },
    {
        questionText: "What is printed as a result of executing the code segment?",
        id: 17,
        answerOptions: [
            {answerText: "SyntaxError: Missing catch or finally after try", isCorrect: true },
            {answerText: "Panic", isCorrect: false },
            {answerText: "Ooops", isCorrect: false },
            {answerText: "undefined", isCorrect: false },
        ],
        explanation: "The 'try ... catch' construct tries to execute the instructions in the 'try' block, and, in case of an error, executes the 'catch' block. There are several forms of using this construct - 'try ... catch', 'try ... finally', 'try ... catch ... finally'. Use a 'try' block without a 'catch' block is not allowed by the current language specification."
    },
    {
        questionText: "What is the name of the function called after the new operator (like 'myFunc' in the example below?",
        id: 18,
        answerOptions: [
            {answerText: "Higher-Order function", isCorrect: false },
            {answerText: "Constructor function", isCorrect: true },
            {answerText: "Partial function", isCorrect: false },
            {answerText: "'myFunc' cannot be called like this", isCorrect: false },
        ],
        explanation: "In this example, the 'myFunc' function is nothing more than a constructor function. In fact, this is the most common function that creates an empty object, executes the code in the body of the function, associates this object with the 'this' reference, and returns it as a result."
    },
    {
        questionText: "What is printed as a result of executing the code segment?",
        id: 19,
        answerOptions: [
            {answerText: "0", isCorrect: true },
            {answerText: "undefined", isCorrect: false },
            {answerText: "null", isCorrect: false },
            {answerText: "NaN", isCorrect: false },
        ],
        explanation: "According to the current language specification, an attempt to call the 'Number()' method without an argument will return 0 as a result, since the first stage of the method's work will be to call the internal operation 'toNumeric', which, having received the argument 'null' (this is how the absence of an argument for 'Number ()'), will always return 0."
    },
    {
        questionText: "What global method can be used to execute random javascript code represented as a string?",
        id: 20,
        answerOptions: [
            {answerText: "build()", isCorrect: false },
            {answerText: "There are no such methods in the current javascript standard.", isCorrect: false },
            {answerText: "escape()", isCorrect: false },
            {answerText: "eval()", isCorrect: true },
        ],
        explanation: "The 'eval()' method executes valid javascript code passed as a string with the 'string' parameter. For safety reasons, never use 'eval()' in your code."
    },
    {
        questionText: "What is printed as a result of executing the code segment?",
        id: 21,
        answerOptions: [
            {answerText: "25", isCorrect: true },
            {answerText: "SyntaxError: Invalid or unexpected token", isCorrect: false },
            {answerText: "250", isCorrect: false },
            {answerText: "SyntaxError: Unexpected identifier 'toString'", isCorrect: false },
        ],
        explanation: "According to the description of the lexical syntax of JS, whitespace characters serve purely to improve the readability of the code and are not used at all by the parser. Accordingly, it doesn't matter if there is one space after the literal '25' in the expression let a = 25 .toString( ); or 20 - it is only important that these tokens are quite correct and can be used.."
    },
    {
        questionText: "What is printed as a result of executing the code segment?",
        id: 22,
        answerOptions: [
            {answerText: "function", isCorrect: true },
            {answerText: "John", isCorrect: false },
            {answerText: "undefined", isCorrect: true },
            {answerText: "class Human { }", isCorrect: false },
        ],
        explanation: "In this example the expression 'Human.name' = 'John' actually creates a static property for the 'Human' class, which belongs to the class definition (which is essentially the function of the same name), and not to its instance (when creating a class instance, the static property definition will be actually ignored)."
    },
]