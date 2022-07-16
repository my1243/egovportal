import React from "react";
const emailDisp = [
    "Allow only other members to see my email address",
    "Hide my email address from everyone",
    "Allow everyone to see my email address",
];
const emailForm = [
    "Pretty HTML format",
    "Plain HTML format"
]
const emailDig = [
"No digest(Single email per forum post)",
"Complete(Daily email with full post)",
"Subjects(Daily email with subjects only)"
]
const forumAuto = [
    "Yes:when I post, subscribe me to that forum",
    "NO:don't automatically subscribe me to forum"
]
const forumTrack = [
    "No:don't keep track of posts I have seen",
    "Yes:highlight new posts for me"
]
const whenEdit = [
    "Use HTML editor",
    "Use standard web forms"
]
const formate = [
    "HTML formate",
    "Moodle auto-formate",
    "Plaintext formate",
    "Markdown formate"
]

const General = () => {

    return (
        <>
            <div className="flex justify-center h-20">
                <h1 className="text-3xl font-bold mt-5">User Name</h1>
            </div>
            <div className="px-5">
            <div className="bg-orange-200 mb-12 border-2 border-orange-500 max-w-[1296px] mx-auto rounded-md shadow-lg">
                <form className="mx-4 my-8 ">
                    <div className="mb-4 flex flex-col w-full sm:flex-row items-start sm:items-center">
                        <div className="w-1/3 text-lg">Name</div>
                        <div className="flex flex-row w-full sm:w-2/3">
                        <div className="-mt-7">
                            <h5 className="text-red-600">required*</h5>
                        </div>
                            <input
                                className="p-2 w-full sm:w-2/3 mr-4 rounded-lg placeholder-slate-900 border border-orange-500 outline-none focus:border-rose-300 transistion-all duration-33 ease-linear -ml-16"
                                type={"text"}
                                name="Name"
                                placeholder="First Name" required
                            />
                            <div className="-mt-7">
                            <h5 className="text-red-600">required*</h5>
                        </div>
                            <input
                                className="p-2 w-full sm:w-2/3 rounded-lg placeholder-slate-900 border border-orange-500 outline-none focus:border-rose-300 transistion-all duration-33 ease-linear -ml-16"
                                type={"text"}
                                name="Name"
                                placeholder="Last Name" required
                            />
                        </div>
                    </div>
                    <div className="mt-9 mb-4 flex flex-col items-start sm:flex-row sm:items-center">
                        <label className="text-lg w-full sm:w-1/3 mb-0.5 sm:mb-0">
                            Email Address
                        </label>
                        <div className="-mt-16 mb-3">
                            <h5 className="text-red-600">required*</h5>
                        </div>
                        
                        <input
                            className="p-2 w-full sm:w-2/3 rounded-lg placeholder-slate-900 border border-orange-500 outline-none focus:border-rose-300 transistion-all duration-33 ease-linear -ml-16"
                            type={"email"}
                            name="Email"
                            placeholder="Email Address" required
                        />
                    </div>
                    <div className="mb-4 flex flex-col items-start sm:flex-row sm:items-center">
                        <label className="text-lg w-full sm:w-1/3 mb-0.5 sm:mb-0">
                            Email Display
                        </label>
                        <select
                            className="p-2 w-full sm:w-2/3 border border-orange-500 rounded-lg outline-none focus:border-rose-300"
                            name="emailDisp"
                        >
                            {emailDisp.map((val) => {
                                return <option value={val}>{val}</option>;
                            })}
                        </select>
                    </div>

                    <div className="mb-4 flex flex-col items-start sm:flex-row sm:items-center">
                        <label className="text-lg w-full sm:w-1/3 mb-0.5 sm:mb-0">
                            Email format
                        </label>
                        <select
                            className="p-2 w-full sm:w-2/3 border border-orange-500 rounded-lg outline-none focus:border-rose-300"
                            name="emailDisp"
                        >
                            {emailForm.map((val) => {
                                return <option value={val}>{val}</option>;
                            })}
                        </select>
                    </div>
                    <div className="mb-4 flex flex-col items-start sm:flex-row sm:items-center">
                        <label className="text-lg w-full sm:w-1/3 mb-0.5 sm:mb-0">
                            Email digest type
                        </label>
                        <select
                            className="p-2 w-full sm:w-2/3 border border-orange-500 rounded-lg outline-none focus:border-rose-300"
                            name="emailDisp"
                        >
                            {emailDig.map((val) => {
                                return <option value={val}>{val}</option>;
                            })}
                        </select>
                    </div>
                    <div className="mb-4 flex flex-col items-start sm:flex-row sm:items-center">
                        <label className="text-lg w-full sm:w-1/3 mb-0.5 sm:mb-0">
                            Forum auto-subscript
                        </label>
                        <select
                            className="p-2 w-full sm:w-2/3 border border-orange-500 rounded-lg outline-none focus:border-rose-300"
                            name="emailDisp"
                        >
                            {forumAuto.map((val) => {
                                return <option value={val}>{val}</option>;
                            })}
                        </select>
                    </div>
                    <div className="mb-4 flex flex-col items-start sm:flex-row sm:items-center">
                        <label className="text-lg w-full sm:w-1/3 mb-0.5 sm:mb-0">
                            Forum tracking
                        </label>
                        <select
                            className="p-2 w-full sm:w-2/3 border border-orange-500 rounded-lg outline-none focus:border-rose-300"
                            name="emailDisp"
                        >
                            {forumTrack.map((val) => {
                                return <option value={val}>{val}</option>;
                            })}
                        </select>
                    </div>
                    <div className="mb-4 flex flex-col items-start sm:flex-row sm:items-center">
                        <label className="text-lg w-full sm:w-1/3 mb-0.5 sm:mb-0">
                            When editing text
                        </label>
                        <select
                            className="p-2 w-full sm:w-2/3 border border-orange-500 rounded-lg outline-none focus:border-rose-300"
                            name="emailDisp"
                        >
                            {whenEdit.map((val) => {
                                return <option value={val}>{val}</option>;
                            })}
                        </select>
                    </div>

                    <div className="mt-9 mb-4 flex flex-col items-start sm:flex-row sm:items-center">
                        <label className="text-lg w-full sm:w-1/3 mb-0.5 sm:mb-0">
                            City/Town
                        </label>
                        <div className="-mt-16 mb-3">
                            <h5 className="text-red-600">required*</h5>
                        </div>
                        <input
                            className="p-2 w-full sm:w-2/3 rounded-lg placeholder-slate-900 border border-orange-500 outline-none focus:border-rose-300 transistion-all duration-33 ease-linear -ml-16"
                            type={"email"}
                            name="Email" required
                        />
                    </div>

                

                    <div className="mb-4 flex flex-col items-start sm:flex-row sm:items-center">
                        <label className="text-lg w-full sm:w-1/3 mb-0.5 sm:mb-0">
                            Discription
                        </label>
                        <input
                            className="p-2 w-full sm:w-2/3 rounded-lg placeholder-slate-900 border border-orange-500 outline-none focus:border-rose-300 transistion-all duration-33 ease-linear"
                            type={"email"}
                            name="Email"
                        />
                    </div>

                    <div className="mb-4 flex flex-col items-start justify-end sm:flex-row sm:items-center ">

                        <select
                            className="p-2 w-full sm:w-2/3 border border-orange-500 rounded-lg outline-none focus:border-rose-300"
                            name="emailDisp"
                        >
                            {formate.map((val) => {
                                return <option value={val}>{val}</option>;
                            })}
                        </select>
                    </div>
                </form>
                <form className="mx-4 my-8 ">
                    <div className="mb-4 flex flex-col items-start sm:flex-row sm:items-center">
                        <label className="text-lg w-full sm:w-1/3 mb-0.5 sm:mb-0">
                            Web page
                        </label>
                        <input
                            className="p-2 w-full sm:w-2/3 rounded-lg placeholder-slate-900 border border-orange-500 outline-none focus:border-rose-300 transistion-all duration-33 ease-linear"
                            type={"email"}
                            name="Email"
                            
                        />
                    </div>

                    <div className="mb-4 flex flex-col items-start sm:flex-row sm:items-center">
                        <label className="text-lg w-full sm:w-1/3 mb-0.5 sm:mb-0">
                            ICQ number
                        </label>
                        <input
                            className="p-2 w-full sm:w-2/3 rounded-lg placeholder-slate-900 border border-orange-500 outline-none focus:border-rose-300 transistion-all duration-33 ease-linear"
                            type={"email"}
                            name="Email"
                            
                        />
                    </div>

                    <div className="mb-4 flex flex-col items-start sm:flex-row sm:items-center">
                        <label className="text-lg w-full sm:w-1/3 mb-0.5 sm:mb-0">
                            Skype ID
                        </label>
                        <input
                            className="p-2 w-full sm:w-2/3 rounded-lg placeholder-slate-900 border border-orange-500 outline-none focus:border-rose-300 transistion-all duration-33 ease-linear"
                            type={"email"}
                            name="Email"

                        />
                    </div>
                    <div className="mb-4 flex flex-col items-start sm:flex-row sm:items-center">
                        <label className="text-lg w-full sm:w-1/3 mb-0.5 sm:mb-0">
                            AIM Id
                        </label>
                        <input
                            className="p-2 w-full sm:w-2/3 rounded-lg placeholder-slate-900 border border-orange-500 outline-none focus:border-rose-300 transistion-all duration-33 ease-linear"
                            type={"email"}
                            name="Email"
                            
                        />
                    </div>

                    <div className="mb-4 flex flex-col items-start sm:flex-row sm:items-center">
                        <label className="text-lg w-full sm:w-1/3 mb-0.5 sm:mb-0">
                            Yahoo ID
                        </label>
                        <input
                            className="p-2 w-full sm:w-2/3 rounded-lg placeholder-slate-900 border border-orange-500 outline-none focus:border-rose-300 transistion-all duration-33 ease-linear"
                            type={"email"}
                            name="Email"
                            
                        />
                    </div>
                    <div className="mb-4 flex flex-col items-start sm:flex-row sm:items-center">
                        <label className="text-lg w-full sm:w-1/3 mb-0.5 sm:mb-0">
                            MSN ID
                        </label>
                        <input
                            className="p-2 w-full sm:w-2/3 rounded-lg placeholder-slate-900 border border-orange-500 outline-none focus:border-rose-300 transistion-all duration-33 ease-linear"
                            type={"email"}
                            name="Email"
                            
                        />
                    </div>

                    <div className="mb-4 flex flex-col items-start sm:flex-row sm:items-center">
                        <label className="text-lg w-full sm:w-1/3 mb-0.5 sm:mb-0">
                            ID Number
                        </label>
                        <input
                            className="p-2 w-full sm:w-2/3 rounded-lg placeholder-slate-900 border border-orange-500 outline-none focus:border-rose-300 transistion-all duration-33 ease-linear"
                            type={"email"}
                            name="Email"
                            
                        />
                    </div>

                    <div className="mb-4 flex flex-col items-start sm:flex-row sm:items-center">
                        <label className="text-lg w-full sm:w-1/3 mb-0.5 sm:mb-0">
                            Institution
                        </label>
                        <input
                            className="p-2 w-full sm:w-2/3 rounded-lg placeholder-slate-900 border border-orange-500 outline-none focus:border-rose-300 transistion-all duration-33 ease-linear"
                            type={"email"}
                            name="Email"
                            
                        />
                    </div>

                    <div className="mb-4 flex flex-col items-start sm:flex-row sm:items-center">
                        <label className="text-lg w-full sm:w-1/3 mb-0.5 sm:mb-0">
                            emailDisp
                        </label>
                        <input
                            className="p-2 w-full sm:w-2/3 rounded-lg placeholder-slate-900 border border-orange-500 outline-none focus:border-rose-300 transistion-all duration-33 ease-linear"
                            type={"email"}
                            name="Email"
                            
                        />
                    </div>

                    <div className="mb-4 flex flex-col items-start sm:flex-row sm:items-center">
                        <label className="text-lg w-full sm:w-1/3 mb-0.5 sm:mb-0">
                            Phone
                        </label>
                        <input
                            className="p-2 w-full sm:w-2/3 rounded-lg placeholder-slate-900 border border-orange-500 outline-none focus:border-rose-300 transistion-all duration-33 ease-linear "
                            type={"email"}
                            name="Email"
                            
                        />
                    </div>

                    <div className="mb-4 flex flex-col items-start sm:flex-row sm:items-center">
                        <label className="text-lg w-full sm:w-1/3 mb-0.5 sm:mb-0">
                            Mobile phone
                        </label>
                        <input
                            className="p-2 w-full sm:w-2/3 rounded-lg placeholder-slate-900 border border-orange-500 outline-none focus:border-rose-300 transistion-all duration-33 ease-linear"
                            type={"email"}
                            name="Email"
                            
                        />
                    </div>

                    <div className="mb-4 flex flex-col items-start sm:flex-row sm:items-center">
                        <label className="text-lg w-full sm:w-1/3 mb-0.5 sm:mb-0">
                            Address
                        </label>
                        <input
                            className="p-2 w-full sm:w-2/3 rounded-lg placeholder-slate-900 border border-orange-500 outline-none focus:border-rose-300 transistion-all duration-33 ease-linear"
                            type={"email"}
                            name="Email"
                            
                        />
                    </div>
<div className="flex justify-center my-10 mr-28">
            <button className="hover:bg-orange-500 hover:text-white bg-orange-300 border-2 border-orange-500 rounded-md p-3" type="submit">
                Update profile
            </button>
</div>
                </form>
            </div>
            </div>
        </>
    )
}

export default General;