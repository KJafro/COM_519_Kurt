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

I thought about including the ability to add new profiles (doctors) but I feel this was unnecessary and just included the 3 doctors.

## Database Design
In the database there are 4 tables which include bodyfat, entries, profiles, users. 
![!bmicalc](/public/images/collections.PNG)

The Entries table features the gender, title (name of the profile), profile_name (doctor), height, weight, BMI, bodyfat and it also shows when the record was created/updated. 

The Profiles table features the name (doctors name), BMI, gender, conumber (contact number) and when the record was created/updated.

The users table features id(unique ID), email, password and when the record was created/updated.

MongoDB offers flexibilty and accessibility as it allows the user to search for specific records using the filter option. Below I have filtered 'bmi' and want to view all the records with the bmi of '20' in the 'Entries' record - once submitted this gives me 19 records out of the 50 available with the 'bmi' specific as '20'. This feature allows the user to be able to filter all the records available which will save alot of time for the user. MongoDB also includes 'MONGOSH' which is a command prompt for their application, it offers many features which allow the user to delete/rename collections and you can also filter out the records and delete specific records matching the filter provided.
![!filter](/public/images/filter1.PNG)

## Security and Scalability
When the user registers the password will go through a hash algorithm which then stores the password in the database, so if someone logs into the database through MongoDB the user won't be able to see the password. This can also be used to protect from bruteforce attacks which will make it much harder to fully crack the passwords. 

As this project is for a small group of people and quite basic there isn't much to do scalability wise other than adding features that you can sort records which would make it much easier rather than going into MongoDB.

## Conclusion and Reflection
Even though the database is basic I feel it meets the requirements for the project as it allows the doctors to add and delete as many records as they want, then having the ability to search and filter for specific keywords it is a good project to be able to collect the data they need. To improve this project I feel it would need a search option in the project rather than going through MongoDB and also the ability to sort records by ascending/descending. This project would give a much better understanding of health as it features more factors.

Although I used the template as a base starting point and also used Bootstrap with it I still feel like I have learnt alot in this module and as I have never used node.js but I am much more confident and feel I now have a good understanding of it.


