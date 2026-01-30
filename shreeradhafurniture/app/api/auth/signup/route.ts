import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";
// import { logAudit } from "@/lib/audit/logger";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || password.length < 8) {
    return NextResponse.json(
      { error: "Invalid credentials" },
      { status: 400 }
    );
  }

  const { data, error } =
    await supabaseAdmin.auth.admin.createUser({
      email,
      password,
    });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

//   await supabaseAdmin.from("profiles").insert({
//     id: data.user.id,
//     email,
//     role: "user",
//   });

//   await logAudit({
//     userId: data.user.id,
//     action: "USER_SIGNUP",
//     ip: req.headers.get("x-forwarded-for") ?? "",
//     userAgent: req.headers.get("user-agent") ?? "",
//   });

  return NextResponse.json({ message: "Signup successful" }, { status: 201 });
}
