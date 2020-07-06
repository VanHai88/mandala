(function ($) {
    $(function () {
      $(".item__menu-products").click(function (e) {
        $(this).siblings(".header__nav-dropdown").slideToggle(500);
        $(".product__list").hide();
        e.stopPropagation();
      });
  
      $(".header__icon-cart").click(function (e) {
        $(".product__list").slideToggle(500);
        $(".header__nav-dropdown").hide();
        $(".header__nav-list").css("display","none");
        $(".header__nav-mobile a").removeClass("active")
        e.stopPropagation();
      });
  
      $(".header__nav-dropdown").click(function (e) {
        e.stopPropagation();
      });
  
      $(".product__list").click(function(e){
        e.stopPropagation();
      })
  
      $("html").click(function () {
        $(".header__nav-dropdown").hide();
        $(".product__list").hide();
      });
      $("#nav__toggle").click(function () {
        $(".header__nav-list").slideToggle();
      });
      $("#nav__toggle").on("click", function () {
        this.classList.toggle("active");
      });
  
      // click menu item -> active
      $(".list__item > a").click(function () {
        $("a.item-active").removeClass("item-active");
        $(this).addClass("item-active");
      });
  
      $(".list__item-child  a").click(function () {
        $(".list__item-child a.item__child-active").removeClass("item__child-active");
        $(this).addClass("item__child-active");
      });
    });
  })(jQuery);
  