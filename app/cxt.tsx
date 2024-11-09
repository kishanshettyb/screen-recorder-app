import React, { useEffect } from "react";
import { useStorageState } from "./useStorageState";
import { router } from "expo-router";

let authToken: string | null = null;

type SignInData = {
  data: {
    token: string;
    userName: string;
  };
};

const AuthContext = React.createContext<{
  signIn: (data: SignInData) => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }
  return value;
}

export function SessionProvider(props: React.PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState("session");

  useEffect(() => {
    authToken = session; // Update authToken whenever session changes
  }, [session]);

  return (
    <AuthContext.Provider
      value={{
        signIn: (data) => {
          setSession(data.data.token);
          console.log(data.data.token);
          router.replace("../(app)/(tabs)");
        },
        signOut: () => {
          setSession(null);
          router.replace("/signIn");
        },
        session,
        isLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export const getAuthToken = () => authToken;
