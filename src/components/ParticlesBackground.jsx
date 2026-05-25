import { useEffect, useRef } from "react";

const ParticlesBackground = ({ darkMode }) => {

  const canvasRef = useRef(null);

  useEffect(() => {

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particlesArray = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const mouse = {
      x: null,
      y: null,
      radius: 120,
    };

    window.addEventListener("mousemove", (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    class Particle {

      constructor(x, y, directionX, directionY, size, color) {

        this.x = x;
        this.y = y;

        this.directionX = directionX;
        this.directionY = directionY;

        this.size = size;
        this.color = color;
      }

      draw() {

        ctx.beginPath();

        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);

        ctx.fillStyle = this.color;

        ctx.fill();
      }

      update() {

        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }

        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        this.x += this.directionX;
        this.y += this.directionY;

        this.draw();
      }
    }

    function init() {

      particlesArray = [];

      const numberOfParticles =
        (canvas.width * canvas.height) / 14000;

      for (let i = 0; i < numberOfParticles; i++) {

        const size = Math.random() * 2 + 1;

        const x =
          Math.random() * (innerWidth - size * 2);

        const y =
          Math.random() * (innerHeight - size * 2);

        const directionX =
          (Math.random() * 0.5) - 0.25;

        const directionY =
          (Math.random() * 0.5) - 0.25;

        const color = darkMode
          ? "rgba(255,255,255,0.9)"
          : "rgba(0,0,0,0.8)";

        particlesArray.push(
          new Particle(
            x,
            y,
            directionX,
            directionY,
            size,
            color
          )
        );
      }
    }

    function connect() {

      let opacityValue = 1;

      for (let a = 0; a < particlesArray.length; a++) {

        for (let b = a; b < particlesArray.length; b++) {

          const distance =
            ((particlesArray[a].x - particlesArray[b].x) *
              (particlesArray[a].x - particlesArray[b].x))
            +
            ((particlesArray[a].y - particlesArray[b].y) *
              (particlesArray[a].y - particlesArray[b].y));

          if (distance < 15000) {

            opacityValue = 1 - (distance / 15000);

            ctx.strokeStyle = darkMode
              ? `rgba(255,0,0,${opacityValue * 0.3})`
              : `rgba(0,0,0,${opacityValue * 0.2})`;

            ctx.lineWidth = 1;

            ctx.beginPath();

            ctx.moveTo(
              particlesArray[a].x,
              particlesArray[a].y
            );

            ctx.lineTo(
              particlesArray[b].x,
              particlesArray[b].y
            );

            ctx.stroke();
          }
        }
      }
    }

    function animate() {

      requestAnimationFrame(animate);

      ctx.clearRect(0, 0, innerWidth, innerHeight);

      for (let i = 0; i < particlesArray.length; i++) {

        particlesArray[i].update();
      }

      connect();
    }

    init();
    animate();

    window.addEventListener("resize", () => {

      canvas.width = innerWidth;
      canvas.height = innerHeight;

      init();
    });

  }, [darkMode]);

  return (

    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
    />
  );
};

export default ParticlesBackground;