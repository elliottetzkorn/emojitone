const readLine = require('readline');
const f = require('fs');
var file = './emoji-test.txt';
var rl = readLine.createInterface({
    input: f.createReadStream(file),
    output: process.stdout,
    terminal: false
});

function cleanseString(input) {
    input = input.toLowerCase()
    input = input.replaceAll(",", "_")
    input = input.replaceAll(" ", "_")
    input = input.replaceAll("-", "")
    input = input.replaceAll(":", "")
    input = input.replaceAll(".", "")
    input = input.replaceAll("&", "")
    input = input.replaceAll("'", "")
    input = input.replaceAll("?", "")
    input = input.replaceAll("!", "")
    input = input.replaceAll("__", "_")
    input = input.replaceAll("n_", "n")

    return input
}

let generationArray = []

rl.on('line', function (text) {
    if (text.includes("fully-qualified")) {
        if (!text.includes("skin tone")) {
            const one = text.split("#")[1].split(" ");
            const emoji = one[1]
            let file_text_string = cleanseString(one.slice(3).join())

            const basic_content = "import { SkinTones } from '../types'\n\nexport function " + file_text_string + "(tone: SkinTones) {\nswitch(tone){\ndefault:\nreturn '" + emoji + "'\n}\n}"

            generationArray.push({
                name: file_text_string,
                default: emoji
            })
        }

        if (text.includes("skin tone")) {
            const one = text.split("#")[1].split(" ");
            const emoji = one[1]
            let file_text_string = cleanseString(one.slice(3).join())

            if (singleInstanceOfTone(one)) {
                if (one.includes("medium-dark")) {
                    file_text_string = cleanseString(one.slice(3, one.indexOf("medium-dark")).join())
                    updateGenerationArray(generationArray, file_text_string, emoji, "medium-dark")
                } else if (one.includes("medium-light")) {
                    file_text_string = cleanseString(one.slice(3, one.indexOf("medium-light")).join())
                    updateGenerationArray(generationArray, file_text_string, emoji, "medium-light")
                } else if (one.includes("dark")) {
                    file_text_string = cleanseString(one.slice(3, one.indexOf("dark")).join())
                    updateGenerationArray(generationArray, file_text_string, emoji, "dark")
                } else if (one.includes("medium")) {
                    file_text_string = cleanseString(one.slice(3, one.indexOf("medium")).join())
                    updateGenerationArray(generationArray, file_text_string, emoji, "medium")
                } else if (one.includes("light")) {
                    file_text_string = cleanseString(one.slice(3, one.indexOf("light")).join())
                    updateGenerationArray(generationArray, file_text_string, emoji, "light")
                }
            }
        }
    }

}).on('close', function () {
    const filteredArray = generationArray.filter(generation => {
        if (
            'medium_dark' in generation
            && 'medium_light' in generation
            && 'dark' in generation
            && 'medium' in generation
            && 'light' in generation
        ) {
            return generation
        }
    })

    let defaultEmojiArray = []
    let indexFileCases = ""
    let indexFileFunctions = ""

    for (var i = 0; i < filteredArray.length; i++) {
        fileToGen = filteredArray[i]
        defaultEmojiArray.push("'" + fileToGen.default + "'")

        indexFileCases = indexFileCases
            + "        case '"
            + fileToGen.default
            + "':\n"
            + "            return "
            + fileToGen.name
            + "(tone)"
            + "\n"

        indexFileFunctions = indexFileFunctions
            + "function "
            + fileToGen.name
            + "(tone: SkinTones) {\n"
            + "    switch(tone) {\n        case 'dark':\n            return'"
            + fileToGen.dark
            + "'\n        case 'medium-dark':\n            return'"
            + fileToGen.medium_dark
            + "'\n        case 'medium':\n            return'"
            + fileToGen.medium
            + "'\n        case 'medium-light':\n            return'"
            + fileToGen.medium_light
            + "'\n        case 'light':\n            return'"
            + fileToGen.light
            + "'\n        default:\n            return'"
            + fileToGen.default
            + "'\n    }\n}\n\n"

    }

    f.writeFileSync(__dirname + '/src/types.ts',
        "export type SkinTones = 'default' | 'dark' | 'medium-dark' | 'medium' | 'medium-light' | 'light'\n"
        + "export type SkinToneEmojis = "
        + defaultEmojiArray.join(" |")
    )

    f.writeFileSync(__dirname + '/src/main.ts',
        "import { SkinToneEmojis, SkinTones } from './types'\n"
        + "\n"
        + "export const et = (emoji: SkinToneEmojis, tone: SkinTones) => {\n"
        + "    switch (emoji) {\n"
        + indexFileCases
        + "        default:\n"
        + "            return emoji"
        + "\n"
        + "    }\n"
        + "}"
        + "\n\n"
        + indexFileFunctions
    )

    f.writeFileSync('README.md', "# EmojiTone "
        + "\n"
        + "## 👋👋🏿👋🏾👋🏽👋🏼👋🏻"
        + "\n"
        + "Emoji are useful tools for communicating application behavior. I recently finished [a project](https://www.goodvids.so) which heavily uses them and realized while building that I wanted to add an option for users of the project to customize the interface to their liking. There are plenty of packages to do this for theme, but I could not find any for emoji skin tone, so I decided to build EmojiTone.<br><br>This package is a simple interface for building with tone-changing emojis. You can use this with state management on your end to allow users to set the tone as part of their user settings. You can then store that state on a server, in the browser, or however you like. This package is just here to help you with the long and complicated switch statements! Enjoy 💓."
        + "\n"
        + "## Install"
        + "\n"
        + "```bash"
        + "\n"
        + "$ npm install emojitone"
        + "\n"
        + "# or"
        + "\n"
        + "$ yarn add emojitone"
        + "\n"
        + "```"
        + "\n"
        + "## Use"
        + "\n"
        + "Using EmojiTone is as simple as importing it and passing in any supported emoji and an accepted tone."
        + "\n"
        + "```js"
        + "\n"
        + "import { et } from 'emojitone'"
        + "\n"
        + "\n"
        + "// Returns 👋🏾"
        + "\n"
        + "et(👋, 'medium-dark')"
        + "\n"
        + "```"
        + "\n"
        + "The accepted tones are:"
        + "\n"
        + "* `dark`"
        + "\n"
        + "* `medium-dark`"
        + "\n"
        + "* `medium`"
        + "\n"
        + "* `medium-light`"
        + "\n"
        + "* `light`"
        + "\n"
        + "\n"
        + "## Recommended practices"
        + "\n"
        + "It is a good idea to combine this package with simple state management on your end. I have built a simple example Next.js application which stores the state in the browser's localestorage to show you what this might look like. Here is a link to it running live."
        + "\n"
        + "## Currently supported emoji:"
        + "\n"
        + defaultEmojiArray.join(" ").replaceAll("'", "")
    )
});

function updateGenerationArray(generationArray, name, emoji, tone) {
    for (var i = 0; i < generationArray.length; i++) {
        generation = generationArray[i]
        if (generation.name === name) {
            if (tone === "medium-dark") {
                generation.medium_dark = emoji
            } else if (tone === "medium-light") {
                generation.medium_light = emoji
            } else if (tone === "dark") {
                generation.dark = emoji
            } else if (tone === "medium") {
                generation.medium = emoji
            } else if (tone === "light") {
                generation.light = emoji
            }

            generationArray[i] = generation
            break
        }
    }
}

function singleInstanceOfTone(array) {
    var numOfTrue = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i].includes('tone'))
            numOfTrue++;
    }

    return numOfTrue == 1
}