import Grid from "@/components/atoms/grid/Grid";

interface Props {
  colSpan: number;
  rowSpan: number;
}

export default function NavigationSpan({ colSpan, rowSpan }: Props) {
  return <Grid xs={colSpan} ys={rowSpan} xfs={1} yfs={1} />;
}
