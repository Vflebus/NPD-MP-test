import Head from "next/head";
import { useState } from "react";
import testResults from "../src/tempData/testResultsExample.json";
import { useTestsResultsContext } from "../context/testsResults";
import TestResults from "../src/components/TestResults";
import ParticlesBackground from "../src/components/ParticlesBackground";

export default function Home() {
  const [currentTestNumber, setCurrentTestNumber] = useState(1);
  const { testsResults, setTestsResults } = useTestsResultsContext();

  function startTest(): void {
    setTestsResults([...testsResults, {...testResults, id: `Complete Demo Test ${currentTestNumber}`, testName: `Complete Demo Test ${currentTestNumber}`}]);
    setCurrentTestNumber(currentTestNumber+1);
  }

  return (
    <div className="main">
      <ParticlesBackground />
      <div className="nav">
        {/* <div className="user">SUT Operator</div> */}
        <p className="userWelcome">
          Welcome, <br />
          SUT Operator
        </p>
        <form className="testForm">
          <h2>Start a new test</h2>
          <select className="formBtn" id="sutSelector">
            <option value="SUT 1">SUT 1</option>
            <option value="SUT 2">SUT 2</option>
          </select>
          <select className="formBtn" id="sutSelector">
            <option value="TEST 1">TEST 1</option>
            <option value="TEST 2">TEST 2</option>
          </select>
          <div className="formBtn" onClick={startTest}>
            Launch Test
          </div>
        </form>
      </div>
      <div className="testsSection">
        {testsResults.map((testResult) => {
          return <TestResults results={testResult} key={testResult.id} />;
        })}
      </div>
      <Head>
        <title>New Portal minimal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
