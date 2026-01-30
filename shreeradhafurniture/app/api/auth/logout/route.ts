import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
// import { logAudit } from "@/lib/audit/logger";

export async function POST() {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.auth.getUser();

//   if (data.user) {
//     await logAudit({
//       userId: data.user.id,
//       action: "USER_LOGOUT",
//     });
//   }

  await supabase.auth.signOut();
  return NextResponse.json({ message: "Logged out" });
}
