import React from "react";

const Login = () => {
  return (
    <section className=" mt-30 flex items-center rounded-3xl justify-center bg-[#f1f1f1] px-4 py-16">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Login Account
        </h2>
        <p className="text-gray-600 text-center mb-8 text-sm">
          Login to access your account and continue shopping.
        </p>

        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-2xl hover:bg-gray-800 transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <a href="#" className="text-black font-semibold hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </section>
  );
};

export default Login;
