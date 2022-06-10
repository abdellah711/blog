# Blog
This is a sample blog web application, you can check a demo [here](https://blog-next-ts.herokuapp.com/)
## Technologies used
- NextJS
- TypeScript
- Styled components
- Graphql
- PWA

## Quick start
1- Clone repo
```bash
git clone https://github.com/abdellah711/blog.git
```
2- Update env variables

You need to change these environment variables in `.env` file:
- `NEXT_APP_GRAPHQL_URL`: your [graphcms](https://graphcms.com/) api endpoint
- `NEXT_APP_GRAPHQL_TOKEN`: your [graphcms](https://graphcms.com/) token

you can build your schema based on the types in `types` folder

3- Run the development server:

```bash
cd blog
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


