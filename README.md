# TASK-101 Cards and Transactions Overview
------------------------------- MY NOTES -------------------------------
## THE STACK  - requirements
- yarn + React + Vite + Typescript
- Eslint + prettier, for clean code
- styled components, for flexibility, straight forward implementation and consistent design
  src/
  ├── styles/
  │   ├── theme.ts              # Theme variables and tokens
  │   ├── globalStyles.ts       # Global styles using createGlobalStyle
  │   ├── animations.ts         # ?Reusable animations
  │   ├── mixins.ts             # Style mixins and helpers
  │   └── components/           # Reusable styled components
  │       ├── buttons.ts
  │       ├── containers.ts
  │       ├── forms.ts
  │       └── ...
  ├── providers/
  │   └── ThemeProvider.tsx     # Theme provider setup
  └── ...

- tsconfigPaths for absolute path (changes to vite.config and tsconfig.app.json)
- semantic html
- document/comment


## TO-DOs/MVP roadmap
- [ ] install all necessary tools
- [ ] create small design system (colors, and corner roundness)
- [ ] error, idle, loading states?
- [ ] add example tests?


## My thoughts
I like the clean design and I think it works with the right color scheme, but I would maybe suggest a few changes to the card selection and the filter:
I would talk with the designers about making it more clear which card is currently selected, by changing not only the color/opacity but also the size,
so I would keep the selected card the "normal" size and amke the other(s) a bit smaller, for what i find would be a more intuitive setup.
And I would also suggest, for a later version to make the filter a range rather than an exact amount, or maybe even allow the user to choose a preset range (eg. +- 10, 20, 100 etc.)


## Further into the future
For post mvp version I would
- add translation/copy files, with i18n or similar
- add testing
- add error boundary
- add 404 page
- add light/dark mode
- dockerize the app

## How to run 




------------------------------- THE INSTRUCTIONS -------------------------------

Hellow there!😁 first of all, thanks for taking the time and your interest in joining Code Factory!
As part of joining our engineering, we share this simple challenge with you.

Happy coding!

## Task

The purpose of this task is to build a card and transactions overview page. The user should be able to select one of the cards, see it's transactions and be able to filter the transactions based on the amount.

You will find an image in the folder /docs, it gives a visual overview of how the page is intended to look like.

![Card and transactions overview](docs/cardTransactionDesigns.png)

## Notes

Please install dependencies using `yarn`.

Typescript is a must.

We provided a fake ApiClient for you that fetches the data. If you want to improve this client and adjust it to your needs feel free to do so.

You can always extend with more data if you feel like it.

If you feel like the design does not make sense, adjust it and note how you would communicate your suggestions with a designer.

## AC

- User can select one of the cards
- The transactions of the selected card will be displayed.
- The transactions have a same background color than the card.
- There should be a filter field between the cards and the transactions.
- The user can filter transactions by inputting amount to the filter fields. Transactions with the amount in the fields or greater should be left visible.
- If the user changes a selected card and there is content in the filter fields, the content should be resetted.

## Deliverables

- Share with us a zip file wtih your source code excluding the node_modules folder
