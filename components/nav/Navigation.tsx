'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

const navItems = ['About', 'Services', 'Inquire'];

export default function Navigation() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        /* Nav height is strictly controlled by h-16 or h-20 */
        <nav className="fixed top-0 left-0 z-50 w-full h-20 md:h-29 bg-[#F9F7F2]/80 backdrop-blur-md border-b border-[#2A2A2A]/5 transition-all duration-300">
            <div className="w-full h-full mx-auto px-6 lg:px-12 flex items-center justify-between">
                {/* Far Left: Main Logo Wrapper */}
                <Link href="/" aria-label="Home" className="relative flex items-center shrink-0 h-full w-48 md:w-64">
                    <Image
                        src="/Seabreeze_Strategies_Logo/no_background.png"
                        alt="Seabreeze Logo"
                        width={400}
                        height={200}
                        /* Absolute positioning allows the image to overflow the header without expanding it */
                        className="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer brightness-1 opacity-90 w-auto h-28 md:h-32 lg:h-44 max-w-none object-contain"
                        priority
                    />
                </Link>

                {/* Far Right: Mobile Header Toggle */}
                <div className="md:hidden flex items-center justify-end">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon-lg"
                                className="hover:bg-transparent -mr-2"
                                aria-label="Toggle menu"
                            >
                                <Menu className="h-6 w-6 stroke-[1.5px]" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="top"
                            className="w-full h-full bg-[#F9F7F2] border-none pt-24"
                        >
                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                            <nav className="flex flex-col items-center gap-10">
                                <Link href="/" aria-label="Home" onClick={() => setOpen(false)}>
                                    <Image
                                        src="/Seabreeze_Strategies_Logo/no_background2.png"
                                        alt="Logo"
                                        width={100}
                                        height={100}
                                        className="grayscale brightness-0 mb-8"
                                    />
                                </Link>
                                {navItems.map((item) => (
                                    <Link
                                        key={item}
                                        href={`/${item.toLowerCase()}`}
                                        onClick={() => setOpen(false)}
                                        className="text-3xl uppercase tracking-[0.4em] font-bold font-sans text-stone-600 hover:text-black transition-all"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
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
    );
}