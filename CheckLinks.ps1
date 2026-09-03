$ErrorActionPreference = "Stop"

# Uncomment to trace.
# Set-PSDebug -Trace 1

$PublicDir = Join-Path -Path $PSScriptRoot -ChildPath "public"

echo "Building site"
hugo

echo "Checking links"
# A browser user agent avoids bot-blocking front-ends. 403, 429 and 999 mean the
# server is alive and refusing a crawler, so we treat them as accepted.
lychee `
    --root-dir "$PublicDir" `
    --index-files index.html `
    --accept "200..=299,403,429,999" `
    --user-agent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36" `
    "$PublicDir\**\*.html"
