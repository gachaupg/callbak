const express = require('express');
const app = express();

app.use(express.json());

app.post('/pay', (req, res) => {
  const original = req.body.Body;
  console.log("Response: ", original);
  res.json({ result: "done" });
});

const PORT =3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
