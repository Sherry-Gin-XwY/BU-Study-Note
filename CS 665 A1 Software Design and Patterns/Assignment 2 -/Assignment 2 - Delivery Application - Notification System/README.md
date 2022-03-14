# Project Description

This is my design for the assignment2 notification System. 
Since we need to notice all the driver when we need a delivery request.
I would like to use to Observe Pattern as my project pattern.

I created the shop and driver as independent class,
so that I can add as many taxiDriver and shop as I want. 
When I have new driver, I can use the method add driver to add it to our notification System,
then he also can receive our notification.

When I have a now shop, just create a new shop object, 
and use the needDeliveryRequest() method which builtin the notification System, and use the shop object as the param, 
to send the notification to all the driver object.

NotificationSystem also is an independent class, so that I can make a lot of different notification System, 
this can be easy to manage different kind of notification system for different specific area.

![Assignment2 UML](Software%20Design%20and%20Patterns%20-%20Assignment2.jpeg)


# How to compile the project

We use Apache Maven to compile and run this project. 

You need to install Apache Maven (https://maven.apache.org/)  on your system. 

Type on the command line: 

```bash
mvn clean compile
```

# How to create a binary runnable package 


```bash
mvn clean compile assembly:single
```


# How to run

```bash
mvn -q clean compile exec:java -Dexec.executable="edu.bu.met.cs665.assignment2.notificationSystem" -Dlog4j.configuration="file:log4j.properties"
```

# Run all the unit test classes.


```bash
mvn clean compile test checkstyle:check  spotbugs:check
```

# Using Spotbugs to find bugs in your project 

To see bug detail using the Findbugs GUI, use the following command "mvn findbugs:gui"

Or you can create a XML report by using  


```bash
mvn spotbugs:gui 
```

or 


```bash
mvn spotbugs:spotbugs
```


```bash
mvn spotbugs:check 
```

check goal runs analysis like spotbugs goal, and make the build failed if it found any bugs. 


For more info see 
https://spotbugs.readthedocs.io/en/latest/maven.html


SpotBugs https://spotbugs.github.io/ is the spiritual successor of FindBugs.


# Run Checkstyle 

CheckStyle code styling configuration files are in config/ directory. Maven checkstyle plugin is set to use google code style. 
You can change it to other styles like sun checkstyle. 

To analyze this example using CheckStyle run 

```bash
mvn checkstyle:check
```

This will generate a report in XML format


```bash
target/checkstyle-checker.xml
target/checkstyle-result.xml
```

and the following command will generate a report in HTML format that you can open it using a Web browser. 

```bash
mvn checkstyle:checkstyle
```

```bash
target/site/checkstyle.html
```




