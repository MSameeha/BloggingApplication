import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@sameeha/common-app";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signin" | "signup" }) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    });

    async function sendRequest() {
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate("/blogs");
        }catch (e) {
            //alert user req failed
            alert("error while signing up ", e.message)
        }
    }

    return (
        <div className="h-screen flex flex-col justify-center items-center p-4 bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
            <div className="text-3xl font-extrabold mb-4 text-center">
            {type === "signup" ? "Create an account" : "Sign in"}
            </div>
            <div className="text-slate-400 text-center mb-6">
                {type === "signup" ? (
                    <>
                    Already have an account?
                    <Link className="pl-2 text-blue-500" to="/signin">Login</Link>
                    </>):(
                    <>
                    Don't have an account?
                    <Link className="pl-2 text-blue-500" to="/signup">Sign up</Link>
                    </>)}
            </div>
            {type === "signup" ? <LabelledInput 
                label="Name" 
                placeholder="Sameeha Mubeen.." 
                onChange={(e) => {
                    setPostInputs(c => ({
                        ...c,
                        name: e.target.value
                    }));
                }}
            /> : null}
            <LabelledInput 
                label="email" 
                type="text"
                placeholder="sameeha@gmail.com" 
                onChange={(e) => {
                    setPostInputs(c => ({
                        ...c,
                        email: e.target.value
                    }));
                }} 
            />
            <LabelledInput 
                label="Password" 
                type="password"
                placeholder="Secret.." 
                onChange={(e) => {
                    setPostInputs(c => ({
                        ...c,
                        password: e.target.value
                    }));
                }} 
            />
            <button onClick={sendRequest} type="button"
                className="w-full mt-6 bg-gray-800 hover:bg-gray-900 rounded text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                {type === "signup" ? "Sign Up" : "Sign In"}
            </button>
        </div>
    </div>
    );
};

interface LabelledInputType{
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({ label, type, placeholder, onChange }) {
    return (
    <div className="mb-4">
        <label className="block mb-1 text-sm font-medium text-gray-900 ">{label}</label>
        <input onChange={onChange} type={type || "text"} className="bg-gray-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
    );
}