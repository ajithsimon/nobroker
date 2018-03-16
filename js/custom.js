/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    $('body').on('click', '.closable', function () {
        $(this).closest('.closable-div').remove();
    });
    
    $("#items1,#items2,#items3").sortable({
        connectWith: "#items1,#items2,#items3",
        start: function (event, ui) {
//                ui.item.toggleClass("highlight");
        },
        stop: function (event, ui) {
//                ui.item.toggleClass("highlight");
        }
    });
    $("#items1,#items2,#items3").disableSelection();
    
    $('.btn-copy').on('click', function () {
        $('#copyDiv').clone().appendTo("#pasteDiv");
    });
});