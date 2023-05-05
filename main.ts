basic.forever(function () {
    basic.showString("KAIXO")
    basic.showLeds(`
        . # # # .
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.pause(200)
    basic.showLeds(`
        . # # # #
        # . . . .
        . # # # .
        . . . . #
        # # # # .
        `)
    basic.pause(200)
    basic.showLeds(`
        # # # # .
        # . . . #
        # . # # .
        # . . . #
        # # # # .
        `)
    basic.pause(200)
    basic.showString("NAIZ")
})
