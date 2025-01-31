### SNORT Assignment Submission

#### Task 1: Detecting ICMP Flood

1. **Installation of Snort:**
   - To begin with, Snort was installed on the system using the command:
     ```bash
     sudo apt update && sudo apt install snort
     ```
   - This command updates the package list and installs Snort, ensuring that the latest version is available.

2. **Configuration and Rule Creation:**
   - After installation, the configuration directory for Snort was navigated to, and a local rule file named `local.rules` was created.
   - The rule added to this file was designed to detect ICMP floods:
     ```bash
     alert icmp any any -> any any (msg: "ICMP Flood Detected"; sid:1000801; rev:1;)
     ```
   - This rule triggers an alert whenever ICMP traffic is detected, which is useful for identifying potential ICMP flood attacks.

3. **Editing `snort.conf`:**
   - The `snort.conf` file was edited to include the newly created `local.rules` file:
     ```bash
     include /etc/snort/rules/local.rules
     ```
   - This ensures that Snort will use the custom rules defined in `local.rules` during its operation.

4. **Running Snort in NIDS Mode:**
   - Snort was then run in Network Intrusion Detection System (NIDS) mode using the command:
     ```bash
     sudo snort -i emp8s3 -c /etc/snort/snort.conf -A console
     ```
   - This command initializes Snort with the specified configuration file and outputs alerts to the console.

5. **Generating ICMP Traffic:**
   - ICMP traffic was generated using the `ping` command to test the rule:
     ```bash
     ping <target-IP>
     ```
   - The alert "ICMP Flood Detected" was successfully triggered, confirming that the rule works as intended.

#### Task 2: Detecting HTTP Traffic

1. **Editing the Local Rules File:**
   - The `local.rules` file was further edited to add a rule for capturing HTTP traffic:
     ```bash
     alert tcp any any -> any 80 (msg:"HTTP Traffic Detected"; sid:1000002; rev:1;)
     ```
   - This rule is designed to alert whenever TCP traffic on port 80 (HTTP) is detected.

2. **Visiting an HTTP Website:**
   - A web browser was used to visit an HTTP website, generating HTTP traffic.

3. **Running Snort in NIDS Mode Again:**
   - Snort was run again in NIDS mode using the same command as before:
     ```bash
     sudo snort -i emp8s3 -c /etc/snort/snort.conf -A console
     ```

4. **Observing Alerts:**
   - The console was monitored for alerts indicating HTTP traffic. The alert "HTTP Traffic Detected" was observed, confirming that the rule for HTTP traffic detection is functioning correctly.

### Conclusion
Both tasks were successfully completed, demonstrating the ability to configure Snort for detecting specific types of network traffic. The rules for ICMP flood and HTTP traffic detection were effectively implemented and tested, providing valuable insights into network monitoring and intrusion detection using Snort.
