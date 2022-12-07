import "../styles/reset.css";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { TestResultProvider } from "../context/testsResultsContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TestResultProvider>
      <Component {...pageProps} />
    </TestResultProvider>
  );
}
