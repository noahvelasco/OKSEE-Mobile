<p align="center">
<img src="./assets/images/logo_land.png" alt="Alternative text" title="App Splash Logo" height="250"/>
</p>

OKSee is a modern and simple cross platform mobile app showcasing the best parts of Oklahoma City, Oklahoma. The main staple of this mobile app is the modern, sleek, and simple UI/UX. All images, color-schemes, and software engineering was done and maintained by Noah Velasco.

<h3 align="center">Technologies Used</h3>
<p align="center">
<a href="https://reactnative.dev/docs/getting-started?guide=android" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg" alt="react"  height="40"/></a>
<a href="https://expo.dev/" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/expoio/expoio-ar21.svg" alt="react"  height="40"/></a>
<a href="https://www.google.com/maps" target="_blank" rel="noreferrer"> 
<img src="https://www.vectorlogo.zone/logos/google_maps/google_maps-icon.svg" alt="googlemaps"  height="40"/></a>
<a href="https://openweathermap.org/api" target="_blank" rel="noreferrer"> <img src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png" alt="openweather"  height="40"/></a>

</p>

---
### Preview
 <p align="center">
<img src=".\AppScreenshots\1.png" alt="" height="500"/>
<img src=".\AppScreenshots\2.png" alt="" height="500"/>
<img src=".\AppScreenshots\3.png" alt="" height="500"/>
<img src=".\AppScreenshots\4.png" alt="" height="500"/>
<img src=".\AppScreenshots\5.png" alt="" height="500"/>
</p>

---
### Live Demo
<p align =center>
<a href="https://youtu.be/z8wm_2Pm5aY?si=3Pu1vjBrL39XEKO-" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/youtube/youtube-icon.svg" alt="dart" width="40" height="40"/>
<h3 align = center><a href = "https://youtu.be/z8wm_2Pm5aY?si=3Pu1vjBrL39XEKO-">Demo Link (Youtube)</a></h3>

</p>

---
### Features / Todo's
- [x] Branding
- [x] Splash Screen
- [x] Bottom Nav Bar (info-map-locations)
- [x] Landing Screen <=> Map Screen
- [x] Weather Forecast Overlay
- [x] Locations Overlay Button + Pins
- [x] Custom Google Map
- [x] Animated Expanding Locations Button
- [x] Establishments Screen (list of all locations)
- [x] Establishments list search bar 
- [x] Establishments filter chips
- [x] Selected Location Birds Eye View
- [x] Introduction Screen 
- [x] Comment cleanup
- [x] Documentation

---
### How to use

1. Include your own Google Maps API key in the `android\app\src\main\AndroidManifest.xml` in below tag
```
<meta-data android:name="com.google.android.geo.API_KEY" android:value="<YOUR GOOGLE MAPS API HERE>"/>
```
2. Create an API key from [OpenWeatherMap](https://openweathermap.org/api) and store it in a `.env` (put in root dir) as below:
```
WEATHER_API_KEY=<YOUR OWM API KEY HERE>
```
3. Run `npx expo start` in `./App.js` directory:
---

### Build Info
* node --version v18.17.0
* npm --version 9.8.0
* npx react-native --version 0.72.3
* choco -v 1.1.0
--- 

### Possible Issues
- Not tested on iOS => unset permissions for location, google maps, react native maps, & dotenv

---
### Sources

- [Google Maps Markers + Map Customization](https://youtu.be/xcn-0LyX6JY)
