ProtonMail Desktop
===

Developer: FloatFlower.Huang <floatflower@protonmail.com>

### What is this?

This is a desktop version of ProtonMail application, but actually the only thing I did was wrapping the web application by Electron.js
and add some desktop application features, like `minimize application to tray` and `only always-singleton window`.

I never collect personal data or anything else, and I am one of ProtonMail users, 
the purpose that I made this application is because I like desktop application more than web application, 
so just feel free and use it:)

### Download

Because I don't have machine with MacOS and I havn't built the CI/CD environment yet, 
so if you are looking forward to MacOS version, 
please wait me a second, I'll release MacOS version after finishing CI/CD with GitHub Action.

Furthermore, I release the pre-built version with Google Chrome link also because of undone CI/CD environment, 
once I finish that, I'll change to release application with Github distribution system.

Or, you can [donate me](https://payment.ecpay.com.tw/Broadcaster/Donate/EFA835E253F6CD1AC6D9780E23CC78CB) a mac mini, lol. (just kidding)

#### 1.0.0
+ Windows Portable: [x64](https://drive.google.com/file/d/1sBY6V8rLeWNreeuW093U0XEbT5hqzoup/view?usp=sharing)
+ Windows Installer: [x64](https://drive.google.com/file/d/1o5lksmEaG4HjlVkQQwHpslGYWY2fnPC9/view?usp=sharing)

### Built your own version

If you want to build this application by yourself, you can follow the instructions below, it's pretty simple.
Don't forget to install node.js with version > 14.17.0
```bash
~$ npm install
# Built windows version
~$ npm run dist:windows
```

### Bug Report

Please raise an issue if you encounter any bugs, or mail me if you have any advices on this project. 