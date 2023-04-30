$ErrorActionPreference = "Stop"
Set-PSDebug -Trace 1

# First clone the source repo so that we don't affect the current checked out
# state.
$RepoDir = $PSScriptRoot
$CloneDir = Join-Path -Path "$env:TEMP" -ChildPath "voithos-clone"
$RawDir = Join-Path -Path "$env:TEMP" -ChildPath "voithos-raw"

mkdir $CloneDir
mkdir $RawDir

echo "Cloning to $CloneDir"
pushd "$CloneDir"
git clone -q "$RepoDir" .
# Disable the line endings warning.
git config core.safecrlf false
git checkout "source"

echo "Installing npm dependencies"
npm install

echo "Compiling to $RawDir"
hugo -d "$RawDir"

echo "Copying to master"
git checkout master
robocopy "$RawDir" . /mir /sec /r:0 /w:0 /nfl /ndl /xd .git
git add -A
git commit -m "Sync raw from source."
git push "$RepoDir" master

echo "Done"
popd
rm -r -Force "$CloneDir"
rm -r -Force "$RawDir"

Set-PSDebug -Trace 0