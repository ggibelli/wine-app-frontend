# Wine trading app frontend

This is the front-end of the wine trading app I developed for the Italian market, the app is still work in progress. I followed the design guidelines that were given to me from a designer that used Abode XD.
The app connects wineries in need to sell or buy bulk wine, choosing between more than 4000 Italian wines.
Every wine has a different grape composition by Italian law, the user can choose the right vineyards after selecting the wine.
The user can post an ad, and if there is already a wine listed that matches the parameters, the user can send a message to the seller/buyer.
The ads, messages, negotiations and reviews can be filtered, sorted and there is pagination on the server to improve performance.
The app sends a notification and a mail when a new wine is posted that matches the user's active ad, users can chat in real-time, leave reviews and manage active negotiations and posted ads.

## Technology used

This app is written using ReactJS, ApolloClient for the state management, JWT token for the user authorization, MaterialUI as a CSS framework, graphQL codegen to generate the types for the graphql operations and Formik for the forms.
There is an infinite scroll for the ads result, ads posted, ads saved, messages, reviews and negotiations, I used the intersection observer API to create a custom hook, made a component with this hook that is composed with the list of results component. I had to modify ApolloClient cache policies to make the infinite scroll work with sorting and filtering the results.
For the tests I used jest and react-testing-library.
The app is written 100% in TypeScript.

## Features

- Users can signup (a mail is sent to verify email address)
- Users can post/update Ads
- Users can select the legal vineyards composition of the wine after selecting it
- Users can filter and sort the ads
- Users can filter and sort the negotiations
- Users can filter and sort the reviews
- Users can save Ad
- Users can copy Ad link with a button
- Users can open/close Negotiations
- Users can review other Users
- Users can send real time messages
- Users can manage their own ads and negotiations
- Admin can add or remove wines

## What is missing

At the moment some components are not fully graphically finished, the 404 page and error pages are missing, the notification texts are work in progress, the profile page is missing and various texts need to be updated.
The e2e tests are missing and so is the CI/CD pipeline.
