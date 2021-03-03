## [Reaktor Internship Problem](https://reaktor-internship.herokuapp.com)

## Important
Please note that it might take a little while at first time for data to be loading.
Try to refresh at the root page (otherwise, the message 'not found' is shown) since I am
using Node guide the request to proxy to the API.

After some refresh and a couple seconds waiting, the app will work beautifully.

## Result

I have solved everything, including writing structured codes, designing an app interface that is minimalist yet
easy to find information and writing some Jest tests, even if they are a bit simplistic. The point is to
testing critical details of the components.

Some components can be quite a little bit repetitive; however, I think it is better to write
a simple solution than relying on an elegant solution.

~~The last remaning step is deployment, which I am working on it a bit.~~ The app is now deployed.

Due to the limitations of the API itself, there is not much I can do to improve
the site speed, given its massive amount of datasets.

Here is the structure of the codes.

```
📦Reaktor_Internship
 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂AppBar
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂AvailabilityIcon
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂BeaniesList
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂FacemasksList
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂GlovesList
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂Icons
 ┃ ┃ ┃ ┣ 📜Icons.test.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂NavigationMenu
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂ProductItem
 ┃ ┃ ┃ ┣ 📜ProductItem.test.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📜LinkButton.tsx
 ┃ ┃ ┣ 📜Text.tsx
 ┃ ┃ ┗ 📜theme.ts
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📜useAvailability.ts
 ┃ ┃ ┗ 📜useProducts.ts
 ┃ ┣ 📂services
 ┃ ┃ ┣ 📜availabilityServices.ts
 ┃ ┃ ┗ 📜productsServices.ts
 ┃ ┣ 📜App.tsx
 ┃ ┣ 📜MainRouter.tsx
 ┃ ┣ 📜index.css
 ┃ ┣ 📜index.tsx
 ┃ ┣ 📜react-app-env.d.ts
 ┃ ┣ 📜reportWebVitals.ts
 ┃ ┣ 📜setupTests.ts
 ┃ ┣ 📜types.ts
 ┃ ┗ 📜utils.ts
 ┣ 📜.eslintignore
 ┣ 📜.eslintrc
 ┣ 📜.gitignore
 ┣ 📜Procfile
 ┣ 📜README.md
 ┣ 📜package.json
 ┗ 📜tsconfig.json
```

## Further discussions

### How do I improve the client performance?
Due to the massive ammount of data: 3 categories: facemasks, gloves and beanies
with each of which containing about 2000+ entries,
and for each of which, there is the name of the manufacturer whose each API request
responses with over 6000+ products ID and DATAPAYLOAD. Hence, the server would make
at least a total of `6000 x 2000 x 3` requests, which would slow any device down
significantly.

A natural solution would be to cache requests. Since there is only a fixed and small
amount of number of manufacturers with 6 of them in total, we can cache the response
from the already request data for the manufacturer. How do we achieve that?

Answer: I do not know! I have already tried to use `Cache-Control: max-age=300, public, immmutable`
to no avail! I have also tried to use the package `axios-cache-adapter` also to no avail.

So without that normal approach and the limited time I have,
I would have to find a "cheating" approach: To use
`sessionStorage` and `localStorage`. On the first run, axios tries
to request and scan through all the name of the manufacturer and
store them in `Storage`. Then on the second/third requests,
the browser stores all of data inside storage, hence eliminating
totally then need to do `6000` requests for each of its manufacturer products, and
also to prevent repeated requests, siginificantly improving the speed of the client.

### What can be done to further improve data loading?
Pagination, of course. The pagination would be extremely effective
on GraphQL where we can use cursor-based pagination instead of 
the usual pagination by the number of page. I learnt about
pagination thanks to Apollo Client documentation and FullStack Open part 10.

Pagination will surely make fetching products in each categories faster.

## Installation Instructions
To run this app in development mode,

    1. git clone https://github.com/SonTrungTo/Reaktor_Internship
    2. yarn start

To run this app in production mode,

    1. heroku create
    2. git clone https://github.com/SonTrungTo/Reaktor_Internship
    3. git clone https://github.com/SonTrungTo/Reaktor_Internship_2021_Deployment
    4. yarn production:full (fix the name in package.json as necessary)

Thank you for reading.