# DevWellnesHub

DevWellnessHub is a dedicated mental health app designed to support software engineers in cultivating positive habits, maintaining focus, and tracking their emotional well-being. Recognizing the unique challenges faced by developers, the app combines practical tools with a user-friendly interface to promote a balanced and healthy work-life routine.

Key Features include Good Habits Tracker, Integrated FocusTimer, Integrated Breath Timer and a Mood Tracker.

We're hoping that users will see the following benefits: Increased productivity, positive reinforcement of good habits, and emotional awareness. We want it to be a companion on the journey to a healthier and more balanced work-life for software engineers.

## Features

- Main Dashboard: visualize the app at glance and their live state.
- Focus Timer: set a focus timer to get in the flow state. Review your timers done daily, weekly and from day zero.
- Mood Tracker: track your mood day by day to have an idea on how impacts your work/life balance.
- Habit Tracker: Track your habits day by day. Big results come with consistency. Review your habits achieved daily, weekly and from day zero.
- Breath Timer: Take a break and follow the timer to breath deeply and release some stress. Review your progress daily, weekly or from day zero.

## App Structure && State Management

The app consist of the following sections:

### Start Page & Settings Page

- Users encounter the `Start Page` when first visiting the App. Going through the `Start Page`, users can input their preferences for different settings for the App. They can later update these settings by going to the `Settings Page`. Users can see the `Start Page` again if they had cleared their settings data by doing either a `Factory Reset` or deleting it from `LocalStorage`.
- You can see the state management for the app settings `./src/reducers/settings.js`

### Dashboard

- The `Dashboard` is the main page of the DevWellnessHub app where you can see a summary of your day so far by displaying the state of all of the app features.
- It does not have its own state but rather users the state of all the other features of the app.

### Focus Timer

- The `Focus Timer` consists of two different views:
  - The `minimized view` that is shown in the `Dashboard`, which shows the current state of the timer as well as the number of timers they have done for the day.
  - The `detailed view`, where you can control the timer: starting, stopping, or resetting a timer. In addition, the user can see details about how many focus timers they've done for the day, as well as their historical usage.
- The main logic for the `Focus Timer` which are shared between the two views is in `./src/components/FocusTimer/FocusTimerRenderless.jsx`. This component interacts with the FocusTimer state and allows the two views to show the same data.
- You can see the state management for the app settings `./src/reducers/focusTimer.js`

### Habit Tracker

- The `Habit Tracker` consists of two different views:
  - The `minimized view` that is shown in the `Dashboard`, which shows a summary of the number of habits they've done for the day
  - The `detailed view`, where you can update the habits by checking or unchecking it. In addition, the user can see details about how many habits they've done historically.
- You can see the state management for the app settings `./src/reducers/habits.js`

### Mood Tracker

- The `Mood Tracker` consists of two different views:
  - The `minimized view` that is shown in the `Dashboard`, which shows a graphical summary of their general mood for the day
  - The `detailed view`, where you can adjust your mood level, energy level, and overwhelmed level. The combination of these will generate an average mood level. In addition, the user can see historical details of their mood.
- You can see the state management for the app settings `./src/reducers/mood.js`

### Breathe Timer

- The `Breathe Timer` consists of two different views:
  - The `minimized view` that is shown in the `Dashboard`, which shows the current state of the timer as well as the number of timers they have done for the day.
  - The `detailed view`, where you can control the timer: starting or resetting a timer. In addition, the user can see details about how many breathe timers they've done for the day, as well as their historical usage.
- The main logic for the `Breathe Timer` which are shared between the two views is in `./src/components/BreatheTimer/BreatheTimerRenderless.jsx`. This component interacts with the FocusTimer state and allows the two views to show the same data.
- You can see the state management for the app settings `./src/reducers/breatheTimer.js`

### Historical Data

- The app saves historical data in `LocalStorage`. You can see historical data when you go to each of the detailed view of the different tools of the App. The historical data (if they exist) are automatically loaded from `LocalStorage` to the state when the App is started.

### Loading and Saving Data

- The app saves the user settings and data in `LocalStorage`. These are loaded to the state when the app is started. The app state is automatically saved to `LocalStorage` when the user use ome of the tools.
- Since we have the need to load and save the entire app settings and data to and from `LocalStorage`, we have two actions performed on the combined reducers of the app `SAVE_DATA` and `LOAD_DATA` which you can see here: `./src/reducers/combined.js`

## Demo

try it here: https://DevWellnessHub.netlify.app/

## Deployment

To deploy this project to collaborate, fork it and then locally run:

```bash
  npm install && run dev
```

## FAQ

#### How does it work if one wants to use it?

DevWellenessHub works on all devices with a browser. When on mobile, use it vertically and when on tablet or desktop, is highly recommended to be used horizontally.

#### Will it save my progress?

The app saves automatically in local storage your settings and your data of each feature you use, up till 5MB!

## Authors

- [@themisterkai](https://github.com/themisterkai)
- [@ofabio-cassisa](https://github.com/fabio-cassisa)
