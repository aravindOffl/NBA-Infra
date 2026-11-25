"""
Script to synchronize data from Venue_Details.xlsx and ECE Venue_Details.xlsx into infra_data.json and data.js
"""
import openpyxl
import json
import re

# Load Main Venue Details
wb = openpyxl.load_workbook('Venue_Details.xlsx', data_only=True)
sheet = wb['Required Infra']

# Load ECE Venue Details
wb_ece = openpyxl.load_workbook('ECE Venue_Details.xlsx', data_only=True)
s_ece = wb_ece['Sheet1']

# Parse ECE specialized lab details
ece_labs = {}
total_estimated_cost = "₹37,15,000"
ict_software_note = "Matlab software is not currently available but the ICT team has agreed to provide 30 user licenses"

def format_inr(val):
    if not val:
        return ""
    if isinstance(val, (int, float)):
        s = str(int(val))
        if len(s) > 3:
            last3 = s[-3:]
            rest = s[:-3]
            parts = []
            while len(rest) > 2:
                parts.insert(0, rest[-2:])
                rest = rest[:-2]
            if rest:
                parts.insert(0, rest)
            return f"₹{','.join(parts)},{last3}"
        return f"₹{s}"
    s_val = str(val).strip()
    return s_val if s_val.startswith('₹') else f"₹{s_val}"

for r in range(8, 15):
    venue_code = str(s_ece.cell(r, 1).value).strip() if s_ece.cell(r, 1).value else ""
    lab_name = str(s_ece.cell(r, 2).value).strip() if s_ece.cell(r, 2).value else ""
    utilization = str(s_ece.cell(r, 3).value).strip() if s_ece.cell(r, 3).value else ""
    requirement = str(s_ece.cell(r, 4).value).strip() if s_ece.cell(r, 4).value else ""
    amount_raw = s_ece.cell(r, 5).value
    
    amount_str = format_inr(amount_raw)
        
    # Split requirements by semicolon for clean bullet formatting
    req_items = [item.strip() for item in requirement.split(';') if item.strip()]
    
    ece_labs[venue_code] = {
        "venue": venue_code,
        "lab_name": lab_name,
        "utilization": utilization,
        "raw_requirement": requirement,
        "requirement_items": req_items,
        "amount": amount_str
    }

# Check total cost and note rows
for r in range(15, s_ece.max_row + 1):
    c4 = s_ece.cell(r, 4).value
    c5 = s_ece.cell(r, 5).value
    c2 = s_ece.cell(r, 2).value
    if c4 and 'total' in str(c4).lower():
        total_estimated_cost = f"₹{c5}" if not str(c5).startswith('₹') else str(c5)
    if c2 and 'matlab' in str(c2).lower():
        ict_software_note = str(c2).strip()

departments_meta = [
    {"name": "Biotech", "code": "BT", "start": 1, "end": 21, "icon": "🧬", "category": "Engineering"},
    {"name": "ECE", "code": "ECE", "start": 22, "end": 41, "icon": "⚡", "category": "Engineering"},
    {"name": "CSE", "code": "CSE", "start": 42, "end": 66, "icon": "💻", "category": "Computer Science"},
    {"name": "IT", "code": "IT", "start": 67, "end": 89, "icon": "🌐", "category": "Computer Science"},
    {"name": "AI&DS", "code": "AIDS", "start": 90, "end": 114, "icon": "🤖", "category": "Computer Science"},
    {"name": "CSE Tamil", "code": "CSE-T", "start": 115, "end": 123, "icon": "🗣️", "category": "Computer Science"},
    {"name": "UG AIML", "code": "UG-AIML", "start": 124, "end": 136, "icon": "🧠", "category": "Computer Science"},
    {"name": "UG Cyber", "code": "UG-CYBER", "start": 137, "end": 147, "icon": "🛡️", "category": "Computer Science"},
    {"name": "PG AIML", "code": "PG-AIML", "start": 148, "end": 152, "icon": "🎓", "category": "Post Graduate"},
    {"name": "PG Cyber", "code": "PG-CYBER", "start": 153, "end": 158, "icon": "🔐", "category": "Post Graduate"},
    {"name": "MBA", "code": "MBA", "start": 159, "end": 168, "icon": "📈", "category": "Management"},
    {"name": "MCA", "code": "MCA", "start": 169, "end": 178, "icon": "📱", "category": "Computer Science"},
    {"name": "S&H", "code": "S&H", "start": 179, "end": 231, "icon": "🔬", "category": "Science & Humanities"}
]

floor_plans = {
    "A205": {
        "title": "A205 Faculty Room Floor Plan",
        "file": "A205 Faculty Room Floor Plan.png",
        "room": "A205",
        "block": "A Block",
        "floor": "2nd Floor",
        "description": "5 Cubicle Spaces & furnitures required for PG - AIML & BMCS Faculty Room with discussion area and storage.",
        "departments": ["PG AIML", "PG Cyber"]
    },
    "C116": {
        "title": "C116 Experiential Learning Lab Floor Plan",
        "file": "C116 Experiential Learning Lab Floor Plan.png",
        "room": "C116",
        "block": "C Block",
        "floor": "1st Floor",
        "description": "Bio Brandix Studio setup with experiential round tables and collaborative furniture configuration.",
        "departments": ["Biotech"]
    },
    "C401": {
        "title": "C401 Faculty Room Floor Plan",
        "file": "C401 Faculty Room Floor Plan.png",
        "room": "C401",
        "block": "C Block",
        "floor": "4th Floor",
        "description": "Conversion of current library to Faculty Room for CSE (AIML) & Cyber: 3 cubicles, 60 workstations with partitions.",
        "departments": ["UG AIML", "UG Cyber", "Institution"]
    },
    "C423": {
        "title": "C423 Faculty Workspace Floor Plan",
        "file": "C423 Faculty Workspace Floor Plan.png",
        "room": "C423",
        "block": "C Block",
        "floor": "4th Floor",
        "description": "School of Computing (SOC) ASP Faculty Room: 25 cubicles with power connections and specialized workspace layout.",
        "departments": ["CSE", "IT", "AI&DS", "CSE Tamil", "UG Cyber"]
    }
}

def get_room_type(actual, tentative):
    text = f"{actual or ''} {tentative or ''}".lower()
    if 'faculty' in text or 'workspace' in text:
        return 'Faculty Room'
    elif 'lab' in text:
        return 'Laboratory'
    elif 'seminar' in text:
        return 'Seminar Hall'
    elif 'tutorial' in text:
        return 'Tutorial Room'
    elif 'smart board' in text or '- sb' in text or 'smart' in text:
        return 'Smart Classroom'
    elif 'projector' in text or '- pro' in text:
        return 'Projector Classroom'
    elif 'library' in text:
        return 'Library'
    elif 'studio' in text or 'hub' in text or 'space' in text:
        return 'Studio / Hub'
    else:
        return 'Classroom / General'

departments = []

for dept in departments_meta:
    dname = dept["name"]
    start = dept["start"]
    end = dept["end"]
    venues = []
    
    r = start
    while r <= end:
        v0 = sheet.cell(r, 1).value
        v1 = sheet.cell(r, 2).value
        v2 = sheet.cell(r, 3).value
        v3 = sheet.cell(r, 4).value
        
        if v0 in [dname, 'Class Room No', None] and v1 is None and v2 is None:
            r += 1
            continue
        if v0 == 'Class Room No':
            r += 1
            continue
            
        if v0 == 'A306' and r + 1 <= end and sheet.cell(r + 1, 1).value == 'A307':
            room_no = "A306, A307"
            actual = v1
            tentative = v2
            infra = v3
            r += 2
        elif v0 == 'C102' and r + 1 <= end and sheet.cell(r + 1, 1).value == 'C103':
            room_no = "C102, C103"
            actual = v1
            tentative = v2
            infra = v3
            r += 2
        else:
            room_no = str(v0).strip() if v0 is not None else ""
            actual = str(v1).strip() if v1 is not None else ""
            tentative = str(v2).strip() if v2 is not None else ""
            infra = str(v3).strip() if v3 is not None else ""
            r += 1
            
        if not room_no and not actual and not tentative and not infra:
            continue
            
        has_fp = None
        for fp_key in floor_plans:
            if fp_key in room_no:
                has_fp = fp_key
                break
                
        # ECE Lab Detail Enrichment
        ece_lab_info = None
        budget = None
        
        if dname == "ECE":
            # Check match against ece_labs
            for e_code, e_data in ece_labs.items():
                if e_code in room_no or (e_code == "C018" and "C018" in room_no):
                    ece_lab_info = e_data
                    budget = e_data["amount"]
                    
                    # Augment tentative and infra
                    extra_infra = "\n".join([f"• {it}" for it in e_data["requirement_items"]])
                    if infra and infra != '-':
                        infra = f"{infra}\n\n[Laboratory Equipment & Modernization - Budget: {budget}]:\n{extra_infra}"
                    else:
                        infra = f"[Laboratory Equipment & Modernization - Budget: {budget}]:\n{extra_infra}"
                        
                    if e_data["utilization"] and e_data["utilization"] != tentative:
                        tentative = f"{tentative} / {e_data['utilization']}"
                    break

        venues.append({
            "room_no": room_no,
            "actual": actual,
            "tentative": tentative,
            "required_infra": infra,
            "room_type": get_room_type(actual, tentative),
            "has_action": bool(infra and infra != '-' and 'none' not in infra.lower()),
            "floor_plan_key": has_fp,
            "ece_lab_info": ece_lab_info,
            "budget": budget
        })
        
    action_count = sum(1 for v in venues if v["has_action"])
    
    dept_obj = {
        "name": dname,
        "code": dept["code"],
        "category": dept["category"],
        "icon": dept["icon"],
        "venue_count": len(venues),
        "action_count": action_count,
        "venues": venues
    }
    
    # Add ECE-specific specialized laboratory suite data
    if dname == "ECE":
        dept_obj["ece_lab_suite"] = {
            "title": "ECE Specialized Laboratory Modernization & Equipment Budget",
            "department": "Department of Electronics and Communication Engineering",
            "institution": "Rathinam Technical Campus",
            "total_estimated_cost": total_estimated_cost,
            "ict_software_note": ict_software_note,
            "labs": list(ece_labs.values())
        }
        
    departments.append(dept_obj)

institution = {
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
            "scope": f"Total estimated lab equipment outlay: {total_estimated_cost} across A109, A110, B107, C018, A308, A201, and A102. ICT Team committed 30 user licenses for MATLAB.",
            "urgency": "Medium"
        }
    ]
}

consolidated_items = []
for r in range(237, 257):
    item_name = sheet.cell(r, 1).value
    qty = sheet.cell(r, 3).value
    if item_name is not None:
        cat = "Furniture & Partitions"
        icon = "🪑"
        name_lower = str(item_name).lower()
        if 'computer' in name_lower or 'system' in name_lower or 'printer' in name_lower or 'laptop' in name_lower:
            cat = "IT & Systems"
            icon = "💻"
        elif 'board' in name_lower or 'rack' in name_lower or 'standee' in name_lower:
            cat = "Display & Storage"
            icon = "📋"
        elif 'power' in name_lower or 'socket' in name_lower or 'line' in name_lower:
            cat = "Electrical & Cabling"
            icon = "🔌"
        elif 'workbenck' in name_lower or 'lab' in name_lower or 'experiential' in name_lower:
            cat = "Lab Infrastructure"
            icon = "🔬"
            
        consolidated_items.append({
            "id": f"REQ-{len(consolidated_items)+1:02d}",
            "description": str(item_name).strip(),
            "quantity": qty,
            "category": cat,
            "icon": icon
        })

output_data = {
    "departments": departments,
    "institution": institution,
    "consolidated": consolidated_items,
    "floor_plans": floor_plans,
    "ece_lab_suite": {
        "title": "ECE Specialized Laboratory Modernization & Equipment Budget",
        "department": "Department of Electronics and Communication Engineering",
        "institution": "Rathinam Technical Campus",
        "total_estimated_cost": total_estimated_cost,
        "ict_software_note": ict_software_note,
        "labs": list(ece_labs.values())
    },
    "summary_stats": {
        "total_departments": len(departments),
        "total_venues": sum(d["venue_count"] for d in departments),
        "venues_requiring_infra": sum(d["action_count"] for d in departments),
        "consolidated_requirement_items": len(consolidated_items),
        "floor_plans_count": len(floor_plans),
        "ece_total_budget": total_estimated_cost
    }
}

with open('infra_data.json', 'w', encoding='utf-8') as f:
    json.dump(output_data, f, indent=2, ensure_ascii=False)

with open('data.js', 'w', encoding='utf-8') as f:
    f.write('// NBA Infrastructure Data\nconst INFRA_DATA = ')
    json.dump(output_data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("Sync completed successfully with ECE venue details!")
print(f"Departments: {len(departments)}")
print(f"Total Venues: {output_data['summary_stats']['total_venues']}")
print(f"Venues with required infra: {output_data['summary_stats']['venues_requiring_infra']}")
print(f"ECE Lab Venues enriched: {len(ece_labs)}")
