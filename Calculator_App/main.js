let output = document.querySelector('input')

// function display(number) {
//     output.value += number
// }

const display = (number) => output.value += number


// function Clear() {
//     output.value = ''
// }

const Clear = () => output.value = ''

// function Delete() {
//     output.value = output.value.slice(0, -1)
// }

const Delete = () => output.value = output.value.slice(0, -1)

// function Calculate() {
//     output.value = eval(output.value)
// }

const Calculate = () => output.value = eval(output.value) 