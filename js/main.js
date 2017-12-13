
/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
!function (e) {
    e.fn.niceSelect = function (t) {
        function s(t) {
            t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));var s = t.next(),
                n = t.find("option"),
                i = t.find("option:selected");s.find(".current").html(i.data("display") || i.text()), n.each(function (t) {
                var n = e(this),
                    i = n.data("display");s.find("ul").append(e("<li></li>").attr("data-value", n.val()).attr("data-display", i || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()));
            });
        }if ("string" == typeof t) return "update" == t ? this.each(function () {
            var t = e(this),
                n = e(this).next(".nice-select"),
                i = n.hasClass("open");n.length && (n.remove(), s(t), i && t.next().trigger("click"));
        }) : "destroy" == t ? (this.each(function () {
            var t = e(this),
                s = e(this).next(".nice-select");s.length && (s.remove(), t.css("display", ""));
        }), 0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'), this;this.hide(), this.each(function () {
            var t = e(this);t.next().hasClass("nice-select") || s(t);
        }), e(document).off(".nice_select"), e(document).on("click.nice_select", ".nice-select", function (t) {
            var s = e(this);e(".nice-select").not(s).removeClass("open"), s.toggleClass("open"), s.hasClass("open") ? (s.find(".option"), s.find(".focus").removeClass("focus"), s.find(".selected").addClass("focus")) : s.focus();
        }), e(document).on("click.nice_select", function (t) {
            0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option");
        }), e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function (t) {
            var s = e(this),
                n = s.closest(".nice-select");n.find(".selected").removeClass("selected"), s.addClass("selected");var i = s.data("display") || s.text();n.find(".current").text(i), n.prev("select").val(s.data("value")).trigger("change");
        }), e(document).on("keydown.nice_select", ".nice-select", function (t) {
            var s = e(this),
                n = e(s.find(".focus") || s.find(".list .option.selected"));if (32 == t.keyCode || 13 == t.keyCode) return s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1;if (40 == t.keyCode) {
                if (s.hasClass("open")) {
                    var i = n.nextAll(".option:not(.disabled)").first();i.length > 0 && (s.find(".focus").removeClass("focus"), i.addClass("focus"));
                } else s.trigger("click");return !1;
            }if (38 == t.keyCode) {
                if (s.hasClass("open")) {
                    var l = n.prevAll(".option:not(.disabled)").first();l.length > 0 && (s.find(".focus").removeClass("focus"), l.addClass("focus"));
                } else s.trigger("click");return !1;
            }if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");else if (9 == t.keyCode && s.hasClass("open")) return !1;
        });var n = document.createElement("a").style;return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"), this;
    };
}(jQuery);
$('.select').niceSelect();

$('.js-open-nav').click(function () {
    $(this).toggleClass('is-active');
    $('.sidebar').toggleClass('is-opened');
});

//=include animations.js
function openDetail(evt, detailName) {

    // Get all elements with class="tablinks" and remove the class "active"
    var tablinks = document.getElementsByClassName("tab-link");
    var tabcontents = document.getElementsByClassName("tabcontent");
    var tabcontent = document.getElementById(detailName);
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    for (var j = 0; j < tabcontents.length; j++) {
        tabcontents[j].className = tabcontents[j].className.replace(" visible", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    tabcontent.className += " visible";
    evt.currentTarget.className += " active";
}