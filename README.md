# MEANStack
This repository contains MEANStack projects

Lab 1 : Calculator
This lab assignment covers developing REST services using Node.js (Express JS), HTML5 and Angular JS

Server: Calculator to demonstrate stateless web services.The server should include the following functionalities:
1. Addition 2. Subtraction 3. Multiplication 4. Division 
  
Client: Calculator Client Use features of HTML5. Client should use all the functionalities provided by the web service 

Testing :

 Testing should be done using JMeter:  Automate the processes using JMeter and print the average time required for below operations: 
 
1. Start a timer 
2. Invoke 1000 calls on randomly selected tasks
3. Stop the timer and print out the average time for each operation returned by JMeter 
4. Start a timer 
5. Invoke 5000 calls on randomly selected tasks 
6. Stop the timer and print out the average time for each operation returned by JMeter 
7. Start a timer 
8. Invoke 100 concurrent users with 1000 calls on randomly selected tasks 
9. Stop the timer and print out the average time for each operation returned by JMeter 
 
 Ebay Marketplace Application
 
 You need to develop “Simple Market Place”. This server should perform the following tasks: 
 
a) Basic functionality would include user to Sign Up, Sign In, Sign Out. Sign Up should have first name, last name, Email and password. In order to use the system, a user must sign in first. 
b) Should be able to store user’s advertisements for others to read. This should at-least include the item name, item description, seller information, item price and quantity. (Only text, no images). E.g. Advertisement – “Laptop”, “2.2 GHz Core 2 Duo, 2GB RAM…”, “Jon Smith, shipping from NY”, “$600”, “4 pieces”
c) Should give all the advertisements details to all the other users.
d) Users can buy the product displayed by other users. You should take care of quantities and should respectively reflect user accounts in case of any transaction. 
e) Shopping Cart should be maintained which will reflect temporary items. Users should be able to add, remove items from the cart until checkout.
f) Checkout should deduct and add items from seller and buyer respectively.
g) Should perform simple credit card validations on payment. (check to be sure the number entered is16 digits) 
h) Users account should reflect all the bought and sold items. 
i) Should maintain time last logged in and should be returned back when user logs in. 

Testing :
Testing of the server should be done using JMeter and Mocha. Mocha is a node.js testing framework.  
 
Following tasks to be tested using JMeter: (2 Points) 
 
Test the server for 100, 200, 300, 400 and 500 concurrent users with and without connection pooling. Draw the graph with the average time and include it in the report. 
 
Following tasks to be tested using Mocha: (1 Point) 
 
Implement 5 randomly selected REST web service API calls using Mocha. Display the output in the report
 
