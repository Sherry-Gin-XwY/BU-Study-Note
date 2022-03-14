package edu.bu.met.cs665;

import static org.junit.Assert.assertEquals;
import org.junit.Test;
import edu.bu.met.cs665.assignment3.*;

public class TestFrequentCustomer {

    public TestFrequentCustomer() {}
    
    @Test
    public void testSetSubject() {
        FrequentCustomer customer = new FrequentCustomer();
        customer.setSubject();
        assertEquals("This email is for Frequent Customer", customer.getSubject());
    }

    @Test
    public void testSetHeader() {
        FrequentCustomer customer = new FrequentCustomer();
        customer.setHeader();
        assertEquals("Dear Frequent Customer:", customer.getHeader());
    }

    @Test
    public void testSetBody() {
        FrequentCustomer customer = new FrequentCustomer();
        customer.setBody();
        assertEquals("I'm writing this email is for the Frequent customer, this is the body", customer.getBody());
    }

    @Test
    public void testSetFooter() {
        FrequentCustomer customer = new FrequentCustomer();
        customer.setFooter();
        assertEquals("Thank you, Frequent Customer", customer.getFooter());
    }
}
