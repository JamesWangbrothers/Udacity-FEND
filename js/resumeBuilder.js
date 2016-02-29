// making variables for bio
var skills = ["HTML5", "CSS3", "JavaScript", "Python", "Canvas", "Git"];

var contacts = {
	"mobile": "510-944-9912",
	"email": "jameswangishere@gmail.com",
	"linkedin": "https://www.linkedin.com/in/jameswangishere",
	"github": "https://github.com/JamesWangbrothers",
	"portfolio": "https://www.facebook.com/jameswong300",
	"location": "#mapDiv"	
};

var bio = {
	"name": "James Wang",
	"role": "Full Stack Web Developer",
	"contacts": contacts,
	"skills": skills,
	"picture": "images/myPicture.jpg"
};

var summary = "Web development specialist with experience in start-Ups as well as established operation leveraging expertise in responsive design, rendering, and problem solving to provide exceptional user support and user experience. Experience include managing and designing high profile websites.";
//list bio
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedPicture = HTMLheaderPic.replace("%data%", bio.picture);
	var formattedSummary = HTMLsummary.replace("%data%", summary);
	
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github); 
	var formattedPortfolio = HTMLportfolio.replace("%data%", bio.contacts.portfolio);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	$("#header").append(formattedPicture);
	$("#header").append(formattedName);
	$("#header").append(formattedRole);

	$(".flex-box").append(formattedMobile);
	$(".flex-box").append(formattedEmail);
	$(".flex-box").append(formattedLinkedin);
	$(".flex-box").append(formattedGithub);
	$(".flex-box").append(formattedPortfolio);
	$(".flex-box").append(formattedLocation);

	$("#header").append(formattedSummary);

	//There are two areas to add the contacts information
	// var idString = ["#topContacts","#footerContacts"];
	// for (var i = 0, id; i < idString.length; i ++) {
	// 	id = idString[i];
	// 	$(id).append(formattedMobile);
	// 	$(id).append(formattedEmail);
	// 	$(id).append(formattedLinkedin);
	// 	$(id).append(formattedGithub);
	// 	$(id).append(formattedPortfolio);
	// 	$(id).append(formattedLocation);
		
	// }

	// $("#skill").append(HTMLskillsStart);
	// for (i = 0; i < bio.skills.length; i ++) {
	// 	var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
	// 	$("#skill").append(formattedSkill);
	// }
}


// $("#summary").append(HTMLsummaryStart);

var projects = {
	"projects": [
	{
		"title": "Profolio Website",
		"dates": "March 2016",
		"bullet1": "mobile first responsive design",
		"bullet2": "bootstrap framework for UI design",
		"bullet3": "Javascript/Jquery for DOM modification",
		"demo": "http://www.bigbigz.com",
		"gitHub": "https://github.com/JamesWangbrothers/Udacity-FrontEndNanoDegree.git"
	},{
		"title": "Online Resume",
		"dates": "Feb 2016",
		"bullet1": "building features with APIs",
		"bullet2": "user experience optimization",
		"bullet3": "JSON packaging",
		"demo": "http://www.wildChild.com",
		"gitHub": "https://github.com/JamesWangbrothers/Udacity-FrontEndNanoDegree.git"

	},{
		"title": "Arcade Game",
		"dates": "Feb 2016",
		"bullet1": "building features with APIs",
		"bullet2": "user experience optimization",
		"bullet3": "Website Performance Optimization",
		"demo": "http://www.wildChild.com",
		"gitHub": "https://github.com/JamesWangbrothers/Udacity-FrontEndNanoDegree.git"

	},{
		"title": "Start-Up Website Host",
		"dates": "Feb 2016",
		"bullet1": "building features with APIs",
		"bullet2": "user experience optimization",
		"bullet3": "Website Performance Optimization",
		"demo": "http://www.carpstreet.com",
		"gitHub": "https://github.com/JamesWangbrothers/Udacity-FrontEndNanoDegree.git"

	}]
};

//display projects using encapsulation
projects.displayProjects = function() {
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDemo = HTMLprojectDemo.replace("%data%", projects.projects[project].demo);
		var formattedGitHub = HTMLprojectGitHub.replace("%data%", projects.projects[project].gitHub);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedBullet1 = HTMLprojectDescription.replace("%data1%", projects.projects[project].bullet1);
		var formattedBullet2 = formattedBullet1.replace("%data2%", projects.projects[project].bullet2);
		var formatttedDescription = formattedBullet2.replace("%data3%", projects.projects[project].bullet3);
		
		
		$(".project-entry:last").prepend(formattedDemo);
		$(".project-entry:last").prepend(formattedGitHub);
		$(".project-entry:last").prepend(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formatttedDescription);
		

		// if(projects.projects[project].demo.length > 0){
		// 	for (url in projects.projects[project].demo) {
		// 		var formattedUrl = HTMLprojectUrl.replace("%data%", projects.projects[project].demo[url]);
		// 		$(".project-entry:last").append(formattedUrl);
		// 	}
		// }

	}
}

var work = {
	"jobs": [
		{
			"employer": "Super Micro Computers, Inc.",
			"title": "Product Support Engineer",
	 		"location": "San Jose, CA, US",
	 		"dates": "December 2013 - January 2016",
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
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formatttedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		
		$(".work-entry:last").append(formattedEmployer);
		$(".work-entry:last").prepend(formattedLocation);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedTitle);
		$(".work-entry:last").append(formatttedDescription);
		
		

	}
};


var education = {
	"schools": [{
		"name": "Udacity",
		"degree": "Front-End Web Development",
		"location": "Online Credential",
		"dates": "March 2016"
	}, {
		"name": "University of Arkansas",
		"degree": "M.S. in Electrical Engineering",
		"location": "Fayetteville, AR",
		"dates": "September 2013"
	}, {
		"name": "University of Arkansas",
		"degree": "B.S. in Electrical Engineering",
		"location": "Fayetteville, AR",
		"dates": "August 2011"
	}],
	"Courses": [{
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
		
		$(".education-entry:last").prepend(formattedschoolName);
		$(".education-entry:last").prepend(formattedschoolLocation);
		$(".education-entry:last").append(formattedschoolDates);
		$(".education-entry:last").append(formattedschoolDegree);
		
	}
	

	// for (school in education.onlineCourses) {
	// 	// create new div for work experience
	// 	//concat employee and title
	// 	var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title);
	// 	var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[school].school);
	// 	var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[school].dates);
	// 	var formattedonlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[school].url);
		
	// 	$("#education").append(HTMLonlineClasses);
	// 	$(".education-entry:last").append(formattedonlineTitle);
	// 	$(".education-entry:last").append(formattedonlineSchool);
	// 	$(".education-entry:last").append(formattedonlineDates);
	// 	$(".education-entry:last").append(formattedonlineUrl);

	// }
	
};


// click button for internationlize names
// function inName(name){

// 	name = name.trim().split(" ");
// 	name[1] = name[1].toUpperCase();
// 	name[0] = name[0].slice(0,1).toUpperCase + name[0].slice(1).toLowerCase;

// 	return name[0] + " " + name[1]

// }
// $("#main").append(internationalizeButton);
// inName(name);

bio.display();
displayWork();
projects.displayProjects();
education.displayEducation();
//see a map 
$("#mapDiv").append(googleMap);




