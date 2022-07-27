$(document).ready(function() {
    $('#menu img').click(function() {
        $('#list').toggleClass('Rd');
    });
    $('#list a').click(function() {
        $('#list').removeClass('Rd');
    })
})