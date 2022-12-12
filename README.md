# Flex_Assignment
# Atlan - Internship Task

[AssignmentDemo.webm](https://user-images.githubusercontent.com/61665451/197129026-52c172a0-719f-48ed-97b3-2e1fc2164d76.webm)


# Development Server

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm run dev` to run the development server

# Overview

- I made this project keeping in mind for users varying from enable total beginners to advanced.
- Why just be limited to example datasets(most of the sql learning sites run examples on their own dataset),
  - so added the feature to adding owns datasets in CSV format.
  - Due to lack of backend & database (cant store it and add pictire)
  - _ToDo_ - use LocalStorage to store it.
- For beginners to learn SQL queries and commands - in the queries section I added a readonly CodeEditor where it dynamically updates the editor with the SQL queries selections made.
- Current QUERIES -
  - **SELECT** (Completed)
    - For all columns '\*'
    - On selected Columns
    - On selecting '\*' automatically deselects any other Columns
    - On selected Columns automatically deselects '\*'
  - **WHERE** (Completed)
    - When parsing CSV to json on adding CSV - Numeric datatypes are also converted to string
    - Using Regex to seperating -
      - Numeric Datatype
      - String Datatype
    - So relevant queries [IN, BETWEEN, LIKE, Comparisions] can be displayed accordingly. (TODO)
  - **ORDER BY** (Completed)
    - From the given column name, select columns to Sort the data by - ASC and DESC option
    - Using SortableJS to sort(by dragging up and down) the columns, and updating the relative order.
  - **LIMIT** (To Add)
  - **OFFSET** (To Add)
  - **GROUP BY** (To Add)
- More Queries yet to be added (including joining 2 tables)
- The application can work with large dataset (I tested till 100,000 rows of data - 1-2 sec delay in showing results)
- In the Results Page there is Toggle Editable Editor button, which allows users to update the Queries and see the different results.
- Currently I have coded the logic for SELECT query result, Others will be coded soon.

_**Check Out the application**_ - [SQL Assignment !!!](https://classy-alpaca-842cae.netlify.app/)

## Libraries used -

| Library | Usage |
| ----------- | ----------- |
| vite | Development Environment |
| pinia | State Management |
| tabulator-tables | Displaying Tables |
| vue-codemirror6 | Code Editor |
| vuedraggable | For rearranging in WHERE query |
| tailwindcss | Styling |

### Speed Test for the Site -
using the [speed test site](https://tools.pingdom.com/)
![Speed Test](/src/assets/ReadmePics/speed_test.png)

Sneak Peak of the Site -
![Home-Page](/src/assets/ReadmePics/homePage.png)
![Data-Page](/src/assets/ReadmePics/dataPage.png)
![Query-Page](/src/assets/ReadmePics/queryPage.png)
![Result-Page](/src/assets/ReadmePics/resultPage.png)

### Future Works -

- [ ] Performance increase for Huge datasets.
- [ ] Add local storage to store the imported datasets.
- [ ] Add more queries and their functionality.
- [ ] Work on Editable Editor in Result page to check query Validiation.
- [ ] Complete Dark theme styling
