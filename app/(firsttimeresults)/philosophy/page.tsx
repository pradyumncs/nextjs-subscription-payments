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
    "https://pnicjjfbqfmivwgsvnhj.supabase.co/storage/v1/object/public/madarasan/a1232123%20(15).mp4?t=2024-09-14T16%3A46%3A31.589Z",
    "https://pnicjjfbqfmivwgsvnhj.supabase.co/storage/v1/object/public/madarasan/a1232123%20(16).mp4?t=2024-09-14T16%3A46%3A53.135Z",
    "https://pnicjjfbqfmivwgsvnhj.supabase.co/storage/v1/object/public/madarasan/a1232123%20(17).mp4?t=2024-09-14T16%3A46%3A59.902Z"
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