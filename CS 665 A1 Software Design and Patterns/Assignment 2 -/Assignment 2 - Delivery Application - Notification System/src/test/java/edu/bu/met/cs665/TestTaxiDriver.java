package edu.bu.met.cs665;

import static org.junit.Assert.assertEquals;
import org.junit.Test;
import edu.bu.met.cs665.assignment2.notificationSystem.*;


// Write some Unit tests for my program like the following
public class TestTaxiDriver {

    // Test the taxiDriver class
    public TestTaxiDriver() {}


    @Test
    public void testGetTaxiDriverName() {
        TaxiDriver testDriver = new TaxiDriver("Weiye", "Xu", "BMW");
        assertEquals("Weiye", testDriver.getTaxiDriverFirstName());
        assertEquals("Xu", testDriver.getTaxiDriverLastName());
    }

    @Test
    public void testSetTaxiDriverName() {
        TaxiDriver testDriver = new TaxiDriver("Weiye", "Xu", "BMW");
        testDriver.setTaxiDriverName("Sherry", "Gin");
        assertEquals("Sherry", testDriver.getTaxiDriverFirstName());
        assertEquals("Gin", testDriver.getTaxiDriverLastName());
    }

    @Test
    public void testGetVehicleBrand() {
        TaxiDriver testDriver = new TaxiDriver("Weiye", "Xu", "BMW");
        assertEquals("BMW", testDriver.getVehicleBrand());
    }

    @Test
    public void testSetVehicleBrand() {
        TaxiDriver testDriver = new TaxiDriver("Weiye", "Xu", "BMW");
        testDriver.setVehicleBrand("Subaru");
        assertEquals("Subaru", testDriver.getVehicleBrand());
    }

}
