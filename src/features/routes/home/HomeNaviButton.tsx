import { Grid, Typography } from "@/components/atoms";
import Button from "@/components/atoms/Button";
import Link from "next/link";
import type { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

export default function HomeNaviButton({ href, children }: Props) {
  return (
    <Grid xs={1} ys={1} xfs={1} yfs={1} className="items-center justify-center">
      <Button className="py-0.5 px-2 w-48">
        <Link href={href} className="block text-center font-bold">
          <Typography size="medium" textAlign="center">
            {children}
          </Typography>
        </Link>
      </Button>
    </Grid>
  );
}
