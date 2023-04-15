# Digital femsa test

- Figma >>> https://www.figma.com/file/AIMJp1Y6Gfv9PmQ8lYmUy8/Code-challenge?node-id=0-1&t=u2qdFf8KpfZ0VwrX-0
- Prototype figma >>> https://www.figma.com/proto/AIMJp1Y6Gfv9PmQ8lYmUy8/Code-challenge?node-id=6-649&scaling=scale-down&page-id=0%3A1&starting-point-node-id=6%3A649
- Mock API >>> https://6222994f666291106a29f999.mockapi.io/api/v1/products
## Stack

- Frontend
  - [React Native](https://reactnative.dev/)
  - [Jest](https://jestjs.io/)

## Highlights

- Clean architecture
- Clean code
- Atomic design
- Singleton pattern
- Custom hooks
- Unit testing
- Custom labels in repository
- Follow guidelines

## Requeriments
Mandatory

- Node >= 14.7.3

## Local configuration
If you wish run the project in ios:

1. npm install
2. npm run ios
3. see the magic

If you wish run the project in android:

1. npm install
2. npm run android
3. see the magic

If you wish run the test, then:

1. npm run test

## Folder structure
Explanation of hierarchies in files and layers.

    digital-femsa-test/
      ├── android/                         # android folder
      ├── ios/                             # ios folder
      └── src/                             # Application folder
          ├── components/                  # Components folder (Atomic design strategy)
          ├── constants/                   # General constants folder
          ├── hooks/                       # Custom hooks folder
          ├── navigators/                  # Stack screens folder
          ├── pages/                       # Screens folder
          ├── utils/                       # Utilities folder
          └── providers/                   # API provider folder

## Branches

- `main` >>> All features
- `feature/initial-configuration-and-markup-page` >>> initial configurations and layout first page.
- `feature/layout-view-and-integration` >>> layout seconde page and layouts integration.
- `feature/unit-test-documentation` >>> unit testing and documentation

## Other details

- N/A

# License

MIT