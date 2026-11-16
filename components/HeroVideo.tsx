'use client';

import { useEffect, useRef } from 'react';

export default function HeroVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        const connection = (navigator as Navigator & {
            connection?: EventTarget & { saveData?: boolean };
        }).connection;

        const updatePlayback = () => {
            if (reducedMotion.matches || connection?.saveData) {
                video.pause();
                video.removeAttribute('src');
                video.load();
                return;
            }

            if (!video.hasAttribute('src')) {
                video.src = '/videos/beach2-optimized.mp4';
            }
            void video.play().catch(() => {
                // The poster remains visible if the browser blocks autoplay.
            });
        };

        updatePlayback();
        reducedMotion.addEventListener('change', updatePlayback);
        connection?.addEventListener('change', updatePlayback);

        return () => {
            reducedMotion.removeEventListener('change', updatePlayback);
            connection?.removeEventListener('change', updatePlayback);
            video.pause();
            video.removeAttribute('src');
            video.load();
        };
    }, []);

    return (
        <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload='none'
            poster='/videos/beach2-poster.jpg'
            aria-hidden='true'
            className='absolute inset-0 w-full h-full object-cover'
        />
    );
}
