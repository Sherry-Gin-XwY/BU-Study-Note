package edu.bu.met.cs665;

import static org.junit.Assert.assertEquals;
import org.junit.Test;
import edu.bu.met.cs665.assignment3.*;

public class TestVIPCustomer {

    public TestVIPCustomer() {}

    @Test
    public void testSetSubject() {
        VIPCustomer customer = new VIPCustomer();
        customer.setSubject();
        assertEquals("This email is for VIP Customer", customer.getSubject());
    }

    @Test
    public void testSetHeader() {
        VIPCustomer customer = new VIPCustomer();
        customer.setHeader();
        assertEquals("Dear VIP Customer:", customer.getHeader());
    }

    @Test
    public void testSetBody() {
        VIPCustomer customer = new VIPCustomer();
        customer.setBody();
        assertEquals("I'm writing this email is for the VIP customer, this is the body", customer.getBody());
    }

    @Test
    public void testSetFooter() {
        VIPCustomer customer = new VIPCustomer();
        customer.setFooter();
        assertEquals("Thank you, VIP Customer", customer.getFooter());
    }


}