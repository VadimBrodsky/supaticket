"use client";

import { getSupabaseBrowserClient } from "@/supabase-utls/browserClient";
import { useEffect } from "react";

export function SupabaseConnectionTest() {
  useEffect(() => {
    const supabase = getSupabaseBrowserClient();
    supabase.storage.listBuckets().then((result) => console.log("Bucket List", result));
  }, []);

  return null;
}
