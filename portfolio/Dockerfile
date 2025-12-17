# Multi-stage Dockerfile for Next.js production build

# Build stage
FROM node:20-bullseye-slim AS builder
WORKDIR /app

# Install dependencies (including devDependencies needed for build)
COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps

# Copy source and build
COPY . .
RUN npm run build

# Prune dev deps to keep runtime image small
RUN npm prune --production

# Production stage
FROM node:20-bullseye-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy compiled Next.js build and production deps
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

# Expose default Next.js port
EXPOSE 3000

# Start the Next.js production server
CMD ["npm", "start"]
