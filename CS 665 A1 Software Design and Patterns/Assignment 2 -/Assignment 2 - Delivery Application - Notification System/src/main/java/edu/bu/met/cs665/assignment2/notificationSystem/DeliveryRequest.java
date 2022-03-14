package edu.bu.met.cs665.assignment2.notificationSystem;

public class DeliveryRequest extends NotificationSystem{
    public void needDeliveryRequest(Shop shop) {
        for (TaxiDriver obs: taxiDriversList) {
            ((TaxiDriver) obs).response(shop);
        }
    }
}
