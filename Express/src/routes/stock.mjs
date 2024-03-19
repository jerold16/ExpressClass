import { Router } from "express";
import axios from "axios";
 export const app =Router()


app.get('/company-names', async (req, res) => {
  try {
    const apiUrl = 'https://query1.finance.yahoo.com/v1/finance/search?q=Apple&type=company';
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching company names:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
