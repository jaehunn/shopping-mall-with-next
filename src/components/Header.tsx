import React from "react";
import { Box, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { createClient } from "~/lib/supabase/server";

export const Header = async () => {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();

  const hasUser = !!data?.user;

  return (
    <Flex justify="between">
      <Box width="9" height="9">
        Logo
      </Box>

      <Box width="9" height="9">
        <Link href={`${hasUser ? "/account" : "/signin"}`}>
          {hasUser ? "Account" : "Sign In"}
        </Link>
      </Box>
    </Flex>
  );
};

// {
//   data: {
//     user: {
//       id: '2e6c06f7-a6bb-402d-995e-9b4878620c38',
//       aud: 'authenticated',
//       role: 'authenticated',
//       email: 'jaehun@example.co.kr',
//       email_confirmed_at: '2024-03-23T04:37:35.72725Z',
//       phone: '',
//       confirmed_at: '2024-03-23T04:37:35.72725Z',
//       last_sign_in_at: '2024-03-23T04:55:12.334712Z',
//       app_metadata: [Object],
//       user_metadata: {},
//       identities: [Array],
//       created_at: '2024-03-23T04:37:35.709416Z',
//       updated_at: '2024-03-23T04:55:12.341509Z',
//       is_anonymous: false
//     }
//   }
// }
