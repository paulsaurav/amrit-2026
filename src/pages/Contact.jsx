import Footer from "../components/Footer";
import Header from "../components/Header";


export default function Contact() {
  return (
    <section className="bg-white text-black">
      <div>
        <Header />
        <div className="mx-auto w-full max-w-[1200px] px-4">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-center mt-12">
            Contact Us
          </h1>
          <p className="mt-3 text-center text-black/70 max-w-3xl mx-auto">
            We&apos;d love to hear from you! Reach out through any of these channels.
          </p>

          {/* Main grid */}
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {/* Left: info cards */}
            <div className="space-y-6">
              {/* Email */}
              <div className="rounded-2xl bg-white shadow-lg ring-1 ring-black/5 p-6 md:p-7 border-l-4 border-blue-400">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full grid place-items-center bg-blue-50 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16v12H4z"/><path d="m22 7-10 6L2 7"/></svg>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Email Us</div>
                    <p className="text-black/70 mt-1">For general inquiries and information</p>
                    <a href="mailto:cs.aus.silverjubilee@gmail.com" className="mt-2 block text-blue-600 underline underline-offset-4">
                      cs.aus.silverjubilee@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="rounded-2xl bg-white shadow-lg ring-1 ring-black/5 p-6 md:p-7 border-l-4 border-green-400">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full grid place-items-center bg-green-50 text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.32 1.7.59 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.11a2 2 0 0 1 2.11-.45c.8.27 1.64.47 2.5.59A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Call Us</div>
                    <p className="text-black/70 mt-1">For immediate assistance</p>
                    <a href="tel:+917002816218" className="mt-2 block text-green-600 font-medium">
                      +91 70028 16218
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="rounded-2xl bg-white shadow-lg ring-1 ring-black/5 p-6 md:p-7 border-l-4 border-purple-500">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full grid place-items-center bg-purple-50 text-purple-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Postal Address</div>
                    <p className="text-black/70 mt-1">Department of Computer Science</p>
                    <p className="mt-2">
                      Assam University, Silchar<br />
                      Cachar, Assam, India – 788011
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form card */}
            <div className="rounded-2xl bg-white shadow-lg ring-1 ring-black/5 p-6 md:p-8">
              <div className="text-xl font-extrabold">Send Us a Message</div>

              <form className="mt-5 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="form-control">
                    <div className="label"><span className="label-text">Full Name</span></div>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="input w-full bg-white text-black border-gray-300 focus:ring-2 focus:ring-blue-500"
                    />
                  </label>
                  <label className="form-control">
                    <div className="label"><span className="label-text">Email Address</span></div>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      className="input w-full bg-white text-black border-gray-300 focus:ring-2 focus:ring-blue-500"
                    />
                  </label>
                </div>

                <label className="form-control">
                  <div className="label"><span className="label-text">Subject</span></div>
                  <input
                    type="text"
                    placeholder="What's this about?"
                    className="input w-full bg-white text-black border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                </label>

                <label className="form-control">
                  <div className="label"><span className="label-text">Message</span></div>
                  <textarea
                    rows={5}
                    placeholder="Your message here..."
                    className="textarea w-full bg-white text-black border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                </label>

                <button type="button" className="btn btn-primary w-full normal-case">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m22 2-7 20-4-9-9-4 20-7Z"/><path d="M22 2 11 13"/></svg>
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12">
            <div className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
              <iframe
                title="Department of Computer Science, Assam University, Silchar - Map"
                src="https://www.google.com/maps?q=Department%20of%20Computer%20Science%2C%20Assam%20University%2C%20Silchar&output=embed"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="h-10" />
        </div>
        <br /><br />
        <Footer />
      </div>
    </section>
  );
}