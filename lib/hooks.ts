import { useActiveSectionContext } from "@/context/active-section.context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
    const {ref, inView} = useInView({
        threshold, // this is the percentage of the section that needs to be in view for the inView to be
      });
      const { setActiveSection, timeOfLastClick } = useActiveSectionContext(); // We are just extracting the setActiveSection function from active-section.context.tsx, to use it.
    
      useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
          setActiveSection(sectionName); // this is the function that sets the active section.
        }
      }, [inView, setActiveSection, timeOfLastClick, sectionName]);

      return {
        ref,
    };
}