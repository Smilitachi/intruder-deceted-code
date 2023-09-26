basic.forever(function () {
    if (tinkercademy.crashSensor()) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        OLED.writeStringNewLine("Intruder detected")
    } else {
        OLED.writeStringNewLine("House is safe")
    }
})
