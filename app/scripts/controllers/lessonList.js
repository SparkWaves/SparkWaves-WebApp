'use strict';


angular.module('sparkWavesApp')
  .controller('LessonListCtrl', function ($scope, LessonService) {
    $scope.lessonListModel = {};

    $scope.getLessons = function() {
      LessonService.getLessons()
      .then(function(res){
        $scope.lessonListModel.lessons = res.data.results;
      });
    };
  });
