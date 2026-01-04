# Copybara Action

Google's [Copybara](https://github.com/google/copybara) is a great tool for transforming and moving code between repositories.

This action comes with sensible defaults to make it **very easy** for you to use Copybara with Github but is also **100% customizable** so you can use it with your own config, your own Docker image.

## ♾️ Default flow

```text
 Source of Truth                  Destination

+---------------+   Copybara   +---------------+
|     Branch    +------------> |     Branch    |
+-------+-------+              +---------------+
        ^
        |
        |
+-------+-------+   Copybara   +---------------+
| Pull Requests | <------------+ Pull Requests |
+---------------+              +---------------+
```

- One repo acts as the Source of Truth (SoT)
- One other repo acts as the destination
- SoT branch is always pushed by Copybara to destination branch
- Pull Requests can be created on both SoT and destination
- Pull Requests created on destination are always copied by Copybara to SoT

> This is the flow used for this action's [basic usage](docs/basic-usage.md), you can make it whatever you want it to be in [advanced usage](docs/advanced-usage.md).

## 🔑 Authentication

This action supports two authentication modes:

### SSH Authentication (default if `ssh_key` is provided)
```yaml
- uses: olivr/copybara-action@v1.2.5
  with:
    ssh_key: ${{ secrets.SSH_KEY }}
    access_token: ${{ secrets.GH_TOKEN }}
    sot_repo: your/repo
    destination_repo: other/repo
```

### HTTPS Authentication (OIDC / GitHub App Token / GITHUB_TOKEN)

Omit `ssh_key` to use HTTPS mode with token-based authentication:

**Using GitHub App Token (recommended for cross-repo):**
```yaml
- uses: actions/create-github-app-token@v1
  id: app-token
  with:
    app-id: ${{ vars.APP_ID }}
    private-key: ${{ secrets.APP_PRIVATE_KEY }}
    repositories: "sot-repo,destination-repo"

- uses: olivr/copybara-action@v1.2.5
  with:
    access_token: ${{ steps.app-token.outputs.token }}
    sot_repo: your/sot-repo
    destination_repo: your/destination-repo
```

**Using GITHUB_TOKEN (same-repo or fine-grained PAT):**
```yaml
- uses: olivr/copybara-action@v1.2.5
  with:
    access_token: ${{ secrets.GITHUB_TOKEN }}
    sot_repo: ${{ github.repository }}
    destination_repo: other/repo
```

> **Note:** `ssh_key` is optional. When omitted, the action uses HTTPS URLs (`https://github.com/...`) with credential-store authentication instead of SSH URLs (`git@github.com:...`).

## 🔥 [Basic usage](docs/basic-usage.md)

## 🧨 [Advanced usage](docs/advanced-usage.md)

## 🔘 [All options](docs/inputs.md)

## 💚 [Contributing](docs/CONTRIBUTING.md)

## 💬 Support

- For questions about this action: [Join Oliv'r on Keybase](https://keybase.io/team/olivr)
- For questions about Copybara: [Copybara's repo](https://github.com/google/copybara/)
