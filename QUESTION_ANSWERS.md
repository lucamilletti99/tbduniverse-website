### Each sprint has conceptual questions - use this readme to answer them as a group!

Question 1: We felt we communicated pretty well, organizing meeting times that fit into everyone's schedules and timezones. We primarily communicated through an imessage groupchat with more individual questions via direct message. We think maintaining a more constant form of communication could help in future sprints, and the fact that this week had New Years Eve/Day definitely didn't help our overall level of communication. In terms of some workaround for github, some of the backend work was done through VSCode Live Share which allows multiple participants to be working on the same code simultaneously without having to make push/pull requests (kind of like working on a google document).

Question 2: We found that an NPM would be faster as these are downloaded to our server, at the cost of increasing the dependency list, thus bloating the node_modules folder. A CDN would be easier to manage as it involves remotely accessing someone's library, meaning we don't have to stress about downloading more depencies and increasing the size of our project like with an NPM. Our group didn't particularly have a preference of either, but noted that each has their own merit when it comes to when they should be implemented. 


### SPRINT TWO

Question1: The Backend should be stateless in order to allow for ease of use for multiple servers. It is bad practice to save user info on the backend because that information would be saved onto one server and could potentially be given to anyone accessing that server, instead use a database. The rest api allows us to communicate with the frontend and database depending on certain requests (CRUD). 

Question2: A design pattern we researched was the Strategy Design Pattern. This pattern contains a class with multiple methods that, on runtime, will decide which of the methods to run depending on the client. In our project we could potentially utilize this design pattern if we were to add some sort of payment method to our website. If users wanted the ability to choose different ways of paying a Strategy design pattern might come in handy.