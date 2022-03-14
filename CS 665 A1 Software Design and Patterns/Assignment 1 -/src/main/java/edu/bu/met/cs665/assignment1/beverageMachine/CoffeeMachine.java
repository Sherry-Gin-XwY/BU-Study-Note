package edu.bu.met.cs665.assignment1.beverageMachine;

public class CoffeeMachine {

    public CoffeeMachine() {
        super();
    };

    // Create a new Drink
    public Drink createDrink(String drinkName, Double price, DrinkType drinkType) {
        return new Drink(drinkName, price, drinkType);
    }





}
