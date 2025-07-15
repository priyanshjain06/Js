// Maps : they are unique and maintains order in which they are inserted
// Map objects are collections of key-value pairs. 

const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

//REVIEW accessing values 
console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97); //REVIEW - 

console.log(map1.get('a'));
// Expected output: 97

console.log(map1.size); //REVIEW - 
// Expected output: 3

map1.delete('b'); //REVIEW 

console.log(map1.size);
// Expected output: 2


//REVIEW Setting object properties
const wrongMap = new Map();
wrongMap["bla"] = "blaa";
wrongMap["bla2"] = "blaaa2";

console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }


//REVIEW  another way for setting object properties
const contacts = new Map();
contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
console.log(contacts); // Map { 'Jessie' => { phone: '213-555-1234', address: '123 N 1st Ave' } }
