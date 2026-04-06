import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json({ limit: '1mb' }));

app.post('/api/generate-video', async (req, res) => {
  try {
    const { prompt, duration, width, height } = req.body || {};

    console.log('New AI video request:', { prompt, duration, width, height });

    // TODO: yaha baad me real AI API integrate karoge
    const demoVideoUrl = 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4';

    return res.json({
      ok: true,
      prompt,
      duration,
      width,
      height,
      videoUrl: demoVideoUrl
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: 'Server error' });
  }
});

app.get('/', (req, res) => {
  res.send('AI Video backend running');
});

app.listen(PORT, () => {
  console.log('Server running on port', PORT);
});
