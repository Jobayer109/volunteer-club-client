import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        navigate("/");
        form.reset();
        console.log(result.user);
      })
      .then((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex items-center justify-evenly w-[80%] mx-auto my-24">
      <div className="w-1/2">
        <img
          className="w-[80%]"
          src="https://img.freepik.com/free-vector/account-concept-illustration_114360-399.jpg?w=740&t=st=1667796009~exp=1667796609~hmac=b0392c83f220c9aca5c374bebecf7865b83f7d30a7feec61ca86c45035481d6d"
          alt=""
        />
      </div>
      <div className="p-4 w-1/2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 transition duration-700 ease-out hover:bg-gray-300 ">
        <form onSubmit={handleSubmit} className="space-y-6" action="#">
          <h5 className="text-3xl font-bold text-center pt-3 pb-6 text-gray-900 ">Sign in</h5>
          <div>
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">
              Your email
            </label>
            <input
              type="email"
              name="email"
              className="w-full border p-3 rounded-lg"
              placeholder="email"
              required
            />
          </div>
          <div>
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              className="w-full border p-3 rounded-lg"
              placeholder="password"
              required
            />
          </div>
          <div className="">
            <Link
              to="/"
              className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Forget Password?
            </Link>
          </div>
          <button type="submit" className="w-full btn btn-outline btn-primary">
            Sign in
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <Link to="/register" className="text-blue-700 hover:underline dark:text-blue-500">
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
