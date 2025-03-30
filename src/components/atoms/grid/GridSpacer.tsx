import Box from "../Box";

interface GridSpacerProps {
  xs: number;
  ys: number;
}

const dynamicColSpan: { [key: number]: string } = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
  7: "col-span-7",
  8: "col-span-8",
  9: "col-span-9",
  10: "col-span-10",
  11: "col-span-11",
  12: "col-span-12",
  13: "col-span-13",
};

const dynamicRowSpan: { [key: number]: string } = {
  1: "row-span-1",
  2: "row-span-2",
  3: "row-span-3",
  4: "row-span-4",
  5: "row-span-5",
  6: "row-span-6",
  7: "row-span-7",
  8: "row-span-8",
  9: "row-span-9",
  10: "row-span-10",
  11: "row-span-11",
  12: "row-span-12",
  13: "row-span-13",
};

/**
 * xs(horizonal) and ys(vrtical) means exclusive area of the grid.
 */
export default function GridSpacer({ xs, ys }: GridSpacerProps) {
  const XS = dynamicColSpan[xs];
  const YS = dynamicRowSpan[ys];

  const appliedStyle = `${XS} ${YS}`;

  return <Box className={appliedStyle} />;
}
