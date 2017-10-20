## crm-factory-coding-test

![alt text](https://github.com/PabloRN/crm-factory-Coding-test/blob/master/mcon%20print.png)

##  Description:

The project shows a employees list. Each item has an employee name and a bio. By default, the bio content is hidden. By clicking on the employee name, the bio content shows. If you click in another employee the item that was open collapse. When you click in item bio the system shows an alert dialog with the employee data.

##  Technical Description:

The list of employees was created in a json file and a factory was created to access the file using angular $http service (in bigger systems is recomended to use Restangular to access an API).  Using angular ui-router to manage routes in a state machine, was created a resolve that use the $http service to get the employees list and injected it into the controller to later bind the data to the view. 

## Getting Started:

Clone the project  in this link: [https://github.com/PabloRN/crm-factory-Coding-test](https://github.com/PabloRN/crm-factory-Coding-test)

## Prerequisites

1. Install Npm

To use npm you have to install node [https://nodejs.org/en/](https://nodejs.org/en/)

To check if you have Node.js installed, run this command in your terminal:

```javascript
node -v
```

To confirm that you have npm installed you can run this command in your terminal:

```javascript
npm -v
```

2.	install Bower

```javascript
npm install bower
```


## Installing

1.	run mpm install 

```javascript
npm install
```

2.	run bower install

```javascript
npm install
```

## Running the project for development

```javascript
gulp serve
```

## Running the tests

```javascript
gulp test
```

## Running build to create dist folder

```javascript
gulp build
```

## Built With
This project was built with angularjs as framework. Using gulp, jasmine and karma to testing. Used eslint for a readable code. For the version control was used github

## Authors
Pablo Reyes Naranjo
 





