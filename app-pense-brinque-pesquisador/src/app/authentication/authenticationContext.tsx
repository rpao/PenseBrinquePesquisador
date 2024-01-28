import { createContext } from "react";
import { UserData } from "../shared/models/user.model";

export type AuthenticationContextType = { token?: string, decodedUser?: UserData};

export const AuthenticationContext = createContext<AuthenticationContextType>({});

AuthenticationContext.Provider