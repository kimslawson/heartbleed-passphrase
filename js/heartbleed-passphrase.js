$(document).ready( function() {
    // make text responsive
    $("html").responsiveType({minSize: 100,
                              maxSize: 150,
                              minWidth: 320,
                              maxWidth: 1280});

    // generate a passphrase with options
    function generatePassphrase(theForm) {
        return false;
    }

console.log($('#sample').text());

    function redrawSample(wordlist, numwords, min_length, max_length, count, acrostic, delim) {
        var sampleText = "";
        var blockEntity = "&#9608;";
        var word = new Array(numwords);
        var wordLength = 0;

        for (var p = 0; p < count; p++) {
            for (var n = 0; n < numwords; n++) {
                wordLength = 1 + Math.floor(Math.random() * ((parseInt(max_length) - parseInt(min_length)) + 1) + parseInt(min_length));
console.log("wordlen" + wordLength + " maxlen" + max_length + " minlen" + min_length);
                word[n] = new Array(wordLength).join(blockEntity);
                sampleText = sampleText + word[n] + delim;
            }
            sampleText = sampleText.slice(0, -1); // trim off last delimiter
            sampleText = sampleText + "<br />";
        }
        $('#sample').html(sampleText);
    }
    
    // update sample when options change
    $('input').change(function () {
        var wordlist = $("#wordlist").val();
        var numwords = $("#numwords").val();
        var min_length = $("#min_length").val();
        var max_length = $("#max_length").val();
        var count = $("#count").val();
        var acrostic = $("#acrostic").val();
        var delim = $("#delim").val();
        var inputSelected = $(this);
        var valueSelected = inputSelected.val();
console.log(valueSelected);
        switch (inputSelected.attr('id')) {
            case "numwords":
                // set number of words per passphrase
                numwords = valueSelected;
                break;        
            case "min_length":
                // set minimum length of words
                min_length = valueSelected;
                break;
            case "max_length":
                // set maximum length of words
                max_length = valueSelected;
                break;
            case "count":
                // set number of passphrases to generate
                count = valueSelected;
                break;
            case "acrostic":
                // set acrostic to use for each passphrase
                acrostic = valueSelected;
                break;
            case "delim":
                // set delimiter to use between words
                delim = valueSelected;
                break;
        }
        redrawSample(wordlist, numwords, min_length, max_length, count, acrostic, delim);
    });
    $('select').change(function () {
        var optionSelected = $(this).find("option:selected");
        var valueSelected  = optionSelected.val();
        var textSelected   = optionSelected.text();
        switch ($(this).id) {
            case "wordlist":
                // set wordlist file
                wordlist = valueSelected;
                break;
        }
        redrawSample(wordlist, numwords, min_length, max_length, count, acrostic, delim);
    });

});
