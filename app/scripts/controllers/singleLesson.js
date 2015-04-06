'use strict';


angular.module('sparkWavesApp')
  .controller('SingleLessonCtrl', function ($scope, $routeParams, LessonService) {
    $scope.lessonModel = {};
    $scope.lessonModel.lessonId = $routeParams.lessonId;

    $scope.getLesson = function() {
      LessonService.getLesson($scope.lessonModel.lessonId )
      .then(function(res){
        $scope.lessonModel.lesson = res.data;
      });
    };
  });
