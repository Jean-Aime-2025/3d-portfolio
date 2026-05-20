import { ArrowLeft, Smartphone, ExternalLink, Play, GitBranch } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";

const MobileAppDetail = ({ appData }) => {
    return (
        <>
            <section className='max-container'>
                {/* Back Button */}
                <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors mb-20"
                >
                    <ArrowLeft size={20} />
                    <span className="font-poppins">Back to Projects</span>
                </Link>

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="flex-1">
                        <div className="flex items-center gap-4 mb-6">
                            <div className='block-container w-16 h-16'>
                                <div className={`btn-back rounded-xl ${appData.theme}`} />
                                <div className='btn-front rounded-xl flex justify-center items-center'>
                                    <img
                                        src={appData.iconUrl}
                                        alt={appData.name}
                                        className='w-1/2 h-1/2 object-contain'
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-3">
                                    <h1 className="text-4xl font-poppins font-bold">{appData.name}</h1>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium flex items-center gap-1">
                                        <Smartphone size={14} />
                                        Mobile App
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            {appData.longDescription || appData.description}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4 mb-8">
                            {appData.appStoreLink && (
                                <a
                                    href={appData.appStoreLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
                                >
                                    <ExternalLink size={18} />
                                    App Store
                                </a>
                            )}
                            {appData.playStoreLink && (
                                <a
                                    href={appData.playStoreLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
                                >
                                    <ExternalLink size={18} />
                                    Google Play
                                </a>
                            )}
                            <a
                                href={appData.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-colors"
                            >
                                <GitBranch size={18} />
                                Source Code
                            </a>
                        </div>
                    </div>

                    {/* Hero Screenshot */}
                    <div className="lg:w-[350px] w-full">
                        <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-6">
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-slate-300 rounded-full" />
                            <div className="mt-4">
                                <img
                                    src={appData.heroScreenshot || appData.screenshots?.[0]}
                                    alt={`${appData.name} Screenshot`}
                                    className="w-full h-auto rounded-2xl shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="mt-12">
                    <h2 className="text-2xl font-poppins font-semibold mb-4">Tech Stack</h2>
                    <div className="flex flex-wrap gap-3">
                        {appData.tech.map((tech, index) => (
                            <span
                                key={index}
                                className="text-xs border w-fit px-3 py-1 rounded-full bg-white text-slate-600 font-medium"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Key Features */}
                {appData.features && (
                    <div className="mt-12">
                        <h2 className="text-2xl font-poppins font-semibold mb-6">Key Features</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {appData.features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="p-4 bg-white rounded-xl border border-slate-200 hover:shadow-md transition-shadow"
                                >
                                    <div className="mb-3">
                                        <feature.icon
                                            size={28}
                                            className="text-blue-600"
                                            strokeWidth={2.2}
                                        />
                                    </div>
                                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                                    <p className="text-sm text-slate-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Screenshots Gallery */}
                {appData.screenshots && appData.screenshots.length > 0 && (
                    <div className="mt-12">
                        <h2 className="text-2xl font-poppins font-semibold mb-6">App Screenshots</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {appData.screenshots.map((screenshot, index) => (
                                <div key={index} className="relative group cursor-pointer">
                                    <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-4">
                                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-slate-300 rounded-full" />
                                        <div className="mt-2">
                                            <img
                                                src={screenshot}
                                                alt={`${appData.name} Screenshot ${index + 1}`}
                                                className="w-full h-auto rounded-2xl shadow-lg transition-transform group-hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Demo Video Section */}
                {appData.demoVideo && (
                    <div className="mt-12">
                        <h2 className="text-2xl font-poppins font-semibold mb-6 flex items-center gap-2">
                            <Play size={24} className="text-blue-600" />
                            Demo Video
                        </h2>
                        <div className="relative rounded-3xl overflow-hidden bg-black shadow-xl">
                            <div className="relative pb-[56.25%]">
                                <iframe
                                    src={appData.demoVideo}
                                    title={`${appData.name} Demo`}
                                    className="absolute top-0 left-0 w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* Architecture / Development Notes */}
                {appData.developmentNotes && (
                    <div className="mt-12">
                        <h2 className="text-2xl font-poppins font-semibold mb-4">Development Notes</h2>
                        <div className="bg-white rounded-xl border border-slate-200 p-6">
                            <p className="text-slate-600 leading-relaxed">{appData.developmentNotes}</p>
                        </div>
                    </div>
                )}

            </section>
            <Footer />
        </>
    );
};

export default MobileAppDetail;