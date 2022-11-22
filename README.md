# Lab 8 - Starter

**1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.**

- [x] *Within a Github action that runs whenever code is pushed*
- [ ] *Manually run them locally before pushing code*
- [ ] *Run them all after all development is completed*

- I think that we should fit our automated tests within a Github action that runs whenever the code is pushed. So everytime we push code to Github, the tests will be ran, that makes the most logical sense to me.


**2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)**

- No, unit testing would be more appropriate for that.




**3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.**

- No, unit test are not for this purpose. Unit test should be more local and small scale. I would think that we use end to end testing for this, but I am not too certain.

**4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.**

- Yes, we would use a unit test to test the max message length. I think that we would because unit test are meant to be small scale and this seems to be small scale because all we are doing is seeing if the length of a string message is 80 characters. That seems to be a simple unit test.
