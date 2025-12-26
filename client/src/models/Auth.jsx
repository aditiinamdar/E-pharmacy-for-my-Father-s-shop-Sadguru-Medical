import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { toast } from "react-hot-toast";

const Auth = () => {
  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setShowUserLogin, setUser, axios, navigate } =
    useContext(AppContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`/api/user/${state}`, {
        name,
        email,
        password,
      });

      if (data.success) {
        toast.success(data.message);
        setUser(data.user);
        setShowUserLogin(false);
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Something went wrong"
      );
    }
  };

  return (
    <div
      onClick={() => setShowUserLogin(false)}
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 text-gray-600"
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={submitHandler}
        className="flex flex-col gap-4 p-8 py-12 w-80 sm:w-[352px]
        text-gray-500 rounded-lg shadow-xl border border-gray-200 bg-white"
      >
        <p className="text-2xl font-medium m-auto">
          <span className="text-green-600">User </span>
          {state === "login" ? "Login" : "Sign Up"}
        </p>

        {state === "register" && (
          <div className="w-full">
            <p>Name</p>
            <input
              type="text"
              required
              placeholder="type here"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-green-600"
            />
          </div>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            type="email"
            required
            placeholder="type here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
          />
        </div>

        <div className="w-full">
          <p>Password</p>
          <input
            type="password"
            required
            placeholder="type here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
          />
        </div>

        {state === "register" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setState("login")}
              className="text-green-600 cursor-pointer"
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Create an account?{" "}
            <span
              onClick={() => setState("register")}
              className="text-green-600 cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 transition-all
          text-white w-full py-2 rounded-md"
        >
          {state === "register" ? "Create Account" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Auth;
