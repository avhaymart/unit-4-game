$(document).ready(function () {
    $(function () {
        // Adds shibi tooltips
        $('[data-toggle="tooltip"]').tooltip()
    })

    // Splash screen functionality
    $("#startGame").on("click", function () {
        console.log("Button clicked");
        $("#splashScreen").fadeOut((300), function () {
            $(this).hide();
            $("body").css("background-color", "#fff");
            $("#gameContainer").fadeIn(300);
        });
    });


    // Points left #pointsLeft
    // Wins #wins
    // Lossses #losses
    // Your points #yourPoints
    // Instructions #instructions
    // Restart #restart
    // Picture divs #shib-(1 thru 4)

    // Random number between 19 and 120
    var pointsLeft = Math.floor(Math.random() * (120 - 19) + 19);
    var yourPoints = 0;
    var wins = 0;
    var losses = 0;

    $("#pointsLeft").text(pointsLeft);
    
    function generateShibiValues() {
        for (i = 1; i < 5; i++) {
            var shib = $("#shib-" + i);
            shib.data("points", (Math.floor(Math.random() * (20 - 1) + 1)));
        }
    }
    
    // Core of the game
    function addYourPoints(x) {
        yourPoints += x;
        pointsLeft -= x;
        $("#yourPoints").text(yourPoints);
        $("#pointsLeft").text(pointsLeft);
        if (pointsLeft == 0) {
            wins++;
            $("#wins").text("Wins: " + wins);
            reset();
        } else if (pointsLeft < 0) {
            losses++;
            $("#losses").text("Losses: " + losses);
            reset();
        }
    }
    
    // When player wins or loses
    function reset() {
        pointsLeft = Math.floor(Math.random() * (120 - 19) + 19);
        yourPoints = 0;
        $("#pointsLeft").text(pointsLeft);
        $("#yourPoints").text(yourPoints);
        generateShibiValues();
    }
    
    // For the restart button
    function fullReset() {
        reset();
        wins = 0;
        losses = 0;
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);
        
    }
    
    generateShibiValues();
    
    $("#shib-1")
        .add("#shib-2")
        .add("#shib-3")
        .add("#shib-4")
        .on("click", function () {
            addYourPoints($(this).data("points"));
        });

    $("#restart").on("click", function () {
        fullReset();
    });

    $("#instructions").on("click", function () {
        $("#gameContainer").fadeOut((300), function () {
            $("body").css("background-color", "#E9ECEF")
            $("#splashScreen").fadeIn(300);
        });
    });


});

