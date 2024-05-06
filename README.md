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

