import { createJWT, validateJWT, parseJWT } from "oslo/jwt"
import { TimeSpan } from "oslo"

const getSecret = async () => {
  const encoder = new TextEncoder()
  const uint8Array = encoder.encode(process.env.TOKEN_SECRET)
  return uint8Array.buffer as ArrayBuffer
}

export const createToken = async (subject: string) => {
  const secret = await getSecret()
  const payload = {}
  const options = {
    subject,
    expiresIn: new TimeSpan(30, "d"),
    includeIssuedTimestamp: true,
  }

  try {
    const jwt = await createJWT("HS256", secret, payload, options)

    return jwt
  } catch (error) {
    return null
  }
}

export const validateToken = async (token: string) => {
  const secret = await getSecret()

  try {
    const decodedToken = await validateJWT("HS256", secret, token)
    return decodedToken
  } catch (error) {
    console.error()
    return null
  }
}
