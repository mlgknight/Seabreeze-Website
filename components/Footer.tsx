import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className='w-full border-2 border-card'>

            {/* Main footer content */}
            <div className='w-full bg-secondary text-secondary-foreground px-10 py-12'>
                <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12'>

                    {/* Brand column */}
                    <div className='flex flex-col gap-3 md:w-1/3'>
                        <div className='flex items-center gap-3'>
                            <Image
                                src='/Seabreeze_Strategies_Logo/no_background2.png'
                                alt='Logo' 
                                width={500}
                                height={500}
                                className='w-40 h-40 drop-shadow-lg shrink-0'
                                priority
                            />
                            <span className='text-lg font-semibold leading-tight'>
                                Seabreeze<br />Strategies
                            </span>
                        </div>
                        <p className='text-sm opacity-70 leading-relaxed max-w-xs'>
                            Guiding businesses through the digits, one connection at a time.
                        </p>
                    </div>

                    {/* Right side: Nav + Contact */}
                    <div className='flex flex-col md:flex-row gap-16 md:w-2/3 justify-end'>

                        {/* Nav column */}
                        <section className='flex flex-col gap-3'>
                            <h3 className='text-sm font-semibold uppercase tracking-widest opacity-60'>
                                Navigation
                            </h3>
                            <nav className='flex flex-col gap-2'>
                                {[
                                    { label: 'Home', href: '/' },
                                    { label: 'About', href: '/about' },
                                    { label: 'Services', href: '/services' },
                                    { label: 'Portfolio', href: '/portfolio' },
                                    { label: 'Blog', href: '/blog' },
                                ].map(({ label, href }) => (
                                    <Link
                                        key={label}
                                        href={href}
                                        className='text-sm opacity-80 hover:opacity-100 transition-opacity duration-200'
                                    >
                                        {label}
                                    </Link>
                                ))}
                            </nav>
                        </section>

                        {/* Contact column */}
                        <section className='flex flex-col gap-3'>
                            <h3 className='text-sm font-semibold uppercase tracking-widest opacity-60'>
                                Contact
                            </h3>
                            <div className='flex flex-col gap-2 text-sm'>
                                <a
                                    href='mailto:hello@seabreezestrategies.com'
                                    className='opacity-80 hover:opacity-100 transition-opacity duration-200'
                                >
                                    hello@seabreezestrategies.com
                                </a>

                                <a
                                    href='tel:+19105550123'
                                    className='opacity-80 hover:opacity-100 transition-opacity duration-200'
                                >
                                    (321) 339-9807
                                </a>

                                <p className='opacity-60 leading-relaxed'>
                                    Wilmington, NC
                                </p>
                            </div>

                            {/* Social links */}
                            <div className='flex gap-4 mt-1'>
                                {[
                                    { label: 'LinkedIn', href: 'https://linkedin.com' },
                                    { label: 'Instagram', href: 'https://instagram.com' },
                                    { label: 'Facebook', href: 'https://facebook.com' },
                                ].map(({ label, href }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-xs font-medium uppercase tracking-wide opacity-60 hover:opacity-100 transition-opacity duration-200'
                                    >
                                        {label}
                                    </a>
                                ))}
                            </div>
                        </section>

                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className='w-full bg-primary text-primary-foreground px-10 py-4'>
                <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-1'>
                    <p className='text-sm font-oldstandard'>
                        © {year} Seabreeze Strategies
                    </p>
                    <p className='text-xs font-light opacity-70'>
                        Crafting digital success, one wave at a time.
                    </p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
