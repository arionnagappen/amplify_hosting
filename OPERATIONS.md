# OPERATIONS.md
Operational runbook for managing this application and its CI/CD pipeline.  
This document assumes no dedicated DevOps engineer is on the team — all instructions are simple, fast, and repeatable.

---

## Environments

- **Staging**
  - Branch: `staging`
  - Purpose: Integration testing, QA, automated smoke tests
  - Deployment trigger: Pull request merged into `staging`

- **Production**
  - Branch: `main`
  - Purpose: End-user production site
  - Deployment trigger: Pull request merged into `main`

---

## CI/CD Pipeline

- **Pull Request → Staging**
  - Runs lint + build via GitHub Actions
  - On success → merge allowed → Amplify auto-deploys to staging

- **Pull Request → Main**
  - Must come from `staging` branch (promotion workflow)
  - On merge → Amplify auto-deploys to production

- **Branch Protections**
  - Direct pushes to `staging` and `main` are blocked
  - All changes flow via Pull Requests

---

## Rollback & Recovery

Two rollback paths are available. Use **Path A** for urgent recovery, then follow up with **Path B** to keep Git history clean.

### Path A: Platform Rollback (fastest)
1. Go to Amplify Console → App → select environment branch (e.g., `main`).
2. Open **Build History**.
3. Select the last known-good build → click **Redeploy this version**.
4. Wait for status = `Deployed`.
5. Validate using smoke tests (see below).

### Path B: Git Rollback (history match)
1. Identify the bad Pull Request in GitHub.
2. Click **Revert** → GitHub opens a new PR that undoes the changes.
3. Merge the revert PR into `staging` or `main`.
4. Amplify redeploys automatically.
5. Validate using smoke tests.

---

## Smoke Test Checklist

After **any deployment** (staging or prod), confirm:
- Homepage loads with HTTP 200
- Navigation works
- Footer shows correct environment badge (`staging` or `prod`)
- No console errors in browser dev tools

---

## Access & Security
- **Secrets**: GitHub PAT stored in AWS Secrets Manager (`github-token-amplify`).
- **Branch Rules**: Direct pushes to `staging` and `main` blocked via GitHub branch protection.
- **Review Process**: At least 1 PR review required (or self-approval if solo project).

---

## Known Limitations
- No automated end-to-end test suite yet (manual QA required).
- Rollback requires developer action (not fully automated).
- Costs scale linearly with Amplify usage.
