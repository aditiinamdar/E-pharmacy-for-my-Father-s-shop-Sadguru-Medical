import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden py-28 bg-linear-to-br from-lime-50 via-white to-emerald-50">

      {/* Soft background glows */}
      <div className="absolute -top-32 left-1/4 w-[360px] h-[360px]
        bg-emerald-300/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[320px] h-80
        bg-lime-300/30 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full
            bg-emerald-100 text-emerald-700 text-sm font-medium">
            Serving families for years
          </span>

          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight text-gray-900">
            Medicines you trust,
            <span className="block text-emerald-600">
              care you can rely on
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Daily medicines and healthcare essentials,
            delivered simply and reliably.
          </p>

          <div className="mt-10">
            <Link
              to="/products"
              className="inline-block px-10 py-3.5 rounded-full
              bg-linear-to-r from-emerald-600 to-green-500
              text-white font-semibold shadow-xl
              hover:scale-105 transition"
            >
              Shop Medicines
            </Link>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex justify-center">

          {/* Brand Card */}
          <div
            className="
              relative w-[70%] h-[520px]
              rounded-[44px]
              bg-white
              border border-emerald-200
              shadow-[0_45px_120px_-30px_rgba(16,185,129,0.4)]
              flex items-center justify-center
            "
          >
            {/* Center Image */}
            <img
              src={assets.sadguru}
              alt="Sadguru Medical"
              className="
                w-full
                max-w-[520px]
                 rounded-[44px]
                object-contain
                scale-[1.08]
              "
            />

            {/* Bottom Badge */}
            <div className="absolute -bottom-7 left-1/2 -translate-x-1/2
              px-8 py-2.5 rounded-full
              bg-linear-to-r from-emerald-600 to-green-500
              text-white text-sm font-semibold shadow-xl">
              Your health. Our priority.
            </div>
          </div>

          {/* Floating cards */}
          <div className="absolute -left-14 top-16
            px-6 py-3.5 rounded-2xl bg-white shadow-lg
            text-sm font-medium animate-float">
            💊 Trusted medicines
          </div>

          <div className="absolute -right-6 bottom-20
            px-6 py-3.5 rounded-2xl bg-white shadow-lg
            text-sm font-medium animate-float-delayed">
            🚚 Fast delivery
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 7.5s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
