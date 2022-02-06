input.onButtonPressed(Button.A, function () {
    radio.sendValue("real", 4)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    for (let index = 0; index < 20; index++) {
        if (receivedString == "You were shot and died!") {
            basic.showIcon(IconNames.Asleep)
        }
    }
})
radio.setGroup(7)
radio.setTransmitPower(6)
basic.showString("You are CREWMATE")
basic.forever(function () {
    basic.showIcon(IconNames.StickFigure)
})
