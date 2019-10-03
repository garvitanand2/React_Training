The project is built up usig Node js and React Js. It is simple CRUD application involving operations like Creation of some data, editing the data, deleting the data, and updating the data.
The tech stack used in building the project is as follows 
> Node Js 
> REact Js 
> React Bootstrap(For styling)
> Axios
> REST Api 
> JWT tokens 
> Postgres for database 
> Hashing Function 


# Important data base queries 
 1  create table if not exists signup(
    id serial primary key,
    name text NOT NULL,
    email text UNIQUE not NULL,
    password text not NULL,
    token text not NUll
    );



