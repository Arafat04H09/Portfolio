import React from 'react';
import { IoClose } from 'react-icons/io5';

interface EmailProps {
    onClose: () => void;
}

export default function Email({ onClose }: EmailProps) {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event: any) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", import.meta.env.VITE_EMAIL_ACCESS_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Message Sent!");
            event.target.reset();
            setTimeout(() => onClose(), 2000);
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="p-2 bg-transparent rounded-lg max-w-md mx-auto relative">
            <button 
                onClick={onClose}
                type="button"
                className="absolute top-0 right-0 text-gray-500 hover:text-gray-700 z-10"
            >
                <IoClose size={24} />
            </button>
            <form onSubmit={onSubmit} className="bg-transparent rounded-lg px-4 pt-4 pb-4 mb-2 flex flex-col">
                <div className="flex justify-between items-center">
                    <h2 className="text-slate-300 text-2xl font-semibold mb-4">I will try my best to respond as soon as possible.</h2>
                </div>
                <input 
                    type="text" 
                    name="name" 
                    required 
                    className="bg-transparent shadow appearance-none border-2 border-gray-700 rounded-lg w-full py-2 px-3 text-gray-400 leading-tight mb-2 font-semibold"
                    placeholder="Name"
                />
                <input 
                    type="email" 
                    name="email" 
                    required 
                    className="bg-transparent shadow appearance-none border-2 border-gray-700 rounded-lg w-full py-2 px-3 text-gray-400 leading-tight mb-2 font-semibold"
                    placeholder="Email"
                />
                <textarea 
                    name="message" 
                    required 
                    className="bg-transparent shadow appearance-none border-2 border-gray-700 rounded-lg w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none mb-2 h-[100px] font-semibold"
                    placeholder="Message"
                ></textarea>
                <span className="text-gray-700">{result}</span>
                <div className="flex justify-center mt-4">
                    <button 
                        type="submit" 
                        className="bg-blue-900/20 w-24 border-2 border-blue-800/50 text-blue-500 hover:bg-blue-800 hover:text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline text-lg"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
}
