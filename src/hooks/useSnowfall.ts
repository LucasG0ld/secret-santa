import { useEffect, useRef } from 'react';

interface Snowflake {
    x: number;
    y: number;
    radius: number;
    speed: number;
    drift: number;
}

export function useSnowfall() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        const snowflakes: Snowflake[] = [];
        const numberOfSnowflakes = 50;

        // Create snowflakes
        for (let i = 0; i < numberOfSnowflakes; i++) {
            snowflakes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 1,
                speed: Math.random() * 0.5 + 0.2,
                drift: Math.random() * 0.5 - 0.25
            });
        }

        let animationFrameId: number;

        // Animation
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            snowflakes.forEach((snowflake) => {
                ctx.beginPath();
                ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(47, 79, 79, 0.15)';
                ctx.fill();

                // Update position
                snowflake.y += snowflake.speed;
                snowflake.x += snowflake.drift;

                // Reset snowflake if it goes off screen
                if (snowflake.y > canvas.height) {
                    snowflake.y = -10;
                    snowflake.x = Math.random() * canvas.width;
                }
                if (snowflake.x > canvas.width) {
                    snowflake.x = 0;
                }
                if (snowflake.x < 0) {
                    snowflake.x = canvas.width;
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', setCanvasSize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return canvasRef;
}
