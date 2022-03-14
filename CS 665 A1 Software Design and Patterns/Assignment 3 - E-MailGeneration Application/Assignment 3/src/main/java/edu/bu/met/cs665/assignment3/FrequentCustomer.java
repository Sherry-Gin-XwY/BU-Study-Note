/**
 * Name: Weiye Xu
 * Date: 03/10/2022
 * Course: CS-665
 * Assignment 3
 * Description: This is Frequent email which going to update the email template
 */

package edu.bu.met.cs665.assignment3;

public class FrequentCustomer extends Email {
    public void setSubject() {
        subject = "This email is for Frequent Customer";
    }

    public void setHeader() {
        header = "Dear Frequent Customer:";
    }

    public void setBody() {
        body = "I'm writing this email is for the Frequent customer, this is the body";
    }

    public void setFooter() {
        footer = "Thank you, Frequent Customer";
    }
}
