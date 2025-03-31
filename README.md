This is a [Next.js] project that uses [finlight API](https://finlight.io/docs/api) to fetch finance news.

## Getting Started

First, Install the dependencies:

```bash
yarn install
```

Add your API key in `.env.local` file.

```bash
NEXT_PUBLIC_FINLIGHT_API=your-api-key
NEXT_PUBLIC_API_ENDPOINT=https://finlight.io/api/v1/
```

Then run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build project

Run below command to build for production

```bash
yarn build
```

#### Then

```bash
yarn start
```

To run the build version.
