import React, { useState, useEffect } from 'react';
import {
  Bookmark, Sparkles, Cloud, Lock, Globe, Instagram, Youtube, Video,
  ArrowRight, Menu, X, Zap, Brain, Star, Play, Search
} from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Creators", "Everyone", "You", "Marketers", "Teams", "Visionaries"];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
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
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                <Bookmark className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-pulse"></div>
            </div>
            <span className="text-3xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              SaveSense
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white">Process</a>
            <a href="#about" className="text-gray-300 hover:text-white">About</a>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg">
              Join Waitlist
            </button>
          </div>

          <button className="md:hidden text-white p-2 rounded-lg hover:bg-white/10" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 border border-white/10 rounded-2xl mx-6 mt-4 md:hidden">
            <div className="px-6 py-6 space-y-4">
              <a href="#features" className="block text-gray-300 hover:text-white">Features</a>
              <a href="#how-it-works" className="block text-gray-300 hover:text-white">Process</a>
              <a href="#about" className="block text-gray-300 hover:text-white">About</a>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold">
                Join Waitlist
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 lg:py-32 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center bg-white/5 border border-white/10 rounded-full px-6 py-3 mb-8">
            <Star className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-sm font-medium text-gray-300">Join 10,000+ creators in the waitlist</span>
          </div>
          <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-[0.9]">
            <span className="block text-white">Never Lose</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Another Reel
            </span>
            <span className="block text-white">Again</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Collect, summarize, and search saved posts, videos, and clips from Instagram,
            YouTube, TikTok, and any app or website.
          </p>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-12">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 rounded-xl font-semibold flex items-center"
              >
                <span>Join Waitlist</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </form>
          <div className="flex justify-center items-center space-x-12 opacity-40">
            <Instagram className="w-10 h-10 text-white" />
            <Youtube className="w-10 h-10 text-white" />
            <Video className="w-10 h-10 text-white" />
          </div>
        </div>
      </section>

      {/* Why SaveSense */}
      <section id="features" className="px-6 py-32 text-center relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-sm font-bold text-blue-400 tracking-[0.2em] uppercase">Why SaveSense</span>
            <h2 className="text-5xl lg:text-7xl font-black mt-4">
              <span className="block text-white">Built for</span>
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {words[wordIndex]}
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mt-6">
              Every feature designed with one goal: making your content discovery effortless and intelligent.
            </p>
          </div>
        </div>
      </section>

      {/* Add your remaining sections like How it Works, CTA, Footer here */}

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default App;