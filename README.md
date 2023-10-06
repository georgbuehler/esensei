# eSensei

**eSensei** is a mobile-friendly, web-based aikido test simulator that will call out techniques to be performed at regular intervals.

![eSensei Options](http://esensei.georgbuehler.com/eSensei_Controls.png)

![eSensei Test](http://esensei.georgbuehler.com/eSensei_Test.png)

eSensei is available FREE for all to use at [esensei.georgbuehler.com](http://esensei.georgbuehler.com).

The techniques presented are according the official [United States Aikido Federation](https://www.usaikifed.com/) (USAF) [test requirements](http://www.aikido-yamada.eu/wp-content/uploads/USAF.2018.test_.req_._FINAL.pdf).
Test requirements may vary between organizations and dojos, so check with your sensei about requirements before relying on this application for your test preparation. The application is intended mostly for kyu ranks -- people still learning the vocabulary -- though dan-level test requirements are also included for completeness.

eSensei defaults to only including the specific techniques that are required for the test. However, your sensei always may ask you to demonstrate techniques from lower levels as well. Check the **"Include Lower Level Techniques"** checkbox to include those techniques in the test.

eSensei defaults to allowing one minute per technique, but you can vary that default time as needed. You can also use the **Reset** button to start the timer over if you want to stay on a particular technique, or click the **Next** button to move on to the next technique.

The techniques are ordered by "mode" (e.g. standing, suwari waza, hanmi handachi, randori, etc.) but are otherwise presented in random order(just like a real test!) The order of the modes is:

1. Tachi waza (standing)
2. Swari waza (kneeling)
3. Hanmi handachi (nage kneeling, uke standing)
4. Henka waza (switching techniques)
5. Kaishi waza (reversing techniques)
6. Tachi tori (disarming bokken)
7. Jo tori (disarming jo)
8. Jo waza (throwing with jo)
9. Randori (multiple attackers)

This ordering of modes is not mandated by the test requirements, but tends to be the order I've witnessed in real tests.

## License

eSensei source code is licensed under the **MIT License**. See the LICENSE.txt file for the full license agreement.
I encourage any and all dojos to use it and/or extend it as they like -- I created it as a service to the art.

## Technical Details

eSensei is a React+TypeScript web application implemented with the [Vite](https://vitejs.dev/) front-end tooling. UI components are taken from [Chakra UI](https://chakra-ui.com/) Application icons are from [Font Awesome](https://fontawesome.com/). State variable are managed with [Zustand](https://github.com/pmndrs/zustand). Audio playback is supported with [Howler](https://howlerjs.com/).

The technique data for the application is distributed in the Techniques.ts file, primarily as JSON, so that it could easily run on any website. However, the data structure was originally designed in a [SQLite](https://www.sqlite.org/index.html) database, which is included in the project. If you feel the need to correct or extend the data, it would be easiest to do it in the "eSensei.db" SQLite database and then re-extract the desired JSON from there.

Audio recordings were made using [Audacity](https://www.audacityteam.org/). If you'd like to post your own version of eSensei with the voice of your own sensei, you could easily do so by just replacing the MP3 files in the project with your own.

## Future Directions

It would be fun to have eSensei call techniques in the voice of your own sensei. If there is demand for it, I may extend to the application to support options for different senseis, and maybe even support to make your own recordings directly in the application itself. I also intend to create stand-alone Android and iOS apps (for dojos without convenient internet access). Feel free to leave requests for this or other features in the GitHub project.

## Development Tools

You will need [Node.js](https://nodejs.org/en/download) installed on your development machine to work with this project. I recommend using [Visual Studio Code](https://code.visualstudio.com/) as your editor/IDE.

## Build & Distribution directions

1. Check out the code via Git to a local repository.
2. In the root level of the local repository, run the following command: **npm install**
3. To run the application locally in dev mode, run the following command: **npm run dev**. The terminal output will tell you the local URL to see the application (e.g. http://localhost:4173)
4. To build the application for distribution to a website, run the command: **npm run build**. This will pack all the files necessary for the application in the "dist" directory of the project. Copy that entire directory to your web server to run in production. NOTE that any compiler warnings will prevent the production build process from running, so pay attention to the warnings in your editor!
