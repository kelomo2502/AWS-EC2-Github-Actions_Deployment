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
  test:
    name: Run Tests
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
        # The checkout action checks out your repository under $GITHUB_WORKSPACE, so your workflow can access it.

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16' # Use the Node.js version your project requires

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test

  build:
    name: Create Tag
    runs-on: ubuntu-latest
    needs: test # Ensures the 'test' job runs first
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
        # The checkout action checks out your repository under $GITHUB_WORKSPACE, so your workflow can access it.

      - name: Bump version and push tag
        uses: anothrNick/github-tag-action@1.26.0
        env:
          GITHUB_TOKEN: ${{ secrets.VERSION_TOKEN }}
          DEFAULT_BUMP: patch


```

## Creating and managing releases

### Automating releases using github actions

- Setup github actions to create new realease whenever a new tag is pushed to the repository

```yaml
on:
  push:
    tags:
      - '*'

jobs:
  build:
    name: Create Release
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
        # Checks out the code in the tag that triggered the workflow.

      - name: Create Release
        id: create_release
        uses: actions/create-release@v1
        env:
          GITHUB_TOKEN: ${{ secrets.VERSION_TOKEN }}
        with:
          tag_name: ${{ github.ref }}
          release_name: Release ${{ github.ref }}
          # This step creates a new release in GitHub using the tag name.

```

### Deploying to cloud platforms

```yaml
name: Deploy to AWS
on:
  push:
    branches:
      - main
  # This workflow triggers on a push to the 'main' branch.

jobs:
  deploy:
    runs-on: ubuntu-latest
    # Specifies the runner environment.

    steps:
    - name: Checkout code
      uses: actions/checkout@v2
      # Checks out your repository under $GITHUB_WORKSPACE.

    - name: Set up AWS credentials
      uses: aws-actions/configure-aws-credentials@v1
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: us-east-1
      # Configures AWS credentials from GitHub secrets.

    - name: Deploy to AWS
      run: |
        # Add your deployment script here.
        # For example, using AWS CLI commands to deploy.

```
