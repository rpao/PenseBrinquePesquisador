This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Initial Setup

#### 1. Pre-requisites

1. GIT
2. Node JS (Version ^20.)
   > Note: Mark "Automatically install the necessary tools" as show in the image below.
   >
   > ![Node Js Install Setup](.\wiki\images\node_js_setup.png)

#### 2. Install dependencies

Run 'npm install' in the source folder.

#### 3. Running project

1. Run the json-server:
   `npx json-server db.json` (https://www.npmjs.com/package/json-server)

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

2. Runt the frontend project choosen one of the commands below:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3001) with your browser to see the result.

**Good to Know**

1. Check the correct port in the console log.
2. Json-Server should be runned first, because it uses the port 3000.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Dependencies

### 1. Dependencies

| Library                                                       | Version                                    | Description                                                                                                                                                                                            |
| ------------------------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Axios                                                         | "^1.6.5"                                   | Promise-based HTTP Client for node.js and the browser.                                                                                                                                                 |
| Bootstrap &#124; react-bootstrap &#124; react-bootstrap-icons | "^5.3.2" &#124; "^2.10.0" &#124; "^1.10.3" | Front-end framework, rebuilt for React. (https://react-bootstrap.github.io/)                                                                                                                           |
| Json-server                                                   | "^1.0.0-alpha.22"                          | Runs a server based on db.JSON file. (https://www.npmjs.com/package/json-server)                                                                                                                       |
| Jsonwebtoken                                                  | "^8.5.1"                                   | JSON Web Token handler (https://github.com/auth0/node-jsonwebtoken)                                                                                                                                    |
| Next                                                          | "14.1.0"                                   | Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds. (https://nextjs.org/) |
| React                                                         | "^18"                                      | JavaScript Library to create UI (https://pt-br.legacy.reactjs.org/)                                                                                                                                    |

### 2. Dev Dependencies

| Library  | Version   | Description                                  |
| -------- | --------- | -------------------------------------------- |
| Prettier | "^3.2.4"  | Code formatter.                              |
| ESLint   | "^8.56.0" | Analyzes your code to quickly find problems. |

### Node Informations

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Links:
https://github.com/rpao/PenseBrinquePesquisador/tree/main/app-pense-brinque-pesquisador/src/app
https://github.com/TeleRaptor65/Pense-e-Brinque/tree/main
https://nextjs.org/docs/app/building-your-application/styling/css-modules
https://react-bootstrap.github.io/docs/components/cards
https://www.w3schools.com/js/js_graphics_chartjs.asp
https://react-chartjs-2.js.org/components/bar/
