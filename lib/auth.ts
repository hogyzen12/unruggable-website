// lib/auth.ts
const ADMIN_TOKENS = new Set([
  process.env.ADMIN_SECRET_KEY,
  process.env.TEAM_MEMBER_1_KEY,
].filter(Boolean))

export function isValidAdminToken(token: string): boolean {
  return ADMIN_TOKENS.has(token)
}