const fs = require('fs').promises;
const path = require('path');

const dataFile = path.join(process.cwd(), 'data', 'cases.json');

module.exports = async (req, res) => {
  try {
    const raw = await fs.readFile(dataFile, 'utf8');
    const cases = JSON.parse(raw);

    if (req.method === 'GET' || req.method === 'HEAD') {
      res.setHeader('Content-Type', 'application/json');
      if (req.method === 'HEAD') {
        return res.status(200).end();
      }
      return res.status(200).json(cases);
    }

    if (req.method === 'POST') {
      const payload = req.body || {};
      const newCase = {
        id: cases.length + 1,
        patient: payload.patient || 'Patient anonymisé',
        condition: payload.pathology || payload.condition || 'Condition médicale urgente',
        description: payload.description || 'Description non fournie',
        amount: Number(payload.amount) || 0,
        raised: 0,
        country: payload.country || 'Pays non précisé',
        verified: false,
        date: new Date().toISOString().split('T')[0]
      };

      res.setHeader('Content-Type', 'application/json');
      return res.status(201).json({ message: 'Case received', case: newCase });
    }

    res.setHeader('Allow', 'GET, POST');
    res.status(405).send('Method Not Allowed');
  } catch (error) {
    console.error('API error:', error);
    res.status(500).json({ error: 'Unable to load cases data.' });
  }
};
