import { MessageSquare, Calendar, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Get in Touch",
    description: "Reach out and tell us about your student's goals, current challenges, and schedule. We'll find the right approach for your student.",
  },
  {
    number: "02",
    icon: Calendar,
    title: "Schedule Sessions",
    description: "Pick times that work for you — whether that's after school, weekends, or evenings. In-person or online, your choice.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Start Improving",
    description: "See quick wins on homework within days, then watch lasting transformation as we build habits and deep understanding.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-medium text-sm uppercase tracking-wider mb-3">
            Simple Process
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary-foreground mb-4">
            How It Works
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Getting started is easy. Three simple steps to guaranteed results.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative text-center transition-all duration-300 hover:-translate-y-2"
            >
              {/* Connector Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-primary-foreground/20" />
              )}

              {/* Icon Container */}
              <div className="relative inline-flex items-center justify-center w-24 h-24 bg-primary-foreground/10 rounded-2xl mb-6 backdrop-blur-sm transition-all duration-300 hover:bg-primary-foreground/15">
                <step.icon className="w-10 h-10 text-gold" />
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground text-sm font-bold rounded-full flex items-center justify-center">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl lg:text-2xl text-primary-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
