package edu.bu.met.cs665;

import static org.junit.Assert.assertEquals;
import org.junit.Test;
import edu.bu.met.cs665.assignment1.beverageMachine.*;

// Write some Unit tests for my program like the following.

public class TestDrink {

    // Test the Drink class
    public TestDrink() {}

    @Test
    public void testGetDrinkName() {
        Drink greenTea = new Drink("Green Tea", 10.0, DrinkType.TEA);
        assertEquals("Green Tea", greenTea.getDrinkName());
    }

    @Test
    public void testSetDrinkName() {
        Drink greenTea = new Drink("Green Tea", 10.0, DrinkType.TEA);
        greenTea.setDrinkName("Black Tea");
        assertEquals("Black Tea", greenTea.getDrinkName());
    }

    @Test
    public void testGetDrinkPrice() {
        Drink greenTea = new Drink("Green Tea", 10.0, DrinkType.TEA);
        assertEquals(Double.valueOf(10), greenTea.getDrinkPrice());
    }

    @Test
    public void testSetDrinkPrice() {
        Drink greenTea = new Drink("Green Tea", 10.0, DrinkType.TEA);
        greenTea.setDrinkPrice(12.0);
        assertEquals(Double.valueOf(12), greenTea.getDrinkPrice());
    }

    @Test
    public void testGetDrinkType() {
        Drink greenTea = new Drink("Green Tea", 10.0, DrinkType.TEA);
        assertEquals(DrinkType.TEA, greenTea.getDrinkType());
    }

    @Test
    public void testSetDrinkType() {
        Drink greenTea = new Drink("Green Tea", 10.0, DrinkType.TEA);
        greenTea.setDrinkType(DrinkType.COFFEE);
        assertEquals(DrinkType.COFFEE, greenTea.getDrinkType());
    }

    // Test addSugar() for tea
    @Test
    public void testaddSugarforTea() {
        Drink greenTea = new Drink("Green Tea", 10.0, DrinkType.TEA);
        greenTea.addSugar();
        assertEquals(0, greenTea.getSugarUnit());
    }

    // Test addSugar() for coffee
    @Test
    public void testaddSugarforCoffee() {
        Drink espresso = new Drink("Espresso", 10.0, DrinkType.COFFEE);
        espresso.addSugar();
        assertEquals(1, espresso.getSugarUnit());
    }

    // Test addMilk() for tea
    @Test
    public void testaddMilkforTea() {
        Drink greenTea = new Drink("Green Tea", 10.0, DrinkType.TEA);
        greenTea.addMilk();
        assertEquals(0, greenTea.getMilkUnit());
    }

    // Test addMilk() for coffee
    @Test
    public void testaddMilkforCoffee() {
    Drink espresso = new Drink("Green Tea", 10.0, DrinkType.COFFEE);
    espresso.addMilk();
    assertEquals(1, espresso.getMilkUnit());
    }

}
