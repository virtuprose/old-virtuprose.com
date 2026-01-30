"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Plus, Mic, ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

export interface RadiantPromptInputProps {
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    onSubmit?: (value: string) => void;
    className?: string;
    disabled?: boolean;
}

const PLACEHOLDERS = [
    "Build a custom web app...",
    "Automate my lead generation...",
    "Scale my SEO strategy...",
    "Create an AI agent...",
    "Design a new brand identity...",
];

const SUGGESTIONS = [
    "I want to build a custom web app",
    "I want to automate my lead generation",
    "I want to scale my SEO strategy",
    "I want to create an AI agent",
    "I want to design a new brand identity",
    "How can you help me grow?",
    "What is intelligent automation?",
    "Book a consultation call",
];

export function RadiantPromptInput({
    placeholder: defaultPlaceholder = "Ask anything...",
    value: propValue,
    onChange: propOnChange,
    onSubmit,
    className,
    disabled
}: RadiantPromptInputProps) {
    const [internalValue, setInternalValue] = useState("");
    const isControlled = propValue !== undefined;
    const value = isControlled ? propValue : internalValue;

    // Typewriter State
    const [placeholder, setPlaceholder] = useState(defaultPlaceholder);
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    // Ghost Text State
    const [ghostText, setGhostText] = useState("");

    // Typewriter Logic
    useEffect(() => {
        if (value) return; // Don't animate if user is typing

        const currentFullText = PLACEHOLDERS[placeholderIndex];

        // Typing/Deleting speed logic
        let typeSpeed = isDeleting ? 30 : 50;
        if (!isDeleting && charIndex === currentFullText.length) {
            typeSpeed = 2000; // Pause at end
            setIsPaused(true);
        } else if (isDeleting && charIndex === 0) {
            typeSpeed = 500; // Pause before new word
            setIsPaused(true);
        } else {
            setIsPaused(false);
        }

        const timer = setTimeout(() => {
            if (isPaused) {
                if (!isDeleting && charIndex === currentFullText.length) {
                    setIsDeleting(true);
                } else if (isDeleting && charIndex === 0) {
                    setIsDeleting(false);
                    setPlaceholderIndex((prev) => (prev + 1) % PLACEHOLDERS.length);
                }
            } else {
                setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
            }
        }, typeSpeed);

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, isPaused, placeholderIndex, value]);

    // Update displayed placeholder
    useEffect(() => {
        if (value) {
            setPlaceholder("");
        } else {
            setPlaceholder(PLACEHOLDERS[placeholderIndex].substring(0, charIndex));
        }
    }, [charIndex, placeholderIndex, value]);


    // Ghost Text Logic
    useEffect(() => {
        if (!value || value.length < 3) {
            setGhostText("");
            return;
        }

        const match = SUGGESTIONS.find(s => s.toLowerCase().startsWith(value.toLowerCase()) && s.length > value.length);
        if (match) {
            // Only show the part that hasn't been typed yet
            // Careful: we want the ghost text to start AFTER the cursor primarily, 
            // but for simple overlay we render the whole string but hide the user's part with transparency?
            // Actually, best approach for perfect alignment is to render the user's text invisible + ghost text suffix
            // But fonts might mismatch. 
            // Simpler: Render the FULL suggestion, and rely on input value overlapping it. 
            // We need to match case for the prefix? Or force user case?
            // Let's adopt the "suffix" approach.
            const suffix = match.slice(value.length);
            setGhostText(suffix);
        } else {
            setGhostText("");
        }
    }, [value]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        if (!isControlled) {
            setInternalValue(newValue);
        }
        propOnChange?.(newValue);
    };

    const handleSubmit = () => {
        if (value && !disabled) {
            onSubmit?.(value);
            if (!isControlled) setInternalValue("");
            setGhostText("");
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
        if ((e.key === 'Tab' || e.key === 'ArrowRight') && ghostText) {
            e.preventDefault();
            // Accept suggestion
            const fullText = value + ghostText;
            if (!isControlled) {
                setInternalValue(fullText);
            }
            propOnChange?.(fullText);
        }
    };

    return (
        <div className={cn("relative w-full max-w-2xl mx-auto", className)}>
            {/* Custom CSS for rotating gradient animation */}
            <style>{`
        @property --rotation {
          syntax: '<angle>';
          inherits: false;
          initial-value: 0deg;
        }
        
        @keyframes rotate-gradient {
          to {
            --rotation: 360deg;
          }
        }

        .radiant-input-wrapper {
          --border-size: 3px;
          --gradient: conic-gradient(
            from var(--rotation) 
            at 50% 50% in oklab, 
            oklch(0.63 0.2 251.22) 27%, 
            oklch(0.67 0.21 25.81) 33%, 
            oklch(0.9 0.19 93.93) 41%, 
            oklch(0.79 0.25 150.49) 49%, 
            oklch(0.63 0.2 251.22) 65%, 
            oklch(0.72 0.21 150.89) 93%, 
            oklch(0.63 0.2 251.22)
          );
          animation: rotate-gradient 5s infinite linear;
        }

        /* Glowing border effect */
        .radiant-input-wrapper::before {
          content: '';
          position: absolute;
          inset: calc(var(--border-size) * -1);
          border-radius: inherit;
          background: var(--gradient);
          z-index: -1;
          filter: blur(8px);
          opacity: 0.6;
        }

        /* Sharp border mask */
        .radiant-input-border {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: var(--border-size);
          background: var(--gradient);
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
      `}</style>

            <div className="radiant-input-wrapper relative rounded-full bg-white dark:bg-zinc-900 group transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">

                {/* Animated Gradient Border */}
                <div className="radiant-input-border rounded-full" />

                {/* Inner Content */}
                <div className="relative z-10 flex items-center gap-2 p-1.5 pl-4 pr-1.5 h-14 md:h-16">

                    {/* Add Button */}
                    <button
                        type="button"
                        className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                        aria-label="Add attachment"
                    >
                        <Plus size={20} strokeWidth={2} />
                    </button>

                    {/* Text Input Container */}
                    <div className="relative flex-1 h-full flex items-center">
                        {/* Ghost Text Overlay */}
                        <div className="absolute inset-0 flex items-center pointer-events-none text-base md:text-lg font-light tracking-wide overflow-hidden max-w-full whitespace-pre">
                            {/* Invisible User Text to push ghost text */}
                            <span className="opacity-0">{value}</span>
                            {/* Visible Ghost Text */}
                            <span className="text-gray-400/60 dark:text-gray-500/60">{ghostText}</span>
                        </div>

                        {/* Actual Input */}
                        <input
                            type="text"
                            value={value}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            placeholder={value ? "" : placeholder}
                            disabled={disabled}
                            className="absolute inset-0 w-full h-full bg-transparent border-none outline-none text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 text-base md:text-lg font-light tracking-wide min-w-0"
                        />
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-1 md:gap-2">

                        {/* Mic Button */}
                        <button
                            type="button"
                            className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                            aria-label="Use microphone"
                        >
                            <Mic size={20} strokeWidth={2} />
                        </button>

                        {/* Submit Button */}
                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={!value || disabled}
                            className={cn(
                                "flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-300",
                                value
                                    ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:scale-105 active:scale-95 shadow-md"
                                    : "bg-gray-200 dark:bg-zinc-700 text-gray-400 dark:text-gray-500 cursor-not-allowed opacity-50"
                            )}
                            aria-label="Send message"
                        >
                            <ArrowUp size={22} strokeWidth={2.5} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RadiantPromptInput;
