"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Search, 
  Play, 
  Clock, 
  Star, 
  Users,
  Filter,
  BookOpen,
  Award,
  TrendingUp,
  Calendar,
  DollarSign,
  CheckCircle,
  PlayCircle,
  User,
  BarChart,
  Target,
  Lightbulb,
  ChevronRight
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function EdukasiPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  // Mock data for courses
  const courses = [
    {
      id: 1,
      title: "Digital Marketing untuk UMKM",
      instructor: "Andi Wijaya",
      instructorAvatar: "/api/placeholder/100/100",
      description: "Pelajari strategi digital marketing efektif untuk mengembangkan bisnis UMKM Anda",
      price: 299000,
      originalPrice: 499000,
      rating: 4.8,
      reviews: 234,
      students: 1250,
      duration: 1200, // minutes
      level: "Pemula",
      category: "Bisnis",
      thumbnail: "/api/placeholder/400/200",
      badge: "Best Seller",
      featured: true,
      modules: 12,
      certificate: true,
      language: "Bahasa Indonesia"
    },
    {
      id: 2,
      title: "Web Development dengan React",
      instructor: "Sarah Chen",
      instructorAvatar: "/api/placeholder/100/100",
      description: "Master React.js dari dasar hingga mahir dengan project-based learning",
      price: 599000,
      rating: 4.9,
      reviews: 189,
      students: 890,
      duration: 2400,
      level: "Menengah",
      category: "Teknologi",
      thumbnail: "/api/placeholder/400/200",
      badge: "Premium",
      featured: true,
      modules: 24,
      certificate: true,
      language: "Bahasa Indonesia"
    },
    {
      id: 3,
      title: "Content Creation untuk Sosial Media",
      instructor: "Maya Putri",
      instructorAvatar: "/api/placeholder/100/100",
      description: "Buat konten viral dan tingkatkan engagement di sosial media",
      price: 199000,
      originalPrice: 299000,
      rating: 4.7,
      reviews: 156,
      students: 2100,
      duration: 900,
      level: "Pemula",
      category: "Marketing",
      thumbnail: "/api/placeholder/400/200",
      badge: "Populer",
      modules: 8,
      certificate: true,
      language: "Bahasa Indonesia"
    },
    {
      id: 4,
      title: "Financial Planning untuk Millennial",
      instructor: "Budi Santoso",
      instructorAvatar: "/api/placeholder/100/100",
      description: "Kelola keuangan pribadi dengan bijak untuk masa depan yang cerah",
      price: 249000,
      rating: 4.6,
      reviews: 98,
      students: 650,
      duration: 720,
      level: "Pemula",
      category: "Keuangan",
      thumbnail: "/api/placeholder/400/200",
      modules: 10,
      certificate: true,
      language: "Bahasa Indonesia"
    },
    {
      id: 5,
      title: "Photography Basics",
      instructor: "Rizky Ahmad",
      instructorAvatar: "/api/placeholder/100/100",
      description: "Pelajari teknik fotografi dasar hingga mahir",
      price: 349000,
      rating: 4.8,
      reviews: 145,
      students: 430,
      duration: 1500,
      level: "Pemula",
      category: "Desain",
      thumbnail: "/api/placeholder/400/200",
      badge: "New",
      modules: 15,
      certificate: true,
      language: "Bahasa Indonesia"
    },
    {
      id: 6,
      title: "Public Speaking Mastery",
      instructor: "Diana Kartika",
      instructorAvatar: "/api/placeholder/100/100",
      description: "Taklukkan rasa takut berbicara di depan umum",
      price: 449000,
      rating: 4.9,
      reviews: 267,
      students: 890,
      duration: 1080,
      level: "Menengah",
      category: "Personal Development",
      thumbnail: "/api/placeholder/400/200",
      badge: "Top Rated",
      featured: true,
      modules: 14,
      certificate: true,
      language: "Bahasa Indonesia"
    }
  ];

  // Mock data for my courses (enrolled courses)
  const myCourses = [
    {
      id: 1,
      title: "Digital Marketing untuk UMKM",
      instructor: "Andi Wijaya",
      progress: 65,
      totalModules: 12,
      completedModules: 8,
      lastAccessed: "2 hari yang lalu",
      thumbnail: "/api/placeholder/400/200",
      nextLesson: "SEO Optimization"
    },
    {
      id: 3,
      title: "Content Creation untuk Sosial Media",
      instructor: "Maya Putri",
      progress: 30,
      totalModules: 8,
      completedModules: 2,
      lastAccessed: "1 minggu yang lalu",
      thumbnail: "/api/placeholder/400/200",
      nextLesson: "Video Editing Basics"
    }
  ];

  const categories = [
    { id: "all", name: "Semua Kategori" },
    { id: "bisnis", name: "Bisnis" },
    { id: "teknologi", name: "Teknologi" },
    { id: "marketing", name: "Marketing" },
    { id: "keuangan", name: "Keuangan" },
    { id: "desain", name: "Desain" },
    { id: "personal", name: "Personal Development" },
    { id: "lainnya", name: "Lainnya" }
  ];

  const levels = [
    { id: "all", name: "Semua Level" },
    { id: "pemula", name: "Pemula" },
    { id: "menengah", name: "Menengah" },
    { id: "mahir", name: "Mahir" }
  ];

  const sortOptions = [
    { value: "popular", label: "Terpopuler" },
    { value: "newest", label: "Terbaru" },
    { value: "price-low", label: "Harga Terendah" },
    { value: "price-high", label: "Harga Tertinggi" },
    { value: "rating", label: "Rating Tertinggi" },
    { value: "students", label: "Pesanan Terbanyak" }
  ];

  const CourseCard = ({ course }: { course: typeof courses[0] }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative">
        <div className="aspect-video overflow-hidden bg-muted">
          <img 
            src={course.thumbnail} 
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button size="lg" className="bg-white text-black hover:bg-gray-100">
            <PlayCircle className="h-5 w-5 mr-2" />
            Preview
          </Button>
        </div>
        {course.badge && (
          <Badge className="absolute top-2 left-2" variant="secondary">
            {course.badge}
          </Badge>
        )}
        {course.originalPrice && (
          <Badge className="absolute bottom-2 left-2 bg-red-500">
            {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
          </Badge>
        )}
      </div>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Badge variant="outline">{course.category}</Badge>
            <Badge variant="outline">{course.level}</Badge>
            {course.certificate && (
              <Badge variant="outline" className="text-green-600 border-green-600">
                <Award className="h-3 w-3 mr-1" />
                Sertifikat
              </Badge>
            )}
          </div>
          
          <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          
          <p className="text-sm text-muted-foreground line-clamp-2">
            {course.description}
          </p>
          
          <div className="flex items-center space-x-2">
            <img 
              src={course.instructorAvatar} 
              alt={course.instructor}
              className="w-6 h-6 rounded-full"
            />
            <span className="text-sm font-medium">{course.instructor}</span>
          </div>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{course.rating}</span>
              <span>({course.reviews})</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{course.students.toLocaleString('id-ID')} siswa</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{Math.floor(course.duration / 60)} jam</span>
            </div>
            <div className="flex items-center space-x-1">
              <BookOpen className="h-4 w-4" />
              <span>{course.modules} modul</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-primary">
                Rp {course.price.toLocaleString('id-ID')}
              </span>
              {course.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  Rp {course.originalPrice.toLocaleString('id-ID')}
                </span>
              )}
            </div>
            <Button size="sm">
              Beli Kursus
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const MyCourseCard = ({ course }: { course: typeof myCourses[0] }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex space-x-4">
          <div className="relative w-32 h-20 flex-shrink-0">
            <img 
              src={course.thumbnail} 
              alt={course.title}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
              <Play className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="flex-1 space-y-2">
            <h3 className="font-semibold">{course.title}</h3>
            <p className="text-sm text-muted-foreground">{course.instructor}</p>
            <div className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span>Progress: {course.progress}%</span>
                <span>{course.completedModules}/{course.totalModules} modul</span>
              </div>
              <Progress value={course.progress} className="h-2" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Selanjutnya: {course.nextLesson}
              </span>
              <Button size="sm" variant="outline">
                Lanjutkan
              </Button>
            </div>
          </div>
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
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl font-bold mb-4">
                  Platform Edukasi Online Terpercaya
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Tingkatkan skills dan wujudkan potensi Anda dengan kursus online 
                  dari instruktur profesional berpengalaman.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span className="font-semibold">500+ Kursus</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="font-semibold">50,000+ Siswa</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Sertifikat Resmi</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center p-4">
                  <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold">92%</div>
                  <div className="text-sm text-muted-foreground">Tingkat Kelulusan</div>
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
                placeholder="Cari kursus, instruktur, atau topik..."
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
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  {levels.map((level) => (
                    <SelectItem key={level.id} value={level.id}>
                      {level.name}
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
            </div>
          </div>
        </section>

        {/* Main Content */}
        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-96">
            <TabsTrigger value="courses">Kursus</TabsTrigger>
            <TabsTrigger value="my-courses">Kelas Saya</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            {/* Featured Courses */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Kursus Unggulan</h2>
                <Button variant="ghost" className="text-primary">
                  Lihat Semua
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.filter(c => c.featured).map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </section>

            {/* All Courses */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Semua Kursus</h2>
                <p className="text-muted-foreground">
                  Menampilkan {courses.length} kursus
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </section>
          </TabsContent>

          <TabsContent value="my-courses" className="space-y-6">
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Kelas Saya</h2>
                <p className="text-muted-foreground">
                  {myCourses.length} kursus aktif
                </p>
              </div>
              <div className="space-y-4">
                {myCourses.map((course) => (
                  <MyCourseCard key={course.id} course={course} />
                ))}
              </div>
              {myCourses.length === 0 && (
                <Card className="text-center p-12">
                  <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Belum ada kursus</h3>
                  <p className="text-muted-foreground mb-4">
                    Mulai belajar dengan mengikuti kursus yang tersedia
                  </p>
                  <Button>
                    Jelajahi Kursus
                  </Button>
                </Card>
              )}
            </section>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
}