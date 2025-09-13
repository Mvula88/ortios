'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  ChevronRight,
  Check,
  MapPin,
  Phone,
  Menu,
  X,
  Linkedin,
  Twitter,
} from 'lucide-react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', message: '' });
  };

  const platforms = [
    {
      id: 'credlio',
      name: 'Credlio',
      description: 'Trust-based borrower reputation & lending system',
      color: 'from-green-400 to-green-600',
      initial: 'C',
    },
    {
      id: 'tumalio',
      name: 'Tumalio',
      description: 'Freelance service marketplace',
      color: 'from-purple-400 to-purple-600',
      initial: 'T',
    },
    {
      id: 'japride',
      name: 'JapRide',
      description: 'Smart Japan car import platform',
      color: 'from-red-400 to-red-600',
      initial: 'J',
    },
  ];

  const values = [
    'Secure & scalable SaaS solutions built with modern technology',
    'Multi-market product strategy for maximum impact',
    'Deep focus on emerging markets and underserved industries',
    'Built with user feedback & continuous iteration',
    'Experienced team with proven track record in digital innovation',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Ortios LLC</h1>
            </div>
            <div className="hidden space-x-8 md:flex">
              <a href="#about" className="text-gray-700 transition hover:text-blue-600">
                About
              </a>
              <a href="#platforms" className="text-gray-700 transition hover:text-blue-600">
                Platforms
              </a>
              <a href="#why-ortios" className="text-gray-700 transition hover:text-blue-600">
                Why Ortios
              </a>
              <a href="#contact" className="text-gray-700 transition hover:text-blue-600">
                Contact
              </a>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="border-t bg-white md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                About
              </a>
              <a href="#platforms" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Platforms
              </a>
              <a href="#why-ortios" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Why Ortios
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
            Building the Future of Digital Marketplaces & SaaS Innovation
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-700 md:text-2xl">
            Ortios LLC creates scalable digital products that solve real-world problems.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="inline-flex items-center" asChild>
              <a href="#platforms">
                Explore Platforms
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Ortios Section */}
      <section id="about" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            About Ortios
          </h2>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-6 text-lg text-gray-700">
              Ortios LLC is a forward-thinking technology company that builds innovative SaaS
              platforms and digital marketplaces. We specialize in creating solutions that bridge
              gaps in various industries, from fintech to automotive imports.
            </p>
            <p className="text-lg text-gray-700">
              Our focus on digital innovation, scalability, and user-first design ensures that every
              product we build not only meets market needs but exceeds user expectations. We believe
              in the power of technology to transform industries and improve lives.
            </p>
          </div>
        </div>
      </section>

      {/* Our Platforms Section */}
      <section id="platforms" className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Our Platforms
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {platforms.map((platform) => (
              <Card key={platform.id} className="transition hover:shadow-xl">
                <CardHeader>
                  <div
                    className={`mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br ${platform.color}`}
                  >
                    <span className="text-2xl font-bold text-white">{platform.initial}</span>
                  </div>
                  <CardTitle className="text-2xl">{platform.name}</CardTitle>
                  <CardDescription>{platform.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="p-0" asChild>
                    <a href="#" className="inline-flex items-center">
                      Visit
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Ortios Section */}
      <section id="why-ortios" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Why Ortios?
          </h2>
          <div className="mx-auto max-w-3xl">
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start">
                  <Check className="mt-1 h-6 w-6 flex-shrink-0 text-green-500" />
                  <p className="ml-3 text-lg text-gray-700">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Let's Build Together
          </h2>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <p className="ml-3 text-gray-700">
                    8195, 1021 E Lincolnway
                    <br />
                    Cheyenne, WY, Laramie
                    <br />
                    US, 82001
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 flex-shrink-0 text-blue-600" />
                  <p className="ml-3 text-gray-700">+1 (307) 263-4887</p>
                </div>
              </div>
            </div>
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="mt-1"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 px-4 py-8 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">© 2025 Ortios LLC. All rights reserved.</p>
            </div>
            <div className="mb-4 flex space-x-6 md:mb-0">
              <a href="#" className="text-sm transition hover:text-blue-400">
                Privacy Policy
              </a>
              <a href="#" className="text-sm transition hover:text-blue-400">
                Terms
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="transition hover:text-blue-400">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="transition hover:text-blue-400">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}