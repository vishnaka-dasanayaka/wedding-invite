// pages/invitation.js
import Header from "../components/invitation/Header";
import CountdownTimer from "../components/invitation/CountdownTimer";
import MemoryGallery from "../components/invitation/MemoryGallery";
import RSVPForm from "../components/invitation/RSVPForm";
import Footer from "../components/invitation/Footer";

export default function InvitationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white font-sans">
      {/* Cookie Consent Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="mb-4 md:mb-0 text-sm">
            By clicking on "Accept Cookies", you agree to storing your cookies
            to enhance your experience, analyze site traffic, and personalize
            content.{" "}
            <a href="#" className="text-rose-200 underline">
              Learn more about privacy policy.
            </a>
          </p>
          <div className="flex space-x-4">
            <button className="px-4 py-2 text-sm border border-gray-600 hover:bg-gray-800 transition">
              Manage Preference
            </button>
            <button className="px-4 py-2 text-sm border border-gray-600 hover:bg-gray-800 transition">
              Reject
            </button>
            <button className="px-4 py-2 text-sm bg-rose-600 hover:bg-rose-700 transition">
              Accept Cookies
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Couple Names Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            TOGETHER WITH OUR FAMILIES
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 my-12">
            <div className="text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
                Sarah
              </h2>
              <p className="text-lg text-gray-600">
                Daughter of Mr. & Mrs. Robert Thompson
              </p>
            </div>
            <div className="text-4xl text-rose-500">&</div>
            <div className="text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
                Michael
              </h2>
              <p className="text-lg text-gray-600">
                Son of Mr. & Mrs. David Anderson
              </p>
            </div>
          </div>
          <p className="text-xl text-gray-700 italic mt-8">
            request the pleasure of your company at the celebration of their
            marriage
          </p>
        </section>

        {/* Date & Time Section */}
        <section className="text-center mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-3xl font-serif text-gray-800 mb-6">
              Event Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-600">Date</h4>
                <p className="text-xl text-gray-800">Saturday, June 15, 2024</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-600">Time</h4>
                <p className="text-xl text-gray-800">
                  4:30 PM - Reception at 6:00 PM
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-600">Venue</h4>
                <p className="text-xl text-gray-800">
                  Galle Face Hotel
                  <br />2 Kollupitiya Road, Colombo 03
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Countdown Timer */}
        <section className="mb-16">
          <h3 className="text-3xl font-serif text-center text-gray-800 mb-8">
            Counting Down
          </h3>
          <CountdownTimer />
        </section>

        {/* Our Story Section */}
        <section className="mb-16">
          <h3 className="text-3xl font-serif text-center text-gray-800 mb-12">
            Our Story
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-rose-100">
                {/* Replace with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-rose-100 to-pink-200 flex items-center justify-center">
                  <span className="text-4xl">👰</span>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-2">
                Sarah Elizabeth
              </h4>
              <p className="text-gray-600 mb-4">
                Daughter of Mr. & Mrs. Robert Thompson
              </p>
              <blockquote className="italic text-gray-700 mt-4">
                "Two souls with but a single thought, two hearts that beat as
                one."
              </blockquote>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-100">
                {/* Replace with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-cyan-200 flex items-center justify-center">
                  <span className="text-4xl">🤵</span>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-2">
                Michael James
              </h4>
              <p className="text-gray-600 mb-4">
                Son of Mr. & Mrs. David Anderson
              </p>
              <blockquote className="italic text-gray-700 mt-4">
                "The best thing to hold onto in life is each other."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Memories Gallery */}
        <section className="mb-16">
          <h3 className="text-3xl font-serif text-center text-gray-800 mb-8">
            Memories
          </h3>
          <MemoryGallery />
        </section>

        {/* Location Section */}
        <section className="mb-16">
          <h3 className="text-3xl font-serif text-center text-gray-800 mb-8">
            Location
          </h3>
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="text-2xl">📍</div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Galle Face Hotel
                </h4>
                <p className="text-gray-600">
                  2 Kollupitiya Road, Colombo 03, Sri Lanka
                </p>
                <div className="mt-6 h-64 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center">
                  {/* Replace with actual map */}
                  <span className="text-gray-500">Map View Here</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RSVP Form */}
        <section className="mb-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-serif text-center text-gray-800 mb-8">
              RSVP
            </h3>
            <p className="text-center text-gray-600 mb-8">
              Please respond by May 15, 2024
            </p>
            <RSVPForm />
          </div>
        </section>

        {/* Thank You Section */}
        <section className="text-center mb-16">
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-12 max-w-3xl mx-auto">
            <h3 className="text-3xl font-serif text-gray-800 mb-6">
              Thank you for being part of our special day
            </h3>
            <p className="text-xl text-gray-700 mb-6">
              We can't wait to celebrate with you!
            </p>
            <div className="text-rose-600 text-xl font-semibold">
              @SarahElizabethJames
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
