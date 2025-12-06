'use client';

import { ReactNode } from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import { SnowfallEffect } from '../molecules/SnowfallEffect';
import { BackToTopOrnament } from '../molecules/BackToTopOrnament';
import { Toaster } from '../ui/sonner';
import dynamic from 'next/dynamic';

const MusicPlayer = dynamic(
    () => import('../molecules/MusicPlayer').then((mod) => mod.MusicPlayer),
    { ssr: false }
);

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    console.log('Rendering MainLayout');
    return (
        <div className="min-h-screen bg-[#F9F6F0] relative font-sans text-[#333]">
            <SnowfallEffect />
            <div className="relative z-10 flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </div>
            <BackToTopOrnament />
            <Toaster />
            <MusicPlayer />
        </div>
    );
};

export default MainLayout;
