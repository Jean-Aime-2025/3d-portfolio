import MobileAppDetail from "../components/MobileAppDetail";
import { sub } from "../assets/icons";
import {
  LayoutDashboard,
  BarChart3,
  Bell,
  PlusCircle,
  Search,
  ShieldCheck,
  DollarSign,
  UserCircle,
} from "lucide-react";

import r1 from "../assets/recurrly/Screenshot_20260520-120802_Expo Go.jpg";
import r2 from "../assets/recurrly/Screenshot_20260520-120812_Expo Go.jpg";
import r3 from "../assets/recurrly/Screenshot_20260520-120817_Expo Go.jpg";
import r4 from "../assets/recurrly/Screenshot_20260520-120854_Expo Go.jpg";
import r5 from "../assets/recurrly/Screenshot_20260520-120900_Expo Go.jpg";
import r6 from "../assets/recurrly/Screenshot_20260520-120924_Expo Go.jpg";
import r7 from "../assets/recurrly/Screenshot_20260520-120931_Expo Go.jpg";
import r8 from "../assets/recurrly/Screenshot_20260520-120937_Expo Go.jpg";
import r9 from "../assets/recurrly/Screenshot_20260520-120941_Expo Go.jpg";
import r10 from "../assets/recurrly/Screenshot_20260520-121021_Gallery.jpg";

const RecurrlyApp = () => {
  const appData = {
    iconUrl: sub,
    theme: "btn-back-red",
    name: "Recurrly",

    description:
      "A subscription management app for tracking recurring payments, spending insights, and upcoming renewals.",

    longDescription:
      "Recurrly is a mobile subscription tracking app built with React Native and Expo. Users can manage recurring payments, monitor spending through analytics, receive renewal reminders, and organize subscriptions in a clean dashboard experience.",

    tech: [
      "React Native",
      "Expo Router",
      "Clerk Authentication",
      "Zustand",
      "PostHog Analytics",
      "NativeWind",
    ],

    link: "https://github.com/Jean-Aime-2025/Recurrly",
    visit: "#",

    features: [
      {
        icon: LayoutDashboard,
        title: "Dashboard Overview",
        description:
          "View active subscriptions, upcoming renewals, and account balance in one place.",
      },
      {
        icon: BarChart3,
        title: "Spending Analytics",
        description:
          "Interactive charts and insights for tracking monthly subscription expenses.",
      },
      {
        icon: Bell,
        title: "Renewal Reminders",
        description:
          "Get alerts for subscriptions renewing soon to avoid unexpected charges.",
      },
      {
        icon: PlusCircle,
        title: "Subscription Management",
        description:
          "Add and organize subscriptions with categories, pricing, and billing cycles.",
      },
      {
        icon: Search,
        title: "Search & Filtering",
        description:
          "Quickly find subscriptions using real-time search and filtering.",
      },
      {
        icon: ShieldCheck,
        title: "Secure Authentication",
        description:
          "Authentication and account management powered by Clerk.",
      },
      {
        icon: DollarSign,
        title: "Expense Tracking",
        description:
          "Monitor recurring costs with automatic spending calculations.",
      },
      {
        icon: UserCircle,
        title: "Profile Management",
        description:
          "Manage user account information and securely sign out.",
      },
    ],

    screenshots: [r2, r3, r10, r4, r5, r6, r7, r8, r9],

    heroScreenshot: r1,

    demoVideo: "",

    developmentNotes:
      "Built with React Native and Expo using Zustand for state management and Clerk for authentication. PostHog was integrated for analytics tracking, while NativeWind handled the styling system and Dayjs managed date operations.",
  };

  return <MobileAppDetail appData={appData} />;
};

export default RecurrlyApp;