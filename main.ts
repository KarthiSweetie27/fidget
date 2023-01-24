let sound_level = 0
let temperature = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("Hello!")
})
input.onGesture(Gesture.TiltLeft, function () {
    sound_level = 255
    music.playMelody("C5 E A D B C G F ", 120)
})
input.onSound(DetectedSound.Loud, function () {
    basic.showLeds(`
        # . . # .
        # . # . .
        # # . . .
        # . # . .
        # . . # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Karthi")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.Shake, function () {
    basic.showArrow(ArrowNames.NorthEast)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    temperature = input.temperature()
})
basic.forever(function () {
	
})
