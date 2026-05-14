import React, { useEffect, useState } from "react";
import ModernHeader from "../components/Modern/ModernHeader";
import ModernHero from "../components/Modern/ModernHero";
import ModernAbout from "../components/Modern/ModernAbout";
import ModernSkills from "../components/Modern/ModernSkills";
import ModernTimeline from "../components/Modern/ModernTimeline";
import ModernProjects from "../components/Modern/ModernProjects";
import ModernGithubSection from "../components/Modern/ModernGithubSection";
import ModernContact from "../components/Modern/ModernContact";
import ModernFooter from "../components/Modern/ModernFooter";
import ScrollToTopButton from "./topbutton/Top";
import SplashScreen from "./splashScreen/SplashScreen";
import { splashScreen, workExperiences, educationInfo } from "../portfolio";
import { StyleProvider } from "../contexts/StyleContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import "./Main.scss";

const Main = () => {
  useLocalStorage("isDark", true);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] = useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    } else {
      setIsShowingSplashAnimation(false);
    }
  }, []);

  return (
    <div className="dark-mode bg-mesh min-h-screen text-white selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      <StyleProvider value={{ isDark: true, changeTheme: () => {} }}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <div className="animate-in fade-in duration-1000">
            <ModernHeader />
            <ModernHero />
            
            <ModernAbout />
            
            <section id="skills">
              <ModernSkills />
            </section>

            <section id="experience">
              <ModernTimeline 
                title="Work Experience" 
                subtitle="MY PROFESSIONAL JOURNEY"
                items={workExperiences.experience}
                type="experience"
              />
            </section>

            <ModernProjects />

            <section id="education">
              <ModernTimeline 
                title="Education" 
                subtitle="ACADEMIC BACKGROUND"
                items={educationInfo.schools}
                type="education"
              />
            </section>

            <ModernGithubSection username="dsgajera2005" />
            
            <ModernContact />
            
            <ModernFooter />
            <ScrollToTopButton />
          </div>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
