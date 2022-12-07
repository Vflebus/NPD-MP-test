import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import TestResult from "../types/TestsResult";
import checkmark from '../../public/imgs/check_mark.png'
import crossmark from '../../public/imgs/cross_mark.png';
const ReactJson = dynamic(import('react-json-view'), { ssr: false });

export default function TestResults({results}: {results: TestResult}) {

  const [opened, setOpened] = useState(false);

    return (
        <div className={"testsResults" + (opened ? '' : ' closed')}>
          <div className="opener" onClick={() => {setOpened(!opened)}}></div>
          <h2 className="testName">Test results for {results.testName}</h2>
          <p className="testExeStatus">test statuts: <span className={results.result == 'PASSED' ? 'successMessage' : 'errorMessage'}>{results.executionStatus == "DONE" ? results.result : results.executionStatus}</span></p>
          {(results.executionStatus == "DONE" && opened) &&
            results.steps.map((step) => {
              return (
                <div className='testStep' key={step.id}>
                  <Image src={step.result == 'DONE' || step.result == 'PASSED' ? checkmark : crossmark} alt='' className="mark"/>
                  <div className="stepDescription">
                    <span className="stepType">
                      {step.id.startsWith("Assert") ? "Assertion" : "Test"}
                    </span>
                    <p>
                      {step.id}: <span className={step.result == 'DONE' || step.result == 'PASSED' ? 'successMessage' : 'errorMessage'}>{step.result}</span>
                    </p>
                    {step.body && (
                      <ReactJson src={JSON.parse(step.body)} collapsed={true} />
                    )}
                  </div>
                </div>
              );
            })}
        </div>
    )
}