package edu.bu.met.cs665;

import static org.junit.Assert.assertEquals;
import org.junit.Test;
import edu.bu.met.cs665.assignment3.*;

// Write some Unit tests for your program like the following.
public class TestEmail {

    public TestEmail() {}

    @Test
    public void testGetName() {
        Email testEmail = new Email();
        assertEquals(null + " " + null, testEmail.getName());
    }

    @Test
    public void testSetName() {
        Email testEmail = new Email();
        testEmail.setName("testFirst", "testLast");
        assertEquals("testFirst " + "testLast", testEmail.getName());
    }

    @Test
    public void testGetSubject() {
        Email testEmail = new Email();
        testEmail.setSubject();
        assertEquals("Subject template", testEmail.getSubject());
    }

    @Test
    public void testSetSubject() {
        VIPCustomer testEmail = new VIPCustomer();
        testEmail.setSubject();
        assertEquals("This email is for VIP Customer", testEmail.getSubject());
    }

    @Test
    public void testGetHeader() {
        Email testEmail = new Email();
        testEmail.setHeader();
        assertEquals("header template", testEmail.getHeader());
    }

    @Test
    public void testSetHeader() {
        VIPCustomer testEmail = new VIPCustomer();
        testEmail.setHeader();
        assertEquals("Dear VIP Customer:", testEmail.getHeader());
    }

    @Test
    public void testGetBody() {
        Email testEmail = new Email();
        testEmail.setBody();
        assertEquals("body template", testEmail.getBody());
    }

    @Test
    public void testSetBody() {
        VIPCustomer testEmail = new VIPCustomer();
        testEmail.setBody();
        assertEquals("I'm writing this email is for the VIP customer, this is the body", testEmail.getBody());
    }

    @Test
    public void testGetFooter() {
        Email testEmail = new Email();
        testEmail.setFooter();
        assertEquals("footer template", testEmail.getFooter());
    }

    @Test
    public void testSetFooter() {
        VIPCustomer testEmail = new VIPCustomer();
        testEmail.setFooter();
        assertEquals("Thank you, VIP Customer", testEmail.getFooter());
    }
}
