input.onButtonPressed(Button.A, function () {
    radio.sendString("go")
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("stop")
    basic.showIcon(IconNames.No)
})
radio.setGroup(123)
basic.forever(function () {
	
})
