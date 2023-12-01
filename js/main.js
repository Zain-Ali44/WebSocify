
$('.our_teams_img').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  infinite: false,
  nextArrow: '.right_arrow',
  prevArrow: '.left_arrow',
  variableWidth: false,
  responsive: [{
    breakpoint: 990,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 570,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    }
  }]
});
$('.client_feedback').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  infinite: false,
  nextArrow: '.right_arrow1',
  prevArrow: '.left_arrow2',
  variableWidth: false,
  responsive: [{
    breakpoint: 990,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 570,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      // variableWidth: true,
    }
  }]
});

