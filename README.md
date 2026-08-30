# Temperature Converter

This project was created with Expo using the following command:

```bash
npx create-expo-app@latest temperature-converter --template blank
```

The app uses a blank Expo template, which provides a minimal React Native project structure ready to run and customize.

This application is an example for the students of the course "# Integración de seguridad informática en redes y sistemas de software".

## What is React Native?

React Native is a framework for building mobile applications using JavaScript and React. It lets you create native-like apps for iOS and Android from a single codebase.

## What is Expo?

Expo is a set of tools and services built on top of React Native that makes mobile app development faster and easier. It provides a managed workflow, prebuilt libraries, and a simple way to run and test apps on devices and simulators.

## What is React Native Paper?

React Native Paper is a UI library for React Native that provides ready-to-use components such as buttons, text inputs, and typography following Material Design. It helps build a more polished and consistent mobile interface without having to create every visual element from scratch.

## Libraries added to the project

The following libraries were added to improve the UI and app structure:

- React Native Paper: added to provide Material Design components for the temperature screen.
- React Native Safe Area Context: added to handle safe areas on devices with notches or rounded corners.

They were installed with the following commands:

```bash
npm install react-native-paper
npm install react-native-safe-area-context
```

## Styling in React Native Paper

React Native Paper components can be styled using the `style` prop, just like other React Native components. In this project, styles were added through a `StyleSheet` definition to keep the layout organized and easier to maintain.

For example, components such as `Text`, `TextInput`, and `Button` can receive visual properties like `backgroundColor`, `color`, `padding`, `margin`, and `borderRadius` through the style prop or through a shared style object.

This approach was used to define the title, the input fields, and the button appearance in the temperature screen.

## Test Driven Development (TDD)

TDD is a development approach where tests are written first, then the implementation is added to make those tests pass. This helps define the expected behavior clearly before changing the code.

For this project, any new feature or change should follow TDD: first add or update the relevant test case, run the tests to confirm the failure, then implement the smallest change needed to make the test pass.

## MVC Pattern in this application

MVC stands for Model-View-Controller. It is a software design pattern that separates an application into three main parts:

- Model: Contains the business logic and the data structures. In this app:
  - MatchManager: implements the game rules and validation of the winner
  - RandomManager: generates the computer move randomly
  - Value Objects such as PlayerChoiceVo, ScoreVo, and related entities: encapsulate the data used in the game
  - The logic in `models/` and `models/managers/` is responsible for the game rules and state updates

- View: Is the part that the user sees and interacts with. In this project:
  - `screens/`: render the user interface, scores, buttons, and game result
  - `App` and screen components display the game state and allow interaction with the player

- Controller: Manages the flow between the view and the model. In this example:
  - `hooks/useMatch.js`: receives the player's input, calls the game logic, and updates the screen state
  - This hook acts as the central controller by coordinating the movement chosen by the user, the computer decision, and the score update

This structure helps keep the code organized, easier to understand, and simpler to maintain.

### UML Sequence Diagram of the Application Flow

```mermaid
sequenceDiagram
    actor User
    participant Screen
    participant Hook as useMatch
    participant MatchManager
    participant RandomManager
    participant ValueObjects

    User->>Screen: Selects rock, paper, or scissors
    Screen->>Hook: startMatch(playerChoice)
    Hook->>RandomManager: returnComputerChoice()
    RandomManager-->>Hook: computerChoice
    Hook->>ValueObjects: Create PlayerChoiceVo for user and computer
    Hook->>MatchManager: checkWinner(player, computer)
    MatchManager-->>Hook: matchWinner
    Hook->>MatchManager: updateScore(matchWinner, score)
    MatchManager-->>Hook: newScore
    Hook-->>Screen: Update score, playerChoice, computerChoice, matchWinner
    Screen-->>User: Show result and current score
```

## Run the tests

To execute the test suite, run:

```bash
npm test
```

Jest was installed as a development dependency to support the test suite for this project.

## Environment used

The project was created with the following tool versions:

- Node.js: v24.19.0
- npm: 11.17.0
- Expo SDK: ~54.0.35
- React Native: 0.81.5

Expo SDK 54 was used because it is the version currently configured in the project dependencies and is compatible with the modern Expo/React Native stack used by this app.

## Run the application

### Install dependencies

```bash
npm install
```

### Start the Expo development server

```bash
npm start
```

This will open the Expo developer tools in your browser and provide a QR code for testing on a device.

### Run on Android Studio emulator

1. Open Android Studio.
2. Start an Android emulator.
3. In the terminal, run:

```bash
npm run android
```

Expo will connect to the running emulator and launch the app.

### Run on Xcode simulator

1. Open Xcode.
2. Start an iOS simulator.
3. In the terminal, run:

```bash
npm run ios
```

Expo will build and launch the app on the iOS simulator.

### Run with Expo Go

1. Install Expo Go on your phone from the App Store or Google Play.
2. Make sure your phone and computer are on the same network.
3. Run:

```bash
npm start
```

4. Scan the QR code shown in the terminal or browser with Expo Go.

## Notes

If you want to open the app in a browser as well, you can run:

```bash
npm run web
```
