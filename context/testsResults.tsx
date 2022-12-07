import { type } from "os";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import TestResult from "../src/types/TestsResult";

export type TestsResultsContextProps = {
  testsResults: TestResult[];
  setTestsResults: Dispatch<SetStateAction<TestResult[]>>;
};

const Context = createContext<TestsResultsContextProps>(
  {} as TestsResultsContextProps
);

export function TestResultProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [testsResults, setTestsResults] = useState<TestResult[]>([]);

  useEffect(() => {
    let localFavs = localStorage.getItem("testsResults");
    if (localFavs !== null) {
      if (JSON.parse(localFavs)) {
        setTestsResults(JSON.parse(localFavs));
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("testsResults", JSON.stringify(testsResults));
  }, [testsResults]);

  return (
    <Context.Provider value={{ testsResults, setTestsResults }}>
      {children}
    </Context.Provider>
  );
}

export function useTestsResultsContext() {
  return useContext(Context);
}
