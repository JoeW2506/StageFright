function CalculateZeroOffset(Radius, Angle)
{
    let X = (Radius / 2) * Math.cos(Angle - Math.PI / 2)
    let Y = (Radius / 2) - ((Radius / 2) * Math.sin(Angle - Math.PI / 2) + Radius / 2)
    return new Vector2(X, Y)
}

function UpdateSpotLights(SpotLights, Event)
{
    Event.x = Event.x || Event.X; Event.y = Event.y || Event.Y

    SpotLights.forEach(SpotLight => {
        let Rect = SpotLight.getBoundingClientRect()
        let Radius = Rect.height / 2
        let X = Event.x - (Rect.left + Rect.width / 2); let Y = window.innerHeight - Event.y
        let Angle = Math.atan(X / Y)
        Angle = Math.nzoSoftClamp(Angle, -0.25, 0.25, 5)
        // console.log({X : X, Y : Y, Angle : Angle})
        let Offset = CalculateZeroOffset(Radius, Angle)
        SpotLight.style.transform = `translate(${Offset.X}px, ${Offset.Y}px) rotate(${Angle}rad)`
    })
}

/* Auto Refresh //
setTimeout(function() {
    location.reload();
}, 250);
//*/