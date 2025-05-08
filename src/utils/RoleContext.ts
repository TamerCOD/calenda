
import { createContext, useContext } from "react";

export const RoleContext = createContext("user");

export const useRole = () => useContext(RoleContext);
