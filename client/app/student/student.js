'use strict';

angular.module('angularFullstackorgApp')
  .config(function ($stateProvider) {
    $stateProvider
    .state('student', {
      url: '/student',
      templateUrl: 'app/student/student.html',
      controller: 'StudentCtrl'
    }).state('editStudent', {
      url: '/student/:id',
      templateUrl: 'app/student/student.html',
      controller: 'StudentCtrl'
    });
  });
