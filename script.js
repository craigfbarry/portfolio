$(document).ready(function () {


    $("#portfolio").on("click", function(){
        //Clear out contents and declaration of variables before applying the projects in a loop.
        $("#content").empty();

        const projectDetails = [
            {imageSource:"assets/wuber.png",imageAlt:"Wuber",description:"Wuber database Project",
            githubURL:"https://github.com/craigfbarry/WUber",
            projectURL:"https://wuber-wines.herokuapp.com/"},
            {imageSource:"assets/nasa-slack.png",imageAlt:"NASA-slack",description:"NASA/Slack API Project",
            githubURL:"https://github.com/craigfbarry/patient0",
            projectURL:"https://lnxsa.com"},            
            {imageSource:"assets/day-planner.png",imageAlt:"Day-planner",description:"Day Planner",
            githubURL:"https://github.com/craigfbarry/day-planner",
            projectURL:"https://craigfbarry.github.io/day-planner/"},
            {imageSource:"assets/weather-dashboard.png",imageAlt:"Weather-Dashboard",description:"Weather API Dashboard",
            githubURL:"https://github.com/craigfbarry/weather-dashboard",
            projectURL:"https://craigfbarry.github.io/weather-dashboard"},
            {imageSource:"assets/note-taker.png",imageAlt:"Note-Taker",description:"Note Taker",
            githubURL:"https://github.com/craigfbarry/note-taker",
            projectURL:"https://immense-springs-98803.herokuapp.com/"},
            {imageSource:"assets/password-generator.png",imageAlt:"Password-Generator",description:"Password Generator",
            githubURL:"https://github.com/craigfbarry/password-generator",
            projectURL:"https://craigfbarry.github.io/password-generator/"}
        ];
        
        const headerTag = $("<header>");
        const portfolioHeader = $("<h2>");
        const portfolioContent= $("<div>");
        
        headerTag.addClass("row py-sm-5 mt-5 mb-lg-5 text-center text-align-middle");
        portfolioHeader.addClass("col my-4").text("Portfolio");
        $("#content").append((headerTag).append(portfolioHeader));
        portfolioContent.addClass("row text-center mb-5");
        $("#content").append(portfolioContent);

        //For loop to append each array item.
        for (let i=0;i<projectDetails.length;i++){
            const project = $("<div>");
            project.addClass("col-md-6 col-lg-4 px-0 px-md-4");
            project.html("<a href=" + projectDetails[i].projectURL + " target='_blank'><img src=" + projectDetails[i].imageSource + " alt=" + projectDetails[i].imageAlt +  " width=100%>"
            + "<p class='pt-4'>" + projectDetails[i].description + "</p></a><a href=" + projectDetails[i].githubURL + " target='_blank'><p class='pb-4'>Github Link</p></a>");
            portfolioContent.append(project);
        }
    });

        //Embed the PDF on resume button click

    $("#resume").on("click", function(){
        $("#content").empty();
        const resumeContent= $("<div>");
        resumeContent.addClass("justify-content-center my-5 py-5 px-0");
        $("#content").append(resumeContent);

        resumeContent.html("<embed src='assets/resume.pdf' type='application/pdf' height='1000px' width='100%'>");
    });

        //About button needs to return to anchor point on page reload from resume and portfolio page
        
    $("#about-button").on("click", function(){
        window.location.hash = '#about';
        window.location.reload(true);

    });

















});