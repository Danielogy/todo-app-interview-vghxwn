<img style="display: block" src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" alt="drawing" width="200"/> 

# Angular TO-DO Interview Application


### Installed Libraries

For ease of use we have installed Bootstrap, and Angular Materials.

## Routes

#### API URL - https://jsonplaceholder.typicode.com

API URL is located in the `variables.ts` file and is already imported into the `todos.service.ts` file for you to consume.  The API accepts any of the following request types in the list.

 - GET	/todos
 - GET	/todos/1
 - POST	/todos
 - PUT	/todos/1
 - PATCH	/todos/1
 - DELETE	/todos/1

## Directions

### Service:

A TodoService does already exist under the services folder for you to use however you may feel free to create your own.

- Use the  TodoService to GET list of TODOs
- Use the  TodoService to GET a single TODO (Optional but feel free to show us your wow factor)
- Use the  TodoService to POST a new TODO.
- Use the  TodoService to PUT a change to a TODO.
- Use the  TodoService to PATCH a TODO.
- Use the  TodoService to DELETE a TODO.

- Using observable patterns 

### Components:

Create a component to display a list of all the todos

- It should display all todos
- It should allow you to add
- It should allow you to remove todos
- It should allow you to change status of a todo
- It should allow you to change the name of a todo (Optional but again show us what you got)

### Create an interface for the todos

- id
- name
- status
- createdAt
- updatedAt

 ## Help Links

 #### Bootstrap - https://getbootstrap.com/docs/4.3/getting-started/introduction/

 #### Angular Materials - https://material.angular.io/components/categories

#### Font Awesome - https://fontawesome.com/icons?from=io

#### Angular - https://angular.io/docs


[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-n2y1zg)