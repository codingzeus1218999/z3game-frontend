
export default async function handler(req, res) {
  const id = req.query.id;

  try {
    if (!id.startsWith('cs_')) {
      throw Error('Incorrect CheckoutSession ID.');
    }
    res.status(200).json('test_remove');
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}
