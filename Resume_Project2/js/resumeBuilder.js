// making variables for bio
var name = "James Wang";
var role ="Web Developer";
var skills = ["HTML5", "CSS3", "JavaScript", "Python", "Canvas"];

var contacts = {
	"mobile": "510-944-9912",
	"email": "jameswangishere@gmail.com",
	"twitter": "@James_S_Wang",
	"github": "JamesWangbrothers",
	"blog": "www.facebook.com/jameswong300",
	"location": "San Jose， CA" 
};

var bio = {
	"name": name,
	"role": role,
	"contacts": contacts,
	"picture": "images/myPicture.jpg",
	"welcomeMessage": "welcome to my resume page!",
	"skills": skills
};
//list bio
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedbioPic = HTMLbioPic.replace("%data%", bio.picture);
	$("#header").prepend(formattedMessage);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").prepend(formattedbioPic);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github); 
	var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	//There are two areas to add the contacts information
	var idString = ["#topContacts","#footerContacts"];
	for (var i = 0, id; i < idString.length; i ++) {
		id = idString[i];
		$(id).append(formattedMobile);
		$(id).append(formattedEmail);
		$(id).append(formattedTwitter);
		$(id).append(formattedGithub);
		$(id).append(formattedBlog);
		$(id).append(formattedLocation);
	}

	$("#header").append(HTMLskillsStart);
	for (i = 0; i < bio.skills.length; i ++) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").prepend(formattedSkill);
	}
}

var work = {
	"jobs": [
		{
			"employer": "Super Micro Computers, inc.",
			"title": "Product Support Engineer",
	 		"location": "San Jose, CA, US",
	 		"dates": "2013-2015",
	 		"description": "customer problem solving and analyze on server computing systems" 
		}
	]
};

//display working experience
function displayWork() {
	for (job in work.jobs) {
		// create new div for work experience
		$("#workExperience").append(HTMLworkStart);
		//concat employee and title
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
	
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formatttedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formatttedDescription);

	}
};


var projects = {
	"projects": [
	{
		"title": "My profolio",
		"dates": 2016,
		"description": "building a personal user-interacting website for social networking and mobile UI/UX experoence",
		"url": "http://bigbigz.com"
	},{
		"title": "online resume",
		"dates": 2016,
		"description": "building a personal user-interacting website for social networking and mobile UI/UX experoence",
		"url": "http://bigbigz.com"

	}]
};

//display projects using encapsulation
projects.displayProjects = function() {
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].url.length > 0){
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedIamge);
			}
		}

	}
}

//call the display function to display the projects:

var education = {
	"schools": [{
		"name": "University of Arkansas",
		"location": "Fayetteville, AR, US",
		"degree": "M.S.",
		"major": "Electrical of Engineering",
		"dates": 2013
	}, {
		"name": "University of Arkansas",
		"location": "Fayetteville, AR, US",
		"degree": "B.A.",
		"major": "Electrical of Engineering",
		"dates": 2011
	}],
	"onlineCourses": [{
		"title": "Web Development Nanodegree",
		"school": "Udacity",
		"dates": 2016,
		"url": "http://www.udacity.com"
	}]
};

education.displayEducation = function() {


	for (school in education.schools) {
		// create new div for work experience
		$("#education").append(HTMLschoolStart);
		//concat employee and title
		var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

		$(".education-entry:last").append(formattedschoolName);
		$(".education-entry:last").append(formattedschoolDegree);
		$(".education-entry:last").append(formattedschoolDates);
		$(".education-entry:last").append(formattedschoolLocation);
		$(".education-entry:last").append(formattedschoolMajor);

	}
	

	for (school in education.onlineCourses) {
		// create new div for work experience
		//concat employee and title
		var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title);
		var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[school].school);
		var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[school].dates);
		var formattedonlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[school].url);
		
		$("#education").append(HTMLonlineClasses);
		$(".education-entry:last").append(formattedonlineTitle);
		$(".education-entry:last").append(formattedonlineSchool);
		$(".education-entry:last").append(formattedonlineDates);
		$(".education-entry:last").append(formattedonlineUrl);

	}
	
};


// click button for internationlize names
function inName(name){

	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase + name[0].slice(1).toLowerCase;

	return name[0] + " " + name[1]

}
$("#main").append(internationalizeButton);
inName(name);



bio.display();
displayWork();
projects.displayProjects();
education.displayEducation();
//see a map 
$("#mapDiv").append(googleMap);




