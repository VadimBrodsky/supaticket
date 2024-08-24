import { createBrowserClient } from "@supabase/ssr";

// dynamic lookup of env variables are not inlined
const URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export function getSupabaseBrowserClient() {
  if (!URL || !ANON) {
    throw new Error("Failed to connect to Supabase, missing env variables.");
  }

  return createBrowserClient(URL, ANON);
}

