# COM519 - Atletas Report
[Link to Hosted Website](https://frozen-dawn-51894.herokuapp.com/) <br>
[Link to Website GitHub Repoitory](https://github.com/KJafro/COM_519_Kurt) <br>


## Introduction
Atletas is a group of 3 local Spanish doctors who have come together to gather data from friends and family as 'Entries' to prove the innaccuracy of BMI (Body Mass Index). The reason for this project is because
BMI can be misleading which can possibly lead to eating disorders for healthy normal weight people. Normally BMI calculators focus on your height and weight whereas the information from this application would 
gather more important factors which will be explained in the Database Design. 

## System Overview
Due to the nature of the project the system will be a basic design using MVC Framework which seperates the application into the different components. The website focuses on a minimal design with the homepage featuring a basic BMI calculator which ask for the users height and weight and depending on the result it will shows whether the user how healthy the individual is - this isn't enough information to determine whether the individual is healthy. 

The user will be able to register using an e-mail and password and they will be able to add new Entries. 

![Register](/public/images/reg.PNG)

Once logged in the user will be allowed to
add information such as the Full Name, Gender, Height, Weight, Bodyfat and the BMI - then the user will be able to 'Select Profile' which shows on the system which specific doctor added the entry. 

![CreateEntry](/public/images/createentry.PNG)


After adding an entry the user can view the 'Entries' page which shows the different entries the docots have submitted to the database with information such as 'Name, Gender, Weight, Height, Bodyfat, BMI, Added by'. The user can then decide whether they want to delete specific records by pressing the 'Delete' button. The user is also able to look at previous entries by choosing a different page number.

![Entries](/public/images/entries1.PNG)
![Entries_](/public/images/entries2.PNG)

## Key Design Decisions
As the website/database was following a basic design I decided to use Bootstrap instead of CSS as this would save alot of time with the design process and would give me a good template to work from. I also decided to include a simple BMI calculator which works with limited amount of data which shows how unreliable it can be.  

![!bmicalc](/public/images/bmicalc.PNG)

The registration and login forms include validation which brings up error depending on the problems such as Incorrect E-mail/Password, it also alerts the user that the webpage is loading after logging in and would the user would need to press 'OK' to continue. The 'Entries' page has the ability to view the different pages using pagination.




mongodb search function
important factors gender/body fat %
