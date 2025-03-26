import express from 'express';
import renderApi from '@api/render-api';

const app = express();
const port = 3000; // הוסף את מספר הפורט

const getFunctionality = (req, res) => {
    renderApi.auth('rnd_7c2M3IlY9E2dbyGLYtsrzwhuCY4c');
    renderApi.listServices({ includePreviews: 'true', limit: '20' })
        .then(data => {
            res.status(200).send( data.data.map(app => ({
                name: app.service.name,
                url: app.service.serviceDetails.url,
              }))) })
        .catch(err => res.status(500).send({ err: err }));
};

/*res.status(200).send( data.data.map(app => ({
                name: app.service.name,
                url: app.service.url
 }))) });*/
app.get('/', getFunctionality); // הוסף '/' לנתיב

app.listen(port, () => {
    console.log(`my application is running on http://localhost:${port}`)
});
