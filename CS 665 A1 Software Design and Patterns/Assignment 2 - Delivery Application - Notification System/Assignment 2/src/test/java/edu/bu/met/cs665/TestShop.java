package edu.bu.met.cs665;

import static org.junit.Assert.assertEquals;
import org.junit.Test;
import edu.bu.met.cs665.assignment2.notificationSystem.*;

// Write some Unit tests for my program like the following
public class TestShop {

    // Test the Shop class
    public TestShop() {}

    @Test
    public void testGetShopName() {
        Shop testShop = new Shop("testShopName");
        assertEquals("testShopName", testShop.getShopName());
    }

    @Test
    public void testSetShopName() {
        Shop testShop = new Shop("testShopName");
        testShop.setShopName("changedShopName");
        assertEquals("changedShopName", testShop.getShopName());
    }


}
