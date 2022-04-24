#!/usr/bin/env bash
set -euo pipefail

yarn i18n:scan --silent

fileCount=$(git diff --name-only -- "src/locales/" | wc -l)

if [[ $fileCount -gt 0 ]]; then
    echo "There are missing translations. Please run 'yarn i18n:scan' and add the required lines."
fi
exit $fileCount
