#  Timeless

Invest in things you love. Buy shares in exclusive assets such as rare sneakers, watches & luxury cars and participate in the performance - from just `€50*`.

- [Website](https://web.timeless-internal.net/)
- [Play Store](https://play.google.com/store/apps/details?id=com.timeless.investments.app)
- [App Store](https://apps.apple.com/de/app/timeless-collectibles/id1525379976)

TODO: Add some more introductions about the PROJECT from a dev perspective. This section will explain the objectives or the motivation behind this project.

## Linting

- I have setup some very opitionated rules, to make life a bit easier I guess.  Feel free to override them where it makes sense to you.
- I try to follow  `linting` rules religiously, especially with `sonar` lint. Thy future self and other devs benefit from smaller diffs. Less conflicts on merges. Everyone wins.
- More than 5 components in a single file is also DX blasphemy. 🥺

## Todo

---

## Quick Start

The project's structure will look similar to this:

```md
timeless
├── app
│   ├── components
│   ├── features
│   ├── i18n
│   ├── utils
│   ├── navigators
│   ├── screens
│   ├── services
│   ├── theme
│   ├── app.tsx
├── storybook # (for component design & testing in isolation)
├── test # (Add e2e and unit tests (detox+react-native-testing-library))
├── readme.md
├── notes.md # (You are here.)
├── .env
└── package.json

```

---

**components**
This is where your React components will live. Each component will have a directory containing the `.tsx` file, along with a story file, and optionally `.presets`, and `.props` files for larger components. The app will come with some commonly used components like Button.

**i18n**
This is where your translations will live if you are using `react-native-i18n`.

**navigators**
This is where your `react-navigation` navigators will live.

**screens**
This is where your screen components will live. A screen is a React component which will take up the entire screen and be part of the navigation hierarchy. Each screen will have a directory containing the `.tsx` file, along with any assets or other helper files.

**services**
Any services that interface with the outside world will live here (think REST APIs, Push Notifications, etc.).

**theme**
Here lives the theme for your application, including spacing, colors, and typography.

**utils**
This is a great place to put miscellaneous helpers and utilities. Things like date helpers, formatters, etc. are often found here. However, it should only be used for things that are truely shared across your application. If a helper or utility is only used by a specific component or model, consider co-locating your helper with that component or model.

**app.tsx** This is the entry point to your app. This is where you will find the main App component which renders the rest of the application.

## Running e2e tests

Read [e2e setup instructions](./e2e/README.md).