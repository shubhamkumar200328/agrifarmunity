'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';

interface Props {
  direction?: 'row' | 'column';
}

const NavItems = ({ direction = 'row' }: Props) => {
  const pathname = usePathname();
  const { isSignedIn } = useUser(); // Hook replaces SignedIn / SignedOut

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/servicesoffered' },
    { label: 'Communities', href: '/community' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <ul
      className={`flex ${direction === 'row' ? 'flex-row gap-8 items-center' : 'flex-col gap-6'}`}
    >
      {navItems.map(({ label, href }) => (
        <li key={label}>
          <Link
            href={href}
            className={pathname === href ? 'text-green-600 font-semibold' : ''}
          >
            {label}
          </Link>
        </li>
      ))}

      {!isSignedIn && (
        <li>
          <SignInButton>
            <button className="px-4 py-2 bg-green-600 text-white rounded">
              Sign In
            </button>
          </SignInButton>
        </li>
      )}

      {isSignedIn && (
        <li>
          <UserButton />
        </li>
      )}
    </ul>
  );
};

export default NavItems;
