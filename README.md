# backend referal feature to be inplemented on vcard

This is currently a starter template, will extend it over time


# How to install

## Using Git (recommended)
1. Clone the project from github.

```
git clone https://github.com/Emengkeng/referal-backend.git
```
git remote add origin https://github.com/Emengkeng/referal-backend.git
## Using manual download ZIP

1. Download repository
2. Uncompress to your desired directory

## Install npm dependencies

```
npm install
```

## Setting up environments
1. You will find a file named `.env.example` on root directory of project.
2. Create a new file by copying and pasting the file and then renaming it to just `.env`

```
cp .env.example .env
```
3. The file `.env` is already ignored, so you never commit your credentials.
4. Change the values of the file to your environment. Helpful comments added to `.env.example` file to understand the constants.

## Running and resetting migrations

1. To run migrations
```
npm run migrate
```
2. To reset migrations
```
npm run migrate:reset
```

# How to run

## Running API server locally
```
npm run dev
```
You will know server is running by checking the output of the command `npm start`
