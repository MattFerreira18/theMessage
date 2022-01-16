<!-- # theMessage -->

<div align="center">
  <img src="./.github/logo.svg" height="60px">

 your instant messaging open-source
</div>

## 🛠️ Technologies

### 🌎 Frontend
- [Typescript](https://www.typescriptlang.org/): typed language
- [React](https://reactjs.org/): library to create reactive interfaces
- [Next.JS](https://nextjs.org/): ReactJS framework to use Server Side Rendering
- [NextAuth](https://next-auth.js.org/): authentication solution for Next.JS
- [Styled Components](https://styled-components.com/): library to create CSS styles and components
  
### 📱 Mobile
- [Typescript](https://www.typescriptlang.org/) - typed language
- [React Native](https://reactnative.dev/) - library to create native applications for mobile devices
- [Expo](https://expo.dev/) - set of tools to React Native

### 💻 Backend
- [Typescript](https://www.typescriptlang.org/): typed language
- [ExpressJS](https://expressjs.com/): the server base
- [SocketIO](https://socket.io/): lib to work with websocket
- [PrismaORM](https://www.prisma.io/): database framework
- [PostgreSQL](https://www.postgresql.org/): relational database
- [Redis](https://redis.io/): database in memory

## 🚀 How to use?
### 📝 Pre requisites
 To initialize this project in your local machine, you need to install the:
- [Node.JS](https://nodejs.org/en/)
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/)
- [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- [Android Studio](https://developer.android.com/studio#downloads) or
- [XCode](https://developer.apple.com/xcode/) or
- [Expo GO](https://docs.expo.dev/get-started/installation/)

### 🖥️ Starting the project
1. first, clone this repository [clicking here](https://codeload.github.com/MattFerreira18/theMessage/zip/refs/heads/main) or using the command in your terminal: 
``` bash
  git clone https://github.com/MattFerreira18/theMessage.git
```

#### 🌎 Frontend
1. to start the Frontend application, open the web folder in your terminal and editor
2. run ```yarn``` in the terminal to install the dependencies
3. rename the .env.local.example to .env.local and populate this file with your variables
4. them, run ```yarn dev``` to init the application
5. in your browser, open the page: http://localhost:3000
   
#### 📱 Mobile
1. to start the Mobile application, open the web folder in your terminal and editor
2. run ```yarn``` in the terminal to install the dependencies
3. run ```yarn start``` to start the application
4. them, select the platform that do you want to use (Android Emulator, iPhone Emulator or in Physical Device)

#### 💻 Backend
1. to start the Backend application, open the web folder in your terminal and editor
2. run ```yarn``` in the terminal to install the dependencies
3. configure your PostgreSQL and Redis databases
4. rename the .example.env to .env and populate this file with your variables
5. run ```yarn prisma migrate deploy``` to populate your PostgreSQl database
6. run ```yarn prisma generate``` to create the GraphQL definitions (based in Prisma Schema)
7. run ```yarn start:dev``` to init the server
8. in your browser, open the page: http://localhost:4000 to open the GraphQL Playground 

## ✍ Author
<a href="https://www.github.com/MattFerreira18">
  <img src="https://www.github.com/MattFerreira18.png" style="border-radius: 50%" width="100px">
  <p>Matheus Ferreira</p>
</a>

<div>
  <a href="https://www.linkedin.com/in/matheus-ferreira-9267091b3/">
    <img src="https://img.shields.io/badge/-Matheus-blue?style=flat-square&logo=Linkedin&logoColor=white" alt="linkedIn badge">
  </a>
  <a href="https://github.com/MattFerreira18">
    <img src="https://img.shields.io/badge/-MattFerreira18-0d1117?style=flat-square&logo=github&logoColor=white" alt="">
  </a>
  <a href="mailto:matheusferreira.dev@gmail.com">
    <img src="https://img.shields.io/badge/-matheusferreira.dev@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white" alt="email badge">
  </a>
</div>
