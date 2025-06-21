"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center h-8 w-14 rounded-full bg-gray-300 dark:bg-gray-700 transition-colors duration-300 p-1"
    >
      {/* Toggle deslizante */}
      <span
        className={`h-6 w-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      />

      {/* Iconos 🌞 y 🌙 */}
      <span className="absolute left-1 text-xs pointer-events-none">🌞</span>
      <span className="absolute right-1 text-xs pointer-events-none">🌙</span>
    </button>
  );
}
