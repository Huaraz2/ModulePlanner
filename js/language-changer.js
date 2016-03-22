$(document).ready(function () {


    // Hopefully so that the code is easier to follow we define our selectors
    // now
    var langnames = "div.language";
    var langchooser = "select#lang-chooser";

    // This function handles everything to do with changing the theme
    // including:
    //             - Updating the dropdown selection
    //             - If the facility is available, saving the user preference
    var changeLanguage = function(short) {
        // Hide all language details
        $(langnames).hide();

        // Unhide the relevant language
        $(langnames + "#" + short).show();

        // Update the dropdown
        $(langchooser).val(short);

        // If local storage is available, save the language so the change
        // is persistent both accross page loads and entire sessions
        if (typeof(Storage) !== undefined) {
            localStorage.setItem("lang", short);
        }
    };

    // In case there already is a saved preference, load that theme
    // otherwise load the default
    if (localStorage.lang) {
        changeLanguage(localStorage.lang);
    } else {
	    changeLanguage("en");
    }

    // Finally this code is only run when the user makes a choice using the
    // dropdown in the footer
    $(langchooser).change(function() {
        var new_lang = $(langchooser).val();
	    changeLanguage(new_lang);
    });
});
