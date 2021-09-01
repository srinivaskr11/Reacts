function Form(props) {
  return (
    <div class="min-h-screen bg-gray-100 py-0 flex flex-col justify-center sm:py-12 ">
      <div class="flex items-center justify-center h-screen w-screen  ">
        <div className="lg:bg-white  p-2 rounded-md md:w-3/12  w-full">
          <div>
            <svg
              style={{
                transition: ".3s",
              }}
              viewBox="0 0 1440 490"
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(180)"
              {...props}
            >
              <path
                fill="#6658d3"
                d="M0 49l40-8.2c40-7.8 120-24.8 200 0 80 24.2 160 90.2 240 98 80 8.2 160-40.8 240-32.6C800 114 880 180 960 196s160-16 240-57.2c80-40.8 160-89.8 240-73.5C1520 82 1600 163 1680 196c80 33 160 16 240-24.5S2080 65 2160 49s160 16 240 81.7c80 65.3 160 163.3 240 147 80-16.7 160-146.7 240-196 80-48.7 160-16.7 240-8.2S3280 65 3360 98s160 114 240 130.7c80 16.3 160-32.7 240-40.9 80-7.8 160 24.2 240 65.4 80 40.8 160 89.8 240 98 80 7.8 160-24.2 240-16.4 80 8.2 160 57.2 240 8.2s160-196 240-228.7c80-32.3 160 48.7 240 73.5 80 24.2 160-7.8 240 0 80 8.2 160 57.2 200 81.7l40 24.5v196H0z"
              />
            </svg>
          </div>
          <div className="">
            <h1 className=" ml-8 font-sans font-bold pt-5 text-left">
              Welcome back!
            </h1>
          </div>
          <div className="">
            <form>
              <div className="px-8 py-6">
                <label className="block font-semibold">
                  Username or Email:
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full h-5 px-3 py-5 mt-5 outline-none border-b-2 hover:outline-none focus:outline-none border-indigo-600"
                ></input>
              </div>
              <div className="px-8 py-6">
                <label className="block font-semibold">Password:</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full h-5 px-3 py-5 mt-5 outline-none border-b-2 hover:outline-none focus:outline-none border-indigo-600"
                ></input>
              </div>
              <div className="px-8 py-6">
                <button className="w-full bg-indigo-500 rounded-md font-semibold font-sans p-2 hover:bg-indigo-700 text-center text-white focus:outline-none">
                  Sign in
                </button>
              </div>
              <div className="px-8 py-6">
                <span className="text-center flex justify-center font-medium  p-5">
                  Forgot Password?
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
