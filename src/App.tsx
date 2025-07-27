import React, { useState, useEffect } from 'react';

import {
  Bookmark,
  Sparkles,
  Shield,
  Cloud,
  Smartphone,
  Search,
  Instagram,
  Youtube,
  Video,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Zap,
  Brain,
  Lock,
  Globe,
  Star,
  Play
} from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [rotatingWord, setRotatingWord] = useState('Creators');
  const words = ['Creators', 'Everyone', 'You', 'Marketers', 'Teams', 'Visionaries'];
  let wordIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      wordIndex = (wordIndex + 1) % words.length;
      setRotatingWord(words[wordIndex]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                <Bookmark className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-pulse"></div>
            </div>
            <span className="text-3xl font-black tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              SaveSense
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-all duration-300 font-medium tracking-wide">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-all duration-300 font-medium tracking-wide">Process</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-all duration-300 font-medium tracking-wide">About</a>
            <button className="relative group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold tracking-wide hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 overflow-hidden">
              <span className="relative z-10">Join Waitlist</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          <button 
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl mx-6 mt-4 md:hidden">
            <div className="px-6 py-6 space-y-4">
              <a href="#features" className="block text-gray-300 hover:text-white transition-colors font-medium">Features</a>
              <a href="#how-it-works" className="block text-gray-300 hover:text-white transition-colors font-medium">Process</a>
              <a href="#about" className="block text-gray-300 hover:text-white transition-colors font-medium">About</a>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold">
                Join Waitlist
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20 lg:py-32">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-8">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium text-gray-300">Join 10,000+ creators in the waitlist</span>
            </div>
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tight">
            <span className="block text-white">Never Lose</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Another Reel
            </span>
            <span className="block text-white">Again</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Collect, summarize, and search saved posts, videos, and clips from Instagram,
            YouTube, TikTok, and any app or website.
          </p>

          <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-12">
            <div className="relative group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-8 py-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 text-lg font-medium"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center space-x-2 group"
              >
                <span>Join Waitlist</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>

          <div className="flex justify-center items-center space-x-12 opacity-40">
            <Instagram className="w-10 h-10 text-white hover:opacity-100 transition-opacity cursor-pointer" />
            <Youtube className="w-10 h-10 text-white hover:opacity-100 transition-opacity cursor-pointer" />
            <Video className="w-10 h-10 text-white hover:opacity-100 transition-opacity cursor-pointer" />
          </div>
        </div>
      </section>

      {/* Why Choose Section - Completely Redesigned */}
     <section id="features" className="relative z-10 px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-sm font-bold text-blue-400 tracking-[0.2em] uppercase">Why SaveSense</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
              <span className="block text-white">Built for</span>
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {rotatingWord}
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
              Every feature designed with one goal: making your content discovery effortless and intelligent
            </p>
          </div>


          {/* Unique Feature Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Main Feature Card */}
            <div className="lg:col-span-2 group">
              <div className="relative h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-blue-500/30 transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">AI-Powered Intelligence</h3>
                      <p className="text-blue-400 font-medium">Smart Content Understanding</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Our advanced AI doesn't just save your reels, it understands them. Get intelligent summaries, 
                    automatic categorization, and contextual search that finds exactly what you're looking for.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 bg-white/5 rounded-full px-4 py-2">
                      <Sparkles className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-gray-300">Auto-tagging</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/5 rounded-full px-4 py-2">
                      <Search className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">Smart search</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Feature Card */}
            <div className="group">
              <div className="relative h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-purple-500/30 transition-all duration-500">
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"></div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Lightning Fast</h3>
                  <p className="text-gray-300 leading-relaxed flex-1">
                    Save any reel with a single click. Our mobile app work seamlessly across all platforms.
                  </p>
                  <div className="mt-6 flex items-center space-x-2 text-purple-400">
                    <Play className="w-4 h-4" />
                    <span className="text-sm font-medium">One-click saving</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="relative bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-500">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Cloud Sync</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Access your saved reels from any device. Everything syncs automatically and securely in the cloud.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="relative bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-orange-500/30 transition-all duration-500">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Privacy First</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Your content stays private. Enterprise-grade security with end-to-end encryption for all your saves.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-500">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Cross-Platform</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Works everywhere you do. Mobile app, and web dashboard all in perfect sync.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative z-10 px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-sm font-bold text-purple-400 tracking-[0.2em] uppercase">Simple Process</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Three Steps. 
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
               Infinite Ideas.
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Sign Up & Install",
                description: "Create your account and install our mobile app in under 30 seconds.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                step: "02",
                title: "Save with One Click",
                description: "Found an amazing reel? Just click our save button and it's instantly saved with AI-generated tags.",
                color: "from-purple-500 to-pink-500"
              },
              {
                step: "03",
                title: "Search & Rediscover",
                description: "Use our intelligent search to find any saved reel by content, mood, topic, or even visual elements.",
                color: "from-green-500 to-emerald-500"
              }
            ].map((step, index) => (
              <div key={index} className="relative group">
                <div className="text-center">
                  <div className="relative mb-8">
                    <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl font-black text-white">{step.step}</span>
                    </div>
                    {index < 2 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-white/20 to-transparent"></div>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Never Lose anything
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                 Again — Ready?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-10 font-light">
                Join the revolution of creators who never lose inspiring content again.
              </p>
              
              <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="relative group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-8 py-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 text-lg font-medium"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-2 bottom-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <span>Get Early Access</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex items-center space-x-3 mb-8 md:mb-0">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <Bookmark className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-3xl font-black tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                SaveSense
              </span>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end items-center space-x-8 text-gray-400">
              <a href="#about" className="hover:text-white transition-colors font-medium">About</a>
              <a href="#faq" className="hover:text-white transition-colors font-medium">FAQ</a>
              <a href="#terms" className="hover:text-white transition-colors font-medium">Terms</a>
              <a href="#privacy" className="hover:text-white transition-colors font-medium">Privacy</a>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-400 font-light">
              &copy; 2025 SaveSense. Never lose a reel again.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

export default App;