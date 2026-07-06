import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo/Logo-Full-Light.png";

const BottomFooter = [
  { title: "Privacy Policy", link: "/privacy-policy" },
  { title: "Terms & Conditions", link: "/terms" },
];

const Footer = () => {
  return (
    <footer className="bg-richblack-800 text-richblack-300">
      {/* Top Section */}
      <div className="w-11/12 max-w-7xl mx-auto py-14 flex flex-col lg:flex-row gap-10">

        {/* Brand Section — wider, takes ~35% */}
        <div className="lg:w-[35%] shrink-0">
          <Link to="/" className="inline-block mb-6">
            <img src={Logo} alt="SkillRise" className="w-40" />
          </Link>
          <p className="text-sm leading-6 mb-4 max-w-xs">
            Empowering learners to build skills, create projects, and accelerate their careers.
          </p>
        </div>

        {/* Right Columns — 4 cols evenly spaced */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-8">

          {/* Socials */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 tracking-wider">Socials</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white transition">YouTube</a></li>
              <li><a href="https://www.linkedin.com/in/palak-mani-tripathi/" target="_blank" rel="noreferrer" className="hover:text-white transition">LinkedIn</a></li>
              <li><a href="https://github.com/tripathipalak" target="_blank" rel="noreferrer" className="hover:text-white transition">GitHub</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition">Instagram</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 tracking-wider">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-white transition">Terms of Service</Link></li>
              <li><Link to="/refund-policy" className="hover:text-white transition">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Register */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 tracking-wider">Register</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/signup" className="hover:text-white transition">Sign Up</Link></li>
              <li><Link to="/login" className="hover:text-white transition">Login</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition">Pricing</Link></li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 tracking-wider">Pages</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/courses" className="hover:text-white transition">Courses</Link></li>
              <li><Link to="/tutorials" className="hover:text-white transition">Tutorials</Link></li>
              <li><Link to="/help-center" className="hover:text-white transition">Help</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Divider + Bottom Bar */}
      <div className="border-t border-richblack-700">
        <div className="w-11/12 max-w-7xl mx-auto py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex flex-wrap items-center gap-6">
            {BottomFooter.map((item, index) => (
              <Link key={index} to={item.link} className="hover:text-white transition">{item.title}</Link>
            ))}
          </div>
          <div>Made with ❤️ © {new Date().getFullYear()} SkillRise</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;