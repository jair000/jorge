

$(document).ready(function () {
    $('#message_error2').hide();
});

const input = document.getElementById('correo');
const pass = document.getElementById('password');

function ocultar() {
    input.addEventListener('click', function () {
        $('#message_error2').hide();
    });
    pass.addEventListener('click', function () {
        $('#message_error2').hide();
    });
}

$(document).on("click", "#signup", function () {

    ocultar();
});

$(document).on("click", "#signin", function () {

    ocultar();
});

// input.addEventListener("keyup", (event) => {
//     if (event.code === 13)
//         {
//             document.querySelector('form').submit();
//         }
// })

// pass.addEventListener("keyup", (event) => {
//     if (event.code === 13)
//         {
//             document.querySelector('form').submit();
//         }
// })

document.addEventListener("keyup", (event) => {
    if (event.code === 13)
        {
            document.querySelector('form').submit();
        }
})