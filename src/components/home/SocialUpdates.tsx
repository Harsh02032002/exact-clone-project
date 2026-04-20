import SectionHeading from "../SectionHeading";
import { Facebook, Instagram } from "lucide-react";

const SocialUpdates = () => (
  <section className="section bg-primary-deep text-white">
    <div className="container-x">
      <SectionHeading
        eyebrow="Connect With Us"
        eyebrowClass="text-gold"
        title={<span className="text-white">Latest Social Updates</span>}
        subtitle={
          <span className="text-white/70">
            Stay updated with our latest posts, insights, and announcements directly from our social media channels.
          </span>
        }
      />

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        {/* Facebook Card */}
        <div className="bg-[#0f1a33] rounded-md overflow-hidden border-t-4 border-gold shadow-xl">
          <div className="flex items-center gap-3 px-5 py-4 bg-[#0f1a33] border-b border-white/5">
            <div className="w-9 h-9 rounded-full bg-[#1877F2] flex items-center justify-center">
              <Facebook className="w-5 h-5 text-white" fill="white" />
            </div>
            <span className="text-white font-medium">Facebook</span>
          </div>
          <div className="bg-white">
            <iframe
              title="Anant Finserv Facebook"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fanantfinserv&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
              width="100%"
              height="600"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              loading="lazy"
            />
          </div>
        </div>

        {/* Instagram Card */}
        <div className="bg-[#0f1a33] rounded-md overflow-hidden border-t-4 border-gold shadow-xl">
          <div className="flex items-center gap-3 px-5 py-4 bg-[#0f1a33] border-b border-white/5">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center">
              <Instagram className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-medium">Instagram</span>
          </div>
          <div className="bg-white">
            <iframe
              title="Anant Finserv Instagram"
              src="https://www.instagram.com/finservanant/embed"
              width="100%"
              height="600"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SocialUpdates;
