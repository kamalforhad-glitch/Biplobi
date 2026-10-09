"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { clsx } from "clsx";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl";
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = "lg",
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-3xl",
    "2xl": "max-w-4xl",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1E1B18]/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
        className={clsx(
          "relative w-full bg-[#FFFDF9] rounded-2xl border border-[#E6DCD1] shadow-[0_20px_50px_rgba(25,18,10,0.2)] p-6 sm:p-8 z-10 my-8 transition-all duration-300 transform scale-100",
          maxWidthClasses[maxWidth]
        )}
      >
        <button
          onClick={onClose}
          aria-label="বন্ধ করুন"
          className="absolute top-5 right-5 p-2 rounded-full text-[#635C54] hover:text-[#1E1B18] hover:bg-[#F0E6D8] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {title && (
          <div className="mb-6 pb-4 border-b border-[#EFE8DF] pr-8">
            <h3
              id="modal-title"
              className="text-xl sm:text-2xl font-bold text-[#1E1B18] font-serif-bengali flex items-center gap-3"
            >
              <span>{title}</span>
              <span className="w-6 h-1 bg-[#9E1B22] rounded-full inline-block" />
            </h3>
          </div>
        )}

        <div className="max-h-[75vh] overflow-y-auto pr-1">{children}</div>
      </div>
    </div>
  );
}

