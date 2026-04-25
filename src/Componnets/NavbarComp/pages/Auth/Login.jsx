
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import toast from "react-hot-toast";
import {Link, useNavigate } from "react-router-dom";
import { _Auth } from "../../../../Backend/BackendBass";


const Login = () => {
  const [showPassword,setShowPassword]=useState(false)

  let [formdata, setFormData] = useState({
    email: "",
    password: ""
  })

  //Navigate
  let navigate = useNavigate()

  function handleinput(e) {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()

   try {
      let res = await signInWithEmailAndPassword(
        _Auth,
        formdata.email,
        formdata.password
      );

      const user = res.user;

      if (user.emailVerified) {
        // ✅ FIXED HERE
        localStorage.setItem("user", JSON.stringify(user));

        toast.success("Login successfully");
        navigate("/");
      } else {
        toast.error("Please verify your email");
      }
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <div className="flex items-center justify-center h-[calc(100vh-75px)] bg-gradient-to-r from-purple-400 to-blue-400">

      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>

          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={formdata.email}
            onChange={handleinput}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <label className="block text-sm font-medium mb-1">Password</label>
          <div className="relative">
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={formdata.password}
            onChange={handleinput}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2 cursor-pointer"
            >
              {showPassword}
            </span>
          </div>

          <button className="w-full bg-blue-500 text-white p-2 rounded-md">
            Login
          </button>

        </form>

        <p className="text-center text-sm mt-4">
          Don't have an account?
          <Link to="/Register">
            <span className="text-blue-500 cursor-pointer ml-1">
              Register
            </span>
          </Link>
        </p>

      </div>

    </div>
  )
}

export default Login