// подія ready спрацює коли документ повністю завантажиться
$(document).ready(function () {
    console.log("Привіт jquery");
});

// селектори - дозволяють витягувати html елементи по певним умовам

// селектор по id - завжди поверне один елемент
console.log($("#p1"));

// селектор по класу
console.log($(".text"));

// селектор по тегу
console.log($("h1"));
console.log($("h2"));
console.log($("p"));

// вкладений селектор
console.log($("nav a"));

// задати клас всім тегам a в тезі nav

// addClass - задає клас всім елементам які зайшов селектор
$("nav a").addClass("page-link");

function deleteClasses() {
    // removeClass - видаляє клас всім елементам які зайшов селектор
    $("p").removeClass("text");
}

function toggleClasses() {
    // toggleClass - Задає клас якщо його немає, видаляє якщо він є
    $("p").toggleClass("text");
}

function addStyle() {
    $("ol").css({
        listStyle: "georgian",
        fontSize: "1.5em",
        color: "chocolate",
    });
}

function changeTheme() {
    $("nav").toggleClass("light");
}

function hideImg() {
    $("#img-cat").hide(1000);
}

function showImg() {
    $("#img-cat").show(1000);
}

function toggleImg() {
    $("#img-cat").toggle(1000);
}

// val - значення для тегу input
$("form input").val("Default value");

function addSquare() {
    const color = $("#squreColor").val();
    console.log(color);
    const square = `<div class="square-styles" style="background-color: ${color};"></div>`;

    // html - записує у innerHtml ваш код
    // $('#container').html(square);

    // append - додає html код у кінець даного блоку
    $("#container").append(square);

    // ('').text(); - записує у innerText
}

function addEvents() {
    // задати подію всім елементам по селектору
    $(".square-styles").on("click", function () {
        // $(this) - елемент з яким відбулася подія
        console.log("test");

        $(this).remove();
    });
}

function prependSquare() {
    const color = $("#squreColor").val();
    console.log(color);
    const square = `<div class="square-styles" style="background-color: ${color};"></div>`;

    // prepend - додає html код на початок даного блоку
    $("#container").prepend(square);
}

function removeDiv() {
    $("#maindiv").remove();
}




// ajax
$.ajax({
    type: "GET",
    url: "https://thronesapi.com/api/v2/Characters",
    success: function (response) {
        console.log(response);
    }, 
    error: function(error) {
        console.log(error);
    }
});