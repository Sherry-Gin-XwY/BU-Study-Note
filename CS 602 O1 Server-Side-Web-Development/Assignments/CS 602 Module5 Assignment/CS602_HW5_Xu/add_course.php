<?php
    require_once('database.php');

// Get the course form data
$query = 'SELECT * FROM sk_courses ORDER BY courseID';
$course_id = filter_input(INPUT_POST, 'course_id');
$course_name = filter_input(INPUT_POST, 'course_name');


    // Add the course to the database
    $query = 'INSERT INTO sk_courses (courseID, courseName) VALUES (:course_id, :course_name)';
    $statement = $db -> prepare($query);
    $statement -> bindValue(':course_id', $course_id);
    $statement -> bindValue(':course_name', $course_name);
    $statement -> execute();
    $statement -> closeCursor();

    // Display the Course List page
    include('course_list.php');

?>