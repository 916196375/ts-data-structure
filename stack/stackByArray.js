var Stack = /** @class */ (function () {
    function Stack() {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        this.items = [];
        items.concat.apply(items, items);
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
        return !!this.items.length;
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
var text = stack.toString();
console.log('text', text);
