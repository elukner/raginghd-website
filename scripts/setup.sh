
#!/usr/bin/env bash
set -euo pipefail

echo "Installing RagingHD dependencies..."
npm ci

echo "Running quality checks..."
npm run check

echo "RagingHD development environment is ready."
