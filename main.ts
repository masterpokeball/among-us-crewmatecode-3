input.onButtonPressed(Button.A, function () {
    radio.sendValue("real", 4)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    for (let index = 0; index < 20; index++) {
        basic.showIcon(IconNames.Asleep)
    }
})
radio.setGroup(7)
basic.showString("You are CREWMATE")
basic.forever(function () {
    basic.showIcon(IconNames.StickFigure)
    radio.sendNumber(9)
})
