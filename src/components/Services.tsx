import { Calculator, BookOpen, Target, Brain, MessageCircle, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Math Tutoring",
    description: "From 5th grade math through 10th grade — including Pre-Algebra, Algebra, Geometry, and more. Clear explanations and step-by-step problem solving.",
    subjects: ["5th-6th Grade Math", "Pre-Algebra", "Algebra I & II", "Geometry"],
  },
  {
    icon: BookOpen,
    title: "Homework Support",
    description: "Get help completing assignments correctly while actually understanding the material. We teach the 'why' behind every solution.",
    subjects: ["Daily Assignments", "Problem Sets", "Projects", "Worksheets"],
  },
  {
    icon: Target,
    title: "Test Preparation",
    description: "Prepare with confidence for quizzes, unit tests, and standardized exams. Proven strategies and practice problems that work.",
    subjects: ["Quizzes & Tests", "Midterms & Finals", "State Exams", "SAT Math"],
  },
  {
    icon: Brain,
    title: "Habit Building",
    description: "We don't just teach math — we build lasting study habits, time management skills, and the confidence to tackle any challenge.",
    subjects: ["Study Skills", "Time Management", "Organization", "Self-Discipline"],
  },
  {
    icon: MessageCircle,
    title: "Ongoing Support",
    description: "Questions don't stop when sessions end. Text or message anytime for quick help with homework, concepts, or test prep.",
    subjects: ["Text Support", "Quick Questions", "Homework Help", "Between Sessions"],
  },
  {
    icon: GraduationCap,
    title: "Concept Mastery",
    description: "Go beyond memorization. We help students truly understand mathematical concepts so they can apply them to any problem.",
    subjects: ["Deep Understanding", "Problem Solving", "Critical Thinking", "Application"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-medium text-sm uppercase tracking-wider mb-3">
            What We Offer
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Comprehensive Academic Support
          </h2>
          <p className="text-muted-foreground text-lg">
            More than just tutoring — we build habits, understanding, and lasting confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-xl p-6 lg:p-8 shadow-card border border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-navy" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                {service.description}
              </p>

              {/* Subject Tags */}
              <div className="flex flex-wrap gap-2">
                {service.subjects.map((subject) => (
                  <span
                    key={subject}
                    className="text-xs font-medium px-3 py-1 bg-secondary text-secondary-foreground rounded-full transition-all duration-300 hover:bg-gold/20 hover:text-gold"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
