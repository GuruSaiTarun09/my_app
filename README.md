# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
  directives:usefull to alter the Dom

Angular Setup:
==============
1) install nodes 
	download and install

	Check: node -v
               npm -v

2) Installl angular

	npm i -g @angular/cli@15

3) Create new project

	ng new my-app

4) Start the server 

	=> PowerShell permission to use it in VSCode

		1) open powershell as administator
		2) run command:  set-executionPolicy unresticted

	ng serve
	

5) check output in browser

	localhost:4200



Directives: Useful to alter the DOM
===========
1) Structural Directives: *ngFor, *ngIf
2) Attribute Directives: ngClass, ngStyle

Pipes: transform data to another format
======


RXJS:
=====
promise, observable, subject


Steps:
======
1) Create VehicleComponent, Create VehicleService

2) Import HttpClientModule

3) Inject HttpClient service in VehicleService

4) Request api with get method
   it will return observable of data

5) 
    5.1) Inject VehicleService in VehicleComponent
    5.2) Subscribe to observable to listen the data in component
	5.3) Store the data in vatiable

6) Display the data in html using *ngFor


<!-- 
All API calls:
==============

1) all         get     url  

2) one         get     url/id

3) filter      get     url?filter=red

4) sorting     get     url?sortBy=color&order=asc/desc

5) pagination  get     url?page=1&limit=10

6) create      post    url,data

6) delete      delete  url/id





 Forms:
 ======
1) FormGorup
2) Nested FormGroup
3) FormArray
4) Dynamic Forms
5) FormValidations
6) Custom Validators


-->