package edu.bu.met.cs665.assignment1.beverageMachine;

// Create the Drink class

public class Drink {
    /**
     *  Create a Drink object using drinkName, price, and DrinkType
     *
     * @param drinkName the name of the drink
     * @param price the price of the drink
     * @param drinkType the drink type
     */

    public Drink(String drinkName, Double price, DrinkType drinkType) {
        super();
        this.drinkName = drinkName;
        this.price = price;
        this.drinkType = drinkType;
    }

    private String drinkName;
    private Double price;
    private DrinkType drinkType;
    private int sugarUnit = 0;
    private int milkUnit = 0;

    /**
     * Getter method for drink Name
     * @return
     */
    public String getDrinkName() {
        return drinkName;
    }

    /**
     * Setter method for drink Name
     * @param drinkName String
     */
    public void setDrinkName(String drinkName) {
        this.drinkName = drinkName;
    }

    /**
     * Getter method for drink price
     * @return
     */
    public Double getDrinkPrice() {
        return price;
    }

    /**
     * Setter method for drink price
     * @param price Double
     */
    public void setDrinkPrice(Double price) {
        this.price = price;
    }

    /**
     * Getter method for drink type
     * @return
     */
    public DrinkType getDrinkType() {
        return drinkType;
    }

    /**
     * Setter method for Drink Type
     * @param drinkType DrinkType
     */
    public void setDrinkType(DrinkType drinkType) {
        this.drinkType = drinkType;
    }

    /**
     *
     */
    public void addSugar(){
        if(this.drinkType == DrinkType.COFFEE){
            if( this.sugarUnit < 3) {
                this.sugarUnit += 1;
                this.price += 0.5;
            } else {
                // do nothing;
            }
        } else {
            // do nothing;
        }
    }

    public int getSugarUnit() {
        return sugarUnit;
    }

    /**
     *
     */
    public void addMilk() {
        if(this.drinkType == DrinkType.COFFEE){
            if (this.milkUnit < 3) {
                this.milkUnit += 1;
                this.price += 0.5;
            } else {
                // do nothing
            }
        } else {
            // do nothing;
        }
    }

    public int getMilkUnit() {
        return milkUnit;
    }

    public int getTotalNumberOfCondiments() {
        return this.sugarUnit + this.milkUnit;
    }




    //TODO: Override the method for a better description
    @Override
    public String toString() {
        return "TODO: string";
    }
}
