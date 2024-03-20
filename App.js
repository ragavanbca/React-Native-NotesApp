import React from "react";
import Root from "./src/pages/index";
import { ToastProvider } from 'react-native-toast-notifications';


export default function App() {
  return (
    <ToastProvider>
      <Root />
    </ToastProvider>
  );
}
