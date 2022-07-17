import React, { useState } from "react";

const Contact = () => {
  const [isActive, setisActive] = useState(false);
  const [user, setuser] = useState({
    House_No: "27",
    add2: "Harikrishna",
    add3: "Ankleshwar Mahadev Road",
    city: "Godhra",
    pincode: "389001",
    state: "Gujarat",
    country: "India",
    mobile: "6359428485",
    phone: "8732937702",
    email: "vraj.patel4801@gmail.com",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
  };

  const postdata = async (ev) => {
    ev.preventDefault();
    const {
      House_No,
      add2,
      add3,
      city,
      pincode,
      state,
      country,
      mobile,
      phone,
      email,
    } = user;
    const response = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        House_No,
        add2,
        add3,
        city,
        pincode,
        state,
        country,
        mobile,
        phone,
        email,
      }),
    });
    const data = await response.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid data");
      console.log("Invalid data");
    } else {
      window.alert("data stored successfully");
      console.log("data stored successfully");
      window.location = "/";
    }
  };

  return (
    <>
      {isActive && (
        <div
          class="overflow-y-auto fixed inset-0 z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div class="flex items-end justify-center min- px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              class="transition-opacity bg-gray-500 bg-opacity-75"
              aria-hidden="true"
            ></div>

            <span
              class="hidden sm:inline-block sm:align-middle sm:"
              aria-hidden="true"
            >

            </span>

            {/* modal content */}

            <div>
              <div className="mt-16 bg-orange-200 border-orange-500 border-2 max-w-[36rem] mx-auto rounded-lg shadow-2xl">
                <div className="flex flex-row items-center justify-between bg-orange-500">
                  <h1 className="font-bold text-2xl m-2">
                    Local Contact Information
                  </h1>
                  <button
                    onClick={() => {
                      setisActive(!isActive);
                    }}
                    className="font-bold hover:bg-orange-700 transition-colors duration-300 ease-in hover:text-white text-xl mx-2 px-2 h-8 rounded-full"
                  >
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </div>
                <form method="POST" className="m-4">
                  <div className="mb-4 flex flex-col items-start sm:flex-row sm:items-center justify-start">
                    <label className="text-lg w-full sm:w-1/3 mb-0.5 sm:mb-0 text-left">
                      House No
                    </label>
                    <input
                      className="p-2 w-full sm:w-2/3 rounded-lg placeholder-slate-900 border border-gray-300 outline-none focus:border-rose-300 transistion-all duration-33 ease-linear"
                      onChange={handleInputs}
                      name="House_No"
                      id="House_No"
                      value={user.House_No}
                    />
                  </div>
                  <div className="mb-4 flex flex-col items-start sm:flex-row sm:items-center justify-start">
                    <label className="text-lg w-full sm:w-1/3 mb-0.5 sm:mb-0 text-left">
                      Address 2
                    </label>
                    <input
                      className="p-2 w-full sm:w-2/3 rounded-lg placeholder-slate-900 border border-gray-300 outline-none focus:border-rose-300 transistion-all duration-33 ease-linear"
                      onChange={handleInputs}
                      name="add2"
                      id="add2"
                      value={user.add2}
                    />
                  </div>
                  <div className="mb-4 flex flex-col items-start sm:flex-row sm:items-center justify-start">
                    <label className="text-lg w-full sm:w-1/3 mb-0.5 sm:mb-0 text-left">
                      Address 3
                    </label>
                    <input
                      className="p-2 w-full sm:w-2/3 rounded-lg placeholder-slate-900 border border-gray-300 outline-none focus:border-rose-300 transistion-all duration-33 ease-linear"
                      onChange={handleInputs}
                      name="add3"
                      id="add3"
                      value={user.add3}
                    />
                  </div>
                  <div className="mb-4 flex flex-col items-start sm:flex-row sm:items-center justify-start">
                    <label className="text-lg w-full sm:w-1/3 mb-0.5 sm:mb-0 text-left">
                      City
                    </label>
                    <input
                      className="p-2 w-full sm:w-2/3 rounded-lg placeholder-slate-900 border border-gray-300 outline-none focus:border-rose-300 transistion-all duration-33 ease-linear"
                      onChange={handleInputs}
                      name="city"
                      id="city"
                      value={user.city}
                    />
                  </div>
                  <div className="mb-4 flex flex-col items-start sm:flex-row sm:items-center justify-start">
                    <label className="text-lg w-full sm:w-1/3 mb-0.5 sm:mb-0 text-left">
                      Pincode
                    </label>
                    <input
                      className="p-2 w-full sm:w-2/3 rounded-lg placeholder-slate-900 border border-gray-300 outline-none focus:border-rose-300 transistion-all duration-33 ease-linear"
                      onChange={handleInputs}
                      name="pincode"
                      id="pincode"
                      value={user.pincode}
                    />
                  </div>
                  <div className="flex justify-between gap-x-4">
                    <div className="mb-4 w-1/2 flex flex-col items-start justify-start">
                      <label className="text-lg w-full mb-0.5 sm:mb-0 text-left">
                        State
                      </label>
                      <input
                        className="p-2 w-full rounded-lg placeholder-slate-900 border border-gray-300 outline-none focus:border-rose-300 transistion-all duration-33 ease-linear"
                        onChange={handleInputs}
                        name="state"
                        id="state"
                        value={user.state}
                      />
                    </div>
                    <div className="mb-4 w-1/2 flex flex-col items-start justify-start">
                      <label className="text-lg w-full mb-0.5 sm:mb-0 text-left">
                        Country
                      </label>
                      <input
                        className="p-2 w-full rounded-lg placeholder-slate-900 border border-gray-300 outline-none focus:border-rose-300 transistion-all duration-33 ease-linear"
                        onChange={handleInputs}
                        name="country"
                        id="country"
                        value={user.country}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between gap-x-4">
                    <div className="mb-4 w-1/2 flex flex-col items-start justify-start">
                      <label className="text-lg w-full mb-0.5 sm:mb-0 text-left">
                        Phone No.
                      </label>
                      <input
                        className="p-2 w-full rounded-lg placeholder-slate-900 border border-gray-300 outline-none focus:border-rose-300 transistion-all duration-33 ease-linear"
                        onChange={handleInputs}
                        name="phone"
                        id="phone"
                        value={user.phone}
                      />
                    </div>
                    <div className="mb-4 w-1/2 flex flex-col items-start justify-start">
                      <label className="text-lg w-full mb-0.5 sm:mb-0 text-left">
                        Mobile No.
                      </label>
                      <input
                        className="p-2 w-full rounded-lg placeholder-slate-900 border border-gray-300 outline-none focus:border-rose-300 transistion-all duration-33 ease-linear"
                        onChange={handleInputs}
                        name="mobile"
                        id="mobile"
                        value={user.mobile}
                      />
                    </div>
                  </div>
                  <div className="mb-4 flex flex-col items-start sm:flex-row sm:items-center justify-start">
                    <label className="text-lg w-full sm:w-1/3 mb-0.5 sm:mb-0 text-left">
                      Email
                    </label>
                    <input
                      className="p-2 w-full sm:w-2/3 rounded-lg placeholder-slate-900 border border-gray-300 outline-none focus:border-rose-300 transistion-all duration-33 ease-linear"
                      onChange={handleInputs}
                      name="email"
                      id="email"
                      value={user.email}
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      name="submit"
                      id="submit"
                      value={"submit"}
                      onClick={postdata}
                      className="bg-orange-700 rounded-md w-20 h-10 py-2 text-white"
                    >
                      Save <i class="fa-solid fa-floppy-disk"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="lg:w-1/2 w-full">
        <div className="mt-4 flex justify-between items-center">
          <h1 className="text-2xl lg:text-4xl font-bold">
            Contact Information
          </h1>
          <button
            onClick={() => {
              setisActive(!isActive);
            }}
            className="cursor-pointer p-2 bg-[#e64b09] hover:text-orange-600 hover:bg-white ibs text-white font-medium rounded-md flex gap-x-2 items-center transition-colors duration-300 ease-linear"
          >
            Edit
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
        <hr className="rounded-full shadow-xl mt-2 mb-4 pt-1 max-w-[40rem] bg-gradient-to-r from-[#f4510b]  to-[#e9d022]" />
        <div className="h-80 font-medium rounded-lg border shadow-xl text-[12px] lg:text-[16px] border-orange-500 px-2 py-4 flex justify-evenly flex-col bg-orange-200">
          <div className="flex justify-between">
            <h2>Address 1</h2>
            <h4>{user.House_No}</h4>
          </div>
          <div className="flex justify-between">
            <h2>Address 2</h2>
            <h4>{user.add2}</h4>
          </div>
          <div className="flex justify-between">
            <h2>Address 3</h2>
            <h4>{user.add3}</h4>
          </div>
          <div className="flex justify-between">
            <h2>City</h2>
            <h4>{user.city}</h4>
          </div>
          <div className="flex justify-between">
            <h2>Pincode</h2>
            <h4>{user.pincode}</h4>
          </div>
          <div className="flex justify-between">
            <h2>State</h2>
            <h4>{user.state}</h4>
          </div>
          <div className="flex justify-between">
            <h2>Country</h2>
            <h4>{user.country}</h4>
          </div>
          <div className="flex justify-between">
            <h2>Phone No</h2>
            <h4>{user.phone}</h4>
          </div>
          <div className="flex justify-between">
            <h2>Mobile No</h2>
            <h4>{user.mobile}</h4>
          </div>
          <div className="flex justify-between">
            <h2>Email</h2>
            <h4>{user.email}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
