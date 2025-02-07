let MouseHilightSize = new Vector2(20, 30) // 0-100

let HilightClamp = 30

function CalculateHilightWidth(x) 
{
    x = Math.abs(x) < HilightClamp ? HilightClamp : Math.abs(x)
    console.log(x)
    //return (1 / (Math.pow(x * 10, 2) + 1)) * m + 1
    return 10 / Math.factorial(Math.log2(Math.sqrt(x) + 1) + 0.5) + 1
}

function UpdateMouseHilight(Position)
{
    let MouseHilight = [...document.getElementsByTagName("cursor-hilight")][0]
    let HilightWidth = CalculateHilightWidth(Position.X - (window.innerWidth / 2))
    MouseHilightSize.X =  HilightWidth * 10
    MouseHilightSize.Y =  HilightWidth * 15
    MouseHilight.style.backgroundImage = `radial-gradient(circle at ${Position.X}px ${Position.Y + window.scrollY}px, rgba(0, 0, 0, 0) ${MouseHilightSize.X}vh, rgba(0, 0, 0, 0.75) ${MouseHilightSize.Y}vh)`
}

function Main() 
{
    /*
    let SpotLights = [...document.getElementsByTagName("spotlight")]
    let SpotLightCount = 0
    SpotLights.forEach(SpotLight => {
        SpotLight.style.left = `${SpotLightCount * 20 + 7}vw`
        SpotLightCount += 1
    })

    UpdateMouseHilight(new Vector2(0, 0))
    UpdateSpotLights(SpotLights, new Vector2(10, 10))
    */

    document.addEventListener('mousemove', (Event) => {
        // UpdateSpotLights(SpotLights, Event)
        UpdateMouseHilight(new Vector2(Event.x, Event.y))
    })
    
    /*
    document.addEventListener('scroll', (Event) => {
        SpotLights.forEach(SpotLight => {
            SpotLight.style.bottom = `${-window.scrollY}px`
            SpotLight.disabled = true
        })
    })
    */

    //UpdateSpotLights(SpotLights, new Vector2(10, 10))
}

document.onreadystatechange = Main;