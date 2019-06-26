# Task

Create an application which loads random sentences from API and finds and displays the most used word within the loaded text.

Think about maintainibility, SOLID principles and how to test the application. Demonstrate the usage of unit test framework.

Don't worry if you don't finish everything you want, we are also interested in your progress and ideas about how to continue the development.


# Time limit

Spend 90 - 120 minutes with the task.


# Application

The application should use some reactive framework (Vue, React, Angular, ..).

It should show the form to the user with an input field for an integer from 1 to 10. This value will be used in the API request to define how many sentences should the API return.

When a user clicks on the button, the application will call an API endpoint (see below), parses the response and analyzes the text in `text` json field.

The application will find the most used word in the text and display it to the user.


# API endpoint

API endpoint to load random sentences is `https://4r4x8h5ai7.execute-api.eu-central-1.amazonaws.com/dev/random-sentences/{n}` where `{n}` is an integer specifying how many sentences should be generated. All sentences will be returned in the `text` field of the returned json.

The API endpoint returns HTTP code 200 and `application/json` with the following structure:

```
{
  "text": "Text to be analyzed ..."
}
```

The API endpoint returns HTTP code 200 and empty text if the number of sentences is not a number.

The API endpoint returns HTTP code 403 if you don't pass the argument `n`.


# Delivery

- create the git repository with your application
- include instructions on how to run the application in the local environment
