import Link from "next/link";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Store,
  GraduationCap,
  Heart,
  Shield,
  Truck,
  Award
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "Tentang Kami", href: "/about" },
        { name: "Cara Kerja", href: "/how-it-works" },
        { name: "Karir", href: "/careers" },
        { name: "Blog", href: "/blog" },
        { name: "Press", href: "/press" },
      ]
    },
    {
      title: "Layanan",
      links: [
        { name: "Marketplace", href: "/marketplace" },
        { name: "Edukasi", href: "/edukasi" },
        { name: "Filantropi", href: "/filantropi" },
        { name: "Buka Toko", href: "/store/register" },
        { name: "Menjadi Instruktur", href: "/edukasi/instructor" },
      ]
    },
    {
      title: "Bantuan",
      links: [
        { name: "Pusat Bantuan", href: "/help" },
        { name: "FAQ", href: "/faq" },
        { name: "Kebijakan Privasi", href: "/privacy" },
        { name: "Syarat & Ketentuan", href: "/terms" },
        { name: "Hubungi Kami", href: "/contact" },
      ]
    },
    {
      title: "Fitur",
      links: [
        { name: "Keamanan Bertransaksi", href: "/security" },
        { name: "Pengiriman", href: "/shipping" },
        { name: "Pembayaran", href: "/payment" },
        { name: "Pengembalian", href: "/returns" },
        { name: "Program Afiliasi", href: "/affiliate" },
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const features = [
    { icon: Shield, title: "100% Aman", description: "Transaksi aman dan terjamin" },
    { icon: Truck, title: "Pengiriman Cepat", description: "Hingga 24 jam di kota besar" },
    { icon: Award, title: "Bergaransi", description: "Produk dan layanan berkualitas" },
  ];

  return (
    <footer className="bg-muted/50 border-t">
      {/* Features Bar */}
      <div className="border-b bg-background">
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Store className="h-4 w-4" />
              </div>
              <span className="font-bold text-lg">PintarDagang</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6">
              Super app ekosistem ekonomi kreatif yang mengintegrasikan Marketplace, Edukasi, dan Filantropi dalam satu platform.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-2">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border bg-background hover:bg-muted transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@pintardagang.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>0800-1234-5678</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Platform Stats */}
        <div className="mt-12 pt-8 border-t">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Store className="h-5 w-5 text-primary" />
                <span className="text-2xl font-bold">10K+</span>
              </div>
              <p className="text-sm text-muted-foreground">Toko Aktif</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                <span className="text-2xl font-bold">500+</span>
              </div>
              <p className="text-sm text-muted-foreground">Kursus Online</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Heart className="h-5 w-5 text-primary" />
                <span className="text-2xl font-bold">1M+</span>
              </div>
              <p className="text-sm text-muted-foreground">Donasi Terkumpul</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-2xl font-bold">100K+</span>
              </div>
              <p className="text-sm text-muted-foreground">Pengguna Puas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t bg-background">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} PintarDagang. Hak Cipta Dilindungi.
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Kebijakan Privasi
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Syarat & Ketentuan
              </Link>
              <Link href="/cookies" className="hover:text-foreground transition-colors">
                Kebijakan Cookie
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}