'use strict';

angular.module('angularFullstackorgApp')
  .controller('StudentCtrl', function ($scope, Student, $stateParams) {
    $scope.message = 'Hello';

    var editStudent;

    if($stateParams.id){
        $scope.student = Student.get({id:$stateParams.id}, function(student){
          editStudent = student;
          return student;
        });
    }else{
      $scope.students = Student.query(function(students){
        return students;
      });
    }

    $scope.save = function(){
      var student = editStudent || new Student();
      student.firstName = $scope.student.firstName;
      student.lastName = $scope.student.lastName;
      student.phone = $scope.student.phone;

      student.$save(function(err, data){
        console.log(err, data);
      });

    };
  });
