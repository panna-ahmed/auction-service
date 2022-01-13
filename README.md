# Base Serverless Framework Template

## What's included

- Folder structure used consistently across our projects.
- [serverless-pseudo-parameters plugin](https://www.npmjs.com/package/serverless-pseudo-parameters): Allows you to take advantage of CloudFormation Pseudo Parameters.
- [serverless-bundle plugin](https://www.npmjs.com/package/serverless-pseudo-parameters): Bundler based on the serverless-webpack plugin - requires zero configuration and fully compatible with ES6/ES7 features.

Some useful commands:

To get auth token -
curl --location --request POST 'https://dev-0uuyag-m.us.auth0.com/oauth/token' --header 'Content-type: application/x-www-form-urlencoded' --data-urlencode 'client_id=hG6pGUgryHHuU3atjydhNQolLEMoo3v4' --data-urlencode 'username=ignytek@gmail.com' --data-urlencode 'password=admin123@' --data-urlencode 'grant_type=password' --data-urlencode 'scope=openid'

deploy:
serverless deploy -v --stage dev

deploy only the lambda:
erverless deploy -f uploadAuctionPicture

monitor logs:
serverless logs -f uploadAuctionPicture -t
