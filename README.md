# A Fake Company Management App
This app manages companies by showing a list of current companies pulled from the database on housed on Firestore. The user 
can see each company by clicking on the eye icon. Once in the company profile, the user can go back, edit, or delete the document 
for that company. I added some features, like adding a new company, being able to go 
to the company website by clicking on their domain, the back and delete buttons, and some fancy rainbow coloring of the company 
name.  In the future, I could make this more robust by adding a login (also from Firebase), and sorting/searching 
functionality as well as unit testing. I'm experiencing some bugs: I would like to use the router to better advantage, 
because I am not able to refresh adequately (I think it has something to do with using history mode on the router, but I 
need to read more of the docs for vue-router), I only want the plus sign for adding a new company to show up if you're not 
on the add page (I'm using a v-if, but it's not working so I'll need to dig into the reason behind that some more), and 
some of the Bulma formatting really (seriously) confounds me so I should probably keep practicing with Bulma.

## Live Site


## For running locally:

#### Install Dependencies
```
npm install
```

#### Run app
```
npm run serve
```



