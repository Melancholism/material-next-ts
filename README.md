# Material UI - Next.js example in TypeScript

## How to use

## The idea behind the example

The project uses [Next.js](https://github.com/vercel/next.js), which is a framework for server-rendered React apps.
It includes `@mui/material` and its peer dependencies, including [Emotion](https://emotion.sh/docs/introduction), the default style engine in Material UI v5. If you prefer, you can [use styled-components instead](https://mui.com/material-ui/guides/interoperability/#styled-components).

## The link component

The [example folder](https://github.com/mui/material-ui/tree/HEAD/examples/material-next-ts) provides an adapter for the use of [Next.js's Link component](https://nextjs.org/docs/api-reference/next/link) with MUI.
More information [in the documentation](https://mui.com/material-ui/guides/routing/#next-js).

## Default settings

- Set tab width to 2 in vs code settings

## VS Code Extensions

Install these extensions for better coding experience:

- [css module](https://marketplace.visualstudio.com/items?itemName=clinyong.vscode-css-modules)
- [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [nextjs snippets](https://marketplace.visualstudio.com/items?itemName=PulkitGangwar.nextjs-snippets)
- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)
- [Typescript React code snippets](https://marketplace.visualstudio.com/items?itemName=infeng.vscode-react-typescript)

## Walletconnect projectID

1. Get projectID at <https://cloud.walletconnect.com>
2. Create a `.env.local` file at the _**root**_ of the project.
3. Put your projectID there as:

```env
NEXT_PUBLIC_PROJECT_ID=YOUR_PROJECT_ID
```

## Run template

- Run below command in terminal:

```terminal
   npm i && npm run dev
```

- Open [localhost](http://localhost:3000/) in your browser
