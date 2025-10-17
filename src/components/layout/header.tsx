"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  ShoppingCart, 
  GraduationCap, 
  Heart, 
  Menu, 
  Search, 
  Bell, 
  User,
  Store,
  BookOpen,
  HandHeart,
  Package,
  MessageCircle,
  Wallet
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/components/auth-context";
import { LoginForm } from "@/components/login-form";

export function Header() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { user, logout, isLoading } = useAuth();

  const navigationItems = [
    {
      title: "Marketplace",
      href: "/marketplace",
      icon: ShoppingCart,
      description: "Jual beli produk UMKM",
      badge: "Hot",
      subItems: [
        { title: "Semua Produk", href: "/marketplace" },
        { title: "Kategori", href: "/marketplace/categories" },
        { title: "Toko Saya", href: "/store" },
        { title: "Pesanan", href: "/orders" },
      ]
    },
    {
      title: "Edukasi",
      href: "/edukasi",
      icon: GraduationCap,
      description: "Kursus online berkualitas",
      badge: "New",
      subItems: [
        { title: "Semua Kursus", href: "/edukasi" },
        { title: "Kategori Kursus", href: "/edukasi/categories" },
        { title: "Kelas Saya", href: "/edukasi/my-courses" },
        { title: "Menjadi Instruktur", href: "/edukasi/instructor" },
      ]
    },
    {
      title: "Filantropi",
      href: "/filantropi",
      icon: Heart,
      description: "Donasi dan kampanye sosial",
      subItems: [
        { title: "Semua Kampanye", href: "/filantropi" },
        { title: "Kategori", href: "/filantropi/categories" },
        { title: "Donasi Saya", href: "/filantropi/my-donations" },
        { title: "Buat Kampanye", href: "/filantropi/create" },
      ]
    },
  ];

  const userMenuItems = [
    { title: "Profil Saya", href: "/profile", icon: User },
    { title: "Dompet", href: "/wallet", icon: Wallet },
    { title: "Pesan", href: "/messages", icon: MessageCircle },
    { title: "Pesanan", href: "/orders", icon: Package },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Store className="h-4 w-4" />
          </div>
          <span className="hidden font-bold sm:inline-block">
            PintarDagang
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger className="h-9">
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.title}
                  {item.badge && (
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {item.badge}
                    </Badge>
                  )}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <div className="col-span-2">
                      <h4 className="mb-2 text-lg font-semibold leading-none">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    {item.subItems.map((subItem) => (
                      <NavigationMenuLink key={subItem.title} asChild>
                        <Link
                          href={subItem.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            {subItem.title}
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-4 hidden lg:block">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Cari produk, kursus, atau kampanye..."
              className="w-full pl-8 pr-4 py-2 text-sm bg-muted border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-2">
          {/* Notification */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </Button>

          {/* Cart */}
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </Button>

          {/* User Menu */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/avatars/01.png" alt="@user" />
                    <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {userMenuItems.map((item) => (
                  <DropdownMenuItem key={item.title} asChild>
                    <Link href={item.href}>
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start p-0 h-auto"
                    onClick={logout}
                  >
                    Keluar
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center space-x-2">
              <Button variant="ghost" onClick={() => setShowLoginModal(true)}>
                Masuk
              </Button>
              <Button onClick={() => setShowLoginModal(true)}>
                Daftar
              </Button>
            </div>
          )}

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-4">
                <Link href="/" className="flex items-center space-x-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Store className="h-4 w-4" />
                  </div>
                  <span className="font-bold">PintarDagang</span>
                </Link>
                
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <input
                    type="search"
                    placeholder="Cari..."
                    className="w-full pl-8 pr-4 py-2 text-sm bg-muted border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <nav className="flex flex-col space-y-2">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                      {item.badge && (
                        <Badge variant="secondary" className="text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  ))}
                </nav>

                {!user && (
                  <div className="flex flex-col space-y-2 pt-4 border-t">
                    <Button variant="outline" onClick={() => setShowLoginModal(true)} className="w-full">
                      Masuk
                    </Button>
                    <Button onClick={() => setShowLoginModal(true)} className="w-full">
                      Daftar
                    </Button>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowLoginModal(false)} />
          <div className="relative z-10 w-full max-w-md mx-4">
            <LoginForm onClose={() => setShowLoginModal(false)} />
          </div>
        </div>
      )}
    </header>
  );
}