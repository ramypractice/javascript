        // Function to create a message from a person
        function createMessage(person, message) {
            return person + ': ' + message;
        }

        // Variables representing two people
        var person1 = 'John';
        var person2 = 'Ali';

        // Conversation between the two people
        var message1 = createMessage(person1, 'Hello, how are you?');
        var message2 = createMessage(person2, 'Hi John, I am doing well. How about you?');

        // Printing the conversation
        console.log(message1);
        console.log(message2);

                
        
        // Function to create a message from a person
        function createMessage(person, message) {
            return person + ': ' + message;
        }

        // Variables representing two people
        var person1 = 'John';
        var person2 = 'Ali';

        // Conversation between the two people
        var message1 = createMessage(person1, 'Hello, how are you?');
        var message2 = createMessage(person2, 'Hi John, I am doing well. How about you?');

        // Displaying the conversation in the specified div with typing animation
        var conversationDiv = document.getElementById('conversation');

        function displayMessage(message, speed) {
            var index = 0;
            var typingEffect = setInterval(function() {
                conversationDiv.innerHTML = message.slice(0, index);
                index++;
                if (index > message.length) {
                    clearInterval(typingEffect);
                }
            }, speed);
        }

        // Display the messages with typing animation
        displayMessage(message1, 100);
        setTimeout(function() {
            displayMessage(message2, 100);
        }, message1.length * 100 + 1000); // Wait for message1 to finish and then display message2
        