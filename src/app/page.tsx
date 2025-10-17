import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  ShoppingCart, 
  GraduationCap, 
  Heart, 
  TrendingUp,
  Users,
  Star,
  Shield,
  Zap,
  Globe,
  Award,
  Target,
  Lightbulb,
  HandHeart,
  Store,
  BookOpen,
  Gift
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  const features = [
    {
      icon: Shield,
      title: "100% Aman",
      description: "Transaksi aman dengan sistem keamanan berlapis"
    },
    {
      icon: Zap,
      title: "Cepat & Mudah",
      description: "Platform responsif dengan user experience terbaik"
    },
    {
      icon: Globe,
      title: "Jangkauan Luas",
      description: "Menghubungkan UMKM dengan pasar global"
    },
    {
      icon: Award,
      title: "Bergaransi",
      description: "Produk dan layanan berkualitas terjamin"
    }
  ];

  const modules = [
    {
      title: "Marketplace",
      description: "Jual beli produk UMKM dengan mudah dan aman. Dari produk lokal hingga internasional.",
      icon: ShoppingCart,
      color: "bg-blue-500",
      features: ["Toko Digital", "Sistem Pembayaran", "Manajemen Pesanan", "Rating & Review"],
      stats: { label: "10K+ Toko Aktif", value: "10,000+" },
      href: "/marketplace"
    },
    {
      title: "Edukasi",
      description: "Platform pembelajaran online dengan kursus berkualitas dari instruktur profesional.",
      icon: GraduationCap,
      color: "bg-green-500",
      features: ["Kursus Online", "Sertifikat", "Live Session", "Progress Tracking"],
      stats: { label: "500+ Kursus", value: "500+" },
      href: "/edukasi"
    },
    {
      title: "Filantropi",
      description: "Wadah untuk donasi dan kampanye sosial yang berdampak positif bagi masyarakat.",
      icon: Heart,
      color: "bg-red-500",
      features: ["Kampanye Donasi", "Transparansi", "Update Real-time", "Tax Deductible"],
      stats: { label: "Rp 1M+ Terkumpul", value: "1M+" },
      href: "/filantropi"
    }
  ];

  const stats = [
    { label: "Pengguna Aktif", value: "100K+", icon: Users },
    { label: "Transaksi Sukses", value: "1M+", icon: TrendingUp },
    { label: "Rating Rata-rata", value: "4.8/5", icon: Star },
    { label: "Terverifikasi", value: "ISO 27001", icon: Shield },
  ];

  const testimonials = [
    {
      name: "Sarah Wijaya",
      role: "Pemilik Toko Batik",
      content: "PintarDagang membantu saya mengembangkan usaha batik keluarga. Omzet naik 300% dalam 6 bulan!",
      avatar: "SW",
      rating: 5
    },
    {
      name: "Budi Santoso",
      role: "Instruktur Digital Marketing",
      content: "Platform edukasi yang luar biasa. Saya bisa berbagi ilmu dan mendapatkan penghasilan tambahan.",
      avatar: "BS",
      rating: 5
    },
    {
      name: "Maya Putri",
      role: "Donatur Aktif",
      content: "Saya percaya donasi melalui PintarDagang karena transparan dan berdampak langsung.",
      avatar: "MP",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container py-20 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <Badge variant="secondary" className="w-fit">
                  🚀 Super App Ekonomi Kreatif
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  Wujudkan Potensi Anda di
                  <span className="text-primary"> Satu Ekosistem</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Platform terintegrasi yang menghubungkan UMKM, pendidikan, dan filantropi. 
                  Dari berjualan, belajar, hingga berbagi - semua dalam satu aplikasi.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8 py-6" asChild>
                    <Link href="/auth/register">
                      Mulai Sekarang
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                    <Link href="/about">
                      Pelajari Lebih Lanjut
                    </Link>
                  </Button>
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <stat.icon className="h-5 w-5 text-primary mr-2" />
                        <span className="text-2xl font-bold">{stat.value}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {modules.map((module, index) => (
                    <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                      <div className={`absolute inset-0 ${module.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                      <CardHeader className="pb-3">
                        <div className={`w-12 h-12 rounded-lg ${module.color} bg-opacity-10 flex items-center justify-center mb-3`}>
                          <module.icon className={`h-6 w-6 ${module.color.replace('bg-', 'text-')}`} />
                        </div>
                        <CardTitle className="text-lg">{module.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-3">{module.description}</p>
                        <div className="text-lg font-bold text-primary">{module.stats.value}</div>
                        <p className="text-xs text-muted-foreground">{module.stats.label}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Mengapa Memilih <span className="text-primary">PintarDagang?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Platform yang dirancang untuk mendukung pertumbuhan ekonomi kreatif Indonesia
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Modules Showcase */}
        <section className="py-20">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="secondary" className="w-fit mx-auto">
                <Target className="w-3 h-3 mr-1" />
                Tiga Pilar Utama
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold">
                Ekosistem <span className="text-primary">Terintegrasi</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Satu platform untuk semua kebutuhan ekonomi kreatif Anda
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {modules.map((module, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className={`h-2 ${module.color}`}></div>
                  <CardHeader className="text-center pb-6">
                    <div className={`w-20 h-20 rounded-2xl ${module.color} bg-opacity-10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <module.icon className={`h-10 w-10 ${module.color.replace('bg-', 'text-')}`} />
                    </div>
                    <CardTitle className="text-2xl mb-2">{module.title}</CardTitle>
                    <CardDescription className="text-base">
                      {module.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-3">
                      {module.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">{module.stats.value}</div>
                      <div className="text-sm text-muted-foreground">{module.stats.label}</div>
                    </div>
                    
                    <Button className="w-full" asChild>
                      <Link href={module.href}>
                        Jelajahi {module.title}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="secondary" className="w-fit mx-auto">
                <Lightbulb className="w-3 h-3 mr-1" />
                Cara Kerja
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold">
                Mulai dalam <span className="text-primary">3 Langkah Mudah</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Bergabunglah dengan ribuan pengguna yang telah merasakan manfaatnya
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Daftar Gratis",
                  description: "Buat akun dalam hitungan menit. Verifikasi identitas Anda untuk keamanan.",
                  icon: Users
                },
                {
                  step: "2", 
                  title: "Pilih Modul",
                  description: "Jual produk di Marketplace, buat kursus, atau mulai kampanye donasi.",
                  icon: Target
                },
                {
                  step: "3",
                  title: "Mulai Bertumbuh",
                  description: "Kelola bisnis Anda, pantau perkembangan, dan raih kesuksesan.",
                  icon: TrendingUp
                }
              ].map((item, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto">
                      {item.step}
                    </div>
                    {index < 2 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2"></div>
                    )}
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="secondary" className="w-fit mx-auto">
                <Star className="w-3 h-3 mr-1" />
                Testimoni
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold">
                Apa Kata <span className="text-primary">Pengguna Kami</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Kisah sukses dari komunitas PintarDagang
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-semibold text-primary">
                          {testimonial.avatar}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container text-center space-y-8">
            <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
              <Gift className="w-3 h-3 mr-1" />
              Promo Spesial
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Siap Meraih Kesuksesan Anda?
            </h2>
            <p className="text-lg max-w-2xl mx-auto opacity-90">
              Bergabunglah sekarang dan dapatkan akses gratis ke semua fitur premium selama 30 hari. 
              Tanpa biaya tersembunyi, tanpa risiko.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                <Link href="/auth/register">
                  Daftar Gratis Sekarang
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="/demo">
                  Request Demo
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}