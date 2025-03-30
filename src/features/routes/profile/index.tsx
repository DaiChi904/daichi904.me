import { Grid } from "@/components/atoms";
import BaseContainer from "@/components/layouts/BaseContainer";
import ProfileCard from "./profileCard";
import ProfileDetails from "./profileDetails";

export default function ProfilePageLayout() {
  return (
    <BaseContainer>
      <Grid container xs={1} ys={1} xfs={12} yfs={1} className="grow">
        <ProfileCard xs={4} />
        <ProfileDetails xs={8} />
      </Grid>
    </BaseContainer>
  );
}
