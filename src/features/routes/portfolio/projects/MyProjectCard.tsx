import { Box, Typography } from "@/components/atoms";
import Link from "next/link";

interface MyProjectCardProps {
  name: string;
  description: string;
  repositoryLink?: string;
  haveCooperated: boolean;
}

export function MyProjectCard({ name, description, repositoryLink, haveCooperated }: MyProjectCardProps) {
  return (
    <Box className="flex flex-col border-l-4 border-gray-300 p-1 my-2">
      <Typography size="defaultPlus">{name}</Typography>
      <Typography>{description}</Typography>
      <Typography>{!haveCooperated ? "独自プロジェクト" : "他人との共同プロジェクト"}</Typography>
      {repositoryLink && (
        <Typography className="hover:text-purple-500 dark:hover:text-purple-500">
          <Link href={repositoryLink}>リポジトリを確認する</Link>
        </Typography>
      )}
    </Box>
  );
}
