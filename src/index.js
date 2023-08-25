import { Ion, Viewer, createWorldTerrainAsync, createOsmBuildingsAsync, Cartesian3, Math, CesiumWidget, WebMapServiceImageryProvider, ImageryLayer, BaseLayerPicker,DefaultProxy,SingleTileImageryProvider,IonImageryProvider } from "cesium";

import "cesium/Build/Cesium/Widgets/widgets.css";
import "../src/css/main.css"

// Your access token can be found at: https://cesium.com/ion/tokens.
// This is the default access token
Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkMzA2ODk3MC1lMDUyLTRiMjEtOTI5ZC1mMTQ0YjAzNTIwNWUiLCJpZCI6MTYyNDEzLCJpYXQiOjE2OTI4OTMwMDl9.-gLhntZJXmPXZxKnz8VcPSfWYCfKjvybUS9v7A8T4t8';

try {
  // Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.



   var viewer = new Viewer('cesiumContainer');
  //  var url = "https://image.discomap.eea.europa.eu/arcgis/services/UrbanAtlas/UA_UrbanAtlas_2018/MapServer/WMSServer";
//   //add layer from url to viewer
//   var imageryProvider = new WebMapServiceImageryProvider({
//     url: url,
//     layers: 'Land_Use_Raster1402',
//     parameters: {
//         transparent: true,
//         format: 'image/png',
//         version: '1.3.0',
//         crs: 'CRS:84'

      
//     }
// });
//   viewer.imageryLayers.addImageryProvider(imageryProvider);

// ID of the asset in Cesium Ion
// var assetId = 2201924;

// Create an IonImageryProvider with the asset ID
// var singleTileImageryProvider = new IonImageryProvider({
//   assetId: assetId
// });

// viewer.imageryLayers.addImageryProvider(singleTileImageryProvider);

var show = prompt("Heatmap or NVID?").toLowerCase();

  if (show == "heatmap") {
    var heatmapImageryProvider = viewer.imageryLayers.addImageryProvider(
      await IonImageryProvider.fromAssetId(2202689)
    )
  } 
  else if (show == "nvid") { 
    const imageryLayer = viewer.imageryLayers.addImageryProvider(
      await IonImageryProvider.fromAssetId(2201924)
    );
  }





// // Define common parameters


  // Fly the camera to San Francisco at the given longitude, latitude, and height.
  viewer.camera.flyTo({
    destination : Cartesian3.fromDegrees(7.0900, 50.7310, 2000),
    orientation : {
      heading : Math.toRadians(50.0),
       pitch : Math.toRadians(-65.0),
    }
  });
  //await viewer.zoomTo(imageryLayer);

} catch (error) {
    console.log(error);
}
