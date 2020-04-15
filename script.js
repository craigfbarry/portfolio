$(document).ready(function () {


    $("#portfolio").on("click", function(){
        //Clear out contents and declaration of variables before applying the projects in a loop.
        $("#content").empty();

        var projectDetails = [

            {imageSource:"assets/nasa-slack.png",imageAlt:"NASA-slack",description:"NASA/Slack API Project",
            projectURL:"https://lnxsa.com"},
            {imageSource:"assets/weather-dashboard.png",imageAlt:"Weather-Dashboard",description:"Weather API Dashboard",
            projectURL:"https://craigfbarry.github.io/weather-dashboard"},
            {imageSource:"assets/password-generator.png",imageAlt:"Password-Generator",description:"Password Generator",
            projectURL:"https://craigfbarry.github.io/password-generator/"},
            {imageSource:"assets/workday-scheduler.png",imageAlt:"workday-scheduler",description:"workday-scheduler",
            projectURL:"https://craigfbarry.github.io/day-planner"},
            {imageSource:"assets/code-quiz.png",imageAlt:"code-quiz",description:"Code Quiz",
            projectURL:"https://craigfbarry.github.io/code-quiz/"},
            {imageSource:"assets/horiseon.png",imageAlt:"horiseon",description:"Code Refactoring",
            projectURL:"https://craigfbarry.github.io/craigs_homework"}, 
        ];
        
        var headerTag = $("<header>");
        var portfolioHeader = $("<h3>");
        var portfolioContent= $("<div>");
        
        headerTag.addClass("row text-center text-align-middle");
        portfolioHeader.addClass("col my-4").text("Portfolio");
        $("#content").append((headerTag).append(portfolioHeader));
        portfolioContent.addClass("row text-center mb-5");
        $("#content").append(portfolioContent);

        //For loop to append each array item.
        for (var i=0;i<projectDetails.length;i++){
            var project = $("<div>");
            project.addClass("col-md-6 col-lg-4 px-0 px-md-4");
            project.html("<a href=" + projectDetails[i].projectURL + " target='_blank'><img src=" + projectDetails[i].imageSource + " alt=" + projectDetails[i].imageAlt +  " width=100%>"
            + "<p class='pt-4 pb-5 pb-md-5'>" + projectDetails[i].description + "</p></a>");
            portfolioContent.append(project);
        }
    });

    $("#about").on("click", function(){
        $("#content").empty();
        console.log("about me clicked");
    });


    $("#resume").on("click", function(){
        $("#content").empty();
        $("#content").html("<embed src='assets/resume.pdf' type='application/pdf' height='1000px' width='80%'>");
    });


    $("#contact").on("click", function(){
        $("#content").empty();
        console.log("contact clicked");
    });














});