# FlexBoxGenerator

A simple, interactive tool for generating CSS Flexbox layouts built with Angular and RxJS. This project demonstrates reactive programming patterns and SOLID principles in a practical application.

## About

**FlexBoxGenerator** is a demonstration project. It was created as a learning exercise for reactive programming patterns in Angular, Typescript and RxJs.

The project showcases:

- Reactive data flow using RxJS and the Observable pattern
- Clean architecture following SOLID principles
- Component organization in Angular
- Theme switching capabilities

While intentionally limited in scope, this project serves as a learning resource for developers interested in reactive programming patterns and clear code organization.

## Features

- Interactive controls for common Flexbox properties
- Real-time preview of Flexbox layouts
- Theme switching between light, dark, and cupcake themes
- Simple, focused UI for learning Flexbox concepts
- \+ more.

## Installation

```bash
git clone https://github.com/seangravener/FlexBoxGenerator.git

cd FlexBoxGenerator
npm install

# Run the dev server:
ng serve
```

Navigate to [http://localhost:4200/](http://localhost:4200/). The application will automatically reload if you change any of the source files.

To build the project:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

## Code Structure

This project demonstrates:

- **Reactive Programming**: Uses RxJS Observables for state management
- **Service Pattern**: Implements services like `ThemeService` for cross-component functionality
- **Component Architecture**: Follows Angular best practices for component organization
- **Type Safety**: Leverages TypeScript for better code quality

## Learning Resources

This project can be used as a reference for:

- Implementing theme switching in Angular applications
- Working with RxJS `BehaviorSubject` and `Observable`
- Organizing Angular services and components

## Contributing

Contributions are welcome! This is a learning project, so suggestions for improving code organization, reactive patterns, or additional educational features are especially appreciated.

## Testing

Run tests with:

```bash
ng test
```

## Built With

- **Angular** – Web framework
- **RxJS** – Reactive Extensions library
- **TypeScript** – Typed JavaScript
- **CSS.gg** – Open source CSS, SVG, and Figma UI Icons

## License

This project is licensed under the **MIT License** – see the `LICENSE` file for details.
