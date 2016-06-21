//var formattedName = HTMLheaderName.replace('%data%', 'Michael Dijamco');
//var formattedRole = HTMLheaderRole.replace('%data%', 'Front-End Web Developer');
//$('#header')
//    .prepend(formattedRole)
//    .prepend(formattedName);

/*----*/
/*DATA*/
/*----*/
var work = {
    jobs: [{
        employer   : 'Self'
        , title      : 'NASA Mission Design Lab Intern'
        , location   : 'Greenbelt, MD'
        , dates      : '2010'
        , description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolorum, error ex fuga iusto mollitia perferendis placeat porro repellat voluptate.'
    },{
      employer   : 'Self'
    , title      : 'Student'
    , location   : 'Jackson, NJ'
    , dates      : '2016 - present'
    , description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolorum, error ex fuga iusto mollitia perferendis placeat porro repellat voluptate.'
    }]
};
var projects = {
    projects : [{
          title         : 'Image Host'
        , dates         : '2016'
        , description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolorum, error ex fuga iusto mollitia perferendis placeat porro repellat voluptate.'
    },{
          title         : 'Text Tracker'
        , dates         : '2016'
        , description: 'Lorem ipsum dolor sit dolorum, error ex fuga iusto mollitia perferendis placeat porro repellat voluptate.'
    }]
};
var bio = {
      name          : 'Michael Dijamco'
    , role          : 'Front-End Web Developer'
    , welcomeMessage: 'Hello!'
    , contacts   : {
          mobile  : '908-812-6235'
        , email   : 'mdd233@cornell.edu'
        , github  : 'theHamCo'
        , twitter : null
        , location: 'Jackson, NJ'
    }
    , skills        : ['HTML', 'CSS', 'Javascript', 'PHP', 'MySQL']
};
var education = {
      "schools"     : [
        {
              "name"        : "Cornell University"
            , "location"    : "Ithaca, NY"
            , "degree"      : "Bachelor of Science in Engineering"
            , "majors"      : ["Mechanical Engineering"]
            , "dates"       : "2011-2016"
            , "url"         : "http://cornell.edu/"

        }]
    , onlineCourses : [{
          title             : ''
        , school            : 'Udacity'
        , dates             : ''
        , url               : ''
    }]
 };

/*RESUME CONTENT -- HEADER*/
$('#header')
    .append(HTMLheaderName.replace('%data%', bio.name))
    .append(HTMLheaderRole.replace('%data%', bio.role));
if (bio.skills){
    $('#header').append(HTMLskillsStart);
    bio.skills.forEach(function (skill) {
        $('#skills').append(HTMLskills.replace('%data%', skill));
    });
}

/*RESUME CONTENT -- WORK*/
function displayWork(){
    for (job in work.jobs){
        if (work.jobs.hasOwnProperty(job)){
            $('#workExperience').append(HTMLworkStart);
            var currentJob = work.jobs[job];
            $('.work-entry:last').append(
                HTMLworkEmployer        .replace('%data%', currentJob.employer)
                + HTMLworkTitle         .replace('%data%', currentJob.title)
                + HTMLworkDates         .replace('%data%', currentJob.dates)
                + HTMLworkLocation      .replace('%data%', currentJob.location)
                + HTMLworkDescription   .replace('%data%', currentJob.description)
            );
        }
    }
}
displayWork();

/*TRACK CLICKS*/
$(document).click(function(loc){
    logClicks(loc.pageX, loc.pageY);
});

/*ARRAY OF WORK LOCATIONS*/
var locationizer = function (work_obj) {
    var locations = [];
    work_obj.jobs.forEach(function (job) {
        locations.push(job.location);
    });
    return locations;
};

/*INTERNATIONALIZE NAME*/
$('#main').append(internationalizeButton);
var inName = function (name) {
    name = name.split(' ');
    nameArr = [];
    nameArr.push(name[0].charAt(0).toUpperCase() + name[0].slice(1).toLowerCase());
    nameArr.push(name[1].toUpperCase());
    return nameArr.join(' ');
};

/*RESUME CONTENT -- PROJECTS*/
/*display() is attached  to the projects object directly*/
projects.display = function () {
    this.projects.forEach(function (project) {
        $('#projects').append(HTMLprojectStart);
        $('.project-entry:last').append(
            HTMLprojectTitle
                .replace('%data%', project.title)
            + HTMLprojectDates
                .replace('%data%', project.dates)
            + HTMLprojectDescription
                .replace('%data%', project.description)
        );
    })
};
projects.display();

/*MAP*/
$('#mapDiv').append(googleMap);