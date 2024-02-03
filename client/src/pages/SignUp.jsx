import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
// import OAuth from "../components/OAuth";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   updateProfile,
// } from "firebase/auth";
// import { db } from "../firebase";
// import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  const navigate = useNavigate();
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  async function onSubmit(e) {
    e.preventDefault();

    try {
      //   const auth = getAuth();
      //   const userCredential = await createUserWithEmailAndPassword(
      //     auth,
      //     email,
      //     password
      //   );

      //   updateProfile(auth.currentUser, {
      //     displayName: name,
      //   });
      //   const user = userCredential.user;
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      //   formDataCopy.timestamp = serverTimestamp();

      //   await setDoc(doc(db, "users", user.uid), formDataCopy);
      toast.success("Registration was Successful!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/");
    } catch (error) {
      toast.error("Registration was Unsuccessful", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold mb-20">Sign Up</h1>
      <div className="flex justify-center flex-wrap items-center max-w-6xl m-auto px-6 py-12">
        <div className="md:w-[67%] md:mb-6 lg:w-[50%] mb-12">
          <img
            src="https://img.freepik.com/free-vector/placeholder-concept-illustration_114360-4727.jpg?w=1480&t=st=1687980300~exp=1687980900~hmac=dcd24ddb4eaf10232e667fe6edb08345f2fa5f0f2b05dbb77071a1e6efa9deaa"
            alt="sign-in"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20 lg:-mt-6">
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                value={name}
                onChange={onChange}
                placeholder="Name"
                className="w-full mb-4 px-4 py-2 text-xl text-gray-600 bg-white rounded-xl border-none transition ease-in-out"
              />
              <input
                type="email"
                id="email"
                value={email}
                onChange={onChange}
                placeholder="Email"
                className="w-full px-4 py-2 text-xl text-gray-600 bg-white rounded-xl border-none transition ease-in-out"
              />
            </div>
            <div className="mb-4">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={onChange}
                  placeholder="Password"
                  className="w-full px-4 py-2 text-xl text-gray-600 bg-white rounded-xl border-none transition ease-in-out"
                />
                {showPassword ? (
                  <AiOutlineEye
                    className="absolute right-3 top-2 text-3xl cursor-pointer"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-3 top-2 text-3xl cursor-pointer"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                )}
              </div>
            </div>{" "}
            <div className="flex justify-between font-medium whitespace-nowrap text-sm sm:text-base mb-4">
              <p>
                Already have an Account?
                <Link
                  to="/Sign-In"
                  className=" text-white ml-1 hover:text-black transition duration-200 ease-in-out"
                >
                  Sign In
                </Link>
              </p>
              <p>
                <Link
                  to="/Forgot-Password"
                  className=" text-white hover:text-black transition duration-200 ease-in-out"
                >
                  Forgot Password?
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-xl text-white bg-black rounded-xl border-none shadow-lg hover:text-black hover:bg-white transition duration-200 ease-in-out"
            >
              SIGN UP
            </button>
            <div className=" flex items-center my-4 before:border-t before:flex-1 before:border-white after:border-t after:flex-1 after:border-white">
              <p className=" text-center font-semibold mx-4">OR</p>
            </div>
            {/* <OAuth /> */}
            <button
              type="button"
              className="w-full flex items-center justify-center px-4 py-2 text-xl text-white bg-black rounded-xl border-none shadow-lg hover:text-black hover:bg-white transition duration-200 ease-in-out"
            >
              <FcGoogle className="mr-2" />
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
