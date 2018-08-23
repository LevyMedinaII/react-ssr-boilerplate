import express from 'express';
import path from 'path';
import serverRenderer from './middleware/renderer';
import Logger from '../utils/Logger';

const PORT = 3000;
const STATIC_RESOURCE_LIFE = '30d';

// Initialize app and create routes
const app = express();
const router = express.Router();

// Set root (/) to render served page
router.use('^/$', serverRenderer);

// Set static resources to be served as they are
router.use(express.static(
    path.resolve(__dirname, '..', '..', 'build'),
    { maxAge: STATIC_RESOURCE_LIFE },
));

// Set api endpoints


// Set uncaught routes to route to our index page
// react-router will take care of everything
router.use('*', serverRenderer);

// Use defined rules in app
app.use(router);

// Start application
app.listen(PORT, error => {
    if (error) {
        return Logger.error(error);
    }
    Logger.success(`App running on port ${PORT}`);
});