package edu.bu.met.cs665;

import static org.junit.Assert.assertEquals;
import org.junit.Test;
import edu.bu.met.cs665.assignment3.*;

public class TestReturningCustomer {

    public TestReturningCustomer() {}

    @Test
    public void testSetSubject() {
        ReturningCustomer customer = new ReturningCustomer();
        customer.setSubject();
        assertEquals("This email is for Returning Customer", customer.getSubject());
    }

    @Test
    public void testSetHeader() {
        ReturningCustomer customer = new ReturningCustomer();
        customer.setHeader();
        assertEquals("Dear Returning Customer:", customer.getHeader());
    }

    @Test
    public void testSetBody() {
        ReturningCustomer customer = new ReturningCustomer();
        customer.setBody();
        assertEquals("I'm writing this email is for the Returning customer, this is the body", customer.getBody());
    }

    @Test
    public void testSetFooter() {
        ReturningCustomer customer = new ReturningCustomer();
        customer.setFooter();
        assertEquals("Thank you, Returning Customer", customer.getFooter());
    }


}