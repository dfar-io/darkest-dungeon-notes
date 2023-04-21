# darkest-dungeon-notes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

1. Create Github Codespace
2. Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`.
3. The application will automatically reload if you change any of the source files.

## Docker

The Angular application runs in an Express container. To run this locally:

```
docker build -t app .
docker run -p 8080:80 app
```

Access at `http://localhost:8080`

## Deployment

This is deployed to a GCP Cloud Run instance that is not managed by Terraform.

## Angular README

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


