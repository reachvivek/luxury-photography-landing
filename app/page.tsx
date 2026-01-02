"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";
import CategoryCard from "@/components/CategoryCard";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Tsurov's photography elevated our interiors to another level.",
      author: "Emily Ross",
      role: "Interior Designer"
    },
    {
      quote: "Exceptional attention to detail and lighting. Every shot tells a story.",
      author: "Michael Chen",
      role: "Architect"
    },
    {
      quote: "The images captured the essence of our luxury spaces perfectly.",
      author: "Sarah Williams",
      role: "Real Estate Developer"
    },
    {
      quote: "Professional, creative, and delivers stunning results every time.",
      author: "David Martinez",
      role: "Hotel Manager"
    },
    {
      quote: "Their work showcases our designs in the most beautiful way possible.",
      author: "Lisa Anderson",
      role: "Design Studio Owner"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const residentialSpaces = [
    { title: "Luxury Villas", image: "/images/7.png", href: "/residential#villas" },
    { title: "Apartments", image: "/images/4.png", href: "/residential#apartments" },
    { title: "Penthouses", image: "/images/13.png", href: "/residential#penthouses" },
    { title: "Home Offices", image: "/images/12.png", href: "/residential#offices" },
  ];

  const hospitalitySpaces = [
    { title: "Hotel Suites", image: "/images/12.png", href: "/hospitality#suites" },
    { title: "Restaurants", image: "/images/10.png", href: "/hospitality#restaurants" },
    { title: "Event Spaces", image: "/images/11.png", href: "/hospitality#events" },
    { title: "Event Spaces", image: "/images/10.png", href: "/hospitality#events" },
  ];

  const commercialSpaces = [
    { title: "Office Spaces", image: "/images/12.png", href: "/commercial#offices" },
    { title: "Co-working Spaces", image: "/images/11.png", href: "/commercial#coworking" },
    { title: "Retail Stores", image: "/images/9.png", href: "/commercial#retail" },
    { title: "Showrooms", image: "/images/1.png", href: "/commercial#showrooms" },
  ];

  const customInteriorsSpaces = [
    { title: "Unique Architectural Elements", image: "/images/1.png", href: "/custom-interiors#architecture" },
    { title: "Custom Furniture Photography", image: "/images/5.png", href: "/custom-interiors#furniture" },
    { title: "Material Close-Ups", image: "/images/3.png", href: "/custom-interiors#materials" },
    { title: "Design Details", image: "/images/8.png", href: "/custom-interiors#details" },
  ];

  // Featured image state for each section
  const [residentialIndex, setResidentialIndex] = useState(0);
  const [hospitalityIndex, setHospitalityIndex] = useState(0);
  const [commercialIndex, setCommercialIndex] = useState(0);
  const [customIndex, setCustomIndex] = useState(0);

  // Auto-rotate featured images
  useEffect(() => {
    const timer = setInterval(() => {
      setResidentialIndex((prev) => (prev + 1) % residentialSpaces.length);
      setHospitalityIndex((prev) => (prev + 1) % hospitalitySpaces.length);
      setCommercialIndex((prev) => (prev + 1) % commercialSpaces.length);
      setCustomIndex((prev) => (prev + 1) % customInteriorsSpaces.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [residentialSpaces.length, hospitalitySpaces.length, commercialSpaces.length, customInteriorsSpaces.length]);

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />

      {/* Hero Section */}
      <section>
        <div className="relative h-screen">
          <Image
            src="/images/hero.png"
            alt="Luxury Interior"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/30 to-white/50"></div>

          {/* Content */}
          <div className="relative z-10 flex items-start justify-center h-full pt-[58px] md:pt-[90px] pb-32 px-6 md:px-16">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[72px] font-serif font-light text-stone-900 mb-6 md:whitespace-nowrap">
                Exceptional Interior Photography
              </h1>
              <p className="text-lg sm:text-xl md:text-[20px] text-stone-600 mb-12 max-w-2xl mx-auto leading-relaxed tracking-wide">
                Capturing Luxury, Elegance, and Detail.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                <Link
                  href="/portfolio"
                  className="px-8 py-4 bg-stone-900 text-white hover:bg-stone-800 hover:-translate-y-0.5 transition-all duration-200 text-sm font-medium tracking-widest uppercase"
                >
                  View Portfolio
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-200 text-sm font-medium tracking-widest uppercase"
                >
                  Book a Shoot
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Divider */}
      <section className="py-24 px-6 md:px-16 bg-stone-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center mb-8">
            <div className="flex-1 border-t border-stone-300"></div>
            <h2 className="px-8 text-5xl md:text-6xl lg:text-[64px] font-serif font-light text-stone-900">
              Portfolio
            </h2>
            <div className="flex-1 border-t border-stone-300"></div>
          </div>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Explore our curated collection of interior photography showcasing luxury spaces across different categories
          </p>
        </div>
      </section>

      {/* Residential Spaces */}
      <section className="h-screen relative bg-[#F8F3F4]">
        {/* Featured Image */}
        <div className="relative h-[75vh]">
          <Image
            src={residentialSpaces[residentialIndex].image}
            alt={residentialSpaces[residentialIndex].title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          {/* Title and Navigation */}
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-16 py-8 flex items-end justify-between">
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-serif font-light text-white">
              Residential Spaces
            </h2>

            <div className="flex gap-4">
              <button
                onClick={() => setResidentialIndex((prev) => (prev - 1 + residentialSpaces.length) % residentialSpaces.length)}
                className="w-12 h-12 rounded-full border-2 border-white/80 text-white hover:bg-white hover:text-stone-900 transition-all duration-200 flex items-center justify-center"
                aria-label="Previous"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={() => setResidentialIndex((prev) => (prev + 1) % residentialSpaces.length)}
                className="w-12 h-12 rounded-full border-2 border-white/80 text-white hover:bg-white hover:text-stone-900 transition-all duration-200 flex items-center justify-center"
                aria-label="Next"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail Cards */}
        <div className="h-[25vh] px-6 md:px-16 py-6 overflow-x-auto">
          <div className="flex gap-4 h-full max-w-7xl mx-auto">
            {residentialSpaces.map((space, index) => (
              <Link
                key={space.title}
                href={space.href}
                onClick={() => setResidentialIndex(index)}
                className={`flex-shrink-0 w-48 group cursor-pointer transition-all duration-300 ${
                  index === residentialIndex ? 'opacity-100 scale-105' : 'opacity-60 hover:opacity-100'
                }`}
              >
                <div className="relative h-32 rounded-lg overflow-hidden mb-2">
                  <Image
                    src={space.image}
                    alt={space.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm font-serif text-stone-900 text-center">{space.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hotels & Hospitality */}
      <section className="h-screen relative bg-[#F8F3F4]">
        {/* Featured Image */}
        <div className="relative h-[75vh]">
          <Image
            src={hospitalitySpaces[hospitalityIndex].image}
            alt={hospitalitySpaces[hospitalityIndex].title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          {/* Title and Navigation */}
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-16 py-8 flex items-end justify-between">
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-serif font-light text-white">
              Hotels & Hospitality
            </h2>

            <div className="flex gap-4">
              <button
                onClick={() => setHospitalityIndex((prev) => (prev - 1 + hospitalitySpaces.length) % hospitalitySpaces.length)}
                className="w-12 h-12 rounded-full border-2 border-white/80 text-white hover:bg-white hover:text-stone-900 transition-all duration-200 flex items-center justify-center"
                aria-label="Previous"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={() => setHospitalityIndex((prev) => (prev + 1) % hospitalitySpaces.length)}
                className="w-12 h-12 rounded-full border-2 border-white/80 text-white hover:bg-white hover:text-stone-900 transition-all duration-200 flex items-center justify-center"
                aria-label="Next"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail Cards */}
        <div className="h-[25vh] px-6 md:px-16 py-6 overflow-x-auto">
          <div className="flex gap-4 h-full max-w-7xl mx-auto">
            {hospitalitySpaces.map((space, index) => (
              <Link
                key={`${space.title}-${index}`}
                href={space.href}
                onClick={() => setHospitalityIndex(index)}
                className={`flex-shrink-0 w-48 group cursor-pointer transition-all duration-300 ${
                  index === hospitalityIndex ? 'opacity-100 scale-105' : 'opacity-60 hover:opacity-100'
                }`}
              >
                <div className="relative h-32 rounded-lg overflow-hidden mb-2">
                  <Image
                    src={space.image}
                    alt={space.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm font-serif text-stone-900 text-center">{space.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial & Industry */}
      <section className="h-screen relative bg-[#F8F3F4]">
        {/* Featured Image */}
        <div className="relative h-[75vh]">
          <Image
            src={commercialSpaces[commercialIndex].image}
            alt={commercialSpaces[commercialIndex].title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          {/* Title and Navigation */}
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-16 py-8 flex items-end justify-between">
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-serif font-light text-white">
              Commercial & Industry
            </h2>

            <div className="flex gap-4">
              <button
                onClick={() => setCommercialIndex((prev) => (prev - 1 + commercialSpaces.length) % commercialSpaces.length)}
                className="w-12 h-12 rounded-full border-2 border-white/80 text-white hover:bg-white hover:text-stone-900 transition-all duration-200 flex items-center justify-center"
                aria-label="Previous"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={() => setCommercialIndex((prev) => (prev + 1) % commercialSpaces.length)}
                className="w-12 h-12 rounded-full border-2 border-white/80 text-white hover:bg-white hover:text-stone-900 transition-all duration-200 flex items-center justify-center"
                aria-label="Next"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail Cards */}
        <div className="h-[25vh] px-6 md:px-16 py-6 overflow-x-auto">
          <div className="flex gap-4 h-full max-w-7xl mx-auto">
            {commercialSpaces.map((space, index) => (
              <Link
                key={space.title}
                href={space.href}
                onClick={() => setCommercialIndex(index)}
                className={`flex-shrink-0 w-48 group cursor-pointer transition-all duration-300 ${
                  index === commercialIndex ? 'opacity-100 scale-105' : 'opacity-60 hover:opacity-100'
                }`}
              >
                <div className="relative h-32 rounded-lg overflow-hidden mb-2">
                  <Image
                    src={space.image}
                    alt={space.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm font-serif text-stone-900 text-center">{space.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Interiors */}
      <section className="h-screen relative bg-[#F8F3F4]">
        {/* Featured Image */}
        <div className="relative h-[75vh]">
          <Image
            src={customInteriorsSpaces[customIndex].image}
            alt={customInteriorsSpaces[customIndex].title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          {/* Title and Navigation */}
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-16 py-8 flex items-end justify-between">
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-serif font-light text-white">
              Custom Interiors
            </h2>

            <div className="flex gap-4">
              <button
                onClick={() => setCustomIndex((prev) => (prev - 1 + customInteriorsSpaces.length) % customInteriorsSpaces.length)}
                className="w-12 h-12 rounded-full border-2 border-white/80 text-white hover:bg-white hover:text-stone-900 transition-all duration-200 flex items-center justify-center"
                aria-label="Previous"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={() => setCustomIndex((prev) => (prev + 1) % customInteriorsSpaces.length)}
                className="w-12 h-12 rounded-full border-2 border-white/80 text-white hover:bg-white hover:text-stone-900 transition-all duration-200 flex items-center justify-center"
                aria-label="Next"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail Cards */}
        <div className="h-[25vh] px-6 md:px-16 py-6 overflow-x-auto">
          <div className="flex gap-4 h-full max-w-7xl mx-auto">
            {customInteriorsSpaces.map((space, index) => (
              <Link
                key={space.title}
                href={space.href}
                onClick={() => setCustomIndex(index)}
                className={`flex-shrink-0 w-48 group cursor-pointer transition-all duration-300 ${
                  index === customIndex ? 'opacity-100 scale-105' : 'opacity-60 hover:opacity-100'
                }`}
              >
                <div className="relative h-32 rounded-lg overflow-hidden mb-2">
                  <Image
                    src={space.image}
                    alt={space.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm font-serif text-stone-900 text-center">{space.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 px-6 md:px-16 bg-stone-100">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="relative min-h-[200px] flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${
                  index === currentTestimonial ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <blockquote className="text-3xl md:text-4xl font-serif font-light italic text-stone-700 mb-8 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <p className="text-lg text-stone-500 tracking-wide">
                  — {testimonial.author}, {testimonial.role}
                </p>
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-stone-900 w-8' : 'bg-stone-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 px-6 md:px-16 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-[10px] text-stone-300 tracking-wider">
            Designed by{' '}
            <a
              href="https://wa.me/971501480042?text=Hi%20Vivek,%20I%20saw%20your%20work%20on%20the%20Tsurov%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-400 transition-colors"
            >
              Vivek Kumar Singh
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
