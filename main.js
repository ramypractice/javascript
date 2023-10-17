function sayHello(name) {
    if (name.toLowerCase() === 'john') {
      return 'Hello Ali';
    } else {
      return 'Hello ' + name;
    }
  }
  
  // Example usage:
  console.log(sayHello('John')); // Output: Hello Ali
  console.log(sayHello('Ali')); // Output: Hello Alice
  