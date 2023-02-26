interface IStack<T> {
    push(item: T): void;
    pop(): T | undefined;
    top(): T | undefined;
    size(): number;
    printStack(): void;
}

class Stack<T> implements IStack<T> {
    
    private storage: T[] = [];
    private capacity: number;
    
    constructor(capacity: number = Infinity) {
        this.capacity = capacity;
    }
   
    size(): number {
        return this.storage.length;
    }

    push(item: T): void {
        if(this.size() >= this.capacity) {
            throw new Error("Stack is Overflow");
        }
        this.storage.push(item);
    }

    pop(): T | undefined {
        if(this.size() <= 0) {
            throw new Error("Stack is underflow");
        }
        return this.storage.pop();
    }

    top() {
        return this.storage[this.size() - 1];
    }

    printStack(): void {
        console.log(this.storage);
    }

}

let myStack = new Stack<number>();
myStack.push(1);
myStack.push(2);
myStack.push(23);
console.log(myStack.pop());
myStack.printStack();