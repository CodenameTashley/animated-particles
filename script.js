// Configuration
const particleCount = 170;
const minSpeed = 0.5;
const maxSpeed = 0.75;
const minSize = 1;
const maxSize = 3;
const backgroundColor = '#fff';

// Create canvas and context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Add fullscreen button
const fullscreenButton = document.getElementById('fullscreen');
fullscreenButton.addEventListener('click', toggleFullScreen);

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        canvas.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

// Define particle colors
const colors = [
    '#ff0000', // red
    '#ffff00', // yellow
    '#00ff00', // green

    '#00ff7f', // spring green
    '#f0e68c', // khaki
    '#ffd700', // gold
    '#00bfff', // deep sky blue
    '#ff4500', // orange red
    '#ff0000', // red
    '#ffff00', // yellow
    '#00ff00', // green
    '#0000ff', // blue
    '#800080', // purple
    '#ffa500', // orange
    '#00ffff', // cyan
    '#ff69b4', // pink
    '#808080', // gray
    '#ffffff', // white
    '#ff00ff', // magenta
    '#00ff7f', // spring green
    '#f0e68c', // khaki
    '#ffd700', // gold
    '#00bfff', // deep sky blue
    '#ff4500', // orange red
    '#8f00ff', // electric purple
    '#ffa500', // orange
    '#00bfff', // deep sky blue
    '#ff1493', // deep pink
    '#8b008b', // dark magenta
    '#00fa9a', // medium spring green
    '#ff69b4', // hot pink
    '#e6e6fa' // lavender
];

// Create particles
const particles = [];
for (let i = 0; i < particleCount; i++) {
    const colorIndex = Math.floor(Math.random() * colors.length);
    const color = colors[colorIndex];

    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() * (maxSpeed - minSpeed)) + minSpeed,
        vy: (Math.random() * (maxSpeed - minSpeed)) + minSpeed,
        size: (Math.random() * (maxSize - minSize)) + minSize,
        color: color
    });
}

// Animation loop
function animate() {
    // Clear canvas
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
            particle.vx *= -1;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
            particle.vy *= -1;
        }

        // Draw particle
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    });

    // Request next frame
    requestAnimationFrame(animate);
}
animate();