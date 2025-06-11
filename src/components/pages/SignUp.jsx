import React, { useState } from "react";
import { Button, Input, Logo } from "./../index";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import authService from "./../../appwrite/auth";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const signUp = async (data) => {
    setError("");
    setLoading(true);

    try {
      const session = await authService.createAccount(
        data.Email,
        data.Password,
        data.Name
      );
      if (session) {
        const userData = await authService.getCurrentUser();
        console.log(userData);
        if (userData) {
          dispatch.login(userData);
          navigate("/");
        }
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full px-4 py-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-white/10 to-transparent rounded-full"></div>
      </div>
      <div className="w-full max-w-md relative z-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-white/20 p-6 sm:p-8">
          <div className="flex flex-col items-center mb-6">
            <div className="mb-4">
              <Logo />
            </div>
            <h2 className="text-center text-2xl sm:text-3xl font-bold leading-tight text-gray-900">
              Welcome to TechBlogs
            </h2>
            <p className="mt-2 text-center text-sm sm:text-base text-gray-600">
              have an account?
              <Link
                to="/signin"
                className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-500 hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-600 text-sm text-center">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit(signUp)} className="space-y-4">
            <div>
              <Input
                label="Full Name"
                type="text"
                placeholder="Enter your full name"
                className="w-full"
                {...register("Name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name should have more then two characters",
                  },
                })}
              />
              {errors.Name && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.Name.message}
                </p>
              )}
            </div>
            <div>
              <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
                className="w-full"
                {...register("Email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Email address must be a valid address",
                  },
                })}
              />
              {errors.Email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.Email.message}
                </p>
              )}
            </div>

            <div>
              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                className="w-full"
                {...register("Password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />
              {errors.Password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.Password.message}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full mt-6" disabled={loading}>
              {loading ? "Signing Up..." : "Sign Up"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
