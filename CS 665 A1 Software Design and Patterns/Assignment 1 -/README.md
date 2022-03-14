# Project Template

I tried to design the system in a modular way, breaking down projects into smaller parts to allow them to perform different functions separately. For example, I tried to use the type of beverage to distinguish coffee and tea, because according to the description, sugar and milk can only be used for coffee, and the type distinction will be conducive to the availability of the method of adding sugar and milk. At the same time, it also prepares for the need to implement different brewing methods in the future. New drink types can also be added to DrinkType in the future when new drink types are added or removed.

In the brewing process, I also tried to manage the brewing methods of coffee and tea separately, but I think the current complexity is a little high, and variables and methods are often repeated, so the implementation process is simplified.


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
mvn -q clean compile exec:java -Dexec.executable="edu.bu.met.cs665.assignment1.beverageMachine.Main" -Dlog4j.configuration="file:log4j.properties"
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
