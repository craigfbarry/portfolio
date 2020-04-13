$(document).ready(function () {


    $("#portfolio").on("click", function(){
        //Clear out content div and apply header.
        var projectDetails = [
            {imageSource:"assets/horiseon.png",imageAlt:"code",description:"Craig's Homework",
            projectURL:"https://craigfbarry.github.io/craigs_homework"},
           
        ];
        
        $("#content").empty();
        var headerTag = $("<header>");
        var portfolioHeader = $("<h3>");
        var portfolioContent= $("<div>");
        var project = $("<div>");
        headerTag.addClass("row text-center text-align-middle");
        portfolioHeader.addClass("col my-4").text("Portfolio");
        $("#content").append((headerTag).append(portfolioHeader));
        portfolioContent.addClass("row text-center");
        $("#content").append(portfolioContent);

        project.addClass("col-md-6 col-lg-4 px-0 px-md-4 bt-lg-5");
        project.html("<img src=" + projectDetails[0].imageSource + " alt=" + projectDetails[0].imageAlt +  " width=100%>" +
        "<a href=" + projectDetails[0].projectURL + "target='_blank'><p class='pt-4 pb-5 pb-md-5'>" + projectDetails[0].description + "</p></a>");
        
        portfolioContent.append(project);





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