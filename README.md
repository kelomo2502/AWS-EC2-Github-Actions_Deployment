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

## Automated Releases and Versioning

- **Semantic Versioning(SemVer):** This uses a 3 part versioning version numbers. Such as Major, Minor, Patch
- **Automated Versoning with Github Actions:** Implement automated versioning using github actions to increment version numbers automatically based on coe changes

```yaml
name: Bump version and tag
on:
  push:
    branches:
      - main

jobs:
  build:
    name: Create Tag
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
        # The checkout action checks out your repository under $GITHUB_WORKSPACE, so your workflow can access it.

      - name: Bump version and push tag
        uses: anothrNick/github-tag-action@1.26.0
        env:
          GITHUB_TOKEN: ${{ secrets.VERSION_TOKEN }}
          DEFAULT_BUMP: patch
        # This action automatically increments the patch version and tags the commit.
        # 'DEFAULT_BUMP' specifies the type of version bump (major, minor, patch).

```

## Creating and managing releases

