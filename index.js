// Перевірити що імʼя було введене, якщо ні, вивести ʼпомилка в іменіʼ і на цьому кінець
// Перевірити вік(що було введено щось, і це число, що не менше 1 і не більше 150),
// якщо ні, то вивести ʼпомилка у віціʼ і на цьому кінець програми
// Перевірити що повідомлення не пусте, якщо ні то вивести ʼпомилка в
// Якщо вік більше або дорівнює 18, то тоді вивести ʼ(імʼя) написав (повідомлення)ʼ
// де замість значень в дужках має бути значення того, що ввів юзер.
//     Якщо вік менше 18, то треба перевірити, що не було введено лайливе слово(fuck).
//     Якщо це воно, то вивести ʼне лайся!ʼ, якщо не воно вивести по аналогії з 18+ логікою

const nameUser = prompt('Enter your name');

if (nameUser !== '' && nameUser !== null) {
    console.log(`Привіт ${nameUser}`);
} else if (nameUser === '' && nameUser === null) {
    console.log(`Error ${nameUser}`);
}

const ageUser = prompt('Enter your age');
if (ageUser === '' && ageUser === null && isNaN(+ageUser)) {
    console.log('Error');
} else if (ageUser >= 1 && ageUser <= 150) {
    console.log(`Your age is ${+ageUser}`)
} else {
    console.log('Error')
}
const messageUser = prompt('Enter your message');
if (ageUser <= 18 && messageUser === 'fuck' && messageUser === 'FUCK') {
    console.log('Не лайся');
} else if (messageUser === '' && messageUser === null) {
    console.log('Error')
} else {
    console.log(`Your message is ${messageUser}`);
}