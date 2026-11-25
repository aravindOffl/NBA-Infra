// NBA Infrastructure Portal Interactive Logic
(function() {
  'use strict';

  // State
  let currentDepartmentIndex = 0;
  let currentFilter = 'all';
  let searchQuery = '';
  let consolidatedFilter = 'all';
  let consolidatedSearch = '';
  let zoomLevel = 1;

  // DOM Elements
  const deptListEl = document.getElementById('deptList');
  const deptContentEl = document.getElementById('deptContent');
  const modalBackdrop = document.getElementById('blueprintModal');
  const modalImg = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDescription');
  const modalDeptList = document.getElementById('modalDepartments');

  // Initialize
  function init() {
    renderGlobalStats();
    renderDepartmentList();
    renderCurrentDepartment();
    renderInstitutionView();
    renderConsolidatedView();
    renderFloorPlansGallery();
    setupNavigation();
    setupModalEvents();
    handleUrlHash();
  }

  // Handle URL hashes, pathname, or parameters
  function handleUrlHash() {
    const pathname = window.location.pathname.toLowerCase();
    let initialTab = 'departments';

    if (pathname.endsWith('institution.html')) {
      initialTab = 'institution';
    } else if (pathname.endsWith('consolidated.html')) {
      initialTab = 'consolidated';
    } else if (pathname.endsWith('floorplans.html')) {
      initialTab = 'floorplans';
    } else {
      const hash = window.location.hash.replace('#', '') || 'departments';
      if (['departments', 'institution', 'consolidated', 'floorplans'].includes(hash)) {
        initialTab = hash;
      }
    }

    switchTab(initialTab);
    
    // Check url search params for dept
    const params = new URLSearchParams(window.location.search);
    const deptParam = params.get('dept');
    if (deptParam) {
      const idx = INFRA_DATA.departments.findIndex(d => 
        d.name.toLowerCase() === deptParam.toLowerCase() || 
        d.code.toLowerCase() === deptParam.toLowerCase()
      );
      if (idx !== -1) {
        selectDepartment(idx);
      }
    }
  }

  // Render Top Level Stats
  function renderGlobalStats() {
    const s = INFRA_DATA.summary_stats;
    const statsContainer = document.getElementById('globalStats');
    if (!statsContainer) return;

    statsContainer.innerHTML = `
      <div class="stat-card">
        <div class="stat-icon blue">🏢</div>
        <div class="stat-content">
          <div class="stat-value">${s.total_departments}</div>
          <div class="stat-label">Departments</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon cyan">📍</div>
        <div class="stat-content">
          <div class="stat-value">${s.total_venues}</div>
          <div class="stat-label">Total Venues</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon amber">⚠️</div>
        <div class="stat-content">
          <div class="stat-value">${s.venues_requiring_infra}</div>
          <div class="stat-label">Action Items</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon purple">📐</div>
        <div class="stat-content">
          <div class="stat-value">${s.floor_plans_count}</div>
          <div class="stat-label">Floor Plans</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon emerald">📋</div>
        <div class="stat-content">
          <div class="stat-value">${s.consolidated_requirement_items}</div>
          <div class="stat-label">Consolidated Items</div>
        </div>
      </div>
      ${s.ece_total_budget ? `
        <div class="stat-card" style="border-left: 3px solid #10b981; cursor: pointer;" onclick="window.selectDepartment(1); window.switchTab('departments');" title="Click to view ECE specialized laboratories">
          <div class="stat-icon emerald">⚡</div>
          <div class="stat-content">
            <div class="stat-value" style="font-size: 1.3rem; color: #047857;">${s.ece_total_budget}</div>
            <div class="stat-label">ECE Lab Outlay</div>
          </div>
        </div>
      ` : ''}
    `;
  }

  // Render Left Department Sidebar
  function renderDepartmentList() {
    if (!deptListEl) return;
    deptListEl.innerHTML = INFRA_DATA.departments.map((dept, index) => {
      const isActive = index === currentDepartmentIndex;
      return `
        <div class="dept-item ${isActive ? 'active' : ''}" data-index="${index}" onclick="window.selectDepartment(${index})">
          <div class="dept-item-left">
            <div class="dept-item-icon">${dept.icon}</div>
            <div>
              <div class="dept-item-name">${dept.name}</div>
              <div class="dept-item-sub">${dept.category}</div>
            </div>
          </div>
          <div class="dept-item-badges">
            <span class="pill-count" title="Total Venues">${dept.venue_count}</span>
            ${dept.action_count > 0 ? `<span class="pill-action" title="Infra Requirements Needed">${dept.action_count}</span>` : ''}
          </div>
        </div>
      `;
    }).join('');
  }

  // Switch Selected Department
  window.selectDepartment = function(index) {
    currentDepartmentIndex = index;
    currentFilter = 'all';
    searchQuery = '';
    renderDepartmentList();
    renderCurrentDepartment();
    
    // Smooth scroll to top of content on mobile
    if (window.innerWidth <= 1024) {
      deptContentEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Render Details of Currently Selected Department
  function renderCurrentDepartment() {
    const dept = INFRA_DATA.departments[currentDepartmentIndex];
    if (!dept || !deptContentEl) return;

    // Filter venues
    let filteredVenues = dept.venues.filter(v => {
      if (currentFilter === 'action' && !v.has_action) return false;
      if (currentFilter === 'smart' && v.room_type !== 'Smart Classroom') return false;
      if (currentFilter === 'projector' && v.room_type !== 'Projector Classroom') return false;
      if (currentFilter === 'lab' && v.room_type !== 'Laboratory') return false;
      if (currentFilter === 'faculty' && v.room_type !== 'Faculty Room') return false;
      
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const text = `${v.room_no} ${v.actual} ${v.tentative} ${v.required_infra} ${v.room_type}`.toLowerCase();
        return text.includes(q);
      }
      return true;
    });

    // Counts for pill buttons
    const smartCount = dept.venues.filter(v => v.room_type === 'Smart Classroom').length;
    const proCount = dept.venues.filter(v => v.room_type === 'Projector Classroom').length;
    const labCount = dept.venues.filter(v => v.room_type === 'Laboratory').length;
    const facCount = dept.venues.filter(v => v.room_type === 'Faculty Room').length;

    // Associated floor plans for this department
    const relatedPlans = Object.entries(INFRA_DATA.floor_plans).filter(([key, fp]) => 
      fp.departments.includes(dept.name) || dept.venues.some(v => v.floor_plan_key === key)
    );

    let html = `
      <!-- Department Hero Banner -->
      <div class="dept-hero">
        <div class="dept-hero-title">
          <div class="dept-hero-icon">${dept.icon}</div>
          <div>
            <h2 class="dept-hero-heading">${dept.name}</h2>
            <div class="dept-hero-meta">
              <span class="dept-tag">${dept.category}</span>
              <span class="dept-tag">${dept.code}</span>
              ${dept.ece_lab_suite ? `
                <span class="dept-tag" style="background:#ecfdf5;color:#047857;font-weight:700;">💰 Lab Modernization: ${dept.ece_lab_suite.total_estimated_cost}</span>
                <span class="dept-tag" style="background:#eff6ff;color:#1e40af;font-weight:700;">💻 30 MATLAB Licenses</span>
              ` : ''}
              ${relatedPlans.length > 0 ? `<span class="dept-tag" style="background:#eff6ff;color:#2563eb;font-weight:700;">📐 ${relatedPlans.length} Floor Plan Attached</span>` : ''}
            </div>
          </div>
        </div>
        <div class="dept-hero-stats">
          <div class="hero-stat-item">
            <div class="hero-stat-num">${dept.venue_count}</div>
            <div class="hero-stat-title">Venues</div>
          </div>
          <div class="hero-stat-item">
            <div class="hero-stat-num" style="color: ${dept.action_count > 0 ? '#d97706' : '#10b981'};">${dept.action_count}</div>
            <div class="hero-stat-title">Action Items</div>
          </div>
          <div class="hero-stat-item">
            <div class="hero-stat-num">${smartCount + proCount}</div>
            <div class="hero-stat-title">Classrooms</div>
          </div>
          <div class="hero-stat-item">
            <div class="hero-stat-num">${labCount}</div>
            <div class="hero-stat-title">Laboratories</div>
          </div>
        </div>
      </div>

      <!-- Controls (Filter Pills + Search) -->
      <div class="controls-bar">
        <div class="filter-pills">
          <button class="filter-btn ${currentFilter === 'all' ? 'active' : ''}" onclick="window.setFilter('all')">
            All Venues (${dept.venues.length})
          </button>
          ${dept.action_count > 0 ? `
            <button class="filter-btn action-filter ${currentFilter === 'action' ? 'active' : ''}" onclick="window.setFilter('action')">
              ⚠️ Needs Infra (${dept.action_count})
            </button>
          ` : ''}
          ${smartCount > 0 ? `
            <button class="filter-btn ${currentFilter === 'smart' ? 'active' : ''}" onclick="window.setFilter('smart')">
              Smart Boards (${smartCount})
            </button>
          ` : ''}
          ${proCount > 0 ? `
            <button class="filter-btn ${currentFilter === 'projector' ? 'active' : ''}" onclick="window.setFilter('projector')">
              Projectors (${proCount})
            </button>
          ` : ''}
          ${labCount > 0 ? `
            <button class="filter-btn ${currentFilter === 'lab' ? 'active' : ''}" onclick="window.setFilter('lab')">
              Labs (${labCount})
            </button>
          ` : ''}
          ${facCount > 0 ? `
            <button class="filter-btn ${currentFilter === 'faculty' ? 'active' : ''}" onclick="window.setFilter('faculty')">
              Faculty Rooms (${facCount})
            </button>
          ` : ''}
        </div>
        
        <div class="search-box-wrapper">
          <span class="search-icon">🔍</span>
          <input type="text" class="search-input" placeholder="Search room, actual, plan or infra..." 
            value="${escapeHtml(searchQuery)}" oninput="window.handleSearch(this.value)">
        </div>
      </div>

      <!-- Venues Table -->
      <div class="table-card">
        <div class="table-responsive">
          <table class="custom-table">
            <thead>
              <tr>
                <th style="width: 13%;">Room No</th>
                <th style="width: 25%;">Actual Current Status</th>
                <th style="width: 25%;">NBA (Tentative Plan)</th>
                <th style="width: 27%;">Required Infrastructure</th>
                <th style="width: 10%; text-align: center;">Blueprint</th>
              </tr>
            </thead>
            <tbody>
              ${filteredVenues.length === 0 ? `
                <tr>
                  <td colspan="5" class="empty-state">
                    <div class="empty-state-icon">🔎</div>
                    <div>No venues matching the current filter or search criteria.</div>
                  </td>
                </tr>
              ` : filteredVenues.map(v => {
                const tagClass = getRoomTagClass(v.room_type);
                return `
                  <tr class="${v.has_action ? 'has-action-row' : ''}">
                    <td>
                      <span class="room-badge">${v.room_no}</span>
                      <br>
                      <span class="room-type-tag ${tagClass}">${v.room_type}</span>
                      ${v.budget ? `<br><span class="budget-badge" style="margin-top:5px;">💰 ${v.budget}</span>` : ''}
                    </td>
                    <td>
                      <div class="actual-use">${v.actual || '<span class="infra-none">Not specified</span>'}</div>
                    </td>
                    <td>
                      <div class="nba-plan">${v.tentative || '<span class="infra-none">Not specified</span>'}</div>
                    </td>
                    <td>
                      ${v.required_infra && v.required_infra !== '-' ? `
                        <div class="infra-desc action-needed">${formatInfraText(v.required_infra)}</div>
                      ` : `
                        <span class="infra-none">None specified</span>
                      `}
                    </td>
                    <td style="text-align: center;">
                      ${v.floor_plan_key ? `
                        <button class="btn-blueprint" onclick="window.openBlueprintModal('${v.floor_plan_key}')" title="Click to view full architectural blueprint">
                          📐 Floor Plan
                        </button>
                      ` : '<span style="color:#94a3b8; font-size:0.8rem;">—</span>'}
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;

    // Attached Floor Plans Section if available
    if (relatedPlans.length > 0) {
      html += `
        <div class="dept-blueprint-section">
          <div class="blueprint-section-title">
            <span>📐</span> Architectural Floor Plans for ${dept.name}
          </div>
          <div class="blueprints-grid">
            ${relatedPlans.map(([key, fp]) => `
              <div class="blueprint-card">
                <div class="blueprint-thumb-wrapper" onclick="window.openBlueprintModal('${key}')">
                  <img src="${fp.file}" alt="${fp.title}" class="blueprint-thumb">
                  <div class="blueprint-badge">Room ${fp.room} &bull; ${fp.floor}</div>
                  <button class="blueprint-overlay-btn" type="button">
                    🔍 View Full Blueprint
                  </button>
                </div>
                <div class="blueprint-info">
                  <div class="blueprint-title">${fp.title}</div>
                  <div class="blueprint-meta">📍 ${fp.block}, ${fp.floor}</div>
                  <div class="blueprint-desc">${fp.description}</div>
                  <div class="blueprint-departments">
                    ${fp.departments.map(d => `<span class="blueprint-dept-tag">${d}</span>`).join('')}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    // ECE Specialized Laboratory Suite if applicable
    if (dept.ece_lab_suite) {
      const suite = dept.ece_lab_suite;
      html += `
        <div class="ece-suite-section">
          <div class="ece-suite-header">
            <div>
              <h3 style="font-size:1.25rem; font-weight:800; color:var(--navy); display:flex; align-items:center; gap:0.5rem;">
                <span>⚡</span> ECE Laboratory Modernization & Equipment Budget Suite
              </h3>
              <div style="font-size:0.85rem; color:var(--text-muted); margin-top:2px;">
                ${suite.institution} &bull; ${suite.department}
              </div>
            </div>
            <div class="btn-action-group">
              <span class="qty-badge high" style="font-size:1rem; padding:0.4rem 0.85rem;">
                Total Estimated Cost: ${suite.total_estimated_cost}
              </span>
            </div>
          </div>

          <div class="ece-banner-grid">
            <div class="ece-mini-stat">
              <div class="ece-mini-label">Modernized Laboratories</div>
              <div class="ece-mini-value">${suite.labs.length} Labs</div>
            </div>
            <div class="ece-mini-stat">
              <div class="ece-mini-label">Total Outlay Required</div>
              <div class="ece-mini-value" style="color:#047857;">${suite.total_estimated_cost}</div>
            </div>
            <div class="ece-mini-stat">
              <div class="ece-mini-label">Software Readiness</div>
              <div class="ece-mini-value" style="font-size:1.15rem; color:#1d4ed8;">30 MATLAB Licenses</div>
            </div>
            <div class="ece-mini-stat">
              <div class="ece-mini-label">CoE Research Focus</div>
              <div class="ece-mini-value" style="font-size:1.05rem;">Embedded, IoT, VLSI, PCB</div>
            </div>
          </div>

          <div class="ece-notice-box">
            <span style="font-size:1.3rem;">ℹ️</span>
            <div>
              <strong>Software Licensing Update:</strong> ${escapeHtml(suite.ict_software_note)}
            </div>
          </div>

          <div class="table-card">
            <div class="table-responsive">
              <table class="custom-table">
                <thead>
                  <tr>
                    <th style="width: 10%;">Venue</th>
                    <th style="width: 22%;">Lab Name</th>
                    <th style="width: 24%;">Utilization & CoE Focus</th>
                    <th style="width: 32%;">Equipment / Kit Requirements</th>
                    <th style="width: 12%; text-align: right;">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  ${suite.labs.map(lab => `
                    <tr>
                      <td><span class="room-badge">${lab.venue}</span></td>
                      <td><div style="font-weight:700; color:var(--navy);">${escapeHtml(lab.lab_name)}</div></td>
                      <td><div style="font-size:0.85rem; color:#334155; line-height:1.4;">${escapeHtml(lab.utilization)}</div></td>
                      <td>
                        <ul style="font-size:0.82rem; color:#1e293b; padding-left:1.1rem; line-height:1.45; margin:0;">
                          ${lab.requirement_items.map(it => `<li>${escapeHtml(it)}</li>`).join('')}
                        </ul>
                      </td>
                      <td style="text-align: right;">
                        <span class="budget-badge" style="font-size:0.85rem;">${lab.amount}</span>
                      </td>
                    </tr>
                  `).join('')}
                  <tr style="background:#f8fafc; font-weight:700;">
                    <td colspan="4" style="text-align:right; font-size:0.95rem; color:var(--navy);">
                      Total Estimated Modernization Cost:
                    </td>
                    <td style="text-align:right;">
                      <span class="qty-badge high" style="font-size:0.95rem;">${suite.total_estimated_cost}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `;
    }

    deptContentEl.innerHTML = html;
  }

  // Filter Handler
  window.setFilter = function(filter) {
    currentFilter = filter;
    renderCurrentDepartment();
  };

  // Search Handler
  window.handleSearch = function(val) {
    searchQuery = val;
    renderCurrentDepartment();
  };

  // Helper for Room Type Tag Class
  function getRoomTagClass(type) {
    switch(type) {
      case 'Smart Classroom': return 'smart';
      case 'Projector Classroom': return 'pro';
      case 'Laboratory': return 'lab';
      case 'Faculty Room': return 'faculty';
      case 'Seminar Hall': return 'seminar';
      default: return 'other';
    }
  }

  // Helper to format infra text nicely
  function formatInfraText(text) {
    return text.split('\n').map(line => {
      line = line.trim();
      if (!line) return '';
      return `<div style="margin-bottom: 3px;">${escapeHtml(line)}</div>`;
    }).join('');
  }

  // Escape HTML helper
  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function(m) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      }[m];
    });
  }

  // Render Institution View
  function renderInstitutionView() {
    const container = document.getElementById('institutionView');
    if (!container) return;

    const fp = INFRA_DATA.floor_plans['C401'];

    container.innerHTML = `
      <div class="institution-hero">
        <h1>🏛️ Institution-Level Key Infrastructure Readiness</h1>
        <p>Strategic campus prerequisites, library transitions, and space reallocation plans governing the NBA accreditation preparedness.</p>
      </div>

      <div class="institution-grid">
        <!-- Milestone 1: Library Readiness -->
        <div class="institution-card">
          <div class="card-header-badge">
            <span style="font-size:0.8rem; font-weight:700; color:#64748b;">PREREQUISITE #1</span>
            <span class="status-pill pending">⚠️ Status: Pending</span>
          </div>
          <h2 style="font-size: 1.3rem; font-weight: 700; color: #0f172a; margin-bottom: 0.5rem;">
            Central Library Readiness in C Block 6th Floor
          </h2>
          <p style="color: #475569; font-size: 0.95rem; margin-bottom: 1.25rem;">
            Preparation, civil completion, and furniture outfitting of the new Central Library facility situated on the 6th floor of C-Block.
          </p>

          <div style="background:#fffbeb; border:1px solid #fde68a; border-radius:8px; padding:1rem; margin-bottom:1.25rem;">
            <div style="font-weight:700; color:#92400e; font-size:0.85rem; margin-bottom:0.25rem;">CRITICAL DEPENDENCY</div>
            <div style="font-size:0.88rem; color:#b45309;">
              The current Central Library occupies Room <strong>C401</strong> on the 4th floor. Until the 6th floor library is certified fully ready and books/furniture are relocated, C401 cannot be handed over for faculty workspace conversion.
            </div>
          </div>

          <div class="timeline-chain">
            <div class="timeline-step">
              <div class="timeline-num pending-step">1</div>
              <div class="timeline-content">
                <h4>C-Block 6th Floor Library Civil & Fitout Readiness</h4>
                <p>Status: Currently in progress / Pending certification.</p>
              </div>
            </div>
            <div class="timeline-step">
              <div class="timeline-num">2</div>
              <div class="timeline-content">
                <h4>Relocation of Books, Systems & Furnishings</h4>
                <p>Scheduled immediately upon 6th floor handover.</p>
              </div>
            </div>
            <div class="timeline-step">
              <div class="timeline-num">3</div>
              <div class="timeline-content">
                <h4>C401 Room Vacated & Cleared for Conversion</h4>
                <p>Unlocks work for UG AIML & UG Cyber Faculty Room.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Milestone 2: C401 Conversion -->
        <div class="institution-card">
          <div class="card-header-badge">
            <span style="font-size:0.8rem; font-weight:700; color:#64748b;">PREREQUISITE #2</span>
            <span class="status-pill dependent">🔗 Dependent on Shifting</span>
          </div>
          <h2 style="font-size: 1.3rem; font-weight: 700; color: #0f172a; margin-bottom: 0.5rem;">
            C401 Conversion to CSE (AIML) & Cyber Faculty Room
          </h2>
          <p style="color: #475569; font-size: 0.95rem; margin-bottom: 1.25rem;">
            Reconfiguration of current library hall into modern faculty workspace accommodating AIML & Cyber faculty members.
          </p>

          <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:1rem; margin-bottom:1.25rem;">
            <div style="font-weight:700; color:#0f172a; font-size:0.85rem; margin-bottom:0.5rem;">REQUIRED INFRASTRUCTURE SPECIFICATION</div>
            <ul style="font-size:0.88rem; color:#334155; padding-left:1.2rem; line-height:1.6;">
              <li><strong>Faculty Workstations:</strong> Minimum 3 cubicle spaces and 60 workstations (30 faculty seating pairs) with partition between 2 workstations & corresponding furnitures.</li>
              <li><strong>Display Boards:</strong> 2 Standee Racks, 2 Notice Boards, 2 White Boards.</li>
              <li><strong>IT & Systems:</strong> 4 Computer Systems & Printers with specialized furniture.</li>
            </ul>
          </div>

          <div style="margin-top:auto;">
            <button class="modal-btn" style="width:100%; justify-content:center; padding:0.75rem; background:#2563eb; color:white; border:none;"
              onclick="window.openBlueprintModal('C401')">
              📐 View Approved Architectural Floor Plan for C401
            </button>
          </div>
        </div>

        <!-- Milestone 3: ECE Modernization -->
        <div class="institution-card">
          <div class="card-header-badge">
            <span style="font-size:0.8rem; font-weight:700; color:#64748b;">STRATEGIC INITIATIVE #3</span>
            <span class="status-pill ready">⚡ In Planning / Approved</span>
          </div>
          <h2 style="font-size: 1.3rem; font-weight: 700; color: #0f172a; margin-bottom: 0.5rem;">
            ECE Specialized Laboratories & Modernization Outlay
          </h2>
          <p style="color: #475569; font-size: 0.95rem; margin-bottom: 1.25rem;">
            Comprehensive instrumentation and kit upgradation across 7 core laboratories including Embedded Systems, IoT, VLSI, Optical, and DSP research hubs.
          </p>

          <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:1rem; margin-bottom:1.25rem;">
            <div style="font-weight:700; color:#0f172a; font-size:0.85rem; margin-bottom:0.5rem;">KEY HIGHLIGHTS & OUTLAY</div>
            <ul style="font-size:0.88rem; color:#334155; padding-left:1.2rem; line-height:1.6;">
              <li><strong>Total Estimated Budget:</strong> <span style="font-weight:700; color:#047857;">₹37,15,000</span> across 7 modernized venues (A109, A110, B107, C018, A308, A201, A102).</li>
              <li><strong>Centres of Excellence:</strong> CoE in Embedded Systems & IoT (A110), CoE in VLSI & PCB (A308).</li>
              <li><strong>ICT Software Agreement:</strong> 30 user licenses for MATLAB committed by ICT team.</li>
            </ul>
          </div>

          <div style="margin-top:auto;">
            <button class="modal-btn" style="width:100%; justify-content:center; padding:0.75rem; background:#047857; color:white; border:none;"
              onclick="window.selectDepartment(1); window.switchTab('departments');">
              🔍 Inspect ECE Department Venues & Full Budget &rarr;
            </button>
          </div>
        </div>
      </div>

      <!-- Architectural Blueprint Showcase for C401 -->
      <div class="dept-blueprint-section" style="margin-top:2rem;">
        <div class="blueprint-section-title">
          <span>📐</span> C401 Faculty Room Architectural Blueprint & Layout Details
        </div>
        <div class="blueprint-card" style="max-width: 900px; margin: 0 auto;">
          <div class="blueprint-thumb-wrapper" style="height:380px;" onclick="window.openBlueprintModal('C401')">
            <img src="${fp.file}" alt="${fp.title}" class="blueprint-thumb">
            <div class="blueprint-badge">Room C401 &bull; C-Block 4th Floor</div>
            <button class="blueprint-overlay-btn" type="button">
              🔍 Click to Enlarge / Zoom Blueprint
            </button>
          </div>
          <div class="blueprint-info">
            <div class="blueprint-title">${fp.title}</div>
            <div class="blueprint-meta">📍 C Block, 4th Floor &bull; Allocation: UG AIML, UG Cyber</div>
            <div class="blueprint-desc">${fp.description}</div>
          </div>
        </div>
      </div>
    `;
  }

  // Render Consolidated Requirements View
  function renderConsolidatedView() {
    const container = document.getElementById('consolidatedView');
    if (!container) return;

    let items = INFRA_DATA.consolidated;

    // Filter by category
    if (consolidatedFilter !== 'all') {
      items = items.filter(item => item.category === consolidatedFilter);
    }

    // Filter by search
    if (consolidatedSearch) {
      const q = consolidatedSearch.toLowerCase();
      items = items.filter(item => item.description.toLowerCase().includes(q) || String(item.quantity).toLowerCase().includes(q));
    }

    // Category Counts
    const categories = ['All', 'IT & Systems', 'Furniture & Partitions', 'Lab Infrastructure', 'Display & Storage', 'Electrical & Cabling'];

    container.innerHTML = `
      <div class="consolidated-hero">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
          <div>
            <h1>📊 Consolidated Infrastructure Requirements</h1>
            <p>Comprehensive aggregation of all physical infrastructure, IT hardware, workstations, and laboratory setups across all departments.</p>
          </div>
          <div class="btn-action-group">
            <button class="btn-secondary" onclick="window.exportConsolidatedCSV()" style="background:white; color:#0f172a;">
              📥 Export to CSV
            </button>
            <button class="btn-secondary" onclick="window.print()" style="background:white; color:#0f172a;">
              🖨️ Print Report
            </button>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <div class="controls-bar" style="margin-bottom: 1.5rem;">
        <div class="filter-pills">
          <button class="filter-btn ${consolidatedFilter === 'all' ? 'active' : ''}" onclick="window.setConsolidatedFilter('all')">
            All Items (${INFRA_DATA.consolidated.length})
          </button>
          <button class="filter-btn ${consolidatedFilter === 'IT & Systems' ? 'active' : ''}" onclick="window.setConsolidatedFilter('IT & Systems')">
            💻 IT & Systems
          </button>
          <button class="filter-btn ${consolidatedFilter === 'Furniture & Partitions' ? 'active' : ''}" onclick="window.setConsolidatedFilter('Furniture & Partitions')">
            🪑 Furniture & Partitions
          </button>
          <button class="filter-btn ${consolidatedFilter === 'Lab Infrastructure' ? 'active' : ''}" onclick="window.setConsolidatedFilter('Lab Infrastructure')">
            🔬 Lab Infrastructure
          </button>
          <button class="filter-btn ${consolidatedFilter === 'Display & Storage' ? 'active' : ''}" onclick="window.setConsolidatedFilter('Display & Storage')">
            📋 Display & Storage
          </button>
          <button class="filter-btn ${consolidatedFilter === 'Electrical & Cabling' ? 'active' : ''}" onclick="window.setConsolidatedFilter('Electrical & Cabling')">
            🔌 Electrical & Cabling
          </button>
        </div>

        <div class="search-box-wrapper">
          <span class="search-icon">🔍</span>
          <input type="text" class="search-input" placeholder="Search consolidated items..." 
            value="${escapeHtml(consolidatedSearch)}" oninput="window.handleConsolidatedSearch(this.value)">
        </div>
      </div>

      <!-- Consolidated Table -->
      <div class="table-card">
        <div class="table-responsive">
          <table class="custom-table">
            <thead>
              <tr>
                <th style="width: 10%;">Item ID</th>
                <th style="width: 20%;">Category</th>
                <th style="width: 55%;">Requirement Description</th>
                <th style="width: 15%; text-align: center;">Total Quantity</th>
              </tr>
            </thead>
            <tbody>
              ${items.length === 0 ? `
                <tr>
                  <td colspan="4" class="empty-state">
                    <div class="empty-state-icon">🔎</div>
                    <div>No items found matching criteria.</div>
                  </td>
                </tr>
              ` : items.map((item, idx) => {
                const isHighQty = typeof item.quantity === 'number' && item.quantity >= 20;
                const isSpecial = typeof item.quantity === 'string';
                return `
                  <tr>
                    <td><span class="room-badge">${item.id}</span></td>
                    <td>
                      <span class="room-type-tag ${item.category === 'IT & Systems' ? 'smart' : item.category === 'Furniture & Partitions' ? 'faculty' : 'lab'}">
                        ${item.icon} ${item.category}
                      </span>
                    </td>
                    <td>
                      <div style="font-weight: 600; color: #1e293b; line-height: 1.45;">
                        ${escapeHtml(item.description)}
                      </div>
                    </td>
                    <td style="text-align: center;">
                      <span class="qty-badge ${isHighQty ? 'high' : ''} ${isSpecial ? 'special' : ''}">
                        ${item.quantity}
                      </span>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- ECE Specialized Laboratory Modernization Summary in Consolidated -->
      ${INFRA_DATA.ece_lab_suite ? `
        <div class="ece-suite-section">
          <div class="ece-suite-header">
            <div>
              <h3 style="font-size:1.2rem; font-weight:800; color:var(--navy); display:flex; align-items:center; gap:0.5rem;">
                <span>⚡</span> Department Specialized Equipment: ECE Modernization Outlay
              </h3>
              <div style="font-size:0.85rem; color:var(--text-muted); margin-top:2px;">
                Advanced laboratory kits, EDA licences, DSP processors, and CNC PCB equipment across 7 key ECE venues
              </div>
            </div>
            <button class="btn-secondary" onclick="window.selectDepartment(1); window.switchTab('departments'); window.location.hash='departments';" style="background:#2563eb; color:white; border:none;">
              🔍 View ECE Venues & Blueprints &rarr;
            </button>
          </div>

          <div class="ece-banner-grid">
            <div class="ece-mini-stat">
              <div class="ece-mini-label">Modernized Laboratories</div>
              <div class="ece-mini-value">${INFRA_DATA.ece_lab_suite.labs.length} Labs</div>
            </div>
            <div class="ece-mini-stat">
              <div class="ece-mini-label">Total Outlay Required</div>
              <div class="ece-mini-value" style="color:#047857;">${INFRA_DATA.ece_lab_suite.total_estimated_cost}</div>
            </div>
            <div class="ece-mini-stat">
              <div class="ece-mini-label">Software Readiness</div>
              <div class="ece-mini-value" style="font-size:1.15rem; color:#1d4ed8;">30 MATLAB Licenses</div>
            </div>
            <div class="ece-mini-stat">
              <div class="ece-mini-label">CoE Research Focus</div>
              <div class="ece-mini-value" style="font-size:1.05rem;">Embedded, IoT, VLSI, PCB</div>
            </div>
          </div>

          <div class="ece-notice-box">
            <span style="font-size:1.3rem;">ℹ️</span>
            <div>
              <strong>Software Licensing Update:</strong> ${escapeHtml(INFRA_DATA.ece_lab_suite.ict_software_note)}
            </div>
          </div>
        </div>
      ` : ''}
    `;
  }

  window.setConsolidatedFilter = function(cat) {
    consolidatedFilter = cat;
    renderConsolidatedView();
  };

  window.handleConsolidatedSearch = function(val) {
    consolidatedSearch = val;
    renderConsolidatedView();
  };

  // CSV Export for Consolidated Requirements
  window.exportConsolidatedCSV = function() {
    let csv = "ID,Category,Requirement Description,Quantity\n";
    INFRA_DATA.consolidated.forEach(item => {
      const desc = `"${item.description.replace(/"/g, '""')}"`;
      csv += `${item.id},"${item.category}",${desc},"${item.quantity}"\n`;
    });
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'NBA_Infra_Consolidated_Requirements.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Render Architectural Floor Plans Gallery
  function renderFloorPlansGallery() {
    const container = document.getElementById('floorplansView');
    if (!container) return;

    const plans = Object.entries(INFRA_DATA.floor_plans);

    container.innerHTML = `
      <div class="institution-hero" style="background: linear-gradient(135deg, #092c5a 0%, #0f172a 100%);">
        <h1>📐 Architectural Blueprints & Space Layout Plans</h1>
        <p>High-resolution floor plans detailing room reallocations, workstation cubicles, experiential learning labs, and electrical designs for NBA accreditation.</p>
      </div>

      <div class="blueprints-grid">
        ${plans.map(([key, fp]) => `
          <div class="blueprint-card">
            <div class="blueprint-thumb-wrapper" onclick="window.openBlueprintModal('${key}')">
              <img src="${fp.file}" alt="${fp.title}" class="blueprint-thumb">
              <div class="blueprint-badge">Room ${fp.room} &bull; ${fp.floor}</div>
              <button class="blueprint-overlay-btn" type="button">
                🔍 Click to Inspect Blueprint
              </button>
            </div>
            <div class="blueprint-info">
              <div class="blueprint-title">${fp.title}</div>
              <div class="blueprint-meta">📍 ${fp.block}, ${fp.floor}</div>
              <div class="blueprint-desc">${fp.description}</div>
              <div style="margin-top:0.5rem; margin-bottom: 1rem;">
                <span style="font-size:0.75rem; color:#64748b; font-weight:600;">Applicable Departments:</span>
                <div class="blueprint-departments" style="margin-top:0.35rem;">
                  ${fp.departments.map(d => `<span class="blueprint-dept-tag">${d}</span>`).join('')}
                </div>
              </div>
              <button class="modal-btn" style="width:100%; justify-content:center; background:#f1f5f9; font-weight:700;" onclick="window.openBlueprintModal('${key}')">
                🔍 Open High-Res Lightbox
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Tab Navigation Handling
  function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link[data-tab]');
    const isMasterIndex = window.location.pathname.endsWith('index.html') || 
                          window.location.pathname.endsWith('/') || 
                          !window.location.pathname.includes('.html');

    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const tab = link.getAttribute('data-tab');
        if (isMasterIndex) {
          e.preventDefault();
          switchTab(tab);
          history.pushState(null, null, `#${tab}`);
        }
        // If on standalone page and user clicked a different tab, let normal href take them there!
      });
    });

    window.addEventListener('popstate', () => {
      handleUrlHash();
    });
  }

  window.switchTab = switchTab;
  function switchTab(tabId) {
    // Nav links
    document.querySelectorAll('.nav-link[data-tab]').forEach(link => {
      link.classList.toggle('active', link.getAttribute('data-tab') === tabId);
    });

    // Page views
    document.querySelectorAll('.page-view').forEach(view => {
      view.classList.toggle('active', view.id === `${tabId}View`);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Modal / Lightbox Logic
  function setupModalEvents() {
    document.getElementById('modalCloseBtn').addEventListener('click', closeModal);
    document.getElementById('zoomInBtn').addEventListener('click', zoomIn);
    document.getElementById('zoomOutBtn').addEventListener('click', zoomOut);
    document.getElementById('zoomResetBtn').addEventListener('click', resetZoom);
    
    // Close on backdrop click
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
        closeModal();
      }
    });
  }

  window.openBlueprintModal = function(key) {
    const fp = INFRA_DATA.floor_plans[key];
    if (!fp) return;

    modalImg.src = fp.file;
    modalImg.alt = fp.title;
    modalTitle.textContent = `${fp.title} (Room ${fp.room})`;
    modalDesc.textContent = fp.description;
    
    modalDeptList.innerHTML = fp.departments.map(d => 
      `<span class="blueprint-dept-tag">${d}</span>`
    ).join('');

    resetZoom();
    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  function zoomIn() {
    zoomLevel = Math.min(zoomLevel + 0.25, 3);
    applyZoom();
  }

  function zoomOut() {
    zoomLevel = Math.max(zoomLevel - 0.25, 0.5);
    applyZoom();
  }

  function resetZoom() {
    zoomLevel = 1;
    applyZoom();
  }

  function applyZoom() {
    modalImg.style.transform = `scale(${zoomLevel})`;
    document.getElementById('zoomLevelLabel').textContent = `${Math.round(zoomLevel * 100)}%`;
  }

  // Start app on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', init);
})();
