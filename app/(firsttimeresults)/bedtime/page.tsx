import Link from "next/link";
import { ContentLayout } from "@/dashboard/components/admin-panel/content-layout";
import { CreateSeries } from "@/components/create-seriesfinalfree";
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import {
  getUserDetails,
  getSubscription,
  getUser,
  updateFirstTimeUser
} from '@/utils/supabase/queries';
import Firsttime from "@/components/Firsttime";
import Firstvideo from "@/components/newvideo/firstvideo";

export default function Component() {
  const videoUrls = [
    "https://pnicjjfbqfmivwgsvnhj.supabase.co/storage/v1/object/public/madarasan/a1232123%20(4).mp4?t=2024-09-14T16%3A39%3A45.059Z",
    "https://pnicjjfbqfmivwgsvnhj.supabase.co/storage/v1/object/public/madarasan/a1232123%20(5).mp4?t=2024-09-14T16%3A39%3A52.691Z",
  ];

  const randomIndex = Math.floor(Math.random() * videoUrls.length);
  const selectedVideoUrl = videoUrls[randomIndex];

  return (
    <ContentLayout title="">
      <Firstvideo videoUrl={selectedVideoUrl} />
      {/* ...rest of your component logic... */}
    </ContentLayout>
  );
}