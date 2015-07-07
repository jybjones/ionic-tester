# Ionic-Tester
#### Description:  this repo will help you get Ionic installed on your machine and provides a sample project to test that your system is set up correctly.

## Instructions for Ionic setup:
1.  install ionic
```
npm install -g ionic
```

## Instructions to test your Ionic Setup:
1.clone down this repo

2.run the following commands:
```
npm install
```
```
bower install
```
3.serve app to browser:
```
ionic serve
```
###### this should open the app in your browser.  Once it opens, open your dev tools and switch the view to mobile view.  Change to a few different devices and refresh each time to test that you can see everything in different views.
4.Install stuff for the platform you want to run:

###### If you want to build android apps:
```
http://cordova.apache.org/docs/en/3.3.0/guide_platforms_android_index.md.html#Android%20Platform%20Guide
```

###### If you want to build ios apps:
```
http://cordova.apache.org/docs/en/3.3.0/guide_platforms_ios_index.md.html#iOS%20Platform%20Guide
```

5.Test your app on the platform you chose:
###### on Android
```
ionic platform add android
ionic build android
```
start an android vm on genymotion
```
ionic run android -cl --port=5502 --livereload-port=5503
```


###### on ios
```
ionic platform add ios
ionic build ios
ionic emulate ios -cl --port=5500 --livereload-port=5501
```
