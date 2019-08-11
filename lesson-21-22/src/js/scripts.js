$(document).ready(function(){

    $("#offer-form").on("submit", function(event) {
        var form = $(this);

        event.preventDefault();

        $.ajax({
            url: "mail.php",
            type: "POST",
            data: form.serialize(),
            success: function(data) {
                form[0].reset();
            },
            error: function(jsXHR, textStatus) {
                console.log(jsXHR + ': ' + textStatus);
            }
        });
    })
});


$(document).ready(function () {
    var container = $('.card, .step'),
        win = $(window),
        windowHeight = win.height();
    win.scroll(function () {
        var scrollPos = $(this).scrollTop(),
            containerPos = container.offset().top;
        if (scrollPos >= containerPos - windowHeight/1.5) {
            container.addClass('fadeen');
        }    
    });
});;