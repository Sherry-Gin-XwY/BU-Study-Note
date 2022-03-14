<?php

// Get the student form data
$course_id = filter_input(INPUT_POST, 'course_id');
$firstName = filter_input(INPUT_POST, 'first_name');
$lastName = filter_input(INPUT_POST, 'last_name');
$email = filter_input(INPUT_POST, 'email');

// Validate inputs
if ($course_id == null || $course_id == false ||
    $firstName == null || $lastName == null || $email == null || $email == false) {
        $error = "Invalid student data. Check all fields and try again.";
        include('error.php');
    } else {
        require_once('database.php');

        // Add the student to the database
        $query = 'INSERT INTO sk_students(courseID, firstName, lastName, email) VALUES (:course_id, :first_name, :last_name, :email)';
        $statement = $db -> prepare($query);
        $statement -> bindValue(':course_id', $course_id);
        $statement -> bindValue(':first_name', $firstName);
        $statement -> bindValue(':last_name', $lastName);
        $statement -> bindValue(':email', $email);
        $statement -> execute();
        $statement -> closeCursor();

        // Display the Student List page
        include('index.php');
}

?>