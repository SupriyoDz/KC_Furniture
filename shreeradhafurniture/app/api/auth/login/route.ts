import { createSupabaseServerClient } from "@/lib/supabase/server";

type LoginWithPasswordParams = {
  email: string;
  password: string;
};

type LoginWithPhoneParams = {
  phone: string;
  password: string;
};

export async function loginWithPassword({
  email,
  password,
}: LoginWithPasswordParams) {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function LoginWithPhone({ phone, password }: LoginWithPhoneParams) {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    phone,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
