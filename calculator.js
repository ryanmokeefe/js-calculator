var calculator = {
    value: 0,

    // addition
    add: function(num1, num2 = 0) {
        this.value += num1 + num2;
        return num1 + num2;
    },

    // subtraction

    subtract: function(num1, num2 = 0) {
        return num1 - num2;
    },

    // multiply

    multiply: function(num1, num2 = 1) {
        return num1 * num2;
    },

    // divide

    divide: function(num1, num2 = 1) {
        return num1 / num2;
    },

    // exponent

    exponentiate: function(num1, num2 = 2) {
        return num1 ** num2;
    },

    // square root

    squareRoot: function(num) {
        this.value = Math.sqrt(num);        
        return Math.sqrt(num);
    },

    // clear
    clear: function() {
        this.value = 0;
    }
}
