import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const AddAddress = () => {
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const { axios, user, navigate } = useContext(AppContext);

  const handleChange = (e) =>
    setAddress({ ...address, [e.target.name]: e.target.value });

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("/api/address/add", { address });
      if (data.success) {
        toast.success("Address saved successfully");
        navigate("/cart");
      } else toast.error(data.message);
    } catch (err) {
      toast.error(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user) navigate("/cart");
  }, [user, navigate]);

  return (
    <section className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-lime-50 py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT – FORM */}
        <div className="
          bg-white/70 backdrop-blur-xl
          border border-emerald-200
          rounded-[40px]
          p-10
          shadow-[0_40px_120px_-30px_rgba(16,185,129,0.35)]
        ">
          <h2 className="text-3xl font-semibold text-gray-900">
            Delivery Address
          </h2>
          <p className="mt-2 text-gray-600">
            Where should we deliver your medicines?
          </p>

          <form
            onSubmit={submitHandler}
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {[
              ["First name", "firstName"],
              ["Last name", "lastName"],
              ["Email address", "email", "email"],
              ["Street / Apartment", "street"],
              ["City", "city"],
              ["State", "state"],
              ["Zip code", "zipCode"],
              ["Country", "country"],
              ["Phone number", "phone", "tel"],
            ].map(([label, name, type = "text"], i) => (
              <div
                key={name}
                className={
                  ["email", "street", "phone"].includes(name)
                    ? "md:col-span-2"
                    : ""
                }
              >
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  value={address[name]}
                  onChange={handleChange}
                  required
                  className="
                    w-full px-4 py-3
                    rounded-xl
                    border border-gray-300
                    bg-white
                    focus:ring-2 focus:ring-emerald-400
                    focus:border-transparent
                    outline-none
                    transition
                  "
                />
              </div>
            ))}

            <div className="md:col-span-2 mt-6">
              <button
                type="submit"
                disabled={loading}
                className={`
                  w-full py-4 rounded-full
                  text-white font-semibold text-lg
                  transition-all
                  ${
                    loading
                      ? "bg-emerald-300 cursor-not-allowed"
                      : "bg-linear-to-r from-emerald-600 to-green-500 hover:scale-[1.02]"
                  }
                `}
              >
                {loading ? "Saving address..." : "Save & Continue"}
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT – VISUAL */}
        <div className="hidden lg:flex justify-center">
          <div className="
            relative w-[420px] h-[420px]
            rounded-[48px]
            bg-white
            border border-emerald-200
            shadow-[0_40px_120px_-30px_rgba(16,185,129,0.4)]
            flex items-center justify-center
          ">
            <img
              src={assets.add_address_iamge}
              alt="Delivery illustration"
              className="w-[80%] object-contain"
            />

            <div className="absolute -bottom-6 px-6 py-2 rounded-full
              bg-linear-to-r from-emerald-600 to-green-500
              text-white text-sm font-medium shadow-lg">
              Safe & fast delivery
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AddAddress;
