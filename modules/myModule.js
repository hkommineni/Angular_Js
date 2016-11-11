var app = angular.module("MyHelloModuleApp",[]);
app.controller("ModulesCtrl",ModulesCtrl);

function ModulesCtrl() {
	this.helloMessage = "I'am from my hello module";
}