// console.log(window, document)

const mainDiv = document.getElementById('main-div')

// mainDiv.innerHTML = '<a href="#">new inner html</a>'

let tmpHTML = ''

let i = 0
while (i < 10) {
    i++;
    tmpHTML += `<p>
        <a class="link" href="#">new inner html: ${i}</a>
    </p>`
}
mainDiv.innerHTML = tmpHTML

// mainDiv.classList.toggle('box')

// console.log(mainDiv.classList)

console.log(mainDiv.getAttribute('id'))

// console.log(mainDiv)

const allDivElem = document.getElementsByTagName('a')

// console.log(allDivElem)

const textDivElem = document.getElementsByClassName('text-div')

// console.log(textDivElem)

const userInput = document.getElementsByName('username')

// console.log(userInput)

// console.log(document.getElementsByTagNameNS('http://www.w3.org/1999/xhtml', '*'))

const selectedElem = document.querySelector('#main-div')

// console.log(selectedElem)

const selectedElems = document.querySelectorAll('#main-div a.link')

// console.log(selectedElems)
