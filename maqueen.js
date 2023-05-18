function avanzarRetroceder () {
    if (radio.sendNumber(1)) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 190)
    } else if (radio.sendNumber(2)) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 190)
    }
}
function retrocederIzquierdaDerecha () {
    if (radio.sendNumber(3)) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 190)
    } else if (radio.sendNumber(4)) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 190)
    }
}
function pararMotores () {
    if (radio.sendNumber(0)) {
        maqueen.motorStop
    }
}
function avanzarIzquierdaDerecha () {
    if (radio.sendNumber(3)) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 190)
    } else if (radio.sendNumber(4)) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 190)
    }
}
function ledW () {
    led.plot(0, 0)
    led.plot(0, 1)
    led.plot(0, 2)
    led.plot(0, 3)
    led.plot(1, 4)
    led.plot(2, 3)
    led.plot(2, 2)
    led.plot(4, 0)
    led.plot(4, 1)
    led.plot(4, 2)
    led.plot(4, 3)
    led.plot(3, 4)
}

radio.setGroup(1)
pararMotores()
avanzarRetroceder()
avanzarIzquierdaDerecha()
retrocederIzquierdaDerecha()
ledW()