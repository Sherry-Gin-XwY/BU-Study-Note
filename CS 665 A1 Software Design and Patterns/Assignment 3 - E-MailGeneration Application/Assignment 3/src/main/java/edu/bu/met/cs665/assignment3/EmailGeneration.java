/**
 * Name: Weiye Xu
 * Date: 03/10/2022
 * Course: CS-665
 * Assignment 3
 * Description: This is email generation file, it will create different object depend on different kind of customer type
 */

package edu.bu.met.cs665.assignment3;

public class EmailGeneration {
    public Email createEmail(String CustomerType) {

        if (CustomerType == null) {
            return null;
        }
        if (CustomerType.equalsIgnoreCase("Business")) {
            return new BusinessCustomer();
        } else if (CustomerType.equalsIgnoreCase("Returning")) {
            return new ReturningCustomer();
        } else if (CustomerType.equalsIgnoreCase("Frequent")) {
            return new FrequentCustomer();
        } else if (CustomerType.equalsIgnoreCase("New")) {
            return new NewCustomer();
        } else if (CustomerType.equalsIgnoreCase("VIP")) {
            return new VIPCustomer();
        } else {
            return null;
        }
    }
}
