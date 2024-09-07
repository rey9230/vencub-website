import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from 'next/image'

export default function Header() {
    return (
        <header className="absolute w-full z-30" style={{ marginTop: '20px' }}> {/* Ajusta el valor de marginTop según tus necesidades */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Site branding */}
                    <div className="shrink-0 mr-4" data-aos="fade-up">
                        {/* Logo */}
                        <Link href="/" className="block" aria-label="Vencub">
                            <Image
                                src="/images/vencub2-logo.png" // Path to your image
                                alt="Vencub Logo"
                                width={240} // Adjust width as needed
                                height={240} // Adjust height as needed
                            />
                        </Link>
                    </div>

                    <MobileMenu />

                </div>
            </div>
        </header>
    )
}
