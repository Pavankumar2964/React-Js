import { createContext } from "react";

const messageAccess = createContext();

export const MesssageAccessProvider=messageAccess.Provider;

export const MessageAccessConsumer=messageAccess.Consumer;