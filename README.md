#
# Morse Code Translator
![Screenshot](/assets/Screenshot_112.png?raw=true "Site Preview")

# Intro
This is a super minimal looking Morse Code translator made with HTML, SASS and JS. It is still a work in progress as there are some issues that it still has. 

## Some features include:
- Translates between Morse Code and English
- Auto-detection for both languages
- Outputs while entering


## MVP

x   Create a user interface that allows the user to either input some English text or some Morse Code
x   Create JS functions that would allow the user to:

    x   translate their English text into Morse Code
    x   Morse Code into English text

x   Make sure to handle spaces properly (ie. there is 1 space between English words, but one space between Morse Code characters)

x   Bonus: Handle other characters as well
x   Bonus: Detect if a piece of text is english or morse and translate accordingly

x   Split your code between data, logic functions and dom functions
~   Develop unit tests for all of your logic functions
~   Explore and discover edge cases in your code to further develop your tests

## Known Bugs / Issues
- 💻 Emoji inputs do not throw an error, still outputs as a string of '/ /'
- Empty string of multiple spaces does not throw an error. Appears like above.
- Dropping images in input does not throw an error. Urls from images online simply start getting translated into Morse.

## Useful Resources
[String to Morse Code](https://www.tutorialspoint.com/converting-string-to-morse-code-in-javascript)
[Animation](https://codepen.io/xJessD/pen/JjvQxxZ)
