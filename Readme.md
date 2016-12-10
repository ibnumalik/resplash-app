# 500px API Playground
The motivation to create this project is to practice with front end development tools using AngularJS, Angular Material, Task Automation and API handling. The chosen API is 500px because it provides easy to use API and free to use besides I love beautiful photograph.

## How to use this project

### Prerequisites
1. Must have Nodejs and NPM installed because this project is using Gulp, Bower and NPM to manage package and task automation.
2. Some knowledge of HTML, CSS, JS and AngularJS.

### Installation
#### First 
There are 3 options if you are interested to play with this project:
- Git clone 
- Git fork and clone it or
- Download directly the zip file.

#### Second
- First thing first, search for file name `env.example.js` and change it to `env.js`. Open the file and replace `Your API Key` with your 500px API key which can be obtain here - [500px Application Registration](https://500px.com/settings/applications)
- Run `npm install && bower install`
- Then run the gulp file using this command `gulp && gulp watch`
- Now you are ready to tinker around!

## Features
When starting to build this project, I try to develop it as simple as possible. First, I want to build a simple search userbase within the 500px community because I try to follow the Pluralsight courses by Scott Allen. Then I try to expand the capability by hacking around the code and find the possibility with AngularJS magic. 
- [x] Display featured photos.
- [x] Search 500px userbase.
- [ ] Show the searched user's photo and information.
- [ ] Click photos and display popup of the photo information and the photographer.
- [ ] Filter photo by categories.
- [ ] Change photos display size.