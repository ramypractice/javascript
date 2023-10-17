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


  // Wait for the document to be fully loaded
$(document).ready(function() {
    // Code inside this block will run when the document is ready

    // Hide the element with ID "myElement"
    $('#myElement').hide();
});

  