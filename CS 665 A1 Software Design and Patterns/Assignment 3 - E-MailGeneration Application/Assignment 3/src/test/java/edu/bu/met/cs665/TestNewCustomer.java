package edu.bu.met.cs665;

import static org.junit.Assert.assertEquals;
import org.junit.Test;
import edu.bu.met.cs665.assignment3.*;

public class TestNewCustomer {

    public TestNewCustomer() {}

    @Test
    public void testSetSubject() {
        NewCustomer customer = new NewCustomer();
        customer.setSubject();
        assertEquals("This email is for New Customer", customer.getSubject());
    }

    @Test
    public void testSetHeader() {
        NewCustomer customer = new NewCustomer();
        customer.setHeader();
        assertEquals("Dear New Customer:", customer.getHeader());
    }

    @Test
    public void testSetBody() {
        NewCustomer customer = new NewCustomer();
        customer.setBody();
        assertEquals("I'm writing this email is for the New customer, this is the body", customer.getBody());
    }

    @Test
    public void testSetFooter() {
        NewCustomer customer = new NewCustomer();
        customer.setFooter();
        assertEquals("Thank you, New Customer", customer.getFooter());
    }
}
