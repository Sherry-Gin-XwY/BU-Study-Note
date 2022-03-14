<?php

// Fill in the code for the following four functions


function incomeTaxSingle($taxableIncome) {
    $incTax = 0.0;

    // Calculating taxes by hard code
    if($taxableIncome >0 && $taxableIncome <= 9700) {
        $incTax = (10 * $taxableIncome) / 100;
    } else if ($taxableIncome > 9700 && $taxableIncome <= 39475) {
        $incTax = 970 + ((12 * ($taxableIncome - 9700)) / 100);
    } else if ($taxableIncome > 39475 && $taxableIncome <= 84200) {
        $incTax = 4543 + ((22 * ($taxableIncome - 39475)) / 100);
    } else if ($taxableIncome > 84200 && $taxableIncome <= 160725) {
        $incTax = 14382 + ((24 * ($taxableIncome - 84200)) / 100);
    } else if ($taxableIncome > 160725 && $taxableIncome <= 204100) {
        $incTax = 32748 + ((32 * ($taxableIncome - 160725)) / 100);
    } else if ($taxableIncome > 204100 && $taxableIncome <= 510300) {
        $incTax = 46628 + ((35 * ($taxableIncome - 204100)) / 100);
    } else {
        $incTax = 153798 + ((37 * ($taxableIncome - 510300)) / 100);
    }

    return $incTax;

}

function incomeTaxMarriedJointly($taxableIncome) {
    $incTax = 0.0;

    // Calculating taxes by hard code
    if($taxableIncome > 0 && $taxableIncome <= 19400) {
        $incTax = (10 * $taxableIncome) / 100;
    } else if ($taxableIncome > 19400 && $taxableIncome <= 78950) {
        $incTax = 1940 + ((12 * ($taxableIncome - 19400)) / 100);
    } else if ($taxableIncome > 78950 && $taxableIncome <= 168400) {
        $incTax = 9086 + ((22 * ($taxableIncome - 78950)) / 100);
    } else if ($taxableIncome > 168400 && $taxableIncome <= 321450) {
        $incTax = 28765 + ((24 * ($taxableIncome - 168400)) / 100);
    } else if ($taxableIncome > 321450 && $taxableIncome <= 408200) {
        $inTax = 65497 + ((32 * ($taxableIncome - 321450)) / 100);
    } else if ($taxableIncome > 408200 && $taxableIncome <= 612350) {
        $incTax = 93257 + ((35 * ($taxableIncome - 408200)) / 100);
    } else {
        $incTax = 164709 + (( 37 * ($taxableIncome - 612350)) / 100);
    }


    return $incTax;

}

function incomeTaxMarriedSeparately($taxableIncome) {
    $incTax = 0.0;

    // Calculating taxes by hard code
    if($taxableIncome > 0 && $taxableIncome <= 9700) {
        $incTax = (10 * $taxableIncome) / 100;
    } else if ($taxableIncome > 9700 && $taxableIncome <= 39475) {
        $incTax = 970 + ((12 * ($taxableIncome - 9700)) / 100);
    } else if ($taxableIncome > 39475 && $taxableIncome <= 84200) {
        $incTax = 4543 + ((22 * ($taxableIncome - 39475)) / 100);
    } else if ($taxableIncome > 84200 && $taxableIncome <= 160725) {
        $incTax = 14382.50 + ((24 * ($taxableIncome - 84200)) / 100);
    } else if ($taxableIncome > 160725 && $taxableIncome <= 204100) {
        $incTax = 32748.50 + ((32 * ($taxableIncome - 160725)) / 100);
    } else if ($taxableIncome > 204100 && $taxableIncome <= 306175) {
        $incTax = 46628.50 + ((35 * ($taxableIncome - 204100)) / 100);
    } else {
        $incTax = 82354.75 + (( 37 * ($taxableIncome - 306175)) / 100);
    }


    return $incTax;

}

function incomeTaxHeadOfHousehold($taxableIncome) {
    $incTax = 0.0;

    // Calculating taxes by hard code
    if($taxableIncome > 0 && $taxableIncome <= 13850) {
        $incTax = (10 * $taxableIncome) / 100;
    } else if ($taxableIncome > 13850 && $taxableIncome <= 52850) {
        $incTax = 1385 + ((12 * ($taxableIncome - 13850)) / 100);
    } else if ($taxableIncome > 52850 && $taxableIncome <= 84200) {
        $incTax = 6065 + ((22 * ($taxableIncome - 52850)) / 100);
    } else if ($taxableIncome > 84200 && $taxableIncome <= 160700) {
        $incTax = 12962 + ((24 * ($taxableIncome - 84200)) / 100);
    } else if ($taxableIncome > 160700 && $taxableIncome <= 204100) {
        $incTax = 31322 + ((32 * ($taxableIncome - 160700)) / 100);
    } else if($taxableIncome > 204100 && $taxableIncome <= 510300) {
        $incTax = 45210 + ((35 * ($taxableIncome - 204100)) / 100);
    } else {
        $incTax = 152380 + ((37 * ($taxableIncome - 510300)) / 100);
    }


    return $incTax;

}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HW4 Part1 - LastName</title>

  <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">

  <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container">

    <h3>Income Tax Calculator</h3>

    <form class="form-horizontal" method="post">


        <div class="form-group">
            <label class="control-label col-sm-2" for="netIncome">Your Net Income:</label>
            <div class="col-sm-10">
            <input type="number" step="any" name="netIncome" placeholder="Taxable  Income" required autofocus>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>

    </form>

    <?php

        // Fill in the rest of the PHP code for form submission results

        if(isset($_POST['netIncome'])) {

            $income = $_POST['netIncome'];
            // calculating taxes
            $tax1 = number_format(incomeTaxSingle($income), 2);
            $tax2 = number_format(incomeTaxMarriedJointly($income), 2);
            $tax3 = number_format(incomeTaxMarriedSeparately($income), 2);
            $tax4 = number_format(incomeTaxHeadOfHousehold($income), 2);

            // showing the taxes
            echo (
            'With a net taxable income of $ ' .number_format($income, 2)
            ."<table class='table table-bordered'>"
            ."<thead>"
            ."<tr>"
            ."<th>status</th>"
            ."<th>Tax</th>"
            ."</tr>"
            ."</thead>"
            ."<tbody>"
            ."<tr>"
            ."<td>Single</td>"
            ."<td>$$tax1</td>"
            ."</tr>"
            ."<tr>"
            ."<td>Married Filing Jointly</td>"
            ."<td>$$tax2</td>"
            ."</tr>"
            ."<tr>"
            ."<td>Married Filing Separately</td>"
            ."<td>$$tax3</td>"
            ."</tr>"
            ."<tr>"
            ."<td>Head of Household</td>"
            ."<td>$$tax4</td>"
            ."</tr>"
            ."</tbody>"
            ."</table>"
        );


        }

    ?>



</div>

</body>
</html>