package edu.bu.met.cs665.assignment2.notificationSystem;


public class TaxiDriver implements TaxiDriverInterface {

    public String taxiDriverFirstName;
    public String taxiDriverLastName;
    public String vehicleBrand;

    /**
     * Create a taxiDriver object using taxiDriverName, vehicleBrand
     *
     * @param taxiDriverFirstName the first name of the taxi Driver
     * @param taxiDriverLastName the last name of the taxi Driver
     * @param vehicleBrand the vehicle brand of the taxi Driver
     */
    public TaxiDriver(String taxiDriverFirstName, String taxiDriverLastName, String vehicleBrand) {
        this.taxiDriverFirstName =taxiDriverFirstName;
        this.taxiDriverLastName =taxiDriverLastName;
        this.vehicleBrand = vehicleBrand;
    }

    /**
     * Getter method for taxiDriverName
     * @return
     */
    public String getTaxiDriverFirstName() {
        return this.taxiDriverFirstName;
    }


    /**
     * Getter method for taxiDriverName
     * @return
     */
    public String getTaxiDriverLastName() {
        return this.taxiDriverLastName;
    }

    /**
     * Setter method for taxiDriverName
     * @return
     */
    public void setTaxiDriverName(String taxiDriverFirstName, String taxiDriverLastName) {
        this.taxiDriverFirstName = taxiDriverFirstName;
        this.taxiDriverLastName = taxiDriverLastName;
    }

    /**
     * Getter method for vehicleBrand
     * @return
     */
    public String getVehicleBrand() {
        return this.vehicleBrand;
    }

    /**
     * Setter method for vehicleBrand
     * @return
     */
    public void setVehicleBrand(String vehicleBrand) {
        this.vehicleBrand = vehicleBrand;
    }

    //TODO: Override the method for a better description
    @Override
    public String toString() {
        return "TODO: String";
    }

    public void response(Shop shop) {
        System.out.println(this.getTaxiDriverFirstName() + " " + this.getTaxiDriverLastName() + " received delivery request notification for Shop: " + shop.getShopName());
    }


}
