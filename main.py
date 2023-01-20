def on_button_pressed_a():
    basic.show_leds("""
        . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
    """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global _true
    _true = 1
    while _true == 1:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
        """)
        basic.pause(_10)
        basic.clear_screen()
        basic.show_leds("""
            . . . . .
                        . . # . .
                        . # . # .
                        . . # . .
                        . . . . .
        """)
        basic.pause(_10)
        basic.clear_screen()
        basic.show_leds("""
            . . # . .
                        . # . # .
                        # . . . #
                        . # . # .
                        . . # . .
        """)
        basic.pause(_10)
        basic.clear_screen()
        basic.show_leds("""
            . # . # .
                        # . . . #
                        . . . . .
                        # . . . #
                        . # . # .
        """)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    basic.show_leds("""
        . # . . .
                # . # . .
                . . # . .
                . . # # .
                . . # # .
    """)
    music.play_melody("C E D C G C E G ", 120)
    music.play_melody("A C5 B A G C E G ", 120)
    music.play_melody("F A G F E G F E ", 120)
    music.play_melody("D G A B C5 B C5 C5 ", 120)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    global ball8
    for index in range(10):
        basic.show_string("Yes", 5)
        basic.show_string("No", 5)
        basic.show_string("Maybe", 5)
    ball8 = randint(1, 3)
    if ball8 == 1:
        basic.show_string("Yes")
    elif ball8 == 2:
        basic.show_string("No")
    else:
        basic.show_string("Maybe")
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

ball8 = 0
_true = 0
_10 = 0
_10 = 10

def on_forever():
    global _true
    if input.light_level() <= 20:
        basic.clear_screen()
        _true = 0
basic.forever(on_forever)

def on_forever2():
    while input.logo_is_pressed():
        basic.show_leds("""
            # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
        """)
    basic.clear_screen()
basic.forever(on_forever2)
