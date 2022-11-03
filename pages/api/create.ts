import type { NextApiRequest, NextApiResponse } from 'next'

async function createUrl(req: NextApiRequest, res: NextApiResponse)  {
    if (!req.headers.authorization) {
        return res.send({ error: 'No authorization header' })
    }
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set('Content-Type', 'application/json');
    requestHeaders.set('Authorization', req.headers.authorization)
    console.log(requestHeaders)
    const createResponse = await fetch("http://localhost:3000/v1/create", {method:"POST", body:req.body, headers:{authorization:req.headers.authorization}})
    console.log(await createResponse.text())
    res.send(await createResponse.json())
  }

export default createUrl