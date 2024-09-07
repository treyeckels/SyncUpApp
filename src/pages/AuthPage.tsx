import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";

const AuthPage = () => (
  <Authenticator
    components={{
      SignUp: {
        FormFields() {
          return (
            <>
              <Authenticator.SignUp.FormFields />
            </>
          );
        },
      },
    }}
  >
    {({ signOut, user }) => (
      <main>
        {user ? (
          <>
            <h1>Welcome, {user.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </>
        ) : (
          <h1>Loading...</h1> // You can customize this part as needed
        )}
      </main>
    )}
  </Authenticator>
);

export default AuthPage;
