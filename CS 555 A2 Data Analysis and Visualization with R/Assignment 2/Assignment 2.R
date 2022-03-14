# Import the data
setwd("C:/Users/XuWei/OneDrive/BU - Boston University/04 - 2022 Spring Semester/MET CS 555 A2 Data Analysis and Visualization with R/Assignment 2")
data <- read.csv("Date Set for Assignment 2.csv", header = TRUE)
head(data)

participants <- data$CalorieIntakeforparticipants
nonParticipants <- data$CalorieIntakeforNon.participants

# (1)
# Summarize the data by whether children participated in the meal preparation or not. Use an
#   appropriately labelled table show the results. Also include a graphical presentation that shows
#   the distribution of calories for participants vs. non-participants. Describe the shape of each
#   distribution and comment on the similarity (or lack thereof) between the distributions in each
#   population.


summary(participants)
summary(nonParticipants)

par(mfrow = c(1, 2))
hist(participants)
hist(nonParticipants)

# (2)
# Does the mean calories consumption for those who participated in the mean preparation differ from
#   425? Formally test at the alpha - 0.05 level using the 5 steps outlined in the module. (6 points)
t.test(participants, mu=425)

# (3)
# Calculate a 90% confidence interval for the mean calorie intake for participants in the meal
#   preparation. Interpret the confidence interval. (4 points)
t.test(participants, conf.level = 0.9)

# (4)
# Formally test whether or not participants consumed more calories than non-participants at the alpha
#   = 0.05 level using the 5 steps outlined in the module. (6 points)
t.test(participants, nonParticipants, alternative = "greater")

# (5)
# Are the assumptions of the test used in (4) met? How do you know? (2 points)
diff <- participants - nonParticipants
hist(diff)


