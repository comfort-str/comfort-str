let templatePath = '/catalog/view/theme/mariotti';
$(document).ready(function () {
  //swiper
  if (document.querySelectorAll('.swiper-container').length && typeof Swiper !== 'function') {

    if (window.pageYOffset > 0) {
      if (typeof Swiper !== 'function') {
        loadSwiper()
      }
    }
    $(window).on('scroll mousemove ontouchmove', function () {
      if (typeof Swiper !== 'function') {
        loadSwiper()
      }
    })
    setTimeout(() => {
      if (typeof Swiper !== 'function') {
        loadSwiper()
      }
    }, 5000)

    if (document.querySelectorAll('.swiper-container').length) {
      document.querySelectorAll('.swiper-container').forEach(element => {
        if (elementInViewport(element)) {
          loadSwiper()
        } else {
          if (typeof Swiper !== 'function') {
            window.addEventListener('scroll', () => {
              if (typeof Swiper !== 'function') {
                loadSwiper()
              }
            });
          }
        }
      });
    }
  }

  //PoltNextPage
  if (document.querySelectorAll('.polt_pagination').length && typeof $.fn.jscroll !== 'function') {
    if (window.pageYOffset > 0) {
      if (typeof $.fn.jscroll !== 'function') {
        loadPoltNextPage()
      }
    }
    $(window).on('mousemove', function () {
      if (typeof $.fn.jscroll !== 'function') {
        loadPoltNextPage()
      }
    })
    setTimeout(() => {
      if (typeof $.fn.jscroll !== 'function') {
        loadPoltNextPage()
      }
    }, 5000)
    if (document.querySelectorAll('.polt_pagination').length) {
      document.querySelectorAll('.polt_pagination').forEach(element => {
        if (elementInViewport(element)) {
          loadPoltNextPage()
        } else {
          if (typeof $.fn.jscroll !== 'function') {
            window.addEventListener('scroll', () => {
              if (typeof $.fn.jscroll !== 'function') {
                loadPoltNextPage()
              }
            });
          }
        }
      });
    }
  }

  //responsiveTabs
  if (document.querySelectorAll('.full_tabs').length && typeof $.fn.responsiveTabs !== 'function') {
    if (window.pageYOffset > 0) {
      if (typeof $.fn.responsiveTabs !== 'function') {
        setTimeout(() => {
          loadResponsiveTabs()
        }, 100)
      }
    }
    $(window).on('mousemove', function () {
      if (typeof $.fn.responsiveTabs !== 'function') {
        loadResponsiveTabs()
      }
    })
    setTimeout(() => {
      if (typeof $.fn.responsiveTabs !== 'function') {
        loadResponsiveTabs()
      }
    }, 5000)
    if (document.querySelectorAll('.full_tabs').length) {
      document.querySelectorAll('.full_tabs').forEach(element => {
        if (elementInViewport(element)) {
          loadResponsiveTabs()
        } else {
          if (typeof $.fn.responsiveTabs !== 'function') {
            window.addEventListener('scroll', () => {
              if (typeof $.fn.responsiveTabs !== 'function') {
                loadResponsiveTabs()
              }
            });
          }
        }
      });
    }
  }

  //Masonry
  if (document.querySelectorAll('.grid').length && typeof Masonry !== 'function') {
    if (window.pageYOffset > 0) {
      if (typeof Masonry !== 'function') {
        loadMassonry()
      }
    }
    $(window).on('mousemove', function () {
      if (typeof Masonry !== 'function') {
        loadMassonry()
      }
    })
    setTimeout(() => {
      if (typeof Masonry !== 'function') {
        loadMassonry()
      }
    }, 5000)
    if (document.querySelectorAll('.grid').length) {
      document.querySelectorAll('.grid').forEach(element => {
        if (elementInViewport(element)) {
          loadMassonry()
        } else {
          if (typeof Masonry !== 'function') {
            window.addEventListener('scroll', () => {
              if (typeof Masonry !== 'function') {
                loadMassonry()
              }
            });
          }
        }
      });
    }
  }

  //superfish
  if (document.querySelectorAll('.header__container').length && typeof $.fn.superfish !== 'function') {
    if (typeof $.fn.superfish !== 'function') {
      setTimeout(() => {
        if (typeof $.fn.superfish !== 'function') {
          loadSuperFish();
        }
      }, 5000)
    }
    if (typeof $.fn.superfish !== 'function') {
      $(window).on('scroll mousemove', function () {
        if (typeof $.fn.superfish !== 'function') {
          loadSuperFish();
        }
      })
    }
    if (typeof $.fn.superfish !== 'function') {
      $('.header__container').hover(function () {
        if (typeof $.fn.superfish !== 'function') {
          loadSuperFish();
        }
      });
    }
  }

  //send
  if (!document.querySelector('link[href*="send.css"]')) {
    if (window.pageYOffset > 0) {
      if (!document.querySelector('script[src*="send.js"]')) {
        poltLoadSend()
      }
    }
    setTimeout(() => {
      poltLoadSend()
    }, 5000)
    $(window).on('scroll mousemove', function () {
      if (!document.querySelector('script[src*="send.js"]')) {
        poltLoadSend()
      }
    })
    $(document).on('hover', '.btn_pop, .popup-youtube, .submit, .gal', function (e) {
      if (!document.querySelector('script[src*="send.js"]')) {
        poltLoadSend()
      }
    });
    $(document).on('click tap', '.btn_pop, .popup-youtube, .submit, .choose_pop, .rattan__img-btn, .gal', function (e) {
      if (!document.querySelector('script[src*="send.js"]')) {
        e.preventDefault();
        $('.polt-btn-click-load-script').removeClass('polt-btn-click-load-script')

        const btn = $(this);
        btn.addClass('polt-btn-click-load-script');

        poltLoadSend(() => {
          setTimeout(() => {
            btn.trigger('click');
          }, 100)
        })
      }
    });

  }

  //Photoswipe
  // if (document.querySelectorAll('.gal').length && !document.querySelector('link[href*="photoswipe.css"]')) {
  //     if (window.pageYOffset > 0) {
  //         if (typeof PhotoSwipe !== 'function') {
  //             loadPhotoswipe()
  //         }
  //     }
  //     setTimeout(() => {
  //         if (typeof PhotoSwipe !== 'function') {
  //             loadPhotoswipe()
  //         }
  //     }, 5000)
  //     $(window).on('scroll mousemove', function () {
  //         if (typeof PhotoSwipe !== 'function') {
  //             loadPhotoswipe()
  //         }
  //     })
  //     $(document).on('hover', '.gal', function (e) {
  //         if (typeof PhotoSwipe !== 'function') {
  //             loadPhotoswipe()
  //         }
  //     });
  //
  //     // $(document).on('click tap', '.gal', function (e) {
  //     //     if (typeof PhotoSwipe !== 'function') {
  //     //         e.preventDefault();
  //     //         let btn = $(this);
  //     //         loadPhotoswipe(() => {
  //     //             setTimeout(() => {
  //     //                 btn.trigger('click');
  //     //             }, 100)
  //     //         })
  //     //     }
  //     // });
  //
  //     $(document).on('click tap', '.gal', function (e) {
  //         if (typeof PhotoSwipe !== 'function') {
  //             e.preventDefault();
  //             $('.polt-btn-click-load-script').removeClass('polt-btn-click-load-script')
  //             const btn = $(this);
  //             btn.addClass('polt-btn-click-load-script');
  //             loadPhotoswipe()
  //         }
  //     });
  //
  // }

  //mob menu
  if (document.querySelectorAll('[data-offcanvas-trigger]').length && typeof $.fn.offcanvas !== 'function') {
    if (window.pageYOffset > 0) {
      if (!document.querySelector('link[href*="js-offcanvas.css"]')) {
        poltLoadPoltMobMenu()
      }
    }

    setTimeout(() => {
      if (typeof $.fn.offcanvas !== 'function') {
        poltLoadPoltMobMenu()
      }
    }, 5000)

    $(window).on('scroll mousemove ontouchmove', function () {
      if (typeof $.fn.offcanvas !== 'function') {
        poltLoadPoltMobMenu()
      }
    })
    //
    // $(document).on('hover', '.header__container, .polt-off__open-close', function (e) {
    //     if (!document.querySelector('link[href*="js-offcanvas.css"]')) {
    //         poltLoadPoltMobMenu()
    //     }
    // });

    $(document).on('click tap', '[data-offcanvas-trigger]', function (e) {
      if (typeof $.fn.offcanvas !== 'function') {
        e.preventDefault();
        let btn = $(this);
        poltLoadPoltMobMenu(() => {
          setTimeout(() => {
            btn.trigger('click');
          }, 100)
        })
      }
    });

    // $(document).on('click tap', '[data-offcanvas-trigger]', function (e) {
    //     e.preventDefault();
    //     if (typeof $.fn.offcanvas !== 'function') {
    //         $('.polt-btn-click-load-script').removeClass('polt-btn-click-load-script')
    //         const btn = $(this);
    //         btn.addClass('polt-btn-click-load-script');
    //         poltLoadPoltMobMenu()
    //     }
    // });
  }

});

function loadSwiper (callback) {
  if (typeof Swiper === 'function') {
    if (callback) {
      callback();
    }
  } else {
    poltLoadCss(function () {
      loadScript(templatePath + '/js/swiper.min.js', () => {
        onloadCSS(loadCSS(templatePath + '/stylesheet/swiper.css'), () => {
          setTimeout(() => {
            // if ($('.swiper__banner').length) {
            //     $('.swiper__banner').each(function () {
            //         var wrapper = $(this).closest('.banner');
            //         new Swiper($(this), {
            //             slidesPerView: 1,
            //             spaceBetween: 30,
            //             autoHeight: true,
            //             watchSlidesVisibility: true,
            //             // loop: true,
            //             parallax: true,
            //             speed: 1000,
            //             // centeredSlides: true,
            //             pagination: {
            //                 el: '.swiper-pagination-banner',
            //                 clickable: true,
            //             },
            //             navigation: {
            //                 nextEl: wrapper.find('.swiper-banner-next'),
            //                 prevEl: wrapper.find('.swiper-banner-prev'),
            //             },
            //             // Responsive breakpoints
            //             // breakpoints: {
            //             //     575: {
            //             //         slidesPerView: 2,
            //             //         spaceBetween: 10
            //             //     },
            //             // }
            //             // end  Responsive breakpoints
            //         });
            //     })
            // }
            if ($('.swiper__product_item').length) {
              $('.swiper__product_item').each(function () {
                var wrapper = $(this).closest('.ptoduct_item__wrap');
                new Swiper($(this), {
                  slidesPerView: 5,
                  spaceBetween: 1,
                  autoHeight: true,
                  watchSlidesVisibility: true,
                  watchOverflow: true,
                  watchSlidesProgress: true,
                  // centeredSlides: true,
                  pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                  },
                  navigation: {
                    nextEl: wrapper.find('.swiper-button-next'),
                    prevEl: wrapper.find('.swiper-button-prev'),
                  },
                  // Responsive breakpoints
                  breakpoints: {
                    // when window width is <= 767px
                    767: {
                      slidesPerView: 1,
                    },
                    // when window width is <= 767px
                    992: {
                      slidesPerView: 2,
                    },
                    // when window width is <= 1400
                    1500: {
                      slidesPerView: 3,
                    },
                    // when window width is <= 1520 px
                    1810: {
                      slidesPerView: 4,
                    },
                  }
                  // end  Responsive breakpoints
                });
              })
            }
            apartmentGal('.slider-big-product', '.swiper-container__theme_slider-big-product', '.gallery-thumbs-product');
            if (callback) {
              callback();
            }
          }, 100)
        });
      });
    });
  }
}

function loadPoltNextPage (callback) {
  if (typeof $.fn.jscroll === 'function') {
    if (callback) {
      callback();
    }
  } else {
    poltLoadCss(function () {
      loadScript(templatePath + '/js/polt_nex_page/js.cookie.js', () => {
        loadScript(templatePath + '/js/polt_nex_page/jquery.jscroll.min.js', () => {
          loadScript(templatePath + '/js/polt_nex_page/polt_next_page.js', () => {
            setTimeout(() => {
              if (callback) {
                callback();
              }
            }, 100)
          });
        });
      });
    });
  }
}

function loadSuperFish () {
  poltLoadCss(() => {
    if (typeof $.fn.superfish !== 'function') {
      loadScript(templatePath + '/js/superfish.min.js', () => {
        onloadCSS(loadCSS(templatePath + '/stylesheet/superfish.css?v=2'), () => {
          $('.sf-menu').superfish({
            delay: 400, // one second delay on mouseout
            animation: {
              opacity: 'show'
            }, // анимация выпадающего меню height:'show'
            speed: 'fast', // faster animation speed
            autoArrows: false,
            onBeforeShow: function () {
              // $('<div class="menu_overlay"></div>').appendTo('body');
            },
            onBeforeHide: function () {
              // $('.menu_overlay').remove();
            }
          });
        });
      });
    }
  });
}

function poltLoadSend (callback) {
  if (document.querySelector('link[href*="send.css"]') && typeof $.fn.magnificPopup === 'function') {
    if (callback) {
      callback();
    }
  } else {
    poltLoadCss(() => {
      if (!document.querySelector('link[href*="send.css"]')) {
        onloadCSS(loadCSS('../../../../../send/css/send.css'), () => {
          if (!document.querySelector('link[href*="magnific-popup.css"]')) {
            onloadCSS(loadCSS('../../../../../send/css/vendor/magnific-popup.css'), () => {
              loadScript('/send/js/vendor/jquery.magnific-popup.min.js', () => {
                loadScript('/send/js/vendor/jquery.maskedinput.min.js', () => {
                  loadScript('/send/js/send.js', () => {
                    $('.popup-youtube').magnificPopup({
                      type: 'iframe',
                      mainClass: 'mfp-fade',
                      removalDelay: 160,
                      preloader: false,
                      fixedContentPos: false
                    });
                    jQuery(document).on('click', '.choose_pop', function (e) {
                      e.preventDefault();
                      $(this).trigger('click')
                    });

                    let startRattangScroll = 0
                    jQuery('.choose_pop').click(function (e) {
                      e.preventDefault();
                      if ($('.options-popup').css('display') !== 'none') {
                        startRattangScroll = jQuery('.rattan__popup-form-w').scrollTop();
                        jQuery('.rattan__popup-form-w').scrollTop(startRattangScroll);
                      }
                      $('.choose_pop').magnificPopup({
                        removalDelay: 0,
                        tClose: 'Закрыть (Esc)',
                        tLoading: 'Загрузка...',
                        fixedContentPos: true,
                        fixedBgPos: true,
                        overflowY: 'auto',
                        callbacks: {
                          elementParse: function (item) {
                            let btn = $(item.el);
                            let popupId = $(item.src);
                            let popupTitle = btn.attr('data-title') ?? btn.text();
                            let popupImage = btn.attr('data-image') ?? false;
                            let popupChooseId = btn.attr('data-input_id');
                            $(popupId).find('.rattan__title-popup').html(popupTitle);
                            $(popupId).find('.rattan__img-btn').attr('data-input_id', popupChooseId);
                            if (popupImage) {
                              $(popupId).find('.rattan__img-pop').attr('src', popupImage);
                            }


                            if (startRattangScroll) {
                              setTimeout(() => {
                                jQuery('.rattan__popup-form-w').scrollTop(startRattangScroll);
                              }, 0)
                            }
                          },
                          beforeOpen: function () {
                            startWindowScroll = jQuery(window).scrollTop();
                            this.st.mainClass = this.st.el.attr('data-effect');
                            jQuery(window).trigger('resize');
                            jQuery('body').addClass('mfp-active');
                          },
                          open: function () {

                            if (jQuery('.mfp-content').height() < jQuery(window).height()) {
                              jQuery('body').on('touchmove', function (e) {
                                e.preventDefault();
                              });
                            }
                          },
                          beforeClose: function () {
                            jQuery('.rattan__popup-form-w').scrollTop(0);
                            jQuery('body').removeClass('mfp-active');
                            jQuery(window).scrollTop(startWindowScroll);
                            jQuery('body').off('touchmove');
                          },
                        },
                        midClick: true
                      })
                    });

                    $(document).on('click', '.rattan__img-btn', function (e) {
                      e.preventDefault();
                      let popupChooseId = $(this).attr('data-input_id');
                      let input = $('.' + popupChooseId).find('input');
                      let inputImgSrc = $('.' + popupChooseId).find('img').attr('src');
                      let inputNameText = $('.' + popupChooseId).find('.rattan__name').text();
                      let select = $('.' + popupChooseId).closest('.form-group-polt');
                      let selectImg = select.find('.rattan__color-img');
                      let selectName = select.find('.rattan__color-name');
                      selectImg.attr('src', inputImgSrc);
                      selectName.text(inputNameText);

                      $('.rattan_popup-all').removeClass('active');
                      input.prop('checked', true).trigger('change');
                      $('.polt_discount_w_in div').trigger('change');
                      fixBarCopyPrice()
                      $.magnificPopup.close();
                    });


                    $(document).on('click', '.ciattach_images a', function (e) {
                      e.preventDefault()
                      $('.ciattach_images').each(function () {
                        $(this).magnificPopup({
                          type: 'image',
                          delegate: 'a',
                          gallery: {
                            enabled: true
                          }
                        });
                      });
                      $(this).trigger('click')
                    })
                    $(document).on('click', '.cireviewattach_images a', function (e) {
                      e.preventDefault()
                      $('.cireviewattach_images').each(function () {
                        $(this).magnificPopup({
                          type: 'image',
                          delegate: 'a',
                          gallery: {
                            enabled: true
                          }
                        });
                      });
                      $(this).trigger('click')
                    })

                    $(document).on('click', '.gal', function (e) {
                      e.preventDefault();
                      $('a.gal').each(function () {
                        var gal = $(this).attr('rel');
                        $('a[rel="' + gal + '"]').magnificPopup({
                          type: 'image',
                          mainClass: 'mfp-with-zoom',
                          tLoading: '',
                          zoom: {
                            enabled: true, duration: 300, easing: 'ease-in-out', opener: function (openerElement) {
                              return openerElement.is('img') ? openerElement : openerElement.find('img');
                            }
                          },
                          callbacks: {
                            elementParse: function (item) {
                            }, beforeOpen: function () {
                              this.wrap.addClass(this.st.el.attr('data-effect'));
                            }, removalDelay: 300, open: function () {
                              $.magnificPopup.instance.next = function () {
                                var self = this;
                                self.wrap.removeClass('opa mfp-s-ready zoomIn');
                                self.wrap.find('.mfp-content').removeClass('animated fadeInLeft').addClass('animated fadeOutLeft');
                                setTimeout(function () {
                                  $.magnificPopup.proto.next.call(self);
                                }, 200);
                                setTimeout(function () {
                                  self.wrap.find('.mfp-content').removeClass('animated fadeOutLeft').addClass('animated fadeInRight');
                                }, 200);
                              }
                              $.magnificPopup.instance.prev = function () {
                                var self = this;
                                self.wrap.removeClass('opa mfp-s-ready zoomIn');
                                self.wrap.find('.mfp-content').removeClass('animated fadeInRight').addClass('animated fadeOutRight');
                                setTimeout(function () {
                                  $.magnificPopup.proto.prev.call(self);
                                }, 200);
                                setTimeout(function () {
                                  self.wrap.find('.mfp-content').removeClass('animated fadeOutRight').addClass('animated fadeInLeft');
                                }, 200);
                              }
                            }, beforeClose: function () {
                              var self = this;
                              self.wrap.find('.mfp-content').addClass('opa animated zoomOut');
                            }, open: function () {
                              $('body').addClass('mfp-zoom-out-cur');
                            }, close: function () {
                              $('body').removeClass('mfp-zoom-out-cur');

                            }
                          },
                          gallery: {
                            enabled: true,
                            preload: [0, 2],
                            navigateByImgClick: true,
                            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                            tPrev: 'Пред (Стрелочка влево)',
                            tNext: 'След (Стрелочка вправо)',
                            tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
                          }
                        });
                      });
                      $(this).trigger('click');
                    });

                    poltTriggerScriptBtn()
                    if (callback) {
                      callback();
                    }
                  });
                });
              });
            });
          }
        });
      }
    });
  }
}

function loadPhotoswipe (callback) {
  if (typeof PhotoSwipe === 'function') {
    if (callback) {
      callback();
    }
  } else {
    poltLoadCss(() => {
      if (!document.querySelector('link[href*="photoswipe.css"]')) {
        onloadCSS(loadCSS(templatePath + '/stylesheet/photoswipe.css'), () => {
          if (!document.querySelector('link[href*="default-skin/default-skin.css"]')) {
            onloadCSS(loadCSS(templatePath + '/stylesheet/default-skin/default-skin.css'), () => {
              loadScript(templatePath + '/js/photoswipe.min.js', () => {
                loadScript(templatePath + '/js/photoswipe-ui-default.min.js', () => {
                  $(document).on('click', '.gal', function (e) {
                    e.preventDefault();
                    const btn = $(this);
                    if (!btn.attr('data-size')) {
                      photoSwipeItems(btn, () => {
                        photoSwipeInit(btn)
                      })
                    } else {
                      photoSwipeInit(btn)
                    }
                  });
                  poltTriggerScriptBtn()
                  if (callback) {
                    callback();
                  }
                });
              });
            });
          }
        });
      }
    });
  }
}

function loadMassonry (callback) {
  if (typeof Masonry === 'function') {
    if (callback) {
      callback();
    }
  } else {
    poltLoadCss(() => {
      loadScript(templatePath + '/js/imagesloaded.pkgd.min.js', () => {
        loadScript(templatePath + '/js/masonry.pkgd.min.js', () => {
          setTimeout(() => {
            if (document.querySelector('.grid')) {
              let grid = document.querySelector('.grid');
              let msnry;

              imagesLoaded(grid, function () {
                msnry = new Masonry(grid, {
                  itemSelector: '.grid-item',
                  // columnWidth: '.grid-sizer',
                  percentPosition: true
                });
              });
            }
            if (callback) {
              callback();
            }
          }, 100)
        });
      });
    });
  }
}

function poltLoadPoltMobMenu (callback) {
  if (document.querySelector('link[href*="js-offcanvas.css"]')) {
    if (callback) {
      callback();
    }
  } else {
    poltLoadCss(() => {
      if (!document.querySelector('link[href*="js-offcanvas.css"]')) {
        onloadCSS(loadCSS(templatePath + '/stylesheet/js-offcanvas.css'), () => {
          onloadCSS(loadCSS(templatePath + '/stylesheet/slicknav.css?v=6'), () => {
            loadScript(templatePath + '/js/modernizr.js', () => {
              loadScript(templatePath + '/js/jquery.slicknav.js', () => {
                loadScript(templatePath + '/js/js-offcanvas.pkgd.min.js', () => {
                  loadScript(templatePath + '/js/jquery.touchSwipe.min.js', () => {
                    loadScript(templatePath + '/js/polt_menu.js', () => {
                      poltTriggerScriptBtn()
                      if (callback) {
                        callback();
                      }
                    });
                  });
                });
              });
            });
          });
        });
      }
    });
  }
}

function loadResponsiveTabs (callback) {
  if (document.querySelector('link[href*="responsive-tabs.css"]')) {
    if (callback) {
      callback();
    }
  } else {
    poltLoadCss(() => {
      onloadCSS(loadCSS(templatePath + '/stylesheet/responsive-tabs.css'), () => {
        loadScript(templatePath + '/js/jquery.responsiveTabs.min.js', () => {
          setTimeout(() => {
            if ($(".full_tabs").length) {
              $('.full_tabs').responsiveTabs({
                startCollapsed: 'accordion',
                activate: function (event, tab) {
                  poltSticky();
                  setTimeout(() => {
                    $(window).trigger('resize')
                  }, 100)
                  if (tab._ignoreHashChange) {
                    $("html, body").animate({
                      scrollTop: $(event.currentTarget).find(".r-tabs-accordion-title.r-tabs-state-active").offset().top
                    }, 0);
                  }
                },
                activateState: function (event, tab) {
                  poltSticky();
                  setTimeout(() => {
                    $(window).trigger('resize')
                  }, 100)
                },
                click: function (event, tab) {
                  poltSticky();
                  setTimeout(() => {
                    $(window).trigger('resize')
                  }, 100)
                }
              });
            }
            if (callback) {
              callback();
            }
          }, 100)
        });
      });
    });
  }
}

function poltLoadCss (callback) {
  if (typeof loadCSS === 'function' && typeof onloadCSS === 'function') {
    if (callback) {
      callback();
    }
  } else {
    loadScript(templatePath + '/js/loadCSS.js', () => {
      loadScript(templatePath + '/js/onloadCSS.js', () => {
        onloadCSS(loadCSS(templatePath + '/fonts/fontawesome/css/font-awesome.min.css'), () => {
          if (callback) {
            callback();
          }
        });
      });
    });
  }
}

function loadScript (url, callback, loaded) {
  let selector = 'script[src*="' + url + '"]';
  if (!document.querySelector(selector)) {
    let script = document.createElement("script");
    script.type = 'text/javascript';

    if (script.readyState) {  //IE
      script.onreadystatechange = function () {
        if (script.readyState === 'loaded' ||
          script.readyState === 'complete') {
          script.onreadystatechange = null;
          if (callback) {
            callback();
          }
        }
      };
    } else {  //Others
      script.onload = function () {
        if (callback) {
          callback();
        }
      };
    }

    script.src = url;
    document.body.appendChild(script);
  } else if (loaded) {
    loaded();
  }
}

function elementInViewport (el) {
  let top = el.offsetTop;
  let left = el.offsetLeft;
  let width = el.offsetWidth;
  let height = el.offsetHeight;

  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
}


$(document).ready(function () {
  if (typeof poltorReviewsFunction === 'function') {
    poltorReviewsFunction()
  }
  document.querySelectorAll('.iframe-lazy').forEach((el) => {
    $(window).on('scroll', function () {
      if (elementInViewport(el)) {
        let dataSrc = el.getAttribute('data-src')
        if (dataSrc) {
          console.log()
          el.setAttribute('src', dataSrc)
          el.removeAttribute('data-src')
        }
      }

    })
  })

  setTimeout(() => {
    $('.xs-bg').remove()
  }, 5000)
  //sticky_kit
  if ($("[data-sticky_column]").length && $("[data-sticky_parent]").length) {
    poltSticky();
    $(window).on('load resize', function () {
      poltSticky();
    });
  }
  // end sticky_kit


  // cat_menu
  $('.cat_menu').hover(
    function () {
      $('<div class="menu_overlay"></div>').appendTo('body');
    },
    function () {
      setTimeout(function () {
        $('.menu_overlay').remove();
      }, 100)
    }
  )
  // end cat_menu


  $(window).on('load', function () {
    $('.card__image:not(.lightSlider)').lightSlider({
      adaptiveHeight: true,
      gallery: true,
      item: 1,
      slideMargin: 0,
      galleryMargin: 10, // отступ превью от основного фото
      thumbMargin: 10, // отступ между превью
      thumbItem: 10, // количество превью
      controls: true, // стрелки влево, вправо
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            thumbItem: 5,
          },
        },
        {
          breakpoint: 991,
          settings: {
            controls: false, // стрелки влево, вправо
            thumbItem: 5,
          },
        }
      ]
    });
  })


  if (typeof poltOcFilter === 'function') {
    poltOcFilter();
  }
  discountEach('.rattan__popup-form-w input, .polt_quantity', '#button-cart');


  $('.form-group-polt').each(function () {
    $(this).find('.polt_label, select, input').on('click change', function () {
      var input_prop = $(this).find('input').prop('checked');
      var check_w = $(this).find('.check_w');
      if (input_prop) {
        check_w.addClass('checked')
      } else {
        check_w.removeClass('checked')
      }
      $(this).closest('.polt_discount_w').find('.polt_discount_w_in .polt_quantity').trigger('change');
    });
  });


  // jQuery(document).on('click', '.choose_pop', function (e) {
  //     e.preventDefault();
  //     let btn = $(this);
  //     let startWindowScroll = 0;
  //     let popupId = $(this.hash);
  //     let popupTitle = btn.attr('data-title') ?? btn.text();
  //     let popupImage = btn.attr('data-image') ?? false;
  //     let popupChooseId = btn.attr('data-input_id');
  //     if (popupChooseId) {
  //         $(popupId).find('.rattan__title-popup').html(popupTitle);
  //         $(popupId).find('.rattan__img-pop').attr('src', popupImage);
  //         $(popupId).find('.rattan__img-btn').attr('data-input_id', popupChooseId);
  //     }
  //
  //
  //     btn.magnificPopup({
  //         removalDelay: 500,
  //         tClose: 'Закрыть (Esc)',
  //         tLoading: 'Загрузка...',
  //         fixedContentPos: true,
  //         fixedBgPos: true,
  //         overflowY: 'auto',
  //         callbacks: {
  //             beforeOpen: function () {
  //                 startWindowScroll = jQuery(window).scrollTop();
  //                 this.st.mainClass = this.st.el.attr('data-effect');
  //                 jQuery(window).trigger('resize');
  //                 jQuery('body').addClass('mfp-active');
  //             },
  //             open: function () {
  //                 if (jQuery('.mfp-content').height() < jQuery(window).height()) {
  //                     jQuery('body').on('touchmove', function (e) {
  //                         e.preventDefault();
  //                     });
  //                 }
  //             },
  //             beforeClose: function () {
  //                 jQuery('body').removeClass('mfp-active');
  //                 jQuery(window).scrollTop(startWindowScroll);
  //                 jQuery('body').off('touchmove');
  //             },
  //         },
  //         midClick: true
  //     })
  //     btn.trigger('click');
  // });


  // $(document).on('click', '.polt-choice-label', function (e) {
  //     let popupChooseId = $(this).attr('data-input_id');
  //     let input = $(this).find('input');
  //     let inputImgSrc = $(this).find('img').attr('src');
  //     let inputNameText = $(this).find('.rattan__name').text();
  //     let id = $(this).closest('.white-popup').attr('id');
  //     let select = $('#choice-' + id).closest('.form-group-polt');
  //     let selectImg = select.find('.rattan__color-img');
  //     let selectName = select.find('.rattan__color-name');
  //     selectImg.attr('src', inputImgSrc);
  //     selectName.text(inputNameText);
  //
  //     input.prop('checked', true).trigger('change');
  //     $('.polt_quantity').trigger('change');
  //     $.magnificPopup.close();
  // });

  // $(document).on('click', '.rattan__color-box', function (e) {
  //     e.preventDefault();
  //     let popup = $(this).closest('.rattan__char-box').find('.rattan_popup-all');
  //
  //     if (popup.hasClass('active')) {
  //         $('.rattan_popup-all').removeClass('active');
  //     } else {
  //         $('.rattan_popup-all').removeClass('active');
  //         popup.addClass('active');
  //     }
  // })
  //
  // $(document).on('click', '.rattan__close', function (e) {
  //     e.preventDefault();
  //     $(this).closest('.rattan_popup-all').removeClass('active')
  // })

  $(document).on('click', '.polt-off__open-close', function (e) {
    e.preventDefault();
    const id = $(this).attr('href');
    poltOffOpenClose(id);
  });
  poltCopyReview()

  $(document).on('click', 'a.slide-to', function () {
    let target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 800);
      return false;
    }
  });

  $(document).on('click', '.slide-to-tab', function (e) {
    e.preventDefault();
    var target = ($(".r-tabs-tab a[href='" + $(this.hash).get("selector") + "']").is(":visible") ? $(".r-tabs-tab a[href='" + $(this.hash).get("selector") + "']") : $(".r-tabs-accordion-title a[href='" + $(this.hash).get("selector") + "']"));
    target.trigger("click");
    if (target.length) {
      $("html,body").animate({ scrollTop: target.offset().top - 6 }, 500);
      return false;
    }
  });

  $(document).on('click', '.polt-wishlist__open-close', function (e) {
    e.preventDefault();
    loadWishListData();
    poltOffOpenClose($(this.hash));
  });

  $(document).on('click', '.wl-loading-wrapper .wm-remove', function (e) {
    e.preventDefault();
    removeProductFromWishListByLink($(this).attr('href'));
  });

  // inlineSVG.init({
  //     svgSelector: 'img.internal__img',
  //     initClass: 'js-inlinesvg',
  // });

  document.addEventListener('click', e => {
    if (!e.target.matches('.polt-off') && !e.target.matches('.polt-off *') && !e.target.matches('a') && !e.target.matches('a *')) {
      poltOffOpenClose('#' + $('.polt-off__state_open').attr('id'), false, true)
    }
  })
  $('.mob_fixed_bar .cart-total').text($('#cart-total').text());
});


function discountEach (trigger, btn_polt) {
  $('.polt_discounts').hide();
  $(document).on('change paste keydown keypress keyup click blur', trigger, function (e) {
    let btn_class = $(this).attr('class');
    let min_val = parseInt($(this).closest('.polt_discount_w_in').find('.polt_minimun').val());
    let buy_val = parseInt($(this).closest('.polt_discount_w_in').find('.polt_quantity').val()) ? parseInt($(this).closest('.polt_discount_w_in').find('.polt_quantity').val()) : 1;
    let buy_val_ml = parseInt($(this).closest('.polt_discount_w_in').find('.polt_quantity').val());
    let polt_discount_w = $(this).closest('.polt_discount_w');
    let discount = polt_discount_w.find('.polt_discount');
    let buy_btn = polt_discount_w.find(btn_polt);
    let product_id = parseInt($(this).closest('.polt_discount_w_in').find('.polt_id').val());
    let checked_options = 0;

    $(this).on('mouseleave', function () {
      if (buy_val_ml < min_val || !buy_val_ml) {
        buy_val_ml = min_val;
        $(this).val(buy_val_ml);
      }
    });

    $(this).closest('.polt_discount_w').find('.card_option_sec .form-group-polt').each(function () {
      let option_price_int_val = 0;
      option_price_prefix = '';
      polt_option_text = '';
      prod_weight = '';
      option_price_prefix = '+';
      if ($(this).find('input').length && $(this).find('input:checked').val() && $(this).find('.option_price_int').length) {

        option_price_prefix = $(this).find('.option_price_prefix').text();
        option_price_int_val = parseInt($(this).find('input:checked').closest('div').find('.option_price_int').text()) ? parseInt($(this).find('input:checked').closest('div').find('.option_price_int').text()) : 0;
        polt_option_text = $(this).find('input:checked').parent().find('.polt_option_text').text();
        prod_weight = $(this).closest('.polt_product_info').find('.weight_polt');
        if (prod_weight.length && polt_option_text) {
          prod_weight.html(polt_option_text);
        }
        if (option_price_prefix === "-") {
          checked_options -= option_price_int_val;
        } else {
          checked_options += option_price_int_val;
        }
      }

      if ($(this).find('select').length && $(this).find('option:selected') && $(this).find('option:selected').attr('data-option_price_int')) {
        option_price_prefix = $(this).find('option:selected').attr('data-option_price_prefix');
        if (option_price_prefix == '-') {
          checked_options -= parseInt($(this).find('option:selected').attr('data-option_price_int'));
        } else {
          checked_options += parseInt($(this).find('option:selected').attr('data-option_price_int'));
        }
      }
    });
    var option_price_int = $('.polt_checkbox').find('input').prop('checked') ? parseInt($('.polt_checkbox').find('.option_price_int').text()) : 0;

    if (btn_class === 'plus_card') {
      buy_val++;
    }
    if (btn_class === 'minus_card' && buy_val > min_val) {
      buy_val--;
    }

    polt_discount_w.find('.polt_quantity').val(buy_val);
    discount.each(function () {
      var discount_price = $(this).find('.discount_price').html();
      var discount_price_old = $(this).find('.discount_price_old').html();
      var discount_int = parseInt($(this).find('.discount_int').text());
      var discount_int_old = parseInt($(this).find('.discount_int_old').text());
      var discount_price_option_num = discount_int + checked_options;
      var discount_price_option_num_old = discount_int_old + checked_options;
      $(this).find('.discount_price_option_num').text(discount_price_option_num);
      $(this).find('.discount_price_option_num_old').text(discount_price_option_num_old);
      var price_cur = $('.currency_arr .symbol_right').html();
      var price_int = parseInt($(this).find('.discount_int').text());
      var price_int_old = parseInt($(this).find('.discount_int_old').text());
      var discount_price_option = parseInt(checked_options) !== 0 ? parseInt($(this).find('.discount_price_option_num').text()) : price_int;
      var discount_price_option_old = parseInt(checked_options) !== 0 ? parseInt($(this).find('.discount_price_option_num_old').text()) : price_int_old;

      if (buy_val >= parseInt($(this).find('.discount_qnt').text())) {
        discount_price_option = discount_price_option !== '' ? parseInt(discount_price_option) : parseInt(price_int);

        polt_discount_w.find('.polt_price').html(discount_price_option * buy_val + ' <span class="card__price-grn">' + price_cur + '</span>');
        polt_discount_w.find('.polt_price_old').html(discount_price_option_old * buy_val + ' <span class="card__price-grn">' + price_cur + '</span>');
        return;
      }
    });

    // buy_btn.attr("onclick", "cart.add('" + product_id + "', '" + buy_val + "');");
  });
}

function poltOffOpenClose (id, onlyOpen = false, onlyClose = false) {
  let btn = $('a[href="' + id + '"]')
  if (onlyClose === true) {
    $(id).removeClass('polt-off__state_open');
    setTimeout(() => {
      $(id).addClass('polt-off__state_close');
      $('.polt-off-bg').remove()
      $('.polt-off-blur').removeClass('polt-off-blur')
    }, 500);
    btn.removeClass('active')
    $('html').removeClass('ovhi polt-off__open-wrapper');
    return;
  }
  if ($(id).hasClass('polt-off__state_close')) {
    $(id).removeClass('polt-off__state_close');
    $(id).addClass('polt-off__state_open');
    btn.addClass('active')
    $('html').addClass('ovhi polt-off__open-wrapper');
    $('<div class="polt-off-bg"></div>').appendTo('body');
    $('body > *:not(.polt-off__state_open)').addClass('polt-off-blur')
  } else {
    if (onlyOpen === true) {
      return;
    }
    $(id).removeClass('polt-off__state_open');
    btn.removeClass('active')
    setTimeout(() => {
      $(id).addClass('polt-off__state_close');
      $('.polt-off-bg').remove()
      $('.polt-off-blur').removeClass('polt-off-blur')
    }, 500);
    $('html').removeClass('ovhi polt-off__open-wrapper');
  }
}

function poltCopyReview () {
  if (!$('#tab-description').length || !$('.cireview-wrap').length || $('.copied_rev').length) {
    return;
  }
  let i = 0;
  $('<div class="cireview-wrap copied_rev"></div>').appendTo('#tab-description');
  $('<a class="btn__reviews btn_curtain slide-to-tab" href="#tab-review"> Читать все отзывы </a>').insertAfter('.copied_rev');
  $('#tab-review .cireview-wrap .cireview-list').each(function () {
    if (i <= 2) {
      $(this).clone().appendTo('#tab-description .copied_rev');
    } else {
      return;
    }
    i++;
  });
}

function poltSticky () {
  if (window.matchMedia('(max-width: 992px)').matches) {
    if ($('.is_stuck').length) {
      $('.is_stuck').trigger("sticky_kit:detach");
    }
  } else {
    $("[data-sticky_column]").stick_in_parent({
      parent: "[data-sticky_parent]",
      offset_top: 20,
    });
  }
}

function addGlobalEventListener (type, selector, callback) {
  document.addEventListener(type, e => {
    if (e.target.matches(selector)) callback(e)
  })
}

function getImageDimension (src, onReady) {
  let image = new Image();
  image.onload = function () {
    if (typeof (onReady) == 'function') {
      onReady({
        width: image.width,
        height: image.height
      });
    }
  };
  image.src = src;
}

function getProductTabDescription () {
  $('.product-information__tab-section').each(function () {
    url = $(this).data('url')
    url += ' .page-content-wrapper';
    $(this).load(url, function () {
      $(this).find('.page-content-wrapper').contents().unwrap();
    })
  })
}

$(document).ready(function () {
  fixBarCopyPrice()
  $(document).on('click', '.fixed_bar_buy', function (e) {
    e.preventDefault()
    $('.card__btn-basket').trigger('click')
  })

  if ($('.product-information__tab-section')) {
    getProductTabDescription()
  }

  if (document.querySelector('.card__btn-all')) {
    new Waypoint.Inview({
      element: document.querySelector('.card__btn-all'),
      enter: t => {
      },
      entered: e => {
        $('.product_mob_fixed_bar').removeClass('fixed-bar-show').addClass('fixed-bar-hidden')
      },
      exit: e => {
      },
      exited: e => {
        $('.product_mob_fixed_bar').removeClass('fixed-bar-hidden').addClass('fixed-bar-show')
      }
    });
  }
});

function fixBarCopyPrice () {
  if ($('.fixed_bar_col_price .card__price-all')) {
    $('.fixed_bar_col_price .card__price-all').remove();
  }
  $('.card__price-all').clone().appendTo('.fixed_bar_col_price')
}


function photoSwipeItems (link, callback) {
  let gal = link.attr('rel');
  let elements = gal && gal !== '' ? 'a[rel="' + gal + '"]' : link;
  let i = 0
  $(elements).each(function () {
    let src = $(this).attr('href');
    let $this = $(this);
    if (!$this.attr('data-size')) {
      getImageDimension(src, (image) => {
        $this.attr('data-size', image.width + 'x' + image.height)
        i++
        if (i === $(elements).length) {
          callback()
        }
      })
    } else {
      callback()
    }
  });
}

function photoSwipeInit (link) {
  if (!$('.pswp').length) {
    $('<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"> <div class="pswp__bg"></div> <div class="pswp__scroll-wrap"> <div class="pswp__container"> <div class="pswp__item"></div> <div class="pswp__item"></div> <div class="pswp__item"></div> </div> <div class="pswp__ui pswp__ui--hidden"> <div class="pswp__top-bar"> <div class="pswp__counter"></div> <button class="pswp__button pswp__button--close" title="Close (Esc)"></button> <button class="pswp__button pswp__button--share" title="Share"></button> <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button> <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button> <div class="pswp__preloader"> <div class="pswp__preloader__icn"> <div class="pswp__preloader__cut"> <div class="pswp__preloader__donut"></div> </div> </div> </div> </div> <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"> <div class="pswp__share-tooltip"></div> </div> <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"> </button> <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"> </button> <div class="pswp__caption"> <div class="pswp__caption__center"></div> </div> </div> </div> </div>').appendTo('body')
  }
  var index = 0;
  var items = [];
  var gal = link.attr('rel');
  var href = link.attr('href');
  var elements = gal && gal !== '' ? 'a[rel="' + gal + '"]' : link;
  var i = 0;
  $(elements).each(function () {
    if ($(this).find('img').attr('width') && $(this).find('img').attr('height')) {
      var width = parseInt($(this).find('img').attr('width')) < 1920 ? parseInt($(this).find('img').attr('width')) * 3 : parseInt($(this).find('img').attr('width'));
      var height = parseInt($(this).find('img').attr('width')) < 1920 ? parseInt($(this).find('img').attr('height')) * 3 : parseInt($(this).find('img').attr('height'))
      var diamention = parseInt($(this).find('img').attr('width')) / parseInt($(this).find('img').attr('height'));
    } else {
      var width = parseInt($(this).find('img').width());
      var height = parseInt($(this).find('img').height());
      var diamention = width / height;
    }
    var $href = $(this).attr('href'),
      $alt_sizes = 1200 + 'x' + 1200 / diamention;
    $size = $(this).attr('data-size') ? $(this).data('size').split('x') : $alt_sizes.split('x'),
      $width = $size[0],
      $height = $size[1];
    var item = {
      src: $href,
      w: $width,
      h: $height
    }
    if ($(this).attr('href') === href && i !== 0) {
      index = i++;
    }
    i++;
    items.push(item);
  });
  var pswpElement = document.querySelectorAll('.pswp')[0];
  var options = {
    index: index,
    showHideOpacity: true,
    loop: false,
    history: false,
    bgOpacity: 0.9,
    closeOnScroll: false
  };
  var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
  gallery.listen('destroy', function () {
    $('.pswp').remove()
  });
}

function getImageDimension (src, onReady) {
  var image = new Image();
  image.onload = function () {
    if (typeof (onReady) == 'function') {
      onReady({
        width: image.width,
        height: image.height
      });
    }
  };
  image.src = src;
}

function apartmentGal (wrapper = '.apartment_item', slider = '.apartment_gal', thumbs = '.apartment_thumb') {
  document.querySelectorAll(slider).forEach((element, key, slide) => {
    if (element.classList.contains('swiper-container-initialized') && typeof Swiper === 'function') {
      slide[key].swiper.destroy(true, true);
    }
  })
  document.querySelectorAll(thumbs).forEach((element, key, slide) => {
    if (element.classList.contains('swiper-container-initialized') && typeof Swiper === 'function') {
      slide[key].swiper.destroy(true, true);
    }
  })
  $(wrapper).each(function () {
    $this = $(this);
    let direction = $this.find(thumbs).attr('data-direction') ?
      $this.find(thumbs).attr('data-direction') : 'horizontal';
    let slidesperview = $this.find(thumbs).attr('data-slidesperview') ?
      $this.find(thumbs).attr('data-slidesperview') : 4;
    let xs_slidesperview = $this.find(thumbs).attr('data-xs_slidesperview') ?
      $this.find(thumbs).attr('data-xs_slidesperview') : 4;
    let apartment_thumb = new Swiper($this.find(thumbs), {
      spaceBetween: 15,
      slidesPerView: xs_slidesperview,
      autoHeight: true,
      direction: 'horizontal',
      watchSlidesVisibility: true,
      watchOverflow: true,
      breakpoints: {
        1200: {
          direction: direction,
          slidesPerView: slidesperview,
          spaceBetween: 15,
        },
      },
    });
    let apartment_gal = new Swiper($this.find(slider), {
      spaceBetween: 10,
      autoHeight: true,
      watchSlidesVisibility: true,
      watchOverflow: true,
      navigation: {
        nextEl: $this.find('.swiper-button-next'),
        prevEl: $this.find('.swiper-button-prev'),
      },
      thumbs: {
        swiper: apartment_thumb,
      },
    });
    if (direction === 'vertical' && $(window).width() >= 1200) {
      $this
        .find(thumbs)
        .css('height', $this.find(slider + ' .swiper-slide-active img').height());
    } else {
      $this.find(thumbs).css('height', 'auto');
    }

    function nextPrevGal (clicked_slide) {
      if (clicked_slide.prev().hasClass('swiper-slide-prev')) {
        apartment_thumb.slidePrev();
      } else if (!clicked_slide.next().hasClass('swiper-slide-visible') && clicked_slide.next().length) {
        apartment_thumb.slideNext();
      }
    }

    apartment_thumb.on('click tap', function () {
      clicked_slide = $(apartment_thumb.clickedSlide);
      nextPrevGal(clicked_slide);
    });
    apartment_gal.on('slideChange', function () {
      clicked_slide = $(apartment_thumb.$el)
        .find('.swiper-slide')
        .eq(apartment_gal.realIndex);
      nextPrevGal(clicked_slide);
    });
    apartment_thumb.update();
    apartment_gal.update();

  });
}

function poltTriggerScriptBtn () {
  $('.polt-btn-click-load-script').trigger('click')
  $('.polt-btn-click-load-script').removeClass('polt-btn-click-load-script')
}