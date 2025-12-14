import { Mail, Phone, MapPin, ArrowRight, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    studentGrade: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = `Tutoring Inquiry - ${formData.studentGrade} Grade Student`;

    try {
      // Send via Web3Forms (free, no confirmation needed)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "7f3a8a67-0cc7-4cac-bb72-0ee8da9ee6bc",
          to: "danielwellischny@gmail.com",
          from_name: formData.name,
          subject: subject,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          student_grade: formData.studentGrade,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent Successfully!",
          description: "We'll get back to you within 24-48 hours.",
        });
        setFormData({ name: "", email: "", phone: "", studentGrade: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      // Fallback to mailto
      const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Student Grade: ${formData.studentGrade}

Message:
${formData.message}
      `.trim();

      const mailtoLink = `mailto:danielwellischny@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink, '_blank');

      toast({
        title: "Opening Email",
        description: "Please send the email to complete your inquiry.",
      });
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-medium text-sm uppercase tracking-wider mb-3">
            Get Started
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground text-lg">
            Fill out the form below and we'll get back to you to discuss how we can help 
            your student succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-2xl text-foreground mb-6">
              Get in Touch
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Have questions? Reach out directly. We're happy to discuss 
              how Wellisch Academic Group can help your student.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 transition-all duration-300 hover:translate-x-1">
                <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a href="mailto:danielwellischny@gmail.com" className="text-muted-foreground hover:text-gold transition-colors">
                    danielwellischny@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 transition-all duration-300 hover:translate-x-1">
                <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Call or Text</p>
                  <a href="tel:+19089283214" className="text-muted-foreground hover:text-gold transition-colors">
                    (908) 928-3214
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 transition-all duration-300 hover:translate-x-1">
                <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Service Area</p>
                  <p className="text-muted-foreground">
                    Westchester County, NY<br />
                    <span className="text-sm">In-home & online sessions available</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 transition-all duration-300 hover:translate-x-1">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Proven Results</p>
                  <p className="text-muted-foreground">
                    Every student improves their grade<br />
                    <span className="text-sm">See results within weeks</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Guarantee Box */}
            <div className="mt-8 p-6 bg-green-500/5 rounded-xl border border-green-500/20">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Our Commitment</p>
                  <p className="text-muted-foreground text-sm">
                    If you're not completely satisfied with your student's progress, 
                    we'll provide a full refund. Your satisfaction is our priority.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
            <h4 className="font-serif text-xl text-foreground mb-6">Send Us a Message</h4>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Parent/Guardian Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-300"
                  placeholder="you@email.com"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-300"
                    placeholder="(914) 555-1234"
                  />
                </div>
                <div>
                  <label htmlFor="studentGrade" className="block text-sm font-medium text-foreground mb-2">
                    Student Grade
                  </label>
                  <select
                    id="studentGrade"
                    name="studentGrade"
                    value={formData.studentGrade}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-300"
                  >
                    <option value="">Select grade</option>
                    <option value="5th">5th Grade</option>
                    <option value="6th">6th Grade</option>
                    <option value="7th">7th Grade</option>
                    <option value="8th">8th Grade</option>
                    <option value="9th">9th Grade</option>
                    <option value="10th">10th Grade</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Tell Us About Your Student
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-300 resize-none"
                  placeholder="Current math level, goals, schedule preferences..."
                />
              </div>

              <Button variant="gold" size="lg" className="w-full transition-all duration-300 hover:scale-[1.02]" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <ArrowRight className="w-4 h-4" />
              </Button>

              <p className="text-muted-foreground text-xs text-center">
                We typically respond within 24-48 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
