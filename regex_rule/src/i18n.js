import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        regexItems: [
            {
                id: 1,
                title: 'Start of string or line',
                character: '^',
                description: 'Matches the beginning of the string or line.',
                example: 'For example, /^A/ does not match the "A" in "an A", but does match the first "A" in "An A".'
            },
            {
                id: 2,
                title: 'End of string or line',
                character: '$',
                description: 'Matches the end of the string or line.',
                example: 'For example, /t$/ does not match the "t" in "eater", but does match it in "eat".'
            },
            {
                id: 3,
                title: 'Asterisk',
                character: '*',
                description: 'Expression matches zero or more.',
                example: 'For example, /bo*/ matches "boooo" in "A ghost booooed" and "b" in "A bird warbled", but nothing in "A goat grunted".'
            },
            {
                id: 4,
                title: 'Plus',
                character: '+',
                description: 'Expression matches one or more.',
                example: 'For example, /a+/ matches the "a" in "candy" and all the "a"s in "caaaaaaandy", but nothing in "cndy".'
            },
            {
                id: 5,
                title: 'Quantifier',
                character: '{n,m}',
                description: 'Expression matches within specified ranges.',
                example: 'For example, /a{1,3}/ matches nothing in "cndy", the "a" in "candy", the two "a"s in "caandy", and the first three "a"s in "caaaaaaandy".'
            },
            {
                id: 6,
                title: 'Character set',
                character: '[xyz]',
                description: 'Matches any character in the set.',
                example: 'For example, [abcd] is the same as [a-d]. They match the "b" in "brisket", and the "c" in "chop".'
            },
            {
                id: 7,
                title: 'Negated character set',
                character: '[^xyz]',
                description: 'Matches any character not in the set.',
                example: 'For example, [^abc] is the same as [^a-c]. They initially match "o" in "bacon" and "h" in "chop".'
            },
            {
                id: 8,
                title: 'Wildcard',
                character: '.',
                description: 'Matches any character except line breaks.',
                example: 'For example, /.y/ matches "my" and "ay", but not "yes", in "yes make my day", as there is no character before "y" in "yes".'
            },
            {
                id: 9,
                title: 'Word',
                character: '\\w',
                description: 'Matches any alphanumeric character. Including the underline.',
                example: 'For example, /\\w/ matches "a" in "apple", "5" in "$5.28", "3" in "3D" and "m" in "Émanuel".'
            },
            {
                id: 10,
                title: 'Digit',
                character: '\\d',
                description: 'Matches any numeric character.',
                example: 'For example, /\\d/ or /[0-9]/ matches "2" in "B2 is the suite number".'
            }
        ]
    },
    de: {
        regexItems: [
            {
                id: 1,
                title: 'Anfang des Strings oder der Zeile',
                character: '^',
                description: 'Findet den Anfang des Strings oder der Zeile.',
                example: 'Zum Beispiel passt /^A/ nicht auf das "A" in "ein A", aber auf das erste "A" in "Ein A".'
            },
            {
                id: 2,
                title: 'Ende des Strings oder der Zeile',
                character: '$',
                description: 'Findet das Ende des Strings oder der Zeile.',
                example: 'Zum Beispiel passt /t$/ nicht auf das "t" in "eater", aber auf das "t" in "eat".'
            },
            {
                id: 3,
                title: 'Sternchen',
                character: '*',
                description: 'Der Ausdruck passt auf null oder mehr Vorkommen.',
                example: 'Zum Beispiel passt /bo*/ auf "boooo" in "A ghost booooed" und "b" in "A bird warbled", aber auf nichts in "A goat grunted".'
            },
            {
                id: 4,
                title: 'Plus',
                character: '+',
                description: 'Der Ausdruck passt auf ein oder mehr Vorkommen.',
                example: 'Zum Beispiel passt /a+/ auf das "a" in "candy" und alle "a"s in "caaaaaaandy", aber auf nichts in "cndy".'
            },
            {
                id: 5,
                title: 'Quantifizierer',
                character: '{n,m}',
                description: 'Der Ausdruck passt innerhalb der angegebenen Bereiche.',
                example: 'Zum Beispiel passt /a{1,3}/ auf nichts in "cndy", das "a" in "candy", die zwei "a"s in "caandy" und die ersten drei "a"s in "caaaaaaandy".'
            },
            {
                id: 6,
                title: 'Zeichensatz',
                character: '[xyz]',
                description: 'Passt auf jedes Zeichen im Satz.',
                example: 'Zum Beispiel ist [abcd] das gleiche wie [a-d]. Sie passen auf das "b" in "brisket" und das "c" in "chop".'
            },
            {
                id: 7,
                title: 'Negierter Zeichensatz',
                character: '[^xyz]',
                description: 'Passt auf jedes Zeichen, das nicht im Satz ist.',
                example: 'Zum Beispiel ist [^abc] das gleiche wie [^a-c]. Sie passen zunächst auf "o" in "bacon" und "h" in "chop".'
            },
            {
                id: 8,
                title: 'Platzhalter',
                character: '.',
                description: 'Passt auf jedes Zeichen außer Zeilenumbrüchen.',
                example: 'Zum Beispiel passt /.y/ auf "my" und "ay", aber nicht auf "yes" in "yes make my day", da es kein Zeichen vor "y" in "yes" gibt.'
            },
            {
                id: 9,
                title: 'Wortzeichen',
                character: '\\w',
                description: 'Passt auf jedes alphanumerische Zeichen, einschließlich Unterstrich.',
                example: 'Zum Beispiel passt /\\w/ auf "a" in "apple", "5" in "$5.28", "3" in "3D" und "m" in "Émanuel".'
            },
            {
                id: 10,
                title: 'Ziffer',
                character: '\\d',
                description: 'Passt auf jedes numerische Zeichen.',
                example: 'Zum Beispiel passt /\\d/ oder /[0-9]/ auf "2" in "B2 is the suite number".'
            }
        ]
    }
}

export default createI18n({ 
    legacy: false, // Use Composition API
    locale: 'en',
    fallbackLocale: 'en',
    messages
});