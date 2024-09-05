'use client';

import type { SectionName } from '@/lib/types';
import React, { useState, createContext, useContext } from 'react';

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>; // this is a function that takes a new value of the active section and updates the state. React.dispatch is a type that provide type safety for the function that updates the state.
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>; // this is a function that takes a new value of the time of the last click and updates the state.
}; 

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null); // this is the context object that will be used to create the context provider and consumer, which will be used to pass the active section to the header component.

export default function ActiveSectionContextProvider({children}: ActiveSectionContextProviderProps) 
  {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link

    return (
    <ActiveSectionContext.Provider value={{
      activeSection,
      setActiveSection,
      timeOfLastClick,
      setTimeOfLastClick,
    }}> {children}</ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error('useActiveSectionContext must be used within an ActiveSectionContextProvider'
    );
  };

  return context;
}