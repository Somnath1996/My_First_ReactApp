the initial screen and login screent is same
** the Login flow 

case:the user clicks on the login button

[Step1] render the loginComposer container with the emailcheck component
        [.]when the user enters the email id and clicks on the login button display the loader and send the api request to the email check route

	[.]the response is received from the server and fires an event
	[.] disable the loader and route to login or register depending on the response




[step2] [Login] render the login  component and for [register] render the  register component


********NOTE!!!!!

	the logincomposer will be a class component(stateful) and will be the parent of email check , register, login components

		the child will communicate to the parents with the functions passed as props

	all the childs will set the state of parent 
and on sucesssfull login or registration  the login composer will propogate  the loginstate to the parent App.js
