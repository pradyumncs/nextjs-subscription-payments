import Link from "next/link";

import PlaceholderContent from "@/dashboard/components/demo/placeholder-content";
import { ContentLayout } from "@/dashboard/components/admin-panel/content-layout";

import { CreateSeries } from "@/components/create-seriesfinal";
export default function UsersPage() {
  return (
    <ContentLayout title="Users">
    
      <CreateSeries />
    </ContentLayout>
  );
}
