type TestStep = {
    id: string,
    result: string,
    body: string
}

type TestResult = {
    id: string,
    testName: string,
    result: string,
    executionStatus: string,
    steps: TestStep[]
}

export default TestResult