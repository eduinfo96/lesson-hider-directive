angular.module('directivePractice')
    .directive('lessonHider', function() {
        return {
            templateUrl: './lessonHider.html',
            restrict: 'E',
            scope: {
                lesson: '=',
                dayAlert: '&',
                deleteMe: '&'


            },
            link: function(scope, elem, attr) {
                scope.getSchedule.then(function(response) {
                    scope.schedule = response.data;

                    scope.schedule.forEach(function(scheduleDay) {
                        if (scheduleDay.lesson === scope.lesson) {
                            scope.lessonDay = scheduleDay.weekday;
                            elem.find('li').css('text-decoration', 'line-through');
                            scope.isFinished = true;
                            return;
                        }

                        scope.strikeThrough = function() {
                            if (scope.isFinished) {
                                elem.find('li').css('text-decoration', 'line-through');
                            } else {
                                elem.find('li').css('text-decoration', 'none');
                            }
                        }


                    });
                });

            },
            controller: function($scope, lessonService) {
                $scope.getSchedule = lessonService.getSchedule();

            }
        }




    });
