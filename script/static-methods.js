// Copy and paste the Task class and Tags class from your previous challenge

class Tasks {
    constructor(title, description, date_created, date_due, tagname){
        this._title = title,
        this._description = description,
        this._date_created = date_created,
        this._date_due = date_due,
        this._tagname = tagname
    };
};

class Tags extends Tasks {
    constructor(title, description, date_created, date_due, tagname){
        super(title, description, date_created, date_due, tagname)
        this._tagname = tagname;
    };

    get tagName(){
        return this._tagname;
    };

    set tagName(x){
        this._tagname = x;
    };

    defaultTagName(){
        this._tagname = "general";
    };
};

class Status extends Tags {
    constructor(title, description, date_created, date_due, tagname){
        super(title, description, date_created, date_due, tagname);
    };

    static status(completed){
        let _completed = completed;
        return _completed;
    };
};


// Below these two Classes, create a third class called 'Status' and have it extend the 'Tags' class
// Within your 'Status' class, create a constructor function and edit it to the following:
// Have it call the extended class's constructor, along with all it's parameters
// Within the Status class, create a static method called status
// Within this static method:
// Add a parameter called 'completed'
// Create private variable which is set to the same name as the parameter name above
// Have your private variable equal to the parameter name above
// Have the method return the private variable declared above


// Using the code below, declare a variable of 'todo' and have it equal to an instantiation of the 'Status' Object
// Your 'todo' variable should now be equal to an object, which allows you to use concatenation on it.
// To avoid confusion, going forward we are going to refer to the 'todo' variable as an object
const todo = new Status('Head to Gym', 'Someting that I should turn into an habit', "2018-04-24", "2020-12-06", ['exercise', 'fitness', ' routines'], '');

// Using the 'todo' object declared above:
// Console.log the private variable 'description' from your todo object. It should display the value 'Someting that I should turn into an habit'.
// Console.log the static method 'status'. Does this work, if not write a comment below of why you think it doesn't work
// To be safe, erase the previous code instructed above
// Console.log the static method within the 'Status' class and set it to true
// Feel free to try and console.log all your other property values declared within the 'todo' object

console.log(todo._description);
console.log(Status.status(true));