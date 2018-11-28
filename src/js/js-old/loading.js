/* =========================================================
       Laoding
    ============================================================ */

if (jQuery('.bubblingG').length) {
    // console.log('bubblingG');

    if (jQuery.cookie('visitNbr') == null) {
        //If the cookie doesn't exist, save the cookie with the value of 1
        // console.log('if');
        jQuery.cookie('visitNbr', '1', { expires: 7 });
        // console.log(parseInt(jQuery.cookie('visitNbr')));
        $(window).bind("load", function() {
            $('.bubblingG').removeClass('showLoading');
            $('body').removeClass('loading')
            // console.log("load");

        });
    } else if (parseInt(jQuery.cookie('visitNbr')) >= 1) {
        // console.log('else');
        // If the cookie exists, take the value
        var cookie_value = jQuery.cookie('visitNbr');
        // console.log(cookie_value);
        // Convert the value to an int to make sure
        cookie_value = parseInt(cookie_value);
        // Add 1 to the cookie_value
        cookie_value++;

        // Or make a pretty one liner
        // cookie_value = parseInt(jQuery.cookie('shownDialog')) + 1;

        // Save the incremented value to the cookie
        jQuery.cookie('visitNbr', cookie_value, { expires: 7 });
        $('body').removeClass('loading');
        $('.bubblingG').removeClass('showLoading');


    }
};

