Here is the first portion of the text with redundancy removed:  

---

## **Connectivity Technologies – Part II**  
**Dr. Sudip Misra**  
Associate Professor, Department of Computer Science and Engineering, IIT Kharagpur  
Email: smisra@sit.iitkgp.ernet.in | Website: [IIT Kharagpur](http://cse.iitkgp.ac.in/~smisra/)  

### **6LoWPAN**  
- Low-power Wireless Personal Area Networks over IPv6.  
- Enables small devices with limited processing power to transmit data wirelessly using Internet protocols.  
- Connects low-power devices to the Internet.  
- Created by the IETF (RFC 5933, RFC 4919).  

### **Features**  
- Supports IEEE 802.15.4 radios carrying 128-bit IPv6 addresses.  
- Uses header compression and address translation for Internet access.  
- IPv6 packets are compressed and reformatted for IEEE 802.15.4 packet format.  
- Applications: IoT, Smart Grid, and M2M.  

### **Addressing**  
- **64-bit addresses**: Globally unique.  
- **16-bit addresses**: PAN-specific, assigned by the PAN coordinator.  
- **IPv6 multicast**: Not supported by IEEE 802.15.4.  

### **Packet Format (IEEE 802.15.4 & IPv6)**  
Includes **flags, DSN, PAN ID, source/destination addresses, flow label, hop limit, and traffic class**.  

### **Routing Considerations**  
**Protocols**:  
- **LOADng**: Mesh routing within the PAN space.  
- **RPL**: Routing between IPv6 and PAN domain.  

---

### **LOADng Routing**  
Derived from AODV and optimized for IoT.  

**Operations:**  
1. **Route Discovery**: Originators send Route Requests (RREQs) to find a path.  
2. **Route Reply (RREP)**: Sent upon reaching the destination.  
3. **Route Error (RERR)**: Sent when a route breaks.  

**Features:**  
- Optimized flooding reduces overhead.  
- Only the destination responds to RREQs.  
- Intermediate routers cannot respond to RREQs.  
- Uses a monotonically increasing sequence number for RREQ/RREP.  

---

### **RPL Routing**  
- Distance Vector IPv6 routing protocol for lossy, low-power networks.  
- Maintains topology via low-rate beaconing.  
- Increases beaconing rate upon detecting inconsistencies.  
- Routing info included in datagrams.  

**Optimization Goals:**  
- Minimize energy usage.  
- Reduce latency.  
- Ensure power and bandwidth constraints are met.  

**Security:**  
- Supports message confidentiality, integrity, and loop detection.  

---

### **RFID (Radio Frequency Identification)**  
- Uses radio waves to encode and transmit data via RFID tags.  
- Does not require line-of-sight like barcodes.  

**Features:**  
- Contains an **integrated circuit and an antenna**.  
- Tags are either **passive (require reader power) or active (have an internal power source)**.  

**Applications:**  
- Inventory and asset tracking.  
- Personnel identification.  
- Access control.  
- Supply chain management.  
- Counterfeit prevention (e.g., pharmaceuticals).  

---

Let me know when to continue.
