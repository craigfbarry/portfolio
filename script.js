$(document).ready(function () {


    $("#portfolio").on("click", function(){
        //Clear out contents and declaration of variables before applying the projects in a loop.
        $("#content").empty();

        const projectDetails = [

            {imageSource:"assets/nasa-slack.png",imageAlt:"NASA-slack",description:"NASA/Slack API Project",
            projectURL:"https://lnxsa.com"},
            {imageSource:"assets/weather-dashboard.png",imageAlt:"Weather-Dashboard",description:"Weather API Dashboard",
            projectURL:"https://craigfbarry.github.io/weather-dashboard"},
            {imageSource:"assets/password-generator.png",imageAlt:"Password-Generator",description:"Password Generator",
            projectURL:"https://craigfbarry.github.io/password-generator/"},
        ];
        
        const headerTag = $("<header>");
        const portfolioHeader = $("<h2>");
        const portfolioContent= $("<div>");
        
        headerTag.addClass("row py-sm-5 mb-lg-5 text-center text-align-middle");
        portfolioHeader.addClass("col my-4").text("Portfolio");
        $("#content").append((headerTag).append(portfolioHeader));
        portfolioContent.addClass("row text-center mb-5");
        $("#content").append(portfolioContent);

        //For loop to append each array item.
        for (let i=0;i<projectDetails.length;i++){
            const project = $("<div>");
            project.addClass("col-md-6 col-lg-4 px-0 px-md-4");
            project.html("<a href=" + projectDetails[i].projectURL + " target='_blank'><img src=" + projectDetails[i].imageSource + " alt=" + projectDetails[i].imageAlt +  " width=100%>"
            + "<p class='pt-4 pb-5 pb-md-5'>" + projectDetails[i].description + "</p></a>");
            portfolioContent.append(project);
        }
    });



    $("#resume").on("click", function(){
        $("#content").empty();
        const resumeContent= $("<div>");
        resumeContent.addClass("justify-content-center my-5 py-5 px-0");
        $("#content").append(resumeContent);

        resumeContent.html("<embed src='assets/resume.pdf' type='application/pdf' height='1000px' width='100%'>");
    });

    $("#about-button").on("click", function(){

    });
















});