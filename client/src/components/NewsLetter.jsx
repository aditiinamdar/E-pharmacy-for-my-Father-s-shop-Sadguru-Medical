const NewsLetter = () => {
  return (
    <section className="my-8 px-2 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
        Never miss a deal
      </h2>

      <p className="mt-1 text-gray-600 max-w-xl mx-auto">
        Get updates on new medicines, special offers,
        and health essentials straight to your inbox.
      </p>

      {/* Form */}
      <form className="flex items-center max-w-xl mx-auto">
        <input
          type="email"
          required
          placeholder="Enter your email address"
          className="
            flex-1 px-6 py-4
            border border-gray-300
            rounded-l-full
            outline-none
            text-gray-700
            placeholder-gray-400
          "
        />

        <button
          type="submit"
          className="
            px-8 md:px-12 py-4
            bg-linear-to-r from-emerald-600 to-green-500
            text-white font-semibold
            rounded-r-full
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
