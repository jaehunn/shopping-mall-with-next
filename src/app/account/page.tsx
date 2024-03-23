import { createClient } from "~/lib/supabase/server";
import { signout } from "./actions";

export default async function Account() {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();

  return (
    <>
      <form>
        <input type="text" readOnly value={data?.user?.email ?? ""} />

        <button formAction={signout}>Sign Out</button>
      </form>
    </>
  );
}
