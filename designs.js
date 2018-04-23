$(function()
 {
  // Select size input for height and width
    var input_height = $('#inputHeight');
    var input_width = $('#inputWeight');
    // Select the color input
    var colour = $('#colorPicker');
    //select canvas
    const table = $('#pixelCanvas');
    // grid generation based on user input

    function makeGrid()
    {
        table.find('tbody').remove()
        var Rows = input_height.val();
        var Columns = input_width.val();
        // set tag <tbody> to the table
        table.append('<tbody></tbody>');
        var tableBody = table.find('tbody');
        // draw grid row
        for (var h = 0; h < Rows; h++)
         {
            tableBody.append('<tr></tr>');
        }
        // draw the grid coloumns and rows
        for (var h = 0; h < Columns; h++)
         {
            table.find('tr').append('<td class="white"></td>');
     }
    }
    $(document).ready(function ()
    {
        // click the submit button to update the grid table
        $('input[type="submit"]').on('click', function (e)
        {
            e.preventDefault();
            makeGrid();
        });

        // toggle grid color by choosing different colors
        $('#pixelCanvas').on('click', 'td', function (fs)
         {
            var cc = colour.val();
            var cColor = $(this).css('background-color');
            console.log(cColor + " color:" + cc);

            if ($(this).hasClass('white')) {
                $(this).toggleClass('white');
                $(this).css("background-color", cc);
            } else {
                $(this).toggleClass('white');
                $(this).css("background-color", "white");
            }

        });
    });
});
