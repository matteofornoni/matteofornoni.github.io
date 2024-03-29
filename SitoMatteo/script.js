$(document).ready(function () {
    var lastClicked=$("#about-link");
    $("#about-link").click(function () {
        $("#about-link").addClass("active");
        $("#about-link").attr("aria-current","page");
        lastClicked.removeClass("active");
        lastClicked.removeAttr("aria-current");
        lastClicked=$("#about-link");
    });
    $("#education-link").click(function () {
        $("#education-link").addClass("active");
        $("#education-link").attr("aria-current","page");
        lastClicked.removeClass("active");
        lastClicked.removeAttr("aria-current");
        lastClicked=$("#education-link");
    });
    $("#publications-link").click(function () {
        $("#publications-link").addClass("active");
        $("#publications-link").attr("aria-current","page");
        lastClicked.removeClass("active");
        lastClicked.removeAttr("aria-current");
        lastClicked=$("#publications-link");
    });
    $("#upcoming-link").click(function () {
        $("#upcoming-link").addClass("active");
        $("#upcoming-link").attr("aria-current","page");
        lastClicked.removeClass("active");
        lastClicked.removeAttr("aria-current");
        lastClicked=$("#upcoming-link");
    });
    $("#talks-link").click(function () {
        $("#talks-link").addClass("active");
        $("#talks-link").attr("aria-current","page");
        lastClicked.removeClass("active");
        lastClicked.removeAttr("aria-current");
        lastClicked=$("#talks-link");
    });
    $("#teaching-link").click(function () {
        $("#teaching-link").addClass("active");
        $("#teaching-link").attr("aria-current","page");
        lastClicked.removeClass("active");
        lastClicked.removeAttr("aria-current");
        lastClicked=$("#teaching-link");
    });

    const formattedDate = new Date().toLocaleDateString('en-GB');
    $("#lastUpdate").text(formattedDate);
});