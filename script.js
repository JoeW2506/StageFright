let MouseHilightSize = new Vector2(20, 30) // 0-100

function UpdateMouseHilight(Position)
{
    let MouseHilight = [...document.getElementsByTagName("cursor-hilight")][0]
    MouseHilight.style.backgroundImage = `radial-gradient(circle at ${Position.X}px ${Position.Y + window.scrollY}px, rgba(0, 0, 0, 0) ${MouseHilightSize.X}vh, rgba(0, 0, 0, 0.75) ${MouseHilightSize.Y}vh)`
}

function Main() 
{
    let SpotLights = [...document.getElementsByTagName("spotlight")]
    let SpotLightCount = 0
    SpotLights.forEach(SpotLight => {
        SpotLight.style.left = `${SpotLightCount * 20 + 7}vw`
        SpotLightCount += 1
    })

    UpdateMouseHilight(new Vector2(0, 0))
    UpdateSpotLights(SpotLights, new Vector2(10, 10))

    document.addEventListener('mousemove', (Event) => {
        UpdateSpotLights(SpotLights, Event)
        UpdateMouseHilight(new Vector2(Event.x, Event.y))
    })
    
    document.addEventListener('scroll', (Event) => {
        SpotLights.forEach(SpotLight => {
            SpotLight.style.bottom = `${-window.scrollY}px`
            SpotLight.disabled = true
        })
    })
}

document.onreadystatechange = Main;