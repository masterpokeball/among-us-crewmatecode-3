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
input.onButtonPressed(Button.B, function () {
    if (DEAD_MAN_RANGE < -35) {
        radio.sendValue("body", 381)
    }
})
radio.onReceivedValue(function (name, value) {
    if (value == 381 && name == "body") {
        basic.showString("Body found!")
    }
})
let DEAD_MAN_RANGE = 0
DEAD_MAN_RANGE = radio.receivedPacket(RadioPacketProperty.SignalStrength)
radio.setGroup(7)
radio.setTransmitPower(6)
basic.showString("You are CREWMATE")
basic.forever(function () {
    basic.showIcon(IconNames.StickFigure)
})
