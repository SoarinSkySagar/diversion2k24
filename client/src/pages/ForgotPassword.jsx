// import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
// import OAuth from "../components/OAuth";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  function onChange(e) {
    setEmail(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      //   const auth = getAuth();
      //   await sendPasswordResetEmail(auth, email);
      toast.success("Email was sent", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/Sign-In");
    } catch (error) {
      toast.error("Could not send reset password", {
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
      <h1 className="text-3xl text-center mt-6 font-bold mb-20">Forgot Password</h1>
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
                type="email"
                id="email"
                value={email}
                onChange={onChange}
                placeholder="Email"
                className="w-full px-4 py-2 text-xl text-gray-600 bg-white rounded-xl border-none transition ease-in-out"
              />
            </div>

            <div className="flex justify-between font-medium whitespace-nowrap text-sm sm:text-base mb-4">
              <p>
                Don't have an Account?
                <Link
                  to="/Sign-Up"
                  className=" text-white ml-1 hover:text-black transition duration-200 ease-in-out"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to="/Sign-In"
                  className=" text-white hover:text-black transition duration-200 ease-in-out"
                >
                  Sign In instead
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-xl text-white bg-black rounded-xl border-none shadow-lg hover:text-black hover:bg-white transition duration-200 ease-in-out"
            >
              RESET PASSWORD
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
