import React, {  useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { _Auth } from "../../../../Backend/BackendBass";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { RiEyeFill } from "react-icons/ri";
import { RiEyeOffFill } from "react-icons/ri";
import { useContext } from "react";
import { authUser } from "../../../../Context/autheruserContext";

const Register = () => {
  let [showPassword, setShowPassword] = useState(false);
  let [showConfirmPassword, setShowConfirmPassword] = useState(false);

  let [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  
  let navigate = useNavigate();

  let dataa=useContext(authUser)
  console.log(dataa);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (userData.password === userData.confirmPassword) {
        console.log(userData);

        let data = await createUserWithEmailAndPassword(
          _Auth,
          userData.email,
          userData.password,
        );
        console.log(data);

        let emailVeri = await sendEmailVerification(data.user);
        // console.log(emailVeri);
        toast.success("Email Verification sent");
       
       await updateProfile(data.user,
        {
          displayName:userData.name,
          photoURL:"https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
        })

        navigate("/login");
      } else {
        setUserData({
          ...userData,
          password:"",
          confirmPassword:""
        })
        console.log("Password mismatch");
        toast.success("password mismatch")
      }
    } catch (err) {
      // console.log(err);
      toast.error(err.message.slice(22, err.message.length - 2) + ".");
    }
  }

  function handleChange(e) {
    let { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  }

  return (
    <section className="w-full h-[calc(100vh-75px)] bg-slate-900 flex items-center flex-col pt-2">
      <header>
        <h1 className="text-3xl text-amber-300 font-bold">REGISTER</h1>
      </header>

      <main className="w-100 bg-slate-500 mt-7 rounded-[10px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-4">
          <div>
            <label
              htmlFor="name"
              className="text-white font-bold text-[16px] tracking-wider"
            >
              UserName:
            </label>
            <input
              className="w-full p-1 pl-3  border-2 border-slate-200 rounded-md outline-0 focus:border-gray-900"
              type="text"
              placeholder="Enter your name..."
              name="name"
              value={userData.name}
              onChange={handleChange}
            />
          </div>
          <br />

          <div>
            <label
              htmlFor="email"
              className="text-white font-bold text-[16px] tracking-wider"
            >
              Email:
            </label>
            <input
              className="w-full p-1 pl-3 border-2 border-slate-200 rounded-md outline-0 focus:border-gray-900"
              type="email"
              placeholder="Enter your email..."
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
          </div>
          <br />

          <div>
            <label
              htmlFor="password"
              className="text-white font-bold text-[16px] tracking-wider"
            >
              Password:
            </label>

            <div className="flex border-2 border-slate-200 rounded-md">
              <input
                className="w-full p-1 pl-3 outline-0 focus:border-gray-900"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password... "
                name="password"
                value={userData.password}
                onChange={handleChange}
              />
              <button
                className="mr-2"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                >
                {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
              </button>
            </div>
          </div>
          <br />

          <div>
            <label
              htmlFor="confirmPassword"
              className="text-white font-bold text-[16px] tracking-wider"
            >
              Confirm password:
            </label>

            <div className="flex border-2 border-slate-200 rounded-md">
              <input
                className="w-full p-1 pl-3 outline-0 focus:border-gray-900"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password..."
                name="confirmPassword"
                value={userData.confirmPassword}
                onChange={handleChange}
              />
              <button
                className="mr-2"
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <RiEyeOffFill /> : <RiEyeFill />}
              </button>
            </div>
          </div>
          <br />

          <input
            className="bg-purple-900 h-10 rounded-md hover:bg-purple-800 active:border border-white text-white transition-colors duration-250"
            type="submit"
          />
        </form>
      </main>
    </section>
  );
};

export default Register

