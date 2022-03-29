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
    let indexFileImports = ""
    let indexFileCases = ""

    for (var i = 0; i < filteredArray.length; i++) {
        fileToGen = filteredArray[i]
        defaultEmojiArray.push("'" + fileToGen.default + "'")
        indexFileImports = indexFileImports
            + "import { "
            + fileToGen.name
            + " } from './emojis/"
            + fileToGen.name
            + "'\n"

        indexFileCases = indexFileCases
            + "        case '"
            + fileToGen.default
            + "':\n"
            + "            return "
            + fileToGen.name
            + "(tone)"
            + "\n"

        f.writeFileSync(__dirname + '/src/emojis/' + fileToGen.name + '.ts',
            "import { SkinTones } from '../types'\n\nexport function "
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
            + "'\n    }\n}"
        )
    }

    f.writeFileSync(__dirname + '/src/types.ts',
        "export type SkinTones = 'default' | 'dark' | 'medium-dark' | 'medium' | 'medium-light' | 'light'\n"
        + "export type SkinToneEmojis = "
        + defaultEmojiArray.join(" |")
    )

    f.writeFileSync(__dirname + '/src/index.tsx',
        "import { SkinToneEmojis, SkinTones } from './types'\n"
        + indexFileImports
        + "\n"
        + "export const emojiTone = (emoji: SkinToneEmojis, tone: SkinTones) => {\n"
        + "    switch (emoji) {\n"
        + indexFileCases
        + "        default:\n"
        + "            return '👋'"
        + "\n"
        + "    }\n"
        + "}"
    )

    f.writeFileSync('README.md', "# EmojiTone "
        + "\n"
        + "## 👋👋🏿👋🏾👋🏽👋🏼👋🏻 Welcome"
        + "\n"
        + "Emoji are fun and useful tools for communicating application UI. They add a lot of life to buttons, menus and user actions. I recently built [a website](https://www.goodvids.so) which heavily uses them, and realized after completing the design, and adding an option for theme toggle, that it would be a lovely touch to allow users to also tweak the skin tones of the emoji used in the UI, to make the website feel more inviting. I could not find any packages to help me do that, so I decided to build EmojiTone.<br><br>This package is straightforward and non-opiniated. Simply pass it an emoji, and a tone, and it returns the correct emoji back modified. You can use this with state management on your end to allow users to set this tone as part of their user settings. You can then store that state on a server, in the browser, or however you like. This package is just here to help you with the long and complicated switch statements! Enjoy 💓."
        + "\n"
        + "### The list of currently supported emoji is:"
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





