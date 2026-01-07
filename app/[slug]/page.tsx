import { createClient } from "@/utils/supabase/server";
import { redirect, notFound } from "next/navigation";

export default async function RedirectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createClient();

  // 1. Search for the link in your database
  const { data: link } = await supabase
    .from("links")
    .select("long_url, id, clicks")
    .eq("slug", slug)
    .single();

  // 2. If not found, show the 404 page
  if (!link) {
    notFound();
  }

  // 3. (Optional) Increment Click Count - Fire and Forget
  // We can add the RPC function for this later.
  
  // 4. Redirect immediately
  redirect(link.long_url);
}