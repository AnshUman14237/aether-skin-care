/*
==============================================================================
AETHER SALES DEMO - RESELLABLE ARCHITECTURE NOTES
==============================================================================
[DEMO FLOURISH / INTERACTIVE SIMULATIONS]
- initHeroShader()         - WebGL fluid simulation for background visual wow.
- initThreeJSShowcase()    - Perspective 3D cylinder bottle separation on scroll.
- initWebGLSlider()        - WebGL fragment shader-based before/after spectral sweep.
- initSoftBodyIngredients()- Orthographic 3D soft-body spring physics simulation.
- initDermalScanner()      - 3D cellular sphere grid scanner animation.
- initScrollDroplet()      - Verlet physics canvas sidebar page scroll tracker.

[PRODUCTION-READY / CORE BUSINESS LOGIC]
- initMenu()               - Snappy responsive navigation overlay and toggles.
- initSubscriptionDrawer() - Price calculations, SVG glow score updates, frequency slider.
- initRitualBuilder()      - Interactive timeline builder, order checking, Bezier curve rendering.
- playSynthTone()          - Web Audio API real-time synthesizer tone engine.
- initCheckoutModal()      - Multi-step client checkout summary, address form, success state.
==============================================================================
*/

/* ==========================================================================
   AETHER BRAND DEMO CONFIGURATION OBJECT
   ========================================================================== */
const BRAND_CONFIG = {
    name: "AETHER",
    tagline: "CELLULAR RENEWAL",
    productCategory: "Cellular Renewal Oil",
    productName: "Aether Serum",
    productVolume: "30ML",
    priceOneTime: "$90.00",
    priceSubscription: "$72.00",
    savingsText: "$18.00 (20% Off)",
    currency: "USD",
    heroDesc: "A high-performance formulation designed to capture light and saturate cells. Experience the quiet luxury of absolute hydration.",
    
    ingredients: [
        {
            name: "Squalane Gold",
            type: "Barrier Support",
            desc: "Pure olive-derived squalane mimicking natural sebum. Fuses with the skin barrier to lock in micro-moisture* instantly."
        },
        {
            name: "Hyaluronic Bloom",
            type: "Deep Hydration",
            desc: "Crystalline spheres with cross-linked structures that expand up to 1000x their weight in water inside the dermis*."
        },
        {
            name: "Resveratrol Dew",
            type: "Botanical Shield",
            desc: "Red grape extract loaded with intense polyphenols. Deflects environmental oxidative stressors for a bright aura*."
        }
    ],
    
    ritual: {
        cleanser: { title: "Purifying Emulsion", desc: "Removes debris & opens channels." },
        toner: { title: "Hydration Primer", desc: "Balancing toner primes receptors." },
        serum: { title: "Aether Active Serum", desc: "Deep cellular plumping core." },
        cream: { title: "Lipid Seal Cream", desc: "Locks bio-actives in place." }
    }
};

/* ==========================================================================
   AETHER PRODUCTS CATALOG DATA
   ========================================================================== */
const PRODUCTS_DATA = {
    cleanser: {
        name: "Purifying Emulsion",
        volume: "150ml",
        category: "Milk-to-Gel Prebiotic Cleanser",
        priceOneTime: 65.00,
        priceSubscription: 52.00,
        image: "assets/purifying_emulsion.png",
        imageWebp: "assets/purifying_emulsion.png",
        desc: "Ensure your prebiotic cellular barrier is never compromised. Our smart clinical replenishment ensures fresh batches are shipped directly from our laboratory.",
        ticks: {
            1: { cycle: "Every 30 Days", savings: "$13.00 (20% Off)", price: "$52.00", score: 92, offset: 0.92, aura: 0.85, priceNum: 52.00 },
            2: { cycle: "Every 45 Days", savings: "$9.75 (15% Off)", price: "$55.25", score: 72, offset: 0.72, aura: 0.55, priceNum: 55.25 },
            3: { cycle: "Every 60 Days", savings: "$6.50 (10% Off)", price: "$58.50", score: 48, offset: 0.48, aura: 0.30, priceNum: 58.50 }
        }
    },
    toner: {
        name: "Hydration Primer",
        volume: "100ml",
        category: "Osmotic Balancing Treatment",
        priceOneTime: 58.00,
        priceSubscription: 46.40,
        image: "assets/hydration_primer.png",
        imageWebp: "assets/hydration_primer.png",
        desc: "Prepare skin channels to optimize deep active serum absorption. Smart replenishment guarantees fresh-batch delivery directly to your door.",
        ticks: {
            1: { cycle: "Every 30 Days", savings: "$11.60 (20% Off)", price: "$46.40", score: 94, offset: 0.94, aura: 0.90, priceNum: 46.40 },
            2: { cycle: "Every 45 Days", savings: "$8.70 (15% Off)", price: "$49.30", score: 74, offset: 0.74, aura: 0.60, priceNum: 49.30 },
            3: { cycle: "Every 60 Days", savings: "$5.80 (10% Off)", price: "$52.20", score: 50, offset: 0.50, aura: 0.35, priceNum: 52.20 }
        }
    },
    serum: {
        name: "Aether Active Serum",
        volume: "30ml",
        category: "Cellular Renewal Oil",
        priceOneTime: 90.00,
        priceSubscription: 72.00,
        image: "assets/drawer_product.png",
        imageWebp: "assets/drawer_product.webp",
        desc: "Ensure your cellular cycle is never interrupted. Our smart delivery ensures fresh batches are shipped directly from our lab to your door.",
        ticks: {
            1: { cycle: "Every 30 Days", savings: "$18.00 (20% Off)", price: "$72.00", score: 98, offset: 0.98, aura: 1.00, priceNum: 72.00 },
            2: { cycle: "Every 45 Days", savings: "$13.50 (15% Off)", price: "$76.50", score: 78, offset: 0.78, aura: 0.65, priceNum: 76.50 },
            3: { cycle: "Every 60 Days", savings: "$9.00 (10% Off)", price: "$81.00", score: 55, offset: 0.55, aura: 0.35, priceNum: 81.00 }
        }
    },
    cream: {
        name: "Lipid Seal Cream",
        volume: "50ml",
        category: "Bio-Mimetic Lipid Matrix",
        priceOneTime: 85.00,
        priceSubscription: 68.00,
        image: "assets/lipid_cream.png",
        imageWebp: "assets/lipid_cream.png",
        desc: "Lock in core active molecules with a protective, breathable barrier matrix. Replenishment delivers clean cellular protection without pause.",
        ticks: {
            1: { cycle: "Every 30 Days", savings: "$17.00 (20% Off)", price: "$68.00", score: 95, offset: 0.95, aura: 0.95, priceNum: 68.00 },
            2: { cycle: "Every 45 Days", savings: "$12.75 (15% Off)", price: "$72.25", score: 75, offset: 0.75, aura: 0.62, priceNum: 72.25 },
            3: { cycle: "Every 60 Days", savings: "$8.50 (10% Off)", price: "$76.50", score: 52, offset: 0.52, aura: 0.32, priceNum: 76.50 }
        }
    }
};

let currentDrawerProductId = "serum";

function loadProductIntoDrawer(productId) {
    const prodData = PRODUCTS_DATA[productId];
    if (!prodData) return;

    currentDrawerProductId = productId;

    // Update Text
    const drawerTitle = document.querySelector('.drawer-title');
    const drawerDesc = document.getElementById('drawerDescription');
    const drawerMiniName = document.getElementById('drawerProductMiniName');
    const originalPriceText = document.getElementById('originalPriceText');
    const memberPriceText = document.getElementById('memberPriceText');
    const oneTimeBtn = document.getElementById('oneTimePurchaseBtn');

    if (drawerTitle) drawerTitle.innerText = `${prodData.name}`;
    if (drawerDesc) drawerDesc.innerText = prodData.desc;
    if (drawerMiniName) drawerMiniName.innerText = `${prodData.name} (${prodData.volume})`;
    if (originalPriceText) originalPriceText.innerText = `$${prodData.priceOneTime.toFixed(2)}`;
    if (memberPriceText) memberPriceText.innerText = `$${prodData.priceSubscription.toFixed(2)}`;
    if (oneTimeBtn) oneTimeBtn.innerText = `Or Buy Once for $${prodData.priceOneTime.toFixed(2)}`;

    // Update Images
    const webpSource = document.getElementById('drawerProductWebp');
    const imgTag = document.getElementById('drawerProductImg');

    if (webpSource) {
        webpSource.setAttribute('srcset', prodData.imageWebp);
    }
    if (imgTag) {
        imgTag.setAttribute('src', prodData.image);
        imgTag.setAttribute('alt', `${prodData.name} Thumbnail`);
    }
}

/* Apply BRAND_CONFIG values to DOM elements on load */
function applyBrandConfig() {
    // Brand Name
    document.querySelectorAll('.brand-logo, .footer-logo, .preloader-brand').forEach(el => {
        el.innerText = BRAND_CONFIG.name;
    });
    // Tagline
    const tagline = document.querySelector('.preloader-tagline');
    if (tagline) tagline.innerText = BRAND_CONFIG.tagline;

    // Hero
    const heroSub = document.querySelector('.hero-subtitle');
    if (heroSub) heroSub.innerText = BRAND_CONFIG.productCategory;
    
    const heroDesc = document.querySelector('.hero-description');
    if (heroDesc) heroDesc.innerText = BRAND_CONFIG.heroDesc;

    // Ingredients Section
    const ingredientCards = document.querySelectorAll('.ingredient-card');
    ingredientCards.forEach((card, idx) => {
        const configIng = BRAND_CONFIG.ingredients[idx];
        if (configIng) {
            const nameEl = card.querySelector('.ingredient-name');
            const typeEl = card.querySelector('.ingredient-type');
            const textEl = card.querySelector('.ingredient-text');
            if (nameEl) nameEl.innerText = configIng.name;
            if (typeEl) typeEl.innerText = configIng.type;
            if (textEl) textEl.innerText = configIng.desc;
            
            const anchor = card.querySelector('.droplet-visual-anchor');
            if (anchor) anchor.setAttribute('data-name', configIng.name);
        }
    });

    // Ritual timeline cards
    const ritualCards = document.querySelectorAll('#ritualPool .ritual-card');
    ritualCards.forEach(card => {
        const id = card.getAttribute('data-id');
        const configRitual = BRAND_CONFIG.ritual[id];
        if (configRitual) {
            const titleEl = card.querySelector('.ritual-card-title');
            const descEl = card.querySelector('.ritual-card-desc');
            if (titleEl) titleEl.innerText = configRitual.title;
            if (descEl) descEl.innerText = configRitual.desc;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Apply Brand Configuration
    applyBrandConfig();

    // Register GSAP ScrollTrigger plugin if available
    const hasGSAP = typeof gsap !== 'undefined';
    const hasScrollTrigger = typeof ScrollTrigger !== 'undefined';
    if (hasGSAP && hasScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
    } else {
        console.warn('GSAP or ScrollTrigger not loaded. Animations disabled.');
    }

    // Native smooth scroll enabled via CSS (Lenis disabled to resolve Windows trackpad issues)

    // Initialize modules with lazy loading observers
    initMenu();
    initLazyLoading();
    initSubscriptionDrawer();
    initScrollDroplet();
    initRitualBuilder();
    initFadingObserver();
    initAuraCursor();
    initCheckoutModal();
    initScrollSpy();
});

/* ==========================================================================
   INTERSECTION OBSERVER FOR LAZY-LOADING MODULES
   ========================================================================== */
function initLazyLoading() {
    const lazyLoad = (sectionId, initFunc) => {
        const section = document.getElementById(sectionId);
        if (!section) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    initFunc();
                    observer.disconnect();
                }
            });
        }, { rootMargin: '150px' });

        observer.observe(section);
    };

    lazyLoad('hero', initHeroShader);
    lazyLoad('showcase', initThreeJSShowcase);
    lazyLoad('slider-section', initWebGLSlider);
    lazyLoad('ingredients', initSoftBodyIngredients);
    lazyLoad('scanner-section', initDermalScanner);
}

/* ==========================================================================
   1. MENU NAVIGATION MODULE
   ========================================================================== */
function initMenu() {
    const siteHeader = document.getElementById('siteHeader');
    const menuToggle = document.querySelector('.menu-toggle');
    const menuOverlay = document.getElementById('menuOverlay');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const navLinkItems = document.querySelectorAll('.nav-link-item');

    // Header scroll background transitions
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            siteHeader.classList.add('scrolled');
        } else {
            siteHeader.classList.remove('scrolled');
        }
    });

    // Menu toggle open
    menuToggle.addEventListener('click', () => {
        menuOverlay.classList.add('active');
        gsap.fromTo('.nav-link-item', 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: 'power4.out', delay: 0.2 }
        );
    });

    // Menu close
    const closeMenu = () => {
        gsap.to('.nav-link-item', {
            opacity: 0,
            y: -20,
            stagger: 0.05,
            duration: 0.4,
            ease: 'power3.in',
            onComplete: () => {
                menuOverlay.classList.remove('active');
            }
        });
    };

    closeMenuBtn.addEventListener('click', closeMenu);
    navLinkItems.forEach(item => item.addEventListener('click', closeMenu));
}

/* ==========================================================================
   2. HERO SHADER BACKGROUND (WebGL Fluid Simulation)
   ========================================================================== */
function initHeroShader() {
    const canvas = document.getElementById('heroShaderCanvas');
    if (!canvas) return;

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
        console.warn('WebGL not supported for hero background.');
        return;
    }

    // Set canvas sizing
    function resizeCanvas() {
        const dpr = Math.min(window.devicePixelRatio, 2);
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        gl.viewport(0, 0, canvas.width, canvas.height);
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Shader sources
    const vsSource = `
        attribute vec2 a_position;
        varying vec2 v_uv;
        void main() {
            v_uv = a_position * 0.5 + 0.5;
            gl_Position = vec4(a_position, 0.0, 1.0);
        }
    `;

    const fsSource = `
        precision highp float;
        varying vec2 v_uv;
        uniform float u_time;
        uniform vec2 u_mouse;
        uniform vec2 u_resolution;

        // Pseudo-random noise functions
        float hash(vec2 p) {
            return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
        }

        float noise(vec2 p) {
            vec2 i = floor(p);
            vec2 f = fract(p);
            vec2 u = f * f * (3.0 - 2.0 * f);
            return mix(mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
                       mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
        }

        float fbm(vec2 p) {
            float v = 0.0;
            float a = 0.5;
            vec2 shift = vec2(100.0);
            // Rotate to reduce axial bias
            mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
            for (int i = 0; i < 4; ++i) {
                v += a * noise(p);
                p = rot * p * 2.0 + shift;
                a *= 0.5;
            }
            return v;
        }

        void main() {
            vec2 uv = gl_FragCoord.xy / u_resolution.xy;
            
            // Adjust UV coordinate to cover screen correctly
            float aspect = u_resolution.x / u_resolution.y;
            vec2 st = uv * 2.0 - 1.0;
            st.x *= aspect;

            // Mouse effect
            vec2 normMouse = u_mouse / u_resolution;
            vec2 mouseDiff = (v_uv - normMouse) * vec2(aspect, 1.0);
            float mouseDist = length(mouseDiff);
            float mouseInfluence = smoothstep(0.6, 0.0, mouseDist);

            // Flow noise layers using fBm
            float timeScale = u_time * 0.15;
            float n1 = fbm(st * 0.8 + vec2(timeScale, timeScale * 0.6) + mouseDiff * mouseInfluence * 0.15);
            float n2 = fbm(st * 1.5 - vec2(timeScale * 0.5, timeScale * 0.8));
            
            float combinedFlow = n1 * 0.6 + n2 * 0.4;
            
            // Base Skin Neutral Shades (Clinical Dark Lab)
            vec3 colorBg = vec3(0.043, 0.047, 0.055);    // Deep dark slate
            vec3 colorGold = vec3(0.773, 0.627, 0.349);  // Subtle gold highlight
            vec3 colorWhite = vec3(0.15, 0.17, 0.2);     // Low-light reflection
            
            // Blend colors using noise flow
            vec3 color = mix(colorBg, colorGold, smoothstep(-0.2, 1.2, combinedFlow) * 0.15);
            color = mix(color, colorWhite, smoothstep(0.2, 1.2, combinedFlow) * 0.08);
            
            // Add subtle luxury ambient glow centered
            float centerGlow = 1.0 - length(st) * 0.3;
            color += colorGold * max(centerGlow, 0.0) * 0.04;
            
            gl_FragColor = vec4(color, 1.0);
        }
    `;

    // Compile shader helper
    function compileShader(src, type) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, src);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error('Shader compilation failed: ', gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }

    const vs = compileShader(vsSource, gl.VERTEX_SHADER);
    const fs = compileShader(fsSource, gl.FRAGMENT_SHADER);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Program linking failed: ', gl.getProgramInfoLog(program));
        return;
    }

    gl.useProgram(program);

    // Setup buffer
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
        -1,  1,
         1, -1,
         1,  1
    ]), gl.STATIC_DRAW);

    const positionLoc = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    const timeLoc = gl.getUniformLocation(program, 'u_time');
    const mouseLoc = gl.getUniformLocation(program, 'u_mouse');
    const resLoc = gl.getUniformLocation(program, 'u_resolution');

    // Track mouse coordinates
    let targetMouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let currentMouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    window.addEventListener('mousemove', (e) => {
        targetMouse.x = e.clientX;
        targetMouse.y = window.innerHeight - e.clientY; // Invert Y for WebGL
    });

    // Render loop
    function render(time) {
        // Lerp mouse coordinates for weighted fluidity
        currentMouse.x += (targetMouse.x - currentMouse.x) * 0.05;
        currentMouse.y += (targetMouse.y - currentMouse.y) * 0.05;

        gl.uniform1f(timeLoc, time * 0.001);
        gl.uniform2f(mouseLoc, currentMouse.x, currentMouse.y);
        gl.uniform2f(resLoc, canvas.width, canvas.height);

        gl.drawArrays(gl.TRIANGLES, 0, 6);
        requestAnimationFrame(render);
    }

    // Trigger loaded animation on text
    setTimeout(() => {
        document.querySelector('.hero-content').classList.add('loaded');
    }, 150);

    requestAnimationFrame(render);
}

/* ==========================================================================
   3. 3D PRODUCT SHOWCASE MODULE (Three.js Scroll Exploded Bottle)
   ========================================================================== */
function initThreeJSShowcase() {
    const container = document.getElementById('threejsContainer');
    const loader = document.getElementById('showcaseLoader');
    if (!container) return;

    if (typeof THREE === 'undefined') {
        console.warn('Three.js not loaded. Hiding 3D features.');
        document.body.classList.add('no-threejs');
        if (loader) loader.style.opacity = '0';
        return;
    }

    // Dimensions
    let width = container.clientWidth;
    let height = container.clientHeight;

    // Create scene, camera, and WebGL renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Hide loader
    if (loader) loader.style.opacity = '0';

    // Ambient Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    // Soft Studio Lights
    const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    // Create the Procedural Premium Bottle Group
    const bottleGroup = new THREE.Group();
    scene.add(bottleGroup);

    // Helper to generate dynamic premium label texture
    function createBottleLabelTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        const ctx = canvas.getContext('2d');
        
        // Deep charcoal paper background (to match the dark lab theme)
        ctx.fillStyle = '#121418'; 
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Double gold fine border inset
        ctx.strokeStyle = '#c5a059'; 
        ctx.lineWidth = 4;
        ctx.strokeRect(16, 16, canvas.width - 32, canvas.height - 32);
        
        ctx.strokeStyle = 'rgba(197, 160, 89, 0.35)';
        ctx.lineWidth = 1;
        ctx.strokeRect(22, 22, canvas.width - 44, canvas.height - 44);

        // Brand name: A E T H E R
        ctx.fillStyle = '#FCFAF7';
        ctx.font = '300 46px "Bodoni Moda", Georgia, serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Manual letter spacing for safety across browsers
        const brand = "AETHER";
        const startX = canvas.width / 2 - (brand.length - 1) * 22;
        for (let i = 0; i < brand.length; i++) {
            ctx.fillText(brand[i], startX + i * 44, 120);
        }

        // Subtitle: CELLULAR RENEWAL
        ctx.font = '600 11px "IBM Plex Mono", monospace';
        ctx.fillStyle = '#c5a059';
        const sub = "CELLULAR RENEWAL";
        const startXSub = canvas.width / 2 - (sub.length - 1) * 5.5;
        for (let i = 0; i < sub.length; i++) {
            ctx.fillText(sub[i], startXSub + i * 11, 175);
        }

        // Elegant Divider Line
        ctx.beginPath();
        ctx.moveTo(100, 215);
        ctx.lineTo(412, 215);
        ctx.strokeStyle = 'rgba(197, 160, 89, 0.4)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Product Focus
        ctx.fillStyle = '#FCFAF7';
        ctx.font = 'italic 30px "Bodoni Moda", Georgia, serif';
        ctx.fillText('Active Serum', canvas.width / 2, 260);

        // Active description
        ctx.font = '500 10px "DM Sans", sans-serif';
        ctx.fillStyle = '#a19e95';
        ctx.fillText('SQUALANE + BOTANICAL INFUSION', canvas.width / 2, 305);
        ctx.fillText('ADVANCED CELLULAR HYDRATION', canvas.width / 2, 325);

        ctx.font = 'italic 300 11px "Bodoni Moda", Georgia, serif';
        ctx.fillText('Dermatologically tested. Certified organic.', canvas.width / 2, 360);

        // Bottom section divider
        ctx.beginPath();
        ctx.moveTo(160, 395);
        ctx.lineTo(352, 395);
        ctx.strokeStyle = 'rgba(197, 160, 89, 0.3)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Specs info
        ctx.font = '600 11px "IBM Plex Mono", monospace';
        ctx.fillStyle = '#FCFAF7';
        ctx.fillText('e 30ML  1.0 FL. OZ.', canvas.width / 2, 435);

        ctx.font = '300 9px "IBM Plex Mono", monospace';
        ctx.fillStyle = '#a19e95';
        ctx.fillText('BATCH 06.26  |  MADE IN SWITZERLAND', canvas.width / 2, 465);

        const texture = new THREE.CanvasTexture(canvas);
        texture.needsUpdate = true;
        return texture;
    }

    // Materials definition (Luxury Glass, Metallic Gold, and Serum Liquid)
    const glassMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.32,
        roughness: 0.03,
        metalness: 0.05,
        transmission: 0.85,      // Realistic glass refraction/bending
        ior: 1.52,              // Index of refraction of glass
        thickness: 0.4,         // Thick glass container feel
        clearcoat: 1.0,
        clearcoatRoughness: 0.02,
        side: THREE.DoubleSide
    });

    const goldenMetalMaterial = new THREE.MeshStandardMaterial({
        color: 0xD4AF37,
        roughness: 0.15,
        metalness: 0.9,          // Highly metallic gold finish
        side: THREE.DoubleSide
    });

    const liquidMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xEACDA3,         // Translucent honey-gold serum liquid
        transparent: true,
        opacity: 0.75,
        roughness: 0.1,
        metalness: 0.05
    });

    const dropperBulbMaterial = new THREE.MeshStandardMaterial({
        color: 0xF7F4EE,         // Matte off-white rubber
        roughness: 0.85,
        metalness: 0.0
    });

    // 1. Bottle Body (Glass Tube)
    const bottleGeometry = new THREE.CylinderGeometry(1.0, 1.0, 3.2, 64, 1, true);
    const bottleBody = new THREE.Mesh(bottleGeometry, glassMaterial);
    
    // Bottom Cap (Glass base)
    const baseGeom = new THREE.CylinderGeometry(1.0, 1.0, 0.15, 64);
    const bottleBase = new THREE.Mesh(baseGeom, glassMaterial);
    bottleBase.position.y = -1.6;
    bottleBody.add(bottleBase);

    // Front-facing Brand Label Mesh (wraps around 144 degrees of the front)
    const labelGeom = new THREE.CylinderGeometry(1.002, 1.002, 1.8, 64, 1, true, -Math.PI * 0.38, Math.PI * 0.76);
    const labelMaterial = new THREE.MeshPhysicalMaterial({
        map: createBottleLabelTexture(),
        roughness: 0.65,
        metalness: 0.05,
        clearcoat: 0.1,
        side: THREE.DoubleSide
    });
    const labelMesh = new THREE.Mesh(labelGeom, labelMaterial);
    labelMesh.position.y = -0.1;
    bottleBody.add(labelMesh);
    
    bottleGroup.add(bottleBody);

    // 2. Liquid Serum Content
    const liquidGeom = new THREE.CylinderGeometry(0.85, 0.85, 2.6, 32);
    const liquidContent = new THREE.Mesh(liquidGeom, liquidMaterial);
    liquidContent.position.y = -0.2;
    bottleGroup.add(liquidContent);

    // 3. Pump Collar (Metallic Ring)
    const collarGeom = new THREE.CylinderGeometry(0.75, 0.8, 0.7, 32);
    const pumpCollar = new THREE.Mesh(collarGeom, goldenMetalMaterial);
    pumpCollar.position.y = 1.95;
    
    // Add stepped premium gold collar details
    const collarRingGeom = new THREE.CylinderGeometry(0.82, 0.82, 0.08, 32);
    const collarRingBottom = new THREE.Mesh(collarRingGeom, goldenMetalMaterial);
    collarRingBottom.position.y = -0.35;
    pumpCollar.add(collarRingBottom);
    
    const collarRingTop = new THREE.Mesh(collarRingGeom, goldenMetalMaterial);
    collarRingTop.position.y = 0.35;
    pumpCollar.add(collarRingTop);

    bottleGroup.add(pumpCollar);

    // 4. Dropper Bulb/Rubber Cap (Top Cap)
    const bulbGeom = new THREE.CylinderGeometry(0.55, 0.55, 0.8, 32);
    const bulbCap = new THREE.Mesh(bulbGeom, dropperBulbMaterial);
    
    const bulbTipGeom = new THREE.SphereGeometry(0.55, 32, 16, 0, Math.PI * 2, 0, Math.PI/2);
    const bulbTip = new THREE.Mesh(bulbTipGeom, dropperBulbMaterial);
    bulbTip.position.y = 0.4;
    bulbCap.add(bulbTip);
    
    bulbCap.position.y = 2.7;
    bottleGroup.add(bulbCap);

    // 5. Glass Dropper Tube (Inside)
    const dropperTubeGeom = new THREE.CylinderGeometry(0.12, 0.12, 3.5, 16);
    const dropperTube = new THREE.Mesh(dropperTubeGeom, glassMaterial);
    dropperTube.position.y = 0.4; // Nested inside body
    
    const dropperTipGeom = new THREE.CylinderGeometry(0.04, 0.12, 0.25, 16);
    const dropperTip = new THREE.Mesh(dropperTipGeom, glassMaterial);
    dropperTip.position.y = -1.85;
    dropperTube.add(dropperTip);
    
    bottleGroup.add(dropperTube);

    // 6. Floating active ingredients (particles revealed on scroll)
    const particleCount = 18;
    const particles = [];
    const particlePositions = []; // Store raw target orbits
    
    const activeGoldMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xD4AF37,
        metalness: 0.7,
        roughness: 0.1,
        clearcoat: 1.0,
        transparent: true,
        opacity: 0.85
    });

    const activeBlueMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x89CFF0,
        metalness: 0.2,
        roughness: 0.1,
        transparent: true,
        opacity: 0.65,
        clearcoat: 0.5
    });

    for (let i = 0; i < particleCount; i++) {
        // Generate random procedural shapes
        const isGold = Math.random() > 0.45;
        const geom = isGold 
            ? new THREE.SphereGeometry(0.12 + Math.random() * 0.14, 16, 16)
            : new THREE.DodecahedronGeometry(0.14 + Math.random() * 0.12, 0); // crystalline blobs
            
        const mesh = new THREE.Mesh(geom, isGold ? activeGoldMaterial : activeBlueMaterial);
        
        // Initial nested position inside the liquid
        mesh.position.set(
            (Math.random() - 0.5) * 0.6,
            (Math.random() - 0.5) * 2.0,
            (Math.random() - 0.5) * 0.6
        );
        mesh.scale.set(0.01, 0.01, 0.01); // Start hidden
        
        // Final scattered positions
        const angle = Math.random() * Math.PI * 2;
        const radius = 1.6 + Math.random() * 2.2;
        const targetX = Math.cos(angle) * radius;
        const targetY = (Math.random() - 0.5) * 3.5;
        const targetZ = (Math.random() - 0.5) * 2.5;

        particles.push(mesh);
        particlePositions.push({
            startX: mesh.position.x,
            startY: mesh.position.y,
            startZ: mesh.position.z,
            endX: targetX,
            endY: targetY,
            endZ: targetZ,
            rotSpeedX: (Math.random() - 0.5) * 0.02,
            rotSpeedY: (Math.random() - 0.5) * 0.02
        });
        
        scene.add(mesh);
    }

    // Positions for overall group positioning
    bottleGroup.position.set(-0.3, 0.2, 0);
    bottleGroup.rotation.set(0.1, -0.4, -0.05);

    // GSAP Scroll Animation timeline
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.showcase-section',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.2,          // Soft weighted scroll scrub
            onUpdate: (self) => {
                const progress = self.progress;
                animateDisassembly(progress);
                updateNarrativeSteps(progress);
            }
        }
    });

    // Smooth Disassembly interpolation function
    function animateDisassembly(p) {
        // Curve: slow start, rapid disassembly in mid scroll, slow settle
        const pEased = gsap.parseEase('power2.inOut')(p);

        // Y separations (Collar, Bulb cap, Dropper go up; Body & base go down)
        bulbCap.position.y = 2.7 + pEased * 2.4;
        pumpCollar.position.y = 1.95 + pEased * 1.5;
        dropperTube.position.y = 0.4 + pEased * 1.8;
        
        bottleBody.position.y = -pEased * 1.2;
        liquidContent.position.y = -0.2 - pEased * 1.6;
        
        // Liquid fades slightly as it dissolves
        liquidMaterial.opacity = 0.82 - pEased * 0.42;

        // Disperse floating nutrient droplets
        particles.forEach((mesh, index) => {
            const pos = particlePositions[index];
            
            // Interpolate position
            mesh.position.x = THREE.MathUtils.lerp(pos.startX, pos.endX, pEased);
            mesh.position.y = THREE.MathUtils.lerp(pos.startY, pos.endY, pEased);
            mesh.position.z = THREE.MathUtils.lerp(pos.startZ, pos.endZ, pEased);
            
            // Scale up particles when they escape
            const scaleVal = THREE.MathUtils.lerp(0.01, 1.0, Math.min(pEased * 2.5, 1.0));
            mesh.scale.set(scaleVal, scaleVal, scaleVal);
        });

        // Rotate group dynamically with scroll velocity
        bottleGroup.rotation.y = -0.4 + p * Math.PI * 0.8;
        bottleGroup.rotation.x = 0.1 + p * 0.2;
    }

    // Narrative active markers handler
    function updateNarrativeSteps(p) {
        const steps = document.querySelectorAll('.narrative-step');
        let activeIdx = 0;
        
        if (p > 0.72) {
            activeIdx = 2;
        } else if (p > 0.35) {
            activeIdx = 1;
        } else {
            activeIdx = 0;
        }

        steps.forEach((step, idx) => {
            if (idx === activeIdx) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
    }

    // Simple Render Loop for ambient rotations
    let clock = new THREE.Clock();
    function animate() {
        requestAnimationFrame(animate);
        
        const elapsed = clock.getElapsedTime();
        
        // Gentle hover float when scroll is idle
        if (!ScrollTrigger.isScrolling) {
            const floatOffset = Math.sin(elapsed * 1.2) * 0.08;
            bottleGroup.position.y = 0.2 + floatOffset;
            
            // Floating particles drift
            particles.forEach((mesh, index) => {
                const pos = particlePositions[index];
                mesh.position.y += Math.sin(elapsed + index) * 0.002;
                mesh.rotation.x += pos.rotSpeedX;
                mesh.rotation.y += pos.rotSpeedY;
            });
        }

        renderer.render(scene, camera);
    }
    requestAnimationFrame(animate);

    // Responsive sizing & mobile scale adjustment
    function adjustScale() {
        const aspect = width / height;
        if (aspect < 0.8) {
            // Portrait/mobile: scale down bottle group to fit narrow viewport
            const scale = Math.max(0.65, aspect * 1.1);
            bottleGroup.scale.set(scale, scale, scale);
        } else {
            bottleGroup.scale.set(1.0, 1.0, 1.0);
        }
    }
    adjustScale();

    window.addEventListener('resize', () => {
        width = container.clientWidth;
        height = container.clientHeight;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        
        renderer.setSize(width, height);
        adjustScale();
    });
}

/* ==========================================================================
   4. WEBGL BEFORE/AFTER TEXTURE SLIDER MODULE
   ========================================================================== */
function initWebGLSlider() {
    const canvas = document.getElementById('webglSliderCanvas');
    const container = document.getElementById('sliderContainer');
    const sliderBar = document.getElementById('sliderBar');
    if (!canvas || !container || !sliderBar) return;

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
        console.warn('WebGL not supported for Before/After slider.');
        return;
    }

    // Set canvas sizes
    function resizeSlider() {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
    }
    window.addEventListener('resize', resizeSlider);
    resizeSlider();

    // Quad Shader Program
    const vsSource = `
        attribute vec2 a_position;
        varying vec2 v_uv;
        void main() {
            v_uv = vec2(a_position.x * 0.5 + 0.5, 0.5 - a_position.y * 0.5); // Flip Y correctly for image coords
            gl_Position = vec4(a_position, 0.0, 1.0);
        }
    `;

    const fsSource = `
        precision highp float;
        varying vec2 v_uv;
        uniform sampler2D u_texBefore;
        uniform sampler2D u_texAfter;
        uniform float u_slider;
        uniform float u_time;
        uniform int u_mode; // 0 = Normal, 1 = UV Spectral

        void main() {
            // Apply slight organic ripple to the slider split boundary
            float wave = sin(v_uv.y * 8.0 + u_time * 2.0) * 0.005;
            float smoothSlider = u_slider + wave;
            
            // Texture samplers
            vec4 colBefore = texture2D(u_texBefore, v_uv);
            vec4 colAfter = texture2D(u_texAfter, v_uv);
            
            // Process UV Scan Mode in real-time
            if (u_mode == 1) {
                // UV process for After (Hydrated) skin
                float lumaAfter = dot(colAfter.rgb, vec3(0.299, 0.587, 0.114));
                // High contrast spots to represent hyaluronic acid deposits
                float uvSpots = smoothstep(0.45, 0.9, lumaAfter);
                vec3 uvGlow = vec3(0.0, 0.88, 1.0) * uvSpots * 1.6;
                vec3 uvBase = vec3(0.12, 0.08, 0.32) * (1.0 - uvSpots);
                colAfter.rgb = uvBase + uvGlow;

                // UV process for Before (Dehydrated) skin - very weak spots
                float lumaBefore = dot(colBefore.rgb, vec3(0.299, 0.587, 0.114));
                float uvSpotsBefore = smoothstep(0.5, 0.95, lumaBefore) * 0.18; // minimal hydration glow
                vec3 uvBaseBefore = vec3(0.1, 0.06, 0.24) * (1.0 - uvSpotsBefore);
                vec3 uvGlowBefore = vec3(0.0, 0.88, 1.0) * uvSpotsBefore * 0.5;
                colBefore.rgb = uvBaseBefore + uvGlowBefore;
            }
            
            // Create a glowing transition wavefront sweep
            float distToEdge = v_uv.x - smoothSlider;
            
            // Left of slider: Dry skin (Before). Right of slider: Glowing skin (After)
            vec4 finalColor;
            if (v_uv.x < smoothSlider) {
                finalColor = colBefore;
            } else {
                finalColor = colAfter;
            }
            
            // WebGL Hydration Glow Sweep: Add a glowing gold/cyan edge wave
            float glowWidth = 0.03;
            float glowFactor = smoothstep(glowWidth, 0.0, abs(distToEdge));
            vec3 glowColor = (u_mode == 1) ? vec3(0.0, 0.88, 1.0) : vec3(0.95, 0.88, 0.72); // neon cyan vs golden cream
            
            finalColor.rgb += glowColor * glowFactor * 0.42;

            gl_FragColor = finalColor;
        }
    `;

    function compileShader(src, type) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, src);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error('Shader compilation error: ', gl.getShaderInfoLog(shader));
            return null;
        }
        return shader;
    }

    const vs = compileShader(vsSource, gl.VERTEX_SHADER);
    const fs = compileShader(fsSource, gl.FRAGMENT_SHADER);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    // Quad setup
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
        -1,  1,
         1, -1,
         1,  1
    ]), gl.STATIC_DRAW);

    const positionLoc = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    // Uniform locs
    const sliderLoc = gl.getUniformLocation(program, 'u_slider');
    const timeLoc = gl.getUniformLocation(program, 'u_time');
    const modeLoc = gl.getUniformLocation(program, 'u_mode');

    // Create and load textures
    let textureBefore = gl.createTexture();
    let textureAfter = gl.createTexture();
    let imagesLoaded = 0;

    function setupTexture(texture, image, textureUnit) {
        gl.activeTexture(gl.TEXTURE0 + textureUnit);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        
        // Standard parameters
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    }

    const imgBefore = new Image();
    const imgAfter = new Image();

    imgBefore.onerror = () => {
        if (!imgBefore.src.endsWith('.png')) {
            console.warn('WebP slider texture (before) failed to load. Falling back to PNG.');
            imgBefore.src = 'assets/skin_before.png';
        }
    };
    imgAfter.onerror = () => {
        if (!imgAfter.src.endsWith('.png')) {
            console.warn('WebP slider texture (after) failed to load. Falling back to PNG.');
            imgAfter.src = 'assets/skin_after.png';
        }
    };

    imgBefore.onload = () => {
        setupTexture(textureBefore, imgBefore, 0);
        gl.uniform1i(gl.getUniformLocation(program, 'u_texBefore'), 0);
        imagesLoaded++;
        if (imagesLoaded === 2) startSliderLoop();
    };

    imgAfter.onload = () => {
        setupTexture(textureAfter, imgAfter, 1);
        gl.uniform1i(gl.getUniformLocation(program, 'u_texAfter'), 1);
        imagesLoaded++;
        if (imagesLoaded === 2) startSliderLoop();
    };

    imgBefore.src = 'assets/skin_before.webp';
    imgAfter.src = 'assets/skin_after.webp';

    // Slider & Spectral State
    let sliderPos = 0.5;
    let targetSliderPos = 0.5;
    let isDragging = false;
    let currentMode = 0; // 0 = Normal, 1 = UV Scan

    // Bind spectral button events
    const normalBtn = document.getElementById('spectralNormalBtn');
    const uvBtn = document.getElementById('spectralUvBtn');
    
    if (normalBtn && uvBtn) {
        normalBtn.addEventListener('click', () => {
            currentMode = 0;
            normalBtn.classList.add('active');
            uvBtn.classList.remove('active');
        });
        uvBtn.addEventListener('click', () => {
            currentMode = 1;
            uvBtn.classList.add('active');
            normalBtn.classList.remove('active');
        });
    }

    // Pointer events to coordinate slider drag
    function updateDragPosition(e) {
        const rect = container.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const relativeX = (clientX - rect.left) / rect.width;
        targetSliderPos = Math.max(0.0, Math.min(1.0, relativeX));
    }

    const dragStart = (e) => {
        isDragging = true;
        updateDragPosition(e);
    };

    const dragMove = (e) => {
        if (!isDragging) return;
        updateDragPosition(e);
    };

    const dragEnd = () => {
        isDragging = false;
    };

    container.addEventListener('mousedown', dragStart);
    window.addEventListener('mousemove', dragMove);
    window.addEventListener('mouseup', dragEnd);

    container.addEventListener('touchstart', dragStart);
    window.addEventListener('touchmove', dragMove);
    window.addEventListener('touchend', dragEnd);

    // Keyboard slider controls attached to container for better click/focus target size
    container.setAttribute('tabindex', '0');
    container.setAttribute('role', 'slider');
    container.setAttribute('aria-label', 'Before and After Hydration Slider');
    container.setAttribute('aria-valuenow', '50');
    container.setAttribute('aria-valuemin', '0');
    container.setAttribute('aria-valuemax', '100');

    container.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            targetSliderPos = Math.max(0.0, targetSliderPos - 0.05);
            e.preventDefault();
        } else if (e.key === 'ArrowRight') {
            targetSliderPos = Math.min(1.0, targetSliderPos + 0.05);
            e.preventDefault();
        }
        container.setAttribute('aria-valuenow', Math.round(targetSliderPos * 100));
        playSynthTone(150 + targetSliderPos * 150, 0.05, 'sine', 0.04);
    });

    // Animation render loop
    function startSliderLoop() {
        function tick(time) {
            // Smooth lerp on slider position
            sliderPos += (targetSliderPos - sliderPos) * 0.12;

            // Update DOM slider bar position
            sliderBar.style.left = `${sliderPos * 100}%`;

            // Draw WebGL
            gl.uniform1i(modeLoc, currentMode);
            gl.uniform1f(sliderLoc, sliderPos);
            gl.uniform1f(timeLoc, time * 0.001);
            gl.drawArrays(gl.TRIANGLES, 0, 6);

            requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    }
}

/* ==========================================================================
   5. TACTILE SOFT-BODY INGREDIENT PHYSICS MODULE
   ========================================================================== */
function initSoftBodyIngredients() {
    const canvas = document.getElementById('ingredientsPhysicsCanvas');
    const container = document.getElementById('ingredientsScrollContainer');
    const track = document.querySelector('.ingredients-track');
    const anchors = document.querySelectorAll('.droplet-visual-anchor');
    if (!canvas || !track || anchors.length === 0) return;

    if (typeof THREE === 'undefined') {
        console.warn('Three.js not loaded. Applying CSS fallback for ingredients droplets.');
        anchors.forEach(anchor => {
            const color = anchor.getAttribute('data-color') || '#B58E43';
            anchor.style.display = 'block';
            anchor.style.width = '136px';
            anchor.style.height = '136px';
            anchor.style.borderRadius = '50%';
            anchor.style.margin = '20px auto';
            anchor.style.background = `radial-gradient(circle at 35% 35%, #ffffff 0%, ${color}e0 50%, ${color} 100%)`;
            anchor.style.boxShadow = 'inset -8px -8px 16px rgba(0,0,0,0.2), 0 8px 24px rgba(0,0,0,0.15)';
        });
        canvas.style.display = 'none';
        return;
    }

    let width = track.clientWidth;
    let height = 280; // fixed visual container height

    canvas.width = width;
    canvas.height = height;

    // Single Three.js scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-width / 2, width / 2, height / 2, -height / 2, 1, 1000);
    camera.position.z = 500;

    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    // Lights - Front-angled three-point studio lighting to illuminate diffuse color directly
    const ambient = new THREE.AmbientLight(0xffffff, 0.65);
    scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.85);
    dirLight.position.set(80, 80, 250); // Direct key illumination on front face
    scene.add(dirLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.4);
    fillLight.position.set(-150, -50, 100); // Secondary fill light
    scene.add(fillLight);

    // Droplet object definition
    const droplets = [];
    const radius = 68; // in pixels

    anchors.forEach((anchor, index) => {
        const colorHex = anchor.getAttribute('data-color') || '#ffffff';
        const noiseFactor = parseFloat(anchor.getAttribute('data-noise') || '0.3');
        const name = anchor.getAttribute('data-name');

        // Create dense sphere geometry (using orthographic size)
        const geometry = new THREE.SphereGeometry(radius, 36, 36);

        // Luxury Physical Material (Thick, rich, solid glossy gel look)
        const material = new THREE.MeshPhysicalMaterial({
            color: new THREE.Color(colorHex),
            transparent: true,
            opacity: 0.96,
            roughness: 0.08,
            clearcoat: 0.8,
            clearcoatRoughness: 0.05,
            metalness: 0.15
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // Store original positions for deformation
        const posAttr = geometry.attributes.position;
        const vertexCount = posAttr.count;
        const originalVertices = new Float32Array(vertexCount * 3);
        for (let i = 0; i < vertexCount * 3; i++) {
            originalVertices[i] = posAttr.array[i];
        }

        // Get starting positions from DOM anchors relative to track
        const trackRect = track.getBoundingClientRect();
        const anchorRect = anchor.getBoundingClientRect();
        const startX = anchorRect.left - trackRect.left + anchorRect.width / 2;
        const startY = height / 2; // centered vertically in canvas

        // Convert to 3D coordinates (centered at canvas origin)
        const x3d = startX - width / 2;
        const y3d = height / 2 - startY; // should be 0

        mesh.position.set(x3d, y3d, 0);

        droplets.push({
            mesh: mesh,
            geometry: geometry,
            originalVertices: originalVertices,
            vertexCount: vertexCount,
            homeX: x3d,
            homeY: y3d,
            x: x3d,
            y: y3d,
            vx: 0,
            vy: 0,
            radius: radius,
            noiseFactor: noiseFactor,
            isDragged: false,
            colorHex: colorHex,
            name: name,
            deformX: 0,
            deformY: 0
        });
    });

    // Drag-and-drop interaction variables
    let activeDroplet = null;
    let dragOffset = { x: 0, y: 0 };
    let mouse = { x: 0, y: 0 };

    // Translate client mouse position to local track/canvas coordinates
    function getCanvasCoordinates(e) {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        
        // Pixel coordinates relative to canvas top-left
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        // Convert to 3D coordinates
        return {
            x: x - width / 2,
            y: height / 2 - y
        };
    }

    // Event listeners - passive set to false to allow preventing page scroll during physics dragging
    canvas.addEventListener('mousedown', onDragStart);
    canvas.addEventListener('touchstart', onDragStart, { passive: false });

    window.addEventListener('mousemove', onDragMove);
    window.addEventListener('touchmove', onDragMove, { passive: false });

    window.addEventListener('mouseup', onDragEnd);
    window.addEventListener('touchend', onDragEnd);

    function onDragStart(e) {
        const coords = getCanvasCoordinates(e);
        
        // Find if we clicked close to any droplet
        let closest = null;
        let minDist = radius + 20; // clickable tolerance

        droplets.forEach(d => {
            let dist = Math.hypot(coords.x - d.x, coords.y - d.y);
            if (dist < minDist) {
                closest = d;
                minDist = dist;
            }
        });

        if (closest) {
            // Prevent browser scroll/zoom when touching a droplet
            if (e.cancelable) e.preventDefault();

            activeDroplet = closest;
            activeDroplet.isDragged = true;
            dragOffset.x = activeDroplet.x - coords.x;
            dragOffset.y = activeDroplet.y - coords.y;
            
            // Pop scaling effect using GSAP
            gsap.to(activeDroplet.mesh.scale, { x: 1.15, y: 1.15, z: 1.15, duration: 0.4, ease: 'elastic.out(1, 0.4)' });
            
            // Bubble synth sound
            playSynthTone(300 + Math.random() * 200, 0.15, 'sine', 0.1);
        }
    }

    function onDragMove(e) {
        if (!activeDroplet) return;
        // Block mobile vertical page scroll when actively dragging a droplet
        if (e.cancelable) e.preventDefault();

        const coords = getCanvasCoordinates(e);
        mouse.x = coords.x + dragOffset.x;
        mouse.y = coords.y + dragOffset.y;
    }

    function onDragEnd() {
        if (!activeDroplet) return;
        
        // Reset scale
        gsap.to(activeDroplet.mesh.scale, { x: 1.0, y: 1.0, z: 1.0, duration: 0.6, ease: 'power3.out' });
        
        // Release droplet click sound
        playSynthTone(200 + Math.random() * 100, 0.1, 'sine', 0.08);

        activeDroplet.isDragged = false;
        activeDroplet = null;
    }

    // Animation Loop
    let clock = new THREE.Clock();

    function loop() {
        requestAnimationFrame(loop);

        const time = clock.getElapsedTime();

        // 1. Update Physics (Forces, drag, spring constraint, collisions)
        droplets.forEach(d => {
            if (d.isDragged) {
                // Instantly trace mouse position, calculating velocity
                d.vx = (mouse.x - d.x) * 0.3;
                d.vy = (mouse.y - d.y) * 0.3;
                d.x += d.vx;
                d.y += d.vy;
            } else {
                // Spring force pulling back to home coordinates
                let springX = (d.homeX - d.x) * 0.07;
                let springY = (d.homeY - d.y) * 0.07;
                
                d.vx += springX;
                d.vy += springY;
                
                // Friction
                d.vx *= 0.88;
                d.vy *= 0.88;

                d.x += d.vx;
                d.y += d.vy;
            }

            // Boundary collision (contain inside canvas heights)
            const margin = radius + 10;
            if (d.y > height / 2 - margin) {
                d.y = height / 2 - margin;
                d.vy = -d.vy * 0.5;
            } else if (d.y < -height / 2 + margin) {
                d.y = -height / 2 + margin;
                d.vy = -d.vy * 0.5;
            }
        });

        // 2. Droplet-to-Droplet Collisions
        for (let i = 0; i < droplets.length; i++) {
            for (let j = i + 1; j < droplets.length; j++) {
                let d1 = droplets[i];
                let d2 = droplets[j];

                let dx = d2.x - d1.x;
                let dy = d2.y - d1.y;
                let dist = Math.hypot(dx, dy);
                let minDist = d1.radius + d2.radius - 10; // overlap slightly for fluid feel

                if (dist < minDist) {
                    let overlap = minDist - dist;
                    let angle = Math.atan2(dy, dx);
                    
                    // Resolve positions (push apart)
                    let pushX = Math.cos(angle) * overlap * 0.5;
                    let pushY = Math.sin(angle) * overlap * 0.5;

                    if (!d1.isDragged && !d2.isDragged) {
                        d1.x -= pushX;
                        d1.y -= pushY;
                        d2.x += pushX;
                        d2.y += pushY;

                        // Exchange velocity (elastic bounce)
                        let vxTemp = d1.vx;
                        let vyTemp = d1.vy;
                        d1.vx = d2.vx * 0.6;
                        d1.vy = d2.vy * 0.6;
                        d2.vx = vxTemp * 0.6;
                        d2.vy = vyTemp * 0.6;
                    } else if (d1.isDragged) {
                        // Dragged droplet pushes the other
                        d2.x += pushX * 1.5;
                        d2.y += pushY * 1.5;
                        d2.vx += pushX * 0.8;
                        d2.vy += pushY * 0.8;
                    } else if (d2.isDragged) {
                        d1.x -= pushX * 1.5;
                        d1.y -= pushY * 1.5;
                        d1.vx -= pushX * 0.8;
                        d1.vy -= pushY * 0.8;
                    }

                    // Store collision deformation factor
                    d1.deformX -= pushX * 0.15;
                    d1.deformY -= pushY * 0.15;
                    d2.deformX += pushX * 0.15;
                    d2.deformY += pushY * 0.15;

                    // Play tiny wet collision chime
                    if (Math.abs(overlap) > 2) {
                        playSynthTone(500 + Math.random() * 200, 0.05, 'sine', 0.04);
                    }
                }
            }
        }

        // 3. Render and Apply Deformations (Soft-Body shape mutation)
        droplets.forEach(d => {
            // Lerp deformation factors back to 0
            d.deformX *= 0.85;
            d.deformY *= 0.85;

            // Apply position to Three.js mesh
            d.mesh.position.set(d.x, d.y, 0);

            // Apply vertex level deformation
            const pos = d.geometry.attributes.position;
            const vertexCount = d.vertexCount;
            const originalVertices = d.originalVertices;

            for (let i = 0; i < vertexCount; i++) {
                const vx = originalVertices[i * 3];
                const vy = originalVertices[i * 3 + 1];
                const vz = originalVertices[i * 3 + 2];

                // Normal direction of vertex
                const length = Math.hypot(vx, vy, vz);
                const dirX = vx / length;
                const dirY = vy / length;
                const dirZ = vz / length;

                // 3D Noise wave simulation
                const waveNoise = Math.sin(vx * 0.05 + time * 2.0) * Math.cos(vy * 0.05 - time * 1.5) * Math.sin(vz * 0.05 + time);
                
                // Drag deformation (squashes shape in direction of velocity/drag)
                let dragDeform = -(d.vx * dirX + d.vy * dirY) * 0.15;
                
                // Collision deformation (pushes in at collision contact)
                let collisionDeform = (d.deformX * dirX + d.deformY * dirY) * 0.2;

                let offset = waveNoise * d.noiseFactor * 12.0 + dragDeform + collisionDeform;

                pos.array[i * 3] = vx + dirX * offset;
                pos.array[i * 3 + 1] = vy + dirY * offset;
                pos.array[i * 3 + 2] = vz + dirZ * offset;
            }

            pos.needsUpdate = true;
            d.geometry.computeVertexNormals();

            // Rotate mesh slowly
            d.mesh.rotation.y += 0.005;
        });

        renderer.render(scene, camera);
    }
    loop();

    // Enable standard track drag-scroll support
    let isDown = false;
    let startX;
    let scrollLeft;
    
    // Ignore drags that originate from the canvas when dragging a droplet
    container.addEventListener('mousedown', (e) => {
        // Only trigger scroll drag if NOT clicking on a droplet
        const coords = getCanvasCoordinates(e);
        let clickedDroplet = false;
        droplets.forEach(d => {
            if (Math.hypot(coords.x - d.x, coords.y - d.y) < radius + 15) {
                clickedDroplet = true;
            }
        });
        
        if (clickedDroplet) return;

        isDown = true;
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
        isDown = false;
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 1.5;
        container.scrollLeft = scrollLeft - walk;
    });

    // Resize and keep anchors relative
    window.addEventListener('resize', () => {
        width = track.clientWidth;
        
        canvas.width = width;
        canvas.height = height;
        
        renderer.setSize(width, height);
        
        camera.left = -width / 2;
        camera.right = width / 2;
        camera.updateProjectionMatrix();

        // Re-align home coordinates based on new anchor locations
        droplets.forEach((d, idx) => {
            const anchor = anchors[idx];
            const trackRect = track.getBoundingClientRect();
            const anchorRect = anchor.getBoundingClientRect();
            const startX = anchorRect.left - trackRect.left + anchorRect.width / 2;
            const x3d = startX - width / 2;

            d.homeX = x3d;
            if (!d.isDragged) {
                d.x = x3d;
            }
        });
    });
}

/* ==========================================================================
   6. SUBSCRIPTION DRAWER & "SMART GLOW" SAVINGS MODULE
   ========================================================================== */
function initSubscriptionDrawer() {
    const triggers = document.querySelectorAll('.subscription-trigger');
    const drawer = document.getElementById('subscriptionDrawer');
    const overlay = document.getElementById('subscriptionDrawerOverlay');
    const closeBtn = document.getElementById('closeDrawerBtn');
    const oneTimeBtn = document.getElementById('oneTimePurchaseBtn');
    
    // UI elements to update
    const sliderInput = document.getElementById('frequencyRangeInput');
    const progressRing = document.getElementById('glowRingProgress');
    const scoreVal = document.getElementById('glowScoreVal');
    const cycleSummary = document.getElementById('cycleSummary');
    const savingsSummary = document.getElementById('savingsSummary');
    const glowAura = document.getElementById('glowAura');
    const ticks = document.querySelectorAll('.frequency-tick');

    const memberPrice = document.getElementById('memberPriceText');

    // Open Drawer (General Triggers default to flagship Serum)
    triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            loadProductIntoDrawer('serum');
            overlay.classList.add('active');
            drawer.classList.add('active');
            document.body.style.overflow = 'hidden'; // Stop background scroll
            
            // Trigger visual visualizer entrance
            updateSavingsVisuals(parseInt(sliderInput.value));
        });
    });

    // Bind all Collections Grid CTA Buttons
    const gridButtons = document.querySelectorAll('.product-card-cta-btn');
    gridButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const productId = btn.getAttribute('data-product-id');
            loadProductIntoDrawer(productId);
            overlay.classList.add('active');
            drawer.classList.add('active');
            document.body.style.overflow = 'hidden';
            updateSavingsVisuals(parseInt(sliderInput.value));
            
            // Play slide open tone
            playSynthTone(280 + Math.random() * 40, 0.15, 'sine', 0.1);
        });
    });

    // Close Drawer
    const closeDrawer = () => {
        overlay.classList.remove('active');
        drawer.classList.remove('active');
        document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);

    // Handle range input adjustments
    sliderInput.addEventListener('input', (e) => {
        const step = parseInt(e.target.value);
        updateSavingsVisuals(step);
    });

    // Handle clicking tick labels directly
    ticks.forEach(tick => {
        tick.addEventListener('click', () => {
            const step = parseInt(tick.getAttribute('data-step'));
            sliderInput.value = step;
            updateSavingsVisuals(step);
        });
    });

    // Main Update Function
    function updateSavingsVisuals(step) {
        // SVG Ring total circumference is 251.2 (2 * PI * 40)
        const totalCircumference = 251.2;
        let offset, scoreText, cycleText, savingsText, auraScale, memberPriceText;

        // Reset active tick classes
        ticks.forEach(tick => {
            const tickStep = parseInt(tick.getAttribute('data-step'));
            if (tickStep === step) {
                tick.classList.add('active');
            } else {
                tick.classList.remove('active');
            }
        });

        const prodData = PRODUCTS_DATA[currentDrawerProductId] || PRODUCTS_DATA['serum'];
        const tick = prodData.ticks[step];

        offset = totalCircumference * (1 - tick.offset);
        scoreText = `${tick.score}%`;
        cycleText = tick.cycle;
        savingsText = tick.savings;
        auraScale = tick.aura;
        memberPriceText = tick.price;

        // Apply visual updates with smooth transition CSS
        progressRing.style.strokeDashoffset = offset;
        
        // Count up score value text dynamically
        let currentScore = parseInt(scoreVal.innerText);
        const targetScore = parseInt(scoreText);
        gsap.to(scoreVal, {
            innerText: targetScore,
            duration: 0.8,
            snap: { innerText: 1 },
            onUpdate: function() {
                scoreVal.innerText = scoreVal.innerText + "%";
            }
        });

        cycleSummary.innerText = cycleText;
        savingsSummary.innerText = savingsText;
        memberPrice.innerText = memberPriceText;

        // Adjust pulsating aura size
        glowAura.style.transform = `scale(${auraScale})`;
        glowAura.style.opacity = `${0.3 + auraScale * 0.7}`;
    }
}

/* ==========================================================================
   7. INTERSECTION OBSERVER FOR FADING STORY CARDS
   ========================================================================== */
function initFadingObserver() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.18
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target); // Trigger only once
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach(el => {
        observer.observe(el);
    });
}

/* ==========================================================================
   8. DRIP LIQUID SCROLL PROGRESS MODULE (Verlet Physics)
   ========================================================================== */
function initScrollDroplet() {
    const canvas = document.getElementById('liquidDripCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Set sizes
    function resize() {
        canvas.width = 60;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    // Verlet Physics particle definition
    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.px = x;
            this.py = y;
            this.vx = 0;
            this.vy = 0;
        }
        update(friction) {
            const vx = (this.x - this.px) * friction;
            const vy = (this.y - this.py) * friction;
            this.px = this.x;
            this.py = this.y;
            this.x += vx;
            this.y += vy;
        }
    }

    // Create droplet points (a chain of 7 particles)
    const particleCount = 7;
    const particles = [];
    const restLength = 8; // spring rest length
    
    // Initialize particles centered horizontally, starting near the top
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(30, 50 + i * restLength));
    }

    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    function animate() {
        requestAnimationFrame(animate);

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Sizing sanity
        const targetWidth = 30; // center of canvas

        // Calculate scroll velocity
        const currentScrollY = window.scrollY;
        scrollVelocity = (currentScrollY - lastScrollY) * 0.28;
        lastScrollY = currentScrollY;

        // Dampen extreme velocity spikes
        scrollVelocity = Math.max(-40, Math.min(40, scrollVelocity));

        // Calculate scroll progress percentage (0.0 to 1.0)
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = scrollHeight > 0 ? (currentScrollY / scrollHeight) : 0;
        
        // Target Y for the droplet base (moves from 10% to 90% of screen height)
        const startY = 80;
        const endY = window.innerHeight - 80;
        const targetY = startY + scrollProgress * (endY - startY);

        // Update the top anchor point
        const head = particles[0];
        head.x = targetWidth;
        // Inject scroll velocity to make it stretch or compress
        head.y = targetY;

        // Update physics
        const friction = 0.88;
        for (let i = 1; i < particleCount; i++) {
            particles[i].update(friction);
            
            // Add gravity and drag downward based on scroll velocity
            particles[i].y += 0.25 + Math.abs(scrollVelocity) * 0.15;
            
            // Slight horizontal wiggle if moving fast
            particles[i].x += Math.sin(Date.now() * 0.02 + i) * (scrollVelocity * 0.04);
        }

        // Satisfy spring links (Verlet relaxation)
        for (let step = 0; step < 4; step++) {
            for (let i = 0; i < particleCount - 1; i++) {
                const p1 = particles[i];
                const p2 = particles[i + 1];
                
                const dx = p2.x - p1.x;
                const dy = p2.y - p1.y;
                const dist = Math.hypot(dx, dy);
                const diff = restLength - dist;
                const percent = (diff / dist) * 0.5;
                
                const offsetX = dx * percent;
                const offsetY = dy * percent;
                
                if (i > 0) {
                    p1.x -= offsetX;
                    p1.y -= offsetY;
                }
                p2.x += offsetX;
                p2.y += offsetY;
            }
        }

        // Draw the droplet
        ctx.beginPath();
        
        // Generate droplet bubble outline using variable widths along the spine
        const numPoints = particles.length;
        
        // Draw left side curves
        ctx.moveTo(particles[0].x, particles[0].y);
        for (let i = 0; i < numPoints; i++) {
            // Width decreases from head to neck, then expands at the tail to form teardrop
            let r = 3.5; // default neck
            if (i === 0) r = 4.0;
            if (i === numPoints - 2) r = 6.5; // tail bulge
            if (i === numPoints - 1) r = 0.5; // tip
            
            const px = particles[i].x - r;
            const py = particles[i].y;
            ctx.lineTo(px, py);
        }
        
        // Draw right side curves back up
        for (let i = numPoints - 1; i >= 0; i--) {
            let r = 3.5;
            if (i === 0) r = 4.0;
            if (i === numPoints - 2) r = 6.5;
            if (i === numPoints - 1) r = 0.5;
            
            const px = particles[i].x + r;
            const py = particles[i].y;
            ctx.lineTo(px, py);
        }
        
        ctx.closePath();

        // Premium Gold Gradient fill
        const gradient = ctx.createRadialGradient(
            targetWidth - 2, targetY + 12, 1,
            targetWidth, targetY + 15, 20
        );
        gradient.addColorStop(0, '#FFF5DF');
        gradient.addColorStop(0.3, '#E5C178');
        gradient.addColorStop(1, '#B88F3A');

        ctx.fillStyle = gradient;
        ctx.fill();

        // Subtle highlight line on the left edge for 3D depth
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 1.0;
        ctx.stroke();
    }
    animate();
}

/* ==========================================================================
   9. 3D CELLULAR DERMAL SCANNER (Three.js Cellular Restructuring)
   ========================================================================== */
function initDermalScanner() {
    const container = document.getElementById('scannerThreeContainer');
    const startBtn = document.getElementById('startScannerBtn');
    const readout = document.getElementById('scannerReadout');
    const turgorText = document.getElementById('turgorVal');
    const densityText = document.getElementById('densityVal');
    const sweepLine = document.getElementById('scannerSweepLine');
    if (!container || !startBtn) return;

    let selectedClimate = 'arid';
    let selectedDeficiency = 'dehydrated';
    let selectedFocus = 'plumping';

    setupOptionGroup('climateOptions', (val) => selectedClimate = val);
    setupOptionGroup('deficiencyOptions', (val) => selectedDeficiency = val);
    setupOptionGroup('focusOptions', (val) => selectedFocus = val);

    function setupOptionGroup(groupId, callback) {
        const group = document.getElementById(groupId);
        if (!group) return;
        
        const pills = group.querySelectorAll('.option-pill');
        pills.forEach(pill => {
            pill.addEventListener('click', () => {
                pills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                callback(pill.getAttribute('data-val'));
                
                // Synth sound on option switch
                playSynthTone(180, 0.1, 'sine');
            });
        });
    }

    const hasThree = typeof THREE !== 'undefined';
    let cells = [];
    let scene, camera, renderer, cellGroup;
    let width = container.clientWidth;
    let height = container.clientHeight;

    if (hasThree) {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
        camera.position.z = 4.2;

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        container.appendChild(renderer.domElement);

        // Soft lights
        const ambient = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambient);

        const dirLight = new THREE.DirectionalLight(0xffffff, 0.9);
        dirLight.position.set(2, 4, 3);
        scene.add(dirLight);

        // Create Grid of Cellular Spheres (representing skin cells)
        cellGroup = new THREE.Group();
        scene.add(cellGroup);

        const rows = 5;
        const cols = 5;
        const spacing = 0.45;

        // Base damaged dry material
        const dryMaterial = new THREE.MeshPhysicalMaterial({
            color: 0x8C857E,
            roughness: 0.8,
            metalness: 0.05,
            transparent: true,
            opacity: 0.6
        });

        // Create 5x5 grid of cells
        const cellGeom = new THREE.SphereGeometry(0.14, 16, 16);
        
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const cell = new THREE.Mesh(cellGeom, dryMaterial.clone());
                cell.position.set(
                    (c - (cols - 1)/2) * spacing,
                    (r - (rows - 1)/2) * spacing,
                    (Math.random() - 0.5) * 0.1
                );
                cell.scale.set(1.0, 0.85 + Math.random() * 0.15, 1.0);
                cellGroup.add(cell);
                cells.push({
                    mesh: cell,
                    originalY: cell.position.y,
                    hydrated: false,
                    scaleSpeed: 1 + Math.random() * 2
                });
            }
        }

        cellGroup.rotation.x = 0.25;
        cellGroup.rotation.y = -0.3;
    } else {
        console.warn('Three.js not loaded. Dermal scanner running in 2D UI mode.');
        document.body.classList.add('no-threejs');
    }

    // Scanner Sweep Trigger
    let isScanning = false;
    
    startBtn.addEventListener('click', () => {
        if (isScanning) return;
        isScanning = true;
        
        // Sound sweep start
        playSynthTone(120, 0.2, 'sawtooth');
        setTimeout(() => playSynthTone(240, 0.1, 'sine'), 150);

        startBtn.classList.add('active');
        readout.classList.remove('active');
        
        // Reset cells
        if (hasThree) {
            cells.forEach(c => {
                c.hydrated = false;
                c.mesh.material.color.setHex(0x8C857E);
                c.mesh.material.roughness = 0.8;
                c.mesh.material.opacity = 0.6;
                c.mesh.scale.set(1.0, 0.85 + Math.random() * 0.15, 1.0);
            });
        }

        // Determine final stats based on controls
        let targetTurgor = 0;
        let targetDensity = 0;

        if (selectedClimate === 'arid') {
            targetTurgor = selectedDeficiency === 'dehydrated' ? 78 : 65;
            targetDensity = selectedFocus === 'plumping' ? 84 : 76;
        } else { // humid
            targetTurgor = selectedDeficiency === 'dehydrated' ? 94 : 88;
            targetDensity = selectedFocus === 'plumping' ? 98 : 92;
        }

        // Animate scanner sweep line overlay
        sweepLine.style.opacity = '1';
        gsap.fromTo(sweepLine, 
            { top: '-5px' }, 
            { 
                top: '100%', 
                duration: 2.8, 
                ease: 'power1.inOut',
                onUpdate: () => {
                    if (hasThree) {
                        const pixels = parseFloat(sweepLine.style.top);
                        const progress = pixels / 100;
                        const sweepY = 1.0 - progress;
                        
                        cells.forEach(c => {
                            const normalizedCellY = (c.originalY + 0.9) / 1.8;
                            if (!c.hydrated && normalizedCellY >= sweepY) {
                                c.hydrated = true;
                                hydrateCell(c);
                            }
                        });
                    }
                },
                onComplete: () => {
                    sweepLine.style.opacity = '0';
                    isScanning = false;
                    startBtn.classList.remove('active');
                    
                    // Display readout & count up stats
                    readout.classList.add('active');
                    countUpStat(turgorText, targetTurgor);
                    countUpStat(densityText, targetDensity);
                    
                    // Completion chime
                    playSynthTone(320, 0.15, 'sine');
                    setTimeout(() => playSynthTone(480, 0.25, 'sine'), 120);
                }
            }
        );
    });

    function hydrateCell(c) {
        if (!hasThree) return;
        playSynthTone(600 + Math.random() * 200, 0.02, 'sine', 0.05);

        // Transition cell material properties
        gsap.to(c.mesh.material.color, { r: 0.83, g: 0.69, b: 0.35, duration: 0.8 });
        gsap.to(c.mesh.material, { roughness: 0.15, opacity: 0.9, duration: 0.8 });
        
        // Plump scale shape
        gsap.to(c.mesh.scale, { 
            x: 1.3, 
            y: 1.3, 
            z: 1.3, 
            duration: 0.8, 
            ease: 'elastic.out(1, 0.5)'
        });
    }

    function countUpStat(element, target) {
        gsap.fromTo(element, 
            { innerText: 0 }, 
            { 
                innerText: target, 
                duration: 1.5, 
                snap: { innerText: 1 },
                onUpdate: () => {
                    element.innerText = `+${element.innerText}%`;
                }
            }
        );
    }

    // Render loop
    if (hasThree) {
        function animate(t) {
            requestAnimationFrame(animate);
            cellGroup.rotation.y = -0.3 + Math.sin(t * 0.0005) * 0.08;
            cells.forEach(c => {
                if (c.hydrated) {
                    const pulse = 1.3 + Math.sin(t * 0.002 * c.scaleSpeed) * 0.05;
                    c.mesh.scale.set(pulse, pulse, pulse);
                }
            });
            renderer.render(scene, camera);
        }
        animate(0);
    }

    // Resize & dynamic scale adjustment
    function adjustScannerScale() {
        if (!hasThree) return;
        const aspect = width / height;
        if (aspect < 1.0) {
            const scale = Math.max(0.7, aspect * 0.95);
            cellGroup.scale.set(scale, scale, scale);
        } else {
            cellGroup.scale.set(1.0, 1.0, 1.0);
        }
    }
    adjustScannerScale();

    window.addEventListener('resize', () => {
        width = container.clientWidth;
        height = container.clientHeight;
        if (hasThree) {
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
            adjustScannerScale();
        }
    });
}

/* ==========================================================================
   10. CHRONOLOGICAL ROUTINE LAYERING BUILDER (Drag & Drop)
   ========================================================================== */
function initRitualBuilder() {
    const pool = document.getElementById('ritualPool');
    const timeline = document.getElementById('ritualTimeline');
    const durationText = document.getElementById('ritualDuration');
    const densityText = document.getElementById('ritualDensity');
    const harmonyText = document.getElementById('ritualHarmony');
    const curveCanvas = document.getElementById('densityCurveCanvas');
    if (!pool || !timeline || !curveCanvas) return;

    const ctx = curveCanvas.getContext('2d');
    
    // Resize curve canvas
    function resizeCurve() {
        curveCanvas.width = curveCanvas.clientWidth;
        curveCanvas.height = curveCanvas.clientHeight;
        drawDensityCurve([]);
    }
    window.addEventListener('resize', resizeCurve);
    resizeCurve();

    // Map notes to frequencies
    const noteFreqs = {
        'C4': 261.63,
        'E4': 329.63,
        'G4': 392.00,
        'C5': 523.25
    };

    // Mobile-friendly card insertion helper
    function addCardToTimeline(card) {
        // Check if the card is already in the timeline (limit duplicates for clean ritual)
        const existingInTimeline = timeline.querySelector(`[data-id="${card.getAttribute('data-id')}"]`);
        if (existingInTimeline) {
            playSynthTone(120, 0.15, 'triangle', 0.2); // error buzz
            return;
        }

        // Hide empty message
        const emptyMsg = timeline.querySelector('.timeline-empty-message');
        if (emptyMsg) emptyMsg.style.display = 'none';

        // Clone card for the timeline
        const clone = card.cloneNode(true);
        clone.classList.remove('dragging');
        clone.removeAttribute('tabindex'); // Slotted steps don't need pool keyboard focus
        clone.removeAttribute('aria-label');
        
        // Remove handle and drag listeners since it's now slotted
        clone.removeAttribute('draggable');
        
        // Clicking a card in the timeline removes it
        clone.addEventListener('click', () => {
            clone.remove();
            
            // Synth bubble click on remove
            playSynthTone(220, 0.06, 'sine', 0.12);
            
            updateTimelineAnalytics();
            
            // Show empty message if timeline is cleared
            if (timeline.children.length === 0 || 
               (timeline.children.length === 1 && timeline.querySelector('.timeline-empty-message'))) {
                if (emptyMsg) emptyMsg.style.display = 'block';
            }
        });

        timeline.appendChild(clone);

        // Success vs Error chime placing feedback
        const placedCards = Array.from(timeline.querySelectorAll('.ritual-card'));
        const idx = placedCards.length - 1;
        const correctOrder = ['cleanser', 'toner', 'serum', 'cream'];
        const isCorrect = clone.getAttribute('data-id') === correctOrder[idx];

        if (isCorrect) {
            // Success arpeggio chime
            const freq = noteFreqs[clone.getAttribute('data-note')] || 300;
            playSynthTone(freq, 0.4, 'sine', 0.15);
            setTimeout(() => playSynthTone(freq * 1.5, 0.2, 'sine', 0.08), 80);
        } else {
            // Error buzz
            playSynthTone(130, 0.25, 'triangle', 0.2);
        }

        updateTimelineAnalytics();
    }

    // Drag-and-Drop / Click-to-Add Event Bindings
    const cards = pool.querySelectorAll('.ritual-card');
    cards.forEach(card => {
        card.addEventListener('dragstart', () => {
            card.classList.add('dragging');
            
            // Play quick tactile hover click
            const freq = noteFreqs[card.getAttribute('data-note')] || 200;
            playSynthTone(freq, 0.08, 'sine', 0.1);
        });

        card.addEventListener('dragend', () => {
            card.classList.remove('dragging');
        });

        // Click-to-add fallback for mobile touchscreens (or fast click on desktop)
        card.addEventListener('click', () => {
            addCardToTimeline(card);
        });

        // Keyboard accessible activation
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                addCardToTimeline(card);
            }
        });
    });

    timeline.addEventListener('dragover', (e) => {
        e.preventDefault();
        timeline.classList.add('drag-over');
    });

    timeline.addEventListener('dragleave', () => {
        timeline.classList.remove('drag-over');
    });

    timeline.addEventListener('drop', (e) => {
        e.preventDefault();
        timeline.classList.remove('drag-over');

        const draggingCard = document.querySelector('.dragging');
        if (!draggingCard) return;

        addCardToTimeline(draggingCard);
    });

    // Update stats and draw the curve
    function updateTimelineAnalytics() {
        const placedCards = Array.from(timeline.querySelectorAll('.ritual-card'));
        
        let totalDuration = 0;
        let totalDensity = 0;
        let score = 0;

        // Correct luxury ritual sequence
        const correctOrder = ['cleanser', 'toner', 'serum', 'cream'];
        const currentOrder = placedCards.map(c => c.getAttribute('data-id'));

        placedCards.forEach((c, idx) => {
            totalDuration += parseFloat(c.getAttribute('data-duration'));
            totalDensity += 1.25; // 1.25g per layer

            // Visual validation highlights
            c.classList.remove('ritual-step-correct', 'ritual-step-incorrect');

            let statusBadge = c.querySelector('.ritual-status-badge');
            if (!statusBadge) {
                statusBadge = document.createElement('span');
                statusBadge.className = 'ritual-status-badge material-symbols-outlined';
                c.appendChild(statusBadge);
            }

            const isCorrect = c.getAttribute('data-id') === correctOrder[idx];
            if (isCorrect) {
                c.classList.add('ritual-step-correct');
                statusBadge.innerText = 'check_circle';
            } else {
                c.classList.add('ritual-step-incorrect');
                statusBadge.innerText = 'cancel';

                // Add shake on insertion if it hasn't shaken yet
                if (!c.classList.contains('has-shaken')) {
                    c.classList.add('shake', 'has-shaken');
                    c.addEventListener('animationend', () => {
                        c.classList.remove('shake');
                    }, { once: true });
                }
            }
        });

        // Calculate harmony score based on alignment to correct sequence
        if (currentOrder.length > 0) {
            let correctPlacements = 0;
            currentOrder.forEach((id, idx) => {
                const targetIdx = correctOrder.indexOf(id);
                if (targetIdx === idx) {
                    correctPlacements++;
                }
            });
            score = Math.round((correctPlacements / correctOrder.length) * 100);
        }

        // Count up stats
        gsap.to(durationText, {
            innerText: totalDuration,
            duration: 0.6,
            snap: { innerText: 0.1 },
            onUpdate: () => durationText.innerText = `${parseFloat(durationText.innerText).toFixed(1)} mins`
        });

        gsap.to(densityText, {
            innerText: totalDensity,
            duration: 0.6,
            snap: { innerText: 0.1 },
            onUpdate: () => densityText.innerText = `${parseFloat(densityText.innerText).toFixed(1)} g/cm²`
        });

        gsap.to(harmonyText, {
            innerText: score,
            duration: 0.8,
            snap: { innerText: 1 },
            onUpdate: () => harmonyText.innerText = `${harmonyText.innerText}%`
        });

        // Draw absorption curve
        drawDensityCurve(currentOrder);
    }

    function drawDensityCurve(order) {
        ctx.clearRect(0, 0, curveCanvas.width, curveCanvas.height);
        
        const w = curveCanvas.width;
        const h = curveCanvas.height;

        // Draw grid lines
        ctx.strokeStyle = 'rgba(232, 227, 219, 0.4)';
        ctx.lineWidth = 0.5;
        
        ctx.beginPath();
        for (let i = 1; i < 4; i++) {
            const x = (w / 4) * i;
            ctx.moveTo(x, 0);
            ctx.lineTo(x, h);
            
            const y = (h / 4) * i;
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
        }
        ctx.stroke();

        if (order.length === 0) {
            // Flat line at baseline
            ctx.strokeStyle = 'rgba(107, 101, 95, 0.2)';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(0, h - 15);
            ctx.lineTo(w, h - 15);
            ctx.stroke();
            return;
        }

        // Plot absorption density curve points
        const points = [];
        points.push({ x: 0, y: h - 15 }); // Start point

        // Correct order sequence is: cleanser -> toner -> serum -> cream
        // Each step has an ideal curve profile. If out of order, the curve spikes erratically.
        order.forEach((id, idx) => {
            const segmentWidth = w / (order.length + 1);
            const x = segmentWidth * (idx + 1);
            
            let y = h - 20; // default low
            if (id === 'cleanser') {
                y = h - 45; // Cleansing is light
            } else if (id === 'toner') {
                y = h - 70; // Preps receptors
            } else if (id === 'serum') {
                y = h - 98; // Peaks at serum saturation
            } else if (id === 'cream') {
                y = h - 85; // Stabilises at lipid protective coat
            }

            points.push({ x: x, y: y });
        });

        points.push({ x: w, y: order[order.length - 1] === 'cream' ? h - 75 : h - 15 }); // End point

        // Draw smooth Bezier curve through points
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        for (let i = 0; i < points.length - 1; i++) {
            const p1 = points[i];
            const p2 = points[i + 1];
            const xc = (p1.x + p2.x) / 2;
            const yc = (p1.y + p2.y) / 2;
            ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);
        }
        
        ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);

        // Stroke gold style
        ctx.strokeStyle = '#C5A059';
        ctx.lineWidth = 2.0;
        ctx.stroke();

        // Fill under curve
        ctx.lineTo(w, h);
        ctx.lineTo(0, h);
        ctx.closePath();
        
        const fillGradient = ctx.createLinearGradient(0, 0, 0, h);
        fillGradient.addColorStop(0, 'rgba(197, 160, 89, 0.12)');
        fillGradient.addColorStop(1, 'rgba(197, 160, 89, 0.0)');
        
        ctx.fillStyle = fillGradient;
        ctx.fill();
    }
}

// Web Audio API Global Tone Generator
let audioCtx = null;

function playSynthTone(freq, duration, type = 'sine', volume = 0.15) {
    try {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        
        // Resume context if suspended (browser safety protocol)
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }

        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

        // Luxury fluid envelope: instant attack, smooth exponential decay
        gainNode.gain.setValueAtTime(volume, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
        console.warn('Web Audio playback failed: ', e);
    }
}

/* ==========================================================================
   AETHER LUXURY MONOGRAM PRELOADER
   ========================================================================== */
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
    
    // Play warm chime arpeggio chord (C4 - E4 - G4 - C5)
    playSynthTone(261.63, 1.2, 'sine', 0.12);
    setTimeout(() => playSynthTone(329.63, 1.0, 'sine', 0.08), 120);
    setTimeout(() => playSynthTone(392.00, 0.8, 'sine', 0.08), 240);
    setTimeout(() => playSynthTone(523.25, 1.5, 'sine', 0.1), 360);
    
    gsap.to(preloader, {
        opacity: 0,
        duration: 1.2,
        ease: 'power3.inOut',
        onComplete: () => {
            preloader.style.visibility = 'hidden';
            // Trigger hero content load in animation
            const heroContent = document.querySelector('.hero-content');
            if (heroContent) heroContent.classList.add('loaded');
        }
    });
});

// Fallback preloader removal in case load takes too long
setTimeout(() => {
    const preloader = document.getElementById('preloader');
    if (preloader && preloader.style.visibility !== 'hidden') {
        gsap.to(preloader, {
            opacity: 0,
            duration: 1.0,
            onComplete: () => {
                preloader.style.visibility = 'hidden';
                const heroContent = document.querySelector('.hero-content');
                if (heroContent) heroContent.classList.add('loaded');
            }
        });
    }
}, 3500);

/* ==========================================================================
   AETHER CUSTOM AURA CURSOR TRAIL
   ========================================================================== */
function initAuraCursor() {
    const dotEl = document.getElementById('dotCursor');
    const auraEl = document.getElementById('auraCursor');
    if (!dotEl || !auraEl) return;
    
    let mouse = { x: 0, y: 0 };
    let dot = { x: 0, y: 0 };
    let aura = { x: 0, y: 0 };
    let lastMouse = { x: 0, y: 0 };
    let speed = 0;
    
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        
        // Activate cursor visibility
        if (!document.body.classList.contains('mouse-active')) {
            document.body.classList.add('mouse-active');
        }
    });
    
    function loop() {
        // Dot tracking (snappy)
        dot.x += (mouse.x - dot.x) * 0.35;
        dot.y += (mouse.y - dot.y) * 0.35;
        dotEl.style.left = `${dot.x}px`;
        dotEl.style.top = `${dot.y}px`;
        
        // Aura tracking (lazy momentum)
        let dx = mouse.x - aura.x;
        let dy = mouse.y - aura.y;
        aura.x += dx * 0.15;
        aura.y += dy * 0.15;
        
        // Stretch deformation based on movement speed
        let dist = Math.hypot(mouse.x - lastMouse.x, mouse.y - lastMouse.y);
        speed += (dist - speed) * 0.1;
        speed = Math.min(speed, 60); // limit extreme values
        
        let scaleX = 1 + speed * 0.015;
        let scaleY = 1 - speed * 0.008;
        let angle = Math.atan2(dy, dx) * 180 / Math.PI;
        
        auraEl.style.left = `${aura.x}px`;
        auraEl.style.top = `${aura.y}px`;
        
        if (auraEl.classList.contains('hovered')) {
            auraEl.style.transform = `translate(-50%, -50%) scale(1)`;
        } else {
            auraEl.style.transform = `translate(-50%, -50%) rotate(${angle}deg) scale(${scaleX}, ${scaleY})`;
        }
        
        lastMouse.x = mouse.x;
        lastMouse.y = mouse.y;
        
        requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
    
    // Bind hover scale triggers to clickable components
    function bindHoverListeners() {
        const hoverTargets = document.querySelectorAll('a, button, .option-pill, .ritual-card, [draggable="true"], .spectral-btn');
        hoverTargets.forEach(target => {
            target.removeEventListener('mouseenter', onHoverEnter);
            target.removeEventListener('mouseleave', onHoverLeave);
            target.addEventListener('mouseenter', onHoverEnter);
            target.addEventListener('mouseleave', onHoverLeave);
        });
    }
    
    function onHoverEnter() {
        dotEl.classList.add('hovered');
        auraEl.classList.add('hovered');
    }
    
    function onHoverLeave() {
        dotEl.classList.remove('hovered');
        auraEl.classList.remove('hovered');
    }
    
    bindHoverListeners();
    
    // Observe DOM changes to dynamic elements (Timeline, subscription drawer)
    const observer = new MutationObserver(bindHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });
}

/* ==========================================================================
   11. NEWSLETTER & CHECKOUT FLOW MANAGER
   ========================================================================== */
function initCheckoutModal() {
    // A. Newsletter Form Toast Notification
    const newsletterForm = document.getElementById('newsletterForm');
    const toast = document.getElementById('newsletterToast');
    
    if (newsletterForm && toast) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Show toast
            toast.classList.add('active');
            
            // Play positive notification chime
            playSynthTone(523.25, 0.15, 'sine', 0.1);
            setTimeout(() => playSynthTone(659.25, 0.25, 'sine', 0.08), 100);
            
            // Auto hide after 3 seconds
            setTimeout(() => {
                toast.classList.remove('active');
            }, 3000);
            
            // Clear input
            const input = newsletterForm.querySelector('.newsletter-input');
            if (input) input.value = '';
        });
    }

    // B. Mock Checkout Modal flow
    const overlay = document.getElementById('checkoutModalOverlay');
    const modal = document.getElementById('checkoutModal');
    const closeBtn = document.getElementById('closeCheckoutBtn');
    
    const activateBtn = document.getElementById('activateMembershipBtn');
    const oneTimeBtn = document.getElementById('oneTimePurchaseBtn');
    
    const form = document.getElementById('checkoutForm');
    const closeFinalBtn = document.getElementById('checkoutCloseFinalBtn');
    
    const step1 = document.getElementById('checkoutStep1');
    const step3 = document.getElementById('checkoutStep3');

    // Values to update in modal
    const summaryPrice = document.getElementById('summaryProductPrice');
    const summaryType = document.getElementById('summaryProductType');
    const summaryTax = document.getElementById('summaryTax');
    const summaryTotal = document.getElementById('summaryTotal');

    if (!overlay || !modal) return;

    const openCheckout = (isMembership) => {
        // Close subscription drawer
        const subDrawer = document.getElementById('subscriptionDrawer');
        const subOverlay = document.getElementById('subscriptionDrawerOverlay');
        if (subDrawer) subDrawer.classList.remove('active');
        if (subOverlay) subOverlay.classList.remove('active');

        // Set values dynamically based on selected product and frequency
        const prodData = PRODUCTS_DATA[currentDrawerProductId] || PRODUCTS_DATA['serum'];
        let priceValue = prodData.priceOneTime;
        let typeText = "One-time Purchase";
        
        if (isMembership) {
            // Read from frequency range selector
            const freqInput = document.getElementById('frequencyRangeInput');
            const freq = freqInput ? parseInt(freqInput.value) : 1;
            const tick = prodData.ticks[freq];
            
            priceValue = tick.priceNum;
            typeText = `${prodData.name} Glow Membership (${tick.cycle})`;
        }

        const taxValue = parseFloat((priceValue * 0.08).toFixed(2));
        const totalValue = parseFloat((priceValue + taxValue).toFixed(2));

        const summaryProductName = document.getElementById('summaryProductName');
        if (summaryProductName) summaryProductName.innerText = `${prodData.name} (${prodData.volume})`;
        if (summaryPrice) summaryPrice.innerText = `$${priceValue.toFixed(2)}`;
        if (summaryType) summaryType.innerText = typeText;
        if (summaryTax) summaryTax.innerText = `$${taxValue.toFixed(2)}`;
        if (summaryTotal) summaryTotal.innerText = `$${totalValue.toFixed(2)}`;

        // Reset steps
        if (step1) step1.classList.add('active');
        if (step3) step3.classList.remove('active');

        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Play slide open tone
        playSynthTone(220, 0.15, 'sine', 0.1);
    };

    if (activateBtn) {
        activateBtn.addEventListener('click', () => openCheckout(true));
    }
    if (oneTimeBtn) {
        // Strip previous listener by cloning and replacing
        oneTimeBtn.replaceWith(oneTimeBtn.cloneNode(true));
        const newOneTimeBtn = document.getElementById('oneTimePurchaseBtn');
        newOneTimeBtn.addEventListener('click', () => openCheckout(false));
    }

    const closeCheckout = () => {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeCheckout);
    if (closeFinalBtn) closeFinalBtn.addEventListener('click', closeCheckout);

    // Click outside modal to close
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeCheckout();
    });

    // Step 1 Form Submit goes directly to Step 3 (Success)
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (step1) step1.classList.remove('active');
            if (step3) step3.classList.add('active');
            
            // Play gorgeous success chime arpeggio (C5 -> E5 -> G5 -> C6)
            playSynthTone(523.25, 0.3, 'sine', 0.15);
            setTimeout(() => playSynthTone(659.25, 0.25, 'sine', 0.1), 80);
            setTimeout(() => playSynthTone(783.99, 0.2, 'sine', 0.1), 160);
            setTimeout(() => playSynthTone(1046.50, 0.4, 'sine', 0.12), 240);
        });
    }
}

/* ==========================================================================
   12. SCROLL SPY ACTIVE STATE TRACKER
   ========================================================================== */
function initScrollSpy() {
    const sections = [
        { id: 'hero', navId: '#hero' },
        { id: 'showcase', navId: '#showcase' },
        { id: 'scanner-section', navId: '#showcase' }, // Map scanner to Science
        { id: 'slider-section', navId: '#slider-section' },
        { id: 'ingredients', navId: '#ingredients' },
        { id: 'collection', navId: '#collection' },
        { id: 'ritual-section', navId: '#hero' } // Map ritual routine back to Ritual
    ];

    const menuLinks = document.querySelectorAll('.nav-links a');
    const bottomNavLinks = document.querySelectorAll('.mobile-bottom-nav a');

    const updateActiveNav = (activeNavId) => {
        // Helper to update links
        const updateLinksList = (links) => {
            links.forEach(link => {
                const href = link.getAttribute('href');
                if (href === activeNavId) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        };

        updateLinksList(menuLinks);
        updateLinksList(bottomNavLinks);
    };

    // Use IntersectionObserver to detect active sections
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -40% 0px', // Trigger when section occupies the central region
        threshold: 0
    };

    let visibleSections = new Map();

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                visibleSections.set(entry.target.id, entry.boundingClientRect.top);
            } else {
                visibleSections.delete(entry.target.id);
            }
        });

        if (visibleSections.size > 0) {
            // Find section that is closest to the top of the viewport
            let closestId = '';
            let minTop = Infinity;

            visibleSections.forEach((top, id) => {
                if (Math.abs(top) < minTop) {
                    minTop = Math.abs(top);
                    closestId = id;
                }
            });

            const match = sections.find(s => s.id === closestId);
            if (match) {
                updateActiveNav(match.navId);
            }
        }
    }, observerOptions);

    sections.forEach(s => {
        const el = document.getElementById(s.id);
        if (el) observer.observe(el);
    });
}
