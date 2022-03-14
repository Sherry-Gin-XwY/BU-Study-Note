/**
 * Name: Weiye Xu
 * Date: 03/10/2022
 * Course: CS-665
 * Assignment 3
 * Description: This is email template file
 */

package edu.bu.met.cs665.assignment3;

public class Email {
    String firstName;
    String lastName;
    String subject;
    String header;
    String body;
    String footer;

    public String getName() {
        return firstName + " " + lastName;
    }

    public void setName(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }


    /**
     * Getter method for Subject
     * @return String subject
     */
    public String getSubject() {
        return subject;
    }

    /**
     * Getter method for Header
     * @return String header
     */
    public String getHeader() {
        return header;
    }

    /**
     * Getter method for body
     * @return String body
     */
    public String getBody() {
        return body;
    }

    /**
     * Getter method for footer
     * @return String footer
     */
    public String getFooter() {
        return footer;
    }

    /**
     * Setter method for subject
     */
    public void setSubject() {
        this.subject = "Subject template";
    }

    /**
     * Setter method for footer
     */
    public void setHeader() {
        this.header = "header template";
    }

    /**
     * Setter method for body
     */
    public void setBody() {
        this.body = "body template";
    }

    /**
     * Setter method for footer
     */
    public void setFooter() {
        this.footer = "footer template";
    }

    public String createAnEmail() {
        setSubject();
        setHeader();
        setBody();
        setFooter();
        return getSubject() + " " + getName() + "\n"
        + getHeader() + " \n"
        + "\t" + getBody() + "\n"
        + getFooter();
    }


}
