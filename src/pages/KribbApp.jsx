import MobileAppDetail from "../components/MobileAppDetail";
import { estate } from "../assets/icons";
import {
    ShieldCheck,
    Search,
    Heart,
    Image,
    MapPin,
    MessageCircle,
    LayoutDashboard,
    Zap,
} from "lucide-react";

import k1 from "../assets/kribb/Screenshot_20260520-130926_Expo Go.jpg";
import k2 from "../assets/kribb/Screenshot_20260520-130932_Expo Go.jpg";
import k3 from "../assets/kribb/Screenshot_20260520-130938_Expo Go.jpg";
import k4 from "../assets/kribb/Screenshot_20260520-130944_Expo Go.jpg";
import k5 from "../assets/kribb/Screenshot_20260520-130951_Expo Go.jpg";
import k6 from "../assets/kribb/Screenshot_20260520-131014_Expo Go.jpg";
import k7 from "../assets/kribb/Screenshot_20260520-131042_Expo Go.jpg";
import k8 from "../assets/kribb/Screenshot_20260520-131047_Expo Go.jpg";
import k9 from "../assets/kribb/Screenshot_20260520-131154_Gallery.jpg";
import k10 from "../assets/kribb/kribbb.jpg";

const KribbApp = () => {
    const appData = {
        iconUrl: estate,
        theme: "btn-back-blue",
        name: "Kribb",

        description:
            "A modern real estate mobile app for browsing, saving, and managing property listings with maps, authentication, and real-time updates.",

        longDescription:
            "Kribb is a real estate marketplace app built with React Native and Expo. Users can browse property listings, search with filters, save favorites, explore locations on maps, and contact agents directly through WhatsApp. The app also includes an admin dashboard for managing listings and property status.",

        tech: [
            "React Native",
            "Expo Router",
            "Clerk Authentication",
            "Supabase",
            "Zustand",
            "NativeWind",
            "Expo Location",
        ],

        link: "https://github.com/Jean-Aime-2025/Kribb",
        visit: "#",

        features: [
            {
                icon: ShieldCheck,
                title: "Authentication",
                description:
                    "Secure login and account management powered by Clerk.",
            },
            {
                icon: Search,
                title: "Search & Filters",
                description:
                    "Search properties by city or title with filtering by type, price, and bedrooms.",
            },
            {
                icon: Heart,
                title: "Saved Properties",
                description:
                    "Users can save favorite listings and access them anytime.",
            },
            {
                icon: Image,
                title: "Image Gallery",
                description:
                    "Interactive property image carousel with fullscreen preview support.",
            },
            {
                icon: MapPin,
                title: "Maps & Location",
                description:
                    "Integrated maps with property location preview and navigation support.",
            },
            {
                icon: MessageCircle,
                title: "WhatsApp Integration",
                description:
                    "Contact agents instantly through direct WhatsApp messaging.",
            },
            {
                icon: LayoutDashboard,
                title: "Admin Dashboard",
                description:
                    "Admins can create, update, mark sold, and delete property listings.",
            },
            {
                icon: Zap,
                title: "Real-Time Updates",
                description:
                    "Property and saved-list updates sync instantly using Supabase.",
            },
        ],

        screenshots: [k1, k2, k3, k4, k5, k6, k7, k8, k9],

        heroScreenshot: k10,

        demoVideo: "",

        developmentNotes:
            "Built with React Native and Expo using Supabase for backend services and Clerk for authentication. Zustand was used for state management while NativeWind handled styling. The application also integrates maps, image uploads, and real-time data syncing.",
    };

    return <MobileAppDetail appData={appData} />;
};

export default KribbApp;