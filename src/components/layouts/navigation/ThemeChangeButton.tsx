"use client";

import Button from "@/components/atoms/Button";
import { useTheme } from "@/hooks/useTheme";
import Image from "next/image";

// TODO : add dark mode
export default function ThemeChangeButton() {
  const { theme, changeTheme } = useTheme();

  return (
    <Button onClick={() => changeTheme()} className="size-10 rounded-full -z-10 justify-self-end">
      <Image
        width={100}
        height={100}
        src={theme === "light" ? "/others/sun.svg" : "/others/moon.svg"}
        alt="sun or moon"
        className="size-fit p-2"
      />
    </Button>
  );
}
