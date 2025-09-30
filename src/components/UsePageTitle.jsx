import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function UsePageTitle() {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Plots for Sale! | Residential, Commercial, & Farm Land";
        break;
      case "/about":
        document.title = "About Us | Maxpine Group";
        break;
      case "/contact":
        document.title = "Contact | Maxpine Group";
        break;
      default:
        document.title = "Maxpine Group";
    }
  }, [location]);
}
