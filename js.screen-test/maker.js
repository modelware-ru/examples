const puppeteer = require('puppeteer');
const fs = require('fs');
const fsextra = require('fs-extra');

// const settings = require('./settings-first-screen.json');
// const settings = require('./settings-collage.json');
const settings = require('./settings-full.json');
// const settings = require('./settings-only-one.json');
const standardTimeout = 5000;

(async () => {

    for (i_session = 0; i_session < settings.length; i_session++) {

        var session = settings[i_session];
        if (session.isActive === false) {
            continue;
        }

        var url = session.url.protocol + '://' + session.url.host + session.url.domain + '/';
        console.log(url);

        for (i_resolution = 0; i_resolution < session.resolutions.length; i_resolution++) {

            var resolution = session.resolutions[i_resolution];

            console.log(resolution);


            dir = './screens_' + session.url.host.replace(':', '_') + '__' + resolution.width + 'x' + resolution.height;

            if (fs.existsSync(dir)) {
                fsextra.removeSync(dir);
            }
            fs.mkdirSync(dir);

            try {
                const browser = await puppeteer.launch({
                    ignoreHTTPSErrors: true,
                    args: ['--no-sandbox']
                });
                const page = await browser.newPage();

                await page.setDefaultNavigationTimeout(60000);

                await page.setViewport({
                    width: resolution.width,
                    height: resolution.height,
                });

                screenIndex = 0;

                await page.goto(url);

                await page.waitFor(standardTimeout);

                await page.screenshot({
                    path: dir + '/screen#' + ('0' + screenIndex++).slice(-2) + '_start.png'
                });

                for (i_step = 0; i_step < session.scenario.length; i_step++) {
                    let step = session.scenario[i_step];

                    if (step.event === "click") {
                        await page.evaluate((className) => {
                            document.getElementsByClassName(className)[0].click();
                        }, step.className);

                        await page.waitFor(step.timeout || standardTimeout );

                        await page.screenshot({
                            path: dir + '/screen#' + ('0' + screenIndex++).slice(-2) + '_' + step.name + '.png'
                        });
                    } else if (step.event === "input") {
                        await page.type('.' + step.className, step.value);

                        await page.waitFor(step.timeout || standardTimeout);

                        await page.screenshot({
                            path: dir + '/screen#' + ('0' + screenIndex++).slice(-2) + '_' + step.name + '.png'
                        });
                    } else if (step.event === "pressKey") {
                        await page.keyboard.press(step.value);

                        await page.waitFor(step.timeout || standardTimeout);

                        await page.screenshot({
                            path: dir + '/screen#' + ('0' + screenIndex++).slice(-2) + '_' + step.name + '.png'
                        });

                    }
                }

                await browser.close();
            } catch (error) {
                console.log('error:', error.message);
                try {
                    console.log('browser:', browser);
                    await browser.close();
                } catch (error) {
                    console.log('browser error:', error);
                }
            }

        };
    };
})();
