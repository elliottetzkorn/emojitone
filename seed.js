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

    for (var i = 0; i < filteredArray.length; i++) {
        fileToGen = filteredArray[i]

        f.writeFileSync(__dirname + '/src/emojis/' + fileToGen.name + '.ts',
            "import { SkinTones } from '../types'\nexport function "
            + fileToGen.name
            + "(tone: SkinTones) {\nswitch(tone) {\ncase 'dark':\nreturn'"
            + fileToGen.dark
            + "'\ncase 'medium-dark':\nreturn'"
            + fileToGen.medium_dark
            + "'\ncase 'medium':\nreturn'"
            + fileToGen.medium
            + "'\ncase 'medium-light':\nreturn'"
            + fileToGen.medium_light
            + "'\ncase 'light':\nreturn'"
            + fileToGen.light
            + "'\ndefault:\nreturn'"
            + fileToGen.default
            + "'\n}\n}"
        )
    }


    console.log(filteredArray) // has its values now
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





