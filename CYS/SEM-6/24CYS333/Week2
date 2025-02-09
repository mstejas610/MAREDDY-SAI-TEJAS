Here is the text extracted from the file with redundancy to maximize content coverage:

---

# **Connectivity Technologies – Part II**  
**Dr. Sudip Misra**  
Associate Professor  
Department of Computer Science and Engineering  
IIT KHARAGPUR  
Email: smisra@sit.iitkgp.ernet.in  
Website: [http://cse.iitkgp.ac.in/~smisra/](http://cse.iitkgp.ac.in/~smisra/)  

---

## **Introduction to Internet of Things**  

---

## **6LoWPAN**  

### **Introduction**  
- **6LoWPAN**: **Low-power Wireless Personal Area Networks over IPv6.**  
- Allows small devices with **limited processing ability** to **transmit information wirelessly** using an Internet protocol.  
- **Enables low-power devices** to connect to the **Internet**.  
- Created by the **Internet Engineering Task Force (IETF)** – **RFC 5933** and **RFC 4919**.  

**Source:**  
T. Winter, P. Thubert, A. Brandt, J. Hui, R. Kelsey, P. Levis, K. Pister, R. Struik, JP. Vasseur, R. Alexander, “RPL: IPv6 Routing Protocol for Low-Power and Lossy Networks”, IETF, Standards Track, Mar. 2012.  

---

### **Features of 6LoWPANs**  
- **Allows IEEE 802.15.4 radios** to carry **128-bit addresses** of **IPv6**.  
- **Header compression** and **address translation techniques** enable IEEE 802.15.4 radios to access the Internet.  
- **IPv6 packets** are compressed and reformatted to fit the **IEEE 802.15.4 packet format**.  
- **Applications include:**  
  - **IoT (Internet of Things)**  
  - **Smart Grid**  
  - **M2M (Machine-to-Machine) Communication**  

---

### **Addressing in 6LoWPAN**  
#### **Addressing Types**  
- **64-bit Extended Addresses**: **Globally unique.**  
- **16-bit Short Addresses**: **PAN-specific; assigned by the PAN coordinator.**  
- **IPv6 multicast is not supported by 802.15.4.**  
- **IPv6 packets** are carried as **link-layer broadcast frames**.  

---

### **6LoWPAN Packet Format**  
#### **IEEE 802.15.4 Fields**  
- **Flags, DSN, Length, PAN ID, Destination (64-bit), Source (64-bit).**  

#### **IPv6 Fields**  
- **Version, Traffic Class, Flow Label, Payload Length, Next Header, Hop Limit, Source Address (128-bit), Destination Address (128-bit).**  

---

### **Header Types**  
#### **1. Dispatch Header**  
- **Initiates communication** and **identifies the next header type.**  
- **Dispatch Field:** 6 bits.  
- **Type-Specific Header:** Determined by **Dispatch Header**.  

#### **2. Mesh Addressing Header**  
- **Used for mesh routing.**  
- Includes fields like **V, F, Hops Left, Originator Address, and Final Address.**  

#### **3. Fragmentation Header**  
- **Used for fragmenting large packets** into **smaller ones for transmission.**  

---

### **6LoWPAN Routing Considerations**  
- **Routing Protocols Used:**  
  - **LOADng (Lightweight On-demand Ad hoc Distance-vector Routing Protocol – Next Generation)**  
  - **RPL (IPv6 Routing Protocol for Low-Power and Lossy Networks)**  

---

### **LOADng Routing**  
- Derived from **AODV** and **extended for use in IoT**.  
- **Basic Operations:**  
  1. **Route Requests (RREQs):** Sent by a **LOADng Router** to **discover a route**.  
  2. **Route Replies (RREPs):** Sent upon **receipt of RREQs** to establish a route.  
  3. **Route Errors (RERRs):** Sent to **inform about broken routes**.  
- **Optimized flooding reduces overhead.**  
- **Only the destination responds to RREQs.**  
- **Intermediate routers are not allowed to respond.**  
- **RREQ/RREP messages have a unique, monotonically increasing sequence number.**  

---

### **RPL Routing**  
- **IPv6 distance-vector routing protocol** for **lossy and low-power networks**.  
- **Maintains topology using low-rate beaconing.**  
- **Beaconing rate increases** when **inconsistencies are detected** (e.g., **node failure**).  
- **Routing information included in datagrams.**  
- **Supports proactive routing for topology maintenance.**  
- **Supports reactive routing for resolving inconsistencies.**  

---

### **RFID (Radio-Frequency Identification)**  
- **RFID is a technology that uses electromagnetic fields** to **transfer data between a tag and a reader.**  
- **RFID tags store digital information,** which is **read by RFID readers**.  
- **Data can be read outside the line-of-sight**, unlike barcodes.  

#### **RFID Features**  
- **RFID Tag Components:**  
  - **Integrated circuit (IC).**  
  - **Antenna (for communication).**  
  - **Protective casing (for durability).**  
- **Types of RFID Tags:**  
  1. **Passive Tags:** No internal power source; **powered by reader’s electromagnetic field**.  
  2. **Active Tags:** Have a **built-in battery** and **transmit signals on their own**.  

---

### **Working Principle of RFID**  
- **Uses Automatic Identification and Data Capture (AIDC) technology.**  
- **Main Components:**  
  1. **RFID tag (smart label).**  
  2. **RFID reader.**  
  3. **Antenna.**  

#### **Applications of RFID**  
- **Inventory management.**  
- **Asset tracking.**  
- **Personnel tracking.**  
- **Access control in restricted areas.**  
- **Supply chain management.**  
- **Counterfeit prevention (e.g., in pharmaceuticals).**  

---

### **Basics of IoT Networking – Part II**  
#### **Functionality-Based IoT Protocol Organization**  
- **Connectivity:** 6LoWPAN, RPL  
- **Identification:** EPC, uCode, IPv6, URIs  
- **Communication/Transport:** WiFi, Bluetooth, LPWAN  
- **Discovery:** Physical Web, mDNS, DNS-SD  
- **Data Protocols:** MQTT, CoAP, AMQP, WebSocket, Node  
- **Device Management:** TR-069, OMA-DM  
- **Semantic:** JSON-LD, Web Thing Model  
- **Multi-layer Frameworks:** AllJoyn, IoTivity, Weave, Homekit  

---

### **MQTT (Message Queue Telemetry Transport)**  
- **Lightweight messaging protocol** designed for **low-bandwidth, high-latency, and unreliable networks**.  
- **Based on a Publish-Subscribe model.**  
- **Used in IoT, remote sensors, and cloud-based communication.**  

#### **MQTT Components**  
1. **Publishers:** Devices that send sensor data.  
2. **Brokers:** Intermediary that **classifies and distributes data**.  
3. **Subscribers:** Applications that receive data from publishers.  

#### **MQTT Methods**  
- **Connect, Disconnect, Subscribe, Unsubscribe, Publish.**  

#### **Applications of MQTT**  
- **Facebook Messenger.**  
- **Amazon Web Services IoT.**  
- **Microsoft Azure IoT Hub.**  
- **EVRYTHNG IoT platform.**  
- **Adafruit IO.**  

---
Continuing with the detailed extraction of the text:

---

### **SMQTT (Secure MQTT)**  
- **An extension of MQTT** with **lightweight attribute-based encryption**.  
- **Supports broadcast encryption**, where one **message is encrypted and sent to multiple nodes**.  
- **Security Phases:**  
  1. **Setup:** Publishers and subscribers register with the broker.  
  2. **Encryption:** Data is encrypted before publishing.  
  3. **Publish:** Broker sends the encrypted message.  
  4. **Decryption:** Subscribers decrypt the message using their **master secret key**.  
- **Encryption methods are not standardized**, making implementation flexible.  

**Source:**  
M. Singh, M. Rajan, V. Shivraj, and P. Balamuralidhar, "Secure MQTT for Internet of Things (IoT)," in Fifth International Conference on Communication Systems and Network Technologies (CSNT 2015), April 2015, pp. 746-751.  

---

## **CoAP (Constrained Application Protocol)**  
### **Introduction**  
- **CoAP is a lightweight web transfer protocol** for **constrained nodes and networks**.  
- **Designed for M2M applications** (e.g., **smart energy, building automation**).  
- **Based on a request-response model over UDP** (User Datagram Protocol).  
- **Developed by the IETF CoRE (Constrained RESTful Environments) working group**.  
- **Similar to HTTP but optimized for low-power devices**.  

**Source:**  
Z. Shelby, K. Hartke, C. Bormann, "The Constrained Application Protocol (CoAP)," Internet Engineering Task Force (IETF), Standards Track, 2014.  

---

### **CoAP Features**  
- **Lightweight RESTful interface** with reduced overhead.  
- **Supports URL and content-type standards.**  
- **Resource discovery and subscription.**  
- **Push notifications.**  
- **Simple caching based on message age.**  
- **Built over UDP instead of TCP** (more suitable for IoT).  

#### **CoAP Messaging Model**  
- **Messaging Layer:** Ensures **reliable transmission and duplication control**.  
- **Request/Response Layer:** Handles **client-server communication**.  
- **Supports four message types:**  
  1. **Confirmable (reliable).**  
  2. **Non-confirmable (unreliable).**  
  3. **Piggyback (immediate response in acknowledgment message).**  
  4. **Separate (response sent separately after acknowledgment).**  

#### **Request-Response Model**  
- **GET, POST, PUT, DELETE** operations similar to HTTP.  
- **Confirmable messages** ensure **acknowledgment of reception**.  
- **Non-confirmable messages** are for **fast, unreliable transmission**.  

**Source:**  
V. Karagiannis, P. Chatzimisios, F. Vazquez-Gallego, and J. Alonso-Zarate, "A survey on application layer protocols for the Internet of Things," Transaction on IoT and Cloud Computing, vol. 3, no. 1, pp. 11-17, 2015.  

---

## **XMPP (Extensible Messaging and Presence Protocol)**  
### **Introduction**  
- **XMPP is a communication protocol** for **message-oriented middleware**.  
- **Uses XML (Extensible Markup Language)** for **real-time structured data exchange**.  
- **Originally designed for instant messaging**, now **used in IoT applications**.  

**Source:** "XMPP," Wikipedia (Online).  

---

### **XMPP Features**  
- **Decentralized:** No central server is required.  
- **Open Standard:** No royalties or licensing fees.  
- **Security:** Supports authentication and encryption.  
- **Flexibility:** Can be used in **peer-to-peer and machine-to-machine communication**.  
- **Service Discovery:** Locates **available services across a network**.  

#### **Core XMPP Technologies**  
| Feature | Description |  
|---------|------------|  
| **Jingle** | Multimedia signaling (voice, video, file transfer). |  
| **Multi-user Chat** | Enables multi-party communication. |  
| **PubSub (Publish-Subscribe)** | Alerts and notifications for IoT. |  
| **BOSH (Bidirectional Streams Over Synchronous HTTP)** | HTTP binding for XMPP. |  

**Source:** "XMPP: Technology Overview," XMPP.org (Online).  

---

### **XMPP Weaknesses**  
- **No Quality of Service (QoS) support.**  
- **Higher network overhead due to XML-based text communication.**  
- **Binary data must be encoded in Base64 before transmission**, adding **extra processing overhead**.  

#### **Applications of XMPP**  
- **IoT-based publish-subscribe systems.**  
- **VoIP signaling (Voice over Internet Protocol).**  
- **File transfer and gaming.**  
- **Social networking services.**  
- **Smart grid applications.**  

---

## **AMQP (Advanced Message Queuing Protocol)**  
### **Introduction**  
- **AMQP is an open-standard binary application layer protocol** for **message-oriented middleware.**  
- **Designed for business message passing** between **applications or organizations**.  
- **Developed by OASIS and standardized as ISO/IEC 19464.**  

**Source:** "Advanced Message Queuing Protocol," Wikipedia (Online).  

---

### **AMQP Features**  
- **Security:** Supports authentication and encryption.  
- **Reliability:** Ensures message delivery with acknowledgments.  
- **Interoperability:** Works across multiple systems.  
- **Routing:** Allows messages to be routed based on predefined rules.  
- **Queuing:** Supports message queues for asynchronous communication.  

#### **AMQP Message Delivery Guarantees**  
1. **At-most-once:** Message is delivered once or not at all.  
2. **At-least-once:** Message is always delivered but may be duplicated.  
3. **Exactly-once:** Message is delivered only once, ensuring data consistency.  

---

### **AMQP Frame Types**  
| Frame Type | Description |  
|------------|-------------|  
| **Open** | Establishes a connection. |  
| **Begin** | Opens a session. |  
| **Attach** | Initiates a new link. |  
| **Transfer** | Sends actual messages. |  
| **Flow** | Controls the message flow rate. |  
| **Disposition** | Updates the state of message transfers. |  
| **Detach** | Terminates a link. |  
| **End** | Closes a session. |  
| **Close** | Terminates a connection. |  

---

### **AMQP Components**  
- **Queue:** Stores messages for different business processes.  
- **Exchange:** Routes messages to appropriate queues.  
- **Bindings:** Define rules for message distribution.  

#### **Types of AMQP Exchanges**  
- **Direct Exchange:** Routes messages to specific queues.  
- **Fan-out Exchange:** Broadcasts messages to all queues.  
- **Topic Exchange:** Routes messages based on topic patterns.  
- **Header Exchange:** Routes messages based on header attributes.  

---

### **AMQP Applications**  
- **Global update sharing and monitoring.**  
- **Interconnecting different systems and business processes.**  
- **Asynchronous message processing.**  
- **Message queuing for IoT and enterprise applications.**  
- **High-reliability messaging solutions.**  

---
Continuing with the extracted text:

---

# **Connectivity Technologies – Part I**  
**Dr. Sudip Misra**  
Associate Professor  
Department of Computer Science and Engineering  
IIT KHARAGPUR  
Email: smisra@sit.iitkgp.ernet.in  
Website: [http://cse.iitkgp.ac.in/~smisra/](http://cse.iitkgp.ac.in/~smisra/)  

---

## **Communication Protocols in IoT**  
The following communication protocols are important for **consumer and industrial IoT**:  
- **IEEE 802.15.4**  
- **Zigbee**  
- **6LoWPAN**  
- **Wireless HART**  
- **Z-Wave**  
- **ISA 100**  
- **Bluetooth**  
- **NFC (Near Field Communication)**  
- **RFID (Radio-Frequency Identification)**  

---

## **IEEE 802.15.4**  
### **Features of IEEE 802.15.4**  
- **Standard for Low Data Rate Wireless Personal Area Networks (WPANs).**  
- **Developed for low-power, low-data-rate applications.**  
- **Uses PHY (Physical), MAC (Medium Access Control), LLC (Logical Link Control), and SSCS (Service Specific Convergence Sub-layer).**  
- **Operates in the ISM band (Industrial, Scientific, and Medical).**  
- **Uses Direct Sequence Spread Spectrum (DSSS) modulation.**  
- **Highly resistant to noise and interference.**  

**Source:**  
L. Fenzel, “What’s The Difference Between IEEE 802.15.4 And ZigBee Wireless?”, *Electronic Design* (Online), Mar. 2013.  

---

### **IEEE 802.15.4 Variants**  
| Variant | Use Case |  
|---------|----------|  
| **A/B** | Base version |  
| **C** | For China |  
| **D** | For Japan |  
| **E** | Industrial applications |  
| **F** | Active RFID use |  
| **G** | Smart utility networks (Smart Grids) |  

---

### **IEEE 802.15.4 Device Types**  
1. **Full Function Device (FFD):**  
   - Can communicate with all devices.  
   - Supports the full protocol stack.  
2. **Reduced Function Device (RFD):**  
   - Can only communicate with an FFD.  
   - Has lower power consumption.  
   - Requires minimal CPU/RAM.  

---

### **IEEE 802.15.4 Network Topologies**  
- **Star topology:** Devices communicate with a central **PAN Coordinator**.  
- **Mesh topology:** Devices communicate **directly or through multiple hops**.  
- **Cluster Tree topology:** Combines **both Star and Mesh** networking.  

---

### **IEEE 802.15.4 Frames**  
| Frame Type | Purpose |  
|------------|---------|  
| **Beacon Frame** | Synchronization and network discovery. |  
| **MAC Command Frame** | Used for network management. |  
| **Acknowledgment Frame** | Confirms message receipt. |  
| **Data Frame** | Carries actual information. |  

---

### **IEEE 802.15.4 Network Modes**  
1. **Beacon-enabled networks:**  
   - PAN Coordinator periodically sends **beacon messages**.  
   - Uses **slotted CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance)** for transmission.  
   - Beacons help synchronize devices.  

2. **Non-Beacon-enabled networks:**  
   - Devices use **un-slotted CSMA/CA** (contention-based).  
   - Beacons are used **only for link discovery**.  
   - Requires **source and destination addresses** for communication.  

---

## **Zigbee**  
### **Introduction to Zigbee**  
- **Most widely deployed enhancement of IEEE 802.15.4.**  
- **Works on layers 3 and above**, while IEEE 802.15.4 handles lower layers.  
- **Supports authentication, encryption, and routing.**  
- **Ideal for wireless sensor networks.**  

**Source:**  
L. Fenzel, “What’s The Difference Between IEEE 802.15.4 And ZigBee Wireless?”, *Electronic Design* (Online), Mar. 2013.  

---

### **Zigbee Network Topologies**  
- **Star:** Devices communicate through a **central coordinator**.  
- **Mesh:** Devices relay messages for each other, increasing reliability.  
- **Cluster Tree:** A hybrid of Star and Mesh topologies.  

---

### **Zigbee Device Types**  
1. **Zigbee Coordinator (ZC):**  
   - Forms the **root of the Zigbee network**.  
   - **Only one coordinator per network**.  
   - Stores network information and **acts as a security Trust Center**.  

2. **Zigbee Router (ZR):**  
   - **Forwards data** between nodes.  
   - Can run **applications and routing functions**.  

3. **Zigbee End Device (ZED):**  
   - **Consumes low power** and does not forward packets.  
   - **Ideal for battery-operated devices.**  

---

### **Zigbee Mesh Networking**  
- Any node can communicate **with any other node within range**.  
- Messages **hop through intermediate nodes** when necessary.  
- **Self-configuring and self-healing**: If a node fails, the network **automatically reroutes** traffic.  

---

### **Zigbee Applications**  
- **Building automation.**  
- **Remote control (RF4CE).**  
- **Smart energy monitoring.**  
- **Healthcare (medical and fitness monitoring).**  
- **Home automation.**  
- **LED lighting control (Zigbee Light Link).**  
- **Telecom services.**  

---

This concludes another section of the extracted content. Let me know when to **continue** by sending the command **"Continue"**. 🚀

Continuing with the extracted text:

---

## **WirelessHART**  
### **Introduction to WirelessHART**  
- **WirelessHART (Highway Addressable Remote Transducer) is an industrial wireless communication protocol.**  
- **Designed for process automation and control.**  
- **Based on IEEE 802.15.4, but with additional security and reliability enhancements.**  
- **Operates in the 2.4 GHz ISM band.**  

**Source:** *FieldComm Group, "WirelessHART Overview," Online Documentation.*  

---

### **Features of WirelessHART**  
- **Time Synchronized Mesh Protocol (TSMP):** Ensures reliable communication.  
- **Self-healing network:** Routes data dynamically.  
- **Strong security:**  
  - AES-128 encryption.  
  - Key management for secure communication.  
- **Low-power operation:**  
  - Designed for battery-powered field devices.  

---

### **WirelessHART Network Components**  
| Component | Function |  
|-----------|----------|  
| **Field Devices** | Wireless sensors and actuators that collect/process data. |  
| **Gateways** | Interface between **WirelessHART** and control systems. |  
| **Access Points** | Extend network range and reliability. |  
| **Network Manager** | Handles **scheduling, routing, and security**. |  
| **Security Manager** | Manages authentication and encryption keys. |  

---

### **WirelessHART Applications**  
- **Industrial automation.**  
- **Asset management.**  
- **Remote monitoring of hazardous environments.**  
- **Predictive maintenance.**  

---

## **Z-Wave**  
### **Introduction to Z-Wave**  
- **Z-Wave is a wireless communication protocol for home automation.**  
- **Uses sub-GHz radio frequencies (868 MHz in Europe, 915 MHz in the U.S.).**  
- **Designed for low-power, long-range communication.**  

**Source:** *Z-Wave Alliance, "Z-Wave Basics," Online Documentation.*  

---

### **Features of Z-Wave**  
- **Mesh networking:**  
  - Each device acts as a repeater.  
  - No single point of failure.  
- **Low power consumption:**  
  - Ideal for battery-powered devices.  
- **Secure communication:**  
  - AES-128 encryption for security.  
- **Simple network setup:**  
  - Devices can be added/removed dynamically.  

---

### **Z-Wave Network Components**  
| Component | Function |  
|-----------|----------|  
| **Z-Wave Controller** | Central device that manages communication. |  
| **Z-Wave Nodes** | Sensors, actuators, and other devices. |  

---

### **Z-Wave Applications**  
- **Smart lighting.**  
- **Security and surveillance.**  
- **Energy management.**  
- **Home automation (smart locks, thermostats, garage doors).**  

---

## **ISA 100**  
### **Introduction to ISA 100**  
- **ISA 100.11a is an industrial wireless standard.**  
- **Designed for process automation and control.**  
- **Supports IPv6 networking.**  
- **Developed by the International Society of Automation (ISA).**  

**Source:** *ISA, "ISA 100 Wireless Standard Overview," Online Documentation.*  

---

### **Features of ISA 100**  
- **Reliable and deterministic communication.**  
- **Secure AES-128 encryption.**  
- **Scalable for large networks.**  
- **Coexists with other wireless technologies.**  

---

### **ISA 100 Applications**  
- **Process control in oil, gas, and chemical industries.**  
- **Remote asset monitoring.**  
- **Pipeline monitoring.**  
- **Safety-critical systems.**  

---

## **Near Field Communication (NFC)**  
### **Introduction to NFC**  
- **NFC is a short-range wireless technology.**  
- **Operates at 13.56 MHz.**  
- **Enables communication between devices within 10 cm.**  
- **Used for contactless payments, authentication, and data exchange.**  

**Source:** *NFC Forum, "NFC Basics," Online Documentation.*  

---

### **Features of NFC**  
- **Fast and secure communication.**  
- **Works in three modes:**  
  1. **Reader/Writer mode:** Reads NFC tags.  
  2. **Peer-to-peer mode:** Data exchange between NFC devices.  
  3. **Card emulation mode:** Acts like a smart card for payments.  

---

### **NFC Applications**  
- **Mobile payments (Apple Pay, Google Pay).**  
- **Smart access control (keyless entry).**  
- **Public transportation ticketing.**  
- **Smart advertising (interactive posters).**  

---

## **RFID vs NFC**  
| Feature | RFID | NFC |  
|---------|------|-----|  
| **Range** | Up to 100m | 10cm or less |  
| **Frequency** | 125 kHz, 13.56 MHz, UHF | 13.56 MHz |  
| **Power** | Passive/Active | Passive/Active |  
| **Applications** | Inventory, logistics | Payments, authentication |  

---

This concludes another section of the extracted content. Let me know when to **continue** by sending the command **"Continue"**. 🚀

Continuing with the extracted text:

---

# **IEEE 802.15.4 vs Zigbee vs 6LoWPAN**  

| Feature         | **IEEE 802.15.4**        | **Zigbee**           | **6LoWPAN**         |  
|---------------|------------------------|---------------------|---------------------|  
| **Scope**     | PHY and MAC layer       | Full-stack protocol | IPv6 adaptation for IEEE 802.15.4 |  
| **Data Rate** | 250 kbps                | 250 kbps            | 250 kbps            |  
| **Topology**  | Star, Mesh              | Star, Mesh, Cluster | Mesh                |  
| **Addressing** | 16-bit, 64-bit         | Zigbee-specific     | IPv6 addressing     |  
| **Routing**   | None                    | AODV-based          | RPL-based           |  
| **Power Consumption** | Low             | Low                 | Low                 |  
| **Application** | WPAN                   | Wireless sensor networks | IoT, Smart Grid  |  

---

# **Bluetooth in IoT**  
## **Introduction**  
- **Bluetooth is a short-range wireless communication protocol.**  
- **Used for personal area networking (PAN) and IoT applications.**  
- **Operates in the 2.4 GHz ISM band.**  
- **Versions:**  
  - **Bluetooth Classic (BR/EDR)** – High-speed data transfer.  
  - **Bluetooth Low Energy (BLE)** – Optimized for IoT.  

**Source:** *Bluetooth SIG, "Bluetooth Technology Overview," Online Documentation.*  

---

## **Bluetooth Low Energy (BLE) Features**  
- **Low power consumption:**  
  - Ideal for battery-powered IoT devices.  
- **Short-range communication:**  
  - Range: 10m to 100m (depending on environment).  
- **Fast connection times:**  
  - Suitable for intermittent data transfer.  
- **Supports star topology:**  
  - One central device communicates with multiple peripherals.  

---

## **Bluetooth 5.0 and IoT**  
- **Extended range (up to 200m).**  
- **Higher data rate (2 Mbps).**  
- **Improved coexistence with Wi-Fi.**  
- **Supports Mesh networking.**  

### **Bluetooth Applications in IoT**  
- **Wearable devices (smartwatches, fitness trackers).**  
- **Smart home automation (locks, lights, sensors).**  
- **Healthcare monitoring.**  
- **Industrial IoT (IIoT) sensors.**  

---

# **Wi-Fi in IoT**  
## **Introduction**  
- **Wi-Fi is a high-speed wireless networking technology.**  
- **Operates in the 2.4 GHz and 5 GHz frequency bands.**  
- **Standardized under IEEE 802.11.**  
- **Used for high-bandwidth IoT applications.**  

**Source:** *Wi-Fi Alliance, "Wi-Fi Technology Overview," Online Documentation.*  

---

## **Wi-Fi Standards for IoT**  
| **Standard** | **Frequency** | **Max Speed** | **Range** | **Application** |  
|-------------|--------------|--------------|-----------|-----------------|  
| **802.11b** | 2.4 GHz      | 11 Mbps      | 30m       | Basic IoT devices |  
| **802.11g** | 2.4 GHz      | 54 Mbps      | 30m       | Consumer IoT |  
| **802.11n** | 2.4/5 GHz    | 600 Mbps     | 50m       | Industrial IoT |  
| **802.11ac** | 5 GHz       | 1.3 Gbps     | 30m       | Smart home |  
| **802.11ax (Wi-Fi 6)** | 2.4/5 GHz | 9.6 Gbps | 50m | Smart cities, High-density IoT |  

---

## **Wi-Fi Features for IoT**  
- **High data rate:** Suitable for streaming and large-scale IoT.  
- **Long range compared to BLE and Zigbee.**  
- **Supports multiple connections simultaneously.**  
- **Higher power consumption compared to BLE and LPWAN.**  

---

## **Wi-Fi IoT Applications**  
- **Smart homes (cameras, thermostats).**  
- **Industrial automation.**  
- **Smart cities (public Wi-Fi, connected traffic systems).**  
- **Healthcare (remote patient monitoring).**  

---

# **LPWAN (Low-Power Wide-Area Networks)**  
## **Introduction**  
- **LPWAN technologies provide long-range, low-power IoT connectivity.**  
- **Designed for battery-operated devices in wide-area applications.**  

**Examples of LPWAN Technologies:**  
1. **LoRa (Long Range)**  
2. **Sigfox**  
3. **NB-IoT (Narrowband IoT)**  
4. **LTE-M (LTE for Machines)**  

**Source:** *LPWAN Alliance, "LPWAN Overview," Online Documentation.*  

---

## **LoRa (Long Range)**  
- **Operates in unlicensed ISM bands (868 MHz in Europe, 915 MHz in the U.S.).**  
- **Long-range communication (up to 15 km).**  
- **Low power consumption (battery life of 10+ years).**  
- **Supports star and mesh topologies.**  
- **Used in smart agriculture, smart cities, and industrial IoT.**  

---

## **Sigfox**  
- **Ultra-narrowband technology.**  
- **Low data rate (100 bps).**  
- **Extremely low power consumption.**  
- **Ideal for asset tracking, environmental monitoring, and smart metering.**  

---

## **NB-IoT (Narrowband IoT)**  
- **Operates in licensed cellular bands.**  
- **Higher reliability than unlicensed LPWANs.**  
- **Supports deep indoor penetration.**  
- **Used for smart meters, parking sensors, and industrial applications.**  

---

## **LTE-M (LTE for Machines)**  
- **Cellular IoT technology optimized for M2M communication.**  
- **Higher data rates than NB-IoT.**  
- **Supports mobility (ideal for connected vehicles).**  
- **Used for fleet tracking, healthcare, and logistics.**  

---

# **Comparison of LPWAN Technologies**  

| Feature | **LoRa** | **Sigfox** | **NB-IoT** | **LTE-M** |  
|---------|---------|-----------|------------|-----------|  
| **Frequency** | Unlicensed ISM | Unlicensed ISM | Licensed Cellular | Licensed Cellular |  
| **Range** | 15 km | 10 km | 10 km | 5 km |  
| **Data Rate** | 0.3-50 kbps | 100 bps | 50-250 kbps | 1 Mbps |  
| **Battery Life** | 10+ years | 10+ years | 5-10 years | 5-10 years |  
| **Best for** | Smart cities, agriculture | Asset tracking | Smart meters | Connected vehicles |  

---

# **Summary**  
- **IEEE 802.15.4, Zigbee, and 6LoWPAN** are optimized for **low-power, short-range IoT applications.**  
- **Bluetooth and Wi-Fi** are widely used for **consumer IoT** but have **higher power consumption.**  
- **LPWAN (LoRa, Sigfox, NB-IoT, LTE-M)** enables **long-range, low-power IoT connectivity.**  
- **Z-Wave and WirelessHART** are specialized for **home automation and industrial automation.**  

---

This concludes another section of the extracted content. Let me know when to **continue** by sending the command **"Continue"**. 🚀
