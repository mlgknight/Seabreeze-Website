'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navItems = ['About', 'Services', 'Inquire'];

export default function Navigation() {
    const pathname = usePathname();

    return (
        <>
        <input
            id="mobile-menu-toggle"
            type="checkbox"
            className="peer/menu-toggle sr-only"
            aria-label="Toggle navigation menu"
        />
        <nav className="fixed top-0 left-0 z-50 w-full h-20 md:h-29 bg-[#F9F7F2]/80 backdrop-blur-md border-b border-[#2A2A2A]/5 transition-all duration-300">
            <div className="w-full h-full mx-auto px-6 lg:px-12 flex items-center justify-between">
                {/* Far Left: Main Logo Wrapper */}
                <Link href="/" aria-label="Home" className="relative flex items-center shrink-0 h-full w-48 md:w-64">
                    <Image
                        src="/Seabreeze_Strategies_Logo/no_background.png"
                        alt="Seabreeze Logo"
                        width={400}
                        height={200}
                        sizes="(max-width: 768px) 224px, (max-width: 1024px) 256px, 352px"
                        /* Absolute positioning allows the image to overflow the header without expanding it */
                        className="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer brightness-1 opacity-90 w-auto h-28 md:h-32 lg:h-44 max-w-none object-contain"
                        priority
                    />
                </Link>

                {/* Far Right: Mobile Header Toggle */}
                <div className="md:hidden flex items-center justify-end">
                    <label
                        htmlFor="mobile-menu-toggle"
                        className="relative z-10 -mr-2 flex size-[4.5rem] touch-manipulation items-center justify-center rounded-full border border-[#896447]/15 bg-[#f4ece4]/90 text-[#896447] shadow-[0_4px_16px_rgba(137,100,71,0.12)] transition-colors hover:bg-[#e0c3a4]/50"
                        aria-label="Open navigation menu"
                    >
                        <Menu className="size-8 stroke-[1.5px]" />
                    </label>
                </div>

                {/* Far Right: Desktop Nav Links */}
                <div className="hidden md:flex items-center justify-end gap-8 lg:gap-10 shrink-0">
                    {navItems.map((item) => {
                        const href = `/${item.toLowerCase()}`;
                        const isActive = pathname === href;
                        return (
                            <Link
                                key={item}
                                href={href}
                                className={`text-sm tracking-[0.3em] uppercase font-bold transition-all ${
                                    isActive
                                        ? 'underline decoration-primary underline-offset-4 text-black'
                                        : 'text-stone-600 hover:text-black'
                                }`}
                                aria-current={isActive ? 'page' : undefined}
                            >
                                {item}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>

            <div
                id="mobile-navigation"
                className="pointer-events-none fixed inset-0 z-[100] hidden min-h-[100dvh] w-full flex-col items-center bg-[#F9F7F2] px-6 pb-12 pt-[calc(env(safe-area-inset-top)+6rem)] peer-checked/menu-toggle:pointer-events-auto peer-checked/menu-toggle:flex"
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
            >
                <label
                    htmlFor="mobile-menu-toggle"
                    className="absolute right-6 top-[calc(env(safe-area-inset-top)+1rem)] flex size-14 touch-manipulation items-center justify-center rounded-full border border-[#896447]/15 bg-white/60 text-[#896447] shadow-sm transition-colors hover:bg-[#e0c3a4]/50"
                    aria-label="Close navigation menu"
                >
                    <X className="size-8" />
                </label>
                <nav className="flex w-full flex-col items-center gap-8">
                    <Link
                        href="/"
                        aria-label="Home"
                        className="mb-2"
                    >
                        <Image
                            src="/Seabreeze_Strategies_Logo/no_background2.png"
                            alt="Seabreeze Strategies"
                            width={100}
                            height={100}
                            className="grayscale brightness-0"
                        />
                    </Link>
                    {navItems.map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className="py-2 text-2xl font-bold uppercase tracking-[0.3em] text-[#896447] transition-colors hover:text-[#735739]"
                            aria-current={pathname === `/${item.toLowerCase()}` ? 'page' : undefined}
                        >
                            {item}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
}