# 9-note-taker

[![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  

## Description
The ninth challenge assignment from a bootcamp where the task was to complete the back end of a Note Taker application, connect the two, then deploy the entire application to Render.


## Table of Content
-[Description](#Description)
-[Process](#Process)
-[Links](#Links)
-[Installation](#Installation)
-[Usage](#Usage)
-[Licenses](#Licenses)
-[Contribution](#Contribution)
-[Test](#Test)
-[Acknowledgement](#Acknowledgement)
-[Questions](#Questions)


## Process
The process included creating a routes folder with index.js and notes.js files and a server.js file on its own. The index.js file required importing express router and the notes.js file. A router.use method was used to specify the notes.js file as the router for the path /notes. The notes.js file required importing the express router, the fs package for reading and writing files, and the uuid package for specific ids for each notes. In the notes.js file, route paths for get, post, and delete were made. The get route included reading the db file, try/catch block for returning parsed data as json and catching any errors. The post route included varibales for title and text, reading db file. try/catch block for pushing new notes to notes array and writing updated notes to db file. Also catching any errors. The delete route is similar to the others with the try/catch block, but includes an id variable and filtering out each note that matches deleted note id and then writing to the db file wth the updated notes array. In the server.js file imported express, path, all the routes, labeled a port, and included middleware for converting data. Two get paths were made for the original index.html file and an additional file for the notes.html.


## Links
Link to deployed site: https://nine-note-taker.onrender.com

## Installation
To install this application, copy the ssh key from my github repo and clone it into your respository.


## Usage
This site was a practice assignment for bootcamp students but can be used to see how an application made by Express.js works. 


## Licenses
This repository is using the [MIT](https://opensource.org/licenses/MIT) license.


## Contribution
Contact me by email provided in Questions section.


## Test
To test this application, simply open the applcation in a browser and try it out.


## Acknowledgement
Project was done by the knowledge learned from bootcamp instructor John and the Xpert Learning tool.


## Questions
Contact with questions at:

Email: mackenzielmoore14@gmail.com
Click [here](https://github.com/mackemo) for Github account.