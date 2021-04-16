# Project Overview

**PROJECT NAME:** Jerald's Portfolio

**PROJECT AUTHOR:** Jerald Young

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 2| Wireframes / Priority Matrix / Timeline | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Day 4| MVP & Bug Fixes | Incomplete
|Day 5| Final Touches | Incomplete
|Day 6| Present | Incomplete


## Project Description

I will be creating a portfolio website that incorporates a few of the designs
that I saw from the example websites.
## Google Sheet

https://docs.google.com/spreadsheets/d/1efSoAmD6-TKCf6zbGoOL6m4YriP3cu6KeL2ZVF5LnJg/edit#gid=0

## Portfolio I want to Emulate

Link To Site  | One Thing I'd Like To Incorporate | 
| ------------- | ------------- |
|https://www.davidmilan.com/|projects are clickable images and spans screen
|https://www.byxp.co.uk/| Home screen video design
|https://www.thaiphamphotography.com/|  navigation bar

---

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page.  

- [Mobile](https://i.imgur.com/miFmoM1.png)
- [Desktop](https://i.imgur.com/E7nmVm7.png)
- [Tablet](https://i.imgur.com/e3736Kb.png)
Wireframing Resources:

- [Mockflow](https://mockflow.com/app/#Wireframe)
- [Figma](https://www.figma.com/)


## Time/Priority Matrix 

[Link]https://docs.google.com/spreadsheets/d/1W8uLohYywvx8fH3rb20Vvz6RhCeogeet_o1oSCNi9VI/edit#gid=417043777

## Functional Components

#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Hamburger | H | 2hr | 1hr |
| Responsive | H | 3hr | hr |
| Regular Nav | H | 2hr | 1hr |  
| Using Boostrap | H | 4hr|  3hr | 
| Other sections and flex| M | 3hr | 4hr|
| Working with API | H | 3hrs|  4hr | 
| Using Shoelace | H | 4hr | hr | hr |
| Social Media Icons | L | 3hr |  hr |
| Total | H | 24hrs| hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Project Hover | L | 3hr | -hr | hr |
| Banner letters wiggle | L | 2hr | hr |
| Interactive Banner | M | 4hr | hr |
| Materialize | H | 4hr | -hr | hr |
| Adding icon Animations | H | 4hr | hr |
| Project description on hover | L | 4hr | hr |
|Sign up page| L | 4hr | 2hr |
|Discussion box under projects | L | 4hr | hr |
| Total | H | 29hrs| hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

This code allows the register form to show alerts, depending on what was entered and if it was entered correctly. 

$(document).ready(function() {
  $("#register").click(function() {
  var name = $("#name").val();
  var email = $("#email").val();
  var password = $("#password").val();
  var cpassword = $("#cpassword").val();
  if (name == '' || email == '' || password == '' || cpassword == '') {
  alert("Please fill all fields...!!!!!!");
  } else if ((password.length) < 8) {
  alert("Password should atleast 8 character in length...!!!!!!");
  } else if (!(password).match(cpassword)) {
  alert("Your passwords don't match. Try again?");
  } else {
  $.post("register.php", {
  name1: name,
  email1: email,
  password1: password
  }, function(data) {
  if (data == 'You have Successfully Registered.....') {
  $("form")[0].reset();
  }
  alert(data);
  });
  }
  });
  });

## Issues and Resolutions


**ERROR**: Created a carousel in bootstrap, but the arrows won't scroll to the next image.                              
**RESOLUTION**: Used the wrong version of Bootstrap, Entered correct code.

**ERROR**: Unable to make the figcaptions appear in a row, below the carousel.                    
**RESOLUTION**: Created a seperate div id for figcaptions and put them in their own flex wrap.

**ERROR**: Unable to append project to DOM, The content was not properly posting from imgur

**RESOLUTION**: switched to cloudinary and updated the google spreadsheet.
