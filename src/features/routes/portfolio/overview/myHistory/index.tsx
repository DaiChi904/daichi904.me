import { Box, Grid, Typography } from "@/components/atoms";
import { ListItem, UnorderedList } from "@/components/atoms/list";
import getDateString from "@/utils/getDateString";
import HistoryContainer from "./HistoryContainer";
import { myHistory } from "./myHistory";

export default function MyHistory({ xs }: { xs: number }) {
  const MyHistory = myHistory.sort((a, b) => a.date.time.getTime() - b.date.time.getTime());
  return (
    <Grid
      xs={xs}
      ys={1}
      xfs={1}
      yfs={1}
      className="relative h-full overflow-y-scroll rounded-md border-black border-[0.5px]"
    >
      <HistoryContainer>
        <Box className="pl-[1.25vw] ml-[2vw] my-5 border-l-[0.5vw] z-0">
          {MyHistory.map((item) => (
            <Grid
              container
              xs={1}
              ys={1}
              xfs={6}
              yfs={2}
              key={item.shortDescription}
              className="justify-centeri items-center relative -left-[2.5vw] pt-5"
            >
              <Grid container xs={1} ys={2} xfs={1} yfs={2} className="h-full">
                <Grid xs={1} ys={1} xfs={1} yfs={1} className="content-center">
                  <Box className="flex self-center justify-center items-center text-white bg-black rounded-full size-[2vw]">
                    {/** TODO Add Icon for each history by event type */}
                  </Box>
                </Grid>
              </Grid>
              <Grid xs={5} ys={1} xfs={1} yfs={1} className="content-center justify-center  border-b-2 border-purple-700">
                <Typography>{getDateString(item.date.time, item.date.roughly)}</Typography>
                <Typography>{item.shortDescription}</Typography>
              </Grid>
              <Grid xs={5} ys={1} xfs={1} yfs={1} className="content-center justify-center text-wrap break-words">
                <UnorderedList>
                  {item.details.map((detail) => (
                    <ListItem key={detail}>{detail}</ListItem>
                  ))}
                </UnorderedList>
              </Grid>
            </Grid>
          ))}
        </Box>
      </HistoryContainer>
    </Grid>
  );
}
