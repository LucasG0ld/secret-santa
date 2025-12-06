import { Gift, Users, Mail, Sparkles } from "lucide-react";

export function HowItWorksA() {
  const steps = [
    {
      icon: Gift,
      title: "Create Your Event",
      description: "Set up your Secret Santa in minutes. Add event details, date, and optional budget."
    },
    {
      icon: Users,
      title: "Add Participants",
      description: "Enter the names and email addresses of everyone joining the gift exchange."
    },
    {
      icon: Sparkles,
      title: "Automatic Assignments",
      description: "Our algorithm randomly assigns each person a recipient while ensuring fairness."
    },
    {
      icon: Mail,
      title: "Email Notifications",
      description: "Everyone receives an email with their assigned person. The secret is kept safe!"
    }
  ];

  return (
    <section className="relative min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="mb-4">How it Works</h1>
          <p className="text-lg text-[#333333]/70 max-w-2xl mx-auto">
            Organizing a Secret Santa has never been easier. Follow these simple steps to create your perfect gift exchange.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#D24545] rounded-full flex items-center justify-center text-white shadow-lg">
                  {index + 1}
                </div>
                
                <div className="mb-6 mt-4">
                  <div className="w-16 h-16 bg-[#2F4F4F]/10 rounded-2xl flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-[#2F4F4F]" />
                  </div>
                </div>
                
                <h3 className="mb-3">{step.title}</h3>
                <p className="text-[#333333]/70">{step.description}</p>
              </div>
              
              {/* Version A: Perfectly centered connector bars */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-[#D24545]/30"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h3 className="mb-3">100% Private</h3>
            <p className="text-[#333333]/70">
              Assignments are completely random and private. Nobody knows who has them except you!
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h3 className="mb-3">No Registration</h3>
            <p className="text-[#333333]/70">
              Start organizing immediately. No accounts, no passwords, no hassle.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h3 className="mb-3">Completely Free</h3>
            <p className="text-[#333333]/70">
              All features included at no cost. Create unlimited events with any number of participants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
