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
]