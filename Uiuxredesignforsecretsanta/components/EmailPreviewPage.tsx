import { useState } from "react";
import { EmailTemplate } from "./EmailTemplate";
import { generateEmailHTML } from "./EmailTemplateHTML";
import { Copy, Check, Mail, Code } from "lucide-react";

export function EmailPreviewPage() {
  const [copied, setCopied] = useState(false);
  const [activeExample, setActiveExample] = useState<'default' | 'custom'>('default');
  const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview');

  const handleCopyHTML = () => {
    const htmlContent = generateEmailHTML(currentExample);
    navigator.clipboard.writeText(htmlContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const defaultExample = {
    recipientName: "Emma Johnson",
    assignedPersonName: "Michael Chen",
    eventName: "Office Holiday Party 2024",
    exchangeDate: "December 20, 2024",
    budget: "$25 - $30",
    participants: ["Emma Johnson", "Michael Chen", "Sarah Davis", "James Wilson", "Lisa Martinez", "David Brown"]
  };

  const customExample = {
    recipientName: "Alex",
    assignedPersonName: "Jordan",
    eventName: "Family Secret Santa",
    exchangeDate: "Christmas Eve",
    budget: "$50",
    participants: ["Alex", "Jordan", "Sam", "Morgan", "Taylor", "Casey", "Riley", "Drew"]
  };

  const currentExample = activeExample === 'default' ? defaultExample : customExample;

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D24545] rounded-full mb-6">
            <Mail className="w-8 h-8 text-[#F9F6F0]" />
          </div>
          <h1 className="mb-4">Email Template Preview</h1>
          <p className="max-w-2xl mx-auto text-[#333333]">
            This is how your Secret Santa assignment emails will look. The template is designed to work perfectly across all email clients with a clean, festive design that matches our application.
          </p>
        </div>

        {/* Controls */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-[#2F4F4F]/10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="mb-2">Preview Options</h3>
                <p className="text-sm text-[#666666]">
                  Switch between different examples to see how the template adapts
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setActiveExample('default')}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    activeExample === 'default'
                      ? 'bg-[#2F4F4F] text-[#F9F6F0]'
                      : 'bg-[#F9F6F0] text-[#2F4F4F] hover:bg-[#2F4F4F]/10'
                  }`}
                >
                  Office Example
                </button>
                <button
                  onClick={() => setActiveExample('custom')}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    activeExample === 'custom'
                      ? 'bg-[#2F4F4F] text-[#F9F6F0]'
                      : 'bg-[#F9F6F0] text-[#2F4F4F] hover:bg-[#2F4F4F]/10'
                  }`}
                >
                  Family Example
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Email Preview */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-lg shadow-lg p-4 border border-[#2F4F4F]/10">
            <div className="mb-4 pb-4 border-b border-[#2F4F4F]/10">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-sm text-[#666666] mb-1">Subject:</p>
                  <p className="text-[#2F4F4F]">🎅 Your Secret Santa Assignment - {currentExample.eventName}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex gap-2 bg-[#F9F6F0] p-1 rounded-lg">
                    <button
                      onClick={() => setViewMode('preview')}
                      className={`flex items-center gap-2 px-3 py-2 rounded transition-all ${
                        viewMode === 'preview'
                          ? 'bg-white text-[#2F4F4F] shadow-sm'
                          : 'text-[#666666] hover:text-[#2F4F4F]'
                      }`}
                    >
                      <Mail className="w-4 h-4" />
                      Preview
                    </button>
                    <button
                      onClick={() => setViewMode('code')}
                      className={`flex items-center gap-2 px-3 py-2 rounded transition-all ${
                        viewMode === 'code'
                          ? 'bg-white text-[#2F4F4F] shadow-sm'
                          : 'text-[#666666] hover:text-[#2F4F4F]'
                      }`}
                    >
                      <Code className="w-4 h-4" />
                      HTML
                    </button>
                  </div>
                  <button
                    onClick={handleCopyHTML}
                    className="flex items-center gap-2 px-4 py-2 bg-[#D24545] text-[#F9F6F0] rounded-lg hover:bg-[#B83838] transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy HTML
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
            
            {/* View Mode Content */}
            {viewMode === 'preview' ? (
              <div className="overflow-auto max-h-[800px] border border-[#2F4F4F]/10 rounded">
                <EmailTemplate {...currentExample} />
              </div>
            ) : (
              <div className="overflow-auto max-h-[800px] border border-[#2F4F4F]/10 rounded">
                <pre className="bg-[#F9F6F0] p-6 text-xs text-[#333333] whitespace-pre-wrap break-words">
                  <code>{generateEmailHTML(currentExample)}</code>
                </pre>
              </div>
            )}
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 border border-[#2F4F4F]/10">
            <h2 className="mb-6">Template Features</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="mb-3">Email-Safe Design</h3>
                <ul className="space-y-2 text-[#333333]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D24545] mt-1">•</span>
                    <span>Single-column layout (600px) for universal compatibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D24545] mt-1">•</span>
                    <span>Web-safe font fallbacks (Georgia, Helvetica, Arial)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D24545] mt-1">•</span>
                    <span>Static design - no animations for email clients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D24545] mt-1">•</span>
                    <span>Table-based layout for Outlook compatibility</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3">Brand Consistency</h3>
                <ul className="space-y-2 text-[#333333]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFD700] mt-1">•</span>
                    <span>Matches the "Festive SaaS" design system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFD700] mt-1">•</span>
                    <span>Uses official color palette only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFD700] mt-1">•</span>
                    <span>Beautiful static light garlands top & bottom</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFD700] mt-1">•</span>
                    <span>Clean card-like structure</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3">User Experience</h3>
                <ul className="space-y-2 text-[#333333]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#2F4F4F] mt-1">•</span>
                    <span>Clear visual hierarchy for easy scanning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2F4F4F] mt-1">•</span>
                    <span>Emphasized assignment reveal section</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2F4F4F] mt-1">•</span>
                    <span>Organized event details in easy-to-read format</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2F4F4F] mt-1">•</span>
                    <span>Friendly reminder to keep the secret</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3">Technical Details</h3>
                <ul className="space-y-2 text-[#333333]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D24545] mt-1">•</span>
                    <span>Inline CSS for maximum compatibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D24545] mt-1">•</span>
                    <span>Tested across Gmail, Outlook, Apple Mail</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D24545] mt-1">•</span>
                    <span>Mobile-responsive design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D24545] mt-1">•</span>
                    <span>Dynamic content placeholders ready</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
