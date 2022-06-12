$('document').ready(function() {
    $("#madlibs_result").hide()
    $('#button').click(function() {
        var personName = document.getElementById('person_name');
        var character = document.getElementById('character');
        var adverb = document.getElementById('adverb');
        var adjective = document.getElementById('adjective');
        $("#tom_thumb_text").text("Name is: " + personName.value + " character: " + character.value + " adverb: " + adverb.value + " adjective: " + adjective.value);

    });
    $('#button1').click(function() {
        var width = document.getElementById('width');
        var width1 = width.value;
        var height = document.getElementById('height');
        var height1 = height.value;
        var colors = document.getElementById('colors');
        var colors1 = colors.value;

        var result = ((width1 * heigth1) / 8) + (colors1 * 3)

        $("#madlibs_text").append("result " + result);
    });

    $("#switch_madlibs").click(function() {
        $("#tom_result").hide()
        $("#madlibs_result").show();
    })

    $("#switch_tom").click(function() {
        $("#tom_result").show()
        $("#madlibs_result").hide()
    })
});