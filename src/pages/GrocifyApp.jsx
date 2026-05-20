import MobileAppDetail from "../components/MobileAppDetail";
import { grocery } from "../assets/icons";
import {
  ShoppingCart,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  BarChart3,
  PlusCircle,
} from "lucide-react";

import g1 from "../assets/grocify/Screenshot_20260520-134118_GROCIFY.jpg";
import g2 from "../assets/grocify/Screenshot_20260520-134130_GROCIFY.jpg";
import g3 from "../assets/grocify/Screenshot_20260520-134157_GROCIFY.jpg";
import g4 from "../assets/grocify/Screenshot_20260520-134209_GROCIFY.jpg";
import g5 from "../assets/grocify/Screenshot_20260520-134214_GROCIFY.jpg";
import g6 from "../assets/grocify/Screenshot_20260520-134221_GROCIFY.jpg";
import g7 from "../assets/grocify/Screenshot_20260520-134232_GROCIFY.jpg";
import g8 from "../assets/grocify/Screenshot_20260520-134238_GROCIFY.jpg";
import g9 from "../assets/grocify/Screenshot_20260520-134242_GROCIFY.jpg";
import g10 from "../assets/grocify/Screenshot_20260520-134251_GROCIFY.jpg";

const GrocifyApp = () => {
  const appData = {
    iconUrl: grocery,
    theme: "btn-back-green",
    name: "Grocify",

    description:
      "Built a full-stack grocery list mobile application with real-time syncing, authentication, and a clean modern interface.",

    longDescription:
      "Grocify is a smart grocery management app built with React Native and Expo. Users can create and organize shopping lists, manage item priorities, track completed purchases, and view grocery insights through a polished multi-tab interface. The app uses Clerk authentication, Zustand state management, and a serverless Neon database powered by Drizzle ORM.",

    tech: [
      "React Native",
      "Expo Router",
      "Clerk Authentication",
      "Drizzle ORM",
      "Neon Database",
      "Zustand",
      "NativeWind",
      "Sentry",
    ],

    link: "https://github.com/Jean-Aime-2025/GROCIFY",
    visit: "#",

    features: [
      {
        icon: ShoppingCart,
        title: "Smart Grocery Lists",
        description:
          "Create, organize, and manage grocery items with categories, quantities, and priority levels.",
      },
      {
        icon: PlusCircle,
        title: "Planner & Item Management",
        description:
          "Dedicated planner screen for adding and managing grocery items with an intuitive form experience.",
      },
      {
        icon: RefreshCw,
        title: "Real-Time Sync",
        description:
          "Serverless backend with Zustand-powered state management for smooth real-time updates.",
      },
      {
        icon: BarChart3,
        title: "Insights Dashboard",
        description:
          "Track grocery activity with statistics, category breakdowns, and completed item summaries.",
      },
      {
        icon: ShieldCheck,
        title: "Secure Authentication",
        description:
          "User authentication and protected routes powered by Clerk.",
      },
      {
        icon: Smartphone,
        title: "Modern Mobile UI",
        description:
          "Responsive dark/light mode interface built with NativeWind and Expo Router native tabs.",
      },
    ],

    screenshots: [g2, g3, g4, g5, g6, g7, g8, g9, g10],

    heroScreenshot: g1,

    demoVideo: "",

    developmentNotes:
      "Built with Expo Router and React Native using a full-stack architecture powered by Neon Database and Drizzle ORM. Zustand handles global state management while NativeWind provides responsive styling and dark mode support. Sentry was integrated for error monitoring and app stability.",
  };

  return <MobileAppDetail appData={appData} />;
};

export default GrocifyApp;