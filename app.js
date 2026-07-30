/**
 * Aadhav's 1-Hour Interactive Learning Hub | CBSE Class 6
 * JavaScript Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Systems
  initNavigation();
  initDailyQuestPlanner();
  initPolygonCanvas();
  initScienceLab();
  initSSTExplorer();
  initTrophyCabinet();
});

/* ==========================================================================
   1. NAVIGATION & TAB SYSTEM
   ========================================================================== */
function initNavigation() {
  const tabs = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      const targetId = tab.getAttribute('data-tab');
      document.getElementById(targetId).classList.add('active');
    });
  });
}

/* ==========================================================================
   2. DAILY 60-MIN QUEST CURRICULUM (24 DAYS Across 4 WEEKS)
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
      scienceTime: "20 Mins",
      scienceTitle: "⚡ Build a Paperclip Switch & Circuit",
      scienceDesc: "Use an AA battery, wire, and small bulb/LED. Place a metal spoon, pencil wood, eraser, and graphite lead in the circuit gap to test conductors vs insulators!",
      sstTime: "20 Mins",
      sstTitle: "🏺 Indus Valley Detective Mystery",
      sstDesc: "Explore Harappa & Mohenjo-daro! Why did people 4,500 years ago build underground drainage and baked-brick houses?",
      recapTitle: "🏆 5-Min Teach-the-Parent Challenge",
      recapDesc: "Aadhav explains to you: 'Why does a pencil graphite conduct electricity, but the wood wrapper doesn't?'",
      parentScript: "💬 Parent Discussion Starter: 'Aadhav, if a pentagon has 5 sides and 5 diagonals, how many diagonals do you guess a 10-sided Decagon has? Let's check the formula!'"
    },
    {
      day: 2,
      week: 1,
      title: "Clock Angles & Starch Food Mystery",
      badge: "Angle Hunter",
      mathTime: "15 Mins",
      mathTitle: "📐 Clock Hand Angle Hunt",
      mathDesc: "Rotate wall clock hands. Find Acute (<90°), Right (90°), Obtuse (>90°), and Straight (180°) angles. Hunt for 5 right angles in the living room!",
      scienceTime: "20 Mins",
      scienceTitle: "🥔 The Blue-Black Starch Test",
      scienceDesc: "Drop iodine/tincture on potato, boiled rice, and cucumber. Watch starch foods turn deep blue-black!",
      sstTime: "20 Mins",
      sstTitle: "📜 Ashoka the Great & Rock Edicts",
      sstDesc: "Why did a mighty Emperor give up war after Kalinga? Read messages carved on ancient stone pillars.",
      recapTitle: "🏆 5-Min Teach-the-Parent Challenge",
      recapDesc: "Aadhav shows you 3 angles using his arms (acute, right, obtuse).",
      parentScript: "💬 Parent Discussion Starter: 'What time does a clock show when its hands form a exact 90° right angle? (3:00 or 9:00!)'"
    },
    {
      day: 3,
      week: 1,
      title: "Floor Number Line & Globe Rotation",
      badge: "Globe Trotter",
      mathTime: "15 Mins",
      mathTitle: "🔢 Giant Tape Number Line Jump",
      mathDesc: "Stick tape on the floor (-5 to +5). Jump forward for positive addition, backward for negative subtraction!",
      scienceTime: "20 Mins",
      scienceTitle: "🌱 Water Transport in Celery/Stem",
      scienceDesc: "Place a plant stem or white flower in water with blue food ink. Watch ink travel up the stem veins!",
      sstTime: "20 Mins",
      sstTitle: "🌏 Flashlight Globe & Day/Night",
      sstDesc: "Shine a flashlight on a spinning globe in a dark room. Show why India has day while USA has night!",
      recapTitle: "🏆 5-Min Teach-the-Parent Challenge",
      recapDesc: "Aadhav explains how Earth's rotation causes morning and night.",
      parentScript: "💬 Parent Discussion Starter: 'If temperature in Siachen is -15°C and Sahara is +45°C, what is the temperature gap?'"
    },
    {
      day: 4,
      week: 1,
      title: "Fraction Roti & Water Filtration",
      badge: "Lab Chemist",
      mathTime: "15 Mins",
      mathTitle: "🍕 Fraction Slicing Challenge",
      mathDesc: "Cut paper circles or roti into 2, 4, 8 pieces. Prove 1/2 = 2/4 = 4/8 visually!",
      scienceTime: "20 Mins",
      scienceTitle: "☕ Separation of Substances (DIY Filter)",
      scienceDesc: "Filter muddy water using sand, cotton, and gravel. Recover salt from saltwater by evaporation!",
      sstTime: "20 Mins",
      sstTitle: "🧭 Latitudes & Longitudes Navigation",
      sstDesc: "Locate Equator (0°), Tropic of Cancer, and India on a world map.",
      recapTitle: "🏆 5-Min Teach-the-Parent Challenge",
      recapDesc: "Aadhav explains how salt is harvested from seawater in Gujarat.",
      parentScript: "💬 Parent Discussion Starter: 'If you eat 3 slices out of an 8-slice pizza, what fraction is left for me?'"
    },
    {
      day: 5,
      week: 1,
      title: "Perimeter Thread & Cardboard Joints",
      badge: "Bio Engineer",
      mathTime: "15 Mins",
      mathTitle: "📏 Perimeter with Thread",
      mathDesc: "Use a string to wrap around irregular objects (leaves, shoe, book) then measure string on a ruler!",
      scienceTime: "20 Mins",
      scienceTitle: "🦴 Cardboard Arm & Joint Model",
      scienceDesc: "Build a cardboard arm with rubber bands. Compare Ball-and-Socket (shoulder) vs Hinge joint (elbow).",
      sstTime: "20 Mins",
      sstTitle: "🗳️ Gram Panchayat Roleplay",
      sstDesc: "Roleplay a village meeting to solve a broken drinking water pump issue!",
      recapTitle: "🏆 5-Min Teach-the-Parent Challenge",
      recapDesc: "Aadhav demonstrates how hinge joints differ from ball-and-socket joints.",
      parentScript: "💬 Parent Discussion Starter: 'Why can your shoulder rotate 360 degrees, but your knee can only bend backwards?'"
    },
    {
      day: 6,
      week: 1,
      title: "3D Nets & Floating Compass",
      badge: "Master Explorer",
      mathTime: "15 Mins",
      mathTitle: "📦 Cereal Box 3D Net Unfolding",
      mathDesc: "Unfold a cardboard box to reveal its flat 2D Net. Re-fold it into a 3D Cuboid!",
      scienceTime: "20 Mins",
      scienceTitle: "🧲 Floating Needle Compass",
      scienceDesc: "Rub a sewing needle with a magnet, float it on a leaf in water. It points North-South!",
      sstTime: "20 Mins",
      sstTitle: "⛰️ Major Domains of Earth",
      sstDesc: "Draw Lithosphere (Land), Hydrosphere (Water), Atmosphere (Air) meeting at Biosphere.",
      recapTitle: "🏆 5-Min Teach-the-Parent Challenge",
      recapDesc: "Aadhav shows you how his floating needle points North.",
      parentScript: "💬 Parent Discussion Starter: 'How do ships in the middle of the ocean find their direction at night without GPS?'"
    }
  ]
};

// Populate additional weeks 2, 3, 4 dynamically
questData[2] = questData[1].map(d => ({ ...d, week: 2, day: d.day + 6 }));
questData[3] = questData[1].map(d => ({ ...d, week: 3, day: d.day + 12 }));
questData[4] = questData[1].map(d => ({ ...d, week: 4, day: d.day + 18 }));

let currentWeek = 1;
let currentDay = 1;

function initDailyQuestPlanner() {
  const weekBtns = document.querySelectorAll('.week-btn');
  weekBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      weekBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentWeek = parseInt(btn.getAttribute('data-week'));
      renderDaysStrip();
    });
  });

  renderDaysStrip();
}

function renderDaysStrip() {
  const strip = document.getElementById('daysStrip');
  strip.innerHTML = '';
  const days = questData[currentWeek] || [];

  days.forEach((dayObj, idx) => {
    const cardBtn = document.createElement('div');
    cardBtn.className = `day-card-btn ${dayObj.day === currentDay ? 'active' : ''}`;
    cardBtn.innerHTML = `
      <span class="day-number">Day ${dayObj.day}</span>
      <span class="day-topic">${dayObj.title.split('&')[0]}</span>
    `;
    cardBtn.addEventListener('click', () => {
      document.querySelectorAll('.day-card-btn').forEach(b => b.classList.remove('active'));
      cardBtn.classList.add('active');
      currentDay = dayObj.day;
      renderSessionCard(dayObj);
    });
    strip.appendChild(cardBtn);
  });

  if (days.length > 0) {
    renderSessionCard(days[0]);
  }
}

function renderSessionCard(dayObj) {
  const container = document.getElementById('sessionCard');
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
      </div>

      <div class="block-item science">
        <div class="block-time">${dayObj.scienceTime} • SCIENCE LAB</div>
        <div class="block-title">${dayObj.scienceTitle}</div>
        <div class="block-desc">${dayObj.scienceDesc}</div>
      </div>

      <div class="block-item sst">
        <div class="block-time">${dayObj.sstTime} • SOCIAL SCIENCE</div>
        <div class="block-title">${dayObj.sstTitle}</div>
        <div class="block-desc">${dayObj.sstDesc}</div>
      </div>

      <div class="block-item recap">
        <div class="block-time">5 MINS • VICTORY WRAP-UP</div>
        <div class="block-title">${dayObj.recapTitle}</div>
        <div class="block-desc">${dayObj.recapDesc}</div>
      </div>
    </div>

    <button class="complete-session-btn" id="markDoneBtn">
      ✨ Mark Day ${dayObj.day} 1-Hour Session Complete & Claim Badge!
    </button>
  `;

  document.getElementById('markDoneBtn').addEventListener('click', () => {
    alert(`🎉 Awesome job Parent & Aadhav! Day ${dayObj.day} session completed! Streak incremented & '${dayObj.badge}' Badge unlocked!`);
    incrementStreak();
  });
}

function incrementStreak() {
  const streakEl = document.getElementById('streakCount');
  let current = parseInt(streakEl.textContent);
  streakEl.textContent = current + 1;
}

/* ==========================================================================
   3. INTERACTIVE MATH POLYGON CANVAS
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
    3: "Triangle", 4: "Quadrilateral / Square", 5: "Pentagon", 6: "Hexagon",
    7: "Heptagon", 8: "Octagon", 9: "Nonagon", 10: "Decagon", 11: "Hendecagon", 12: "Dodecagon"
  };

  function drawPolygon() {
    const n = parseInt(slider.value);
    const diagTotal = (n * (n - 3)) / 2;

    sidesVal.textContent = `${n} (${names[n] || 'Polygon'})`;
    shapeName.textContent = names[n] || 'Polygon';
    vertexCount.textContent = n;
    diagonalCount.textContent = diagTotal;
    formulaCalcText.innerHTML = `For n = ${n}: (${n} × ${n - 3}) / 2 = <strong>${diagTotal} diagonals</strong>`;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 150;
    const points = [];

    // Calculate Vertices
    for (let i = 0; i < n; i++) {
      const angle = (i * 2 * Math.PI) / n - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      points.push({ x, y });
    }

    // Draw Diagonals first (so they sit under boundary)
    if (toggleDiagonals.checked && n > 3) {
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.6)';
      ctx.setLineDash([4, 4]);

      for (let i = 0; i < n; i++) {
        for (let j = i + 2; j < n; j++) {
          if (i === 0 && j === n - 1) continue; // Skip adjacent boundary edge
          ctx.beginPath();
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(points[j].x, points[j].y);
          ctx.stroke();
        }
      }
      ctx.setLineDash([]);
    }

    // Draw Outer Polygon Edges
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#38bdf8';
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < n; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.closePath();
    ctx.stroke();

    // Fill polygon subtly
    ctx.fillStyle = 'rgba(56, 189, 248, 0.08)';
    ctx.fill();

    // Draw Vertex Nodes & Labels
    points.forEach((pt, idx) => {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 8, 0, Math.PI * 2);
      ctx.fillStyle = '#f43f5e';
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

      // Label
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 14px Outfit, sans-serif';
      const labelAngle = (idx * 2 * Math.PI) / n - Math.PI / 2;
      const lx = centerX + (radius + 22) * Math.cos(labelAngle);
      const ly = centerY + (radius + 22) * Math.sin(labelAngle);
      ctx.fillText(`V${idx + 1}`, lx - 8, ly + 5);
    });
  }

  slider.addEventListener('input', drawPolygon);
  toggleDiagonals.addEventListener('change', drawPolygon);
  document.getElementById('resetCanvasBtn').addEventListener('click', () => {
    slider.value = 5;
    drawPolygon();
  });

  drawPolygon();
}

/* ==========================================================================
   4. SCIENCE LAB INTERACTION
   ========================================================================== */
function initScienceLab() {
  // Circuit Sim
  const matBtns = document.querySelectorAll('.mat-btn');
  const slot = document.getElementById('testMaterialSlot');
  const bulb = document.getElementById('circuitBulb');
  const circuitRes = document.getElementById('circuitResult');

  matBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const mat = btn.getAttribute('data-material');
      slot.textContent = btn.textContent;

      if (mat === 'metal' || mat === 'graphite') {
        bulb.className = 'bulb lit';
        bulb.textContent = '💡 ON (CONDUCTOR)';
        circuitRes.innerHTML = `✅ <strong>${btn.textContent}</strong> is an electrical conductor! Current flows smoothly.`;
      } else {
        bulb.className = 'bulb';
        bulb.textContent = '💡 OFF (INSULATOR)';
        circuitRes.innerHTML = `❌ <strong>${btn.textContent}</strong> is an insulator! Current is blocked.`;
      }
    });
  });

  // Starch Test Sim
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
      sampleDisp.textContent = `Selected: ${selectedFood.name}`;
      dropBtn.disabled = false;
    });
  });

  dropBtn.addEventListener('click', () => {
    if (!selectedFood) return;
    if (selectedFood.hasStarch) {
      starchRes.innerHTML = `🧪 Iodine added to <strong>${selectedFood.name}</strong> ➔ Turned <strong style="color: #38bdf8;">DEEP BLUE-BLACK</strong>! (Contains Starch)`;
    } else {
      starchRes.innerHTML = `🧪 Iodine added to <strong>${selectedFood.name}</strong> ➔ Stayed Yellowish-Brown. (No Starch)`;
    }
  });

  // Density Test Sim
  const objBtns = document.querySelectorAll('.obj-btn');
  const beakerObjs = document.getElementById('beakerObjects');
  const densityRes = document.getElementById('densityResult');

  objBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const dest = btn.getAttribute('data-dest');
      beakerObjs.innerHTML = `<div class="dropped-item ${dest}">${btn.textContent}</div>`;

      if (dest === 'bottom') {
        densityRes.innerHTML = `⚓ ${btn.textContent} sank to bottom! Density is higher than water.`;
      } else if (dest === 'middle') {
        densityRes.innerHTML = `🧊 ${btn.textContent} floats between water & oil! Density is between water and oil.`;
      } else {
        densityRes.innerHTML = `🍂 ${btn.textContent} floats on top of oil! Density is lowest.`;
      }
    });
  });
}

/* ==========================================================================
   5. SOCIAL SCIENCE TIME MACHINE
   ========================================================================== */
function initSSTExplorer() {
  const artifacts = [
    { icon: "🧱", title: "Baked Bricks (Harappa)", desc: "Harappans baked bricks in 1:2:4 exact proportion so their city walls lasted 4,500 years!" },
    { icon: "🏺", title: "Dancing Girl Bronze Statue", desc: "Crafted using the lost-wax casting technique over 4,000 years ago in Mohenjo-daro!" },
    { icon: "📐", title: "Great Bath Granary & Seals", desc: "Intricate steatite seals with unicorn and elephant motifs used for international trade." }
  ];
  let artIdx = 0;

  const artIcon = document.getElementById('artIcon');
  const artTitle = document.getElementById('artTitle');
  const artDesc = document.getElementById('artDesc');

  function updateArtifact() {
    artIcon.textContent = artifacts[artIdx].icon;
    artTitle.textContent = artifacts[artIdx].title;
    artDesc.textContent = artifacts[artIdx].desc;
  }

  document.getElementById('nextArtBtn').addEventListener('click', () => {
    artIdx = (artIdx + 1) % artifacts.length;
    updateArtifact();
  });
  document.getElementById('prevArtBtn').addEventListener('click', () => {
    artIdx = (artIdx - 1 + artifacts.length) % artifacts.length;
    updateArtifact();
  });

  // Globe Rotation
  const globeBall = document.getElementById('globeBall');
  const sunStatus = document.getElementById('sunlightStatus');
  let isRotated = false;

  document.getElementById('rotateGlobeBtn').addEventListener('click', () => {
    isRotated = !isRotated;
    globeBall.style.transform = isRotated ? 'rotateY(180deg)' : 'rotateY(0deg)';
    sunStatus.textContent = isRotated 
      ? "USA is facing the Sun! ☀️ (Day in New York, Night in India 🌙)"
      : "India is facing the Sun! ☀️ (Daytime in Delhi)";
  });

  // Panchayat Voting
  const optBtns = document.querySelectorAll('.option-btn');
  const panFeed = document.getElementById('panchayatFeedback');

  optBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isCorrect = btn.getAttribute('data-correct') === 'true';
      if (isCorrect) {
        panFeed.style.color = '#22c55e';
        panFeed.innerHTML = "✅ Excellent Decision! The Panchayat approves using public funds to deepen the handpump immediately!";
      } else {
        panFeed.style.color = '#f43f5e';
        panFeed.innerHTML = "❌ Ineffective! Gram Panchayat's duty is to take immediate active measures for village welfare.";
      }
    });
  });
}

/* ==========================================================================
   6. TROPHY CABINET
   ========================================================================== */
function initTrophyCabinet() {
  const trophies = [
    { icon: "📐", title: "Polygon Master", desc: "Explored diagonal formulas in Math", unlocked: true },
    { icon: "⚡", title: "Circuit Wizard", desc: "Tested conductors vs insulators", unlocked: true },
    { icon: "🥔", title: "Starch Detective", desc: "Completed iodine food science test", unlocked: true },
    { icon: "🏺", title: "Indus Valley Explorer", desc: "Discovered Harappan architectural seals", unlocked: true },
    { icon: "🌏", title: "Globe Navigator", desc: "Mastered Earth day-night rotation", unlocked: false },
    { icon: "🗳️", title: "Panchayat Leader", desc: "Solved village community crisis in Civics", unlocked: false }
  ];

  const container = document.getElementById('trophyGrid');
  container.innerHTML = '';

  trophies.forEach(t => {
    const card = document.createElement('div');
    card.className = `trophy-card ${t.unlocked ? 'unlocked' : 'locked'}`;
    card.innerHTML = `
      <div class="trophy-icon">${t.icon}</div>
      <div class="trophy-title">${t.title}</div>
      <div class="trophy-desc">${t.desc}</div>
    `;
    container.appendChild(card);
  });
}
