package edu.bu.met.cs665.assignment2.notificationSystem;

// Create the Shop class
public class Shop {

    public String shopName;

    /**
     * Create a shop object using shopName
     *
     * @param shopName the name of the shop object
     */
    public Shop(String shopName) {
        this.shopName = shopName;
    }

    /**
     * Getter method for name of the shop
     * @return
     */
    public String getShopName() {
        return this.shopName;
    }

    /**
     * Setter method for name of the shop
     * @return
     */
    public void setShopName(String shopName) {
        this.shopName = shopName;
    }

}


