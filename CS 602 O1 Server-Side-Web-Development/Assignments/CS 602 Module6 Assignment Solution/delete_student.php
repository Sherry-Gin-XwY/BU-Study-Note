<?php



$course_id = filter_input(INPUT_POST, 'course_id');
$student_id = filter_input(INPUT_POST, 'student_id');

// Validate inputs
if($student_id == null || $student_id == false) {
    $error = "Invalid student data. Check the student data still exits?";
    include('error.php');
} else {
    require_once('database.php');

    // Delete the student from the database
    $query = 'DELETE FROM sk_students WHERE StudentID = :student_id';
    $statement = $db -> prepare($query);
    $statement -> bindValue(':student_id', $student_id);
    $statement ->execute();
    $statement -> closeCursor();

    // Display the Home page
    include('index.php');
}
?>

