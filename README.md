# TrackTrain - quetify

Simple frontend done with Vue.js for adding Spotify tracks to the Spotify player queue. Perfect for parties since there is no pause or skip button. The only functionality is to search for tracks and add them to the current queue.

Since there is no way to retrieve the current queue from the Spotify API, the app can only display tracks in the queue that were inserted through the app.

There is still a lot to do!

It appears that you cannot add tracks to the Spotify queue through the Spotify API if the device you are listening from is a WLAN speaker. This is why the project is currently on hold. Spotify needs to fix their API first.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
