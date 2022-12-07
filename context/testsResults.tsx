import React, { createContext, useContext, useState, Dispatch, SetStateAction } from "react";
import TestResult from "../src/types/TestsResult";

export type TestsResultsContextProps = {
  testsResults: TestResult[];
  setTestsResults: Dispatch<SetStateAction<TestResult[]>>;
};

const Context = createContext<TestsResultsContextProps>({} as TestsResultsContextProps);

export function TestResultProvider({ children }: { children: React.ReactNode; }) {
  const [testsResults, setTestsResults] = useState<TestResult[]>([]);

  return (
    <Context.Provider value={{ testsResults, setTestsResults }}>
      {children}
    </Context.Provider>
  );
}

export function useTestsResultsContext() {
  return useContext(Context);
}
