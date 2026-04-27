// --- MOCK DATA: Speculative News Assets (Expanded 60+ Items) ---
const newsAssets = [
    // --- POLITICS - INTL ---
    { id: "PI-01", category: "Politics - Intl", title: "Leadership Veto Decision Draft", source: "GovWatch", price: 16.1, change: +3.9, volume: 13900, demand: "High", credibility: 87, release: "Releasing in 1d", tags: [] },
    { id: "PI-02", category: "Politics - Intl", title: "Sanctions List Loophole Leak", source: "GlobalWire", price: 12.8, change: -0.8, volume: 12400, demand: "Medium", credibility: 85, release: "Live Now", tags: [] },
    { id: "PI-03", category: "Politics - Intl", title: "Confidential Peace Accord Draft", source: "NeutralDesk", price: 11.7, change: -1.8, volume: 12200, demand: "Medium", credibility: 88, release: "Live Now", tags: [] },
    { id: "PI-04", category: "Politics - Intl", title: "G20 Climate Accord Thresholds", source: "GreenWire", price: 14.2, change: +2.1, volume: 11900, demand: "High", credibility: 91, release: "Teased", tags: [] },

    // --- POLITICS - DOMESTIC ---
    { id: "PD-01", category: "Politics - Domestic", title: "Election Funds Offshore Tracker", source: "CapitalDesk", price: 14.9, change: +1.4, volume: 13100, demand: "High", credibility: 90, release: "Releasing in 3d", tags: [] },
    { id: "PD-02", category: "Politics - Domestic", title: "Border Drone Surveillance Act", source: "StateIntel", price: 8.5, change: 0.0, volume: 11400, demand: "Low", credibility: 96, release: "Embargoed", tags: [] },
    { id: "PD-03", category: "Politics - Domestic", title: "Midterm Vote Rigging Audit Draft", source: "CentralPress", price: 15.5, change: +4.2, volume: 14000, demand: "High", credibility: 84, release: "Teased in 2d", tags: [] },
    { id: "PD-04", category: "Politics - Domestic", title: "Voter Database Integrity Breach", source: "CyberCorp", price: 11.8, change: -1.2, volume: 12300, demand: "Medium", credibility: 89, release: "Live Now", tags: [] },

    // --- ECONOMY - MACRO ---
    { id: "EM-01", category: "Economy - Macro", title: "Interest Rate Adjust Pre-logs", source: "CentralBank", price: 6.8, change: +0.2, volume: 10800, demand: "Low", credibility: 97, release: "Embargoed", tags: [] },
    { id: "EM-02", category: "Economy - Macro", title: "Debt Crisis Warning Systems", source: "TradeBlock", price: 13.7, change: -1.5, volume: 13500, demand: "High", credibility: 83, release: "Releasing in 2d", tags: [] },
    { id: "EM-03", category: "Economy - Macro", title: "Sovereign Deficit Default Warning", source: "TradeWire", price: 16.5, change: +4.5, volume: 14100, demand: "High", credibility: 82, release: "Releasing in 1d", tags: [] },
    { id: "EM-04", category: "Economy - Macro", title: "Global Shipping Freight Adjusts", source: "LogiTrack", price: 10.5, change: -0.4, volume: 11600, demand: "Medium", credibility: 89, release: "Live Now", tags: [] },

    // --- ECONOMY - CORP ---
    { id: "EC-01", category: "Economy - Corp", title: "Mega-corp Bankruptcy Filings", source: "WallDesk", price: 17.4, change: +7.1, volume: 14900, demand: "High", credibility: 81, release: "Releasing in 1d", tags: [] },
    { id: "EC-02", category: "Economy - Corp", title: "Crypto Reserve Depletion Ledger", source: "CoinLeak", price: 12.1, change: +1.9, volume: 12600, demand: "High", credibility: 80, release: "Releasing in 3d", tags: [] },
    { id: "EC-03", category: "Economy - Corp", title: "Supply Chain Congestion Forensics", source: "LogiTrack", price: 11.4, change: +0.7, volume: 11900, demand: "Medium", credibility: 88, release: "Releasing in 5d", tags: [] },
    { id: "EC-04", category: "Economy - Corp", title: "Tech Titan Earnings Back-door Adjust", source: "WallDesk", price: 15.6, change: +3.2, volume: 13200, demand: "High", credibility: 85, release: "Releasing in 4d", tags: [] },

    // --- ENVIRONMENT - CLIMATE ---
    { id: "EN-01", category: "Environment - Climate", title: "Coastal Water Crisis Documentary", source: "EcoWire", price: 12.4, change: +3.2, volume: 14200, demand: "High", credibility: 88, release: "Teased", tags: [] },
    { id: "EN-02", category: "Environment - Climate", title: "Deforestation Satellite Logs", source: "OrbitWatch", price: 7.5, change: +0.8, volume: 11200, demand: "Low", credibility: 95, release: "Embargoed", tags: [] },
    { id: "EN-03", category: "Environment - Climate", title: "Permafrost Methane Surge Metrics", source: "ArcticWire", price: 14.8, change: +2.7, volume: 12200, demand: "High", credibility: 89, release: "Teased in 4d", tags: [] },
    { id: "EN-04", category: "Environment - Climate", title: "Mega-farm Pesticide Runoff Satellites", source: "EcoWatch", price: 11.2, change: -1.2, volume: 11700, demand: "Medium", credibility: 90, release: "Live Now", tags: [] },

    // --- ENVIRONMENT - SUSTAIN ---
    { id: "ES-01", category: "Environment - Sustain", title: "Carbon Tax Offset Leak fragment", source: "GreenDesk", price: 9.8, change: -1.2, volume: 11800, demand: "Medium", credibility: 91, release: "Live Now", tags: [] },
    { id: "ES-02", category: "Environment - Sustain", title: "Subterranean Settlement Discovery", source: "GeoWire", price: 14.3, change: +2.5, volume: 13300, demand: "High", credibility: 87, release: "Releasing in 2d", tags: [] },
    { id: "ES-03", category: "Environment - Sustain", title: "Fusion Reactor Ignition metrics", source: "Plasma", price: 16.8, change: +4.8, volume: 14500, demand: "High", credibility: 84, release: "Releasing in 1d", tags: [] },
    { id: "ES-04", category: "Environment - Sustain", title: "Grid Blackout Forensics Dossiers", source: "WireTap", price: 17.2, change: +6.2, volume: 14400, demand: "High", credibility: 86, release: "Releasing in 2d", tags: [] },

    // --- SOCIETY - HEALTH ---
    { id: "SH-01", category: "Society - Health", title: "Bio-hacker Profile Tracker", source: "NetDef", price: 11.2, change: -2.4, volume: 15100, demand: "Medium", credibility: 78, release: "Live Now", tags: [] },
    { id: "SH-02", category: "Society - Health", title: "Mental Health App Data Harvesting", source: "MedWatch", price: 13.1, change: +2.4, volume: 12800, demand: "High", credibility: 83, release: "Releasing in 3d", tags: [] },
    { id: "SH-03", category: "Society - Health", title: "Black-market Organ Demand Sheets", source: "BioLeak", price: 15.9, change: +4.1, volume: 13600, demand: "High", credibility: 79, release: "Releasing in 2d", tags: [] },
    { id: "SH-04", category: "Society - Health", title: "Pandemic Pre-warning Data Logs", source: "ViruTrack", price: 16.7, change: +5.5, volume: 14300, demand: "High", credibility: 85, release: "Teased", tags: [] },

    // --- SOCIETY - URBAN ---
    { id: "SU-01", category: "Society - Urban", title: "Gentrification Displacement Heatmaps", source: "UrbanDesk", price: 10.8, change: +0.8, volume: 11700, demand: "Medium", credibility: 90, release: "Live Now", tags: [] },
    { id: "SU-02", category: "Society - Urban", title: "Subsidized Housing Fraud Dossiers", source: "CityLeak", price: 12.4, change: +1.5, volume: 12100, demand: "High", credibility: 87, release: "Releasing in 4d", tags: [] },
    { id: "SU-03", category: "Society - Urban", title: "Mega-city Infrastructure Subsidies", source: "MetWire", price: 11.4, change: +0.7, volume: 11900, demand: "Medium", credibility: 88, release: "Releasing in 5d", tags: [] },
    { id: "SU-04", category: "Society - Urban", title: "Drought Zone Conflict Incident Logs", source: "DesertWire", price: 9.5, change: -0.8, volume: 11300, demand: "Low", credibility: 91, release: "Live Now", tags: [] },

    // --- WAR & CONFLICT ---
    { id: "WC-01", category: "War & Conflict", title: "Strategic Drone Deployment Maps", source: "DefenseIntel", price: 16.8, change: +4.8, volume: 14100, demand: "High", credibility: 84, release: "Releasing in 1d", tags: [] },
    { id: "WC-02", category: "War & Conflict", title: "Mercenary Contract Ledgers", source: "ShadowWire", price: 15.2, change: +3.4, volume: 13000, demand: "High", credibility: 82, release: "Releasing in 4d", tags: [] },
    { id: "WC-03", category: "War & Conflict", title: "Border Zone Thermal Imagery", source: "SatWatch", price: 13.9, change: +2.1, volume: 12700, demand: "High", credibility: 91, release: "Releasing in 3d", tags: [] },
    { id: "WC-04", category: "War & Conflict", title: "Human Trafficking Route Thermal IM", source: "SatIntel", price: 14.5, change: +2.8, volume: 13100, demand: "High", credibility: 85, release: "Teased", tags: [] },

    // --- CYBER SECURITY ---
    { id: "CS-01", category: "Cyber Security", title: "Quantum Encryption Fragment Keys", source: "CyberSync", price: 15.8, change: +4.2, volume: 14100, demand: "High", credibility: 85, release: "Teased", tags: [] },
    { id: "CS-02", category: "Cyber Security", title: "Cyber-warfare Payload Hashes", source: "SignalLeak", price: 9.2, change: +0.6, volume: 11100, demand: "Low", credibility: 89, release: "Embargoed", tags: [] },
    { id: "CS-03", category: "Cyber Security", title: "Autonomous Drone Swarm Code Branch", source: "DefTech", price: 17.1, change: +6.5, volume: 14600, demand: "High", credibility: 82, release: "Releasing in 1d", tags: [] },
    { id: "CS-04", category: "Cyber Security", title: "Organized Syndicate Crypto Wallets", source: "CrimeWatch", price: 13.4, change: +1.8, volume: 12200, demand: "Medium", credibility: 87, release: "Live Now", tags: [] },

    // --- FINANCIAL FRAUD ---
    { id: "FF-01", category: "Financial Fraud", title: "Offshore Tax Haven Entity maps", source: "TaxLeak", price: 16.4, change: +5.1, volume: 13900, demand: "High", credibility: 83, release: "Releasing in 2d", tags: [] },
    { id: "FF-02", category: "Financial Fraud", title: "Global Darknet Revenue Leak", source: "CyberSync", price: 16.5, change: +5.8, volume: 14800, demand: "High", credibility: 82, release: "Teased in 1d", tags: [] },
    { id: "FF-03", category: "Financial Fraud", title: "Vatican Vault Digitization Log", source: "Archival", price: 7.9, change: -0.2, volume: 11400, demand: "Medium", credibility: 94, release: "Live Now", tags: [] },
    { id: "FF-04", category: "Financial Fraud", title: "Subsidized Housing Fraud Dossiers", source: "CityLeak", price: 12.4, change: +1.5, volume: 12100, demand: "High", credibility: 87, release: "Releasing in 4d", tags: [] },

    // --- TECH - AI ---
    { id: "TA-01", category: "Tech - AI", title: "AI Bias Auditing Database Log", source: "TruthNode", price: 13.5, change: +1.1, volume: 12900, demand: "High", credibility: 92, release: "Releasing in 3d", tags: [] },
    { id: "TA-02", category: "Tech - AI", title: "Deepfake Star Authorization Rights", source: "MediAr", price: 8.2, change: +0.5, volume: 10900, demand: "Low", credibility: 85, release: "Releasing in 7d", tags: [] },
    { id: "TA-03", category: "Tech - AI", title: "AI Autonomy Creative Manifesto", source: "ArtNet", price: 10.8, change: +0.8, volume: 11700, demand: "Medium", credibility: 90, release: "Releasing in 5d", tags: [] },
    { id: "TA-04", category: "Tech - AI", title: "Quantum cooling datasets leak", source: "NanoWire", price: 11.2, change: -0.4, volume: 11500, demand: "Medium", credibility: 88, release: "Live Now", tags: [] },

    // --- TECH - FRONTIER ---
    { id: "TF-01", category: "Tech - Frontier", title: "Giga-factory Emissions Coverup", source: "EarthLeak", price: 15.1, change: +4.5, volume: 13800, demand: "High", credibility: 84, release: "Releasing in 2d", tags: [] },
    { id: "TF-02", category: "Tech - Frontier", title: "Bio-synthetic Organ Growth logs", source: "LabDesk", price: 14.3, change: +2.5, volume: 13200, demand: "High", credibility: 87, release: "Releasing in 3d", tags: [] },
    { id: "TF-03", category: "Tech - Frontier", title: "Space-debris Collision Trajectory", source: "Orbit", price: 12.9, change: +1.8, volume: 12400, demand: "Medium", credibility: 89, release: "Live Now", tags: [] },
    { id: "TF-04", category: "Tech - Frontier", title: "Lost Renaissance Audio Scraps", source: "MuseAud", price: 13.4, change: +1.1, volume: 12100, demand: "High", credibility: 91, release: "Releasing in 4d", tags: [] },

    // --- GOSSIP - CELEB ---
    { id: "GC-01", category: "Gossip - Celeb", title: "Celebrity Deepfake Consent Leaks", source: "FanAr", price: 12.1, change: +1.9, volume: 12600, demand: "High", credibility: 80, release: "Releasing in 3d", tags: [] },
    { id: "GC-02", category: "Gossip - Celeb", title: "Pop-star Burner Account Handles", source: "PopWire", price: 14.5, change: +2.2, volume: 12200, demand: "High", credibility: 84, release: "Teased", tags: [] },
    { id: "GC-03", category: "Gossip - Celeb", title: "Fashion Week Confidential Pre-logs", source: "VogueDesk", price: 9.8, change: -1.4, volume: 11200, demand: "Low", credibility: 91, release: "Embargoed", tags: [] },
    { id: "GC-04", category: "Gossip - Celeb", title: "A-List Celebrity Divorce Settlement", source: "TMZDesk", price: 15.2, change: +3.6, volume: 13800, demand: "High", credibility: 81, release: "Releasing in 1d", tags: [] },

    // --- GOSSIP - INDUSTRY ---
    { id: "GI-01", category: "Gossip - Industry", title: "Mega-corp Internal Payout Sheets", source: "WallDesk", price: 11.2, change: +0.8, volume: 11900, demand: "Medium", credibility: 89, release: "Live Now", tags: [] },
    { id: "GI-02", category: "Gossip - Industry", title: "Studio Acquisition Accord leak", source: "Hollywood", price: 16.8, change: +4.8, volume: 14500, demand: "High", credibility: 82, release: "Releasing in 1d", tags: [] },
    { id: "GI-03", category: "Gossip - Industry", title: "Streaming Giant Internal Cancellations", source: "ScreenWire", price: 10.4, change: -0.6, volume: 11600, demand: "Medium", credibility: 88, release: "Live Now", tags: [] },
    { id: "GI-04", category: "Gossip - Industry", title: "Studio Executive Internal Slack Scraps", source: "Hollywood", price: 13.7, change: +1.4, volume: 12400, demand: "High", credibility: 85, release: "Releasing in 2d", tags: [] }
];

// Initialize history tracking buffers and timeframe anchors for ALL assets
newsAssets.forEach(a => {
    a.history = Array(15).fill(a.price).map(p => p + (Math.random() - 0.5) * 1.5);
    a.basePriceTimeframe = a.price * (1 + (Math.random() - 0.5) * 0.04); // Initial random anchor offset
    
    // Generate Ticker Acronym (e.g., "Leadership Veto" -> "LV")
    const words = a.title.split(' ');
    let acronym = words.map(w => w[0] ? w[0].toUpperCase() : '').join('').replace(/[^A-Z]/g, '');
    if (acronym.length > 4) acronym = acronym.substring(0, 4); // Max 4 letters like real stocks
    if (acronym.length < 2) acronym = a.id; // fallback if title empty of caps
    a.id = acronym;
});

let activeAsset = newsAssets[0];
const chartHistory = [];
const maxDataPoints = 30;

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    populatePool();
    populateTicker();
    selectAsset(activeAsset.id);
    


    // Start Simulation Ticks
    setInterval(simulationTick, 1000);
});

// --- RENDER FUNCTIONS ---

// 1. Populate Assets Grid
function populatePool() {
    const grid = document.getElementById("pool-grid");
    grid.innerHTML = "";
    
    getFilteredAssets().forEach(asset => {
        const card = document.createElement("div");
        card.className = `asset-card ${asset.id === activeAsset.id ? 'active' : ''}`;
        card.onclick = () => selectAsset(asset.id);
        
        const priceColor = asset.change >= 0 ? 'var(--verify-cyan)' : 'var(--aware-amber)';
        const sign = asset.change >= 0 ? '+' : '';
        
        card.innerHTML = `
            <div class="asset-tag">${asset.category.toUpperCase()}</div>
            <div class="asset-title">${asset.title}</div>
            <div style="font-size: 0.6rem; color: rgba(255,255,255,0.5); margin-bottom: 6px;">${asset.release}</div>
            <div class="asset-stats">
                <div>PRICE: <span style="color: ${priceColor}">${asset.price.toFixed(2)}</span></div>
                <div>CRED: <span>${asset.credibility}%</span></div>
            </div>
            <div style="font-size: 0.6rem; margin-top: 4px; color: ${priceColor}">${sign}${asset.change}%</div>
        `;
        grid.appendChild(card);
    });
}

// 2. Populate Header Ticker
function populateTicker() {
    const track = document.getElementById("ticker-track");
    track.innerHTML = "";
    
    // Duplicate for smooth loop
    const displays = [...newsAssets, ...newsAssets];
    displays.forEach(asset => {
        const item = document.createElement("div");
        item.className = "ticker-item";
        const priceColor = asset.change >= 0 ? 'var(--verify-cyan)' : 'var(--aware-amber)';
        item.innerHTML = `
            <span style="color: var(--text-dim);">[${asset.category.toUpperCase()}]</span> 
            <span>${asset.title}</span> 
            <span style="color: ${priceColor}">${asset.price.toFixed(1)}</span>
        `;
        track.appendChild(item);
    });
}

// 3. Select Active Asset
function selectAsset(id) {
    activeAsset = newsAssets.find(a => a.id === id);
    document.getElementById("active-asset-name").innerText = activeAsset.title;
    
    // Refresh Active Card Styles
    document.querySelectorAll(".asset-card").forEach(c => c.classList.remove("active"));
    const activeCard = Array.from(document.querySelectorAll(".asset-card")).find(c => c.innerHTML.includes(activeAsset.title));
    if(activeCard) activeCard.classList.add("active");
    
    // Reset Chart History for new Asset
    chartHistory.length = 0;
    for(let i=0; i<maxDataPoints; i++) {
        let histVal = activeAsset.price + (Math.random() * 2 - 1);
        chartHistory.push(Math.min(histVal, 17.95)); // Under 18
    }
    
    renderChart();
    renderOrderBook();
}

// 4. Render SVG Chart
function renderChart() {
    const svg = document.getElementById("live-chart");
    const container = svg.parentElement;
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 200;
    const padding = 20;

    // Viewbox sync
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

    const min = Math.min(...chartHistory) * 0.98;
    const max = Math.max(...chartHistory) * 1.02;
    const range = max - min;

    const points = chartHistory.map((val, i) => {
        const x = padding + (i / (chartHistory.length - 1 || 1)) * (width - 2 * padding);
        const y = height - padding - ((val - min) / range) * (height - 2 * padding);
        return { x, y };
    });

    // Generate Path Data
    const pathLine = document.getElementById("chart-main-line");
    const pathFill = document.getElementById("chart-area-fill");

    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
        // Curve fit approximation (simple bezier)
        const cpX = (points[i-1].x + points[i].x) / 2;
        d += ` Q ${cpX} ${points[i-1].y}, ${points[i].x} ${points[i].y}`;
    }

    pathLine.setAttribute("d", d);

    // Area Fill
    const fillD = `${d} L ${points[points.length-1].x} ${height - padding} L ${points[0].x} ${height - padding} Z`;
    pathFill.setAttribute("d", fillD);

    // Update Grid Overlay line highlights (Dynamic HUD Feel)
    const gridGroup = document.getElementById("chart-grid");
    gridGroup.innerHTML = `
        <line x1="${padding}" y1="${height-padding}" x2="${width-padding}" y2="${height-padding}" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
        <line x1="${padding}" y1="${padding}" x2="${padding}" y2="${height-padding}" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
    `;
}

// 5. Render Order Book (Simulated rows)
function renderOrderBook() {
    const tbody = document.getElementById("order-book-body");
    tbody.innerHTML = "";
    
    const basePrice = activeAsset.price;
    const rows = [];

    // Asks (Sells) - Higher price
    for(let i=0; i<4; i++) {
        const price = Math.min(basePrice + (0.4 - i * 0.1), 17.99);
        const vol = (Math.random() * 5 + 1).toFixed(1) + "K";
        const id = `O_${Math.floor(Math.random()*9000)+1000}`;
        rows.push(`<tr class="ask-row"><td>${price.toFixed(2)}</td><td>${vol}</td><td>${id}</td></tr>`);
    }

    rows.push(`<tr style="background: rgba(255,255,255,0.02);"><td colspan="3" style="text-align: center; font-size: 0.65rem; color: var(--text-muted);">--- SPREAD INDEX ---</td></tr>`);

    // Bids (Buys) - Lower price
    for(let i=0; i<4; i++) {
        const price = basePrice - (0.05 + i * 0.1);
        const vol = (Math.random() * 4 + 1).toFixed(1) + "K";
        const id = `O_${Math.floor(Math.random()*9000)+1000}`;
        rows.push(`<tr class="bid-row"><td>${price.toFixed(2)}</td><td>${vol}</td><td>${id}</td></tr>`);
    }

    tbody.innerHTML = rows.join("");
}

// --- SIMULATION LOGIC ---
function simulationTick() {
    let driftMult = 1.0;
    if (activeTimeframe === '1w') driftMult = 0.25;
    else if (activeTimeframe === '1m') driftMult = 0.1;
    else if (activeTimeframe === '1y') driftMult = 0.02;

    // 1. Rand Asset Price Drift
    newsAssets.forEach(asset => {
        const drift = (Math.random() - 0.48) * 0.4 * driftMult;
        asset.price += drift;
        
        // Maintain under 18 AP (System Price Cap)
        if (asset.price >= 18) {
            asset.price = 17.5 + (Math.random() * 0.2); // Soft bounce
        }
        if (asset.price <= 3) asset.price = 4.2; // Floor limits
        
        // Calculate stable change relative to Anchor Period Start
        const baseP = asset.basePriceTimeframe || asset.price;
        asset.change = ((asset.price - baseP) / baseP) * 100;
        
        // Update individual asset history buffer for sparklines
        if(!asset.history) asset.history = [];
        asset.history.push(asset.price);
        if(asset.history.length > 15) asset.history.shift();
    });

    // 2. Append Tick points to Active Asset History (Main Chart)
    if (activeTimeframe === '24h') {
        chartHistory.shift();
        chartHistory.push(activeAsset.price);
    }

    // 2B. Update Global Indicators Dashboard viewports
    const amiNode = document.getElementById('ami-val');
    if (amiNode) {
        const totalCap = newsAssets.reduce((sum, a) => sum + (a.price * a.volume), 0) / 1000;
        amiNode.innerText = `${totalCap.toFixed(2)} (+1.2%)`;
    }

    // 3. Render partial frame updates
    renderChart();
    renderOrderBook();
    
    // Smooth rendering continuous Treemap ticks
    const boxPanel = document.querySelector('.box-panel');
    if (boxPanel && window.getComputedStyle(boxPanel).display !== 'none') {
        renderTreemap();
    }
    
    // Periodically redraw asset grid to reflect rate shifts
    if(Math.random() > 0.8) populatePool();

    // --- INSTABILITY INJECTION: Breaking System Logic ---
    applyRandomInstability();
}

function applyRandomInstability() {
    const frame = document.querySelector('.exchange-frame');
    const rng = Math.random();

    // 1. Random "Jam" (Simulation Pause Simulation)
    if (rng > 0.98) {
        // Visual "Freeze" - disable transitions temporarily
        document.body.style.pointerEvents = 'none';
        frame.style.filter = 'contrast(1.5) brightness(0.8) saturate(0)';
        setTimeout(() => {
            document.body.style.pointerEvents = 'all';
            frame.style.filter = 'none';
        }, 150 + Math.random() * 300);
    }

    // 2. Ghost Drift on active elements
    if (rng > 0.95 && activeAsset) {
        const panels = document.querySelectorAll('.hud-panel');
        const target = panels[Math.floor(Math.random() * panels.length)];
        target.style.transform = `translate(${Math.random()*6-3}px, ${Math.random()*6-3}px)`;
        setTimeout(() => target.style.transform = '', 100);
    }

    // 3. Acceleration Spike on Ticker
    if (rng > 0.97) {
        const track = document.getElementById('ticker-track');
        if(track) {
            track.style.animationDuration = '10s'; // Sudden speed up
            setTimeout(() => track.style.animationDuration = '180s', 500);
        }
    }
}

// Add mouse-move mismatch (Drift)
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.99) { // Rare hitch
        const tooltip = document.getElementById('treemap-tooltip');
        if (tooltip && tooltip.style.display === 'block') {
            tooltip.style.left = `${parseFloat(tooltip.style.left) + 20}px`;
        }
    }
});

// --- 4. THEME TOGGLE LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('theme-checkbox');
    if (checkbox) {
        checkbox.addEventListener('change', () => {
            const link = document.querySelector('link[rel="stylesheet"]');
            if (checkbox.checked) {
                link.setAttribute('href', 'style.css'); // Dark Mode
            } else {
                link.setAttribute('href', 'style_light.css'); // Light Mode
            }
            // Trigger Treemap re-render to pick up new stylesheet variables if applicable
            const boxView = document.getElementById('box-graph-view');
            if (boxView && boxView.style.display !== 'none') renderTreemap();
        });
    }

    // --- 5. BOX GRAPH (TREEMAP) LOGIC ---
    const viewToggleBtn = document.getElementById('view-toggle-btn');
    const gridContainer = document.querySelector('.dashboard-grid');
    const boxPanel = document.querySelector('.box-panel');

    if (viewToggleBtn && gridContainer && boxPanel) {
        viewToggleBtn.addEventListener('click', () => {
            const isBoxMode = window.getComputedStyle(boxPanel).display === 'none';
            const panels = Array.from(gridContainer.querySelectorAll('.hud-panel'));

            if (isBoxMode) {
                // Desktop Heat Map Mode: Hide others, show box
                panels.forEach(p => p.style.display = 'none');
                boxPanel.style.display = 'flex';
                viewToggleBtn.innerText = 'Dashboard View';
                renderTreemap();
            } else {
                // Return to Dashboard: Show others, hide box
                panels.forEach(p => p.style.display = '');
                boxPanel.style.display = 'none';
                viewToggleBtn.innerText = 'Heat Map View';
            }
        });
        
        // Handle Responsive resize
        window.addEventListener('resize', () => {
            if (window.getComputedStyle(boxPanel).display !== 'none') renderTreemap();
        });
    }
});

function renderTreemap() {
    const svg = document.getElementById('treemap-svg');
    if (!svg || svg.parentElement.offsetParent === null) return;

    const width = svg.parentElement.clientWidth;
    const height = svg.parentElement.clientHeight;
    svg.setAttribute('width', width);
    svg.setAttribute('height', height);
    svg.innerHTML = '';

    // 1. Group hierarchically: Major -> Sub -> Items
    const majorCats = {};
    getFilteredAssets().forEach(a => {
        const [major, sub] = a.category.split(' - ');
        const subCat = sub || "General";
        
        if (!majorCats[major]) {
            majorCats[major] = { id: major, subs: {}, volume: 0 };
        }
        if (!majorCats[major].subs[subCat]) {
            majorCats[major].subs[subCat] = { id: subCat, items: [], volume: 0 };
        }
        
        majorCats[major].subs[subCat].items.push(a);
        const assetV = a.volume * a.price;
        majorCats[major].subs[subCat].volume += assetV;
        majorCats[major].volume += assetV;
    });

    const sectors = Object.values(majorCats).sort((a,b) => b.volume - a.volume);
    const totalVolume = sectors.reduce((sum, s) => sum + s.volume, 0);

    // 2. Pack Major Sectors (Level 1)
    let x = 0, y = 0, remainingW = width, remainingH = height;

    sectors.forEach((sect, i) => {
        const pct = sect.volume / totalVolume;
        const area = width * height * pct;
        let w, h;

        if (i < sectors.length - 1) {
            if (remainingW > remainingH) {
                w = area / remainingH; h = remainingH;
                drawSector(svg, x, y, w, h, sect);
                x += w; remainingW -= w;
            } else {
                w = remainingW; h = area / remainingW;
                drawSector(svg, x, y, w, h, sect);
                y += h; remainingH -= h;
            }
        } else {
            drawSector(svg, x, y, remainingW, remainingH, sect);
        }
    });
}

function drawSector(svg, x, y, w, h, sect) {
    if (w < 20 || h < 20) return;

    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

    // Major Sector Bounding Rect
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x + 1);
    rect.setAttribute("y", y + 1);
    rect.setAttribute("width", Math.max(0, w - 2));
    rect.setAttribute("height", Math.max(0, h - 2));
    rect.setAttribute("fill", "rgba(10, 15, 20, 0.4)");
    rect.setAttribute("stroke", "rgba(255, 255, 255, 0.2)");
    rect.setAttribute("stroke-width", "1.5");
    g.appendChild(rect);

    const headerH = 24;
    if (h > headerH + 30) {
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", x + 12);
        text.setAttribute("y", y + 18);
        text.setAttribute("fill", "#FFFFFF");
        text.setAttribute("font-size", "0.75rem");
        text.setAttribute("font-weight", "800");
        text.setAttribute("letter-spacing", "1px");
        text.textContent = sect.id.toUpperCase();
        g.appendChild(text);

        svg.appendChild(g);
        packSubSectors(svg, x + 2, y + headerH, w - 4, h - headerH - 2, sect.subs);
    } else {
        svg.appendChild(g);
        packSubSectors(svg, x + 2, y + 2, w - 4, h - 4, sect.subs);
    }
}

function packSubSectors(svg, x, y, w, h, subs) {
    if (w < 10 || h < 10) return;
    const subList = Object.values(subs).sort((a,b) => b.volume - a.volume);
    const totalV = subList.reduce((sum, s) => sum + s.volume, 0);

    let curX = x, curY = y, curW = w, curH = h;

    subList.forEach((sub, i) => {
        const pct = sub.volume / totalV;
        const area = w * h * pct;
        let itemW, itemH;

        if (i < subList.length - 1) {
            if (curW > curH) {
                itemW = area / curH; itemH = curH;
                drawSubSector(svg, curX, curY, itemW, itemH, sub);
                curX += itemW; curW -= itemW;
            } else {
                itemW = curW; itemH = area / curW;
                drawSubSector(svg, curX, curY, itemW, itemH, sub);
                curY += itemH; curH -= itemH;
            }
        } else {
            drawSubSector(svg, curX, curY, curW, curH, sub);
        }
    });
}

function drawSubSector(svg, x, y, w, h, sub) {
    if (w < 15 || h < 15) return;
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

    const headerH = 14;
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", x + 6);
    text.setAttribute("y", y + 10);
    text.setAttribute("fill", "rgba(255, 255, 255, 0.4)");
    text.setAttribute("font-size", "0.55rem");
    text.setAttribute("font-weight", "700");
    text.textContent = sub.id.toUpperCase();
    
    // Transparent bounding inner rect just for border clarity
    const line = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    line.setAttribute("x", x + 1);
    line.setAttribute("y", y + 1);
    line.setAttribute("width", w - 2);
    line.setAttribute("height", h - 2);
    line.setAttribute("fill", "transparent");
    line.setAttribute("stroke", "rgba(255,255,255,0.06)");
    
    g.appendChild(line);
    if (h > 30 && w > 60) g.appendChild(text);
    svg.appendChild(g);

    packItems(svg, x + 2, y + (h > 30 ? headerH : 2), w - 4, h - (h > 30 ? headerH : 2) - 2, sub.items);
}

function packItems(svg, x, y, w, h, items) {
    if (w < 10 || h < 10) return;
    const totalV = items.reduce((sum, a) => sum + (a.volume * a.price), 0);
    const sorted = [...items].sort((a,b) => (b.volume * b.price) - (a.volume * a.price));

    let curX = x, curY = y, curW = w, curH = h;

    sorted.forEach((asset, i) => {
        const pct = (asset.volume * asset.price) / totalV;
        const area = w * h * pct;
        let itemW, itemH;

        if (i < sorted.length - 1) {
            if (curW > curH) {
                itemW = area / curH; itemH = curH;
                drawRect(svg, curX, curY, itemW, itemH, asset);
                curX += itemW; curW -= itemW;
            } else {
                itemW = curW; itemH = area / curW;
                drawRect(svg, curX, curY, itemW, itemH, asset);
                curY += itemH; curH -= itemH;
            }
        } else {
            drawRect(svg, curX, curY, curW, curH, asset);
        }
    });
}

function drawRect(svg, x, y, w, h, asset) {
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x + 3);
    rect.setAttribute("y", y + 3);
    rect.setAttribute("width", Math.max(0, w - 6));
    rect.setAttribute("height", Math.max(0, h - 6));
    rect.setAttribute("rx", 0);
    
    const isUp = asset.change >= 0;

    // High contrast binary fills
    rect.setAttribute("fill", isUp ? "var(--verify-cyan)" : "transparent");
    rect.setAttribute("stroke", "var(--border-bright)");
    rect.setAttribute("stroke-width", "1");
    
    // 1. Asset ID Label
    const title = document.createElementNS("http://www.w3.org/2000/svg", "text");
    // Calculated proportional Font sizing and coordinates (Absolute Centering like Finviz)
    const fSize = Math.max(7, Math.min(w * 0.22, h * 0.35, 22)); // Proportional scale
    
    title.setAttribute("x", x + (w / 2));
    title.setAttribute("y", y + (h / 2) + (fSize * 0.2));
    title.setAttribute("font-size", `${fSize}px`);
    title.setAttribute("font-weight", "800");
    title.setAttribute("text-anchor", "middle"); // Centering
    title.textContent = asset.id;
    
    const priceText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    priceText.setAttribute("x", x + (w / 2));
    priceText.setAttribute("y", y + (h / 2) + (fSize * 0.95));
    priceText.setAttribute("font-size", `${fSize * 0.6}px`);
    priceText.setAttribute("font-weight", "bold");
    priceText.setAttribute("text-anchor", "middle");
    priceText.textContent = `${asset.price.toFixed(1)} AP`;

    if (isUp) {
        title.setAttribute("fill", "var(--bg-void)");
        priceText.setAttribute("fill", "var(--bg-void)");
    } else {
        title.setAttribute("fill", "var(--text-primary)");
        priceText.setAttribute("fill", "var(--text-muted)");
    }

    g.appendChild(rect);
    g.appendChild(title);
    
    // Condition to append secondary values based on cell density
    if (w > 50 && h > 45) {
        g.appendChild(priceText);
    }
    
    // 5. TOOLTIP INTERACTIVITY LISTENERS
    g.addEventListener('mousemove', (e) => {
        const tooltip = document.getElementById('treemap-tooltip');
        if (!tooltip) return;
        tooltip.style.display = 'block';
        tooltip.style.left = `${e.pageX + 15}px`;
        tooltip.style.top = `${e.pageY + 10}px`;
        tooltip.innerHTML = `
            <div style="font-weight:800; color:var(--text-primary); margin-bottom:4px; text-transform: uppercase;">[ ${asset.title} ]</div>
            <div style="font-size:0.65rem; color:var(--text-muted); margin-bottom:6px;">SOURCE: ${asset.source.toUpperCase()}</div>
            <div style="display:flex; justify-content:space-between; gap:20px; border-top:1px solid var(--border-dim); padding-top:4px;">
                <span>PRICE: <b>${asset.price.toFixed(2)}</b></span>
                <span style="color:var(--text-primary)">${asset.change.toFixed(1)}%</span>
            </div>
            <div style="display:flex; justify-content:space-between; margin-top:4px;">
                <span>VOL: <b>${asset.volume}</b></span>
                <span>DEMAND: <b>${asset.demand.toUpperCase()}</b></span>
            </div>
            <div style="display:flex; justify-content:space-between; margin-top:4px;">
                <span>CRED: <b>${asset.credibility}%</b></span>
                <span>STATE: <b>${asset.release.toUpperCase()}</b></span>
            </div>
        `;
    });

    g.addEventListener('mouseleave', () => {
        const tooltip = document.getElementById('treemap-tooltip');
        if (tooltip) tooltip.style.display = 'none';
    });

    g.style.cursor = 'pointer';
    g.addEventListener('click', () => {
        document.getElementById('view-toggle-btn').click();
        const card = Array.from(document.querySelectorAll('.asset-card')).find(c => c.innerHTML.includes(asset.title));
        if(card) card.click();
    });

    svg.appendChild(g);
}

// --- DUAL FILTERS STREAM LOGIC ---
let activeNewsFilter = 'all';
let activeTimeframe = '24h';

function getFilteredAssets() {
    if (activeNewsFilter === 'all') return newsAssets;
    return newsAssets.filter(a => {
        const isLive = a.release === 'Live Now';
        if (activeNewsFilter === 'live') return isLive;
        return !isLive; // 'upcoming'
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const newsFilter = document.getElementById('news-state-filter');
        const timeFilter = document.getElementById('timeframe-filter');

        if (newsFilter) {
            newsFilter.addEventListener('change', (e) => {
                activeNewsFilter = e.target.value;
                populatePool();
                populateTicker(); 
                const boxGraph = document.getElementById('box-graph-view');
                if (boxGraph && boxGraph.style.display === 'flex') {
                    renderTreemap();
                }
            });
        }

        if (timeFilter) {
            timeFilter.addEventListener('change', (e) => {
                activeTimeframe = e.target.value;
                generateSyntheticHistory();
                
                // Reseed Anchor starting prices based on selection bounds
                newsAssets.forEach(a => {
                    // Pre-populate random historical offsets to show diverse colors instantly upon filter change
                    let offsetPercent = (Math.random() - 0.45) * (activeTimeframe === '1w' ? 4 : activeTimeframe === '1m' ? 12 : activeTimeframe === '1y' ? 25 : 0);
                    a.basePriceTimeframe = a.price * (1 - (offsetPercent/100)); // offset into the past
                });
                
                renderChart();
                const boxGraph = document.getElementById('box-graph-view');
                if (boxGraph && boxGraph.style.display === 'flex') {
                    renderTreemap();
                }
            });
        }
    }, 1000);
});

function generateSyntheticHistory() {
    if (typeof activeAsset === 'undefined' || !activeAsset) return;
    chartHistory.length = 0; 
    const baseP = activeAsset.price;
    const count = activeTimeframe === '24h' ? 30 : activeTimeframe === '1w' ? 7 : activeTimeframe === '1m' ? 30 : 12;
    
    for(let i=0; i<count; i++) {
        chartHistory.push(baseP + (Math.random() - 0.45) * 2);
    }
}

// --- 6. MOBILE NAVIGATION HANDLERS ---
function initMobileNav() {
    const navItems = document.querySelectorAll('.nav-item');
    const panels = document.querySelectorAll('.hud-panel');

    // Default: Show Chart on Mobile
    const defaultPanel = document.querySelector('.chart-panel');
    if (defaultPanel) defaultPanel.classList.add('mobile-active');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-target');
            
            // Update Nav State
            navItems.forEach(ni => ni.classList.remove('active'));
            item.classList.add('active');

            // Update Panel Visibility
            panels.forEach(p => {
                p.classList.remove('mobile-active');
                if (p.classList.contains(target)) {
                    p.classList.add('mobile-active');
                }
            });

            // Trigger re-renders for hidden charts/svgs if needed
            if (target === 'chart-panel') renderChart();
            if (target === 'box-panel') renderTreemap();
        });
    });
}

// Ensure mobile nav is initialized
document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
});
