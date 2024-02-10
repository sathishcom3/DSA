class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
} 


class SinglyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null
        this.length = 0;
    }
    
    add(data) {

        let newNode = new Node(data);

        if(this.head === null) {
            this.head = newNode;
            this.length++;
        }else{
            let currentNode = this.head;

            while(currentNode.next != null){
                currentNode = currentNode.next;
            }

            currentNode.next = newNode;
        }
        this.tail = newNode;
        this.length++;
    }

    addAtIndex(data, position) {
        let newNode = new Node(data);

        if(position === 1 || this.head === null) {
            newNode.next = this.head;
            this.head = newNode;
         }else {
            
            let currentNode = this.head;
            let i =1;
            while(i < position-1 && currentNode.next != null) {
                currentNode = currentNode.next;
                i++;
            }
            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }
        this.length++;
        
    }

    delete(position) {
       
        let prev = null, temp;
        
        if(position === 1) {
            temp = this.head;
            this.head = this.head.next;
        }else {
            let i = 1;
            let currentNode = this.head;
            
            while(i < position && currentNode.next != null) {
                prev = currentNode;
                currentNode = currentNode.next;
                i++;
            }
            prev.next = currentNode.next;
            currentNode = null;
            
        }
    }

    deleteByData(data) {

        let currentNode = this.head; 
        let prevNode = null;

        while(currentNode != null) {
            
           
            if(currentNode.data == data) {
                
                if(prevNode == null) {
                   this.head = currentNode.next 
                }else {
                    prevNode.next = currentNode.next;
                    
                }
                currentNode = null;
                return false;
            }
            
            prevNode = currentNode;
            currentNode = currentNode.next; 
        }
        
    }

    reverse() {
        let currentNode = this.head;   
        let prev = null;

        while(currentNode) {
            let nextNode = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = nextNode;
        }
        this.head = prev;
    }
    
    printAll() {
         let currentNode = this.head;

            while(currentNode != null){
                console.log(currentNode.data);
                currentNode = currentNode.next;
            }
    }
    
}

const SLL = new SinglyLinkedList()
SLL.add("Node 1");
SLL.add("Node 2");
SLL.add("Node 3");
SLL.add("Node 4");
SLL.addAtIndex("Node 3.1", 3);
SLL.printAll();
