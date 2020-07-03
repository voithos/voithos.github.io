#!/bin/bash

# Exit on errors.
set -e

# First clone the source repo so that we don't affect the current checked out
# state.
repo_dir=$(pwd)
clone_dir=$(mktemp -d -t voithos-clone-XXXXXXXXXX)
tmp_dir=$(mktemp -d -t voithos-raw-XXXXXXXXXX)

echo "Cloning to ${clone_dir}"
pushd "${clone_dir}" > /dev/null
git clone -q "${repo_dir}" .
git checkout "source"

echo "Compiling to ${tmp_dir}"
hugo -d "${tmp_dir}"

echo "Copying to master"
git checkout master
rsync -az --delete --filter='P .git' "${tmp_dir}/" .
git add -A
git commit -m "Sync raw from source."
git push "${repo_dir}" master

echo "Done"
popd > /dev/null
rm -rf "${tmp_dir}" "${clone_dir}"
