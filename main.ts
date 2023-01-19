input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    _true = 1
    while (_true == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(_10)
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
        basic.pause(_10)
        basic.clearScreen()
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.pause(_10)
        basic.clearScreen()
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            # . . . #
            . # . # .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . . .
        # . # . .
        . . # . .
        . . # # .
        . . # # .
        `)
    music.playMelody("C E D C G C E G ", 120)
    music.playMelody("A C5 B A G C E G ", 120)
    music.playMelody("F A G F E G F E ", 120)
    music.playMelody("D G A B C5 B C5 C5 ", 120)
})
input.onGesture(Gesture.Shake, function () {
    ball8 = randint(1, 3)
    if (ball8 == 1) {
        basic.showString("Yes")
    } else if (ball8 == 2) {
        basic.showString("No")
    } else {
        basic.showString("Maybe")
    }
})
let ball8 = 0
let _true = 0
let _10 = 0
_10 = 10
basic.forever(function () {
    if (input.lightLevel() <= 20) {
        basic.clearScreen()
        _true = 0
    }
})
