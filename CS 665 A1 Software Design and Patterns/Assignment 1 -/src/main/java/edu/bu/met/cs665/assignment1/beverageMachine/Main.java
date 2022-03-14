package edu.bu.met.cs665.assignment1.beverageMachine;

import edu.bu.met.cs665.assignment1.beverageMachine.*;
import org.apache.log4j.Logger;
// import org.apache.log4j.PropertyConfigurator;

public class Main {
    private static Logger logger = Logger.getLogger(Main.class);

    /**
     * A main method to run Assignment1.
     *
     * @param args not used
     * @throws Exception
     */

    public static void main(String[] args) throws Exception {

    // This configuration is for setting up the log4j properties file.
    // It is better to set this using java program arguments.
    // PropertyConfigurator.configure("log4j.properties");

    // Let us create an object pf the Main class
    Main m = new Main();

    logger.info(m.doIt());
    logger.info(m.doIt1());


    }

    private String doIt() {
        Drink GreenTea = new Drink("Green Tea", 10.0, DrinkType.TEA);
        GreenTea.addMilk();
        GreenTea.addSugar();
        String result = (
            "DrinkName: " + GreenTea.getDrinkName()  +
            ",\nType: " + GreenTea.getDrinkType() +
            ",\nPrice: " + GreenTea.getDrinkPrice());
        System.out.println(result);
        return result;
    }

    private String doIt1() {
        Drink GreenTea = new Drink("Espresso", 5.0, DrinkType.COFFEE);
        GreenTea.addMilk();
        GreenTea.addSugar();
        GreenTea.addSugar();
        String result = (
            "DrinkName: " + GreenTea.getDrinkName()  +
            ",\nType: " + GreenTea.getDrinkType() +
            ",\nPrice: " + GreenTea.getDrinkPrice());
        System.out.println(result);
        return result;
    }

}
