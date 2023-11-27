var express = require('express');
var router = express.Router();
var dbConnect = require('../database/connect');

// GET home page - Display all students
router.get('/', function (req, res, next) {
  dbConnect.query("SELECT * FROM students", function (err, data) {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).send('Error fetching students');
    }
    res.render('index', { data: data });
  });
});
// GET add student form
router.get('/add', function (req, res, next) {
  res.render('add'); // Render the form to add a new student
});

// POST to add a new student
router.post('/add', function (req, res, next) {   
  // Sanitize user inputs before inserting into the database to prevent SQL injection
  const { name, age, class: studentClass } = req.body;

  // Insert the new student data into the database
  dbConnect.query('INSERT INTO students (name,class,age) VALUES (?, ?, ?)', [name, studentClass,age], function (err, result) {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).send(`Error adding student: ${err.message}`);
    }
  
    // Redirect to the home page after successful insertion
    res.redirect('/');
  });
  
});

module.exports = router;
