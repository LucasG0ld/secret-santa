import { ArrowRight, Sparkles } from "lucide-react";
import { ChristmasIllustration } from "./ChristmasIllustration";

interface HeroProps {
  onGetStarted: () => void;
}

export function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(47,79,79,0.12)] p-12 md:p-16 relative overflow-hidden">
          {/* Decorative corner illustrations */}
          <div className="absolute top-6 right-6 opacity-20">
            <ChristmasIllustration variant="star" className="w-16 h-16" />
          </div>
          <div className="absolute bottom-6 left-6 opacity-20">
            <ChristmasIllustration variant="snowflake" className="w-16 h-16" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D24545]/10 text-[#D24545] mb-6">
                <Sparkles className="w-4 h-4" />
                <span>The easiest way to organize gift exchanges</span>
              </div>

              <h1 className="mb-6">
                Organize your Secret Santa in seconds.
              </h1>

              <p className="text-lg text-[#333333]/80 mb-8">
                Create your event, invite participants, and let our platform handle the rest.
                Automatic assignments, email notifications, and complete privacy guaranteed.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onGetStarted}
                  className="group px-4 py-4 bg-[#D24545] text-white rounded-xl hover:bg-[#D24545]/90 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Create Your Event
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="px-8 py-4 bg-transparent text-[#2F4F4F] rounded-xl border-2 border-[#2F4F4F] hover:bg-[#2F4F4F] hover:text-white transition-all">
                  See How It Works
                </button>
              </div>

              <div className="mt-12 flex items-center gap-8 text-sm text-[#333333]/60">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#2F4F4F] rounded-full"></div>
                  <span>100% Free</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#2F4F4F] rounded-full"></div>
                  <span>No Registration</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#2F4F4F] rounded-full"></div>
                  <span>Secure & Private</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D24545]/20 to-[#2F4F4F]/20 blur-3xl rounded-full"></div>
                <div className="relative grid grid-cols-2 gap-6">
                  <ChristmasIllustration variant="gift" className="w-40 h-40 hover:scale-110 transition-transform" />
                  <ChristmasIllustration variant="ornament" className="w-40 h-40 hover:scale-110 transition-transform" />
                  <ChristmasIllustration variant="snowflake" className="w-40 h-40 hover:scale-110 transition-transform" />
                  <ChristmasIllustration variant="star" className="w-40 h-40 hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl text-[#D24545] mb-2">10,000+</div>
            <p className="text-[#333333]/70">Events Created</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl text-[#D24545] mb-2">50,000+</div>
            <p className="text-[#333333]/70">Happy Participants</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl text-[#D24545] mb-2">4.9/5</div>
            <p className="text-[#333333]/70">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
