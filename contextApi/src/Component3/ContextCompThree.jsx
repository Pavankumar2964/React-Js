import { createContext } from "react";

const messsageAccess=createContext();
export const MessageAccessProvider=messsageAccess.Provider;
export const MessageAccessConsumer=messsageAccess.Consumer;

