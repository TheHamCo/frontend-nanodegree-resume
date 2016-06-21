/*DATA*/
var bio = {
      name          : 'Michael Dijamco'
    , role          : 'Front-End Web Developer'
    , contacts      : {
          mobile    : 'xxx-xxx-xxxx'
        , email     : 'mdd233@cornell.edu'
        , github    : 'TheHamCo'
        , twitter   : 'none'
        , location  : 'Jackson, NJ'
    }
    , welcomeMessage: 'I am a recent graduate looking for a developer job in NYC.  See my work:'
    , skills        : ['HTML', 'CSS', 'Javascript', 'jQuery','Responsive Web Design', 'PHP', 'MySQL', 'Java', 'Python']
    , biopic        : 'https://unsplash.it/220/220/?random'
};

var education = {
      schools       : [
          {
                name        : 'Cornell University'
              , location    : 'Ithaca, NY'
              , degree      : 'Bachelor of Science in Engineering'
              , majors      : ['Mechanical Engineering']
              , dates       : '2011-2016'
              , url         : 'http://www.cornell.edu/'
          }
    ]
    , onlineCourses : [
        {
                title       : 'Intro to HTML and CSS (ud304)'
              , school      : 'Udacity'
              , date        : '2016'
              , url         : 'https://www.udacity.com/course/intro-to-html-and-css--ud304'
        },{
                title       : 'Responsive Web Design Fundamentals (ud893)'
              , school      : 'Udacity'
              , date        : '2016'
              , url         : 'https://www.udacity.com/course/responsive-web-design-fundamentals--ud893'
        },{
                title       : 'Responsive Images (ud882)'
              , school      : 'Udacity'
              , date        : '2016'
              , url         : 'https://www.udacity.com/course/responsive-images--ud882'
        },{
                title       : 'How to Use Git and GitHub (ud775)'
              , school      : 'Udacity'
              , date        : '2016'
              , url         : 'https://www.udacity.com/course/how-to-use-git-and-github--ud775'
        },{
                title       : 'Javascript Basics (ud804)'
              , school      : 'Udacity'
              , date        : '2016'
              , url         : 'https://www.udacity.com/course/javascript-basics--ud804'
        },{
                title       : 'Intro to jQuery (ud245)'
              , school      : 'Udacity'
              , date        : '2016'
              , url         : 'https://www.udacity.com/course/intro-to-jquery--ud245'
        },{
                title       : 'Javascript: Understanding the Weird Parts'
              , school      : 'Udemy'
              , date        : '2015'
              , url         : 'https://www.udemy.com/understand-javascript/'
        },{
                title       : 'Learn and Understand NodeJS'
              , school      : 'Udemy'
              , date        : '2015'
              , url         : 'https://www.udemy.com/understand-nodejs/'
        },{
                title       : 'Learn and Understand AngularJS'
              , school      : 'Udemy'
              , date        : '2015'
              , url         : 'https://www.udemy.com/learn-angularjs/'
        },{
                title       : 'Learn and Understand AngularJS'
              , school      : 'Udemy'
              , date        : '2015'
              , url         : 'https://www.udemy.com/learn-angularjs/'
        },{
                title       : 'CS 1110: Introduction to Computing Using Python (Spring 2015)'
              , school      : 'Cornell University'
              , date        : '2015'
              , url         : 'http://www.cs.cornell.edu/courses/cs1110/2015sp/index.php'
        }
    ]
};

var work = {
      jobs          : [
          {
                employer    : 'NASA Goddard Space Flight Center'
              , title       : 'Mission Design Lab (MDL) Intern'
              , location    : 'Greenbelt, MD'
              , dates       : '2010'
              , description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
          },{
                employer    : 'NASA Goddard Space Flight Center'
              , title       : 'Intern'
              , location    : 'Greenbelt, MD'
              , dates       : '2011'
              , description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
          }
      ]
};

var projects = {
      projects      : [
          {
                title       : 'Cornell CS2300: Promote Something'
              , dates       : '2016'
              , description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium esse fuga mollitia'
              , images      : ['https://unsplash.it/200/200/?random','https://unsplash.it/200/200/?random']
          },{
                title       : 'Cornell CS2300: Online Catalog'
              , dates       : '2016'
              , description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium esse fuga mollitia'
              , images      : ['https://unsplash.it/200/200/?random','https://unsplash.it/200/200/?random']
          },{
                title       : 'Cornell CS2300: Image Album'
              , dates       : '2016'
              , description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium esse fuga mollitia'
              , images      : ['https://unsplash.it/200/200/?random','https://unsplash.it/200/200/?random']
          },{
                title       : 'Cornell CS2300: Ithaca Health Alliance Website'
              , dates       : '2016'
              , description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium esse fuga mollitia'
              , images      : ['https://unsplash.it/200/200/?random','https://unsplash.it/200/200/?random']
          },{
                title       : 'Udacity FEND: Portfolio Site'
              , dates       : '2016'
              , description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium esse fuga mollitia'
              , images      : ['https://unsplash.it/200/200/?random','https://unsplash.it/200/200/?random']
          },{
                title       : 'Udacity FEND: Online Resume'
              , dates       : '2016'
              , description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium esse fuga mollitia'
              , images      : ['https://unsplash.it/200/200/?random','https://unsplash.it/200/200/?random']
          }
      ]
};

var templater = function (template, data) {
    return template.replace('%data%',data);
};

bio.display = function () {
    var header = $('#header');
    //BASIC HEADER INFO
    header
        .append(templater(HTMLbioPic, this.biopic))
        .append(templater(HTMLheaderName, this.name))
        .append(templater(HTMLheaderRole, this.role))
        .append(templater(HTMLwelcomeMsg, this.welcomeMessage));
    //CONTACTS
    $('#topContacts, #footerContacts')
        .append(templater(HTMLmobile, this.contacts.mobile))
        .append(templater(HTMLemail, this.contacts.email))
        .append(templater(HTMLgithub, this.contacts.github))
        .append(templater(HTMLlocation, this.contacts.location));
    //SKILLS
    header
        .append(templater(HTMLskillsStart));
    this.skills.forEach(function (skill) {
        $('#skills')
            .append(templater(HTMLskills, skill));
    });
};

work.display = function () {
    this.jobs.forEach(function (job) {
        //CONTAINER DIV
        $('#workExperience')
            .append(HTMLworkStart);
        //DATA
        $('.work-entry:last')
            .append(templater(HTMLworkEmployer, job.employer) +
                templater(HTMLworkTitle, job.title))
            .append(templater(HTMLworkDates, job.dates))
            .append(templater(HTMLworkLocation, job.location))
            .append(templater(HTMLworkDescription, job.description));
    });
};

projects.display = function () {
    //PROJECTS
    this.projects.forEach(function (project) {
        //CONTAINER DIV
        $('#projects')
            .append(HTMLprojectStart);
        //DATA
        var projectEntry = $('.project-entry:last');
        projectEntry
            .append(templater(HTMLprojectTitle, project.title))
            .append(templater(HTMLprojectDates, project.dates))
            .append(templater(HTMLprojectDescription, project.description));
        //PROJECT IMAGES
        project.images.forEach(function (image) {
            projectEntry
                .append(templater(HTMLprojectImage, image));
        });
    });
};
education.display = function () {
    //UNIVERSITIES
    this.schools.forEach(function (school) {
        //CONTAINER DIV
        $('#education')
            .append(HTMLschoolStart);
        //DATA
        var educationEntry = $('.education-entry:last');
        educationEntry
            .append(templater(HTMLschoolName, school.name) +
                templater(HTMLschoolDegree, school.degree))
            .append(templater(HTMLschoolDates, school.dates))
            .append(templater(HTMLschoolLocation, school.location));
        //UNIVERSITY MAJORS
        school.majors.forEach(function (major) {
            educationEntry
                .append(templater(HTMLschoolMajor, major));
        });
    });
    //ONLINE CLASSES
    $('#education')
        .append(HTMLonlineClasses);
    this.onlineCourses.forEach(function (course) {
        $('#education')
            .append(HTMLschoolStart);
        //DATA
        $('.education-entry:last')
            .append(templater(HTMLonlineTitle, course.title) +
                templater(HTMLonlineSchool, course.school))
            .append(templater(HTMLonlineDates,course.date))
            .append(templater(HTMLonlineURL, course.url));
    });
};
education.display();
projects.display();
work.display();
bio.display();