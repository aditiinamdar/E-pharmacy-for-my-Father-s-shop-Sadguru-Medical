import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {
    user,
    setUser,
    navigate,
    setShowUserLogin,
    cartCount,
    searchQuery,
    setSearchQuery,
  } = useContext(AppContext);

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/products");
    }
  }, [searchQuery, navigate]);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-green-600">
            Pharmacy<span className="text-gray-700">App</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8 text-gray-700 font-medium">

          <Link className="hover:text-green-600 transition" to="/">Home</Link>
          <Link className="hover:text-green-600 transition" to="/products">
            Products
          </Link>

          {/* Search */}
          <div className="hidden lg:flex items-center gap-2 border border-gray-300 px-4 py-1.5 rounded-full focus-within:border-green-500 transition">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              placeholder="Search medicines..."
              className="bg-transparent outline-none text-sm w-40 placeholder-gray-400"
            />
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10.836 10.615 15 14.695" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#6B7280" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Cart */}
          <div
            onClick={() => navigate("/cart")}
            className="relative cursor-pointer"
          >
            <img src={assets.cart_icon} alt="cart" className="w-6 h-6" />
            {cartCount() > 0 && (
              <span className="absolute -top-2 -right-3 bg-green-600 text-white text-xs
               w-[18px] h-[18px] flex items-center justify-center rounded-full">
                {cartCount()}
              </span>
            )}
          </div>

         {/* User Dropdown (FIXED) */}
{user ? (
  <div className="relative group">
    {/* Added a bit of padding to the bottom to bridge the gap to the menu */}
    <div className="pb-2">
      <img
        src={assets.profile_icon}
        alt="profile"
        className="w-9 h-9 cursor-pointer"
      />
    </div>

    <ul
      className="
        absolute right-0 top-full
        w-40 text-sm bg-white border border-gray-100 rounded-xl shadow-xl
        opacity-0 invisible 
        group-hover:opacity-100 group-hover:visible
        transition-all duration-200 ease-out
        z-100 overflow-hidden
      "
    >
      <li
        onClick={() => {
          navigate("/my-orders");
          // Force close dropdown if needed by blurring or adding a state
        }}
        className="px-5 py-3 hover:bg-emerald-50 hover:text-emerald-700 cursor-pointer transition-colors border-b border-gray-50"
      >
        My Orders
      </li>

      <li
        onClick={() => setUser(null)}
        className="px-5 py-3 hover:bg-red-50 text-red-600 cursor-pointer transition-colors"
      >
        Logout
      </li>
    </ul>
  </div>
) : (
  <button
    onClick={() => setShowUserLogin(true)}
    className="px-6 py-2 bg-green-600 hover:bg-green-700
      text-white rounded-full transition shadow-md active:scale-95"
  >
    Login
  </button>
)}

         
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden"
          aria-label="menu"
        >
          <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
            <rect width="24" height="2" rx="1" fill="#374151" />
            <rect y="7" width="18" height="2" rx="1" fill="#374151" />
            <rect y="14" width="20" height="2" rx="1" fill="#374151" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="sm:hidden px-6 py-4 border-t bg-white space-y-3">
          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/products">Products</Link>

          {user ? (
            <>
              <p
                onClick={() => {
                  navigate("/my-orders");
                  setOpen(false);
                }}
                className="cursor-pointer"
              >
                My Orders
              </p>
              <p
                onClick={() => {
                  setUser(null);
                  setOpen(false);
                }}
                className="cursor-pointer text-red-600"
              >
                Logout
              </p>
            </>
          ) : (
            <button
              onClick={() => {
                setShowUserLogin(true);
                setOpen(false);
              }}
              className="w-full bg-green-600 text-white py-2 rounded-full"
            >
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
