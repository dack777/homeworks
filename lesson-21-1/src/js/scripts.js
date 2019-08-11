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