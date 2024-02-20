import "./style.css";
import LinkedList from "./linked-list";

const linkedList = new LinkedList();

linkedList.prepend("test 1");

console.log(linkedList);

linkedList.append("test 2");

linkedList.append("test 3");

linkedList.append("test 4");

linkedList.append("test 5");

console.log(linkedList.toString());

console.log(`Linked List has ${linkedList.size()} elements.`);

console.log(`Linked List head element is ${linkedList.head()}.`);

console.log(`The last element in Linked List is ${linkedList.tail()}.`);

console.log(`The third item in Linked List is ${linkedList.at(2)}.`);

linkedList.pop();
console.log(`Popped Linked List { ${linkedList.toString()} }.`);

console.log(`Does Linked List contain "test 2"?: ${linkedList.contains("test 2")}.`);

console.log(`Does Linked List contain "test 8"?: ${linkedList.contains("test 8")}.`);

console.log(`The index for "test 4" in Linked List is ${linkedList.find("test 4")}.`);

console.log(`Trying to find index for "test 8" in Linked List gives error message: ${linkedList.find("test 8")}.`);

linkedList.insertAt("new test", 2);
console.log(`Inserting "new test" at index 2: ${linkedList.toString()}.`);

linkedList.removeAt(2);
console.log(`Removing "new test" from Linked List: ${linkedList.toString()}.`);