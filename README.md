# Cloud-Native Portfolio CI/CD Pipeline

## Overview
Designed & built a production ready CI/CD pipeline using AWS Amplify + GitHub Actions with staging and production environments.

---

## Architecture
[Architectural Diagram](./architecture/amplify_hosting.drawio.png)

**Key Components**
- **Next.js** - Frontend app
- **GitHub** - Remote repository
- **AWS Amplify Hosting** - Managed hosting & branch-based deployments
- **AWS CDK (TypeScript)** - Infrastructure as Code
- **GitHub Actions** - Continuous Integration checks
- **Branching Strategy** - `feature/*` -> `staging` -> `main`

---

## Environments
- **Staging** -> Used to conduct integration testing and QA before deploying to production.
- **Production** -> Public-facing environment for end users.

---

## CI/CD Workflow

### Continuous Integration (CI)
- Triggered on Pull Requests to `staging` or `main`
- Runs:
  - `npm ci` (dependency install)
  - `npm run lint`
  - `npm run build`
- Merge is blocked if lint/build fails
- Merge is allowed when checks pass

### Continuous Deployment (CD)
- **Pull request merged into `staging`** -> Amplify builds and deploys to the staging environment
- **Pull request merged into `main`** -> Amplify builds and deploys to the porduction environment

---

## Rollback & Recovery
Supports two recovery paths:
1. **Platform rollback** - Use Amplify's build history to redeploy a previous, working build.
2. **Git rollback** - Revery the bad PR in GitHub -> triggers redeploy of last working code base.

See [OPERATIONS.md](./OPERATIONS.md) for detailed steps.

