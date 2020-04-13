$(document).ready(function () {


    $("#portfolio").on("click", function(){
        //Clear out content div and apply header.
        var projectDetails = [

            {imageSource:"assets/weather-dashboard.png",imageAlt:"Weather-Dashboard",description:"Weather API Dashboard",
            projectURL:"https://craigfbarry.github.io/weather-dashboard"},
            {imageSource:"assets/password-generator.png",imageAlt:"Password-Generator",description:"Password Generator",
            projectURL:"https://craigfbarry.github.io/password-generator/"},
            {imageSource:"assets/horiseon.png",imageAlt:"horiseon",description:"Code Refactoring",
            projectURL:"https://craigfbarry.github.io/craigs_homework"},


           
        ];
        //Clear out contents and declaration of variables.
        $("#content").empty();
        var headerTag = $("<header>");
        var portfolioHeader = $("<h3>");
        var portfolioContent= $("<div>");
        //var project = $("<div>");


        headerTag.addClass("row text-center text-align-middle");
        portfolioHeader.addClass("col my-4").text("Portfolio");
        $("#content").append((headerTag).append(portfolioHeader));
        portfolioContent.addClass("row text-center");
        $("#content").append(portfolioContent);

        for (var i=0;i<projectDetails.length;i++){
            var project = $("<div>");
            project.addClass("col-md-6 col-lg-4 px-0 px-md-4 bt-lg-5");
            project.html("<img src=" + projectDetails[i].imageSource + " alt=" + projectDetails[i].imageAlt +  " width=100%>" +
            "<a href=" + projectDetails[i].projectURL + " target='_blank'><p class='pt-4 pb-5 pb-md-5'>" + projectDetails[i].description + "</p></a>");
            
            portfolioContent.append(project);


        }






    });

    $("#about").on("click", function(){
        $("#content").empty();
        console.log("about me clicked");
    });


    $("#resume").on("click", function(){
        $("#content").empty();
        console.log("resume clicked");
    });


    $("#contact").on("click", function(){
        $("#content").empty();
        console.log("contact clicked");
    });














});