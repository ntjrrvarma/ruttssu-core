import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

// Initialize Supabase Client for the Edge Route
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug;

  // 1. Fetch the destination URL
  const { data, error } = await supabase
    .from('links')
    .select('destination, clicks')
    .eq('slug', slug)
    .single();

  // 2. If no link found, redirect to Home
  if (error || !data) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // 3. Increment Click Counter (Fire & Forget)
  supabase
    .from('links')
    .update({ clicks: data.clicks + 1 })
    .eq('slug', slug)
    .then(({ error }) => {
      if (error) console.error('Error tracking click:', error);
    });

  // 4. EXECUTE REDIRECT
  return NextResponse.redirect(new URL(data.destination, request.url));
}