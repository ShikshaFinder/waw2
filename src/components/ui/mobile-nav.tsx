import * as React from "react";
import Link from "next/link";
import { Button } from "./button";
import { usePathname } from "next/navigation";

interface MobileNavProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  navigation: Array<{ name: string; href: string }>;
}

export function MobileNav({
  mobileMenuOpen,
  setMobileMenuOpen,
  navigation,
}: MobileNavProps) {
  const pathname = usePathname();

  if (!mobileMenuOpen) return null;

  return (
    <div className="relative">
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[999] bg-black/30"
        aria-hidden="true"
        onClick={() => setMobileMenuOpen(false)}
      />
      {/* Mobile menu */}
      <div className="fixed inset-y-0 right-0 z-[1000] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              WomenWork
            </span>
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                    pathname === item.href
                      ? "text-purple-600"
                      : "text-gray-900 hover:bg-gray-50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="py-6">
              <Button
                className="w-full bg-purple-600 hover:bg-purple-700"
                asChild
              >
                <Link href="/form">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
