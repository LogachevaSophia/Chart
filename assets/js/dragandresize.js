(function ($) {
    $(document).ready(function(){
        let optionsGridster = {
            widget_margins: [12, 14],
			widget_base_dimensions: [365, 525],
			max_cols: 4,
            min_cols: 4,
			resize: {
				enabled: true,
                start: function(event, ui) {
					console.log(event, ui);
				},
				stop: function(event, ui) {
					console.log(event, ui);
                    const current_html_widjet = $(event.target).parent("li[data-row]")
                    const sizeX = current_html_widjet.attr("data-sizex") //размер по x
                    const sizeY = current_html_widjet.attr("data-sizey") //размер по y
                    const id_dashb = current_html_widjet.find("button[data-popup-name]").attr("data-popup-name") //id виджета, который изменяют
                    console.log(id_dashb)
				}
			},
			draggable: {
				start: function(event, ui) {
					console.log(event, ui);
				},
				stop: function(event, ui) {
					console.log(event, ui);
                    const current_html_widjet = ui.$helper
                    const data_row = current_html_widjet.attr("data-row") //строка
                    const data_col = current_html_widjet.attr("data-col") //колонка
                    const id_dashb = current_html_widjet.find("button[data-popup-name]").attr("data-popup-name") //id виджета, который изменяют
                    console.log(id_dashb)
				}
			}
        };
        $(".gridster .widjet-list").gridster(optionsGridster).width("auto");

//         gridster = $(".gridster ul").gridster({
//             widget_base_dimensions: [100, 120],
//             widget_margins: [5, 5],
//             draggable: {
//                 handle: '.dragDiv'
//             }
// }).data('gridster'); 
        // тестовый пример как добавлять динамически данные.
        // var collection = [
        //     ['<li><div class="title">drag</div>Widget content</li>', 1, 2,],
        //     ['<li><div class="title">drag</div>Widget content</li>', 5, 2],
        //     ['<li><div class="title">drag</div>Widget content</li>', 3, 2],
        //     ['<li><div class="title">drag</div>Widget content</li>', 2, 1],
        //     ['<li><div class="title">drag</div>Widget content</li>', 4, 1],
        //     ['<li><div class="title">drag</div>Widget content</li>', 1, 2],
        //     ['<li><div class="title">drag</div>Widget content</li>', 2, 1],
        //     ['<li><div class="title">drag</div>Widget content</li>', 3, 2],
        //     ['<li><div class="title">drag</div>Widget content</li>', 1, 1],
        //     ['<li><div class="title">drag</div>Widget content</li>', 2, 2],
        //     ['<li><div class="title">drag</div>Widget content</li>', 1, 3],
        // ];

        // $.each(collection, function(i, widget){
        //     gridster.add_widget.apply(gridster, widget)
        // });
    });
})(jQuery);