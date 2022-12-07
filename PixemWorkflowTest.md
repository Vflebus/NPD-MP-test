Send request/response to run the test: (hard coded test)
 
   `POST: [MAESTRO_HOST]/maestro/rest/testrun/demotest/completeTest`
	Request:
   		- Headers: 
   			- Content-Type: application/json
		- Body: null

	Response: 
		+ Headers: 
			...Headers,
			*Location: [Link to the new created test] ($testUrl)


Follow the execution status of our test: 

    - GET: [$testUrl]
    
    	Request: Nothing
    
    	Response:
    		+ Body:
    			{
			  "id": "testId",
			  "testName": "test name",
			  "result": "test result",
			  "executionStatus": "PENDING or RUNNING or DONE", (PENDING [102] not yet accepted by Maestro, RUNNING [202] Maestro start the test, DONE [200] The test is finished 
			  "steps": (only when the status is done) [
			    {
			     "id": "step id",
			     "result": "Step Result",
			     "description": "step description"
			     "body": "Step Body" (could be null),
			    },
			    ...
			   ]
			}
			    	
			    	

Status concepts:  <br />
	+ Test Result: [DONE, PASSED, FAILED, ERROR] <br />
	+ Step Result: [DONE, PASSED, FAILED, ERROR] <br />
	+ Execution Status: [PENDING, RUNNING, DONE]
