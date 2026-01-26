# base stage
FROM node:22-alpine AS base
# /base stage

# deps stage
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json ./
RUN npm update && npm install
# /deps stage

# builder stage
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Argumentos recibidos desde docker-compose o línea de comandos
# ARG NEXT_PUBLIC_API_BASE
# ARG NEXT_PUBLIC_API_DOCS_URL
# ARG NEXT_PUBLIC_LOGIN_ENDPOINT
# Asignación de argumentos a variables de entorno
# ENV NEXT_PUBLIC_API_BASE=$NEXT_PUBLIC_API_BASE
# ENV NEXT_PUBLIC_API_DOCS_URL=$NEXT_PUBLIC_API_DOCS_URL
# ENV NEXT_PUBLIC_LOGIN_ENDPOINT=$NEXT_PUBLIC_LOGIN_ENDPOINT
RUN npm run build
# /builder stage

# runner stage
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
RUN mkdir .next
RUN chown nextjs:nodejs .next
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
# /runner stage
