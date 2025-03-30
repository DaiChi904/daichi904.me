import { Grid } from "@/components/atoms";
import { ExperienceCard } from "./ExperienceCard";
import ExperienceContainer from "./ExperienceContainer";
import { experience } from "./experience";

export default function MyExperience({ xs }: { xs: number }) {
  return (
    <Grid
      xs={xs}
      ys={1}
      xfs={1}
      yfs={1}
      className="relative h-full overflow-y-scroll rounded-md border-black border-[0.5px]"
    >
      <ExperienceContainer>
        {experience.map((item) => (
          <ExperienceCard key={item.label} label={item.label} iconSrc={item.iconSrc} details={item.details} />
        ))}
      </ExperienceContainer>
    </Grid>
  );
}
