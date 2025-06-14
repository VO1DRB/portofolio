'use client';

import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks: SocialLink[] = [
    {
      icon: <FaGithub className="w-5 h-5" />,
      href: "https://github.com/VO1DRB",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/mikhael-jamie-496b75346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      label: "LinkedIn"
    },
    {
      icon: <FaInstagram className="w-5 h-5" />,
      href: "https://instagram.com/ini_mikhael",
      label: "Instagram"
    },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      href: "https://wa.me/6282134946260",
      label: "Whatsapp"
    }
  ];

  return (
    <footer className="relative mt-20">
      <div className="backdrop-blur-xl bg-black/30 text-white">
        <div className="container mx-auto px-6">
          <div className="py-8">
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-all duration-300 hover:scale-110 hover:text-cyan-400"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-white/70">
              <p>© {currentYear} Michael Jamie. All rights reserved.</p>
              <p className="mt-2">
                Built with 
                <span className="mx-1">❤️</span>
                using Next.js & TailwindCSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
