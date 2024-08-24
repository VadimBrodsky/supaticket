"use client";

import { useEffect } from "react";
import { createSupabaseClient } from "@/supabase-utls/client";

export function SupabaseConnectionTest() {
  useEffect(() => {
    const supabase = createSupabaseClient();
    supabase.storage.listBuckets().then((result) => console.log("Bucket List", result));
  }, []);

  return null;
}
