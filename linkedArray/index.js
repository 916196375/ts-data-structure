var LinkedArrayItem = /** @class */ (function () {
    function LinkedArrayItem(value) {
        this.value = value;
        this.nextNode = null;
    }
    return LinkedArrayItem;
}());
var LinkedArray = /** @class */ (function () {
    function LinkedArray() {
        this.items = null;
        this.length = 0;
    }
    LinkedArray.prototype.findItemByIndex = function (index) {
        var currentIndex = 0;
        var currentItem = this.items;
        while (currentIndex < index) {
            if (!currentItem)
                return undefined;
            currentItem = currentItem.nextNode;
            currentIndex += 1;
        }
        return currentItem;
    };
    LinkedArray.prototype.isQueryIndexSafe = function (index) {
        return 0 <= index && index <= this.length;
    };
    LinkedArray.prototype.append = function (value) {
        var insertItem = new LinkedArrayItem(value);
        if (!this.length) {
            this.items = insertItem;
        }
        else {
            var lastItem = this.findItemByIndex(this.length - 1);
            lastItem.nextNode = insertItem;
        }
        this.length += 1;
        return this.length;
    };
    LinkedArray.prototype.insertAt = function (index, item) {
        var insertItem = new LinkedArrayItem(item);
        var isInsertSafeIndex = this.isQueryIndexSafe(index);
        if (!isInsertSafeIndex)
            throw new Error("Out of linked length!");
        if (index === 0) {
            insertItem.nextNode = this.items;
            this.items = insertItem;
        }
        else {
            if (index < this.length - 1) {
                var targetIndexItem = this.findItemByIndex(index);
                insertItem.nextNode = targetIndexItem.nextNode;
                targetIndexItem.nextNode = insertItem;
            }
            else {
                var lastIndexItem = this.findItemByIndex(this.length - 1);
                lastIndexItem.nextNode = insertItem;
            }
        }
        this.length += 1;
    };
    LinkedArray.prototype.at = function (index) {
        var findItem = this.findItemByIndex(index);
        return findItem === null || findItem === void 0 ? void 0 : findItem.value;
    };
    LinkedArray.prototype.indexOf = function (value) {
        var countIndex = 0;
        var currentItem = this.items;
        if (!currentItem)
            return -1;
        while (currentItem) {
            if (currentItem.value === value)
                return countIndex;
            currentItem = currentItem === null || currentItem === void 0 ? void 0 : currentItem.nextNode;
            countIndex += 1;
        }
        return -1;
    };
    LinkedArray.prototype.update = function (index, value) {
        var isSafeIndex = this.isQueryIndexSafe(index);
        if (!isSafeIndex)
            throw new Error("Out of linked");
        var targetItem = this.findItemByIndex(index);
        targetItem.value = value;
        return true;
    };
    LinkedArray.prototype.removeAt = function (index) {
        var isSafeIndex = this.isQueryIndexSafe(index);
        if (!isSafeIndex)
            throw false;
        if (!this.items)
            return false;
        if (index === 0) {
            this.items = this.items.nextNode;
        }
        else {
            var parentItem = this.findItemByIndex(index - 1);
            var targetItem = parentItem.nextNode;
            parentItem.nextNode = targetItem.nextNode;
        }
    };
    LinkedArray.prototype.isEmpty = function () {
        return !!this.length;
    };
    LinkedArray.prototype.size = function () {
        return this.length;
    };
    LinkedArray.prototype.string = function () {
        var curerntItem = this.items;
        var string = '';
        while (curerntItem) {
            string += "".concat(curerntItem.value, "\uD83D\uDE80");
            curerntItem = curerntItem.nextNode;
        }
        return string;
    };
    return LinkedArray;
}());
var linkedArray = new LinkedArray();
console.log('linkedArray.append(1)', linkedArray.append(1));
console.log('linkedArray.append(1)', linkedArray.append(2));
console.log('linkedArray.append(1)', linkedArray.append(3));
console.log('linkedArray.append(1)', linkedArray.append(4));
console.log('linkedArray.at(2)', linkedArray.at(2));
console.log('linkedArray.indexOf(3)', linkedArray.indexOf(3));
linkedArray.update(2, 999);
linkedArray.removeAt(1);
console.log('LinkedArray.toString()', linkedArray.string());
