import { Grid, Typography } from "@/components/atoms";
import Button from "@/components/atoms/Button";
import Image from "next/image";
import Link from "next/link";

interface Props {
  iconSrc: string;
  label: string;
  detail: string;
}

export function ContactCard({ iconSrc, label, detail }: Props) {
  return (
    <Grid container xs={1} ys={1} xfs={1} yfs={1} className="size-full">
      <Grid container xs={1} ys={1} xfs={7} yfs={5} className="grid-flow-col p-2 border-[0.5px] border-black rounded-md">
        <Grid xs={2} ys={3} xfs={1} yfs={1} className="justify-items-center content-center">
          <Image width={1000} height={1000} src={iconSrc} alt="icon" className="size-fit max-w-24 max-h-24" />
        </Grid>
        <Grid xs={2} ys={2} xfs={1} yfs={1} className="justify-items-center content-center">
          <Typography>{label}</Typography>
        </Grid>
        <Grid xs={5} ys={5} xfs={1} yfs={1} className="justify-items-center content-center">
          <Typography>{detail}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

interface PropsWithLink {
  iconSrc: string;
  label: string;
  detail: string;
  href: string;
}

export function ContactCardWithLink({ iconSrc, label, detail, href }: PropsWithLink) {
  return (
    <Link href={href} className="size-full">
      <Button className="size-full rounded-md">
        <ContactCard iconSrc={iconSrc} label={label} detail={detail} />
      </Button>
    </Link>
  );
}
