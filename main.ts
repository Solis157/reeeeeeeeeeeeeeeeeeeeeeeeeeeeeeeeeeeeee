input.onButtonPressed(Button.A, function () {
    A = 0
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(A + B)
})
input.onButtonPressed(Button.B, function () {
    B = 0
})
input.onGesture(Gesture.Shake, function () {
    A = 0
    B = 0
    basic.showNumber(0)
})
let B = 0
let A = 0
basic.showNumber(0)
A = 0
B = 0
