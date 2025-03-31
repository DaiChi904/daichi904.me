"use client";

import { Box, Grid, Typography } from "@/components/atoms";
import Button from "@/components/atoms/Button";
import { ListItem } from "@/components/atoms/list";
import NoStyledList from "@/components/atoms/list/NoStyledList";
import { useTheme } from "@/hooks/useTheme";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

interface BaseCardProps {
  xs: number;
  ys: number;
  verticalCenter?: boolean;
  noPadding?: boolean;
  children: ReactNode;
}

function IntroductionCard({ xs, ys, verticalCenter, noPadding, children }: BaseCardProps) {
  return (
    <Grid xs={xs} ys={ys} xfs={1} yfs={1} className="p-2 h-full">
      <Box
        className={`flex flex-col ${!noPadding ? "p-2" : ""} h-full border-2 rounded-md ${verticalCenter ? "  justify-center" : ""}`}
      >
        {children}
      </Box>
    </Grid>
  );
}

interface Props {
  xs: number;
  ys: number;
}

export function HobbyCard({ xs, ys }: Props) {
  return (
    <IntroductionCard xs={xs} ys={ys}>
      <Typography size="medium">趣味・好きなこと</Typography>
      <NoStyledList>
        <ListItem>睡眠</ListItem>
        <ListItem>料理</ListItem>
        <ListItem>音楽を聴く</ListItem>
        <ListItem>ゲーム</ListItem>
      </NoStyledList>
    </IntroductionCard>
  );
}

export function FavoriteLanguageCard({ xs, ys }: Props) {
  return (
    <IntroductionCard xs={xs} ys={ys}>
      <Typography size="medium">好きな言語</Typography>
      <Typography>TypeScriptが一番好きです。</Typography>
    </IntroductionCard>
  );
}

export function OthersCard({ xs, ys }: Props) {
  return (
    <IntroductionCard xs={xs} ys={ys}>
      <Typography size="medium">その他</Typography>
      <Typography>朝に弱いです。</Typography>
    </IntroductionCard>
  );
}

export function GithubCard({ xs, ys }: Props) {
  const { theme } = useTheme();
  return (
    <Link href={"https://github.com/DaiChi904"}>
      <IntroductionCard xs={xs} ys={ys} verticalCenter noPadding>
        <Button className="size-full rounded-md">
          <Grid container xs={1} ys={1} xfs={5} yfs={1} className="items-center justify-items-center">
            <Grid xs={2} ys={1} xfs={1} yfs={1} className="items-center justify-items-center">
              <Image
                width={1000}
                height={1000}
                src={theme === "light" ? "/logos/github/github-mark.svg" : "/logos/github/github-mark-white.svg"}
                alt="github logo"
                className="flex size-fit dark:white"
              />
            </Grid>
            <Grid xs={3} ys={1} xfs={1} yfs={1}>
              <Typography textAlign="center">View Profile in Github</Typography>
            </Grid>
          </Grid>
        </Button>
      </IntroductionCard>
    </Link>
  );
}
