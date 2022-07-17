import React from "react";

const Profile = () => {
  return (
    <>
      <h1 className="mx-2 md:mx-12 m-4 font-bold pb-2">Student Profile<hr className="rounded-full shadow-xl mt-2 pt-1 max-w-[40rem] bg-gradient-to-r from-[#f4510b]  to-[#e9d022]" /></h1>
      <div className="res-text mx-2 flex flex-col lg:flex-row p-4 justify-between items-center lg:h-[80vh] h-min-[80vh] md:mx-12 mb-12 font-medium rounded-lg shadow-xl border border-orange-600 bg-orange-200">
        <div className="profile-left lg:border-r-2 lg:border-b-0 border-orange-600 flex justify-between flex-col h-full gap-2 lg:py-4 py-[5px] w-full lg:w-2/3">
          <div className="flex justify-between">
            <h2>DDU Reporting Date</h2>
            <h4 className="text-right">10/11/2020</h4>
          </div>
          <div className="flex justify-between">
            <h2>Admission Type</h2>
            <h4 className="text-right">SF</h4>
          </div>
          <div className="flex justify-between">
            <h2>First Name</h2>
            <h4 className="text-right">VrajKumar</h4>
          </div>
          <div className="flex justify-between">
            <h2>Last Name</h2>
            <h4 className="text-right">Patel</h4>
          </div>
          <div className="flex justify-between">
            <h2>Name Format</h2>
            <h4 className="text-right">LFM</h4>
          </div>
          <div className="flex justify-between">
            <h2>Full Name</h2>
            <h4 className="text-right">Patel VrajKumar Kamleshkumar</h4>
          </div>
          <div className="flex justify-between">
            <h2>Gender</h2>
            <h4 className="text-right">Male</h4>
          </div>
          <div className="flex justify-between">
            <h2>Birth Date</h2>
            <h4 className="text-right">14/01/2003</h4>
          </div>
          <div className="flex justify-between">
            <h2>Birth Place</h2>
            <h4 className="text-right">Godhra</h4>
          </div>
          <div className="flex justify-between">
            <h2>ACPC Seat Allotment Date</h2>
            <h4 className="text-right">10/11/2020</h4>
          </div>
          <div className="flex justify-between">
            <h2>Is D2d</h2>
            <h4 className="text-right">0</h4>
          </div>
        </div>
        <div className="profile-right flex justify-between flex-col h-full gap-2 lg:py-4 pb-[5px] w-full lg:w-2/3">
          <div className="flex justify-between">
            <h2>Enrollemnt Year</h2>
            <h4 className="text-right">2020</h4>
          </div>
          <div className="flex justify-between">
            <h2>Degree</h2>
            <h4 className="text-right">B.Tech I.T.</h4>
          </div>
          <div className="flex justify-between">
            <h2>Qualifying Exam Roll No.</h2>
            <h4 className="text-right">232814</h4>
          </div>
          <div className="flex justify-between">
            <h2>Session Type</h2>
            <h4 className="text-right">Not Set</h4>
          </div>
          <div className="flex justify-between">
            <h2>Session No</h2>
            <h4 className="text-right">5</h4>
          </div>
          <div className="flex justify-between">
            <h2>Batch Year</h2>
            <h4 className="text-right">2020</h4>
          </div>
          <div className="flex justify-between">
            <h2>Student Code</h2>
            <h4 className="text-right">20ITUOS071</h4>
          </div>
          <div className="flex justify-between">
            <h2>Old Student Code</h2>
            <h4 className="text-right">T20IT37647</h4>
          </div>
          <div className="flex justify-between">
            <h2>Students Allotment</h2>
            <h4 className="text-right">Y</h4>
          </div>
          <div className="flex justify-between">
            <h2>Merit Rank</h2>
            <h4 className="text-right">1570</h4>
          </div>
          <div className="flex justify-between">
            <h2>Re Shuffle Status</h2>
            <h4 className="text-right">IN</h4>
          </div>
          <div className="flex justify-between">
            <h2>Re Shuffle Phase</h2>
            <h4 className="text-right">2</h4>
          </div>
          <div className="flex justify-between">
            <h2>Cast Category Code</h2>
            <h4 className="text-right">Open</h4>
          </div>
        </div>
        <div className="order-first lg:order-last lg:block hidden flex justify-between items-end flex-col h-full p-8 w-1/5">
          <img className="rounded-full shadow-xl" src="../images/default-user.png" alt="avatar" />
        </div>
      </div>
    </>
  )
}

export default Profile;
