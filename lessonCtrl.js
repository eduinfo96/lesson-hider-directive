angular.module( 'directivePractice' ).controller( 'lessonCtrl', function($scope) {

$scope.lessons = ['Services', 'Routing', 'Directives',
                  'Review', 'Firebase', 'No server project',
                  'Node', 'Express', 'Mongo'];
$scope.test = 'Two-way data binding!'
$scope.announceDay = function(thisLesson, thisDay) {
  if (thisDay == undefined) {
    alert( 'The active day for this lesson is undetermined.');
    return;
  }
  alert(thisLesson + ' is active on ' + thisDay + '.');
}
$scope.deleteMe = function(index){
  $scope.lessons.splice(index,1);
}

})
