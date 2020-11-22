# neronUI
 A user interface for Neron Technologies 3d printers

## Project setup
```
# Configure environment.
$ cd neronUI

# Install dependencies.
$ npm install

# Copy local dev environment file, and edit it to suite your requirements.
$ cp .env.development.local.example .env.development.local
$ vim .env.development.local

# Compile and serve for development.
$ npm start

# Compile and minify for prod
$ npm run build

# Run unit tests
$ npm run test:unit

# Run E2E tests
$ npm run test:e2e

# Lint and fix files
$ npm run link
```