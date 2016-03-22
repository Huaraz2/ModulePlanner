$(document).ready(function() {

    /**
                    FUNCTIONS
     */

    // This function deselects any modules which depend on a module
    // we just unselected
    var deselectProvides = function(code) {

        // This selects the list of modules this one enables you to study
        var selector = "div.module#" + code + " > div.provides";

        // If that list actually exists for this module
        if ($(selector).children().length) {

            $(selector).children().each(function () {
                var mCode = $(this).attr("class");

                if(($("div.module#" + mCode).hasClass("selected"))) {

                    // Deselect the module then
                    toggleModule(mCode);

                }

            });
        }
    };

    // This function checks the requirements for the module, if this returns
    // false then you cannot choose this module
    var checkRequires = function(code) {

        // This will select the list of requirements
        var selector = "div.module#" + code + " > ul.requires";

        // Assume that we can choose the module for now
        var available = true;

        // If the list of requirements exist
        if ($(selector).children().length) {

            // For each item in the list,
            $(selector).children().each(function () {

                // The class of this item contains the module code we need
                var m = $(this).attr("class");

                // If the module isn't selected
                if(!($("div.module#" + m).hasClass("selected"))) {

                  // Then we can't choose this module
                  available = false;

                  // Show the list of requirements so that the user knows why
                  $("div.module#" + code + " > .requires").slideDown("slow");
                }
            });
            return available;
        } else {
            // No requirements, just select it
            return available;
        }
    };

    // This function handles toggling your selection of a module
    var toggleModule = function(code) {

        // This selects the module, based on its code
        var module = "div.module#" + code;

        // This selects the credit value associated with the module
        var totalcredits = "div.year > span.total-credits";

        // If the module has been selected
        if ($(module).hasClass("selected")) {

            // If this module is needed by something then they need deselecting also
            deselectProvides(code);

            // Deselect it and
            $(module).removeClass("selected");

            // Remove the right number of credits
            updateYearlyTotal(module, false);

        } else { // Otherwise try selecting the module


            // First check to see if the requirements are satisfied
            if (checkRequires(code)) {

                // If so select it
                $(module).addClass("selected");
                $(module + "> .requires").slideUp("slow");

                // Add on the right number of credits
                updateYearlyTotal(module, true);

            }
        }

    };

    // This function takes the array of credit totals and updates the
    // webpage for the user
    var updateTotals = function(totals) {

        // For each year on the page
        for (var year in totals) {

            // This selects the credit counter for the current year
            var counter = "div.year#" + year + " > h3 > span.credit";

            // Get the number of credits to update the page with
            var value = totals[year];

            // Update counter text
            $(counter).text(totals[year]);

            // If above the threshold warn the user
            if (value > 120 ) {

                if ($(counter).hasClass("ok")) {
                    $(counter).removeClass("ok");
                }

                if (!$(counter).hasClass("warn")) {
                    $(counter).addClass("warn");
                }
            }


            if (value <= 120) {

                if ($(counter).hasClass("warn")) {
                    $(counter).removeClass("warn");
                }

                if (!$(counter).hasClass("ok")) {
                    $(counter).addClass("ok");
                }
            }
            //console.log(year + " : " + totals[year]);
        }
    };

    // This function updates the credit value the year, takes two arguments:
    //      - module: The selection string for the module you are (de)selecting
    //      - inc:    A bool, true for selection, false for deselection
    var updateYearlyTotal = function(module, inc) {

        // Extract the number of credits it's worth
        var numCredits = $(module + " > div.group > aside > span.credit").text();
        //console.log("Num credits: " + numCredits);

        // Find out what year you belong to and add your credit total
        var parent = $(module).parents("div.year").attr("id");
        //console.log(parent);

        if (inc) {
            creditTotals[parent] += parseInt(numCredits);
        } else {
            creditTotals[parent] -= parseInt(numCredits);
        }
    };

    /**
                      LOGIC BEGINS HERE
     */


    // This holds the number of selected credits for each year
    var creditTotals = [];

    // Look for all the years on the page and intialise the credit array
    $("div.year").each(function () {

        // Start with zero credits for the year
        var coreCredits = 0;

        // For each module in the core
        $(this).children("div.core").children().each(function () {
            //console.log($(this).find("div.group > aside > span.credit").text());

            // Find the number of credits it's worth
            var moduleCredit =  $(this).find("div.group > aside > span.credit").text();

            // Add that to the total for the year
            coreCredits += parseInt(moduleCredit);
        });

        // Set the credits for that year
        creditTotals[$(this).attr("id")] = coreCredits;
    });

    // Update the credit counters with the initial core credits
    updateTotals(creditTotals);


    // This sets up each optional module with the ability to toggle it
    $("div.optional > div.module").click(

        // For optional modules, add the ability to (de)select them.
        function() {
            var code = $(this).attr("id");
            toggleModule(code);
            updateTotals(creditTotals);
        });

    // This sets up the clear button with its ability to deselect everything
    $("div.wrapper > h2.clear").click(function() {
        $("div.optional > div.module").each(function() {
            if ($(this).hasClass("selected")) {
                toggleModule($(this).attr("id"));
            }
        });

        updateTotals(creditTotals);
    });
});
