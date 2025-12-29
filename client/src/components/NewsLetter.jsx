const NewsLetter = () => {
  return (
    <section className="my-8 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
        Never miss a deal
      </h2>

      <p className="mt-2 text-gray-600 max-w-xl mx-auto text-sm md:text-base">
        Get updates on new medicines, special offers,
        and health essentials straight to your inbox.
      </p>

      {/* Form: Stacked on mobile (flex-col), side-by-side on md screens (md:flex-row) */}
      <form className="mt-6 flex flex-col md:flex-row items-center max-w-xl mx-auto gap-3 md:gap-0">
        <input
          type="email"
          required
          placeholder="Enter your email address"
          className="
            w-full flex-1 px-6 py-4
            border border-gray-300
            rounded-full md:rounded-r-none md:rounded-l-full
            outline-none
            text-gray-700
            placeholder-gray-400
          "
        />

        <button
          type="submit"
          className="
            w-full md:w-auto px-8 md:px-12 py-4
            bg-gradient-to-r from-emerald-600 to-green-500
            text-white font-semibold
            rounded-full md:rounded-l-none md:rounded-r-full
            hover:brightness-110 transition
          "
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default NewsLetter;
