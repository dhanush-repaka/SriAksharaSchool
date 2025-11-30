# Troubleshooting: Dev Server Not Starting

If `npm run dev` keeps starting but never completes, try these solutions:

## Solution 1: Clear Next.js Cache
```bash
# Delete .next folder
rmdir /s /q .next

# Or on Mac/Linux:
rm -rf .next
```

## Solution 2: Reinstall Dependencies
```bash
# Delete node_modules and package-lock.json
rmdir /s /q node_modules
del package-lock.json

# Reinstall
npm install
```

## Solution 3: Use a Different Port
```bash
# Run on port 3001 instead
npm run dev -- -p 3001
```

## Solution 4: Check for Port Conflicts
```bash
# Windows: Check if port 3000 is in use
netstat -ano | findstr :3000

# Kill the process if needed (replace PID with actual process ID)
taskkill /PID <PID> /F
```

## Solution 5: Run with Verbose Output
```bash
# See what's happening
npm run dev -- --debug
```

## Solution 6: Check Node Version
```bash
# Make sure you have Node.js 18+
node --version

# Should be 18.0.0 or higher
```

## Solution 7: Try Building First
```bash
# Build the project to see errors
npm run build
```

## Solution 8: Check for Missing Images
If images are missing, the server might hang. Make sure all required images are in `public/images/` folder.

## Solution 9: Disable TypeScript Checking Temporarily
Edit `next.config.js` and add:
```js
typescript: {
  ignoreBuildErrors: true,
},
```

## Solution 10: Check Console Output
Look at the terminal where you ran `npm run dev` - there might be error messages that explain the issue.

