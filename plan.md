# Plan

## Initial database setup

- install npm packages ✅

### CreateTable

- create .env for credentials ✅
- import pg in index.js ✅
- create database on heroku to be able to extract credentials ✅
- create pool variable (and export) and use process.env.CREDENTIALS ✅
- Create script folder and create js files for sql queries (createtable & populate) ✅
- in createtable.js, use query method on pool to send sql query to db ✅
- added script in package.json for db:createTable (do not forget dotenv config) ✅

### PopulateTable

- get drugs data using mockaroo.com ✅
- add data to populateTable js file ✅
- create populateTable functionality using SQL and pool ✅
- add script to package.json to run db:populateTable ✅
- check populate data function works ✅

### Drop/delete table

- add dropTable js file ✅
- create dropTable functionality using SQL and pool ✅
- add script to package.json to run db:dropTable ✅
- check dropTable function works ✅

## Adding CRUD functionality

### READ - GET

- create drugs.js models file ✅
- import pool from db/index.js ✅
- create async function - getDrugs()
  - should include SQL string 'SELECT \* FROM drugs' ✅
  - should await, return result, and be exported for router ✅
- use app.use to direct request from path '/drugs' to the drugs router ✅
- create drugs.js router file ✅
- import router from express and assign to 'const router', export router ✅

* add -r dotenv/config to script in package.json (for nodemon) ✅

- import getDrugs function from models ✅
- create router.get async function on path '/' ✅
  - runs and awaits getDrugs() ✅
  - should return res.json with object containing payload ✅
- check that this function works using browser/postman ✅

### CREATE - POST

- use app.use(express.json()), this is to handle post request ✅
- create async function in models - addDrug() ✅
  - need correct SQL string ✅
  - await results, and export to router ✅
- creat router.post() make async function at '/' path ✅
  - await addDrug() ✅
  - return res.json with appropriate payload ✅
- check that this function works using postman ✅

### DELETE - DELETE

- create async function in models - deleteDrug() by id ✅
  - need correct SQL string ✅
  - await results, and export to router ✅
- creat router.delete() make async function at '/:id' path ✅
  - await deleteDrug() ✅
  - return res.json with deleted item ✅
- check that this function works using postman ✅

### UPDATE - PUT

- create async function in models - replaceDrug() by id ✅
  - need correct SQL string (UPDATE) ✅
  - await results, and export to router ✅
- creat router.put() make async function at '/:id' path ✅
  - await replaceDrug() ✅
  - return res.json with replaced item ✅
- check that this function works using postman ✅

### UPDATE - PATCH

- create async function in models - updateDrug() by specific column ✅
  - need correct SQL string (UPDATE) ✅
  - await results, and export to router ✅
  - add separate if function for each property update ✅
  - return fully updated object in table using id ✅
  - NB. SQL query cannot un-stringify column name from params - needed to assign to variable in object ✅
- creat router.patch() make async function at '/:id' path ✅
  - await updateDrug() ✅
  - return res.json with replaced item ✅
- check that this function works using postman ✅
