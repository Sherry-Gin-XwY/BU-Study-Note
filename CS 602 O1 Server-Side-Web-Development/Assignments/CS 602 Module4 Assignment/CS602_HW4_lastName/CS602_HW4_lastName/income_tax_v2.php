<?php

define('TAX_RATES',
  array(
    'Single' => array(
      'Rates' => array(10,12,22,24,32,35,37),
      'Ranges' => array(0,9700,39475,84200,160725,204100,510300),
      'MinTax' => array(0, 970,4543,14382,32748,46628,153798)
      ),
    'Married_Jointly' => array(
      'Rates' => array(10,12,22,24,32,35,37),
      'Ranges' => array(0,19400,78950,168400,321450,408200,612350),
      'MinTax' => array(0, 1940,9086,28765,65497,93257,164709)
      ),
    'Married_Separately' => array(
      'Rates' => array(10,12,22,24,32,35,37),
      'Ranges' => array(0,9700,39475,84200,160725,204100,306175),
      'MinTax' => array(0, 970,4543,14382.50,32748.50,46628.50,82354.75)
      ),
    'Head_Household' => array(
      'Rates' => array(10,12,22,24,32,35,37),
      'Ranges' => array(0,13850,52850,84200,160700,204100,510300),
      'MinTax' => array(0, 1385,6065,12962,31322,45210,152380)
      )
    )
);

// Fill in the code for the following function

function incomeTax($taxableIncome, $status) {

  if ($status != '') {
    $incTax = 0;
    for ($i = 0; $i < count(TAX_RATES[$status]['Ranges']); $i++) {
      if($taxableIncome < TAX_RATES[$status]['Ranges'][$i]) {
        $index = $i-1;
        $minTax = TAX_RATES[$status]['MinTax'][$index];
        $lowerRange = TAX_RATES[$status]['Ranges'][$index];
        $rates = TAX_RATES[$status]['Rates'][$index];
        break;
      } else {
        $index = count(TAX_RATES[$status]['Ranges'])-1;
        $minTax = TAX_RATES[$status]['MinTax'][$index];
        $lowerRange = TAX_RATES[$status]['Ranges'][$index];
        $rates = TAX_RATES[$status]['Rates'][$index];
      }
    }
    $incTax = $minTax + (($rates * ($taxableIncome - $lowerRange)) / 100);

  }
    else {
    $incTax = array();
    $myArray = 0;
    foreach (TAX_RATES as &$value) {
      for ($i = 0; $i < count($value['Ranges']); $i++) {
        if($taxableIncome < $value['Ranges'][$i]){

          $myArray = $i-1;
          break;
        } else {
          $myArray = count($value['Ranges'])-1;
        }
      }
      $minTax = $value['MinTax'][$myArray];
      $lowerRange = $value['Ranges'][$myArray];
      $rates = $value['Rates'][$myArray];

      $incTax[] = $minTax + (($rates * ($taxableIncome - $lowerRange)) / 100);
    }
  }
  return $incTax;
}


// Debug Helping Function
function debug_to_console($data) {
  $output = $data;
  if (is_array($output))
      $output = implode(',', $output);

  echo "<script>console.log('Debug Objects: " . $output . "' );</script>";
}



?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>HW4 Part2 - Xu</title>

  <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">

  <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
</head>

<body>

  <div class="container">

    <h3>Income Tax Calculator</h3>

    <form class="form-horizontal" method="post">

      <div class="form-group">
        <label class="control-label col-sm-2">Enter Net Income:</label>
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




    <table>
      <table class='table table-bordered'>
        <thead>

    <?php

        // Fill in the rest of the PHP code for form submission results

        if(isset($_POST['netIncome'])) {

          $income = $_POST['netIncome'];

          // Different by status
          $tax_Single = number_format(incomeTax($income, 'Single'), 2);
          $tax_Married_Jointly = number_format(incomeTax($income, 'Married_Jointly'), 2);
          $tax_Married_Separately = number_format(incomeTax($income, 'Married_Separately'), 2);
          $tax_Head_Household = number_format(incomeTax($income, 'Head_Household'), 2);

          // Default
          $tax_Single = number_format(incomeTax($income, '')[0], 2);
          $tax_Married_Jointly = number_format(incomeTax($income, '')[1], 2);
          $tax_Married_Separately = number_format(incomeTax($income, '')[2], 2);
          $tax_Head_Household = number_format(incomeTax($income, '')[3], 2);

          $newIncome = number_format($income, 2);

          echo(
            "with a net taxable income of $ $newIncome"
            ."<tr>"
            ."<td><b>Status</b></td>"
            ."<td><b>Tax</b></td>"
            ."</tr>"
          );
          foreach (TAX_RATES as $key=>$status) {
            $taxResult = number_format(incomeTax($income, $key), 2);
            echo(
              "<tr>"
              ."<td>$key</td>"
              ."<td>$$taxResult</td>"
              ."</tr>"
            );
          }
        }
    ?>

</thead>
      </table>


    <!-- Fill in the code for Tax Tables display -->
    <!-- showing tax table display -->


    <h3>2019 Tax Tables</h3>
    <?php
    foreach (TAX_RATES as $key => $status) {

      echo(
        // display the name of the table
        "<h4>$key</h4>"
        ."<table>"
        ."<table class='table table-bordered'>"
        ."<thread>"
        /* For the table header */
        ."<tr>"
        ."<td><b>Taxable Income</b></td>"
        ."<td><b>Tax Rate</b></td>"
        ."</tr>"
        ."</thread>"

      );

      for ($i = 1; $i < count(TAX_RATES['Single']['Ranges']); $i++)
      {
        $taxRate = TAX_RATES['Single']['Rates'][$i-1];
        $minTax = number_format(TAX_RATES['Single']['MinTax'][$i-1], 2);
        $rightLowerRange = number_format(TAX_RATES['Single']['Ranges'][$i-1], 0);
        // the first case
        if($i == 1) {
          $lowerRange = number_format(TAX_RATES['Single']['Ranges'][$i-1], 0);
          $higherRange = number_format(TAX_RATES['Single']['Ranges'][$i], 0);
          echo(
            "<tr>"
            // table Left (taxable Income)
            ."<td>$$lowerRange - $$higherRange</td>"
            // table Right (Tax Rate)
            ."<td>$taxRate%</td>"
            ."</tr>"
          );
        }
        // other cases
        else {
          $lowerRange = number_format(TAX_RATES['Single']['Ranges'][$i-1]+1, 0);
          $higherRange = number_format(TAX_RATES['Single']['Ranges'][$i], 0);
          echo(
            "<tr>"
            // table Left (taxable Income)
            ."<td>$$lowerRange - $$higherRange</td>"
            // table Right (Tax Rate)
            ."<td>$$minTax plus $taxRate% of the amount over $$rightLowerRange</td>"
            ."</tr>"
          );
        }
      }
      // last case
      $lastLeftRange = number_format(TAX_RATES['Single']['Ranges'][count(TAX_RATES['Single']['Ranges'])-1]+1, 0);
      $lastMinTax = number_format(TAX_RATES['Single']['MinTax'][count(TAX_RATES['Single']['MinTax'])-1], 2);
      $lastRate = TAX_RATES['Single']['Rates'][count(TAX_RATES['Single']['Rates'])-1];
      $lastLowerRange = number_format(TAX_RATES['Single']['Ranges'][$i-1], 0);
      echo(
        "<tr>"
        // last table Left (taxable Income)
        ."<td>$$lastLeftRange or more</td>"
        // last table right (Tax Rate)
        ."<td>$$lastMinTax plus $lastRate% of the amount over $$lastLowerRange</td>"
        ."</tr>"
        ."</table>"
      );
    }
    ?>
  </div>

</body>

</html>