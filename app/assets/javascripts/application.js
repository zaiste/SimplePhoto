// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require jquery.blueberry
//= require galleria-1.2.5.min 
//= require galleria.classic.min
//= require navigation
//= require content
//= require_tree .
//= require_self

jQuery(function($) {
    // Callback for rendering via HTML
    $('nav a[data-type=html]').on('ajax:success', function(event, data, status, xhr) {
        $('#content').html(data);
    });

    $("#gallery").galleria({
        width: 984,
        height: 654,
        autoplay: 4000
    });
});
