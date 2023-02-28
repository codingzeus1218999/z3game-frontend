

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log('OK');
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
