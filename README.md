# AWS-EC2-Github-Actions_Deployment

## Objectives

- Define and understand the stages of a deployment pipeline
- Learn about different deployment strategies

## Defining deployment startegies

- **Development:** Writing and testing code in local environment
- **Integration:** Merging code changes into a shared branch
- **Testing:** Running automated test to ensure code quality
- **Staging:** Deploying code to a production-like environment for final testing
- **Production:** Releasing final version of code to end-users

## Understanding deployment strategies

- **Blue-Green-Deployment:** Running two production environments, only one of which serves end-user at any time
- **Canary Release:** Rolling out changes to a small subset of users before full deployment
- **Rolling Deployment:** Gradually replacing the previous instancesof an app with a new one
