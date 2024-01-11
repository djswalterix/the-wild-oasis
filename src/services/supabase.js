import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qziunwvmigtmtpfsazvx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6aXVud3ZtaWd0bXRwZnNhenZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4MTM4MjUsImV4cCI6MjAyMDM4OTgyNX0.t5QVMlmqwK82uEX8JNWUkOlzTrvpPYKyUY1YGpv8u0Y";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
