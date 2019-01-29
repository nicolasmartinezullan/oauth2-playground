require('dotenv').config()
const fetch = require('node-fetch')
const { URL, URLSearchParams } = require('url')

const client_id = process.env.CLIENT_ID
const client_secret = process.env.CLIENT_SECRET
const authorizeUrl = process.env.AUTHORIZE_URL
const tokenUrl = process.env.TOKEN_URL
const scope = process.env.SCOPE

const basicAuth = Buffer.from(
  `${client_id}:${client_secret}`,
  'ascii'
).toString('base64')

const baseConfig = {
  method: 'POST',
  headers: {
    Authorization: `Basic ${basicAuth}`,
  },
}

const authorizationStep = () => {
  const url = new URL(authorizeUrl)
  const queryParams = {
    client_id,
    response_type: 'code',
    scope,
  }
  url.search = new URLSearchParams(queryParams)

  const config = { ...baseConfig }

  return fetch(url, config).then(res => res.json())
}

const tokenStep = redirect_uri => {
  const redirect_url = new URL(redirect_uri)
  const url = new URL(tokenUrl)

  const queryParams = {
    grant_type: 'authorization_code',
    code: redirect_url.searchParams.get('code'),
    redirect_uri: redirect_url.origin + redirect_url.pathname,
  }
  const data = new URLSearchParams(queryParams)

  const config = {
    ...baseConfig,
    body: data,
  }
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'

  return fetch(url, config).then(res => res.json())
}

const run = async () => {
  try {
    // Step  1 - Authorize
    console.log('Step 1 - Executing - Authorize')
    const authorizeResult = await authorizationStep()
    console.log('Step 1 - Completed - Authorize')

    // Step 2 - Token
    console.log('Step 2 - Executing - Token')
    const tokenResult = await tokenStep(authorizeResult.redirect_uri)
    console.log('Step 2 - Completed - Token')

    console.log(tokenResult)
  } catch (e) {
    console.error(e)
  }
}

run()
