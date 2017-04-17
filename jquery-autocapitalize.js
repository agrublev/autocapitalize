/**
* https://github.com/agrublev/autocapitalize
* Created by Angel Grablev for Freedcamp.com - April 17th 2017
*
* Simple usage: $.autocapitalize();
* will automatically use the existing html attribute autocapitalize and read its value
* options are: words, sentences, characters
*
* You can also call it on elements you choose and even force a specific type of capitalization
* $("input.auto_words").autocapitalize({mode:"words"});
*
*/
(function ( $ ) {
    $.autocapitalize_helper = function($th, type){
        type = type || $th.attr("autocapitalize");
        $th.on("keyup", function(e) {
            var inp = String.fromCharCode(event.keyCode);
            if (/[a-zA-Z0-9-_ ]/.test(inp)) {
                var val = $th.val().toLowerCase();
                if ( type === "words" || type === "sentences" ) {
                    var split_identifier = type === "words" ? " " : ". ";
                    var split = val.split(split_identifier);
                    $.each(split, function(i, v){
                        if ( v.length ) {
                            split[i] = v.charAt(0).toUpperCase() + v.substring(1);
                        }
                    });
                    val = split.join(split_identifier);
                } else if ( type === "characters" ) {
                    val = val.toUpperCase();
                }
                $th.val(val);
            }
        });
    };
    $.extend({
        autocapitalize: function() {
            $("input[autocapitalize], textarea[autocapitalize]").each(function(e){
                $.autocapitalize_helper( $(this) );
            });
        }
    });
    $.fn.autocapitalize = function( options ) {
        options = options || {};
        return this.each(function() {
            $.autocapitalize_helper( $(this), options.mode );
        });
    };
}( jQuery ));
