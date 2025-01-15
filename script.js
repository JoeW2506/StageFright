function CalculateZeroOffset(Radius, Angle)
{
    let X = (Radius / 2) * Math.cos(Angle - Math.PI / 2)
    let Y = (Radius / 2) - ((Radius / 2) * Math.sin(Angle - Math.PI / 2) + Radius / 2)
    return new Vector2(X, Y)
}

function Main() 
{
    let SpotLight = document.getElementsByTagName("spotlight")[0]
    let Base = document.getElementsByTagName("spotlight-base")[0]

    document.addEventListener('mousemove', (Event) => {
        let BaseRect = SpotLight.getBoundingClientRect()
        let Rect = SpotLight.getBoundingClientRect()
        let Radius = Rect.height / 2
        let X = Event.x - (BaseRect.left + BaseRect.width / 2); let Y = window.innerHeight - Event.y
        let Angle = Math.atan(X / Y)
        Angle = Math.clamp(Angle, -0.25, 0.25)
        // console.log({X : X, Y : Y, Angle : Angle})
        let Offset = CalculateZeroOffset(Radius, Angle)
        SpotLight.style.transform = `translate(${Offset.X}px, ${Offset.Y}px) rotate(${Angle}rad)`
    });
};

document.onreadystatechange = Main;

/* Auto Refresh //
setTimeout(function() {
    location.reload();
}, 250);
//*/