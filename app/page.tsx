"use client";

import { useTheme } from "@mui/material";
import CandleList from "./home/candles";
import Footer from "./home/footer";
import HeroSection from "./home/hero";

export default function Home() {
  // const t = useTranslations();
  // const [mounted, setMounted] = useState(false);
  // const selectedLang = getClientLanguageCookie() || "en";
  const theme = useTheme();
  // const axios = useAxios();

  // ----------------------------------------------------------------------------------------------
  // useEffect(() => {
  //   setMounted(true);
  // }, []);
  // ----------------------------------------------------------------------------------------------
  // const handleLanguageChange = (
  //   event: React.ChangeEvent<HTMLSelectElement>
  // ) => {
  //   const language = event.target.value;
  //   setLanguageCookie(language);
  //   window.location.reload();
  // };
  // ----------------------------------------------------------------------------------------------
  // const testAxios = async () => {
  //   try {
  //     const res = await axios.get("/todos");
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // ----------------------------------------------------------------------------------------------
  // useEffect(() => {
  //   console.log("page");

  //   testAxios();
  // }, []);

  // ----------------------------------------------------------------------------------------------

  return (
    <div style={{ background: theme.palette.background.default }}>
      {/* <ThemeSwitcher />
      <div>
        <label htmlFor="language-select">Choose Language: </label>
        <select
          id="language-select"
          value={selectedLang}
          onChange={handleLanguageChange}
          style={{
            padding: "0.5rem",
            fontSize: "1rem",
            cursor: "pointer",
            // Only apply textAlign after component has mounted on the client
            ...(mounted && {
              textAlign: selectedLang === "ar" ? "right" : "left",
            }),
          }}
        >
          <option value="en">English</option>
          <option value="ar">العربية</option>
        </select>
      </div> */}
      <HeroSection />
      <CandleList />
      <Footer />
      {/* <Button
        onClick={() => {
          testAxios();
        }}
      >
        Request
      </Button> */}
    </div>
  );
}
