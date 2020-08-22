radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 3) {
        basic.showNumber(receivedNumber)
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . # # # .
                # # # # #
                # # # # #
                # # # # #
                . # # # .
                `)
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
            basic.showLeds(`
                . # # # .
                # # # # #
                # # # # #
                # # # # #
                . # # # .
                `)
        }
    } else {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . # . # .
            . . # . .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    if (Call < 5) {
        Call += 1
        basic.showNumber(Call)
    } else {
        if (Call == 5) {
            Call = 0
            basic.showNumber(0)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    Call = 0
    basic.showNumber(Call)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(Call)
    basic.clearScreen()
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            # . # . #
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            `)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.pause(1000)
    }
})
let Call = 0
radio.setGroup(8)
let HomeNum = 3
Call = 0
basic.showNumber(Call)
