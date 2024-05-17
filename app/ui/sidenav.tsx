import Link from 'next/link';
import NavLinks from '@/app/ui/nav-links';
import Image from 'next/image';

export default function SideNav() {
    return (
        <div className="flex h-full bg-[#f4f4f4] flex-col">
            <div className="flex flex-row items-center justify-center text-white mb-2 w-full rounded-md p-6 md:h-40">
                <Link
                    href="/"
                    className="relative flex items-center min-w-[250px] w-6/12 md:w-8/12 md:min-w-[200px] md:h-full"
                >
                    <Image
                        src="/logo.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        alt="Logo desktop test rakuten"
                    />
                </Link>
            </div>

            <div className="flex grow flex-col justify-between space-x-0 md:flex-col">
                <NavLinks />
                <div className="hidden h-auto w-full grow rounded-md bg-[#f4f4f4] md:block"></div>
            </div>
        </div>
    );
}
