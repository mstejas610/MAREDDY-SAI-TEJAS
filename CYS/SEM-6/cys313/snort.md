### SNORT Assignment Documentation

#### 1. Installation of Snort
To begin, Snort was installed on the system using the following command:
```bash
sudo apt update && sudo apt install snort
```
This command updates the package list and installs Snort, an open-source network intrusion detection system (NIDS).

#### 2. Configuration and Rule Creation
After installation, the next step was to navigate to Snort's configuration directory and create a local rule file. The command used was:
```bash
sudo nano /etc/snort/rules/local.rules
```
In this file, a rule was added to detect ICMP flood attacks:
```bash
alert icmp any any -> any any (msg: "ICMP Flood Detected"; sid:1000801; rev:1;)
```
This rule generates an alert whenever ICMP traffic is detected.

#### 3. Editing the Snort Configuration File
The `snort.conf` file was then edited to include the newly created local rules file. The following line was added:
```bash
include /etc/snort/rules/local.rules
```
This ensures that Snort will use the local rules during its operation.

#### 4. Running Snort in NIDS Mode
Snort was run in Network Intrusion Detection System (NIDS) mode using the command:
```bash
sudo snort -i emp8s3 -c /etc/snort/snort.conf -A console
```
This command initializes Snort with the specified configuration file and outputs alerts to the console.

#### 5. Generating ICMP Traffic and Verifying Alerts
To test the ICMP flood detection rule, ICMP traffic was generated using the `ping` command. The alert "ICMP Flood Detected" was successfully triggered, confirming that the rule works as intended.

#### 6. Adding a Rule for HTTP Traffic
Next, a rule was added to detect HTTP traffic by editing the `local.rules` file:
```bash
alert tcp any any -> any 80 (msg:"HTTP Traffic Detected"; sid:1000002; rev:1;)
```
This rule generates an alert whenever HTTP traffic on port 80 is detected.

#### 7. Testing the HTTP Traffic Rule
A web browser was used to visit an HTTP website, and Snort was run again in NIDS mode. The console successfully displayed alerts indicating the detection of HTTP traffic.

#### Conclusion
This assignment demonstrated the process of installing Snort, creating custom rules, and verifying their functionality by generating and detecting specific types of network traffic. The successful triggering of alerts for both ICMP and HTTP traffic confirms that Snort is correctly configured and operational.
