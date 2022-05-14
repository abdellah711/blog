// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { submitComment } from 'services/articles'

type Data = {
  error?: string;
  msg?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { name, content, email, slug } = req.body
    const comment = { name, content, email, slug }
    for (let [field, value] of Object.entries(comment)) {
      if (!value) {
        return res.status(400).json({ error: `${field} is required` })
      }
    }
    try {
      await submitComment(comment);
      return res.status(200).json({ msg: 'Comment submitted for review' })
    } catch {}
    return res.status(500).json({ error: 'Something went wrong, please try again later!' })
  }
  res.status(400).json({ error: 'Wrong request!' })
}
