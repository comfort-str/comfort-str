jQuery(document).ready(function () {

    var startWindowScroll = 0;
    // магнифик попап начало
    jQuery(document).on('click', '.btn_pop', function (e) {
        e.preventDefault();
        $(this).magnificPopup({
            removalDelay: 500,
            tClose: 'Закрыть (Esc)',
            tLoading: 'Загрузка...',
            fixedContentPos: true,
            fixedBgPos: true,
            overflowY: 'auto',
            callbacks: {
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
                    jQuery('body').removeClass('mfp-active');
                    jQuery(window).scrollTop(startWindowScroll);
                    jQuery('body').off('touchmove');
                },
            },
            midClick: true
        })
        $(this).trigger('click');
    });
    jQuery(document).on('click', '.btn_pop, .sub_polt', function () {
        var zakaz_sit_text = jQuery(this).text();
        if (!jQuery(this).attr('value')) {
            var zakaz_sit = jQuery(this).text();
        } else {
            var zakaz_sit = jQuery(this).attr('value');
        }
        if (!jQuery(this).attr("data-name")) {
            var zakaz_sit_target = jQuery(this).text();
        } else {
            var zakaz_sit_target = jQuery(this).attr("data-name");
        }
        if (jQuery(this).attr("data-textarea")) {
            jQuery('.text_polt').css('display', 'none');
        } else {
            jQuery('.text_polt').css('display', 'block');
        }
        if (!jQuery(this).attr("data-text")) {
            var data_text = "";
            jQuery('.data_text').css('display', 'none');
        } else {
            jQuery('.data_text').css('display', 'block');
            var data_text = jQuery(this).attr("data-text");
        }
        if (jQuery(this).attr("data-zakform")) {
            jQuery(".zak_form").html(data_zakform);
        }
        if (!jQuery(this).attr("data-from")) {
            var zakaz_sit_from = zakaz_sit_text;
        } else {
            var zakaz_sit_from = jQuery(this).attr("data-from");
        }
        jQuery(".site_page_polt").attr("value", window.location.protocol + "//" + window.location.host + window.location.pathname);
        jQuery(".zakaz_sit").text(zakaz_sit_target);
        jQuery(".forma_vopros .zakaz_from").attr("value", zakaz_sit_from);
        jQuery(".data_text").html(data_text);

    });
    // попап конец

    // стилизация кнопки отправки файлов, обязательно подключить бутстрап
    if (jQuery(":file").length) {
        (function (e, t, n) {
            var r = e.querySelectorAll("html")[0];
            r.className = r.className.replace(/(^|\s)no-js(\s|jQuery)/, "jQuery1jsjQuery2")
        })(document, window, 0);

        poltFile();
        jQuery(document).on('.inputfile', 'change blur', function () {
            poltFile();
        })

        jQuery('.add_file_polt').on('click', function () {
            var last_file_element = jQuery(this).closest('.polt_files_w').find('.polt_files .polt_file_upload_w').last();
            var input_to_clone = jQuery(this).closest('.polt_files_w').find('.polt_file_upload_w_w:not(.added_file) > .polt_file_upload_w').clone();
            input_to_clone.find('.label span').text(input_to_clone.find('.inputfile').attr('data-label-text')).html();
            input_to_clone.find('.inputfile').val('');
            input_to_clone.find('.inputfile').attr('data-validate', '');
            input_to_clone.find('.error_input').removeClass('error_input');
            input_to_clone.find('.polt_file_upload_clear').removeClass('polt_file_upload_clear').addClass('polt_file_upload_remove');
            input_to_clone = input_to_clone.html();
            jQuery('<div class="polt_file_upload_w added_file">'+input_to_clone+'</div>').insertAfter(last_file_element);
            poltFile();
        });
        jQuery(document).on('click', '.polt_file_upload_remove', function () {
            jQuery(this).closest('.added_file').remove();
            poltFile();
        });
    }
    jQuery(document).on('change', 'input[type="radio"]', function () {
        var label = jQuery(this).attr('data-label');
        var value = jQuery(this).val();
        var polt_radio_valid_w = jQuery(this).closest('.polt_radio_valid_w');
        polt_radio_valid_w.find('.polt_radio_valid').val(value);
        polt_radio_valid_w.removeClass('error_input');
    })


    // отправка сообщения
    jQuery(document).on('click', '.submit', function (e) {
        e.preventDefault();

        var checkbox_radio = 'input[type="radio"]:not(:checked)';
        jQuery(this).attr("disabled", "disabled");
        jQuery(".site_page_polt").attr("value", window.location.href);

        var elements_vals = 'input:not(".submit"), textarea, select,input[type="checkbox"]:checked';

        var this_btn = jQuery(this);
        var this_form = this_btn.closest('form');
        this_form.addClass('polt_submit_form');

        var arr_val = this_form.find(elements_vals).not(checkbox_radio).map(function () {
            if (jQuery(this).attr('type') == 'checkbox' && jQuery(this).prop('checked') == false) {
                return '';
            }
            return jQuery(this).val().replace(/[,]+/g, "&#44; ");
        }).get();
        var arr_label = this_form.find(elements_vals).not(checkbox_radio).map(function () {
            var data_label;
            if (jQuery(this).attr('data-label')) {
                data_label = jQuery(this).attr('data-label').replace(/[,]+/g, "&#44; ");
            } else {
                data_label = "none";
            }
            return data_label;
        }).get();
        var arr_validate = this_form.find(elements_vals).not(checkbox_radio).map(function () {
            var required_var = (jQuery(this).attr('data-validate') || jQuery(this).attr('data-validate') == '') ? jQuery(this).attr('data-validate') : 'undefined';
            return required_var;
        }).get();
        var this_success = this_form.find(".success_polt");
        var formData = new FormData(this_form[0]);
        formData.append("formular", arr_val);
        formData.append("labels", arr_label);
        formData.append("data_validate", arr_validate);

        if (typeof poltorsend !== 'undefined' && poltorsend.ajaxurl.length) {
            formData.append("action", "poltor_send");
            jQuery.ajax(poltorsend.ajaxurl, {
                type: "POST",
                data: formData,
                async: true,
                cache: false,
                contentType: false,
                processData: false,
            }).done(function (data) {
                this_success.html(data);
            });
        } else {
            jQuery.ajax({
                type: "POST",
                url: "/send/send.php",
                data: formData,
                async: true,
                cache: false,
                contentType: false,
                processData: false,
                success: function (data) {
                    this_success.html(data);
                }
            });
        }