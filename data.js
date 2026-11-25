// NBA Infrastructure Data
const INFRA_DATA = {
  "departments": [
    {
      "name": "Biotech",
      "code": "BT",
      "category": "Engineering",
      "icon": "🧬",
      "venue_count": 18,
      "action_count": 3,
      "venues": [
        {
          "room_no": "A009",
          "actual": "Psychology Faculty Room",
          "tentative": "BT Department Library",
          "required_infra": "1. Racks for Library Books\n2. 1 Computer System with furniture",
          "room_type": "Faculty Room",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "A012",
          "actual": "Bio Inno Space",
          "tentative": "Additional Facilities - Biotech",
          "required_infra": "",
          "room_type": "Studio / Hub",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "A101",
          "actual": "Seminar Hall - Projector",
          "tentative": "Biotech Seminar Hall",
          "required_infra": "",
          "room_type": "Seminar Hall",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "A111",
          "actual": "Faculty Room",
          "tentative": "Biotech Faculty Room",
          "required_infra": "1. Standee Rack - 1\n2. Notice Board - 2\n3. White Board - 1\n4. Computer System & Printer with furniture - 2",
          "room_type": "Faculty Room",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "A206",
          "actual": "Class Room - Smart Board",
          "tentative": "BT Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "A208",
          "actual": "Class Room - Smart Board",
          "tentative": "BT Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "A209",
          "actual": "Class Room - Smart Board",
          "tentative": "BT Tutorial Room - SB",
          "required_infra": "",
          "room_type": "Tutorial Room",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "A210",
          "actual": "Class Room - Smart Board",
          "tentative": "BT Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "B104",
          "actual": "Biotech Laboratory",
          "tentative": "Biotech Laboratory",
          "required_infra": "",
          "room_type": "Laboratory",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "B105",
          "actual": "Biotech Laboratory",
          "tentative": "Biotech Laboratory",
          "required_infra": "",
          "room_type": "Laboratory",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "(C005)",
          "actual": "Pharmacy Laboratory",
          "tentative": "Biotech Laboratory",
          "required_infra": "",
          "room_type": "Laboratory",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C001 (C007)",
          "actual": "Pharmacy Laboratory",
          "tentative": "Biotech Laboratory",
          "required_infra": "",
          "room_type": "Laboratory",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C002 (C008)",
          "actual": "Pharmacy Laboratory",
          "tentative": "Biotech COE",
          "required_infra": "",
          "room_type": "Laboratory",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C006 (C016)",
          "actual": "CAD Laboratory",
          "tentative": "SMS Computer lab",
          "required_infra": "",
          "room_type": "Laboratory",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C014 (C009)",
          "actual": "Pharmacy Laboratory",
          "tentative": "Biotech Laboratory",
          "required_infra": "",
          "room_type": "Laboratory",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C015 (C010)",
          "actual": "Pharmacy Laboratory",
          "tentative": "Biotech Laboratory",
          "required_infra": "",
          "room_type": "Laboratory",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "(C013)",
          "actual": "Pharmacy Laboratory",
          "tentative": "Biotech Laboratory",
          "required_infra": "",
          "room_type": "Laboratory",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C116",
          "actual": "Class Room - Projector",
          "tentative": "Biotech Bio Brandix Studio",
          "required_infra": "Experiential mode Tables & Furniture setup",
          "room_type": "Projector Classroom",
          "has_action": true,
          "floor_plan_key": "C116",
          "ece_lab_info": null,
          "budget": null
        }
      ]
    },
    {
      "name": "ECE",
      "code": "ECE",
      "category": "Engineering",
      "icon": "⚡",
      "venue_count": 17,
      "action_count": 9,
      "venues": [
        {
          "room_no": "A011",
          "actual": "Hybrid Learning Hub",
          "tentative": "ECE Seminar Hall",
          "required_infra": "",
          "room_type": "Seminar Hall",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "A102",
          "actual": "Class Room - Projector",
          "tentative": "ECE Project lab / Project Lab New",
          "required_infra": "1. 6 Workbenck for 60 students (with 3 pin socket and wired connection)\n2.Berow - 2 nos.\n\n[Laboratory Equipment & Modernization - Budget: ₹5,30,000]:\n• Electronic Component Kit – Resistors, Capacitors, Diodes, Transistors and Ics,MSO-1,RPS-5,Soldering station-2\n• Desktop computer-5",
          "room_type": "Laboratory",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": {
            "venue": "A102",
            "lab_name": "Project Lab New",
            "utilization": "Project Lab New",
            "raw_requirement": "Electronic Component Kit – Resistors, Capacitors, Diodes, Transistors and Ics,MSO-1,RPS-5,Soldering station-2;Desktop computer-5",
            "requirement_items": [
              "Electronic Component Kit – Resistors, Capacitors, Diodes, Transistors and Ics,MSO-1,RPS-5,Soldering station-2",
              "Desktop computer-5"
            ],
            "amount": "₹5,30,000"
          },
          "budget": "₹5,30,000"
        },
        {
          "room_no": "A103",
          "actual": "Class Room - Projector",
          "tentative": "ECE Tutorial Room - Pro",
          "required_infra": "",
          "room_type": "Tutorial Room",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "A109",
          "actual": "Laboratory",
          "tentative": "ECE/SMS Laboratory / Optical, MPMC",
          "required_infra": "[Laboratory Equipment & Modernization - Budget: ₹3,00,000]:\n• Optical Fibre Communication Trainer Kit-2\n• Optical Fibre Analog and Digital Modulation Kit-2\n• Optical Fibre Attenuation Measurement Kit-2\n• Optical Power Meter-1\n• Visual Fault Locator (VFL)-1\n• Optical Fibre Connector and Patch Cord Kit-3 sets\n• Optical Fibre Cable Kit-1\n• Optical Fibre Stripping and Cleaning Tool Kit-1\n• Need Servicing for equipments & some components to purchase",
          "room_type": "Laboratory",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": {
            "venue": "A109",
            "lab_name": "Optical Lab & MPMC",
            "utilization": "Optical, MPMC",
            "raw_requirement": "Optical Fibre Communication Trainer Kit-2;Optical Fibre Analog and Digital Modulation Kit-2;Optical Fibre Attenuation Measurement Kit-2;Optical Power Meter-1;Visual Fault Locator (VFL)-1;Optical Fibre Connector and Patch Cord Kit-3 sets;Optical Fibre Cable Kit-1;Optical Fibre Stripping and Cleaning Tool Kit-1;Need Servicing for equipments & some components to purchase",
            "requirement_items": [
              "Optical Fibre Communication Trainer Kit-2",
              "Optical Fibre Analog and Digital Modulation Kit-2",
              "Optical Fibre Attenuation Measurement Kit-2",
              "Optical Power Meter-1",
              "Visual Fault Locator (VFL)-1",
              "Optical Fibre Connector and Patch Cord Kit-3 sets",
              "Optical Fibre Cable Kit-1",
              "Optical Fibre Stripping and Cleaning Tool Kit-1",
              "Need Servicing for equipments & some components to purchase"
            ],
            "amount": "₹3,00,000"
          },
          "budget": "₹3,00,000"
        },
        {
          "room_no": "A110",
          "actual": "TI Laboratory",
          "tentative": "TI Laboratory - ECE / Centre for Excellence-Embedded Systems & IoT/Research Lab",
          "required_infra": "[Laboratory Equipment & Modernization - Budget: ₹4,00,000]:\n• ARM Cortex-M Development Kit-5\n• Arduino Development Kit-10\n• ESP32 IoT Development Kit-10\n• Raspberry Pi Development Kit-10\n• STM32 Development Board-10\n• Desktop Computer-30(ve to be upgraded)\n• Temperature-Controlled Soldering Station-1",
          "room_type": "Laboratory",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": {
            "venue": "A110",
            "lab_name": "TI lab",
            "utilization": "Centre for Excellence-Embedded Systems & IoT/Research Lab",
            "raw_requirement": "ARM Cortex-M Development Kit-5;Arduino Development Kit-10;ESP32 IoT Development Kit-10;Raspberry Pi Development Kit-10;STM32 Development Board-10;Desktop Computer-30(ve to be upgraded); Temperature-Controlled Soldering Station-1",
            "requirement_items": [
              "ARM Cortex-M Development Kit-5",
              "Arduino Development Kit-10",
              "ESP32 IoT Development Kit-10",
              "Raspberry Pi Development Kit-10",
              "STM32 Development Board-10",
              "Desktop Computer-30(ve to be upgraded)",
              "Temperature-Controlled Soldering Station-1"
            ],
            "amount": "₹4,00,000"
          },
          "budget": "₹4,00,000"
        },
        {
          "room_no": "A201",
          "actual": "Class Room - Smart Board",
          "tentative": "ECE Lab - Workbench / Electron Devices and Analog Electronic Circuits Laboratory",
          "required_infra": "1. 8 Workbenck for 64 students (with 3 pin socket and wired connection)\n2.Berow - 2 nos.\n\n[Laboratory Equipment & Modernization - Budget: ₹7,00,000]:\n• Digital Storage Oscilloscope (DSO)-15\n• Function Generator-15\n• Digital Multimeter-15\n• LCR Meter-2",
          "room_type": "Laboratory",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": {
            "venue": "A201",
            "lab_name": "New",
            "utilization": "Electron Devices and Analog Electronic Circuits Laboratory",
            "raw_requirement": "Digital Storage Oscilloscope (DSO)-15;Function Generator-15;Digital Multimeter-15;LCR Meter-2",
            "requirement_items": [
              "Digital Storage Oscilloscope (DSO)-15",
              "Function Generator-15",
              "Digital Multimeter-15",
              "LCR Meter-2"
            ],
            "amount": "₹7,00,000"
          },
          "budget": "₹7,00,000"
        },
        {
          "room_no": "A202",
          "actual": "Class Room - Smart Board",
          "tentative": "ECE Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "A203",
          "actual": "Class Room - Smart Board",
          "tentative": "ECE Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "A211",
          "actual": "Class Room - Smart Board",
          "tentative": "ECE Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "A212",
          "actual": "Class Room - Smart Board",
          "tentative": "ECE Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "A213",
          "actual": "Class Room - Smart Board",
          "tentative": "ECE Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "A303",
          "actual": "Power House",
          "tentative": "ECE,BME,Med.Elect. Faculty Room",
          "required_infra": "12 Partitians required\n1. Standee Rack - 2\n2. Notice Board - 3\n3. White Board - 1\n4. Computer System & Printer with furniture - 2",
          "room_type": "Faculty Room",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "A308",
          "actual": "Experiential Learning Hub",
          "tentative": "ECE Computer lab / VLSI & Embedded & DSP/Centre for Excellence - VLSI & PCB",
          "required_infra": "Planned to keep Laptops; Rack/Berow for 60 laptops required\n\n[Laboratory Equipment & Modernization - Budget: ₹12,05,000(Inclusing 5 licence)]:\n• VLSI Design and EDA Software-5 licence\n• Digital Signal Processor Trainer Kit-5\n• JTAG Programmer and Debugger and DSP Interfacing Accessories\n• FPGA Development Kit-5\n• CNC PCB protyping machine-2",
          "room_type": "Laboratory",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": {
            "venue": "A308",
            "lab_name": "Computer Lab New",
            "utilization": "VLSI & Embedded & DSP/Centre for Excellence - VLSI & PCB",
            "raw_requirement": "VLSI Design and EDA Software-5 licence;Digital Signal Processor Trainer Kit-5;JTAG Programmer and Debugger and DSP Interfacing Accessories;FPGA Development Kit-5;CNC PCB protyping machine-2",
            "requirement_items": [
              "VLSI Design and EDA Software-5 licence",
              "Digital Signal Processor Trainer Kit-5",
              "JTAG Programmer and Debugger and DSP Interfacing Accessories",
              "FPGA Development Kit-5",
              "CNC PCB protyping machine-2"
            ],
            "amount": "₹12,05,000(Inclusing 5 licence)"
          },
          "budget": "₹12,05,000(Inclusing 5 licence)"
        },
        {
          "room_no": "B103",
          "actual": "Class Room - Projector",
          "tentative": "ECE/BME Tutorial Room - Pro",
          "required_infra": "",
          "room_type": "Tutorial Room",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "B107",
          "actual": "Laboratory",
          "tentative": "ECE Laboratory / Digital System Design Laboratory",
          "required_infra": "Computer System with furniture - 5\n\n[Laboratory Equipment & Modernization - Budget: ₹5,00,000]:\n• Digital IC Trainer Kit-10\n• Digital IC Tester-1\n• Desktop Computer-Core i5 or Equivalent, 16 GB RAM, 512 GB SSD-5",
          "room_type": "Laboratory",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": {
            "venue": "B107",
            "lab_name": "Electronics Lab",
            "utilization": "Digital System Design Laboratory",
            "raw_requirement": "Digital IC Trainer Kit-10;Digital IC Tester-1;Desktop Computer-Core i5 or Equivalent, 16 GB RAM, 512 GB SSD-5",
            "requirement_items": [
              "Digital IC Trainer Kit-10",
              "Digital IC Tester-1",
              "Desktop Computer-Core i5 or Equivalent, 16 GB RAM, 512 GB SSD-5"
            ],
            "amount": "₹5,00,000"
          },
          "budget": "₹5,00,000"
        },
        {
          "room_no": "B108",
          "actual": "Faculty Room",
          "tentative": "ECE Department Library",
          "required_infra": "1. Racks for Library Books\n2. 1 Computer System with furniture",
          "room_type": "Faculty Room",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C008 (C018)",
          "actual": "RTC Laboratory - ECE",
          "tentative": "ECE Laboratory / Communication System, LIC, Digital Electronics lab;",
          "required_infra": "[Laboratory Equipment & Modernization - Budget: ₹80,000]:\n• Need Servicing for equipments",
          "room_type": "Laboratory",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": {
            "venue": "C018",
            "lab_name": "Communication Systems Lab/Digital Signal Processor lab",
            "utilization": "Communication System, LIC, Digital Electronics lab;",
            "raw_requirement": "Need Servicing for equipments",
            "requirement_items": [
              "Need Servicing for equipments"
            ],
            "amount": "₹80,000"
          },
          "budget": "₹80,000"
        }
      ],
      "ece_lab_suite": {
        "title": "ECE Specialized Laboratory Modernization & Equipment Budget",
        "department": "Department of Electronics and Communication Engineering",
        "institution": "Rathinam Technical Campus",
        "total_estimated_cost": "₹37,15,000",
        "ict_software_note": "Matlab software is not currenly available but the ICT team is agreed to provode 30 user licence",
        "labs": [
          {
            "venue": "A109",
            "lab_name": "Optical Lab & MPMC",
            "utilization": "Optical, MPMC",
            "raw_requirement": "Optical Fibre Communication Trainer Kit-2;Optical Fibre Analog and Digital Modulation Kit-2;Optical Fibre Attenuation Measurement Kit-2;Optical Power Meter-1;Visual Fault Locator (VFL)-1;Optical Fibre Connector and Patch Cord Kit-3 sets;Optical Fibre Cable Kit-1;Optical Fibre Stripping and Cleaning Tool Kit-1;Need Servicing for equipments & some components to purchase",
            "requirement_items": [
              "Optical Fibre Communication Trainer Kit-2",
              "Optical Fibre Analog and Digital Modulation Kit-2",
              "Optical Fibre Attenuation Measurement Kit-2",
              "Optical Power Meter-1",
              "Visual Fault Locator (VFL)-1",
              "Optical Fibre Connector and Patch Cord Kit-3 sets",
              "Optical Fibre Cable Kit-1",
              "Optical Fibre Stripping and Cleaning Tool Kit-1",
              "Need Servicing for equipments & some components to purchase"
            ],
            "amount": "₹3,00,000"
          },
          {
            "venue": "A110",
            "lab_name": "TI lab",
            "utilization": "Centre for Excellence-Embedded Systems & IoT/Research Lab",
            "raw_requirement": "ARM Cortex-M Development Kit-5;Arduino Development Kit-10;ESP32 IoT Development Kit-10;Raspberry Pi Development Kit-10;STM32 Development Board-10;Desktop Computer-30(ve to be upgraded); Temperature-Controlled Soldering Station-1",
            "requirement_items": [
              "ARM Cortex-M Development Kit-5",
              "Arduino Development Kit-10",
              "ESP32 IoT Development Kit-10",
              "Raspberry Pi Development Kit-10",
              "STM32 Development Board-10",
              "Desktop Computer-30(ve to be upgraded)",
              "Temperature-Controlled Soldering Station-1"
            ],
            "amount": "₹4,00,000"
          },
          {
            "venue": "B107",
            "lab_name": "Electronics Lab",
            "utilization": "Digital System Design Laboratory",
            "raw_requirement": "Digital IC Trainer Kit-10;Digital IC Tester-1;Desktop Computer-Core i5 or Equivalent, 16 GB RAM, 512 GB SSD-5",
            "requirement_items": [
              "Digital IC Trainer Kit-10",
              "Digital IC Tester-1",
              "Desktop Computer-Core i5 or Equivalent, 16 GB RAM, 512 GB SSD-5"
            ],
            "amount": "₹5,00,000"
          },
          {
            "venue": "C018",
            "lab_name": "Communication Systems Lab/Digital Signal Processor lab",
            "utilization": "Communication System, LIC, Digital Electronics lab;",
            "raw_requirement": "Need Servicing for equipments",
            "requirement_items": [
              "Need Servicing for equipments"
            ],
            "amount": "₹80,000"
          },
          {
            "venue": "A308",
            "lab_name": "Computer Lab New",
            "utilization": "VLSI & Embedded & DSP/Centre for Excellence - VLSI & PCB",
            "raw_requirement": "VLSI Design and EDA Software-5 licence;Digital Signal Processor Trainer Kit-5;JTAG Programmer and Debugger and DSP Interfacing Accessories;FPGA Development Kit-5;CNC PCB protyping machine-2",
            "requirement_items": [
              "VLSI Design and EDA Software-5 licence",
              "Digital Signal Processor Trainer Kit-5",
              "JTAG Programmer and Debugger and DSP Interfacing Accessories",
              "FPGA Development Kit-5",
              "CNC PCB protyping machine-2"
            ],
            "amount": "₹12,05,000(Inclusing 5 licence)"
          },
          {
            "venue": "A201",
            "lab_name": "New",
            "utilization": "Electron Devices and Analog Electronic Circuits Laboratory",
            "raw_requirement": "Digital Storage Oscilloscope (DSO)-15;Function Generator-15;Digital Multimeter-15;LCR Meter-2",
            "requirement_items": [
              "Digital Storage Oscilloscope (DSO)-15",
              "Function Generator-15",
              "Digital Multimeter-15",
              "LCR Meter-2"
            ],
            "amount": "₹7,00,000"
          },
          {
            "venue": "A102",
            "lab_name": "Project Lab New",
            "utilization": "Project Lab New",
            "raw_requirement": "Electronic Component Kit – Resistors, Capacitors, Diodes, Transistors and Ics,MSO-1,RPS-5,Soldering station-2;Desktop computer-5",
            "requirement_items": [
              "Electronic Component Kit – Resistors, Capacitors, Diodes, Transistors and Ics,MSO-1,RPS-5,Soldering station-2",
              "Desktop computer-5"
            ],
            "amount": "₹5,30,000"
          }
        ]
      }
    },
    {
      "name": "CSE",
      "code": "CSE",
      "category": "Computer Science",
      "icon": "💻",
      "venue_count": 23,
      "action_count": 10,
      "venues": [
        {
          "room_no": "A214",
          "actual": "Stephen Hawkings Laboratory",
          "tentative": "CSE, IT Computer lab",
          "required_infra": "54 Systems available; 6 more Computer System with furniture required; Rearrangement in venue",
          "room_type": "Laboratory",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "A305",
          "actual": "Steve Jobs Laboratory",
          "tentative": "CSE,IT Computer lab",
          "required_infra": "48 Systems available; 12 more Computer System with furniture required; Rearrangement in venue",
          "room_type": "Laboratory",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "A309",
          "actual": "Faculty Room",
          "tentative": "CSE & CSE(Tamil) Faculty Room",
          "required_infra": "22 Partitians required\n1. Standee Rack - 2\n2. Notice Board - 3\n3. White Board - 1\n4. Computer System & Printer with furniture - 2",
          "room_type": "Faculty Room",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "B109",
          "actual": "Computer Laboratory",
          "tentative": "CSE,IT Computer lab",
          "required_infra": "50 Systems available; 10 more Computer Systems required",
          "room_type": "Laboratory",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C101",
          "actual": "MBA Class Room - Smart Board",
          "tentative": "CSE Seminar Hall",
          "required_infra": "",
          "room_type": "Seminar Hall",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C111",
          "actual": "Brand Builder Studio",
          "tentative": "SOC COE",
          "required_infra": "Planned to keep Laptops; Rack/Berow for 30 laptops required",
          "room_type": "Studio / Hub",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C112",
          "actual": "Brand Builder Studio",
          "tentative": "SOC COE",
          "required_infra": "Planned to keep Laptops; Rack/Berow for 30 laptops required",
          "room_type": "Studio / Hub",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C211",
          "actual": "Faculty Room",
          "tentative": "CSE Department Library",
          "required_infra": "1. Racks for Library Books\n2. 1 Computer System with furniture",
          "room_type": "Faculty Room",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C302",
          "actual": "Class Room - Projector",
          "tentative": "CSE Class Room - Pro",
          "required_infra": "",
          "room_type": "Projector Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C303",
          "actual": "Class Room - Smart Board",
          "tentative": "CSE Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C304",
          "actual": "Class Room - Projector",
          "tentative": "CSE Class Room - Pro",
          "required_infra": "",
          "room_type": "Projector Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C305",
          "actual": "Class Room - Projector",
          "tentative": "CSE Class Room - Pro",
          "required_infra": "",
          "room_type": "Projector Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C306",
          "actual": "Class Room - Projector",
          "tentative": "CSE Class Room - Pro",
          "required_infra": "",
          "room_type": "Projector Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C307",
          "actual": "Class Room - Projector",
          "tentative": "CSE Class Room - Pro",
          "required_infra": "",
          "room_type": "Projector Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C308",
          "actual": "Class Room - Projector",
          "tentative": "CSE Class Room - Pro",
          "required_infra": "",
          "room_type": "Projector Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C309",
          "actual": "Class Room - Projector",
          "tentative": "CSE Class Room - Pro",
          "required_infra": "",
          "room_type": "Projector Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C317",
          "actual": "Class Room - Smart Board",
          "tentative": "CSE,IT Project lab",
          "required_infra": "Planned to keep Laptops; Rack/Berow for 60 laptops required\nLaptop table with seating setup with three pin socket for 60 tables",
          "room_type": "Laboratory",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C323",
          "actual": "Class Room - Projector",
          "tentative": "CSE Class Room - Pro",
          "required_infra": "",
          "room_type": "Projector Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C324",
          "actual": "Brand Builder Studio",
          "tentative": "SOC COE",
          "required_infra": "Planned to keep Laptops; Rack/Berow for 30 laptops required",
          "room_type": "Studio / Hub",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C325",
          "actual": "Mac Works Lab",
          "tentative": "SOC Research Lab",
          "required_infra": "-",
          "room_type": "Laboratory",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C402",
          "actual": "Class Room - Smart Board",
          "tentative": "CSE Tutorial Room - SB",
          "required_infra": "",
          "room_type": "Tutorial Room",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C423",
          "actual": "Class Room - Smart Board",
          "tentative": "SOC ASP Faculty Room",
          "required_infra": "Cubicles - 25 nos with furnitures and power connection\n Computer System & Printer with furniture - 1",
          "room_type": "Faculty Room",
          "has_action": true,
          "floor_plan_key": "C423",
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C428",
          "actual": "Class Room - Smart Board",
          "tentative": "CSE Tutorial Room - SB",
          "required_infra": "",
          "room_type": "Tutorial Room",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        }
      ]
    },
    {
      "name": "IT",
      "code": "IT",
      "category": "Computer Science",
      "icon": "🌐",
      "venue_count": 19,
      "action_count": 10,
      "venues": [
        {
          "room_no": "A214",
          "actual": "Stephen Hawkings Laboratory",
          "tentative": "CSE, IT Computer lab",
          "required_infra": "Common for CSE,IT",
          "room_type": "Laboratory",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "A305",
          "actual": "Steve Jobs Laboratory",
          "tentative": "CSE,IT Computer lab",
          "required_infra": "Common for CSE,IT",
          "room_type": "Laboratory",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "A306, A307",
          "actual": "Faculty Room",
          "tentative": "IT Faculty Room",
          "required_infra": "14 Partitians required\n1. Standee Rack - 2\n2. Notice Board - 2\n3. White Board - 1\n4. Computer System & Printer with furniture - 2",
          "room_type": "Faculty Room",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "B109",
          "actual": "Computer Laboratory",
          "tentative": "CSE,IT Computer lab",
          "required_infra": "Common for CSE,IT",
          "room_type": "Laboratory",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C111",
          "actual": "Brand Builder Studio",
          "tentative": "SOC COE",
          "required_infra": "Common for SOC",
          "room_type": "Studio / Hub",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C112",
          "actual": "Brand Builder Studio",
          "tentative": "SOC COE",
          "required_infra": "Common for SOC",
          "room_type": "Studio / Hub",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C311",
          "actual": "Faculty Room",
          "tentative": "IT Department Library",
          "required_infra": "1. Racks for Library Books\n2. 1 Computer System with furniture",
          "room_type": "Faculty Room",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C317",
          "actual": "Class Room - Smart Board",
          "tentative": "CSE,IT Project lab",
          "required_infra": "Common for CSE,IT",
          "room_type": "Laboratory",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C322",
          "actual": "Sunstone Class Room - SB",
          "tentative": "IT Seminar Hall",
          "required_infra": "",
          "room_type": "Seminar Hall",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C324",
          "actual": "Brand Builder Studio",
          "tentative": "SOC COE",
          "required_infra": "Common for SOC",
          "room_type": "Studio / Hub",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C325",
          "actual": "Mac Works Lab",
          "tentative": "SOC Research Lab",
          "required_infra": "-",
          "room_type": "Laboratory",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C405",
          "actual": "Class Room - Smart Board",
          "tentative": "IT Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C406",
          "actual": "Class Room - Smart Board",
          "tentative": "IT Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C407",
          "actual": "Class Room - Smart Board",
          "tentative": "IT Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C408",
          "actual": "Class Room - Projector",
          "tentative": "IT Tutorial Room - Pro",
          "required_infra": "",
          "room_type": "Tutorial Room",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C423",
          "actual": "Class Room - Smart Board",
          "tentative": "SOC ASP Faculty Room",
          "required_infra": "Common for SOC",
          "room_type": "Faculty Room",
          "has_action": true,
          "floor_plan_key": "C423",
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C424",
          "actual": "Class Room - Smart Board",
          "tentative": "IT Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C425",
          "actual": "Class Room - Smart Board",
          "tentative": "IT Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C426",
          "actual": "Class Room - Smart Board",
          "tentative": "IT Tutorial Room - SB",
          "required_infra": "",
          "room_type": "Tutorial Room",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        }
      ]
    },
    {
      "name": "AI&DS",
      "code": "AIDS",
      "category": "Computer Science",
      "icon": "🤖",
      "venue_count": 22,
      "action_count": 9,
      "venues": [
        {
          "room_no": "A301",
          "actual": "Experiential Learning Hub",
          "tentative": "AIDS Computer lab",
          "required_infra": "Planned to keep Laptops; Rack/Berow for 60 laptops required",
          "room_type": "Laboratory",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "A302",
          "actual": "Living Lab",
          "tentative": "AI&DS Faculty Room",
          "required_infra": "1. Standee Rack - 2\n2. Notice Board - 2\n3. White Board - 1\n4. Computer System & Printer with furniture - 2",
          "room_type": "Faculty Room",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C111",
          "actual": "Brand Builder Studio",
          "tentative": "SOC COE",
          "required_infra": "Common for SOC",
          "room_type": "Studio / Hub",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C112",
          "actual": "Brand Builder Studio",
          "tentative": "SOC COE",
          "required_infra": "Common for SOC",
          "room_type": "Studio / Hub",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C114",
          "actual": "Think Tank Theatre",
          "tentative": "AIDS Seminar Hall",
          "required_infra": "",
          "room_type": "Seminar Hall",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C324",
          "actual": "Brand Builder Studio",
          "tentative": "SOC COE",
          "required_infra": "Common for SOC",
          "room_type": "Studio / Hub",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C325",
          "actual": "Mac Works Lab",
          "tentative": "SOC Research Lab",
          "required_infra": "-",
          "room_type": "Laboratory",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C326",
          "actual": "AI Skills Lab",
          "tentative": "AIDS Computer lab",
          "required_infra": "54 Systems available; 6 more Computer System with furniture required; Rearrangement in venue",
          "room_type": "Laboratory",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C409",
          "actual": "Class Room - Smart Board",
          "tentative": "AIDS Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C410",
          "actual": "Class Room - Projector",
          "tentative": "AIDS Tutorial Room - SB",
          "required_infra": "",
          "room_type": "Tutorial Room",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C411",
          "actual": "HR Room",
          "tentative": "AIDS Department Library",
          "required_infra": "1. Racks for Library Books\n2. 1 Computer System with furniture",
          "room_type": "Library",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C412",
          "actual": "Class Room - Smart Board",
          "tentative": "AIDS Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C413",
          "actual": "Class Room - Smart Board",
          "tentative": "AIDS Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C414",
          "actual": "Class Room - Smart Board",
          "tentative": "AIDS Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C415",
          "actual": "Class Room - Smart Board",
          "tentative": "AIDS Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C416",
          "actual": "Intellect Class Room - SB",
          "tentative": "AIDS Computer lab",
          "required_infra": "Planned to keep Laptops; Rack/Berow for 60 laptops required",
          "room_type": "Laboratory",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C417",
          "actual": "Class Room - Smart Board",
          "tentative": "AIDS Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C418",
          "actual": "Class Room - Smart Board",
          "tentative": "AIDS Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C419",
          "actual": "Class Room - Smart Board",
          "tentative": "AIDS Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C420",
          "actual": "Class Room - Smart Board",
          "tentative": "AIDS Project lab",
          "required_infra": "",
          "room_type": "Laboratory",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C422",
          "actual": "Class Room - Smart Board",
          "tentative": "AIDS Tutorial Room - SB",
          "required_infra": "",
          "room_type": "Tutorial Room",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C423",
          "actual": "Class Room - Smart Board",
          "tentative": "SOC ASP Faculty Room",
          "required_infra": "Common for SOC",
          "room_type": "Faculty Room",
          "has_action": true,
          "floor_plan_key": "C423",
          "ece_lab_info": null,
          "budget": null
        }
      ]
    },
    {
      "name": "CSE Tamil",
      "code": "CSE-T",
      "category": "Computer Science",
      "icon": "🗣️",
      "venue_count": 6,
      "action_count": 2,
      "venues": [
        {
          "room_no": "A309",
          "actual": "Faculty Room",
          "tentative": "CSE & CSE(Tamil) Faculty Room",
          "required_infra": "Common for CSE, CSE Tamil",
          "room_type": "Faculty Room",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C314",
          "actual": "Class Room - Smart Board",
          "tentative": "CSE (Tamil) Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C315",
          "actual": "Class Room - Smart Board",
          "tentative": "CSE (Tamil) Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C318",
          "actual": "Class Room - Smart Board",
          "tentative": "CSE (Tamil) Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C403",
          "actual": "Class Room - Smart Board",
          "tentative": "CSE(Tamil) Tutorial Room - SB",
          "required_infra": "",
          "room_type": "Tutorial Room",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C423",
          "actual": "Class Room - Smart Board",
          "tentative": "SOC ASP Faculty Room",
          "required_infra": "Common for SOC",
          "room_type": "Faculty Room",
          "has_action": true,
          "floor_plan_key": "C423",
          "ece_lab_info": null,
          "budget": null
        }
      ]
    },
    {
      "name": "UG AIML",
      "code": "UG-AIML",
      "category": "Computer Science",
      "icon": "🧠",
      "venue_count": 10,
      "action_count": 2,
      "venues": [
        {
          "room_no": "B302",
          "actual": "Class Room - Projector",
          "tentative": "AIML Tutorial Room - Pro",
          "required_infra": "",
          "room_type": "Tutorial Room",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "B303",
          "actual": "Class Room - Smart Board",
          "tentative": "AIML Tutorial Room - SB",
          "required_infra": "",
          "room_type": "Tutorial Room",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "B304",
          "actual": "Class Room - Smart Board",
          "tentative": "AIML Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "B305",
          "actual": "Class Room - Projector",
          "tentative": "AIML Class Room - Pro",
          "required_infra": "",
          "room_type": "Projector Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "B306",
          "actual": "Class Room - Smart Board",
          "tentative": "AIML Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "B314",
          "actual": "Class Room - Smart Board",
          "tentative": "AIML Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "B315",
          "actual": "Class Room - Projector",
          "tentative": "AIML Class Room - Pro",
          "required_infra": "",
          "room_type": "Projector Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "B316",
          "actual": "Class Room - Smart Board",
          "tentative": "AIML Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C401",
          "actual": "Library",
          "tentative": "CSE (AIML), Cyber Faculty Room",
          "required_infra": "Planned at C401 (Current library); min. 3 cubicle spaces and 60 workstations with partition b/n 2 workstations & correspondng furnitures required\n1. Standee Rack - 2\n2. Notice Board - 2\n3. White Board - 2\n4. Computer System & Printer with furniture - 4",
          "room_type": "Faculty Room",
          "has_action": true,
          "floor_plan_key": "C401",
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C423",
          "actual": "Class Room - Smart Board",
          "tentative": "SOC ASP Faculty Room",
          "required_infra": "Common for SOC",
          "room_type": "Faculty Room",
          "has_action": true,
          "floor_plan_key": "C423",
          "ece_lab_info": null,
          "budget": null
        }
      ]
    },
    {
      "name": "UG Cyber",
      "code": "UG-CYBER",
      "category": "Computer Science",
      "icon": "🛡️",
      "venue_count": 8,
      "action_count": 2,
      "venues": [
        {
          "room_no": "C401",
          "actual": "Library",
          "tentative": "CSE (AIML), Cyber Faculty Room",
          "required_infra": "Common for AIML, Cyber",
          "room_type": "Faculty Room",
          "has_action": true,
          "floor_plan_key": "C401",
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C404",
          "actual": "Class Room - Smart Board",
          "tentative": "Cyber Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C423",
          "actual": "Class Room - Smart Board",
          "tentative": "SOC ASP Faculty Room",
          "required_infra": "Common for SOC",
          "room_type": "Faculty Room",
          "has_action": true,
          "floor_plan_key": "C423",
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C427",
          "actual": "Class Room - Smart Board",
          "tentative": "Cyber Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "(C502)",
          "actual": "Class Room - Smart Board",
          "tentative": "Cyber Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "(C503)",
          "actual": "Class Room - Smart Board",
          "tentative": "Cyber Tutorial Room - SB",
          "required_infra": "",
          "room_type": "Tutorial Room",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "(C507)",
          "actual": "Class Room - Smart Board",
          "tentative": "Cyber Tutorial Room - SB",
          "required_infra": "",
          "room_type": "Tutorial Room",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "(C508)",
          "actual": "Class Room - Smart Board",
          "tentative": "Cyber Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        }
      ]
    },
    {
      "name": "PG AIML",
      "code": "PG-AIML",
      "category": "Post Graduate",
      "icon": "🎓",
      "venue_count": 2,
      "action_count": 1,
      "venues": [
        {
          "room_no": "A205",
          "actual": "Faculty Room",
          "tentative": "PG - AIML & BMCS Faculty Room",
          "required_infra": "5 Cubicle Spaces & furnitures required\n1. Standee Rack - 2\n2. Notice Board - 2\n3. White Board - 2\n4. Computer System & Printer with furniture - 4",
          "room_type": "Faculty Room",
          "has_action": true,
          "floor_plan_key": "A205",
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "B313",
          "actual": "Class Room - Projector",
          "tentative": "AIML(PG) Class Room - Pro",
          "required_infra": "",
          "room_type": "Projector Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        }
      ]
    },
    {
      "name": "PG Cyber",
      "code": "PG-CYBER",
      "category": "Post Graduate",
      "icon": "🔐",
      "venue_count": 3,
      "action_count": 1,
      "venues": [
        {
          "room_no": "A205",
          "actual": "Faculty Room",
          "tentative": "PG - AIML & BMCS Faculty Room",
          "required_infra": "Common for PG AIML, PG Cyber",
          "room_type": "Faculty Room",
          "has_action": true,
          "floor_plan_key": "A205",
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "(C504)",
          "actual": "Class Room - Smart Board",
          "tentative": "BMCS Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "(C506)",
          "actual": "Class Room - Smart Board",
          "tentative": "BMCS Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        }
      ]
    },
    {
      "name": "MBA",
      "code": "MBA",
      "category": "Management",
      "icon": "📈",
      "venue_count": 7,
      "action_count": 1,
      "venues": [
        {
          "room_no": "B205",
          "actual": "Class Room - Projector",
          "tentative": "MBA Class Room - Pro",
          "required_infra": "",
          "room_type": "Projector Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "B207",
          "actual": "Class Room - Smart Board",
          "tentative": "MBA Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "B208",
          "actual": "Class Room - Smart Board",
          "tentative": "MBA Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "B209",
          "actual": "Faculty Room",
          "tentative": "MBA Faculty Room",
          "required_infra": "",
          "room_type": "Faculty Room",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "B210",
          "actual": "Class Room - Projector",
          "tentative": "MBA Class Room - Pro",
          "required_infra": "",
          "room_type": "Projector Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "B215",
          "actual": "Class Room - Projector",
          "tentative": "MBA Tutorial Room - Pro",
          "required_infra": "",
          "room_type": "Tutorial Room",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "(C505)",
          "actual": "Intellect Class Room - SB",
          "tentative": "MBA Computer lab",
          "required_infra": "Planned to keep Laptops; Rack/Berow for 60 laptops required",
          "room_type": "Laboratory",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        }
      ]
    },
    {
      "name": "MCA",
      "code": "MCA",
      "category": "Computer Science",
      "icon": "📱",
      "venue_count": 7,
      "action_count": 1,
      "venues": [
        {
          "room_no": "B211",
          "actual": "Class Room - Smart Board",
          "tentative": "MCA Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "B212",
          "actual": "Class Room - Projector",
          "tentative": "MCA Class Room - Pro",
          "required_infra": "",
          "room_type": "Projector Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "B213",
          "actual": "Class Room - Smart Board",
          "tentative": "MCA Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "B214",
          "actual": "Class Room - Projector",
          "tentative": "MCA Class Room - Pro",
          "required_infra": "",
          "room_type": "Projector Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "B215A",
          "actual": "Class Room - Projector",
          "tentative": "MCA Tutorial Room - Pro",
          "required_infra": "",
          "room_type": "Tutorial Room",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "B307",
          "actual": "Faculty Room",
          "tentative": "MCA Faculty Room",
          "required_infra": "",
          "room_type": "Faculty Room",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C301",
          "actual": "MBA Class Room - Smart Board",
          "tentative": "MCA Computer lab",
          "required_infra": "Planned to keep Laptops; Rack/Berow for 60 laptops required\nPower Connection for Laptops needed",
          "room_type": "Laboratory",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        }
      ]
    },
    {
      "name": "S&H",
      "code": "S&H",
      "category": "Science & Humanities",
      "icon": "🔬",
      "venue_count": 49,
      "action_count": 9,
      "venues": [
        {
          "room_no": "B106",
          "actual": "Laboratory",
          "tentative": "Physics Laboratory",
          "required_infra": "",
          "room_type": "Laboratory",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C003 (C011)",
          "actual": "RTC Laboratory",
          "tentative": "EPL Laboratory",
          "required_infra": "",
          "room_type": "Laboratory",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C013 (C023)",
          "actual": "Pharmacy Laboratory",
          "tentative": "Chemistry Laboratory",
          "required_infra": "",
          "room_type": "Laboratory",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C102, C103",
          "actual": "Pharmacy Exam Hall - Smart Board",
          "tentative": "S&H Seminar Hall",
          "required_infra": null,
          "room_type": "Seminar Hall",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C104",
          "actual": "Class Room - Projector",
          "tentative": "S&H Tutorial Room - Pro",
          "required_infra": "",
          "room_type": "Tutorial Room",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C105",
          "actual": "Class Room - Smart Board",
          "tentative": "S&H Tutorial Room - SB",
          "required_infra": "",
          "room_type": "Tutorial Room",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C106",
          "actual": "Class Room - Smart Board",
          "tentative": "S&H Tutorial Room - SB",
          "required_infra": "",
          "room_type": "Tutorial Room",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C107",
          "actual": "Class Room - Smart Board",
          "tentative": "S&H Tutorial Room - SB",
          "required_infra": "",
          "room_type": "Tutorial Room",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C108",
          "actual": "Class Room - Projector",
          "tentative": "S&H Tutorial Room - Pro",
          "required_infra": "",
          "room_type": "Tutorial Room",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C109A,C109B (C109)",
          "actual": "Class Room - Projector",
          "tentative": "S&H Communication lab",
          "required_infra": "Planned to keep Laptops; Rack/Berow for 60 laptops required\nLaptop table with seating setup with three pin socket for 60 tables",
          "room_type": "Laboratory",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C115",
          "actual": "Faculty Room",
          "tentative": "S&H Faculty Room",
          "required_infra": "24 Partitians required",
          "room_type": "Faculty Room",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C117",
          "actual": "Class Room - Projector",
          "tentative": "S&H Tutorial Room - Pro",
          "required_infra": "",
          "room_type": "Tutorial Room",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C118",
          "actual": "Class Room",
          "tentative": "S&H Tutorial Room",
          "required_infra": "",
          "room_type": "Tutorial Room",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C120",
          "actual": "Pharmacy Exam Hall - Smart Board",
          "tentative": "S&H Seminar Hall",
          "required_infra": "",
          "room_type": "Seminar Hall",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C201",
          "actual": "Experiential Learning Hub",
          "tentative": "S&H Computer lab",
          "required_infra": "Planned to keep Laptops; Rack/Berow for 60 laptops required",
          "room_type": "Laboratory",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C202",
          "actual": "MBA Faculty Room",
          "tentative": "S&H Faculty Room",
          "required_infra": "",
          "room_type": "Faculty Room",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C203",
          "actual": "Class Room - Projector",
          "tentative": "S&H Class Room - Pro",
          "required_infra": "",
          "room_type": "Projector Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C204",
          "actual": "Class Room - Projector",
          "tentative": "S&H Class Room - Pro",
          "required_infra": "",
          "room_type": "Projector Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C205",
          "actual": "Class Room - Projector",
          "tentative": "S&H Class Room - Pro",
          "required_infra": "",
          "room_type": "Projector Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C206",
          "actual": "Class Room - Projector",
          "tentative": "S&H Class Room - Pro",
          "required_infra": "",
          "room_type": "Projector Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C207",
          "actual": "Class Room - Projector",
          "tentative": "S&H Class Room - Pro",
          "required_infra": "",
          "room_type": "Projector Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C208",
          "actual": "Class Room - Projector",
          "tentative": "S&H Class Room - Pro",
          "required_infra": "",
          "room_type": "Projector Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C209",
          "actual": "Class Room - Projector",
          "tentative": "S&H Class Room - Pro",
          "required_infra": "",
          "room_type": "Projector Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C210",
          "actual": "Class Room - Projector",
          "tentative": "S&H Class Room - Pro",
          "required_infra": "",
          "room_type": "Projector Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C212",
          "actual": "Class Room - Smart Board",
          "tentative": "S&H Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C213",
          "actual": "Class Room - Smart Board",
          "tentative": "S&H Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C214",
          "actual": "Class Room - Smart Board",
          "tentative": "S&H Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C215",
          "actual": "Class Room - Smart Board",
          "tentative": "S&H Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C217",
          "actual": "Class Room - Smart Board",
          "tentative": "S&H Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C218",
          "actual": "Class Room - Smart Board",
          "tentative": "S&H Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C219",
          "actual": "Class Room - Smart Board",
          "tentative": "S&H Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C220",
          "actual": "Class Room - Smart Board",
          "tentative": "S&H Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C221",
          "actual": "Class Room - Smart Board",
          "tentative": "S&H Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C222",
          "actual": "Faculty Room",
          "tentative": "S&H Faculty Room",
          "required_infra": "",
          "room_type": "Faculty Room",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C223",
          "actual": "Class Room - Projector",
          "tentative": "S&H Class Room - Pro",
          "required_infra": "",
          "room_type": "Projector Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C224",
          "actual": "Class Room - Projector",
          "tentative": "S&H Class Room - Pro",
          "required_infra": "",
          "room_type": "Projector Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C225",
          "actual": "Class Room - Projector",
          "tentative": "S&H Class Room - Pro",
          "required_infra": "",
          "room_type": "Projector Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C226",
          "actual": "Class Room - Projector",
          "tentative": "S&H Class Room - Pro",
          "required_infra": "",
          "room_type": "Projector Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C227",
          "actual": "Class Room - Projector",
          "tentative": "S&H Class Room - Pro",
          "required_infra": "",
          "room_type": "Projector Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C228",
          "actual": "Class Room - Projector",
          "tentative": "S&H Class Room - Pro",
          "required_infra": "",
          "room_type": "Projector Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C310",
          "actual": "Class Room - Projector",
          "tentative": "S&H Class Room - Pro",
          "required_infra": "",
          "room_type": "Projector Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C312",
          "actual": "Class Room - Smart Board",
          "tentative": "S&H Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C313",
          "actual": "Class Room - Smart Board",
          "tentative": "S&H Communication lab",
          "required_infra": "Planned to keep Laptops; Rack/Berow for 60 laptops required\nLaptop table with seating setup with three pin socket for 60 tables",
          "room_type": "Laboratory",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C316",
          "actual": "Intellect Class Room - SB",
          "tentative": "S&H Computer lab",
          "required_infra": "Planned to keep Laptops; Rack/Berow for 60 laptops required",
          "room_type": "Laboratory",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C319",
          "actual": "Class Room - Smart Board",
          "tentative": "S&H Class Room - SB",
          "required_infra": "",
          "room_type": "Smart Classroom",
          "has_action": false,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C320",
          "actual": "Class Room - Smart Board",
          "tentative": "S&H Communication lab",
          "required_infra": "Planned to keep Laptops; Rack/Berow for 60 laptops required\nLaptop table with seating setup with three pin socket for 60 tables",
          "room_type": "Laboratory",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "C321",
          "actual": "Faculty Room",
          "tentative": "S&H Faculty Room & Dept.Library",
          "required_infra": "12 Partitians required\n1. Racks for Library Books\n2. 1 Computer System with furniture",
          "room_type": "Faculty Room",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "(C501)",
          "actual": "Class Room - Smart Board",
          "tentative": "CHN Laboratory",
          "required_infra": "Laptop table with seating setup with three pin socket for 60 students",
          "room_type": "Laboratory",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        },
        {
          "room_no": "(C509)",
          "actual": "Class Room - Smart Board",
          "tentative": "CHN Laboratory",
          "required_infra": "Working station Type (Tables only) - 30 nos.",
          "room_type": "Laboratory",
          "has_action": true,
          "floor_plan_key": null,
          "ece_lab_info": null,
          "budget": null
        }
      ]
    }
  ],
  "institution": {
    "title": "Institution Level Key Readiness & Infrastructure Dependencies",
    "items": [
      {
        "id": "INST-01",
        "title": "Library Readiness in C Block 6th Floor",
        "status": "Pending",
        "status_color": "warning",
        "description": "Preparation, readiness and setup of the new Central Library facility located on the 6th floor of C Block.",
        "impact": "Crucial prerequisite: Moving the library to the 6th floor frees up room C401 on the 4th floor.",
        "urgency": "High"
      },
      {
        "id": "INST-02",
        "title": "C401 Conversion to Department Faculty Room",
        "status": "Dependent on Library Shifting",
        "status_color": "info",
        "description": "After Library shifting to C Block 6th floor, C401 will be converted into the combined Faculty Room for CSE (AIML) and Cyber departments.",
        "scope": "Minimum 3 cubicle spaces and 60 workstations (30 faculty seating) with partition between 2 workstations & corresponding furnitures required. Additional: 2 Standee Racks, 2 Notice Boards, 2 White Boards, 4 Computer Systems & Printers with furniture.",
        "floor_plan_key": "C401",
        "urgency": "High"
      },
      {
        "id": "INST-03",
        "title": "ECE Laboratory Equipment Upgradation & Software Modernization",
        "status": "Budget Approved / In Planning",
        "status_color": "success",
        "description": "7 Major Laboratories earmarked for equipment modernization, Centre of Excellence (Embedded, IoT, VLSI, PCB) setups, and digital trainer kits.",
        "scope": "Total estimated lab equipment outlay: ₹37,15,000 across A109, A110, B107, C018, A308, A201, and A102. ICT Team committed 30 user licenses for MATLAB.",
        "urgency": "Medium"
      }
    ]
  },
  "consolidated": [
    {
      "id": "REQ-01",
      "description": "Racks for Dept. Library Books",
      "quantity": 18,
      "category": "Display & Storage",
      "icon": "📋"
    },
    {
      "id": "REQ-02",
      "description": "Computer System with furniture for Dept. Library",
      "quantity": 6,
      "category": "IT & Systems",
      "icon": "💻"
    },
    {
      "id": "REQ-03",
      "description": "Computer System & Printer with furniture for faculty room",
      "quantity": 19,
      "category": "IT & Systems",
      "icon": "💻"
    },
    {
      "id": "REQ-04",
      "description": "Faculty Workstations Partitians required",
      "quantity": 84,
      "category": "Furniture & Partitions",
      "icon": "🪑"
    },
    {
      "id": "REQ-05",
      "description": "Experiential mode Tables & Furniture setup",
      "quantity": "1 class room",
      "category": "Lab Infrastructure",
      "icon": "🔬"
    },
    {
      "id": "REQ-06",
      "description": "Computer System with furniture for Computer lab & ECE lab",
      "quantity": 29,
      "category": "IT & Systems",
      "icon": "💻"
    },
    {
      "id": "REQ-07",
      "description": "Rack/Berow for 30 laptops",
      "quantity": 3,
      "category": "IT & Systems",
      "icon": "💻"
    },
    {
      "id": "REQ-08",
      "description": "Rack/Berow for 60 laptops",
      "quantity": 11,
      "category": "IT & Systems",
      "icon": "💻"
    },
    {
      "id": "REQ-09",
      "description": "Berow for ECE lab",
      "quantity": 4,
      "category": "Lab Infrastructure",
      "icon": "🔬"
    },
    {
      "id": "REQ-10",
      "description": "Faculty Room - 3 cubicle spaces and 60 workstations (30 faculty seating) with partition b/n 2 workstations & correspondng furnitures",
      "quantity": 1,
      "category": "Furniture & Partitions",
      "icon": "🪑"
    },
    {
      "id": "REQ-11",
      "description": "Faculty Room - 5 cubicle spaces & Furnitures",
      "quantity": 1,
      "category": "Furniture & Partitions",
      "icon": "🪑"
    },
    {
      "id": "REQ-12",
      "description": "Faculty Room - SOC ASP - Cubicles with power connection & Furnitures",
      "quantity": 25,
      "category": "Electrical & Cabling",
      "icon": "🔌"
    },
    {
      "id": "REQ-13",
      "description": "Power sockets & line for 1 planned computer lab",
      "quantity": 1,
      "category": "IT & Systems",
      "icon": "💻"
    },
    {
      "id": "REQ-14",
      "description": "White Board for faculty Room",
      "quantity": 9,
      "category": "Display & Storage",
      "icon": "📋"
    },
    {
      "id": "REQ-15",
      "description": "Notice Board for faculty Room",
      "quantity": 16,
      "category": "Display & Storage",
      "icon": "📋"
    },
    {
      "id": "REQ-16",
      "description": "Standee Rack for faculty room",
      "quantity": 13,
      "category": "Display & Storage",
      "icon": "📋"
    },
    {
      "id": "REQ-17",
      "description": "Computer Systems for B Block Computer lab",
      "quantity": 10,
      "category": "IT & Systems",
      "icon": "💻"
    },
    {
      "id": "REQ-18",
      "description": "Workbenck (with 3 pin socket and power connection)",
      "quantity": 14,
      "category": "Electrical & Cabling",
      "icon": "🔌"
    },
    {
      "id": "REQ-19",
      "description": "SOC Project lab (2 nos.) and Communication lab (3 nos.), CHN lab - laptop table with seating setup with three pin socket for 60 students each in 6 labs & power connection",
      "quantity": 360,
      "category": "IT & Systems",
      "icon": "💻"
    },
    {
      "id": "REQ-20",
      "description": "Working station Type (Tables only) - CHN Lab",
      "quantity": 30,
      "category": "Lab Infrastructure",
      "icon": "🔬"
    }
  ],
  "floor_plans": {
    "A205": {
      "title": "A205 Faculty Room Floor Plan",
      "file": "A205 Faculty Room Floor Plan.png",
      "room": "A205",
      "block": "A Block",
      "floor": "2nd Floor",
      "description": "5 Cubicle Spaces & furnitures required for PG - AIML & BMCS Faculty Room with discussion area and storage.",
      "departments": [
        "PG AIML",
        "PG Cyber"
      ]
    },
    "C116": {
      "title": "C116 Experiential Learning Lab Floor Plan",
      "file": "C116 Experiential Learning Lab Floor Plan.png",
      "room": "C116",
      "block": "C Block",
      "floor": "1st Floor",
      "description": "Bio Brandix Studio setup with experiential round tables and collaborative furniture configuration.",
      "departments": [
        "Biotech"
      ]
    },
    "C401": {
      "title": "C401 Faculty Room Floor Plan",
      "file": "C401 Faculty Room Floor Plan.png",
      "room": "C401",
      "block": "C Block",
      "floor": "4th Floor",
      "description": "Conversion of current library to Faculty Room for CSE (AIML) & Cyber: 3 cubicles, 60 workstations with partitions.",
      "departments": [
        "UG AIML",
        "UG Cyber",
        "Institution"
      ]
    },
    "C423": {
      "title": "C423 Faculty Workspace Floor Plan",
      "file": "C423 Faculty Workspace Floor Plan.png",
      "room": "C423",
      "block": "C Block",
      "floor": "4th Floor",
      "description": "School of Computing (SOC) ASP Faculty Room: 25 cubicles with power connections and specialized workspace layout.",
      "departments": [
        "CSE",
        "IT",
        "AI&DS",
        "CSE Tamil",
        "UG Cyber"
      ]
    }
  },
  "ece_lab_suite": {
    "title": "ECE Specialized Laboratory Modernization & Equipment Budget",
    "department": "Department of Electronics and Communication Engineering",
    "institution": "Rathinam Technical Campus",
    "total_estimated_cost": "₹37,15,000",
    "ict_software_note": "Matlab software is not currenly available but the ICT team is agreed to provode 30 user licence",
    "labs": [
      {
        "venue": "A109",
        "lab_name": "Optical Lab & MPMC",
        "utilization": "Optical, MPMC",
        "raw_requirement": "Optical Fibre Communication Trainer Kit-2;Optical Fibre Analog and Digital Modulation Kit-2;Optical Fibre Attenuation Measurement Kit-2;Optical Power Meter-1;Visual Fault Locator (VFL)-1;Optical Fibre Connector and Patch Cord Kit-3 sets;Optical Fibre Cable Kit-1;Optical Fibre Stripping and Cleaning Tool Kit-1;Need Servicing for equipments & some components to purchase",
        "requirement_items": [
          "Optical Fibre Communication Trainer Kit-2",
          "Optical Fibre Analog and Digital Modulation Kit-2",
          "Optical Fibre Attenuation Measurement Kit-2",
          "Optical Power Meter-1",
          "Visual Fault Locator (VFL)-1",
          "Optical Fibre Connector and Patch Cord Kit-3 sets",
          "Optical Fibre Cable Kit-1",
          "Optical Fibre Stripping and Cleaning Tool Kit-1",
          "Need Servicing for equipments & some components to purchase"
        ],
        "amount": "₹3,00,000"
      },
      {
        "venue": "A110",
        "lab_name": "TI lab",
        "utilization": "Centre for Excellence-Embedded Systems & IoT/Research Lab",
        "raw_requirement": "ARM Cortex-M Development Kit-5;Arduino Development Kit-10;ESP32 IoT Development Kit-10;Raspberry Pi Development Kit-10;STM32 Development Board-10;Desktop Computer-30(ve to be upgraded); Temperature-Controlled Soldering Station-1",
        "requirement_items": [
          "ARM Cortex-M Development Kit-5",
          "Arduino Development Kit-10",
          "ESP32 IoT Development Kit-10",
          "Raspberry Pi Development Kit-10",
          "STM32 Development Board-10",
          "Desktop Computer-30(ve to be upgraded)",
          "Temperature-Controlled Soldering Station-1"
        ],
        "amount": "₹4,00,000"
      },
      {
        "venue": "B107",
        "lab_name": "Electronics Lab",
        "utilization": "Digital System Design Laboratory",
        "raw_requirement": "Digital IC Trainer Kit-10;Digital IC Tester-1;Desktop Computer-Core i5 or Equivalent, 16 GB RAM, 512 GB SSD-5",
        "requirement_items": [
          "Digital IC Trainer Kit-10",
          "Digital IC Tester-1",
          "Desktop Computer-Core i5 or Equivalent, 16 GB RAM, 512 GB SSD-5"
        ],
        "amount": "₹5,00,000"
      },
      {
        "venue": "C018",
        "lab_name": "Communication Systems Lab/Digital Signal Processor lab",
        "utilization": "Communication System, LIC, Digital Electronics lab;",
        "raw_requirement": "Need Servicing for equipments",
        "requirement_items": [
          "Need Servicing for equipments"
        ],
        "amount": "₹80,000"
      },
      {
        "venue": "A308",
        "lab_name": "Computer Lab New",
        "utilization": "VLSI & Embedded & DSP/Centre for Excellence - VLSI & PCB",
        "raw_requirement": "VLSI Design and EDA Software-5 licence;Digital Signal Processor Trainer Kit-5;JTAG Programmer and Debugger and DSP Interfacing Accessories;FPGA Development Kit-5;CNC PCB protyping machine-2",
        "requirement_items": [
          "VLSI Design and EDA Software-5 licence",
          "Digital Signal Processor Trainer Kit-5",
          "JTAG Programmer and Debugger and DSP Interfacing Accessories",
          "FPGA Development Kit-5",
          "CNC PCB protyping machine-2"
        ],
        "amount": "₹12,05,000(Inclusing 5 licence)"
      },
      {
        "venue": "A201",
        "lab_name": "New",
        "utilization": "Electron Devices and Analog Electronic Circuits Laboratory",
        "raw_requirement": "Digital Storage Oscilloscope (DSO)-15;Function Generator-15;Digital Multimeter-15;LCR Meter-2",
        "requirement_items": [
          "Digital Storage Oscilloscope (DSO)-15",
          "Function Generator-15",
          "Digital Multimeter-15",
          "LCR Meter-2"
        ],
        "amount": "₹7,00,000"
      },
      {
        "venue": "A102",
        "lab_name": "Project Lab New",
        "utilization": "Project Lab New",
        "raw_requirement": "Electronic Component Kit – Resistors, Capacitors, Diodes, Transistors and Ics,MSO-1,RPS-5,Soldering station-2;Desktop computer-5",
        "requirement_items": [
          "Electronic Component Kit – Resistors, Capacitors, Diodes, Transistors and Ics,MSO-1,RPS-5,Soldering station-2",
          "Desktop computer-5"
        ],
        "amount": "₹5,30,000"
      }
    ]
  },
  "summary_stats": {
    "total_departments": 13,
    "total_venues": 191,
    "venues_requiring_infra": 60,
    "consolidated_requirement_items": 20,
    "floor_plans_count": 4,
    "ece_total_budget": "₹37,15,000"
  }
};
