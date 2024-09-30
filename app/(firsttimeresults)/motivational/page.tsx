import Link from "next/link";
import { ContentLayout } from "@/dashboard/components/admin-panel/content-layout";

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
    "https://pnicjjfbqfmivwgsvnhj.supabase.co/storage/v1/object/public/madarasan/a1232123%20(9).mp4?t=2024-09-14T16%3A44%3A04.026Z",
    "https://pnicjjfbqfmivwgsvnhj.supabase.co/storage/v1/object/public/madarasan/a1232123%20(10).mp4?t=2024-09-14T16%3A44%3A44.850Z",
    "https://pnicjjfbqfmivwgsvnhj.supabase.co/storage/v1/object/public/madarasan/a1232123%20(11).mp4?t=2024-09-14T16%3A44%3A51.598Z"
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