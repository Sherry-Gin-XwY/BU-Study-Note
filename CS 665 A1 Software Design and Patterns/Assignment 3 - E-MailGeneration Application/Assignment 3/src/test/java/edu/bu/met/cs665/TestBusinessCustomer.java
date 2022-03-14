package edu.bu.met.cs665;

import static org.junit.Assert.assertEquals;
import org.junit.Test;
import edu.bu.met.cs665.assignment3.*;

public class TestBusinessCustomer {

    public TestBusinessCustomer() {}

    @Test
    public void testSetSubject() {
        BusinessCustomer customer = new BusinessCustomer();
        customer.setSubject();
        assertEquals("This email is for Business Customer", customer.getSubject());
    }

    @Test
    public void testSetHeader() {
        BusinessCustomer customer = new BusinessCustomer();
        customer.setHeader();
        assertEquals("Dear business Customer:", customer.getHeader());
    }

    @Test
    public void testSetBody() {
        BusinessCustomer customer = new BusinessCustomer();
        customer.setBody();
        assertEquals("I'm writing this email is for the business customer, this is the body", customer.getBody());
    }

    @Test
    public void testSetFooter() {
        BusinessCustomer customer = new BusinessCustomer();
        customer.setFooter();
        assertEquals("Thank you, business Customer", customer.getFooter());
    }


}