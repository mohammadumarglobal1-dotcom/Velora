import { ContactForm } from "@/components/sections/contact/ContactForm";

export const metadata = {
  title: "Contact Us | Velora Digital Agency",
  description: "Get in touch with Velora to discuss your next digital project. We build premium websites and custom web applications.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-black selection:bg-white selection:text-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <span className="text-white/50 text-sm tracking-widest uppercase mb-6 block font-medium">Start A Project</span>
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-white mb-8 tracking-tight">
              Let's build something <span className="text-white/70 italic">extraordinary.</span>
            </h1>
            <p className="text-white/70 text-lg max-w-md font-light mb-12 leading-relaxed">
              Whether you need a cinematic web presence, a complex SaaS platform, or a high-converting e-commerce store, we have the expertise to bring your vision to life.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-white font-medium mb-2">Email Us</h3>
                <a href="mailto:hello@velora.global" className="text-white/60 hover:text-white transition-colors">hello@velora.global</a>
              </div>
              <div>
                <h3 className="text-white font-medium mb-2">Office</h3>
                <p className="text-white/60">
                  Global Remote Agency<br />
                  Working with clients worldwide
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
