# Use Bun image from the Docker Hub
FROM oven/bun:debian

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy app files
COPY . .

# Install dependencies
RUN bun install

# Generate Prisma
RUN bun run generate

# Bind the app to port 3000
EXPOSE 3001

# Run the application
CMD ["bun", "start"]