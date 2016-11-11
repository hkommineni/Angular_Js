var app = angular.module("ModulesApp",["MyHelloModuleApp","ngTagsInput"]);

app.controller("TagsDemoCtrl", TagsDemoCtrl);

function TagsDemoCtrl(){
	  this.tags = [
    { text: 'Test1' },
    { text: 'Test2' },
    { text: 'Test3' }
  ];
} 



