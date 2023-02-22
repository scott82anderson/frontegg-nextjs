import { GetServerSideProps } from "next";
import { withSSRSession, useAuth } from "@frontegg/nextjs";

export default function MyPage() {
  const { user, isAuthenticated } = useAuth();

  let baseUrl = "http://localhost:3000";

  if (typeof window !== "undefined") {
    baseUrl = window.location.protocol + "//" + window.location.host;
  }

  const logout = () => {
    window.location.href = `${baseUrl}/account/logout`;
  };

  return (
    <div>
      <h1>My Page</h1>

      <div>user: {JSON.stringify(user)}</div>
      <div>isAuthenticated: {isAuthenticated}</div>
      <div>
        <span>Logged in as: {user?.name}</span>
      </div>
      <div>
        <button onClick={logout}>Log out</button>
      </div>
    </div>
  );
}

// In the `getServerSideProps` method you can get data from an external service to pull relevant data for a logged in user.
// we used the prop `products`. See the commented code for an example.

export const getServerSideProps: GetServerSideProps = withSSRSession(
  async (context, session) => {
    //     const { data } = await fetch('{external}/product', {
    //      headers: {
    //        Authorization: 'bearer ' + session.accessToken,
    //      },
    //    });
    return { props: {} };
  }
);
