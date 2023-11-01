var QueueItem = /** @class */ (function () {
    function QueueItem(item, priority) {
        if (priority === void 0) { priority = 0; }
        this.item = item;
        this.priority = priority;
    }
    return QueueItem;
}());
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        var _a;
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
        this.items = [];
        this.items = (_a = this.items).concat.apply(_a, arg);
    }
    /**
     * Appends new elements to the end of an queue, and returns the new length of the queue.
     * @param item new element to add end of queue
     * @param priority priority of insert element,which will affect the order index in queue
     * @returns new length of queue
     */
    PriorityQueue.prototype.push = function (insertItem, priority) {
        var _this = this;
        if (priority === void 0) { priority = 0; }
        var newItem = new QueueItem(insertItem, priority);
        if (!this.items.length) {
            return this.items.push(newItem);
        }
        else {
            var isAppended = this.items.some(function (item, index) {
                if (item.priority < priority) {
                    _this.items.splice(index, 0, newItem);
                    return true;
                }
                return false;
            });
            !isAppended && this.items.push(newItem);
        }
        return this.items.length;
    };
    /**
     * remove the fisrt element of a queue,and return removed element
     * @returns removed element of queue
     */
    PriorityQueue.prototype.delete = function () {
        return this.items.shift();
    };
    /**
     * return the fisrt element of a queue
     * @returns the first element of queue
     */
    PriorityQueue.prototype.front = function () {
        return this.items[0];
    };
    /**
     * check a queue is empty
     * @returns return the queue is empty
     */
    PriorityQueue.prototype.isEmpty = function () {
        return !this.items.length;
    };
    /**
     * get the length of a queue
     * @returns length of queue
     */
    PriorityQueue.prototype.size = function () {
        return this.items.length;
    };
    PriorityQueue.prototype.toString = function () {
        return this.items.reduce(function (pre, item) {
            pre = pre + item.item;
            return pre;
        }, '');
    };
    return PriorityQueue;
}());
var queue = new PriorityQueue();
queue.push(1, 999);
queue.push(2);
queue.push(3);
queue.push(9, 2);
console.log('queue.front', queue.front());
console.log('queue.delete()', queue.delete());
console.log('queue.isEmpty', queue.isEmpty());
console.log('queue.size()', queue.size());
console.log('queue.toString()', queue.toString());
