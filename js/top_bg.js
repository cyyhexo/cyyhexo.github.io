var filter = true;
var img = "/img/bg.jpg";
if (!filter) {
        $(".full_page").css({
          backgroundImage: "url(" + img + ")",
        });
      } else {
        $(".full_page").css({
          backgroundImage:
            'url("/img/bg_mask.png"), linear-gradient(60deg, rgba(255, 165, 150, 0.5) 5%, rgba(0, 228, 255, 0.35)), url(' +
            img +
            ")",
        });
      }