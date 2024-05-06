Your task is to create a RESTful API server using Express.js. Briefly summarized the server should:

- Authenticate users Iris and Max using bcrypt hashes stored in the users file.
- Serve questions and accept answers based on predefined data in JSON files.
- Keep track of user attempts and scores.

# Your Task

1. **Create an Express REST API Server:**
   - Set up a basic Express server that listens for incoming HTTP requests.
   - Implement routes for the endpoints (listed below) with appropriate HTTP methods and responses.

2. **Implement Authentication:**
   - Create a login mechanism that checks user credentials against the `data/users.json` file.
   - Use JWT (JSON Web Tokens) to secure the endpoints.

3. **Work with JSON Files:**
   - Use the predefined functions `read` and `write` from `src/tools/json-files.js` to read and write data to/from the JSON files.
   - Calling `write('filename.json')` with a filename that does not exist, will create a new file.

4. **API Endpoints:**

   - **POST /authenticate**
      - Accepts the username:password combination as a base64-encoded string in the Authorization header using the "Bearer" scheme.
      - On successful authentication, returns a JSON Web Token (JWT) which clients will use to access subsequent API endpoints.
      - If authentication fails, returns a 401 Unauthorized status with a relevant message.
      - Authorization: All users (authenticated or not) can access this endpoint.

   - **GET /questions**
     - Retrieve all questions stored in `data/questions.json`.
     - Authorization: All users (authenticated or not) can access this endpoint.

   - **GET /questions/{questionId}**
     - Retrieve the properties `id`, `question`, and `options` for a specific question by its UUID.
     - If the `questionId` does not exist, respond with a `404 Not Found` HTTP status code.
     - Authorization: All users (authenticated or not) can access this endpoint.

   - **POST /questions/{questionId}/attempt**
     - Submit an answer attempt to a specified question.
     - Verify the answer's correctness.
     - Save the attempt to `data/attempts.json` with a UUID as the attempt ID.
     - Authorization: Only authenticated users can access this endpoint.

   - **GET /questions/{questionId}/attempt/{attemptId}/score**
     - Retrieve the score for a specific attempt.
     - Return a JSON response showing if the attempt was correct or not.
     - Authorization: Only authenticated users can access this endpoint.

## Additional Guidelines:

- **Form Validation:** Use JOI to validate user input, ensuring that submitted answers follow the correct format and are within the index range.
- **Error Handling:** Return meaningful error messages and HTTP status codes for invalid or unauthorized requests.

# Fixtures / Prepared content and user data

You should use predefined questions and users to implement the quiz API. 

## Questions

The questions are stored as array in the file `data/questions.json` and have the following data structure:

| Property      | Type     | Description                                |
|---------------|----------|--------------------------------------------|
| id            | uuid     | Unique identifier for a question           |
| question      | string   | Actual question text                       |
| answers       | string[] | List of possible answer options            |
| correctAnswer | number   | Index of the correct answer in above array |

## Users

The users file (`data/users.json`) contains two users:

| Name | Password |
|------|----------|
| Iris | 123      |
| Max  | 123      |

Use Iris and Max for authentication. The passwords are stored as cryptographic hashes, created with the bcrypt algorithm.
When verifying the password, please pay attention to comparing hashes, not the plain password with the stored hash.

# Tooling

The file `src/tools/json-files` contains the function `read` and `write` to get data from and update data in JSON files.

Usage examples for reading:

    import {read, write} from './tools/json-files.js'

    const questions = read('questions'); 
    for (const {question} of questions){
        console.log(question)
    }

Usage example for writing:

    import {read, write} from './tools/json-files.js'
    
    newAttempt = ... // your new object here
    const questions = read('attempts');
    write('attempts', [...attempts, newAttempt])

