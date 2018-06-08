		first ask the user for email

			send get request to the route /loginchk 

				if sucess:true is recived as a response from the backend then ask for password and send post request to the /login route  with email and password

					else sucess:false is received as a response ask for all the register parameters and send the parameters via post request on the route /register

						and receive the jwt token and save to the local storage



 
the header bar component will have login in state which if true will display the logout button on the header bar and if false then login button

[] when the user clicks on the loginbutton the auth composer will open and after sucessful execution it will save the login state in the local storage 

when the header component is rendered the it will first check for the local storage value

and the same for the comments and tags which will be implemented later
