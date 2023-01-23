input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . . .
        # . # . .
        . . # . .
        . . # # .
        . . # # .
        `)
    music.playMelody("C - C C C D C D ", 120)
    music.playMelody("E - E E E F E F ", 120)
    music.playMelody("G - G G C5 - G - ", 120)
    music.playMelody("E - D - D - C - ", 120)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.clearScreen()
    _true = 0
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
    for (let index = 0; index < 10; index++) {
        basic.showString("Y", 5)
basic.showString("N", 5)
basic.showString("M", 5)
    }
    ball8 = randint(1, 3)
    if (ball8 == 1) {
        basic.showString("Y")
    } else if (ball8 == 2) {
        basic.showString("N")
    } else {
        basic.showString("M")
    }
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        . . . . .
        . # . # .
        . . . . .
        `)
})
let ball8 = 0
let _true = 0
let _10 = 0
input.setSoundThreshold(SoundThreshold.Loud, 255)
_10 = 10
