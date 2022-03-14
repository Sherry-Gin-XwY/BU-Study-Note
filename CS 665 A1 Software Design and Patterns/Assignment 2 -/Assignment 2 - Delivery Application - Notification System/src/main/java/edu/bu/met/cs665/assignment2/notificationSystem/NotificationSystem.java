package edu.bu.met.cs665.assignment2.notificationSystem;
import java.util.*;

abstract class NotificationSystem {

    // hash map for shop which received request by driver, and start to deliver (not used)
    // protected Map<TaxiDriver, Shop> taxiDriversLinkShop = new HashMap<TaxiDriver, Shop>();

    // List for all the taxiDriver
    protected List<TaxiDriver> taxiDriversList = new ArrayList<TaxiDriver>();

    // method for adding observer
    public void add (TaxiDriver taxiDriver) {
        taxiDriversList.add(taxiDriver);
    }

    // method for deleting observer
    public void remove (TaxiDriver taxiDriver) {
        taxiDriversList.remove(taxiDriver);
    }

    // behavior for sending notification to all the tax driver for a shop
    public abstract void needDeliveryRequest (Shop shop);

}
