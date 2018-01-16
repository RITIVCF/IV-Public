import '/imports/startup/both/index';
import '../imports/startup/client/main.js';
$(document).ready(function(){
  $('.parallax').parallax();
});

// This is to correct the materialize toast error:
//    'Vel is not defined'
if ($) {
  Vel = $.Velocity;
}
else {
  Vel = Velocity; // change value with jQuery.Velocity
}
