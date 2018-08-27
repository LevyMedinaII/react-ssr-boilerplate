import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Loadable from 'react-loadable';
import path from 'path';
import fs from 'fs';
import { StaticRouter } from 'react-router-dom';

import manifest from '../../../build/asset-manifest.json';
import Logger from '../../utils/Logger';
import App from '../../App';

export default (req, res, next) => {

    // point to the html file created by CRA's build tool
    const filePath = path.resolve(__dirname, '..', '..', '..', 'build', 'index.html');

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('err', err);
            return res.status(404).end()
        }
        const modules = [];
        const context = {};
        // render the app as a string
        const html = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={context}>
                <Loadable.Capture report={m => modules.push(m)}>
                    <App />
                </Loadable.Capture>
            </StaticRouter>
        );

        const extractAssets = (assets, chunks) => Object.keys(assets)
            .filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
            .map(k => assets[k]);

        // then, after Loadable.Capture
        Logger.text(`MODULES`);
        Logger.text(extractAssets(manifest, modules));

        const extraChunks = extractAssets(
            manifest,
            modules
        ).map(chunk => `<script type="text/javascript" src="/${chunk}"></script>`);

        // inject the rendered app into our html and send it
        return res.send(
            htmlData
                .replace(
                    '<div id="root"></div>',
                    `<div id="root">${html}</div>`
                ).replace(
                    '</body>',
                    extraChunks.join('') + '</body>'
                )
        );
    });
}