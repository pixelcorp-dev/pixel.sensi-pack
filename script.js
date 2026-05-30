// --- Custom Premium Trailing Aura Cursor Engine ---
const dot = document.querySelector('.custom-cursor-dot');
const outline = document.querySelector('.custom-cursor-outline');

window.addEventListener('mousemove', (e) => {
    // Precise instantaneous dot positioning
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    
    // Smooth frame trailing green aura ring
    outline.animate({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`
    }, { duration: 240, fill: "forwards" });
});

// Cursor Interactions for Custom Brand/Accent States
document.querySelectorAll('.premium-btn, .premium-card, .discord-btn').forEach(item => {
    item.addEventListener('mouseenter', () => {
        outline.style.width = '45px';
        outline.style.height = '45px';
        
        // Change trailing color ring dependent on selected class element
        if (item.classList.contains('discord-btn')) {
            outline.style.borderColor = '#5865F2';
        } else if (item.classList.contains('aura-btn') || item.querySelector('.bright-green-theme')) {
            outline.style.borderColor = '#39ff14';
        } else {
            outline.style.borderColor = '#00a030';
        }
    });
    item.addEventListener('mouseleave', () => {
        outline.style.width = '30px';
        outline.style.height = '30px';
        outline.style.borderColor = '#00a030';
    });
});

// --- Dynamic Radiant Green Aura Particles Canvas Engine ---
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class AuraParticle {
    constructor() { this.reset(); }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.3;
        this.speedY = -Math.random() * 0.3 - 0.1; // Elegant upward drifting energy aura
        this.alpha = Math.random() * 0.3 + 0.1;
    }
    update() {
        this.y += this.speedY;
        if (this.y < 0) this.reset();
    }
    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = '#39ff14';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#39ff14';
        ctx.fill();
        ctx.restore();
    }
}

for(let i=0; i < 45; i++) { particles.push(new AuraParticle()); }

function renderLoop() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(renderLoop);
}
renderLoop();

// --- Tactical Gaming Terminal Diagnostic Feeds ---
const viewport = document.getElementById('terminal-output');

function runLogStream(messages) {
    viewport.innerHTML = "";
    messages.forEach((msg, idx) => {
        setTimeout(() => {
            const row = document.createElement('div');
            row.style.marginBottom = '6px';
            row.innerHTML = `<span style="color:#39ff14;">&raquo;</span> ${msg}`;
            viewport.appendChild(row);
            viewport.scrollTop = viewport.scrollHeight;
        }, idx * 350);
    });
}

function runDebloater() {
    runLogStream([
        "TERMINATING NON-ESSENTIAL EMULATOR THREAD HANDLES...",
        "PURGING WINDOWS MOUSE INTERPOLATION BUFFER STRINGS...",
        "LOCKING RAW PROCESSING HEADSPACE FOR BLUESTACKS 5 EXECUTABLES...",
        "STAGING TERMINAL ROUTE COMPLETE. HOOKING GATEWAY LINK..."
    ]);
}

function runOptimiser() {
    runLogStream([
        "STAGING REGISTRY OPTIMIZATION FOR COMPATIBLE MOUSE DRIVERS...",
        "INJECTING AUTO-HEADSHOT X/Y MOUSE SENSITIVITY CONSTANTS...",
        "DETERMINING SYSTEM DPI RATIO VECTOR CORRECTIONS...",
        "STAGING TERMINAL ROUTE COMPLETE. HOOKING GATEWAY LINK..."
    ]);
}
