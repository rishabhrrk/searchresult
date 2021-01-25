# Record Search

### Functionality
Enter a name in the search bar and the UI will display top 7 names which contain that alphabets in that order. These names are most common in USA and the number of people with a name is also displayed.

### Assumptions
Records are in millions.
A database is used.
Names are case insensitive.


### Inputs
Any name or sequence of alphabets

### Output
A list of top 7 names which contain that sequence of alphabets.

### Steps to run the program
1. Clone the repository.
2. Install npm
3. Use MySQL and use the following commands to create schema and table.
`CREATE DATABASE searchable;
USE searchable;
CREATE TABLE names (
  Id int DEFAULT NULL,
  Name text,
  Year int DEFAULT NULL,
  Gender text,
  Count int DEFAULT NULL
);`
4. Upload csv file names.csv into table names.
5. In Command line, navigate to folder searchresultbackend and run the following command.
`npm install && cd searchresult && npm install && cd .. && npm run dev`
6. The application UI will start on port 3000 and backend on 8000. This is hard coded for now. for changing this change .env file in the root folder as well as in the searchresult directory. Both files will have 8000 as the port. both files should have the same PORT number.