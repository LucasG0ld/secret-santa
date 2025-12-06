import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How does Secret Santa work?",
      answer: "Secret Santa is a gift exchange where each participant is randomly assigned another participant to give a gift to. The assignments are kept secret until the gift exchange happens. Our platform automates this entire process, from creating the event to sending out anonymous assignments."
    },
    {
      question: "Is this service really free?",
      answer: "Yes! Our Secret Santa platform is completely free to use. There are no hidden fees, no premium tiers, and no limits on the number of events or participants. We believe in making holiday gift exchanges accessible to everyone."
    },
    {
      question: "How many participants do I need?",
      answer: "You need a minimum of 3 participants to create a Secret Santa event. There's no maximum limit - whether you have 5 people or 500, our system can handle it!"
    },
    {
      question: "Can I exclude certain pairings?",
      answer: "Currently, our system creates completely random assignments to maintain fairness. If you have specific requirements (like couples not getting each other), you can reach out to us for custom event setup assistance."
    },
    {
      question: "What if someone doesn't receive their email?",
      answer: "If a participant doesn't receive their assignment email, first check spam folders. As the organizer, you'll receive a management link where you can resend individual emails or view all assignments if needed."
    },
    {
      question: "Can I change details after creating the event?",
      answer: "Yes! You'll receive a management link via email that allows you to edit event details, add or remove participants, and resend assignment emails. Changes made before assignments are sent won't affect anything."
    },
    {
      question: "Is my data secure and private?",
      answer: "Absolutely. We take privacy seriously. Email addresses are only used to send assignment notifications and are not shared with third parties. Assignments are randomly generated and encrypted. We don't store sensitive information longer than necessary."
    },
    {
      question: "Can I use this for other types of gift exchanges?",
      answer: "Yes! While designed for Secret Santa, our platform works great for any gift exchange scenario - White Elephant, office parties, family gatherings, or friend groups. Any event where you need random, anonymous pairings."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-[#333333]/70">
            Everything you need to know about organizing your Secret Santa
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(47,79,79,0.12)] p-8 md:p-12">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border-b border-[#2F4F4F]/10 last:border-b-0"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <h3 className="pr-8 group-hover:text-[#D24545] transition-colors">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`flex-shrink-0 w-6 h-6 text-[#2F4F4F] transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 mb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-[#333333]/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-[#2F4F4F] to-[#2F4F4F]/80 rounded-2xl p-8 text-white">
            <h3 className="mb-3 text-white">Still have questions?</h3>
            <p className="mb-6 text-white/80">
              We're here to help make your Secret Santa perfect
            </p>
            <button className="px-8 py-3 bg-[#D24545] text-white rounded-xl hover:bg-[#D24545]/90 transition-all shadow-lg">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
