"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Sparkles, Hotel, Star, HelpCircle, Mail } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Rooms", id: "product" },
            { name: "Amenities", id: "feature" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Vista Hotel"
          button={{
            text: "Book Now",
            href: "https://booking.example.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Experience Luxury Hospitality"
          description="Discover unmatched elegance and comfort at Grand Vista Hotel, where every moment becomes an unforgettable memory"
          tag="5-Star Experience"
          tagIcon={Award}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury hotel lobby with elegant interior design"
          buttons={[
            {
              text: "Book Your Stay",
              href: "https://booking.example.com"
            },
            {
              text: "Explore Rooms",
              href: "product"
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="World-Class Amenities"
          description="Indulge in our premium facilities designed to exceed your expectations"
          tag="Amenities"
          tagIcon={Sparkles}
          features={[
            {
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your body and mind with our full-service spa featuring premium treatments and wellness programs",
              imageSrc: "https://images.pexels.com/photos/3673978/pexels-photo-3673978.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury spa treatment room"
            },
            {
              title: "Fine Dining Restaurant",
              description: "Savor exquisite cuisine crafted by world-renowned chefs using the finest local and international ingredients",
              imageSrc: "https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant hotel restaurant"
            },
            {
              title: "State-of-the-Art Fitness",
              description: "Maintain your fitness routine in our fully equipped gym with premium equipment and personal training services",
              imageSrc: "https://images.pexels.com/photos/3902730/pexels-photo-3902730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Modern hotel fitness center"
            },
            {
              title: "24/7 Concierge Service",
              description: "Our dedicated concierge team is available around the clock to assist with reservations, tours, and special requests",
              imageSrc: "https://images.pexels.com/photos/6474521/pexels-photo-6474521.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Professional hotel concierge"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Luxury Accommodations"
          description="Choose from our collection of elegantly appointed rooms and suites"
          tag="Rooms & Suites"
          tagIcon={Hotel}
          products={[
            {
              id: "deluxe-room",
              name: "Deluxe Room",
              price: "$299/night",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Deluxe hotel room with city view",
              onProductClick: () => window.open('https://booking.example.com', '_blank')
            },
            {
              id: "executive-suite",
              name: "Executive Suite",
              price: "$599/night",
              imageSrc: "https://images.pexels.com/photos/18801079/pexels-photo-18801079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Executive suite with living area",
              onProductClick: () => window.open('https://booking.example.com', '_blank')
            },
            {
              id: "presidential-suite",
              name: "Presidential Suite",
              price: "$1,299/night",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Presidential suite luxury accommodation",
              onProductClick: () => window.open('https://booking.example.com', '_blank')
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Discover why guests choose Grand Vista Hotel for their luxury stays"
          tag="Guest Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO, TechCorp",
              company: "Business Traveler",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Travel Blogger",
              company: "Luxury Travel Guide",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/34389929/pexels-photo-34389929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Wedding Planner",
              company: "Elegant Events",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5217854/pexels-photo-5217854.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily Rodriguez"
            },
            {
              id: "4",
              name: "Jessica Thompson",
              role: "Corporate Executive",
              company: "Fortune 500",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Jessica Thompson"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Leading Hospitality Brands"
          description="Join the network of world-class hotels that trust our standards of excellence"
          tag="Partners"
          tagIcon={Award}
          logos={[
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about your stay at Grand Vista Hotel"
          tag="Help"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What time is check-in and check-out?",
              content: "Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available upon request and subject to availability."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide complimentary airport shuttle service every 30 minutes. Private luxury car service is also available for an additional fee."
            },
            {
              id: "3",
              title: "What dining options are available?",
              content: "We feature three restaurants: fine dining, casual bistro, and rooftop bar. Room service is available 24/7 for your convenience."
            },
            {
              id: "4",
              title: "Is parking available?",
              content: "Yes, we offer both self-parking and valet parking services. Valet parking includes car washing and detailing upon request."
            },
            {
              id: "5",
              title: "What are your cancellation policies?",
              content: "Standard reservations can be cancelled up to 24 hours before arrival. Suite bookings require 48-hour notice. Peak season may have different policies."
            },
            {
              id: "6",
              title: "Do you accommodate special dietary requirements?",
              content: "Absolutely! Our chefs can accommodate various dietary needs including vegetarian, vegan, gluten-free, and other special requirements with advance notice."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Newsletter"
          tagIcon={Mail}
          title="Stay Updated with Special Offers"
          description="Subscribe to receive exclusive deals, seasonal packages, and insider updates from Grand Vista Hotel"
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive marketing communications. You can unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Hotel",
              items: [
                { label: "Rooms & Suites", href: "product" },
                { label: "Amenities", href: "feature" },
                { label: "Dining", href: "dining" },
                { label: "Events", href: "events" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Concierge", href: "concierge" },
                { label: "Spa & Wellness", href: "spa" },
                { label: "Business Center", href: "business" },
                { label: "Airport Transfer", href: "transport" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "FAQ", href: "faq" },
                { label: "Reservations", href: "https://booking.example.com" },
                { label: "Guest Services", href: "services" }
              ]
            }
          ]}
          copyrightText="© 2025 Grand Vista Hotel. All rights reserved."
          logoSrc="/brand/logowhite.svg"
        />
      </div>
    </ThemeProvider>
  );
}