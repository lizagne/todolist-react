    The components I will need:

    App Component
    Avatar Component
    Date Component
    Task List Component
    Task Component
    Add Button Component

    Start from the bottom up

    Open App.css - delete everything

    Edit App.js to take out standard React rendering

    Open index.css delete everything

    Open index.html change title to To do List app

    Add Bootstrap to the app for styling
    npm install react-bootstrap --save && npm install bootstrap@3 --save

    Installing fontawesome for some styling
    npm install react-fontawesome --save && npm install font-awesome --save

    Import the css files into the index.js file

    Make components and containers folders inside src

    Make the first component called Task, this is a stateless functional component, and is the grandchild of the app, and child of TaskList component

    Then the TaskList component can be made, also a stateless functional component.

    Next to make a static Date component.

    Add an avatar component, with my face!

    Add an AddButton component

    Put everything to render on the App.js

    now install moment.js with npm install moment --save

    Update the Datecomp component with importing Moment.js and also changing the format so that it'll show today's date.

    Add in the props to the Task component - the grandchild - or bottom component - ie props. Adding the information to be passed to props to the TaskList component

        Instead of having inline tasks written out, now try adding an array that we could loop through.

    Adding the onClick handler to the button and the info of a new task into a function on the TaskList component.




