package edu.bu.met.cs665.assignment2.notificationSystem;

import org.apache.log4j.Logger;

// import org.apache.log4j.PropertyConfigurator;

public class Main {
    private static Logger logger = Logger.getLogger(Main.class);

    /**
     * A main method to run Assignment2.
     *
     * @param args not used
     * @throws Exception
     */

    public static void main(String[] args) throws Exception {

        // This configuration is for setting up the log4j properties file.
        // It is better to set this using java program arguments.
        // PropertyConfigurator.configure("log4j.properties");

        // Let us create an object of the Main class
        Main m = new Main();

        logger.info(m.doIt());

    }

    private String doIt() {

        NotificationSystem NotificationSystem1 = new DeliveryRequest();
        // 5 new taxiDriver (Observer)
        TaxiDriver Driver1 = new TaxiDriver("John", "Doe", "Ford");
        TaxiDriver Driver2 = new TaxiDriver("John", "Smith", "Honda");
        TaxiDriver Driver3 = new TaxiDriver("Sherry", "Gin", "BMW");
        TaxiDriver Driver4 = new TaxiDriver("Weiye", "Xu", "Subaru");
        TaxiDriver Driver5 = new TaxiDriver("Smith", "Chen", "Benz");
        TaxiDriver Driver6 = new TaxiDriver("Smith", "Taobao", "KIA");

        // add all the drivers to the NotificationSystem1
        NotificationSystem1.add(Driver1);
        NotificationSystem1.add(Driver2);
        NotificationSystem1.add(Driver3);
        NotificationSystem1.add(Driver4);
        NotificationSystem1.add(Driver5);
        NotificationSystem1.add(Driver6);

        // Create a new Shop (PS4)
        Shop shop1 = new Shop("PS4");
        // Sending notification to all Drivers
        NotificationSystem1.needDeliveryRequest(shop1);


        return NotificationSystem1.toString();
    }


}