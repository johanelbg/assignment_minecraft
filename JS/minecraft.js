$(window).on('load',function(){
    $('#myModal').modal('show')
   });

$('#startButton').click(function() {
    $('#myModal').modal('hide')
    $('.sideBar').css('display', 'flex')
    minecraftGame.init();
});


var minecraftGame = {};

minecraftGame.init = function () {
    minecraftGame.tileSys();
    minecraftGame.layout();
};

minecraftGame.layout = function () {
    var map = {
        cols: 22,
        rows: 22,
        tiles: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 5, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 5, 0, 0, 0, 5, 5, 0, 5, 0, 0, 0, 0, 2, 0, 0, 5, 0, 0, 0],
            [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
        getTile: function (col, row) {
            return this.tiles[col][row]
        },
    }

    for (var c = 0; c < map.cols; c++) {
        for (var r = 0; r < map.rows; r++) {
            var tile = map.getTile(c, r);
            if (tile == 0) {
                var divEmpty = $("<div/>");
                divEmpty.addClass('divEmpty');
                $('#bigBox').append(divEmpty);
            } else if (tile == 1) {
                var divGround = $("<div/>");
                divGround.addClass('divGround');
                $('#bigBox').append(divGround);
            } else if (tile == 2) {
                var divWood = $("<div/>");
                divWood.addClass('divWood');
                $('#bigBox').append(divWood);
            } else if (tile == 3) {
                var divLeaf = $("<div/>");
                divLeaf.addClass('divLeaf');
                $('#bigBox').append(divLeaf);
            } else if (tile == 4) {
                var divCloud = $("<div/>");
                divCloud.addClass('divCloud');
                $('#bigBox').append(divCloud);
            } else if (tile == 5) {
                var divStone = $("<div/>");
                divStone.addClass('divStone');
                $('#bigBox').append(divStone);
            } else if (tile == 6) {
                var divGrass = $("<div/>");
                divGrass.addClass('divGrass');
                $('#bigBox').append(divGrass);
            }
        }
    }

};

var counter = 0;
var tileType = 0;

minecraftGame.tileSys = function(){

    $("#toolContainer0").on("click", function () {
        counter = 1;
        $("#toolContainer0").addClass("selectedTool");
        $("#toolContainer1").removeClass("selectedTool");
        $("#toolContainer2").removeClass("selectedTool");
        $("#tileCreator").removeClass("selectedTileCreator")
        $('.divLeaf').on("click", function () {
            if (counter === 1) {
                $(this).addClass('divEmpty');
                $(this).removeClass('divLeaf');
                $('.lastTile').removeClass('divStone divWood divGround divGrass')
                $('.lastTile').addClass('divLeaf')
                tileType = 3;
            }
        })
        $('.divWood').on("click", function () {
            if (counter === 1) {
                $(this).addClass('divEmpty');
                $(this).removeClass('divWood');
                $('.lastTile').removeClass('divStone divLeaf divGround divGrass')
                $('.lastTile').addClass('divWood')
                tileType = 2;
            }
        })
    })
    
    $("#toolContainer1").on("click", function () {
        counter = 2;
        $("#toolContainer0").removeClass("selectedTool")
        $("#toolContainer1").addClass("selectedTool")
        $("#toolContainer2").removeClass("selectedTool")
        $("#tileCreator").removeClass("selectedTileCreator")
        $('.divStone').on("click", function () {
            if (counter === 2) {
                $(this).addClass('divEmpty');
                $(this).removeClass('divStone');
                $('.lastTile').removeClass('divLeaf divWood divGround divGrass');
                $('.lastTile').addClass('divStone');
                tileType = 5;
            }
        })
    })
    
    $("#toolContainer2").on("click", function () {
        counter = 3;
        $("#toolContainer0").removeClass("selectedTool")
        $("#toolContainer1").removeClass("selectedTool")
        $("#toolContainer2").addClass("selectedTool")
        $("#tileCreator").removeClass("selectedTileCreator")
        $('.divGrass').on("click", function () {
            if (counter === 3) {
                $(this).addClass('divEmpty');
                $(this).removeClass('divGrass');
                $('.lastTile').removeClass('divLeaf divWood divGround divStone')
                $('.lastTile').addClass('divGrass')
                tileType = 6;
            }
        })
        $('.divGround').on("click", function () {
            if (counter === 3) {
                $(this).addClass('divEmpty');
                $(this).removeClass('divGround');
                $('.lastTile').removeClass('divStone divLeaf divWood divGrass')
                $('.lastTile').addClass('divGround')
                tileType = 1;
            }
        })
    })
    
    $(".lastTile").on("click", function () {
        counter = 4;
        $("#toolContainer0").removeClass("selectedTool")
        $("#toolContainer1").removeClass("selectedTool")
        $("#toolContainer2").removeClass("selectedTool")
        $("#tileCreator").addClass("selectedTileCreator")
        $('.divEmpty').on("click", function () {
            if (counter == 4) {
                if (tileType == 1) {
                    $(this).addClass('divGround');
                }
                if (tileType == 2) {
                    $(this).addClass('divWood');
                } if (tileType == 3) {
                    $(this).addClass('divLeaf');
                } if (tileType == 5) {
                    $(this).addClass('divStone');
    
                } if (tileType == 6) {
                    $(this).addClass('divGrass');
                }
                $(this).removeClass('divEmpty');
            }
        })
    })
};