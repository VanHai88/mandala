(function ($) {
    $(function () {
      $(".list__item-link").click(function (e) {
        $(this).siblings(".nav__dropdown").slideToggle(500);
        $(".product__list").hide();
        e.stopPropagation();
      });
  
      $(".header__icon-cart").click(function (e) {
        $(".product__list").slideToggle(500);
        $(".nav__dropdown").hide();
        $(".nav__list").css("display","none");
        $(".nav__mobile a").removeClass("active")
        e.stopPropagation();
      });
  
      $(".nav__dropdown").click(function (e) {
        e.stopPropagation();
      });
  
      $(".product__list").click(function(e){
        e.stopPropagation();
      })
  
      $("html").click(function () {
        $(".nav__dropdown").hide();
        $(".product__list").hide();
      });
      $(".nav__toggle").click(function () {
        $(".nav__list").slideToggle();
      });
      $(".nav__toggle").on("click", function () {
        this.classList.toggle("active");
      });
  
      // click menu item -> active
      $(".list__item > a").click(function () {
        $("a.item-active").removeClass("item-active");
        $(this).addClass("item-active");
      });
    });
  })(jQuery);
  