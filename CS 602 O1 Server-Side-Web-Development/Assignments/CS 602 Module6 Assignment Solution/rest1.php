<?php
require_once('database.php');

// Get all courses
$query = 'SELECT * FROM sk_courses ORDER BY courseID';
$statement = $db -> prepare($query);
$statement -> execute();
$courses = $statement -> fetchAll();
$statement -> closeCursor();


    // Check to see if the form was submitted
    if(isset($_GET)) {


        // Create variable to hold XML file
        $file ='course.xml';
        // Create variable to hold XML course node
        $node = 'course';

        $doc = new DOMDocument('1.0');
        $doc->preserveWhiteSpace = false;
        $doc->load($file);
        $doc->formatOutput = true;

        // Get root element - courses
        $root = $doc->documentElement;

        // Remove submit from our Get array, we don;t want to add it to the file
        unset($_GET);

        print_r($_GET);


        // Create a new course element and append it to the courses (XML)
        $course = $doc->createElement($node);
        $course = $root->appendChild($course);


        // $_GET["action"] = courses
        // Take the course_id and course_name from data and insert it inside of
        // the new course element
        foreach($_GET as $key => $value) {
            $i = $doc->createElement($_GET);
            $course->appendChild($i);
        }

        $doc -> save($file) or die("Oops! Something went wrong. Nothing saved.");
        header('Location:course.xml');
    } else {
        echo 'Sorry, nothing was submitted.';
    }
?>