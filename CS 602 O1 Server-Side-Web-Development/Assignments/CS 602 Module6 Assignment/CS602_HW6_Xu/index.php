<?php
require_once('database.php');


//TODO: need to fix
// Get course ID
if (!isset($course_id)) {
    $course_id = filter_input(INPUT_GET, 'course_id');
    if($course_id == NULL || $course_id == FALSE) {
        $course_id = 'cs602';
    }
}


// Get name for selected course
$queryCourse = 'SELECT * FROM sk_courses WHERE courseID = :course_id';
$statement1 = $db -> prepare($queryCourse);
$statement1 -> bindValue(':course_id', $course_id);
$statement1 -> execute();
$course = $statement1 -> fetch();
$course_name = $course['courseName'];
$statement1 -> closeCursor();

// Get all courses
$query = 'SELECT * FROM sk_courses ORDER BY courseID';
$statement = $db -> prepare($query);
$statement -> execute();
$courses = $statement -> fetchAll();
$statement -> closeCursor();


// Get students for selected course
$queryStudents = 'SELECT * FROM sk_students
                    WHERE courseID = :course_id
                    ORDER BY studentID';
$statement3 = $db -> prepare($queryStudents);
$statement3 -> bindValue(':course_id', $course_id);
$statement3 -> execute();
$students = $statement3 -> fetchAll();
$statement3 -> closeCursor();
?>

<!DOCTYPE html>
<html>

<!-- the head section -->
<head>
    <title>My Course Manager</title>
    <link rel="stylesheet" type="text/css" href="main.css" />
</head>

<!-- the body section -->
<body>
<header><h1>Course Manager</h1></header>
<main>
    <center><h1>Student List</h1></center>

    <aside>
        <!-- display a list of categories -->
        <h2>Courses</h2>
        <nav>
        <ul>
            <?php foreach ($courses as $course) :?>
                <li><a href="./index.php?course_id=<?php echo $course['courseID'];?>">
                <?php echo $course['courseID']; ?>
            </a>
            </li>
            <?php endforeach; ?>
        </ul>
        </nav>
    </aside>

    <section>
        <!-- display a table of Students -->
        <h2><?php echo $course_name; ?></h2>
        <table>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>&nbsp;</th>
            </tr>

            <?php foreach ($students as $student) : ?>
                <tr>
                    <td><?php echo $student['firstName']; ?></td>
                    <td><?php echo $student['lastName']; ?></td>
                    <td><?php echo $student['email']; ?></td>
                    <td><form action="delete_student.php" method="post">
                        <input type="hidden" name="student_id" value="<?php echo $student['studentID'] ?>">
                        <input type="submit" value="Delete">
                    </td>
                </tr>
            <?php endforeach; ?>

        </table>

        <p><a href="add_student_form.php">Add Student</a></p>

        <p><a href="course_list.php">List Courses</a></p>

    </section>
</main>

<footer>
    <p>&copy; <?php echo date("Y"); ?> Suresh Kalathur</p>
</footer>
</body>
</html>