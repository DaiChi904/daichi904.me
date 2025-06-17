import PortfolioPageLayout from "@/features/routes/portfolio";
import { Suspense } from "react";

export default function Portfolio() {
  return (
    <Suspense>
      <PortfolioPageLayout />
    </Suspense>
  );
}
