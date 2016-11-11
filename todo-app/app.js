var app = angular.module('todoApp', []);
app.controller("TodoCtrl", TodoCtrl);

function TodoCtrl(){
	this.editMode = false;
	this.todoList =[
		"Learn Angular",
		"Learn Maven",
		"Complete RESTful"
	];

	this.addNewTodo = function(){
		this.todoList.push(this.todoString);
		this.todoString = "";


	}

	this.triggerEdit = function(){
		this.editMode = !this.editMode;
	}

	this.deleteTodo = function(index){
		this.todoList.splice(index,1);

	}

}