import { useState } from "react";
import { Plus, X, Mail, Calendar, DollarSign, Users, Send } from "lucide-react";

interface Participant {
  id: string;
  name: string;
  email: string;
}

interface SecretSantaFormProps {
  onSuccess: () => void;
}

export function SecretSantaForm({ onSuccess }: SecretSantaFormProps) {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [budget, setBudget] = useState("");
  const [participants, setParticipants] = useState<Participant[]>([
    { id: "1", name: "", email: "" },
    { id: "2", name: "", email: "" },
    { id: "3", name: "", email: "" }
  ]);
  const [organizerEmail, setOrganizerEmail] = useState("");

  const addParticipant = () => {
    setParticipants([
      ...participants,
      { id: Date.now().toString(), name: "", email: "" }
    ]);
  };

  const removeParticipant = (id: string) => {
    if (participants.length > 3) {
      setParticipants(participants.filter(p => p.id !== id));
    }
  };

  const updateParticipant = (id: string, field: 'name' | 'email', value: string) => {
    setParticipants(participants.map(p => 
      p.id === id ? { ...p, [field]: value } : p
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      onSuccess();
    }, 500);
  };

  return (
    <section className="relative min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="mb-4">Create your Secret Santa</h1>
          <p className="text-lg text-[#333333]/70">
            Fill in the details below and we'll handle the rest
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(47,79,79,0.12)] p-8 md:p-12">
          {/* Event Details */}
          <div className="mb-10">
            <h3 className="mb-6 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-[#D24545]" />
              Event Details
            </h3>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="eventName" className="block mb-2">
                  Event Name *
                </label>
                <input
                  id="eventName"
                  type="text"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  placeholder="e.g., Office Christmas 2025"
                  className="w-full px-4 py-3 border-2 border-[#2F4F4F]/20 rounded-xl focus:border-[#D24545] focus:outline-none focus:ring-2 focus:ring-[#D24545]/20 transition-all"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventDate" className="block mb-2">
                    Exchange Date *
                  </label>
                  <input
                    id="eventDate"
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-[#2F4F4F]/20 rounded-xl focus:border-[#D24545] focus:outline-none focus:ring-2 focus:ring-[#D24545]/20 transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="block mb-2 flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Budget (Optional)
                  </label>
                  <input
                    id="budget"
                    type="text"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="e.g., $25"
                    className="w-full px-4 py-3 border-2 border-[#2F4F4F]/20 rounded-xl focus:border-[#D24545] focus:outline-none focus:ring-2 focus:ring-[#D24545]/20 transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Organizer Email */}
          <div className="mb-10">
            <h3 className="mb-6 flex items-center gap-2">
              <Mail className="w-6 h-6 text-[#D24545]" />
              Organizer Information
            </h3>
            
            <div>
              <label htmlFor="organizerEmail" className="block mb-2">
                Your Email Address *
              </label>
              <input
                id="organizerEmail"
                type="email"
                value={organizerEmail}
                onChange={(e) => setOrganizerEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 border-2 border-[#2F4F4F]/20 rounded-xl focus:border-[#D24545] focus:outline-none focus:ring-2 focus:ring-[#D24545]/20 transition-all"
                required
              />
              <p className="mt-2 text-sm text-[#333333]/60">
                You'll receive a confirmation and a link to manage your event
              </p>
            </div>
          </div>

          {/* Participants */}
          <div className="mb-10">
            <h3 className="mb-6 flex items-center gap-2">
              <Users className="w-6 h-6 text-[#D24545]" />
              Participants (Minimum 3)
            </h3>
            
            <div className="space-y-4">
              {participants.map((participant, index) => (
                <div key={participant.id} className="flex gap-4 items-start group">
                  <div className="flex-shrink-0 w-8 h-12 flex items-center justify-center text-[#2F4F4F]/50">
                    {index + 1}
                  </div>
                  
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={participant.name}
                      onChange={(e) => updateParticipant(participant.id, 'name', e.target.value)}
                      placeholder="Name"
                      className="px-4 py-3 border-2 border-[#2F4F4F]/20 rounded-xl focus:border-[#D24545] focus:outline-none focus:ring-2 focus:ring-[#D24545]/20 transition-all"
                      required
                    />
                    <input
                      type="email"
                      value={participant.email}
                      onChange={(e) => updateParticipant(participant.id, 'email', e.target.value)}
                      placeholder="Email address"
                      className="px-4 py-3 border-2 border-[#2F4F4F]/20 rounded-xl focus:border-[#D24545] focus:outline-none focus:ring-2 focus:ring-[#D24545]/20 transition-all"
                      required
                    />
                  </div>
                  
                  {participants.length > 3 && (
                    <button
                      type="button"
                      onClick={() => removeParticipant(participant.id)}
                      className="flex-shrink-0 w-10 h-12 flex items-center justify-center text-[#D24545] hover:bg-[#D24545]/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={addParticipant}
              className="mt-6 px-6 py-3 border-2 border-dashed border-[#2F4F4F]/30 rounded-xl text-[#2F4F4F] hover:border-[#D24545] hover:text-[#D24545] hover:bg-[#D24545]/5 transition-all flex items-center gap-2 w-full justify-center"
            >
              <Plus className="w-5 h-5" />
              Add Another Participant
            </button>
          </div>

          {/* Submit Button */}
          <div className="pt-6 border-t border-[#2F4F4F]/10">
            <button
              type="submit"
              className="w-full px-8 py-4 bg-[#D24545] text-white rounded-xl hover:bg-[#D24545]/90 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              <Send className="w-5 h-5" />
              Create Event & Send Invitations
            </button>
            
            <p className="mt-4 text-center text-sm text-[#333333]/60">
              By creating an event, you agree to our privacy policy
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
