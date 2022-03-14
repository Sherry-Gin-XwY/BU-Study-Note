/**
 * Name: Weiye Xu
 * Date: 03/10/2022
 * Course: CS-665
 * Assignment 3
 * Description: This is Main driver for the email generation system
 */

package edu.bu.met.cs665.assignment3;

import edu.bu.met.cs665.assignment3.*;
import org.apache.log4j.Logger;

public class Main {
    private static Logger logger = Logger.getLogger(Main.class);

    /**
     * A main method to run Assignment3
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

        //    logger.trace("Trace Message!");
        //    logger.debug("Debug Message!");
        //    logger.info("Info Message!");
        //    logger.warn("Warn Message!");
        //    logger.error("Error Message!");
        //    logger.fatal("Fatal Message!");

        // Test Code
        // Create an new EmailGeneration class
        EmailGeneration newEmailGeneration = new EmailGeneration();

        System.out.println("---------------------------------------------");

        Email testBusinessEmail = newEmailGeneration.createEmail("Business");
        testBusinessEmail.setName("John", "Doe");
        System.out.println(testBusinessEmail.createAnEmail());

        System.out.println("---------------------------------------------");

        Email testReturningEmail = newEmailGeneration.createEmail("Returning");
        testReturningEmail.setName("John", "Smith");
        System.out.println(testReturningEmail.createAnEmail());

        System.out.println("---------------------------------------------");

        Email testFrequentEmail = newEmailGeneration.createEmail("Frequent");
        testFrequentEmail.setName("Sherry", "Gin");
        System.out.println(testFrequentEmail.createAnEmail());

        System.out.println("---------------------------------------------");

        Email testNewEmail = newEmailGeneration.createEmail("New");
        testNewEmail.setName("Smith", "Xu");
        System.out.println(testNewEmail.createAnEmail());

        System.out.println("---------------------------------------------");

        Email testVIPEmail = newEmailGeneration.createEmail("VIP");
        testVIPEmail.setName("Weiye", "Xu");
        System.out.println(testVIPEmail.createAnEmail());

    }

    private String doIt() {

        // Create an new EmailGeneration class
        EmailGeneration newEmailGeneration = new EmailGeneration();

        System.out.println("---------------------------------------------");

        Email testBusinessEmail = newEmailGeneration.createEmail("Business");
        testBusinessEmail.setName("John", "Doe");
        System.out.println(testBusinessEmail.createAnEmail());

        System.out.println("---------------------------------------------");

        Email testReturningEmail = newEmailGeneration.createEmail("Returning");
        testReturningEmail.setName("John", "Smith");
        System.out.println(testReturningEmail.createAnEmail());

        System.out.println("---------------------------------------------");

        Email testFrequentEmail = newEmailGeneration.createEmail("Frequent");
        testFrequentEmail.setName("Sherry", "Gin");
        System.out.println(testFrequentEmail.createAnEmail());

        System.out.println("---------------------------------------------");

        Email testNewEmail = newEmailGeneration.createEmail("New");
        testNewEmail.setName("Smith", "Xu");
        System.out.println(testNewEmail.createAnEmail());

        System.out.println("---------------------------------------------");

        Email testVIPEmail = newEmailGeneration.createEmail("VIP");
        testVIPEmail.setName("Weiye", "Xu");
        System.out.println(testVIPEmail.createAnEmail());

        return null;

    }

}
