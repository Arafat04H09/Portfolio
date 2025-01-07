import React, { useState, useRef, useEffect } from 'react';
import Lanyard from './Lanyard';
import VanillaTilt from 'vanilla-tilt';
import AnimateOnScroll from './AnimateOnScroll';
import AvatarDisplay from './AvatarDisplay';
import Email from './Email';
import { FaComments } from 'react-icons/fa';

const DiscordComponent: React.FC = () => {
    const [activeSection, setActiveSection] = useState<'about' | 'activity'>('about');
    const tiltRef = useRef<HTMLDivElement>(null);
    const [isEmailPopupOpen, setEmailPopupOpen] = useState(false);
    const emailPopupRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (tiltRef.current) {
            const isMobile = window.innerWidth < 768; 
            VanillaTilt.init(tiltRef.current, {
                max: isMobile ? 1 : 9, 
                speed: 400,
                glare: true,
                "max-glare": 0.1,
            });
        }
    }, []);

    const toggleEmailPopup = () => {
        setEmailPopupOpen(!isEmailPopupOpen);
    };

    const popupAnimation = `
        @keyframes slideIn {
            from {
                transform: translateY(-10px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
    `;

    useEffect(() => {
        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(popupAnimation, styleSheet.cssRules.length);
    }, []);

    return (
        <AnimateOnScroll>
            <div className="relative flex flex-col items-center pt-7">
                <div 
                    ref={tiltRef}
                    className="rounded-lg w-full max-w-[600px] p-1.5 flex justify-center items-center"
                    style={{ background: `linear-gradient(to bottom, #212124, #182847)` }}
                >
                    <div className="bg-gradient-to-b from-black/70 to-black/20 rounded-lg relative">
                        <div className="relative">
                            <img 
                                src="blackhole.jpg" 
                                alt="Banner" 
                                className="w-full rounded-t-lg" 
                            />
                            <div className="absolute bottom-[-80px] left-[15px]">
                                <AvatarDisplay />
                            </div>
                            <div className="relative">
                                <button
                                    onClick={toggleEmailPopup}
                                    className="absolute top-[calc(100%+15px)] right-4 flex items-center gap-2 bg-black bg-opacity-50 hover:bg-opacity-70 text-slate-400 hover:text-white px-3 py-1.5 rounded-md transition-colors text-base"
                                >
                                    <FaComments size={22} />
                                    <span>Message</span>
                                </button>
                                {isEmailPopupOpen && (
                                    <div
                                        ref={emailPopupRef}
                                        className="popup bg-black bg-opacity-45 backdrop-blur-md rounded-2xl p-4 shadow-lg mt-1 relative"
                                        style={{
                                            position: 'absolute',
                                            top: 'calc(100% + 55px)',
                                            right: '10px',
                                            width: 'min(400px, 90vw)',
                                            zIndex: 3,
                                            animation: 'slideIn 0.3s ease-out',
                                        }}
                                    >
                                        <Email onClose={() => setEmailPopupOpen(false)} />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="text-left mt-20 ml-4">
                            <div className="flex items-center">
                                <div>
                                    <h1 className="text-slate-200 text-xl font-semibold">Arafat</h1>
                                    <div className="flex items-center mt-[-5px]">
                                        <p className="text-slate-300 text-regular">(he/his)</p>
                                        <div className="flex space-x-2 border-slate-500 border-[1px] rounded-md ml-2 pl-2 pr-2">
                                            <img src="nitro.gif" alt="Badge 1" title="Nitro Badge" className="w-5 h-5" />
                                            <img src="developer.gif" alt="Badge 3" title="Developer Badge" className="w-[14px] h-[14px] mt-[3px] mr-2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 ml-4 mr-4 mb-4 p-4 bg-black bg-opacity-40 rounded-lg h-auto">
                            <div className="flex space-x-4">
                                <button 
                                    className={`text-slate-200 transition duration-300 ${activeSection === 'about' ? 'border-b border-white' : 'text-slate-300'}`} 
                                    onClick={() => setActiveSection('about')}
                                >
                                    About Me
                                </button>
                                <button 
                                    className={`text-slate-200 transition duration-300 ${activeSection === 'activity' ? 'border-b border-white' : 'text-slate-300'}`} 
                                    onClick={() => setActiveSection('activity')}
                                >
                                    Live Activity
                                </button>
                            </div>
                            <div className="border-b border-gray-500 mb-3"></div>
                            <div className="transition-all duration-500 ease-in-out overflow-hidden">
                                <div 
                                    style={{ 
                                        height: activeSection === 'about' ? 'auto' : '0', 
                                        opacity: activeSection === 'about' ? '1' : '0',
                                        transition: 'height 0.5s ease-in-out, opacity 0.5s ease-in-out'
                                    }}
                                >
                                    {activeSection === 'about' && (
                                        <div>
                                            <p className="text-slate-300">
                                            I'm a recent computer science graduate from <strong style={{ color: '#FF0000' }}>Stony Brook University</strong> with a strong passion for coding and working with large systems.
                                            </p>
                                            <br />
                                            <p className="text-slate-300">
                                            Outside of coding, my hobbies include biking, walking, hiking, rock climbing, and listening to music. I’m always open to exploring new interests and trying new things. I enjoy conversations about anything from coding and tech to philosophy, music, or just life in general. If anything here resonates with you, don’t hesitate to reach out using the message button above or through LinkedIn — I’d love to connect!
                                            </p>
                                            <div className="mt-4">
                                            <h2 className="text-white pb-2">Languages</h2>
                                            <div className="flex flex-wrap gap-1">
                                                {[
                                                { name: 'TypeScript', color: '#3178c6' },
                                                { name: 'Python', color: '#306998' },
                                                { name: 'C', color: '#61dafb' },
                                                { name: 'JavaScript', color: '#f5820d' },
                                                { name: 'Java', color: '#4285f4' },
                                                { name: 'SQL', color: '#4479a1' }
                                                ].map(skill => (
                                                <span key={skill.name} className="flex items-center justify-center bg-slate-800 bg-opacity-50 px-2 py-0.5 rounded-md">
                                                    <span className="w-2.5 h-2.5 rounded-full mr-1" style={{ backgroundColor: skill.color }}></span>
                                                    <span className="text-xs text-slate-200 mt-[1px]">{skill.name}</span>
                                                </span>
                                                ))}
                                            </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div 
                                    style={{ 
                                        height: activeSection === 'activity' ? 'auto' : '0', 
                                        opacity: activeSection === 'activity' ? '1' : '0',
                                        transition: 'height 0.5s ease-in-out, opacity 0.5s ease-in-out'
                                    }}
                                >
                                    {activeSection === 'activity' && (
                                        <div>
                                            <Lanyard />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimateOnScroll>
    );
};

export default DiscordComponent;
