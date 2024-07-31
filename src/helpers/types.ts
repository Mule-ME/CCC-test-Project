import React, { ReactNode } from "react";

export interface IRequireAuth {
  children?: ReactNode;
}

export interface IRequireGuest {
  children?: ReactNode;
}

type T = any;

export interface IAuthState extends React.Context<T> {
  authState?: boolean;
  setAuthState?: React.Dispatch<React.SetStateAction<boolean>>;
}
