import { motion } from "framer-motion";
import { Shield, Target, Users, CheckCircle2, TrendingUp, Network } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    },
    viewport: { once: true }
  };

  const problems = [
    {
      icon: Network,
      title: "Fragmented Market",
      description: "Hundreds of vendors, each claiming to be the solution. Navigating the carbon technology landscape is overwhelming and time-consuming."
    },
    {
      icon: TrendingUp,
      title: "Technology Overload",
      description: "From DAC to biochar to ocean alkalinity—the options are endless. How do you know which technologies align with your specific needs?"
    },
    {
      icon: Shield,
      title: "Implementation Risk",
      description: "Investing in the wrong solution is costly. Companies need trusted guidance to de-risk their decarbonization strategy."
    }
  ];

  const methodology = [
    {
      step: "01",
      title: "Audit & Strategy",
      description: "We begin with a comprehensive analysis of your operations, emissions profile, and business objectives to develop a custom decarbonization roadmap."
    },
    {
      step: "02",
      title: "Technology Matchmaking",
      description: "Drawing from our extensive network, we identify and vet the carbon elimination technologies that best fit your unique requirements—completely unbiased."
    },
    {
      step: "03",
      title: "Implementation & Oversight",
      description: "We stay with you through deployment, ensuring seamless integration and measurable impact. Our work doesn't end until your strategy succeeds."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Unbiased Recommendations",
      description: "We have no vendor partnerships or financial incentives. Our only goal is finding the right solution for you."
    },
    {
      icon: Shield,
      title: "Non-Profit Integrity",
      description: "As a 501(c)(3), we prioritize impact over profit. Every decision is guided by science, transparency, and your success."
    },
    {
      icon: Users,
      title: "Deep Industry Network",
      description: "Years of relationship-building give us unparalleled access to emerging technologies and proven implementation partners."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 bg-slate-900 backdrop-blur-sm border-b border-slate-800"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold text-white">ACE</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#problem" className="text-white/90 hover:text-white transition-colors">Our Mission</a>
              <a href="#methodology" className="text-white/90 hover:text-white transition-colors">How It Works</a>
              <a href="#values" className="text-white/90 hover:text-white transition-colors">Why ACE</a>
            </div>

            <Button className="bg-blue-600 text-white hover:bg-blue-700 font-semibold">
              Join the Alliance
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <video 
          className="absolute inset-0 z-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/intro vid.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 z-[1]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center text-primary-foreground"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Strategic Decarbonization for the Modern Enterprise
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl mb-10 leading-relaxed opacity-95"
            >
              We navigate the complex landscape of carbon technology so you don't have to. 
              <br className="hidden md:block" />
              Technology agnostic. Strategy first.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button 
                size="lg" 
                className="bg-blue-600 text-white hover:bg-blue-700 text-lg px-10 py-6 font-semibold"
              >
                Join the Alliance
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section id="problem" className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              The Carbon Technology Paradox
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              More solutions should mean easier decisions—but in practice, choice overload creates paralysis. 
              ACE cuts through the noise.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  <problem.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{problem.title}</h3>
                <p className="text-slate-600 leading-relaxed">{problem.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            {...fadeInUp}
            className="mt-16 text-center bg-slate-900 rounded-2xl p-12"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              How ACE Solves This
            </h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We act as your strategic partner—curating, vetting, and matching you with carbon elimination 
              technologies that align with your goals. No vendor bias. No one-size-fits-all. Just results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Methodology
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A proven, three-phase approach to building and executing your decarbonization strategy.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-12 max-w-5xl mx-auto"
          >
            {methodology.map((phase, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex flex-col md:flex-row items-start gap-8 bg-card rounded-xl p-8 shadow-card"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">{phase.step}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{phase.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section id="values" className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why Companies Trust ACE
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our commitment to independence, integrity, and impact sets us apart in the carbon technology space.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            {...fadeInUp}
            className="mt-16 text-center"
          >
            <Button 
              size="lg" 
              className="bg-blue-600 text-white hover:bg-blue-700 text-lg px-10 py-6 font-semibold"
            >
              Schedule a Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <span className="text-2xl font-bold">ACE</span>
              </div>
              <p className="text-white/80">Alliance for Carbon Elimination</p>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/60">
              © {new Date().getFullYear()} Alliance for Carbon Elimination. All rights reserved. 501(c)(3) Non-Profit Organization.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
