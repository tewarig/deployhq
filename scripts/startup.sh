#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Print commands and their arguments as they are executed
set -x

# Check if Node.js is installed, if not, install it
if ! command -v node &> /dev/null
then
    echo "Node.js not found, installing..."
    # Install Node.js version 22 (this assumes a Debian-based system)
    curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
    sudo apt-get install -y nodejs
else
    # Check if the installed Node.js version is 22, if not, update it
    NODE_VERSION=$(node -v)
    if [[ "$NODE_VERSION" != v22* ]]; then
        echo "Updating Node.js to version 22..."
        curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
        sudo apt-get install -y nodejs
    fi
fi

# Check if pnpm is installed, if not, install it
if ! command -v pnpm &> /dev/null
then
    echo "pnpm not found, installing..."
    npm install -g pnpm
fi
# Install dependencies using pnpm
pnpm --filter apps/backend install

# Build the TypeScript project
pnpm --filter apps/backend run build

# Start the backend server
pnpm --filter apps/backend run start


