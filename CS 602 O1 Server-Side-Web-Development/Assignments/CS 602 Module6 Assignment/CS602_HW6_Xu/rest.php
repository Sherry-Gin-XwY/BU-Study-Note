<?php

function xml_encode_courses($coursesArray){
    $filePath = 'courses.xml';
    $dom = new DOMDocument('1.0');
    $root = $dom -> createElement('courses');
    for ($i = 0; $i < count($coursesArray); $i++){
        $courseID = $coursesArray[$i]['courseID'];
        $courseName = $coursesArray[$i]['courseName'];

        $course = $dom->createElement('course');
        // id
        $id = $dom -> createElement('courseID', $courseID);
        $course->appendChild($id);
        // name
        $name = $dom->createElement('CourseName', $courseName);
        $course->appendChild($name);

        $root ->appendChild($course);
    }

    $dom->appendChild($root);
    $dom->save($filePath);
}

function getAllCourses() {
    // open connection to mysql db
    $connection = mysqli_connect("localhost", "root", "", "cs602hw5_db") or die("Error" .  mysqli_error($connection));

    // fetch table rows from mysql db
    $sql = 'SELECT * FROM sk_courses ORDER BY courseID';
    $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));

    // create an array
    $json_Array = array();
    while($row = mysqli_fetch_assoc($result)) {
        $json_Array[] = $row;
    }

    return $json_Array;
}

function xml_encode_getStudentsByCourseID($course_id, $studentsArray) {
    $filePath = 'students.xml';
    $dom = new DOMDocument('1.0');
    $root = $dom -> createElement('students');
    for ($i = 0; $i < count($studentsArray); $i++) {
        $studentID = $studentsArray[$i]['studentID'];
        $courseID = $studentsArray[$i]['courseID'];
        $firstName = $studentsArray[$i]['firstName'];
        $lastName = $studentsArray[$i]['lastName'];
        $email = $studentsArray[$i]['email'];

        $student = $dom ->createElement('student');

        // StudentID
        $sid = $dom -> createElement('studentID', $studentID);
        $student->appendChild($sid);
        // CourseID
        $cid = $dom -> createElement('courseID', $courseID);
        $student->appendChild($cid);
        // firstName
        $fName = $dom->createElement('firstName', $firstName);
        $student->appendChild($fName);
        // lastName
        $LName = $dom->createElement('lastName', $lastName);
        $student->appendChild($LName);
        // email
        $em = $dom->createElement('email', $email);
        $student->appendChild($em);

        $root -> appendChild($student);
    }

    $dom->appendChild($root);
    $dom->save($filePath);

}

function getStudentsByCourseID($course_id) {
    // open connection to mysql db
    $connection = mysqli_connect("localhost", "root", "", "cs602hw5_db") or die("Error" .  mysqli_error($connection));

    // fetch table rows from mysql db
    $sql = "SELECT * from sk_students WHERE courseID ='".$course_id."'";
    $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));

    // create an array
    $json_Array = array();
    while($row = mysqli_fetch_assoc($result)) {
        $json_Array[] = $row;
    }

    return $json_Array;
}



if($_GET['format'] == 'xml' and $_GET['action'] == 'courses') {
    header('Content-Type: text/plain');
    xml_encode_courses(getAllCourses());
    header('Location:courses.xml');
}

else if($_GET['format'] == 'json' and $_GET['action'] == 'courses') {
    header('Content-Type: text/plain');
    echo json_encode(getAllCourses(), JSON_PRETTY_PRINT);
}

else if ($_GET['format'] == 'xml' and $_GET['action'] == 'students') {
    header('Content-Type: text/plain');
    $course_id=$_GET['course'];
    xml_encode_getStudentsByCourseID($course_id, getStudentsByCourseID($course_id));
    $course_id=$_GET['course'];
    header('Location:students.xml');
}

else if ($_GET['format'] == 'json' and $_GET['action'] == 'students') {
    header('Content-Type: text/plain');
    $course_id=$_GET['course'];
    echo json_encode(getStudentsByCourseID($course_id), JSON_PRETTY_PRINT);

}

