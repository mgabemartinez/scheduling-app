// create our angular module and inject firebase
angular.module('scheduleApp', ['firebase'])

// create our main controller and get access to firebase
.controller('mainController', function($scope, $firebaseObject) {
  
  // connect to firebase 
  var ref = new Firebase("https://superschedule.firebaseio.com/");  

  // sync as object 
  var syncObject = $firebaseObject(ref.child('days'));

  // three way data binding
  syncObject.$bindTo($scope, 'days');

  // function to set the default data
  $scope.reset = function() {    

  var daysRef = ref.child('days');

    daysRef.set({
      '1': {
        name: 'Monday',
        slots: {
          '0900': {
            time: '9:00am',
            booked: false
          },
          '1100': {
            time: '11:00am',
            booked: false
          },
          '1300': {
            time: '1:00pm',
            booked: false
          },
          '1500': {
            time: '3:00pm',
            booked: false
          },
          '1700': {
            time: '5:00pm',
            booked: false
          },
          '1900': {
            time: '7:00pm',
            booked: false
          }
        }
      },
       '2': {
        name: 'Tuesday',
        slots: {
          '0900': {
            time: '9:00am',
            booked: false
          },
          '1100': {
            time: '11:00am',
            booked: false
          },
          '1300': {
            time: '1:00pm',
            booked: false
          },
          '1500': {
            time: '3:00pm',
            booked: false
          },
          '1700': {
            time: '5:00pm',
            booked: false
          },
          '1900': {
            time: '7:00pm',
            booked: false
          }
        }
      },
       '3': {
        name: 'Wednesday',
        slots: {
          '0900': {
            time: '9:00am',
            booked: false
          },
          '1100': {
            time: '11:00am',
            booked: false
          },
          '1300': {
            time: '1:00pm',
            booked: false
          },
          '1500': {
            time: '3:00pm',
            booked: false
          },
          '1700': {
            time: '5:00pm',
            booked: false
          },
          '1900': {
            time: '7:00pm',
            booked: false
          }
        }
      },
       '4': {
        name: 'Thursday',
        slots: {
          '0900': {
            time: '9:00am',
            booked: false
          },
          '1100': {
            time: '11:00am',
            booked: false
          },
          '1300': {
            time: '1:00pm',
            booked: false
          },
          '1500': {
            time: '3:00pm',
            booked: false
          },
          '1700': {
            time: '5:00pm',
            booked: false
          },
          '1900': {
            time: '7:00pm',
            booked: false
          }
        }
      },
       '5': {
        name: 'Friday',
        slots: {
          '0900': {
            time: '9:00am',
            booked: false
          },
          '1100': {
            time: '11:00am',
            booked: false
          },
          '1300': {
            time: '1:00pm',
            booked: false
          },
          '1500': {
            time: '3:00pm',
            booked: false
          },
          '1700': {
            time: '5:00pm',
            booked: false
          },
          '1900': {
            time: '7:00pm',
            booked: false
          }
        }
      }

   

    });

  };
  
});

