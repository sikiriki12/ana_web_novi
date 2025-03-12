# Vercel Deployment Guide

This guide explains the configuration for deploying this Vite React application to Vercel.

## Configuration Files

Several files have been added or modified to optimize the Vercel deployment:

1. **`.nvmrc`**: Specifies Node.js version 18, which is required for the modern dependencies used in this project.

2. **`vercel.json`**: Contains Vercel-specific configuration settings:
   ```json
   {
     "framework": "vite",
     "buildCommand": "npm run build",
     "outputDirectory": "dist",
     "installCommand": "npm install",
     "devCommand": "npm run dev",
     "github": {
       "silent": true
     }
   }
   ```

3. **`vite.config.js`**: Updated with build optimization settings:
   - Set output directory to `dist`
   - Enabled terser minification
   - Added clean build settings
   - Configured asset inlining

4. **`package.json`**: Added Node.js engine requirement:
   ```json
   "engines": {
     "node": ">=18.0.0"
   }
   ```

5. **Added `terser` dependency**: Required for minification during build.

## Deployment Steps

1. Push these changes to your GitHub repository:
   ```bash
   git add .
   git commit -m "Add Vercel deployment configuration"
   git push
   ```

2. In the Vercel dashboard:
   - Create a new project
   - Import your GitHub repository
   - Keep the default settings (Vercel will detect the framework as Vite)
   - Click "Deploy"

3. Vercel will automatically use the configuration files for deployment.

## Troubleshooting

If you encounter deployment issues:

1. Check Vercel build logs for specific errors
2. Ensure all dependencies are compatible with Node.js 18+
3. Verify that the build command completes successfully locally with `npm run build`
4. If React 19 causes issues, consider downgrading to React 18 temporarily

## Local Testing

You can test the production build locally:

```bash
npm run build
npm run preview
```

This will build the project and serve it from the `dist` directory, simulating a production environment.
