// High-Fidelity Bengali Cultural SVG Artwork Data URIs
// Self-contained, responsive, zero-network-dependency, crisp at any display density.

function svgToDataUri(svgString: string): string {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`;
}

// 1. Recent Programs Artworks
export const programImages = {
  // Theatre / Mukto Koro Bhoy - Red dramatic curtains, actor with flowing crimson cape, spotlight glow
  theaterDrama: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
      <defs>
        <radialGradient id="stageSpotlight" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.85" />
          <stop offset="45%" stopColor="#9E1B22" stopOpacity="0.75" />
          <stop offset="85%" stopColor="#1E0E0B" />
          <stop offset="100%" stopColor="#0F0605" />
        </radialGradient>
        <linearGradient id="curtainLeft" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5B0E12" />
          <stop offset="30%" stopColor="#9E1B22" />
          <stop offset="70%" stopColor="#4A0A0E" />
          <stop offset="100%" stopColor="#7F141A" />
        </linearGradient>
        <linearGradient id="capeGrad" x1="0%" y1="0%" x2="100%" y2="80%">
          <stop offset="0%" stopColor="#DC2626" />
          <stop offset="50%" stopColor="#9E1B22" />
          <stop offset="100%" stopColor="#450A0A" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="#0E0505" />
      <rect width="800" height="500" fill="url(#stageSpotlight)" />
      
      <!-- Stage Wooden Planks Floor -->
      <path d="M0 430 L800 430 L800 500 L0 500 Z" fill="#24140E" />
      <line x1="0" y1="430" x2="800" y2="430" stroke="#F59E0B" strokeWidth="2" strokeOpacity="0.6" />
      <line x1="120" y1="430" x2="60" y2="500" stroke="#120A07" strokeWidth="2" />
      <line x1="280" y1="430" x2="250" y2="500" stroke="#120A07" strokeWidth="2" />
      <line x1="450" y1="430" x2="440" y2="500" stroke="#120A07" strokeWidth="2" />
      <line x1="620" y1="430" x2="630" y2="500" stroke="#120A07" strokeWidth="2" />
      
      <!-- Dramatic Velvet Curtains Left and Right -->
      <path d="M0 0 Q80 150 40 320 Q20 400 0 450 Z" fill="url(#curtainLeft)" opacity="0.95" />
      <path d="M800 0 Q720 150 760 320 Q780 400 800 450 Z" fill="url(#curtainLeft)" opacity="0.95" />

      <!-- Center Performer Silhouette with Flowing Red Cape -->
      <!-- Flowing Cape -->
      <path d="M400 230 Q280 270 230 360 Q340 380 400 370 Q460 380 570 360 Q520 270 400 230 Z" fill="url(#capeGrad)" />
      <path d="M400 240 Q310 300 250 355 Q350 375 400 360 Q450 375 550 355 Q490 300 400 240 Z" fill="#7F141A" opacity="0.6" />

      <!-- Actor Body & Raised Resolute Arms -->
      <g fill="#140807">
        <circle cx="400" cy="180" r="22" />
        <path d="M394 200 L406 200 L412 280 L388 280 Z" />
        <!-- Head tilt & expression -->
        <path d="M390 175 Q400 165 410 175 Z" fill="#FAF6F0" opacity="0.1" />
        <!-- Raised Left Arm -->
        <path d="M394 210 L340 170 L348 162 L400 205 Z" />
        <circle cx="338" cy="164" r="8" />
        <!-- Raised Right Arm -->
        <path d="M406 210 L460 170 L452 162 L400 205 Z" />
        <circle cx="462" cy="164" r="8" />
        <!-- Legs & Stance -->
        <path d="M390 278 L375 430 L390 430 L400 290 Z" />
        <path d="M410 278 L425 430 L410 430 L400 290 Z" />
      </g>

      <!-- Dramatic Fog / Glow Particles -->
      <circle cx="320" cy="380" r="4" fill="#FDE68A" opacity="0.6" />
      <circle cx="480" cy="360" r="3" fill="#FDE68A" opacity="0.6" />
      <circle cx="370" cy="290" r="2" fill="#FDE68A" opacity="0.7" />
      <circle cx="430" cy="260" r="2.5" fill="#FDE68A" opacity="0.7" />
    </svg>
  `),

  // Pohela Boishakh Festive Art - Shokher Hari (painted terracotta pot), "শুভ নববর্ষ", floral & sun motifs
  boishakhFestive: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
      <defs>
        <linearGradient id="bgBoishakh" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="50%" stopColor="#FEF3C7" />
          <stop offset="100%" stopColor="#FDE68A" />
        </linearGradient>
        <radialGradient id="sunPattern" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="70%" stopColor="#DC2626" />
          <stop offset="100%" stopColor="#991B1B" />
        </radialGradient>
      </defs>
      <rect width="800" height="500" fill="url(#bgBoishakh)" />

      <!-- Decorative Foliage & Folk Leaves Borders -->
      <g fill="#15803D" opacity="0.85">
        <path d="M50 40 Q90 10 130 50 Q100 80 50 40 Z" />
        <path d="M120 70 Q160 40 200 80 Q170 110 120 70 Z" />
        <path d="M750 40 Q710 10 670 50 Q700 80 750 40 Z" />
        <path d="M680 70 Q640 40 600 80 Q630 110 680 70 Z" />
        <path d="M40 440 Q80 400 120 450 Q90 480 40 440 Z" />
        <path d="M760 440 Q720 400 680 450 Q710 480 760 440 Z" />
      </g>

      <!-- Center Terracotta Pot ("শখের হাঁড়ি") -->
      <g transform="translate(400, 270)">
        <!-- Giant Festive Sun Behind Pot -->
        <circle cx="0" cy="-30" r="140" fill="url(#sunPattern)" />
        <circle cx="0" cy="-30" r="125" stroke="#FEF08A" strokeWidth="3" strokeDasharray="8 6" fill="none" />
        
        <!-- Radiant Sun Rays -->
        <g stroke="#F59E0B" strokeWidth="3" opacity="0.7">
          <line x1="0" y1="-180" x2="0" y2="-195" />
          <line x1="110" y1="-140" x2="125" y2="-150" />
          <line x1="-110" y1="-140" x2="-125" y2="-150" />
          <line x1="150" y1="-30" x2="170" y2="-30" />
          <line x1="-150" y1="-30" x2="-170" y2="-30" />
        </g>

        <!-- Traditional Clay Pot (Hari) -->
        <ellipse cx="0" cy="40" rx="100" ry="85" fill="#D97706" />
        <ellipse cx="0" cy="40" rx="90" ry="76" fill="#EA580C" />
        
        <!-- Pot Neck & Rim -->
        <rect x="-55" y="-35" width="110" height="25" rx="6" fill="#C2410C" />
        <ellipse cx="0" cy="-35" rx="55" ry="12" fill="#B45309" />
        <ellipse cx="0" cy="-35" rx="48" ry="8" fill="#FFFBEB" />

        <!-- Folk Alpona Paintings on Pot Belly -->
        <circle cx="0" cy="40" r="45" fill="#FEF3C7" />
        <circle cx="0" cy="40" r="40" fill="#991B1B" />
        
        <!-- "শুভ নববর্ষ" Calligraphy Banner -->
        <rect x="-80" y="24" width="160" height="32" rx="16" fill="#FEF2F2" />
        <text x="0" y="46" font-family="'Hind Siliguri', 'Noto Serif Bengali', serif" font-size="20" font-weight="bold" fill="#991B1B" text-anchor="middle">
          শুভ নববর্ষ
        </text>

        <!-- Traditional Folk Fish (ইলিশ ও মাছ মোটিফ) -->
        <path d="M-60 90 Q-40 75 -20 90 Q-40 100 -60 90 Z" fill="#FEF08A" />
        <path d="M60 90 Q40 75 20 90 Q40 100 60 90 Z" fill="#FEF08A" />
      </g>
    </svg>
  `),

  // Abriti & Natya Kormoshala - Singer on Stage with Vintage Mic & Bokeh Warmth
  workshopVocal: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
      <defs>
        <radialGradient id="micWarmth" cx="65%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
          <stop offset="40%" stopColor="#B45309" stopOpacity="0.7" />
          <stop offset="80%" stopColor="#3F120B" />
          <stop offset="100%" stopColor="#1C0A06" />
        </radialGradient>
      </defs>
      <rect width="800" height="500" fill="#1C0A06" />
      <rect width="800" height="500" fill="url(#micWarmth)" />

      <!-- Bokeh Warm Orbs -->
      <circle cx="150" cy="120" r="45" fill="#F59E0B" opacity="0.25" />
      <circle cx="280" cy="200" r="60" fill="#EA580C" opacity="0.2" />
      <circle cx="200" cy="380" r="70" fill="#EF4444" opacity="0.15" />
      <circle cx="700" cy="180" r="50" fill="#FBBF24" opacity="0.2" />
      <circle cx="620" cy="340" r="65" fill="#D97706" opacity="0.25" />

      <!-- Singer Silhouette (Left-Center facing right) -->
      <g fill="#140807">
        <!-- Upraised expressive chin & hair -->
        <circle cx="430" cy="185" r="28" />
        <path d="M410 185 Q390 190 380 240 Q420 230 435 210 Z" />
        <!-- Torso & hands reaching toward mic -->
        <path d="M420 215 L400 380 L480 380 L460 215 Z" />
        <path d="M440 230 L495 245 L505 235 L450 220 Z" />
      </g>

      <!-- Vintage Professional Studio Microphone on Stand -->
      <g transform="translate(540, 200)">
        <!-- Chrome / Silver Ribbed Mic Head -->
        <rect x="-18" y="-40" width="36" height="58" rx="18" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
        <!-- Grille Texture -->
        <line x1="-14" y1="-26" x2="14" y2="-26" stroke="#4B5563" strokeWidth="2" />
        <line x1="-16" y1="-14" x2="16" y2="-14" stroke="#4B5563" strokeWidth="2" />
        <line x1="-16" y1="-2" x2="16" y2="-2" stroke="#4B5563" strokeWidth="2" />
        <line x1="-14" y1="10" x2="14" y2="10" stroke="#4B5563" strokeWidth="2" />
        
        <!-- Mic Ring & Mount -->
        <rect x="-8" y="18" width="16" height="20" fill="#6B7280" />
        <circle cx="0" cy="38" r="8" fill="#374151" />
        
        <!-- Stand Stem -->
        <rect x="-4" y="46" width="8" height="260" fill="#9CA3AF" />
        <rect x="-2" y="46" width="4" height="260" fill="#F3F4F6" />
      </g>

      <!-- Musical Sound Waves radiating from mic -->
      <path d="M580 180 Q610 200 580 220" stroke="#FDE68A" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.8" />
      <path d="M600 165 Q640 200 600 235" stroke="#FDE68A" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M620 150 Q670 200 620 250" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.4" />
    </svg>
  `),

  // Folk Mela & Masks - Traditional Bengali Clay Masks (Tiger & Owl), handicrafts, ektara
  folkMelaMasks: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
      <defs>
        <linearGradient id="bgMela" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF7ED" />
          <stop offset="60%" stopColor="#FED7AA" />
          <stop offset="100%" stopColor="#FDBA74" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#bgMela)" />

      <!-- Hanging Festoons / Jhalor String at Top -->
      <line x1="0" y1="50" x2="800" y2="50" stroke="#78350F" strokeWidth="2" />
      <polygon points="100,50 130,110 70,110" fill="#DC2626" />
      <polygon points="220,50 250,110 190,110" fill="#059669" />
      <polygon points="340,50 370,110 310,110" fill="#D97706" />
      <polygon points="460,50 490,110 430,110" fill="#7C3AED" />
      <polygon points="580,50 610,110 550,110" fill="#DC2626" />
      <polygon points="700,50 730,110 670,110" fill="#059669" />

      <!-- Mask 1: Traditional Bengali Tiger / Bagh Mukhosh (Left Center) -->
      <g transform="translate(250, 260)">
        <ellipse cx="0" cy="0" rx="95" ry="110" fill="#F59E0B" stroke="#B45309" strokeWidth="4" />
        <!-- Tiger Ears -->
        <circle cx="-75" cy="-85" r="30" fill="#DC2626" stroke="#991B1B" strokeWidth="3" />
        <circle cx="75" cy="-85" r="30" fill="#DC2626" stroke="#991B1B" strokeWidth="3" />
        <circle cx="-75" cy="-85" r="16" fill="#FEF08A" />
        <circle cx="75" cy="-85" r="16" fill="#FEF08A" />
        <!-- Folk Tiger Stripes -->
        <path d="M-80 -20 Q-30 -15 0 -40 Q30 -15 80 -20" stroke="#1F2937" strokeWidth="8" strokeLinecap="round" fill="none" />
        <path d="M-75 30 Q-30 25 0 10 Q30 25 75 30" stroke="#1F2937" strokeWidth="7" strokeLinecap="round" fill="none" />
        <path d="M-70 70 Q-30 65 0 55 Q30 65 70 70" stroke="#1F2937" strokeWidth="6" strokeLinecap="round" fill="none" />
        <!-- Big Round Eyes -->
        <ellipse cx="-40" cy="-20" rx="26" ry="32" fill="#FFFFFF" stroke="#1F2937" strokeWidth="3" />
        <ellipse cx="40" cy="-20" rx="26" ry="32" fill="#FFFFFF" stroke="#1F2937" strokeWidth="3" />
        <circle cx="-38" cy="-18" r="14" fill="#DC2626" />
        <circle cx="38" cy="-18" r="14" fill="#DC2626" />
        <circle cx="-38" cy="-18" r="8" fill="#1F2937" />
        <circle cx="38" cy="-18" r="8" fill="#1F2937" />
        <!-- Big Smiling Folk Whiskered Mouth -->
        <ellipse cx="0" cy="55" rx="55" ry="30" fill="#DC2626" />
        <path d="M-35 55 Q0 75 35 55" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" fill="none" />
      </g>

      <!-- Mask 2: Traditional Owl / Pecha Mukhosh (Right Center) -->
      <g transform="translate(540, 250)">
        <ellipse cx="0" cy="0" rx="90" ry="105" fill="#EF4444" stroke="#991B1B" strokeWidth="4" />
        <!-- Owl Eyebrow Crest -->
        <path d="M-75 -65 Q0 -25 75 -65 L60 -95 Q0 -55 -60 -95 Z" fill="#FDE047" stroke="#CA8A04" strokeWidth="2" />
        <!-- Giant Owl Concentric Eyes -->
        <circle cx="-38" cy="-10" r="36" fill="#FDE047" stroke="#1F2937" strokeWidth="3" />
        <circle cx="38" cy="-10" r="36" fill="#FDE047" stroke="#1F2937" strokeWidth="3" />
        <circle cx="-38" cy="-10" r="24" fill="#1F2937" />
        <circle cx="38" cy="-10" r="24" fill="#1F2937" />
        <circle cx="-38" cy="-10" r="10" fill="#FFFFFF" />
        <circle cx="38" cy="-10" r="10" fill="#FFFFFF" />
        <!-- Sharp Beak -->
        <polygon points="0,15 -18,55 18,55" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
        <!-- Feather Patterns -->
        <path d="M-60 65 Q-30 85 0 65 Q30 85 60 65" stroke="#FFFFFF" strokeWidth="4" fill="none" />
        <path d="M-45 85 Q0 100 45 85" stroke="#FFFFFF" strokeWidth="4" fill="none" />
      </g>
    </svg>
  `)
};

// 2. Event Calendar Artworks
export const eventImages = {
  // Feb: Bhasha & Muktochinta Utsab (Ekushey & Books)
  februaryLanguage: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="100%" height="100%">
      <defs>
        <radialGradient id="febGrad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#B91C1C" />
          <stop offset="70%" stopColor="#7F1D1D" />
          <stop offset="100%" stopColor="#450A0A" />
        </radialGradient>
      </defs>
      <rect width="600" height="360" fill="url(#febGrad)" />
      
      <!-- Shaheed Minar Column Silhouettes in distance -->
      <g fill="#FEF2F2" opacity="0.35">
        <rect x="280" y="60" width="40" height="180" rx="4" />
        <rect x="220" y="100" width="28" height="140" rx="3" />
        <rect x="352" y="100" width="28" height="140" rx="3" />
        <!-- Red Sun behind Minar -->
        <circle cx="300" cy="130" r="55" fill="#EF4444" opacity="0.6" />
      </g>

      <!-- Traditional Red Floral Tribute & Books at Foreground -->
      <g transform="translate(300, 270)">
        <!-- Stack of Books -->
        <polygon points="-120,40 120,40 140,20 -100,20" fill="#FAF6F0" />
        <polygon points="-120,40 -100,20 -100,0 -120,20" fill="#D4C5B3" />
        <polygon points="-100,20 140,20 120,0 -120,0" fill="#9E1B22" />
        <!-- Red Palash Flowers -->
        <circle cx="-50" cy="-20" r="14" fill="#EF4444" />
        <circle cx="-35" cy="-28" r="12" fill="#F87171" />
        <circle cx="60" cy="-18" r="15" fill="#EF4444" />
        <circle cx="45" cy="-25" r="11" fill="#F87171" />
      </g>
    </svg>
  `),

  // March: Youth Leadership Camp (Sunset Campfire & Energetic Youth Unity)
  marchYouthCamp: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="100%" height="100%">
      <defs>
        <linearGradient id="marSunset" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7C2D12" />
          <stop offset="50%" stopColor="#C2410C" />
          <stop offset="85%" stopColor="#EA580C" />
          <stop offset="100%" stopColor="#FDBA74" />
        </linearGradient>
      </defs>
      <rect width="600" height="360" fill="url(#marSunset)" />

      <!-- Glowing Campfire in Center -->
      <ellipse cx="300" cy="270" rx="60" ry="20" fill="#FDE047" opacity="0.5" />
      <polygon points="280,270 300,200 320,270" fill="#FDE047" />
      <polygon points="290,270 300,215 310,270" fill="#FFFFFF" />

      <!-- Youth Silhouette Group Standing in Solidarity with Raised Hands -->
      <g fill="#180A04">
        <!-- Youth 1 Left -->
        <circle cx="160" cy="210" r="14" />
        <path d="M150 226 L170 226 L175 320 L145 320 Z" />
        <path d="M165 230 L195 180 L185 175 L155 225 Z" />
        <!-- Youth 2 Raised Fist -->
        <circle cx="230" cy="190" r="15" />
        <path d="M220 207 L240 207 L245 320 L215 320 Z" />
        <path d="M235 210 L250 150 L240 148 L225 208 Z" />
        <!-- Youth 3 -->
        <circle cx="370" cy="190" r="15" />
        <path d="M360 207 L380 207 L385 320 L355 320 Z" />
        <path d="M365 210 L350 150 L360 148 L375 208 Z" />
        <!-- Youth 4 Right with Flag -->
        <circle cx="440" cy="210" r="14" />
        <path d="M430 226 L450 226 L455 320 L425 320 Z" />
        <path d="M435 230 L405 180 L415 175 L445 225 Z" />
      </g>
      <!-- Horizontal Horizon Ground -->
      <rect x="0" y="310" width="600" height="50" fill="#180A04" />
    </svg>
  `),

  // June: Ganosangeet Campus Tour (Acoustic Guitar, Green Campus Vibes)
  juneCampusTour: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="100%" height="100%">
      <defs>
        <linearGradient id="junGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#064E3B" />
          <stop offset="60%" stopColor="#047857" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
      </defs>
      <rect width="600" height="360" fill="url(#junGreen)" />

      <!-- Soft Sun Rays through campus trees -->
      <circle cx="480" cy="80" r="90" fill="#FDE68A" opacity="0.3" />

      <!-- Acoustic Folk Guitar slanting diagonally across scene -->
      <g transform="translate(260, 180) rotate(-30)">
        <!-- Guitar Body -->
        <path d="M-50 40 C-90 60, -90 120, -40 140 C-10 150, 20 150, 50 140 C100 120, 100 60, 60 40 C35 26, 35 10, 45 -5 C65 -25, 60 -60, 30 -75 C0 -85, -20 -85, -45 -70 C-70 -55, -70 -20, -50 -5 C-35 10, -35 25, -50 40 Z" fill="#D97706" stroke="#92400E" strokeWidth="4" />
        <circle cx="5" cy="35" r="24" fill="#1C1917" stroke="#78350F" strokeWidth="3" />
        <!-- Neck & Fretboard -->
        <rect x="-8" y="-200" width="22" height="135" fill="#451A03" />
        <!-- Headstock -->
        <rect x="-12" y="-240" width="30" height="42" rx="4" fill="#78350F" />
        <!-- Strings -->
        <line x1="-3" y1="-235" x2="-3" y2="100" stroke="#FDE68A" strokeWidth="1.5" />
        <line x1="3" y1="-235" x2="3" y2="100" stroke="#FDE68A" strokeWidth="1.5" />
        <line x1="9" y1="-235" x2="9" y2="100" stroke="#FDE68A" strokeWidth="1.5" />
      </g>
    </svg>
  `),

  // September: Little Magazine Mela (Literary Journals, Manuscript & Books)
  septemberLittleMag: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="100%" height="100%">
      <defs>
        <linearGradient id="sepBrown" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A044E" />
          <stop offset="60%" stopColor="#701A75" />
          <stop offset="100%" stopColor="#A21CAF" />
        </linearGradient>
      </defs>
      <rect width="600" height="360" fill="url(#sepBrown)" />

      <!-- Warm Desk Lamp Glow -->
      <circle cx="300" cy="160" r="140" fill="#FEF08A" opacity="0.2" />

      <!-- Stack of Little Magazines & Open Literary Journal -->
      <g transform="translate(300, 210)">
        <!-- Book 1 (Underneath) -->
        <polygon points="-160,80 160,80 180,50 -140,50" fill="#F5EBE1" />
        <polygon points="-160,80 -140,50 -140,25 -160,55" fill="#831843" />
        <polygon points="-140,50 180,50 160,25 -160,25" fill="#BE185D" />

        <!-- Book 2 (Tilted on top) -->
        <polygon points="-110,25 130,25 150,0 -90,0" fill="#FAF6F0" />
        <polygon points="-110,25 -90,0 -90,-20 -110,5" fill="#4C0519" />
        <polygon points="-90,0 150,0 130,-20 -110,-20" fill="#9E1B22" />

        <!-- Fountain Pen -->
        <g transform="translate(60, -10) rotate(45)">
          <rect x="-4" y="-70" width="8" height="60" rx="3" fill="#1E293B" />
          <polygon points="0,0 -4,-12 4,-12" fill="#F59E0B" />
        </g>
      </g>
    </svg>
  `)
};

// 3. Media Gallery Artworks (Rich 4:3 cultural illustrations)
export const galleryImages = {
  theatreStage: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
      <defs>
        <radialGradient id="galSpot1" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#EA580C" stopOpacity="0.85" />
          <stop offset="60%" stopColor="#831843" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#1E0E14" />
        </radialGradient>
      </defs>
      <rect width="600" height="450" fill="#1E0E14" />
      <rect width="600" height="450" fill="url(#galSpot1)" />
      <!-- Actors performing on dramatic stage -->
      <g fill="#0F050A">
        <circle cx="240" cy="220" r="18" />
        <path d="M230 240 L250 240 L260 370 L220 370 Z" />
        <path d="M245 250 L290 220 L296 230 L255 260 Z" />
        <circle cx="360" cy="210" r="18" />
        <path d="M350 230 L370 230 L380 370 L340 370 Z" />
        <path d="M355 240 L310 210 L304 220 L345 250 Z" />
      </g>
      <rect x="0" y="370" width="600" height="80" fill="#0A0307" />
      <line x1="0" y1="370" x2="600" y2="370" stroke="#F59E0B" strokeWidth="2" strokeOpacity="0.5" />
    </svg>
  `),

  alponaArt: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
      <defs>
        <linearGradient id="terracottaFloor" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9A3412" />
          <stop offset="50%" stopColor="#C2410C" />
          <stop offset="100%" stopColor="#7C2D12" />
        </linearGradient>
      </defs>
      <rect width="600" height="450" fill="url(#terracottaFloor)" />
      <!-- Intricate White Rice-Paste Alpona Mandala Motif -->
      <g stroke="#FFFDF9" strokeWidth="3" fill="none" opacity="0.95" transform="translate(300, 225)">
        <circle cx="0" cy="0" r="30" strokeWidth="4" />
        <circle cx="0" cy="0" r="60" strokeWidth="3" strokeDasharray="6 4" />
        <circle cx="0" cy="0" r="100" strokeWidth="3" />
        <circle cx="0" cy="0" r="140" strokeWidth="4" strokeDasharray="12 6" />
        <circle cx="0" cy="0" r="175" strokeWidth="2" />
        
        <!-- 8 Radiant Floral Petals -->
        <path d="M0 -30 Q25 -65 0 -100 Q-25 -65 0 -30" fill="#FFFDF9" fillOpacity="0.25" />
        <path d="M0 30 Q25 65 0 100 Q-25 65 0 30" fill="#FFFDF9" fillOpacity="0.25" />
        <path d="M-30 0 Q-65 25 -100 0 Q-65 -25 -30 0" fill="#FFFDF9" fillOpacity="0.25" />
        <path d="M30 0 Q65 25 100 0 Q65 -25 30 0" fill="#FFFDF9" fillOpacity="0.25" />
        <path d="M-21 -21 Q-60 -60 -71 -71 Q-30 -70 -21 -21" fill="#FFFDF9" fillOpacity="0.2" />
        <path d="M21 21 Q60 60 71 71 Q30 70 21 21" fill="#FFFDF9" fillOpacity="0.2" />
        <path d="M-21 21 Q-60 60 -71 71 Q-70 30 -21 21" fill="#FFFDF9" fillOpacity="0.2" />
        <path d="M21 -21 Q60 -60 71 -71 Q70 -30 21 -21" fill="#FFFDF9" fillOpacity="0.2" />
      </g>
    </svg>
  `),

  baulConcert: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
      <defs>
        <radialGradient id="baulSun" cx="50%" cy="30%" r="55%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="60%" stopColor="#B45309" />
          <stop offset="100%" stopColor="#291105" />
        </radialGradient>
      </defs>
      <rect width="600" height="450" fill="#291105" />
      <rect width="600" height="450" fill="url(#baulSun)" />
      <!-- Baul Singer with Ektara & Swirling Robes -->
      <g fill="#170A03">
        <!-- Head with Turban -->
        <circle cx="300" cy="150" r="26" />
        <ellipse cx="300" cy="140" rx="34" ry="16" fill="#D97706" />
        <!-- Robe flowing in ecstasy -->
        <path d="M280 180 L320 180 L390 380 L210 380 Z" />
        <!-- Raised Arm holding Ektara -->
        <path d="M315 190 L380 130 L390 140 L325 200 Z" />
        <!-- Ektara -->
        <rect x="380" y="80" width="6" height="120" fill="#B45309" />
        <ellipse cx="383" cy="190" rx="16" ry="20" fill="#D97706" />
      </g>
      <!-- Engaged Crowd Foreground -->
      <path d="M0 400 Q150 340 300 400 Q450 340 600 400 L600 450 L0 450 Z" fill="#0D0502" />
    </svg>
  `),

  canvasPainting: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
      <defs>
        <linearGradient id="artBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ECFDF5" />
          <stop offset="60%" stopColor="#A7F3D0" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      <rect width="600" height="450" fill="url(#artBg)" />
      <!-- Artist Wooden Easel & Vibrant Canvas -->
      <g transform="translate(300, 230)">
        <!-- Easel Legs -->
        <line x1="0" y1="-140" x2="-90" y2="180" stroke="#78350F" strokeWidth="8" strokeLinecap="round" />
        <line x1="0" y1="-140" x2="90" y2="180" stroke="#78350F" strokeWidth="8" strokeLinecap="round" />
        <line x1="0" y1="-140" x2="0" y2="175" stroke="#92400E" strokeWidth="6" />
        <!-- Easel Horizontal Shelf -->
        <rect x="-110" y="50" width="220" height="14" rx="4" fill="#581C87" />
        
        <!-- Canvas Board with Painted Landscape -->
        <rect x="-95" y="-105" width="190" height="145" rx="4" fill="#FAF6F0" stroke="#D1D5DB" strokeWidth="3" />
        <!-- Artwork on Canvas: River Bengal & Boat -->
        <path d="M-92 0 Q-20 -30 20 0 Q60 -30 92 0 L92 38 L-92 38 Z" fill="#0284C7" />
        <circle cx="20" cy="-45" r="22" fill="#DC2626" />
        <polygon points="-30,5 -5,5 -15,-15" fill="#78350F" />
      </g>
    </svg>
  `)
};

// 4. Publications Book Cover Thumbnails
export const publicationImages = {
  researchJournal: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240" width="100%" height="100%">
      <rect width="200" height="240" fill="#064E3B" rx="8" />
      <rect x="12" y="12" width="176" height="216" rx="4" fill="none" stroke="#FDE68A" strokeWidth="2" strokeDasharray="4 2" />
      <rect x="24" y="30" width="152" height="60" rx="3" fill="#047857" />
      <line x1="36" y1="48" x2="164" y2="48" stroke="#FDE68A" strokeWidth="3" />
      <line x1="48" y1="62" x2="152" y2="62" stroke="#FDE68A" strokeWidth="2" />
      <circle cx="100" cy="140" r="32" fill="#FDE68A" opacity="0.3" />
      <circle cx="100" cy="140" r="22" fill="#064E3B" stroke="#FDE68A" strokeWidth="2" />
      <rect x="40" y="195" width="120" height="8" rx="4" fill="#A7F3D0" opacity="0.7" />
    </svg>
  `),

  heritageCollection: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240" width="100%" height="100%">
      <rect width="200" height="240" fill="#9A3412" rx="8" />
      <rect x="12" y="12" width="176" height="216" rx="4" fill="none" stroke="#FED7AA" strokeWidth="2" />
      <circle cx="100" cy="90" r="40" fill="#EA580C" stroke="#FEF3C7" strokeWidth="2" />
      <!-- Ektara motif in circle -->
      <line x1="100" y1="65" x2="100" y2="115" stroke="#FFFFFF" strokeWidth="3" />
      <ellipse cx="100" cy="110" rx="14" ry="10" fill="#FFFFFF" />
      <rect x="30" y="150" width="140" height="12" rx="4" fill="#FED7AA" />
      <rect x="45" y="172" width="110" height="8" rx="4" fill="#FED7AA" opacity="0.7" />
    </svg>
  `),

  youthEssay: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240" width="100%" height="100%">
      <rect width="200" height="240" fill="#831843" rx="8" />
      <rect x="12" y="12" width="176" height="216" rx="4" fill="none" stroke="#FBCFE8" strokeWidth="2" />
      <circle cx="100" cy="85" r="38" fill="#BE185D" />
      <polygon points="100,55 110,80 135,80 115,95 122,120 100,105 78,120 85,95 65,80 90,80" fill="#FDE047" />
      <rect x="30" y="145" width="140" height="12" rx="4" fill="#FBCFE8" />
      <rect x="50" y="168" width="100" height="8" rx="4" fill="#FBCFE8" opacity="0.7" />
    </svg>
  `)
};

