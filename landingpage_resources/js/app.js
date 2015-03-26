

var params = {};
var ps = window.location.search.split(/\?|&/);
for (var i = 0; i < ps.length; i++) {
    if (ps[i]) {
        var p = ps[i].split(/=/);
        params[p[0]] = p[1];
    }
}

setTimeout(function(){
    $( "#form1" ).addClass( "up" );
},2300);


setTimeout(function(){
    $( "#sub_heading" ).removeClass( "transparent" );
},2200);



setTimeout(function(){
    $( "#form_toggle" ).removeClass( "transparent" );
},2800);


// create angular app
var validationApp = angular.module('validationApp', []);

// create angular controller
validationApp.controller('mainController', function($scope) {



    // function to submit the form after all validation has occurred
    $scope.submitForm = function() {

        // check to make sure the form is completely valid
        if ($scope.userForm.$valid) {


   }


    };


});

//form 2 controller

// create angular controller
validationApp.controller('mainController', function($scope) {



    // function to submit the form after all validation has occurred
    $scope.submitForm2 = function() {

        // check to make sure the form is completely valid
        if ($scope.userForm2.$valid) {

        }



    };


});



//phone
validationApp.controller('MyCtrl', function($scope) {
    $scope.currencyVal;
});

validationApp.directive('phoneInput', function($filter, $browser) {
    return {
        require: 'ngModel',
        link: function($scope, $element, $attrs, ngModelCtrl) {
            var listener = function() {
                var value = $element.val().replace(/[^0-9]/g, '');
                $element.val($filter('tel')(value, false));
            };

            // This runs when we update the text field
            ngModelCtrl.$parsers.push(function(viewValue) {
                return viewValue.replace(/[^0-9]/g, '').slice(0,10);
            });

            // This runs when the model gets updated on the scope directly and keeps our view in sync
            ngModelCtrl.$render = function() {
                $element.val($filter('tel')(ngModelCtrl.$viewValue, false));
            };

            $element.bind('change', listener);
            $element.bind('keydown', function(event) {
                var key = event.keyCode;
                // If the keys include the CTRL, SHIFT, ALT, or META keys, or the arrow keys, do nothing.
                // This lets us support copy and paste too
                if (key == 91 || (15 < key && key < 19) || (37 <= key && key <= 40)){
                    return;
                }
                $browser.defer(listener); // Have to do this or changes don't get picked up properly
            });

            $element.bind('paste cut', function() {
                $browser.defer(listener);
            });
        }
    };


});

validationApp.filter('tel', function () {
    return function (tel) {
        console.log(tel);
        if (!tel) { return ''; }

        var value = tel.toString().trim().replace(/^\+/, '');

        if (value.match(/[^0-9]/)) {
            return tel;
        }

        var country, city, number;

        switch (value.length) {
            case 1:
            case 2:
            case 3:
                city = value;
                break;

            default:
                city = value.slice(0, 3);
                number = value.slice(3);
        }

        if(number){
            if(number.length>3){
                number = number.slice(0, 3) + '-' + number.slice(3,7);
            }
            else{
                number = number;
            }

            return ("(" + city + ") " + number).trim();
        }
        else{
            return "(" + city;
        }

    };
});

//custom select slide
(function() {
    [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {
        new SelectFx(el);
    } );
})();


//submit masking / form shake
$( "#valid_sub" ).click(function() {
    setTimeout(function() {
        if ( $(".form-group").hasClass("error") ) {
            $('#top-form').addClass('invalid');
        }
    }, 50);
    setTimeout(function() {
        $('#top-form').removeClass('invalid');
    }, 600);

    $("#submit_1").click();
});

//Form 2submit masking / form shake
$( "#valid_sub2" ).click(function() {
    setTimeout(function() {
        if ( $(".form-group").hasClass("error") ) {
            $('#top-form2').addClass('invalid');
        }
    }, 50);
    setTimeout(function() {
        $('#top-form2').removeClass('invalid');
    }, 600);

    $("#submit_2").click();
});


$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


var textarea = document.querySelector('textarea');

//textarea.addEventListener('keydown', autosize);

function autosize(){
    var el = this;
    setTimeout(function(){
        el.style.cssText = 'height:auto; min-height:48px;  border-radius:0px;';
        // for box-sizing other than "content-box" use:
        // el.style.cssText = '-moz-box-sizing:content-box';
        el.style.cssText = 'overflow:hidden;min-height:48px; resize:none;  border-radius:0px;height:' + el.scrollHeight + 'px';
    },2);
}

//BigVideo Loop
$(function() {
    var opts = {
        controls: false,
        doLoop: true
    }
    var BV = new $.BigVideo(opts, {useFlashForFirefox:false});
    BV.init();

    //Modernizr function
    if (Modernizr.touch) {
        // alert("This is touch");
        BV.show( 'landingpage_resources/img/downtown_portland.jpg');

    } else {
        BV.show( "landingpage_resources/vids/HustleCon.mp4", { ambient:true });
        //alert("This is not touch");
    }
});

//this is waypoints for a class
$('.waypoint-trigger').waypoint(function() {
    $( this ).removeClass( "waypoint-default" )
}, {  offset: '70%' });

$('.circle').waypoint(function() {
    $( ".splatter" ).addClass( "splatter-anim" );
}, {  offset: '70%' });




