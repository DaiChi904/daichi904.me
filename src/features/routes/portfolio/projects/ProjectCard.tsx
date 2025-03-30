import { Box, Typography } from "@/components/atoms";
import Link from "next/link";

interface Props {
  name: string;
  description: string;
  repositoryLink?: string;
}

export default function ContributedProjectsCard({ name, description, repositoryLink }: Props) {
  return (
    <Box className="flex flex-col border-l-2 border-gray-300 p-1 my-2">
      <Typography size="defaultPlus">{name}</Typography>
      <Typography>{description}</Typography>
      {repositoryLink && (
        <Typography className="hover:text-purple-500">
          <Link href={repositoryLink}>リポジトリを確認する</Link>
        </Typography>
      )}
    </Box>
  );
}
