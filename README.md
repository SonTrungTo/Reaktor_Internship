## [Reaktor Internship Problem](https://reaktor-internship.herokuapp.com/products/gloves)

I have solved everything, including writing structured codes, designing an app interface that is minimalist yet
easy to find information and writing some Jest tests, even if they are a bit simplistic. The point is to
testing critical details of the components.

Some components can be quite a little bit repetitive; however, I think it is better to write
a simple solution than relying on an elegant solution.

^
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

## Futher discussions

Here are some of my thoughts on how we can improve the app.

### Long loading time.