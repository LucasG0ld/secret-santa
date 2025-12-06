'use client';

import { useSnowfall } from '../../hooks/useSnowfall';

export function SnowfallEffect() {
    const canvasRef = useSnowfall();

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ mixBlendMode: 'multiply' }}
        />
    );
}
