const input = document.getElementById("heartinput");

input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        const value = input.value.trim().toLowerCase();
        const card = document.getElementById("card");
        switch (value) {
            case "aorta":
                card.innerHTML = `<model-viewer src="Beating heart.glb" ar ar-modes="webxr scene-viewer quick-look" camera-controls tone-mapping="commerce" shadow-intensity="1" autoplay camera-orbit="-6.638deg 64.67deg 0.4074m" field-of-view="30deg" camera-target="0m 0.11m -0.13m">
                    <button class="Hotspot" slot="hotspot-1" data-surface="0 0 3629 3639 3640 0.053 0.461 0.486" data-visibility-attribute="visible">
                        <div class="HotspotAnnotation">Aorta</div>
                    </button>
                    <button class="Hotspot" slot="hotspot-1" data-surface="0 0 17262 17254 17265 0.044 0.157 0.799" data-visibility-attribute="visible"></button>
                    <div class="progress-bar hide" slot="progress-bar">
                        <div class="update-bar"></div>
                    </div>
                    <button slot="ar-button" id="ar-button">View in your space</button>
                    <div id="ar-prompt">
                        <img src="https://modelviewer.dev/shared-assets/icons/hand.png">
                    </div>
                </model-viewer>`;
                break;
            case "left atrium":
                card.innerHTML = `<model-viewer src="Beating heart.glb" ar ar-modes="webxr scene-viewer quick-look" camera-controls tone-mapping="commerce"  shadow-intensity="1" autoplay  camera-orbit="-19deg 100deg 0.3708m" field-of-view="25.06deg" min-camera-orbit="auto auto 0.3708m" min-field-of-view="25.06deg"alt = "the heart is Beating" id="animation-demo" interpolation-decay="200" shadow-intensity="0.5">
                <button class="Hotspot" slot="hotspot-4" data-surface="0 0 14888 14889 14890 0.350 0.332 0.318" data-visibility-attribute="visible">
                    <div class="HotspotAnnotation">Left Atrium</div>
                </button>
                  <div class="progress-bar hide" slot="progress-bar">
                      <div class="update-bar"></div>
                  </div>
                  <button slot="ar-button" id="ar-button">
                      View in your space
                  </button>
                  <div id="ar-prompt">
                      <img src="https://modelviewer.dev/shared-assets/icons/hand.png">
                  </div>
              </model-viewer>`;
                break;
            case "action3":
                card.innerHTML = "<p>Performing action 3</p>";
                break;
            default:
                card.innerHTML = "<p>Invalid input</p>";
        }
        input.value = "";
    }
});
