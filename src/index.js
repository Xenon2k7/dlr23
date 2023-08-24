import { Ion, Viewer, createWorldTerrainAsync, createOsmBuildingsAsync, Cartesian3, Math } from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import "../src/css/main.css"

// Your access token can be found at: https://cesium.com/ion/tokens.
// This is the default access token
Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxOWNhMTgzYS0wZTI3LTQ0MDgtYTQ0MC03NTY2YmJhNGZhMjQiLCJpZCI6MTYyNDAwLCJpYXQiOjE2OTI4ODg2Mjd9.t24uPcfw77aE1I_PGLYtK2Q3tmii2Uv8ODkZcI49IPE';

try {
  // Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
  const viewer = new Viewer('cesiumContainer', {
    sceneMode: Cesium.SceneMode.COLUMBUS_VIEW,
    

    //terrainProvider: createWorldTerrainAsync()
  });
  
  
  // Add Cesium OSM Buildings, a global 3D buildings layer.
  //viewer.scene.primitives.add(createOsmBuildingsAsync());   

  // Fly the camera to San Francisco at the given longitude, latitude, and height.
  viewer.camera.flyTo({
    destination : Cartesian3.fromDegrees(7.1019, 50.7374, 400),
    orientation : {
      heading : Math.toRadians(0.0),
      pitch : Math.toRadians(-15.0),
    }
  });

} catch (error) {
    console.log(error);
}
