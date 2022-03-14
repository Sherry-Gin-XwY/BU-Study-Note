/**
 * Name: Weiye Xu
 * Date: 03/10/2022
 * Course: CS-665
 * Assignment 3
 * Description: This is VIP email which going to update the email template
 */

package edu.bu.met.cs665.assignment3;

public class VIPCustomer extends Email {
    public void setSubject() {
        subject = "This email is for VIP Customer";
    }

    public void setHeader() {
        header = "Dear VIP Customer:";
    }

    public void setBody() {
        body = "I'm writing this email is for the VIP customer, this is the body";
    }

    public void setFooter() {
        footer = "Thank you, VIP Customer";
    }
}
