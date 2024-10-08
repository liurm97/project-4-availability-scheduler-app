"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  NavigationMenu,
  // NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function NavBar() {
  return (
    <div className="w-screen bg-zinc-950">
      <div className="container flex justify-between items-center px-5 md:px-20 py-5">
        <div className="hover:cursor-pointer">
          <Link href="/" legacyBehavior passHref data-testid="logo">
            <Image
              src="/logo.svg"
              width={110}
              height={110}
              alt="Gather logo"
              loading="lazy"
              data-testid="logo"
            />
          </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="flex gap-8">
              <Link href="/#faq" legacyBehavior passHref>
                <NavigationMenuLink
                  className="text-gray-500 hover:text-gray-200 transition-all text-sm lg:text-base"
                  data-testid="faq-link"
                >
                  How to use
                </NavigationMenuLink>
              </Link>
              <Link
                href="https://donate.stripe.com/4gw6rbb8O6TDglGfZ0"
                legacyBehavior
                passHref
              >
                <NavigationMenuLink
                  className="text-gray-500 hover:text-gray-200 transition-all text-sm lg:text-base"
                  data-testid="donate-link"
                >
                  Donate
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
