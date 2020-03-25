$(document).on("scroll", () => {
  $(".header").toggleClass("sticky", scrollY > 0);
});

$(function() {
  let documentEl = $(document),
    fadeElem = $(".fade-scroll");

  documentEl.on("scroll", function() {
    let currScrollPos = documentEl.scrollTop();

    fadeElem.each(function() {
      let $this = $(this),
        elemOffsetTop = $this.offset().top;
      if (currScrollPos > elemOffsetTop)
        $this.css("opacity", 1 - (currScrollPos - elemOffsetTop) / 400);
    });
  });
});

