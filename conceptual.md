### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
    > JWT stands for JSON WEB TOKEN , and its used for authentication mostly.

- What is the signature portion of the JWT?  What does it do?
    > the signature is the last string after second dot, and the signature make sure that we have a valid token from our server.
- If a JWT is intercepted, can the attacker see what's inside the payload?
    > yes.
- How can you implement authentication with a JWT?  Describe how it works at a high level.
    > We can implement JWT using middleware that authenticates the JWt for every requested route,
    > at registration we provide a JWT token , which will be stored by the browser and can expire, 
    > the browser will automatically send the token in the header of each request.
- Compare and contrast unit, integration and end-to-end tests.
    > unit tests are designed to make sure a specific function works correctly, while integration will make sure that a set of commands won't break. end-to-end tests are designed to mimic a user-like experience testing both front-end and backend functionality.
- What is a mock? What are some things you would mock?
  > mock is the ability to mock some functionality, isolating it's behavior to a specific pattern.
  > we could mock a function that returns random values, Ajax requests to bypass an API, etc..
- What is continuous integration?
  > continuous integration is the habit of merging small pieces of code instead of large chunks
- What is an environment variable and what are they used for?
  > environment variables are variables stored in the computer session and its used to configure our applications since it's safer to have secret variables hidden in the computer.
- What is TDD? What are some benefits and drawbacks?
  >TDD is test driven development, the benefits are that it's easier to avoid bugs since will be writing test first and code to pass second, drawbacks is that requires a lot of practice because it changes the tought process, you need to think about what you need as result first.
- What is the value of using JSONSchema for validation?
  > JSONSchema makes validation simple, by defining what type of data and restricitions in a single file to use for multiple coding blocks.
- What are some ways to decide which code to test?
  > Probably maintaining consistency for each section of the app. test the database with models, test routes through the API.
- What does `RETURNING` do in SQL? When would you use it?
  > it returns the values from the specified columns, and we should use it when INSERTING, UPDATING or DELETING from the database, if needed. 
- What are some differences between Web Sockets and HTTP?
  > WebSockets are stateful, it keeps  the connection between the server and the client "alive" as long the socket is open, while HTTP is stateless which means ask for something, gets it, and drop connection.
- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  > it does seemed that flask is easier to handle , but it might be because of the simplicity of python language. Express in the other hand seems more featureful and customizable.
