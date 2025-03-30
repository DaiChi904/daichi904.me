import Box from "../Box";
import Typography from "../Typography";

interface ChipProps {
  label: string;
}

export default function Chip({ label }: ChipProps) {
  return (
    <Box className="block w-fit rounded-md border-black/90 bg-white/25">
      <Typography size="small" textAlign="center" className="px-1.5 py-0.5 text-white">
        {label}
      </Typography>
    </Box>
  );
}
