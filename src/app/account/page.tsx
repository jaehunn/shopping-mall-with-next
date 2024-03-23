import { createClient } from "~/lib/supabase/server";

export default async function Account() {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();

  return <>{data?.user?.email ?? ""}</>;
}
