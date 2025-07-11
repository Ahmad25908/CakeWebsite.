import Link from 'next/link'
import Input from './ui/searchBar'

export default function Footer() {
  return (
    <footer className="bg-[#f7f0ff] text-[#4b2e5d] pt-10 pb-6 px-4 md:px-8 border-t border-[#e3d2f4]">
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-1 mb-2">🍰 CakeHut</h2>
          <p className="text-sm">Delicious handcrafted cakes made with love for every celebration.</p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-[#a64fc0] transition">Home</Link></li>
            <li><Link href="/menu" className="hover:text-[#a64fc0] transition">Menu</Link></li>
            <li><Link href="/about" className="hover:text-[#a64fc0] transition">About</Link></li>
            <li><Link href="/contact" className="hover:text-[#a64fc0] transition">Contact</Link></li>
          </ul>
        </div>
        {/* Search make the component of input */}
             <Input/>  
       
        {/* Contact & Social */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact</h3>
          <p className="text-sm mb-1">📍 123 Cake St, Sweetville</p>
          <p className="text-sm mb-1">📞 (123) 456-7890</p>
          <p className="text-sm mb-3">✉️ hello@cakehut.com</p>

          {/* Social Media */}
          <div className="flex gap-3">
            <a href="#" className="bg-[#a64fc0] p-2 rounded-full hover:bg-[#9133ba]" aria-label="Instagram">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2C4.8 2 3 3.8 3 6v12c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4H7zm10 2c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
              </svg>
            </a>
            <a href="#" className="bg-[#a64fc0] p-2 rounded-full hover:bg-[#9133ba]" aria-label="Facebook">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h1.5V6.5A2.5 2.5 0 0113 4h2v2h-2a.5.5 0 00-.5.5V8H15l-.5 2H12.5V20H10v-10H8V8h1z" />
              </svg>
            </a>
            <a href="#" className="bg-[#a64fc0] p-2 rounded-full hover:bg-[#9133ba]" aria-label="Twitter">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 19c7.5 0 11.6-6.2 11.6-11.6v-.5A8.3 8.3 0 0022 4.6a8 8 0 01-2.3.6 4 4 0 001.8-2.2 8.1 8.1 0 01-2.6 1A4 4 0 0016.5 3c-2.2 0-4 1.8-4 4 0 .3 0 .7.1 1A11.4 11.4 0 014 4.7a4 4 0 001.2 5.4 4 4 0 01-1.8-.5v.1c0 2 1.4 3.6 3.2 4a4 4 0 01-1.8.1 4 4 0 003.8 2.8A8 8 0 014 17.6a11.3 11.3 0 006 1.8" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 text-center text-xs text-[#4b2e5d] border-t border-[#e5d8f3] pt-4">
        © {new Date().getFullYear()} CakeHut. All rights reserved.
      </div>
    </footer>
  )
}
