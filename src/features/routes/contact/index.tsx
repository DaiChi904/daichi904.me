"use client";

import { Grid } from "@/components/atoms";
import BaseContainer from "@/components/layouts/BaseContainer";
import { useTheme } from "@/hooks/useTheme";
import { ContactCard, ContactCardWithLink } from "./ContactCard";

export default function ContactPageLayout() {
  const { theme } = useTheme();
  return (
    <BaseContainer>
      <Grid container xs={1} ys={1} xfs={1} yfs={2} className="grow gap-10 p-10">
        <ContactCard
          iconSrc="/others/mail_512dp_E8EAED_FILL0_wght400_GRAD0_opsz48.svg"
          label="Gmail"
          detail="daichi904.22219@gmail.com"
        />
        <ContactCardWithLink
          iconSrc={theme === "light" ? "/logos/github/github-mark.svg" : "/logos/github/github-mark-white.svg"}
          label="Github"
          detail="View profile of github"
          href="https://github.com/DaiChi904"
        />
      </Grid>
    </BaseContainer>
  );
}
