"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface ReCaptchaContextType {
  executeRecaptcha: (action: string) => Promise<string | null>;
  isLoaded: boolean;
}

const ReCaptchaContext = createContext<ReCaptchaContextType | undefined>(undefined);

export function useReCaptcha() {
  const context = useContext(ReCaptchaContext);
  if (!context) {
    throw new Error("useReCaptcha must be used within ReCaptchaProvider");
  }
  return context;
}

interface ReCaptchaProviderProps {
  siteKey: string;
  children: ReactNode;
}

export function ReCaptchaProvider({ siteKey, children }: ReCaptchaProviderProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [grecaptcha, setGrecaptcha] = useState<any>(null);

  useEffect(() => {
    if (!siteKey) {
      console.warn("reCAPTCHA site key not provided");
      return;
    }

    // Check if already loaded
    if (window.grecaptcha) {
      setGrecaptcha(window.grecaptcha);
      setIsLoaded(true);
      return;
    }

    // Load reCAPTCHA script
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          setGrecaptcha(window.grecaptcha);
          setIsLoaded(true);
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup if needed
    };
  }, [siteKey]);

  const executeRecaptcha = async (action: string): Promise<string | null> => {
    if (!grecaptcha || !isLoaded) {
      console.error("reCAPTCHA not loaded");
      return null;
    }

    try {
      const token = await grecaptcha.execute(siteKey, { action });
      return token;
    } catch (error) {
      console.error("reCAPTCHA execution error:", error);
      return null;
    }
  };

  return (
    <ReCaptchaContext.Provider value={{ executeRecaptcha, isLoaded }}>
      {children}
    </ReCaptchaContext.Provider>
  );
}

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

