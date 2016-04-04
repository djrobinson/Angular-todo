angular
  .module('todoApp', ['ngRoute'])
  .config(config)
  .controller('MainCtrl', MainCtrl)

function config($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: './todo.html'
    })
    .when('/done', {
      templateUrl: './done.html'
    })
    .when('/new', {
      templateUrl: './new.html'
    });
}

function MainCtrl($scope){

  $scope.todos = [{
    id: 0,
    title: "Testing 1",
    done: false
  },
  {
    id: 1,
    title: "Testing 2",
    done: false
  }];
  console.log($scope.todos);
  $scope.done = function(id){
    $scope.todos[id].done = !$scope.todos[id].done;
    console.log($scope.todos[id]);
  }
  $scope.add = function(data){
    console.log(data.todoTitle);
    $scope.todos.push({
      id: $scope.todos.length,
      title: data.todoTitle,
      done: false
    })

  }
}