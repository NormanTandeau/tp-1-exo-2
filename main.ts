input.onButtonPressed(Button.A, function () {
    if (x > 0) {
        led.unplot(x, y)
        x += -1
        led.plot(x, y)
    } else if (x == 0) {
        led.unplot(x, y)
        x += 4
        led.plot(x, y)
    }
})
input.onButtonPressed(Button.B, function () {
    if (x < 4) {
        led.unplot(x, y)
        x += 1
        led.plot(x, y)
    } else if (x == 4) {
        led.unplot(x, y)
        x += -4
        led.plot(x, y)
    }
})
let y = 0
let x = 0
x = 0
y = 0
led.plot(x, y)
basic.forever(function () {
    while (y < 4) {
        basic.pause(1000)
        led.unplot(x, y)
        y += 1
        led.plot(x, y)
    }
    while (y > 0) {
        basic.pause(1000)
        led.unplot(x, y)
        y += -1
        led.plot(x, y)
    }
})
