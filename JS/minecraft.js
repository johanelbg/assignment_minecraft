//display modal on loading
$(window).on('load', function () {
    $('#myModal').modal('show')
    $('.loading').css('display', 'none')

//charging the page
$('#startButton').click(function () {
    $('#myModal').modal('hide')
    $('.loading').css('display', 'flex')

    setTimeout(function(){
      $('.sideBar').css('display', 'flex')
      $('.loading').css('display', 'none')
      minecraftGame.init();
    }, 3000);
});

});
var minecraftGame = {};

minecraftGame.init = function () {
    minecraftGame.tileSys();
    minecraftGame.layout();
};

minecraftGame.layout = function () {
    var map = {
        cols: 22,
        rows: 15,
        tiles: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0],
            [0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0],
            [0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0],
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
        for (var r = 0; r < map.cols; r++) {
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
var list;
var counter = 0;
var tileType = 0;
var index;
var that;

minecraftGame.tileSys = function () {

    $("#toolContainer0").on("click", function () {
        counter = 1;
        $("#toolContainer0").addClass("selectedTool");
        $("#toolContainer1").removeClass("selectedTool");
        $("#toolContainer2").removeClass("selectedTool");
        $("#toolContainer3").removeClass('selectedTool')
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
        $("#toolContainer3").removeClass('selectedTool')
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
        $("#toolContainer3").removeClass('selectedTool')
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

    $("#toolContainer3").on("click", function () {
        counter = 4;
        $("#toolContainer0").removeClass("selectedTool")
        $("#toolContainer1").removeClass("selectedTool")
        $("#toolContainer2").removeClass("selectedTool")
        $("#toolContainer3").addClass('selectedTool')
        $("#tileCreator").removeClass("selectedTileCreator")
        $('.divCloud').on("click", function () {
            if (counter === 4) {
                $(this).addClass('divEmpty');
                $(this).removeClass('divCloud');
                $('.lastTile').removeClass('divLeaf divWood divGround divGrass');
                $('.lastTile').addClass('divCloud');
                tileType = 7;
            }
        })
    })

    $(".lastTile").on("click", function () {
        counter = 5;
        $("#toolContainer0").removeClass("selectedTool")
        $("#toolContainer1").removeClass("selectedTool")
        $("#toolContainer2").removeClass("selectedTool")
        $("#tileCreator").addClass("selectedTileCreator")


        if (tileType == 1 || tileType == 2 || tileType == 3 || tileType == 5 || tileType == 6 || tileType == 7) {
            $('.divEmpty').on("click", function () {

                that = this;
                list = document.querySelectorAll('div');
                for (var k = 0; k < list.length; k++) {
                    if (that == list[k]) {
                        index = k;
                    }
                }

                if (counter == 5) {
                    if (tileType == 1  && list[index+22].className == 'divGround') {
                        $(this).addClass('divGround');
                        $(this).removeClass('divLeaf divWood divStone divCloud divGrass divEmpty');
                    } if (tileType == 2 && (list[index+22].className == 'divGrass'|| list[index+22].className == 'divWood')) {
                        $(this).addClass('divWood');
                        $(this).removeClass('divLeaf divGround divStone divCloud divGrass divEmpty');
                    } if (tileType == 3 && (list[index+22].className == 'divWood'|| list[index+1].className == 'divLeaf'|| list[index-1].className == 'divLeaf'|| list[index+22].className == 'divLeaf')) {
                        $(this).addClass('divLeaf');
                        $(this).removeClass('divWood divGround divStone divCloud divGrass divEmpty');
                    } if (tileType == 5 && (list[index+22].className == 'divGrass'|| list[index+22].className == 'divStone')) {
                        $(this).addClass('divStone');
                        $(this).removeClass('divWood divGround divLeaf divCloud divGrass divEmpty');
                    } if (tileType == 6 && list[index+22].className == 'divGround') {
                        $(this).addClass('divGrass');
                        $(this).removeClass('divWood divStone divLeaf divCloud divGround divEmpty');
                    } if (tileType == 7 && list[index].className == 'divEmpty') {
                        $(this).addClass('divCloud');
                        $(this).removeClass('divWood divStone divLeaf divGround divGrass divEmpty');
                    }
                }
            })
        }
    })
};
