import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//Custom hook for scrolling to top when changing route
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
