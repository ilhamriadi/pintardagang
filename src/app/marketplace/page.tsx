"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  ShoppingCart, 
  Heart, 
  Star, 
  Filter,
  Grid,
  List,
  Store,
  MapPin,
  Clock,
  TrendingUp,
  Package,
  DollarSign,
  Users,
  ChevronRight
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [viewMode, setViewMode] = useState("grid");

  // Mock data for products
  const products = [
    {
      id: 1,
      name: "Batik Tulis Premium - Motif Kawung",
      store: "Batik Nusantara",
      price: 450000,
      originalPrice: 600000,
      rating: 4.8,
      reviews: 124,
      sales: 89,
      image: "/api/placeholder/300/300",
      category: "Fashion",
      location: "Yogyakarta",
      badge: "Best Seller",
      featured: true
    },
    {
      id: 2,
      name: "Kerajinan Tangan Anyaman Bambu",
      store: "Kreasi Indonesia",
      price: 125000,
      rating: 4.6,
      reviews: 89,
      sales: 45,
      image: "/api/placeholder/300/300",
      category: "Kerajinan",
      location: "Bali",
      badge: "Eco-Friendly"
    },
    {
      id: 3,
      name: "Kopi Arabika Gayo Premium 1kg",
      store: "Kopi Aceh",
      price: 185000,
      originalPrice: 220000,
      rating: 4.9,
      reviews: 256,
      sales: 201,
      image: "/api/placeholder/300/300",
      category: "Makanan & Minuman",
      location: "Aceh",
      badge: "Terlaris",
      featured: true
    },
    {
      id: 4,
      name: "Tenun Songket Lombok",
      store: "Tenun Lombok",
      price: 1200000,
      rating: 5.0,
      reviews: 67,
      sales: 23,
      image: "/api/placeholder/300/300",
      category: "Fashion",
      location: "Lombok",
      badge: "Premium"
    },
    {
      id: 5,
      name: "Madu Hutan Sumbawa 500ml",
      store: "Madu Nusantara",
      price: 95000,
      rating: 4.7,
      reviews: 178,
      sales: 156,
      image: "/api/placeholder/300/300",
      category: "Kesehatan",
      location: "NTB",
      badge: "Organik"
    },
    {
      id: 6,
      name: "Wayang Kulit Ramayana Set",
      store: "Seni Jawa",
      price: 2500000,
      rating: 4.9,
      reviews: 34,
      sales: 12,
      image: "/api/placeholder/300/300",
      category: "Seni & Budaya",
      location: "Surakarta",
      badge: "Heritage"
    }
  ];

  // Mock data for stores
  const stores = [
    {
      id: 1,
      name: "Batik Nusantara",
      description: "Spesialis batik tulis berkualitas tinggi dari berbagai daerah",
      logo: "/api/placeholder/100/100",
      products: 156,
      rating: 4.8,
      location: "Yogyakarta",
      verified: true,
      badge: "Official Store"
    },
    {
      id: 2,
      name: "Kopi Aceh",
      description: "Kopi premium langsung dari petani lokal",
      logo: "/api/placeholder/100/100",
      products: 89,
      rating: 4.9,
      location: "Aceh",
      verified: true,
      badge: "Top Rated"
    },
    {
      id: 3,
      name: "Kreasi Indonesia",
      description: "Kerajinan tangan khas Indonesia dengan desain modern",
      logo: "/api/placeholder/100/100",
      products: 234,
      rating: 4.6,
      location: "Bali",
      verified: false
    }
  ];

  const categories = [
    { id: "all", name: "Semua Kategori", icon: Package },
    { id: "fashion", name: "Fashion", icon: Package },
    { id: "makanan", name: "Makanan & Minuman", icon: Package },
    { id: "kerajinan", name: "Kerajinan", icon: Package },
    { id: "kesehatan", name: "Kesehatan", icon: Package },
    { id: "seni", name: "Seni & Budaya", icon: Package },
    { id: "elektronik", name: "Elektronik", icon: Package },
    { id: "lainnya", name: "Lainnya", icon: Package }
  ];

  const sortOptions = [
    { value: "popular", label: "Terpopuler" },
    { value: "newest", label: "Terbaru" },
    { value: "price-low", label: "Harga Terendah" },
    { value: "price-high", label: "Harga Tertinggi" },
    { value: "rating", label: "Rating Tertinggi" },
    { value: "sales", label: "Terlaris" }
  ];

  const ProductCard = ({ product }: { product: typeof products[0] }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative">
        <div className="aspect-square overflow-hidden bg-muted">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        {product.badge && (
          <Badge className="absolute top-2 left-2" variant="secondary">
            {product.badge}
          </Badge>
        )}
        <Button 
          size="icon" 
          variant="ghost" 
          className="absolute top-2 right-2 h-8 w-8 bg-background/80 hover:bg-background"
        >
          <Heart className="h-4 w-4" />
        </Button>
        {product.originalPrice && (
          <Badge className="absolute bottom-2 left-2 bg-red-500">
            {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Store className="h-3 w-3" />
            <span>{product.store}</span>
            <MapPin className="h-3 w-3 ml-2" />
            <span>{product.location}</span>
          </div>
          <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-sm text-muted-foreground">({product.reviews})</span>
            <span className="text-sm text-muted-foreground">• {product.sales} terjual</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-primary">
              Rp {product.price.toLocaleString('id-ID')}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                Rp {product.originalPrice.toLocaleString('id-ID')}
              </span>
            )}
          </div>
        </div>
        <div className="flex space-x-2 mt-4">
          <Button className="flex-1" size="sm">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Keranjang
          </Button>
          <Button variant="outline" size="sm">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const StoreCard = ({ store }: { store: typeof stores[0] }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <img 
              src={store.logo} 
              alt={store.name}
              className="w-16 h-16 rounded-lg object-cover"
            />
            {store.verified && (
              <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-primary rounded-full flex items-center justify-center">
                <span className="text-xs text-primary-foreground">✓</span>
              </div>
            )}
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold">{store.name}</h3>
              {store.badge && (
                <Badge variant="secondary" className="text-xs">
                  {store.badge}
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {store.description}
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <MapPin className="h-3 w-3" />
                <span>{store.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Package className="h-3 w-3" />
                <span>{store.products} produk</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span>{store.rating}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-2 mt-4">
          <Button className="flex-1" variant="outline" size="sm">
            Kunjungi Toko
          </Button>
          <Button size="sm">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        {/* Hero Section */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl font-bold mb-4">
                  Marketplace UMKM Indonesia
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Temukan produk berkualitas dari UMKM terbaik seluruh Indonesia. 
                  Dukung ekonomi lokal dengan berbelanja produk autentik.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <Store className="h-5 w-5 text-primary" />
                    <span className="font-semibold">10,000+ Toko</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Package className="h-5 w-5 text-primary" />
                    <span className="font-semibold">100,000+ Produk</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="font-semibold">50,000+ Penjual</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center p-4">
                  <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold">85%</div>
                  <div className="text-sm text-muted-foreground">Penjual Naik Omzet</div>
                </Card>
                <Card className="text-center p-4">
                  <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold">4.8</div>
                  <div className="text-sm text-muted-foreground">Rating Rata-rata</div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Cari produk, toko, atau kategori..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Kategori" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Urutkan" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <div className="flex border rounded-md">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <Tabs defaultValue="products" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-96">
            <TabsTrigger value="products">Produk</TabsTrigger>
            <TabsTrigger value="stores">Toko</TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="space-y-6">
            {/* Featured Products */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Produk Unggulan</h2>
                <Button variant="ghost" className="text-primary">
                  Lihat Semua
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.filter(p => p.featured).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>

            {/* All Products */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Semua Produk</h2>
                <p className="text-muted-foreground">
                  Menampilkan {products.length} produk
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          </TabsContent>

          <TabsContent value="stores" className="space-y-6">
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Toko Rekomendasi</h2>
                <p className="text-muted-foreground">
                  Menampilkan {stores.length} toko
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stores.map((store) => (
                  <StoreCard key={store.id} store={store} />
                ))}
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
}