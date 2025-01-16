function Main() 
{
    let SpotLights = [...document.getElementsByTagName("spotlight")]
    let SpotLightCount = 0
    SpotLights.forEach(SpotLight => {
        SpotLight.style.left = `${SpotLightCount * 20 + 7}vw`
        SpotLightCount += 1
    })

    UpdateSpotLights(SpotLights, new Vector2(10, 10))

    document.addEventListener('mousemove', (Event) => {
        UpdateSpotLights(SpotLights, Event)
    })
    
    document.addEventListener('scroll', (Event) => {
        SpotLights.forEach(SpotLight => {
            SpotLight.style.bottom = `${-window.scrollY}px`
        })
    })
}

document.onreadystatechange = Main;