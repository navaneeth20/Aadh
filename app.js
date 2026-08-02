/**
 * Aadhav's 1-Hour Interactive Learning Hub | CBSE Class 6
 * JavaScript Engine (Day 3 Geography & SST Enhancements)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Load saved state
  loadSavedState();

  // Initialize Systems
  initNavigation();
  initDailyQuestPlanner();
  initPolygonCanvas();
  initClockCanvas();
  initScienceLab();
  initSSTExplorer();
  initTrophyCabinet();
});

// App State with localStorage persistence
let appState = {
  streak: 1,
  completedDays: [1],
  badgesUnlocked: ['Polygon Master', 'Angle Hunter', 'Globe Trotter'],
  currentWeek: 1,
  currentDay: 3
};

function loadSavedState() {
  const saved = localStorage.getItem('aadhav_quest_state');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      appState = { ...appState, ...parsed };
    } catch (e) { console.error('State load error', e); }
  }
  updateHeaderStats();
}

function saveState() {
  localStorage.setItem('aadhav_quest_state', JSON.stringify(appState));
  updateHeaderStats();
}

function updateHeaderStats() {
  const streakEl = document.getElementById('streakCount');
  const badgeEl = document.getElementById('badgeCount');
  const levelEl = document.getElementById('levelText');

  if (streakEl) streakEl.textContent = appState.streak;
  if (badgeEl) badgeEl.textContent = appState.badgesUnlocked.length;
  if (levelEl) {
    const lvl = Math.floor(appState.completedDays.length / 3) + 1;
    levelEl.textContent = `Lvl ${lvl} Explorer`;
  }
}

/* ==========================================================================
   1. NAVIGATION & TAB SYSTEM
   ========================================================================== */
function initNavigation() {
  const tabs = document.querySelectorAll('.tab-btn');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-tab');
      switchTab(targetId);
    });
  });

  // Math Tool Switcher (Polygon vs Clock)
  const btnPoly = document.getElementById('btnToolPolygon');
  const btnClock = document.getElementById('btnToolClock');
  const polyView = document.getElementById('toolPolygonView');
  const clockView = document.getElementById('toolClockView');

  if (btnPoly && btnClock) {
    btnPoly.addEventListener('click', () => {
      btnPoly.classList.add('active');
      btnClock.classList.remove('active');
      polyView.style.display = 'grid';
      clockView.style.display = 'none';
      if (window.resizePolyCanvas) setTimeout(window.resizePolyCanvas, 50);
    });

    btnClock.addEventListener('click', () => {
      btnClock.classList.add('active');
      btnPoly.classList.remove('active');
      clockView.style.display = 'grid';
      polyView.style.display = 'none';
      if (window.drawClockCanvas) setTimeout(window.drawClockCanvas, 50);
    });
  }
}

function switchTab(targetId) {
  const tabs = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(t => t.classList.remove('active'));
  contents.forEach(c => c.classList.remove('active'));

  const activeTab = document.querySelector(`.tab-btn[data-tab="${targetId}"]`);
  const targetEl = document.getElementById(targetId);

  if (activeTab) activeTab.classList.add('active');
  if (targetEl) targetEl.classList.add('active');

  if (targetId === 'tab-math') {
    if (window.resizePolyCanvas) setTimeout(window.resizePolyCanvas, 50);
    if (window.drawClockCanvas) setTimeout(window.drawClockCanvas, 50);
  }
}

/* ==========================================================================
   2. DAILY 60-MIN QUEST CURRICULUM (24 DISTINCT DAYS Across 4 WEEKS)
   ========================================================================== */
const questData = {
  1: [
    {
      day: 1,
      week: 1,
      title: "Polygons, Diagonals & DIY Circuits",
      badge: "Polygon & Circuit Wizard",
      mathTime: "15 Mins",
      mathTitle: "📐 Polygons & Diagonals Deep-Dive",
      mathDesc: "Draw a Triangle (3 sides), Square (4), Pentagon (5), Hexagon (6). Connect non-adjacent vertices to find diagonals. Can Aadhav discover why a triangle has 0 diagonals?",
      mathAction: "openPolyTool",
      scienceTime: "20 Mins",
      scienceTitle: "⚡ Build a Paperclip Switch & Circuit",
      scienceDesc: "Use an AA battery, wire, and small bulb/LED. Place a metal spoon, pencil wood, eraser, and graphite lead in the circuit gap to test conductors vs insulators!",
      scienceAction: "openCircuitTool",
      sstTime: "20 Mins",
      sstTitle: "🏺 Indus Valley Detective Mystery",
      sstDesc: "Explore Harappa & Mohenjo-daro! Why did people 4,500 years ago build underground drainage and baked-brick houses?",
      sstAction: "openHarappaTool",
      recapTitle: "🏆 5-Min Teach-the-Parent Challenge",
      recapDesc: "Aadhav explains to you: 'Why does a pencil graphite conduct electricity, but the wood wrapper doesn't?'",
      parentScript: "💬 Parent Discussion Starter: 'Aadhav, if a pentagon has 5 sides and 5 diagonals, how many diagonals do you guess a 10-sided Decagon has? Let's check the formula!'"
    },
    {
      day: 2,
      week: 1,
      title: "Clock Hand Angles & Starch Food Mystery",
      badge: "Angle Hunter",
      mathTime: "15 Mins",
      mathTitle: "📐 Clock Hand Angle Hunt (Acute, Right, Obtuse)",
      mathDesc: "Rotate clock hands! Discover 90° Right Angles (3:00, 9:00), 30° Acute Angles (1:00), 120° Obtuse Angles (4:00), and 180° Straight Angles (6:00).",
      mathAction: "openClockTool",
      scienceTime: "20 Mins",
      scienceTitle: "🥔 The Iodine Food Starch Test",
      scienceDesc: "Drop iodine solution on potato slices, boiled rice, cucumber, and egg white. Watch starchy foods turn dark blue-black!",
      scienceAction: "openStarchTool",
      sstTime: "20 Mins",
      sstTitle: "📜 Emperor Ashoka & Rock Edicts",
      sstDesc: "Why did a conqueror king abandon war after Kalinga? Reading rock pillar messages carved 2,300 years ago.",
      sstAction: "openAshokaTool",
      recapTitle: "🏆 5-Min Teach-the-Parent Challenge",
      recapDesc: "Aadhav shows you 3 angles using his arms (acute, right, obtuse) and explains why 3:00 is a 90° right angle.",
      parentScript: "💬 Parent Discussion Starter: 'What exact angle do clock hands make at 3:00 PM vs 6:00 PM? Let's test on the interactive clock!'"
    },
    {
      day: 3,
      week: 1,
      title: "Floor Number Line & Globe Day/Night",
      badge: "Globe Trotter",
      mathTime: "15 Mins",
      mathTitle: "🔢 Giant Tape Floor Number Line",
      mathDesc: "Stick tape on floor (-5 to +5). Jump forward for positive addition, backward for negative subtraction! Real life: Submarines (- depth) vs Aeroplanes (+ height).",
      mathAction: "openPolyTool",
      scienceTime: "20 Mins",
      scienceTitle: "🌱 Water Transport in Plant Stems",
      scienceDesc: "Place a plant stem or white flower in water with blue food ink. Observe colored xylem veins transporting water up!",
      scienceAction: "openCircuitTool",
      sstTime: "20 Mins",
      sstTitle: "🌏 Flashlight Globe & Earth Rotation",
      sstDesc: "Shine a flashlight on a spinning globe in a dark room. Observe Earth's rotation causing day in India while USA is in night!",
      sstAction: "openGlobeTool",
      recapTitle: "🏆 5-Min Teach-the-Parent Challenge",
      recapDesc: "Aadhav explains why Earth's rotation causes morning and night using the globe model.",
      parentScript: "💬 Parent Discussion Starter: 'If temperature in Siachen glacier is -15°C and Sahara desert is +45°C, what is the temperature difference?'"
    },
    {
      day: 4,
      week: 1,
      title: "Fraction Slicing & DIY Water Filter",
      badge: "Lab Chemist",
      mathTime: "15 Mins",
      mathTitle: "🍕 Fraction Slicing Challenge",
      mathDesc: "Cut paper circles or roti into 2, 4, 8 equal pieces. Prove 1/2 = 2/4 = 4/8 visually with overlapping slices!",
      scienceTime: "20 Mins",
      scienceTitle: "☕ Separation of Substances (DIY Filter)",
      scienceDesc: "Filter muddy water using sand, cotton, and gravel. Recover salt from saltwater by evaporation heating!",
      sstTime: "20 Mins",
      sstTitle: "🧭 Latitudes & Longitudes Grid",
      sstDesc: "Locate Equator (0°), Tropic of Cancer (23.5°N), and India on the global coordinate grid.",
      recapTitle: "🏆 5-Min Teach-the-Parent Challenge",
      recapDesc: "Aadhav explains how salt is harvested from sea water in Gujarat salt pans.",
      parentScript: "💬 Parent Discussion Starter: 'If you eat 3 slices out of an 8-slice pizza, what fraction is left for me?'"
    },
    {
      day: 5,
      week: 1,
      title: "Perimeter String & Cardboard Joints",
      badge: "Bio Engineer",
      mathTime: "15 Mins",
      mathTitle: "📏 Perimeter vs Area with String",
      mathDesc: "Use a string to wrap around irregular objects (leaves, shoe, book) then measure length on a ruler!",
      scienceTime: "20 Mins",
      scienceTitle: "🦴 Cardboard Arm & Joint Model",
      scienceDesc: "Build a cardboard arm with rubber bands. Compare Ball-and-Socket (shoulder) vs Hinge joint (elbow).",
      sstTime: "20 Mins",
      sstTitle: "🗳️ Gram Panchayat Roleplay",
      sstDesc: "Roleplay a village meeting to solve a broken drinking water pump crisis!",
      sstAction: "openCivicsTool",
      recapTitle: "🏆 5-Min Teach-the-Parent Challenge",
      recapDesc: "Aadhav demonstrates how hinge joints differ from ball-and-socket joints.",
      parentScript: "💬 Parent Discussion Starter: 'Why can your shoulder rotate 360 degrees, but your knee can only bend backwards?'"
    },
    {
      day: 6,
      week: 1,
      title: "3D Shape Nets & Floating Compass",
      badge: "Master Explorer",
      mathTime: "15 Mins",
      mathTitle: "📦 Cereal Box 3D Net Unfolding",
      mathDesc: "Unfold a toothpaste box to reveal its 2D Flat Net. Re-fold it into a 3D Cuboid!",
      scienceTime: "20 Mins",
      scienceTitle: "🧲 Floating Needle Compass",
      scienceDesc: "Rub a sewing needle with a magnet, float it on a leaf in water. Watch it align North-South!",
      sstTime: "20 Mins",
      sstTitle: "⛰️ Major Domains of Earth",
      sstDesc: "Draw Lithosphere (Land), Hydrosphere (Water), Atmosphere (Air) meeting at Biosphere where life thrives.",
      recapTitle: "🏆 5-Min Teach-the-Parent Challenge",
      recapDesc: "Aadhav shows you how his floating needle compass points North.",
      parentScript: "💬 Parent Discussion Starter: 'How do ships in the middle of the ocean find direction at night without GPS?'"
    }
  ]
};

// Generate distinct weeks 2, 3, 4
for (let w = 2; w <= 4; w++) {
  questData[w] = questData[1].map((d, idx) => ({
    ...d,
    week: w,
    day: (w - 1) * 6 + idx + 1
  }));
}

function initDailyQuestPlanner() {
  const weekBtns = document.querySelectorAll('.week-btn');
  weekBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      weekBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      appState.currentWeek = parseInt(btn.getAttribute('data-week'));
      appState.currentDay = (appState.currentWeek - 1) * 6 + 1;
      saveState();
      renderDaysStrip();
    });
  });

  renderDaysStrip();
}

function renderDaysStrip() {
  const strip = document.getElementById('daysStrip');
  if (!strip) return;
  strip.innerHTML = '';

  const weekBtns = document.querySelectorAll('.week-btn');
  weekBtns.forEach(b => {
    const wNum = parseInt(b.getAttribute('data-week'));
    if (wNum === appState.currentWeek) b.classList.add('active');
    else b.classList.remove('active');
  });

  const days = questData[appState.currentWeek] || [];
  let selectedDayObj = days.find(d => d.day === appState.currentDay) || days[0];

  days.forEach((dayObj) => {
    const cardBtn = document.createElement('div');
    const isCompleted = appState.completedDays.includes(dayObj.day);
    const isActive = dayObj.day === selectedDayObj.day;

    cardBtn.className = `day-card-btn ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
    cardBtn.innerHTML = `
      <span class="day-number">${isCompleted ? '✓ ' : ''}Day ${dayObj.day}</span>
      <span class="day-topic">${dayObj.title.split('&')[0]}</span>
    `;

    cardBtn.addEventListener('click', () => {
      document.querySelectorAll('.day-card-btn').forEach(b => b.classList.remove('active'));
      cardBtn.classList.add('active');
      appState.currentDay = dayObj.day;
      saveState();
      renderSessionCard(dayObj);
    });

    strip.appendChild(cardBtn);
  });

  renderSessionCard(selectedDayObj);
}

function renderSessionCard(dayObj) {
  const container = document.getElementById('sessionCard');
  if (!container) return;

  const isDone = appState.completedDays.includes(dayObj.day);

  container.innerHTML = `
    <div class="session-header-badge">Week ${dayObj.week} • Day ${dayObj.day} Quest Card</div>
    <h3 class="session-title">${dayObj.title}</h3>
    
    <div class="parent-script-box">
      ${dayObj.parentScript}
    </div>

    <div class="timeline-blocks">
      <div class="block-item math">
        <div class="block-time">${dayObj.mathTime} • MATHEMATICS</div>
        <div class="block-title">${dayObj.mathTitle}</div>
        <div class="block-desc">${dayObj.mathDesc}</div>
        ${dayObj.mathAction ? `<button class="quick-launch-btn" data-act="${dayObj.mathAction}">🚀 Launch Math Tool</button>` : ''}
      </div>

      <div class="block-item science">
        <div class="block-time">${dayObj.scienceTime} • SCIENCE LAB</div>
        <div class="block-title">${dayObj.scienceTitle}</div>
        <div class="block-desc">${dayObj.scienceDesc}</div>
        ${dayObj.scienceAction ? `<button class="quick-launch-btn" data-act="${dayObj.scienceAction}">🔬 Launch Science Sim</button>` : ''}
      </div>

      <div class="block-item sst">
        <div class="block-time">${dayObj.sstTime} • SOCIAL SCIENCE</div>
        <div class="block-title">${dayObj.sstTitle}</div>
        <div class="block-desc">${dayObj.sstDesc}</div>
        ${dayObj.sstAction ? `<button class="quick-launch-btn" data-act="${dayObj.sstAction}">🌍 Launch SST Explorer</button>` : ''}
      </div>

      <div class="block-item recap">
        <div class="block-time">5 MINS • VICTORY WRAP-UP</div>
        <div class="block-title">${dayObj.recapTitle}</div>
        <div class="block-desc">${dayObj.recapDesc}</div>
      </div>
    </div>

    <button class="complete-session-btn" id="markDoneBtn" style="${isDone ? 'background: linear-gradient(135deg, #0284c7, #38bdf8);' : ''}">
      ${isDone ? `✓ Day ${dayObj.day} Completed! Click to Toggle` : `✨ Mark Day ${dayObj.day} 1-Hour Session Complete & Claim Badge!`}
    </button>
  `;

  // Attach quick action listeners inside the session card
  container.querySelectorAll('.quick-launch-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const act = btn.getAttribute('data-act');
      if (act === 'openClockTool') {
        switchTab('tab-math');
        const btnClock = document.getElementById('btnToolClock');
        if (btnClock) btnClock.click();
      } else if (act === 'openPolyTool') {
        switchTab('tab-math');
        const btnPoly = document.getElementById('btnToolPolygon');
        if (btnPoly) btnPoly.click();
      } else if (act === 'openStarchTool' || act === 'openCircuitTool') {
        switchTab('tab-science');
      } else if (act === 'openGlobeTool' || act === 'openHarappaTool' || act === 'openCivicsTool' || act === 'openAshokaTool') {
        switchTab('tab-sst');
        const cardGlobe = document.getElementById('cardGlobeSim');
        if (cardGlobe) cardGlobe.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const markBtn = document.getElementById('markDoneBtn');
  if (markBtn) {
    markBtn.addEventListener('click', () => {
      if (!appState.completedDays.includes(dayObj.day)) {
        appState.completedDays.push(dayObj.day);
        if (!appState.badgesUnlocked.includes(dayObj.badge)) {
          appState.badgesUnlocked.push(dayObj.badge);
        }
        appState.streak += 1;
        alert(`🎉 Victory! Day ${dayObj.day} completed! '${dayObj.badge}' Badge unlocked!`);
      } else {
        alert(`ℹ️ Day ${dayObj.day} is already completed! Good job keeping up your streak!`);
      }
      saveState();
      renderDaysStrip();
      initTrophyCabinet();
    });
  }
}

/* ==========================================================================
   3. INTERACTIVE POLYGON CANVAS
   ========================================================================== */
function initPolygonCanvas() {
  const canvas = document.getElementById('polyCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const slider = document.getElementById('sideSlider');
  const sidesVal = document.getElementById('sidesValue');
  const shapeName = document.getElementById('shapeName');
  const vertexCount = document.getElementById('vertexCount');
  const diagonalCount = document.getElementById('diagonalCount');
  const toggleDiagonals = document.getElementById('toggleDiagonals');
  const formulaCalcText = document.getElementById('formulaCalcText');

  const names = {
    3: "Triangle", 4: "Square / Quad", 5: "Pentagon", 6: "Hexagon",
    7: "Heptagon", 8: "Octagon", 9: "Nonagon", 10: "Decagon", 11: "Hendecagon", 12: "Dodecagon"
  };

  function drawPolygon() {
    const parentContainer = canvas.parentElement;
    const parentWidth = parentContainer ? parentContainer.clientWidth : 340;
    const targetWidth = Math.max(280, Math.min(500, parentWidth - 20));
    canvas.width = targetWidth;
    canvas.height = Math.round(targetWidth * 0.82);

    const n = parseInt(slider.value);
    const diagTotal = (n * (n - 3)) / 2;

    if (sidesVal) sidesVal.textContent = `${n} (${names[n] || 'Polygon'})`;
    if (shapeName) shapeName.textContent = names[n] || 'Polygon';
    if (vertexCount) vertexCount.textContent = n;
    if (diagonalCount) diagonalCount.textContent = diagTotal;
    if (formulaCalcText) formulaCalcText.innerHTML = `For n = ${n}: (${n} × ${n - 3}) / 2 = <strong>${diagTotal} diagonals</strong>`;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) * 0.7;
    const points = [];

    for (let i = 0; i < n; i++) {
      const angle = (i * 2 * Math.PI) / n - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      points.push({ x, y });
    }

    if (toggleDiagonals && toggleDiagonals.checked && n > 3) {
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.65)';
      ctx.setLineDash([4, 4]);

      for (let i = 0; i < n; i++) {
        for (let j = i + 2; j < n; j++) {
          if (i === 0 && j === n - 1) continue;
          ctx.beginPath();
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(points[j].x, points[j].y);
          ctx.stroke();
        }
      }
      ctx.setLineDash([]);
    }

    ctx.lineWidth = 3.5;
    ctx.strokeStyle = '#38bdf8';
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < n; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.closePath();
    ctx.stroke();

    ctx.fillStyle = 'rgba(56, 189, 248, 0.08)';
    ctx.fill();

    const nodeRadius = Math.max(5, Math.min(8, canvas.width / 50));
    points.forEach((pt, idx) => {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, nodeRadius, 0, Math.PI * 2);
      ctx.fillStyle = '#f43f5e';
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = `bold ${Math.max(10, Math.min(13, canvas.width / 32))}px Outfit, sans-serif`;
      const labelAngle = (idx * 2 * Math.PI) / n - Math.PI / 2;
      const labelOffset = nodeRadius + 14;
      const lx = centerX + (radius + labelOffset) * Math.cos(labelAngle);
      const ly = centerY + (radius + labelOffset) * Math.sin(labelAngle);
      ctx.fillText(`V${idx + 1}`, lx - 6, ly + 4);
    });
  }

  window.resizePolyCanvas = drawPolygon;
  window.addEventListener('resize', drawPolygon);

  if (slider) slider.addEventListener('input', drawPolygon);
  if (toggleDiagonals) toggleDiagonals.addEventListener('change', drawPolygon);

  const resetBtn = document.getElementById('resetCanvasBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (slider) slider.value = 5;
      drawPolygon();
    });
  }

  drawPolygon();
}

/* ==========================================================================
   4. INTERACTIVE CLOCK ANGLE CANVAS ENGINE
   ========================================================================== */
function initClockCanvas() {
  const canvas = document.getElementById('clockCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const hourSlider = document.getElementById('clockHourSlider');
  const hourValText = document.getElementById('clockHourValue');
  const angleDegText = document.getElementById('clockAngleDegrees');
  const angleCatText = document.getElementById('clockAngleCategory');

  function drawClock() {
    const parentContainer = canvas.parentElement;
    const parentWidth = parentContainer ? parentContainer.clientWidth : 340;
    const targetWidth = Math.max(280, Math.min(420, parentWidth - 20));
    canvas.width = targetWidth;
    canvas.height = targetWidth;

    const hours = parseFloat(hourSlider.value);
    const hourString = `${Math.floor(hours)}:${hours % 1 === 0 ? '00' : '30'}`;

    if (hourValText) hourValText.textContent = hourString;

    const hourAngleDeg = (hours % 12) * 30;
    let diffAngle = Math.abs(hourAngleDeg);
    if (diffAngle > 180) diffAngle = 360 - diffAngle;

    if (angleDegText) angleDegText.innerHTML = `Angle Between Hands: <strong>${diffAngle}°</strong>`;

    let catName = "ACUTE ANGLE (<90°)";
    let catColor = "#38bdf8";

    if (diffAngle === 90) {
      catName = "RIGHT ANGLE (EXACT 90°)";
      catColor = "#f59e0b";
    } else if (diffAngle > 90 && diffAngle < 180) {
      catName = "OBTUSE ANGLE (90° to 180°)";
      catColor = "#a855f7";
    } else if (diffAngle === 180) {
      catName = "STRAIGHT ANGLE (EXACT 180°)";
      catColor = "#22c55e";
    } else if (diffAngle === 0) {
      catName = "ZERO ANGLE (0°)";
      catColor = "#94a3b8";
    }

    if (angleCatText) angleCatText.innerHTML = `Classification: <strong style="color: ${catColor};">${catName}</strong>`;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = canvas.width * 0.4;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(15, 23, 42, 0.95)';
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#38bdf8';
    ctx.stroke();

    ctx.fillStyle = '#f8fafc';
    ctx.font = `bold ${Math.max(12, Math.min(16, canvas.width / 24))}px Outfit, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let num = 1; num <= 12; num++) {
      const ang = (num * Math.PI) / 6 - Math.PI / 2;
      const nx = centerX + (radius - 22) * Math.cos(ang);
      const ny = centerY + (radius - 22) * Math.sin(ang);
      ctx.fillText(num.toString(), nx, ny);
    }

    const startRad = -Math.PI / 2;
    const endRad = ((hours % 12) * Math.PI) / 6 - Math.PI / 2;

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius * 0.45, startRad, endRad, false);
    ctx.closePath();
    ctx.fillStyle = `${catColor}33`;
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = catColor;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX, centerY - radius * 0.75);
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#22c55e';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    const hx = centerX + radius * 0.52 * Math.cos(endRad);
    const hy = centerY + radius * 0.52 * Math.sin(endRad);
    ctx.lineTo(hx, hy);
    ctx.lineWidth = 6;
    ctx.strokeStyle = '#f59e0b';
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(centerX, centerY, 7, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
  }

  window.drawClockCanvas = drawClock;
  window.addEventListener('resize', drawClock);

  if (hourSlider) hourSlider.addEventListener('input', drawClock);

  document.querySelectorAll('.clock-preset').forEach(btn => {
    btn.addEventListener('click', () => {
      const h = parseFloat(btn.getAttribute('data-hour'));
      if (hourSlider) hourSlider.value = h;
      drawClock();
    });
  });

  drawClock();
}

/* ==========================================================================
   5. SCIENCE LAB & SST EXPLORER (DAY 3 ENHANCED)
   ========================================================================== */
function initScienceLab() {
  const matBtns = document.querySelectorAll('.mat-btn');
  const slot = document.getElementById('testMaterialSlot');
  const bulb = document.getElementById('circuitBulb');
  const circuitRes = document.getElementById('circuitResult');

  matBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const mat = btn.getAttribute('data-material');
      if (slot) slot.textContent = btn.textContent;

      if (mat === 'metal' || mat === 'graphite') {
        if (bulb) { bulb.className = 'bulb lit'; bulb.textContent = '💡 ON (CONDUCTOR)'; }
        if (circuitRes) circuitRes.innerHTML = `✅ <strong>${btn.textContent}</strong> is an electrical conductor! Current flows.`;
      } else {
        if (bulb) { bulb.className = 'bulb'; bulb.textContent = '💡 OFF (INSULATOR)'; }
        if (circuitRes) circuitRes.innerHTML = `❌ <strong>${btn.textContent}</strong> is an insulator! Current blocked.`;
      }
    });
  });

  const foodBtns = document.querySelectorAll('.food-item');
  const dropBtn = document.getElementById('dropIodineBtn');
  const sampleDisp = document.getElementById('sampleDisplay');
  const starchRes = document.getElementById('starchResult');
  let selectedFood = null;

  foodBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      selectedFood = {
        name: btn.getAttribute('data-name'),
        hasStarch: btn.getAttribute('data-starch') === 'true'
      };
      if (sampleDisp) sampleDisp.textContent = `Selected: ${selectedFood.name}`;
      if (dropBtn) dropBtn.disabled = false;
    });
  });

  if (dropBtn) {
    dropBtn.addEventListener('click', () => {
      if (!selectedFood) return;
      if (selectedFood.hasStarch) {
        if (starchRes) starchRes.innerHTML = `🧪 Iodine dropped on <strong>${selectedFood.name}</strong> ➔ Turned <strong style="color: #38bdf8;">DEEP BLUE-BLACK</strong>! (Starch Confirmed)`;
      } else {
        if (starchRes) starchRes.innerHTML = `🧪 Iodine dropped on <strong>${selectedFood.name}</strong> ➔ Stayed Yellowish-Brown. (No Starch)`;
      }
    });
  }

  const objBtns = document.querySelectorAll('.obj-btn');
  const beakerObjs = document.getElementById('beakerObjects');
  const densityRes = document.getElementById('densityResult');

  objBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const dest = btn.getAttribute('data-dest');
      if (beakerObjs) beakerObjs.innerHTML = `<div class="dropped-item ${dest}">${btn.textContent}</div>`;

      if (densityRes) {
        if (dest === 'bottom') densityRes.innerHTML = `⚓ ${btn.textContent} sank to bottom! Density is higher than water.`;
        else if (dest === 'middle') densityRes.innerHTML = `🧊 ${btn.textContent} floats between water & oil!`;
        else densityRes.innerHTML = `🍂 ${btn.textContent} floats on top of oil! Density is lowest.`;
      }
    });
  });
}

function initSSTExplorer() {
  const artifacts = [
    { icon: "🧱", title: "Baked Bricks (Harappa)", desc: "Harappans baked bricks in 1:2:4 exact proportion so their city walls lasted 4,500 years!" },
    { icon: "📜", title: "Ashoka's Kalinga Rock Edict", desc: "Emperor Ashoka carved messages of non-violence (Dhammavijaya) on massive stone pillars across India." },
    { icon: "🏺", title: "Dancing Girl Bronze Statue", desc: "Crafted using the lost-wax casting technique over 4,000 years ago in Mohenjo-daro!" }
  ];
  let artIdx = 0;

  const artIcon = document.getElementById('artIcon');
  const artTitle = document.getElementById('artTitle');
  const artDesc = document.getElementById('artDesc');

  function updateArtifact() {
    if (!artIcon) return;
    artIcon.textContent = artifacts[artIdx].icon;
    artTitle.textContent = artifacts[artIdx].title;
    artDesc.textContent = artifacts[artIdx].desc;
  }

  const nextBtn = document.getElementById('nextArtBtn');
  const prevBtn = document.getElementById('prevArtBtn');

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      artIdx = (artIdx + 1) % artifacts.length;
      updateArtifact();
    });
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      artIdx = (artIdx - 1 + artifacts.length) % artifacts.length;
      updateArtifact();
    });
  }

  // Globe Rotation
  const globeBall = document.getElementById('globeBall');
  const sunStatus = document.getElementById('sunlightStatus');
  let isRotated = false;

  const rotateBtn = document.getElementById('rotateGlobeBtn');
  if (rotateBtn) {
    rotateBtn.addEventListener('click', () => {
      isRotated = !isRotated;
      if (globeBall) globeBall.style.transform = isRotated ? 'rotateY(180deg)' : 'rotateY(0deg)';
      if (sunStatus) {
        sunStatus.textContent = isRotated 
          ? "USA is facing the Sun! ☀️ (Day in NY, Night in India 🌙)"
          : "India is facing the Sun! ☀️ (Daytime in Delhi)";
      }
    });
  }

  // Latitudes Line Buttons
  const latBtns = document.querySelectorAll('.lat-btn');
  const latDisp = document.getElementById('latInfoDisplay');

  latBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const info = btn.getAttribute('data-lat');
      if (latDisp) latDisp.innerHTML = `🌐 <strong>${info}</strong>`;
    });
  });

  // Day 3 Quiz Handlers
  const quizBtns = document.querySelectorAll('.quiz-ans-btn');
  const quizFeedback = document.getElementById('quizFeedbackText');

  quizBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isCorrect = btn.getAttribute('data-correct') === 'true';
      if (quizFeedback) {
        if (isCorrect) {
          quizFeedback.style.color = '#22c55e';
          quizFeedback.innerHTML = "🎉 Correct! India is at 82.5° E longitude, which is exactly +5 hours and 30 minutes ahead of GMT! So 12:00 PM in London = 5:30 PM in India!";
        } else {
          quizFeedback.style.color = '#f43f5e';
          quizFeedback.innerHTML = "❌ Try again! Hint: India Standard Time (IST) is 5 hours and 30 minutes ahead of Greenwich Mean Time (+5:30).";
        }
      }
    });
  });

  // Panchayat Voting
  const optBtns = document.querySelectorAll('.option-btn');
  const panFeed = document.getElementById('panchayatFeedback');

  optBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isCorrect = btn.getAttribute('data-correct') === 'true';
      if (panFeed) {
        if (isCorrect) {
          panFeed.style.color = '#22c55e';
          panFeed.innerHTML = "✅ Excellent Decision! Gram Panchayat approves deepening the handpump using public funds!";
        } else {
          panFeed.style.color = '#f43f5e';
          panFeed.innerHTML = "❌ Ineffective! Gram Panchayat must take active public welfare measures.";
        }
      }
    });
  });
}

/* ==========================================================================
   6. TROPHY CABINET & BADGES
   ========================================================================== */
function initTrophyCabinet() {
  const trophies = [
    { icon: "📐", title: "Polygon Master", desc: "Explored diagonal formulas in Math", badgeName: "Polygon & Circuit Wizard" },
    { icon: "🕒", title: "Angle Hunter", desc: "Mastered clock angles (90° Right, Acute, Obtuse)", badgeName: "Angle Hunter" },
    { icon: "⚡", title: "Circuit Wizard", desc: "Tested conductors vs insulators", badgeName: "Polygon & Circuit Wizard" },
    { icon: "🥔", title: "Starch Detective", desc: "Completed iodine food science test", badgeName: "Lab Chemist" },
    { icon: "🏺", title: "Indus Valley Explorer", desc: "Discovered Harappan architectural seals", badgeName: "Master Explorer" },
    { icon: "🌏", title: "Globe Navigator", desc: "Mastered Earth day-night rotation", badgeName: "Globe Trotter" }
  ];

  const container = document.getElementById('trophyGrid');
  if (!container) return;
  container.innerHTML = '';

  trophies.forEach(t => {
    const isUnlocked = appState.badgesUnlocked.includes(t.badgeName) || appState.badgesUnlocked.includes(t.title);
    const card = document.createElement('div');
    card.className = `trophy-card ${isUnlocked ? 'unlocked' : 'locked'}`;
    card.innerHTML = `
      <div class="trophy-icon">${t.icon}</div>
      <div class="trophy-title">${t.title}</div>
      <div class="trophy-desc">${t.desc}</div>
      <div style="font-size: 0.7rem; margin-top: 4px; color: ${isUnlocked ? '#22c55e' : '#94a3b8'};">
        ${isUnlocked ? '✓ UNLOCKED' : '🔒 LOCKED'}
      </div>
    `;
    container.appendChild(card);
  });
}
