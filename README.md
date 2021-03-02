# Objective of Project

The objective of this project is to fetch data from the api endpoint and display information in a table format with the functionality of dynamic pagination, search, sort, and filter.

## Accomplishment
To achieve the objective, I have used the React platform for front-end coding. 

Initially, I started with creating a project called Test code, which creates all necessary project files. On top of that, I installed 
MaterialUI component, which allows me to display data in a tabular form and also provides search, filter and pagination options. However I would like to note that if required, I can also do the same using custom coding. 
To add the facebook login component, I have installed the React-Facebook-Login component. 
Standard process which I used was I separated the API link and saved in the server.js file, so the user does not have access to the data 
endpoint, they may only fetch and scroll through the data. 
After fetching the API, I used the MaterialUI component and created column names and linked the API data column's with it. 

Social Login Component: I have used the Facebook social login component to access the FDA Food Recall data. 
                        If login is successful, it will take you to the page which shows the FDA data in a tabular form with pagination. 
                        If login is unsuccessful, it will show an error message (Basically, you need to create a Facebook account)
        
Data: The webpage which shows the FDA Food Recall data contains dynamic pagination. 
      Sort: If the user hovers over the Column name, there is an arrow mark which when clicked will sort the column in ascending order. 
      Filter: There is functionality to filter data column-wise. 
      Search: There is Search bar in the top right corner of the page which allows the user to search for any keyword. 
      Pagination: The Pagination component enables the user to select a specific page from a range of pages. It also gives the user an 
                  option to select the number of rows to display at a time(5,10,20). The pagination component exists in the bottom right                   corner of the webpage. 

How to run the code? 
1) Clone the project into your local repository. 
2) Through command prompt, move into the project folder. 
3) "npm install" : which will install all the necessary libraries required for this project. 
4) To run, type "npm start", which will open a webpage asking for login via facebook. 
5) Note: During your first run, you need to allow access on Firewall pop-up. 

If you are using VSCode: 
Use the same steps above after opening project in VSCode. 

