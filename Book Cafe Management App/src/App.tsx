import { useState } from "react";
import { Coffee, BookOpen, Shield, ArrowRight, Sparkles, TrendingUp, Users, ChevronDown } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import CafeDashboard from "./components/CafeDashboard";
import BooksDashboard from "./components/BooksDashboard";
import AdminDashboard from "./components/AdminDashboard";

export default function App() {
  const [currentView, setCurrentView] = useState<"home" | "cafe" | "books" | "admin">("home");

  if (currentView === "cafe") {
    return <CafeDashboard onBack={() => setCurrentView("home")} />;
  }

  if (currentView === "books") {
    return <BooksDashboard onBack={() => setCurrentView("home")} />;
  }

  if (currentView === "admin") {
    return <AdminDashboard onBack={() => setCurrentView("home")} />;
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950 via-neutral-950 to-indigo-950" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-8">
              <Badge variant="outline" className="border-amber-500/50 text-amber-400 bg-amber-950/30 backdrop-blur-xl px-6 py-2 inline-flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Next-Gen Management Platform
              </Badge>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl tracking-tight">
                <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Book Cafe
                </span>
                <br />
                <span className="text-white">Management</span>
              </h1>
              
              <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                Elevate your book cafe experience with an all-in-one platform designed for 
                modern operations. From orders to analytics, manage everything seamlessly.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-6 group"
                  onClick={() => {
                    document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-neutral-700 bg-neutral-900/50 backdrop-blur-xl hover:bg-neutral-800 px-8 py-6"
                >
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-20">
              <div className="bg-neutral-900/50 backdrop-blur-xl border border-neutral-800 rounded-2xl p-6 text-center">
                <div className="text-4xl text-amber-400 mb-2">99.9%</div>
                <div className="text-neutral-500">Uptime</div>
              </div>
              <div className="bg-neutral-900/50 backdrop-blur-xl border border-neutral-800 rounded-2xl p-6 text-center">
                <div className="text-4xl text-indigo-400 mb-2">500+</div>
                <div className="text-neutral-500">Active Users</div>
              </div>
              <div className="bg-neutral-900/50 backdrop-blur-xl border border-neutral-800 rounded-2xl p-6 text-center">
                <div className="text-4xl text-rose-400 mb-2">24/7</div>
                <div className="text-neutral-500">Support</div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-neutral-600" />
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section id="modules" className="relative py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <Badge variant="outline" className="border-indigo-500/50 text-indigo-400 bg-indigo-950/30 backdrop-blur-xl px-4 py-2 mb-6">
              Three Powerful Modules
            </Badge>
            <h2 className="text-5xl md:text-6xl mb-6">
              <span className="bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                Choose Your Dashboard
              </span>
            </h2>
            <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
              Access specialized tools designed for each aspect of your business
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cafe Card */}
            <div 
              className="group relative cursor-pointer"
              onClick={() => setCurrentView("cafe")}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              <Card className="relative bg-neutral-900/80 backdrop-blur-xl border-neutral-800 hover:border-amber-500/50 rounded-3xl overflow-hidden transition-all duration-500 group-hover:scale-[1.02]">
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1516197227520-4d1c419f6ec6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2ZmZWUlMjBzaG9wJTIwYWVzdGhldGljfGVufDF8fHx8MTc2MTM4MzAzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Cafe"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent" />
                  <div className="absolute top-6 right-6 w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                    <Coffee className="w-7 h-7 text-white" />
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl text-white mb-3">Cafe Management</h3>
                  <p className="text-neutral-400 mb-6 leading-relaxed">
                    Real-time order tracking, menu management, and table reservations at your fingertips
                  </p>
                  <Button 
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white group-hover:translate-x-1 transition-transform"
                  >
                    Launch Dashboard
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            </div>

            {/* Books Card */}
            <div 
              className="group relative cursor-pointer"
              onClick={() => setCurrentView("books")}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              <Card className="relative bg-neutral-900/80 backdrop-blur-xl border-neutral-800 hover:border-indigo-500/50 rounded-3xl overflow-hidden transition-all duration-500 group-hover:scale-[1.02]">
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1582133776712-0b942f3ef601?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYm9vayUyMHN0b3JlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxMzgzMDM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Books"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent" />
                  <div className="absolute top-6 right-6 w-14 h-14 bg-indigo-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                    <BookOpen className="w-7 h-7 text-white" />
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl text-white mb-3">Books Management</h3>
                  <p className="text-neutral-400 mb-6 leading-relaxed">
                    Comprehensive inventory control, category organization, and sales analytics
                  </p>
                  <Button 
                    className="w-full bg-indigo-500 hover:bg-indigo-600 text-white group-hover:translate-x-1 transition-transform"
                  >
                    Launch Dashboard
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            </div>

            {/* Admin Card */}
            <div 
              className="group relative cursor-pointer"
              onClick={() => setCurrentView("admin")}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              <Card className="relative bg-neutral-900/80 backdrop-blur-xl border-neutral-800 hover:border-slate-500/50 rounded-3xl overflow-hidden transition-all duration-500 group-hover:scale-[1.02]">
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxMTczMTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Admin"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent" />
                  <div className="absolute top-6 right-6 w-14 h-14 bg-slate-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl text-white mb-3">Admin Dashboard</h3>
                  <p className="text-neutral-400 mb-6 leading-relaxed">
                    Advanced analytics, staff oversight, and comprehensive reporting tools
                  </p>
                  <Button 
                    className="w-full bg-slate-500 hover:bg-slate-600 text-white group-hover:translate-x-1 transition-transform"
                  >
                    Launch Dashboard
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <Badge variant="outline" className="border-rose-500/50 text-rose-400 bg-rose-950/30 backdrop-blur-xl px-4 py-2 mb-6">
              Powerful Features
            </Badge>
            <h2 className="text-5xl md:text-6xl mb-6">
              <span className="bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                Built for Excellence
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-900/50 backdrop-blur-xl border border-neutral-800 rounded-3xl p-8 hover:border-amber-500/50 transition-all duration-500 group">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl text-white mb-4">Real-time Analytics</h3>
              <p className="text-neutral-400 leading-relaxed">
                Monitor performance metrics and gain actionable insights with live data visualization and reporting
              </p>
            </div>

            <div className="bg-neutral-900/50 backdrop-blur-xl border border-neutral-800 rounded-3xl p-8 hover:border-indigo-500/50 transition-all duration-500 group">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl text-white mb-4">Smart Automation</h3>
              <p className="text-neutral-400 leading-relaxed">
                Automate inventory tracking, low-stock alerts, and order management to save time and reduce errors
              </p>
            </div>

            <div className="bg-neutral-900/50 backdrop-blur-xl border border-neutral-800 rounded-3xl p-8 hover:border-slate-500/50 transition-all duration-500 group">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl text-white mb-4">Team Collaboration</h3>
              <p className="text-neutral-400 leading-relaxed">
                Seamless coordination with role-based access, shift management, and instant communication tools
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-neutral-800">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Coffee className="w-6 h-6 text-amber-500" />
              <span className="text-xl text-white">Book Cafe Manager</span>
            </div>
            <p className="text-neutral-500">© 2025 All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
