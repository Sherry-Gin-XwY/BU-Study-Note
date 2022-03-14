package edu.bu.met.cs665;

/**
* This is a JUnit Test example .
* You should write such JUnit Test for your code base .
* You should write sequences of user interactions with the
system in JUnit Tests .
* Your variable and class names might be totally different than
in this example .
*/

import static org.junit.Assert.assertEquals;
import org.junit.Test;
import edu.bu.met.cs665.assignment1.beverageMachine.*;


public class TestCoffeeMachine1 {

    // Test the CoffeeMachine class
    public TestCoffeeMachine1() {}



    // Test for the 4 unit Milk and 1 sugar added to the coffee
    @Test
    public void testCondimentNumberbyCoffee4Milk1Sugar() {
        CoffeeMachine myCoffeeMachine = new CoffeeMachine();
        // Create a coffee drink
        Drink myAmericano = myCoffeeMachine.createDrink("Americano", 10.0, DrinkType.COFFEE);
        // add 4 unit Milk
        myAmericano.addMilk();
        myAmericano.addMilk();
        myAmericano.addMilk();
        myAmericano.addMilk();

        // add 1 unit sugar
        myAmericano.addSugar();

        // Now, we check the totally number of condiments in this drink.
        // we added 4 milk but only 3 should be accepted and added
        // and one sugar so that total is 4 and not 5 condiment units.
        assertEquals(4, myAmericano.getTotalNumberOfCondiments());
    }

    // Test for the 1 unit Milk and 4 sugar added to the coffee
    @Test
    public void testCondimentNumberbyCoffee1Milk4Sugar() {
        CoffeeMachine myCoffeeMachine = new CoffeeMachine();
        // Create a coffee drink
        Drink myAmericano = myCoffeeMachine.createDrink("Americano", 10.0, DrinkType.COFFEE);
        // add 4 unit Milk
        myAmericano.addMilk();

        // add 1 unit sugar
        myAmericano.addSugar();
        myAmericano.addSugar();
        myAmericano.addSugar();
        myAmericano.addSugar();

        // Now, we check the totally number of condiments in this drink.
        // we added 4 sugar but only 3 should be accepted and added
        // and 1 milk so that total is 4 and not 5 condiment units.
        assertEquals(4, myAmericano.getTotalNumberOfCondiments());
    }

        // Test for the 1 unit Milk and 1 sugar added to the coffee
        @Test
        public void testCondimentNumberbyCoffee1Milk1Sugar() {
            CoffeeMachine myCoffeeMachine = new CoffeeMachine();
            // Create a coffee drink
            Drink myAmericano = myCoffeeMachine.createDrink("Americano", 10.0, DrinkType.COFFEE);
            // add 1 unit Milk
            myAmericano.addMilk();

            // add 1 unit sugar
            myAmericano.addSugar();

            // Now, we check the totally number of condiments in this drink.
            // we added 1 milk
            // and 1 sugar so that total is 2.
            assertEquals(2, myAmericano.getTotalNumberOfCondiments() );
        }

    // Test for any number of sugar and milk add to the tea
    @Test
    public void testCondimentNumberbyTea() {
        CoffeeMachine myCoffeeMachine = new CoffeeMachine();
        // Create a tea drink
        Drink myGreenTea = myCoffeeMachine.createDrink("GreenTea", 12.0, DrinkType.TEA);
        // add 4 unit Milk
        myGreenTea.addMilk();
        myGreenTea.addMilk();
        myGreenTea.addMilk();
        myGreenTea.addMilk();

        // add 1 unit sugar
        myGreenTea.addSugar();

        //Since the milk and Sugar only available for Coffee, the total is 0 condiment units.
        assertEquals(0, myGreenTea.getTotalNumberOfCondiments() );
    }

}


