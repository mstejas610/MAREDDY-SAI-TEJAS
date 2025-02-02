### Data Acquisition and Duplication

#### Module Overview
- **Objective**: Understand data acquisition, its importance, and the steps involved in forensic data duplication.
- **Key Topics**:
  - Live and static data acquisition.
  - Data acquisition and duplication steps.
  - Best practices for data acquisition.
  - Tools and techniques for data acquisition on Windows and Linux.

---

### **Understanding Data Acquisition**
- **Definition**: The process of extracting Electronically Stored Information (ESI) from suspect computers or storage media.
- **Importance**: Critical in digital forensics; improper acquisition can render data inadmissible in court.
- **Types**:
  - **Live Data Acquisition**: Collecting volatile data (e.g., RAM, cache, registries) from a running system.
  - **Static Data Acquisition**: Collecting non-volatile data (e.g., hard drives, USB drives) from powered-off systems.

---

### **Live Data Acquisition**
- **Volatile Data**: Data that is lost when the system is powered off (e.g., RAM, cache).
- **Challenges**:
  - Data is dynamic and can be altered by simple actions like browsing files.
  - Tools used may change file access times or trigger malware.
- **Types of Volatile Data**:
  - **System Information**: Running processes, open files, logged-on users, etc.
  - **Network Information**: Open connections, routing tables, ARP cache, etc.

#### **Order of Volatility**
1. Registers and cache.
2. Routing tables, process tables, and memory.
3. Temporary file systems.
4. Disk or storage media.
5. Remote logging and monitoring data.
6. Physical configuration and network topology.
7. Archival media (e.g., CD-ROMs, tapes).

---

### **Static Data Acquisition**
- **Definition**: Acquiring non-volatile data that remains unaltered after shutdown.
- **Sources**: Hard drives, USB drives, CD-ROMs, smartphones, etc.
- **Examples**: Emails, documents, web activity, deleted files, slack space, swap files.

#### **Rule of Thumb**
- Never work on original evidence; create a bit-stream image.
- Produce two copies: one for analysis, one for backup.
- Verify the integrity of copies using hash values (e.g., MD5, SHA-1).

---

### **Data Acquisition Methods**
1. **Bit-stream Disk-to-Image File**: Creates a bit-for-bit copy of the suspect drive.
   - Tools: ProDiscover, EnCase, FTK, Sleuth Kit.
2. **Bit-stream Disk-to-Disk**: Copies data directly to another disk.
   - Tools: EnCase, Norton Ghost.
3. **Logical Acquisition**: Collects specific files (e.g., emails, documents).
4. **Sparse Acquisition**: Collects fragments of unallocated or deleted data.

---

### **Data Acquisition Formats**
1. **Raw Format**: Simple, sequential flat files.
   - Advantages: Fast data transfer, universal format.
   - Disadvantages: Requires same storage as original, may miss bad sectors.
2. **Proprietary Format**: Vendor-specific formats with features like compression and metadata.
   - Disadvantages: Incompatible with other tools, file size limitations.
3. **Advanced Forensics Format (AFF)**: Open-source format with compression and metadata support.
4. **AFF4**: Object-oriented framework for managing large disk images.
5. **Generic Forensic Zip (gfzip)**: Compressed, signed disk image format.

---

### **Data Acquisition Tools**
#### **Hardware Tools**:
- **UltraKit**: Portable kit with write blockers for forensic imaging.
- **Forensic Falcon**: High-speed imaging with network support.
- **T3iu Forensic SATA Imaging Bay**: Fast write-blocked acquisitions for SATA drives.
- **XRY Office**: Mobile device data recovery.
- **Atola Insight Forensic**: High-performance imaging for damaged drives.

#### **Software Tools**:
- **EnCase Forensic**: Multi-purpose forensic platform.
- **ProDiscover Forensics**: Disk imaging and analysis.
- **FTK Imager**: Data preview and imaging tool.
- **X-Ways Forensics**: Disk imaging, data recovery, and file carving.
- **R-Tools R-Studio**: Data recovery and RAID reconstruction.

---

### **Data Acquisition on Linux**
- **dd Command**: Creates bit-stream copies of disks.
  - Syntax: `dd if=<source> of=<target> bs=<byte size>`
  - Example: `dd if=/dev/sda of=/home/sam/disk.img bs=4096`
- **dcfldd Command**: Enhanced version of dd with forensic features.
  - Features: Hashing, progress updates, split output.
  - Example: `dcfldd if=/dev/sdb of=sdb_image.img hash=md5`

---

### **Data Acquisition on Windows**
- **FTK Imager**: Creates forensic images and validates data integrity.
- **Remote Acquisition**: Tools like ProDiscover, F-Response, and WetStone LiveWire allow remote data collection.

---

### **RAID Data Acquisition**
- **Challenges**: Large storage size, complex configurations.
- **Tools**: EnCase, X-Ways Forensics, R-Tools R-Studio.
- **Best Practice**: Use logical or sparse acquisition for large RAID systems.

---

### **Data Validation**
- **Purpose**: Ensure data integrity using hash values.
- **Hashing Algorithms**: CRC-32, MD5, SHA-1, SHA-256.
- **Validation Methods**:
  - **Linux**: Use `md5sum` or `sha1sum` to validate acquired data.
  - **Windows**: Use third-party tools like EnCase, FTK, or ProDiscover.

---

### **Best Practices for Data Acquisition**
1. **Chain of Custody**: Document all actions and handlers of evidence.
2. **Write Protection**: Use hardware or software write blockers.
3. **Sanitize Target Media**: Ensure no residual data remains on the target media.
4. **Contingency Plans**: Prepare for hardware/software failures.
5. **Validation**: Use hashing algorithms to verify data integrity.
6. **Secure Storage**: Store evidence in a secure, access-controlled environment.

---

### **Common Mistakes in Data Acquisition**
- Choosing the wrong resolution or tools.
- Using incorrect cables or connections.
- Insufficient time for system development.
- Poor knowledge of tools and technology.

---

### **Summary**
- Data acquisition is the first step in forensic investigations.
- Live acquisition focuses on volatile data, while static acquisition deals with non-volatile data.
- Use appropriate tools and methods to ensure data integrity and admissibility in court.
- Always validate acquired data using hashing algorithms.

