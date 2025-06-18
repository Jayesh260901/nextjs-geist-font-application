"use client"

import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-[#0288D1] to-[#0277BD] text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <Image 
              src="/rto-logo.svg" 
              alt="RTO Maharashtra Logo" 
              width={48} 
              height={48}
              className="rounded-lg shadow-sm"
            />
            <div>
              <h1 className="text-2xl font-bold tracking-wide">PARIVAHAN</h1>
              <p className="text-sm font-medium tracking-wider">SARATHI</p>
            </div>
          </Link>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-[#00695C] hover:bg-[#004D40] rounded-md transition-colors duration-200 shadow-sm font-medium">
              Change State
            </button>
            <button className="px-4 py-2 bg-[#00695C] hover:bg-[#004D40] rounded-md transition-colors duration-200 shadow-sm font-medium">
              Login
            </button>
          </div>
        </div>
        <div className="border-t border-white/10">
          <NavigationMenu className="py-2">
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <Link 
                  href="/learner-license" 
                  className="block px-4 py-2 text-sm font-medium hover:bg-white/10 rounded-md transition-colors"
                >
                  Learner License
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link 
                  href="/driving-license"
                  className="block px-4 py-2 text-sm font-medium hover:bg-white/10 rounded-md transition-colors"
                >
                  Driving License
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link 
                  href="/conductor-license"
                  className="block px-4 py-2 text-sm font-medium hover:bg-white/10 rounded-md transition-colors"
                >
                  Conductor License
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link 
                  href="/appointments"
                  className="block px-4 py-2 text-sm font-medium hover:bg-white/10 rounded-md transition-colors"
                >
                  Appointments
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link 
                  href="/upload-document"
                  className="block px-4 py-2 text-sm font-medium hover:bg-white/10 rounded-md transition-colors"
                >
                  Upload Document
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link 
                  href="/payments"
                  className="block px-4 py-2 text-sm font-medium hover:bg-white/10 rounded-md transition-colors"
                >
                  Fee Payments
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  )
}
