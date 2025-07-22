$(window).on('load', function() {
    $('body').scrollspy({ target: '.navbar-collapse', offset: 195 });
    $(window).on('scroll', function() { if ($(window).scrollTop() > 300) { $('.fixed-top').addClass('menu-bg'); } else { $('.fixed-top').removeClass('menu-bg'); } });
});


// dropdown-toggle class not added for submenus by current WP Bootstrap Navwalker as of November 15, 2017.
$('.dropdown-menu > .dropdown > a').addClass('dropdown-toggle');

$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
  if (!$(this).next().hasClass('show')) {
    $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
  }
  var $subMenu = $(this).next(".dropdown-menu");
  $subMenu.toggleClass('show');
  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
    $('.dropdown-menu > .dropdown .show').removeClass("show");
  });
  return false;
});

/* Scroll to Top */
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});

/* Send mail Ajax Call */
if ($("#contactForm").length > 0) {
    $('#contactForm').validator().on('submit', function(e) {
        if (e.isDefaultPrevented()) {
            // handle the invalid form...
        } else {
            e.preventDefault();
            var myform = $('#contactForm');
            var formdata = $(myform).serialize();
            var ajaxUrl = $(myform).attr('action');
            var buttonHtml = '&nbsp;&nbsp;Please Wait...&nbsp;&nbsp;<i class="fa fa-circle-o-notch fa-spin fa-fw"></i>';
            $('button[type="submit"]').attr('disabled', 'disabled');
            $('button[type="submit"]').html(buttonHtml);
            $.ajax({
                type: 'POST',
                url: ajaxUrl,
                data: new FormData(this),
                processData: false,
                contentType: false,
                success: function(data) {
                    $('#confirmModal').modal("show");
                    if (data == 'Success') {
                        $('.modal-body').html('<h3 class="text-center text-success">You message sent successfully</h3>');
                    } else {
                        $('.modal-body').html('<h3 class="text-center text-danger">There is some error in sending message!!!</h3>');
                    }
                },
                error: function() {
                    $('.modal-body').html('<h3 class="text-center text-danger">There is some error in sending message!!!</h3>');
                }
            });
        }
    });

    /* On Hide modal reload url */
    $('#confirmModal').on('hidden.bs.modal', function(e) {
        location.reload();
    });

}



/* Send mail Ajax Call */
if ($("#downloadForm").length > 0) {
    $('#downloadForm').validator().on('submit', function(e) {
        if (e.isDefaultPrevented()) {
            // handle the invalid form...
        } else {
            e.preventDefault();
            var myform = $('#downloadForm');
            var formdata = $(myform).serialize();
            var ajaxUrl = $(myform).attr('action');
            var panelbook = $("#panelbook").val();
            var buttonHtml = '&nbsp;&nbsp;Please Wait...&nbsp;&nbsp;<i class="fa fa-circle-o-notch fa-spin fa-fw"></i>';
            $('button[type="submit"]').attr('disabled', 'disabled');
            $('button[type="submit"]').html(buttonHtml);
            $.ajax({
                type: 'POST',
                url: ajaxUrl,
                data: new FormData(this),
                processData: false,
                contentType: false,
                success: function(data) {
                    $('#confirmModal').modal("show");
                    $('#myModaldownload').modal("hide");
                    if (data == 'Success') {
                        $('.modal-header').html('<strong style="font-size:18px;" id="myModalLabel">Download - Panel Book</strong><button type="button" class="close" data-dismiss="modal" aria-hidden="true">X</button>');
                        $('.modal-body').html('<div class="text-center"><a href="' + panelbook + '" class="btn btn-success" target="_blank">Download Panel Book</a></div>');
                    } else {
                        $('.modal-body').html('<h3 class="text-center text-danger">Failure!!!</h3>');
                    }
                },
                error: function() {
                    $('.modal-body').html('<h3 class="text-center text-danger">There is some error in sending message!!!</h3>');
                }
            });
        }
    });

    /* On Hide modal reload url */
    $('#confirmModal').on('hidden.bs.modal', function(e) {
        location.reload();
    });


}

/* Delaying Download with Message */
if ($(".dLink").length > 0) {
    $(".dLink").on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        var linkHref = $(this).attr('href');
        $('#downloadModal').modal("show");
        setTimeout(function() {
            $('#downloadModal').modal("hide");
            window.open(linkHref);
        }, 2000);
    });
}

/* New WOW Animation */
wow = new WOW({
  boxClass: 'wow', // default
  animateClass: 'animated', // default
  offset: 0, // default
  mobile: true, // default
  live: true, // default
});
wow.init();




/* Navbar Fixed Top on Scroll White */
$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top, .topheader, .navbar-custom, .navbar-nav, .nav-link");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});


/* On Scroll Logo Change */
$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.logo-brand img').attr('src','./assets/images/logo-vbinfotech.svg');
		}
		else {
			$('.logo-brand img').attr('src','./assets/images/logo-vbinfotech.svg');
		}
	})
});


