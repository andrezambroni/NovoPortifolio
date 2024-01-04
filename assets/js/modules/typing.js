export default function initTyping() {
    let letter = 0;
    const text = '     André Zambroni';
    const sentenceElement = document.querySelector(".principal__sentence");
    const textArray = Array.from(text);

    function typeWriter() {
        if (letter < textArray.length) {
            sentenceElement.textContent += textArray[letter];
            letter++;
            setTimeout(typeWriter, 180);
        }
    }

    typeWriter();
}