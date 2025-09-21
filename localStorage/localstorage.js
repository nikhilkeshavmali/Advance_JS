// the localStorage object allows you to save key/value pairs in the browser.

// how to add the data from localStorage
localStorage.setItem("student", "Nikhil");

// how to get the data from localStorage
localStorage.getItem("student");

// how to remove the data from localStorage
localStorage.removeItem("student");

// todo Local Storage can only store strings, so when you want to store a complex data structure like an array or an object, you need to convert it to a string using JSON.stingify:
