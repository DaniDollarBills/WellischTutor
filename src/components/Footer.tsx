import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
            <img src={logo} alt="Wellisch Academic Group" className="w-10 h-10 rounded-lg" />
            <span className="font-serif text-xl text-primary-foreground">
              Wellisch<span className="text-gold"> Academic Group</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm">
            <a href="#services" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300">
              Services
            </a>
            <a href="#results" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300">
              Results
            </a>
            <a href="#how-it-works" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300">
              How It Works
            </a>
            <a href="#about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300">
              About
            </a>
            <a href="#contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} Wellisch Academic Group
          </p>
        </div>

        {/* Tagline */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/60 text-sm mb-4">
            Westchester County, NY — In-Home & Online Math Tutoring
          </p>
          
          {/* Disclaimer */}
          <p className="text-primary-foreground/30 text-xs max-w-2xl mx-auto leading-relaxed">
            Results shown are based on typical student outcomes and may vary. Individual results depend on 
            student effort, attendance, and engagement. Satisfaction guarantee and refund policy details 
            discussed at enrollment.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
