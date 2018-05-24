const FollowToggle = require('follow-toggle');

$( function(){


  $('button.follow-toggle').each( (i, button) => new FollowToggle(button, {}) );
});
