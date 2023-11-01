interface QueueItem {
    item: unknown,
    priority: number
}

class QueueItem {
    item: unknown
    priority: number
    constructor(item: unknown, priority: number = 0) {
        this.item = item
        this.priority = priority
    }
}

class PriorityQueue {
    items: QueueItem[]
    constructor(...arg: QueueItem[]) {
        this.items = []
        this.items = this.items.concat(...arg)
    }

    /**
     * Appends new elements to the end of an queue, and returns the new length of the queue.
     * @param item new element to add end of queue
     * @param priority priority of insert element,which will affect the order index in queue
     * @returns new length of queue
     */
    push(insertItem: unknown, priority = 0) {
        const newItem = new QueueItem(insertItem, priority)
        if (!this.items.length) {
            return this.items.push(newItem)
        } else {
            const isAppended = this.items.some((item, index) => {
                if (item.priority < priority) {
                    this.items.splice(index, 0, newItem)
                    return true
                }
                return false
            })
            !isAppended && this.items.push(newItem)
        }
        return this.items.length
    }

    /**
     * remove the fisrt element of a queue,and return removed element
     * @returns removed element of queue
     */
    delete() {
        return this.items.shift()
    }

    /**
     * return the fisrt element of a queue
     * @returns the first element of queue
     */
    front() {
        return this.items[0]
    }

    /**
     * check a queue is empty
     * @returns return the queue is empty
     */
    isEmpty() {
        return !this.items.length
    }

    /**
     * get the length of a queue
     * @returns length of queue
     */
    size() {
        return this.items.length
    }

    toString() {
        return this.items.reduce((pre,item) => {
            pre = pre + item.item 
            return pre
        },'')
    }

}

const queue = new PriorityQueue()
queue.push(1,999)
queue.push(2)
queue.push(3)
queue.push(9,2)
console.log('queue.front', queue.front())
console.log('queue.delete()', queue.delete())
console.log('queue.isEmpty', queue.isEmpty())
console.log('queue.size()', queue.size())
console.log('queue.toString()', queue.toString())
