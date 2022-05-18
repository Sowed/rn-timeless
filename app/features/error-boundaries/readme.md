# Error Boundaries feature

This first adds in utils and helpers to log the errors remotely to a third party
service or inhouse logging server. The components use the `componentDidCatch`
and `getDerivedStateFromError` class life cycle methods to capture errors within
the child UI component.

- `Note`: This might be the only places where usage of `class` components is
  acceptable in the entire application. Just kidding you can do whatever you
  want with your classes 😀. But seriously use functional components mostly.

## TODO

- [ ] Add customizable fallback screens for error in simple sections like cards
      or modals.
- [ ] Add Storybook stories for this these features
- [ ] Add exhaustive type definitions.
- [ ] Add Unit tests
