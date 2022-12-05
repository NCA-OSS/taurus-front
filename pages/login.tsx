import LoginCard from "@components/cards/login-card/LoginCard";
import { mockLoginCardProps } from "@components/cards/login-card/LoginCard.mocks";
import Head from "next/head";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login | taurus</title>
      </Head>

      <main className="grid place-items-center h-screen">
        <LoginCard onSubmit={mockLoginCardProps.base.onSubmit} />
      </main>
    </>
  );
}
