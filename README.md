## Bloc Jams
[View project](http://ameliagalgon-bloc-jams.netlify.com/)

**Bloc Jams** is a digital music player with a responsive web design. The application was built using javascript and then refactored to function using AngularJs.

![alt text](http://samxwu.com/img/blocJams_cover.png "Bloc Jams Screenship")

To make a copy of this repository run:

```
git clone https://github.com/ameliagalgon/bloc-jams-angular.git
```
Install all of the server dependencies
```
npm install
```
and run the application locally
```
node server
```
You can then go to [localhost:3000](http://localhost:3000) to view the application.

###Implementing the [Buzz](http://buzz.jaysalvat.com/) Audio library
I registered a Songplayer service that uses the Buzz Object to play audio files.
There is a `currentBuzzObject` that represents a sound instance of the current song. This sound instance is what I used to play, pause, stop, skip through, and set the sound on the audio files.

###Albums
The albums in the application are in `Fixtures.js`. Bloc Jams displays `albumPicasso` as a default by returning it with the function call `Fixture.getAlbum()`. The album collection included multiple copies of `albumPicasso`, but more albums can be added to the Fixure service to create a broader collection.

I developed this project while working on the [Bloc](https://www.bloc.io/web-developer-career-bootcamp?utm_source=google&utm_medium=cpc&gclid=Cj0KCQiA_JTUBRD4ARIsAL7_VeUxJztZK1J-uHxXjeHIeTxSZWcBn6gi2J_jCNtiyOWirTwLJDoJd9YaAhlPEALw_wcB) Web Developer Track.
