# Movies-App

 Movies App (Demo) for discovering movies and view details for each novie and add to favorites
 
 # IMPORTANT NOTE

I am using API provided by https://www.themoviedb.org/documentation/api

# Main technologies used

* React Native
* Typescript
* React Navigation (v5)
* RESTful API
* React Native Testing Library

# Main functionality

* Home Page user can search by the movie name and if there are result it will appear or it will view no result message.
* User can see all the details related to the movie by click on the movie card.
* Favorite Page contain list of user's favorite movies.

# Prerequisites

* React Native CLI to be installed. You can install it by running the command:

npm install -g react-native-cli

* Simulator or emulator to run the app on.

# Installation

First clone the repo using SSH or HTTPS. Here's an example using HTTPS:

git clone https://github.com/a7madsamir/Movies-App.git

Second run the following command to install project dependencies:

yarn install

in IOS

You will need to make one more step to install pods dependencies, run the following command in the project directory:

* cd ios && pod install

# Run on Device

* run yarn android or yarn ios to run on device or emulator.

# Run Unit Test

* run yarn run test to run all unit test suites.

# Used dependencies

    "@react-native-community/async-storage": "^1.12.0",
    "@react-native-community/masked-view": "^0.1.10",
    "@react-navigation/native": "^5.8.10",
    "@react-navigation/stack": "^5.12.8",
    "axios": "^0.20.0",
    "lodash": "^4.17.20",
    "react": "16.13.1",
    "react-native": "0.63.2",
    "react-native-gesture-handler": "^1.9.0",
    "react-native-percentage-circle": "^1.0.7",
    "react-native-progress-circle": "^2.1.0",
    "react-native-reanimated": "^1.13.2",
    "react-native-responsive-screen": "^1.4.1",
    "react-native-safe-area-context": "^3.1.9",
    "react-native-screens": "^2.16.1",
    "react-native-vector-icons": "^7.1.0",
    "react-redux": "^7.2.1",
    "redux": "^4.0.5",
    "redux-logger": "^3.0.6",
    "redux-persist": "^6.0.0",
    "redux-thunk": "^2.3.0",
    "validator": "^13.5.2"
    
    Also I am using eslint and prettier for better code formatting
