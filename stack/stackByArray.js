var Stack = /** @class */ (function () {
    function Stack() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.items = [].concat.apply([], args);
    }
    /**
     * inset item at top of stack
     * @param item insert item
     * @returns length of Stack
    */
    Stack.prototype.push = function (item) {
        return this.items.push(item);
    };
    /**
     * remove top item of stack
     * @returns remove item
     */
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    /**
     * return top item of stack
     * @returns top item of stack
     */
    Stack.prototype.peek = function () {
        return this.items.at(-1);
    };
    /**
     * check is stack empty
     * @returns check is stack empty
     */
    Stack.prototype.isEmpty = function () {
        return !this.items.length;
    };
    /**
     * return size of stack
     */
    Stack.prototype.size = function () {
        return this.items.length;
    };
    /**
     * return string represention of a stack
     */
    Stack.prototype.toString = function () {
        return this.items.join('🚀');
    };
    return Stack;
}());
var stack = new Stack(1, 2, 3);
stack.push(3);
var isEmpty = stack.isEmpty();
stack.pop();
console.log('stack.peek()', stack.peek());
console.log('stack.size()', stack.size());
var text = stack.toString();
console.log('isEmpty', isEmpty);
console.log('text', text);
