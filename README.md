# Getting Started:

0. Create your Google Cloud Platform Account

0. Open the cloud console from the Google Cloud Functions page.

0. Open the Code Editor from the top right corner of your cloud shell.

0. `$ mkdir myWebsiteBackend`

0. `$ cd myWebsiteBackend`

0. `$ git clone https://github.com/syntacticsolutions/GCP-serverless-starter.git`

0. `$ npm i`

0. `$ gcloud beta functions deploy myWebsiteBackend --trigger-http`

0. The console output will give you link to test you API. You can test it in postman (or in the browser) by navigating to 

`https://your.console.outputuri/api/portfolio`
