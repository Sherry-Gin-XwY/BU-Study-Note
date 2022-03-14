# Import Data
setwd("C:/Users/XuWei/OneDrive/BU - Boston University/04 - 2022 Spring Semester/MET CS 555 A2 Data Analysis and Visualization with R/Lab 1 - Session 3 (Group work)")
bp <- read.csv("Lab2Data_CouplesAge.csv", header = TRUE, fileEncoding = "UTF-8-BOM")
head(bp)

wifeAge <- bp$Age_of_Wife
husbandAge <- bp$Age_of_Husband

t.test(wifeAge, husbandAge, conf.level = 0.95)

# Build a linear model to predict age of a husband as a function of the wife.
p <- as.data.frame(53)
colnames(p) <- "wifeAge"

# Calculating the correlation between Age and Blood pressure
cor(bp$Age_of_Husband, bp$Age_of_Wife)

# Creating a Linear regression model
model <- lm(husbandAge ~ wifeAge, data = bp)
# Summary of our linear regression model
summary(model)

predict(model, newdata = p)
