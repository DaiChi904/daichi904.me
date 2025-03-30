"use client";

import { Grid } from "@/components/atoms";
import Button from "@/components/atoms/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

export default function NaviButton({ href, children }: Props) {
  const pathname = usePathname();
  return (
    <Grid xs={1} ys={1} xfs={1} yfs={1} className="size-full">
      <Button
        className={`size-full ${pathname === href.substring(0, href.indexOf("?") !== -1 ? href.indexOf("?") : undefined) && "bg-purple-300"}`}
      >
        <Link href={href} className="block text-center font-bold">
          {children}
        </Link>
      </Button>
    </Grid>
  );
}
