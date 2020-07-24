var isCheckDropdown = true;
$(".item-link-control").click(function (e) {
  if (isCheckDropdown) {
    $(".nav__dropdown-control").css("display", "block");
    $(this).addClass("item-active");
    isCheckDropdown = !isCheckDropdown;
  } else {
    $(".nav__dropdown-control").css("display", "none");
    $("a.item-active").removeClass("item-active");
    isCheckDropdown = !isCheckDropdown;
  }
  isCheckCart = true;
});

var isCheckCart = true;
$(".cart-control").click(function (e) {
  if (isCheckCart) {
    $(".product__list-control").css("display", "block");
    isCheckCart = !isCheckCart;
  } else {
    $(".product__list-control").css("display", "none");
    isCheckCart = !isCheckCart;
  }
  isCheckDropdown = true;

  if (w < 992) {
    $(".nav__list").css("display", "none");
    $(".nav__mobile a").removeClass("active");
  }

  $(".nav__dropdown-control").css("display", "none");

  e.stopPropagation();
});

$(".nav__dropdown-control").click(function (e) {
  e.stopPropagation();
});

$(".product__list-control").click(function (e) {
  e.stopPropagation();
});

$("html").click(function (e) {
  if (e.target !== $(".item-link-control")[0]) {
    $(".nav__dropdown-control").css("display", "none");
    $("a.item-active").removeClass("item-active");
    isCheckDropdown = true;
  }

  if (e.target !== $(".product__list-control")[0]) {
    $(".product__list-control").css("display", "none");
    isCheckCart = true;
  }
});

$(".nav__toggle").click(function () {
  $(".nav__list").slideToggle();
});
$(".nav__toggle").on("click", function () {
  this.classList.toggle("active");
});

var w;
$(window).resize(function () {
  w = $("body").width();
  if (w > 992) {
    $(".nav__list").css("display", "flex");
  } else {
    $(".nav__list").css("display", "none");
    $(".nav__toggle").removeClass("active");
  }
});