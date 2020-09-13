## Firebase Setup
- `npm install -g firebase-tools`
- `firebase login`
- `firebase init` => Hosting: Configure and deploy firebase Hosting sites
- `unique ID => name of clone => build => yes`
- `npm run build` (run everytime new change)
- `firebase deploy`
- possible issues `firebase use <project_id>`
- Only hosting => `firebase deploy --only hosting`
- remove rewrites if issues happen in `firebase.json`

## Stripe Setup
- `npm install @stripe/stripe-js`
- `npm install @stripe/react-stripe-js`
- Go to Stripe Page and retrieve the API key, `publishable key`.
- In main component, `App.js`, import `{loadStripe} from '@stripe/stripe-js` and `{Elements} from '@stripe/react-stripe-js'`
- `const promise = loadStripe(APIkey)`
- Wrap the payment component with `Elements with property of stripe={promise}`
- In the component, import, `import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';` 
```js
const stripe = useStripe();
const elements = useElements();    
```

## Cloud function setup
- `firebase init`
- Function: Configure and deploy Cloud Functions
- Javascript
- ESLINT => y
- Install dependencies => y
- Cd `functions` and install `npm install express`
- `npm install cors`
- `npm install stripe`
- Get the secret key from stripe
- `const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);`

- for deployment => `firebase deploy --only functions`
- might fail if not on the blaze plan

## emulate the backend app without deploying
- `firebase emulators:start`

## Cloud firestore setup
- Go to Cloud Firestore on firebase.
- Create database => test mode
- 