// --- Custom Premium Trailing Aura Cursor Engine ---
const dot = document.querySelector('.custom-cursor-dot');
const outline = document.querySelector('.custom-cursor-outline');

window.addEventListener('mousemove', (e) => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    
    outline.animate({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`
    }, { duration: 240, fill: "forwards" });
});

// Cursor Interactions for Custom UI Targets
document.querySelectorAll('.premium-btn, .premium-card, .discord-btn').forEach(item => {
    item.addEventListener('mouseenter', () => {
        outline.style.width = '45px';
        outline.style.height = '45px';
        
        if (item.classList.contains('discord-btn')) {
            outline.style.borderColor = '#5865F2';
        } else {
            outline.style.borderColor = '#39ff14';
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
        this.speedY = -Math.random() * 0.3 - 0.1; // Smooth upwards glowing matrix movement
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

for(let i=0; i < 40; i++) { particles.push(new AuraParticle()); }

function renderLoop() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(renderLoop);
}
renderLoop();

// --- Sensi Download Visual Logs System ---
const feed = document.getElementById('terminal-output');

function runSensiDownload() {
    feed.innerHTML = "PRE-PROCESSING: Locating master Registry payload configuration...";
    feed.style.color = "#39ff14";
    
    setTimeout(() => {
        feed.innerHTML = "INJECTING CONSTANTS: Mapping input parameters for mouse vectors...";
    }, 450);

    setTimeout(() => {
        feed.innerHTML = "SUCCESS: Opening secure file node mirror gateway.";
    }, 950);
}
