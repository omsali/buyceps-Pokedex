# **Pokedex App**

This is a simple web application that allows users to view a list of all available Pokemons and their details.

## ****Features****

- Homepage: List all available Pokemon with pagination (20 Pokemon per page).
- Display each Pokemon's image, number, name, and types.
- Statically render the first three paginated pages at build time.
- Render the remaining pages in real-time.
- Pokemon detail page:
  - Display name, image, height, weight, classification, type, weakness, and resistance of the Pokemon.
  - Include a button to open a popup showing the Pokemon's evolutions.
  - Query evolution data only when the button is clicked, not beforehand.
- Statically render the detail pages for the first 20 Pokemon at build time.

## Technologies Used

- Next.js
- React
- GraphQL
- Apollo Client
- Vercel

## Installation

To run the application locally, follow these steps:

1. Clone the repository
2. Run **`npm install`** to install dependencies
3. Run **`npm run dev`** to start the development server
4. Open **`http://localhost:3000`** in your browser to view the application

## Deployment

The application is deployed on Vercel and can be accessed at [https://pokedex-omsali2810-gmailcom.vercel.app/](https://pokedex-omsali2810-gmailcom.vercel.app/)
