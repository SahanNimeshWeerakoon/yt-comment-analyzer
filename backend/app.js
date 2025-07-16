const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const YT_API_KEY = process.env.YOUTUBE_API_KEY;

app.get('/api/search', async (req, res) => {
    const { query } = req.query;

    if(!query) return res.status(400).json({ message: 'Query parameter is required' });

    try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                q: query,
                type: 'video',
                maxResults: 1,
                key: YT_API_KEY
            }
        });

        const videos = response?.data?.items?.map(item => ({
            videoId: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnail: item.snippet.thumbnails.default.url
        }));

        res.status(200).json({ data: videos ?? [] });
    } catch(err) {
        return res.status(500).json({ err, message: 'Backend error' });
    }
});

// Add this helper to get replies
const getReplies = async (commentId) => {
    const res = await axios.get('https://www.googleapis.com/youtube/v3/comments', {
        params: {
            part: 'snippet',
            parentId: commentId,
            maxResults: 100,
            key: YT_API_KEY
        }
    });

    return res.data.items.map(reply => ({
        author: reply.snippet.authorDisplayName,
        text: reply.snippet.textDisplay,
        publishedAt: reply.snippet.publishedAt
    }));
};

// Extend your comments endpoint
app.get('/api/comments/:videoId', async (req, res) => {
    const { videoId } = req.params;

    try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/commentThreads', {
            params: {
                part: 'snippet',
                videoId,
                maxResults: 100,
                key: YT_API_KEY
            }
        });

        const comments = await Promise.all(response.data.items.map(async item => {
            const topComment = item.snippet.topLevelComment.snippet;
            const replies = await getReplies(item.snippet.topLevelComment.id); // 👈 fetch replies

            return {
                author: topComment.authorDisplayName,
                text: topComment.textDisplay,
                publishedAt: topComment.publishedAt,
                replies
            };
        }));

        res.json(comments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch comments' });
    }
});

app.listen(PORT, () => console.log(`App listening to port ${PORT}...`));