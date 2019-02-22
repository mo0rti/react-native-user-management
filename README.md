# react-native-user-management
A simple React Native user management app with Node-Js as back-end

## Explanation
This is a React-Native application (using expo) to demonstrate a user sign-in flow with a Node.js as its back-end.
On the server side, there are two types of repositories
 - In Memory database
 - My sql database

### Server Installation & Run

for the server side
- Run **`yarn`** to install the packages.
- Run **`npm install -g babel-cli`** to install babel_node.
- Run **`npm run start`** to start the server.

### React native Installation & Run
- Run **`yarn`** to install the packages.
- Run **`npm run start`** to start the application.

### Tests
 There are test cases for Redux actions and Redux reducers in **`./mobile/src/__tests__`**.
 - To run the tests simply execute  **`npm run test`**.
 

### Server
##### Explanation
Server side stack is Node js - Express js. In folder `database` there are a number of scripts to create a database with two tables called `users` and `address`. To insert default data, there are two files in the json format, which insert a number of primary records in these two tables.

##### Configuration
You can find the server configuration file in the following path: **`./server/src/settings.json`**.

###### Options  for settings.json 
```
{
  	"db_type": "in_memory",
    "db_config": {
        "host": "your_db_ip",
        "user": "your_db_username",
        "password": "your_db_password",
        "database": "user_management"
	}
}
```
| key | Description & Values |
| --- | --- |
| db_type | `in_memory` to use a in memory database, `db` to use a MySql database   |
| db_config | The connection configuration for database when `db_type` value is `db` |

There are two mock data files, one for user and another  for address. These mock files will be injected as initialization data into database when the `db_type` is `in_memory`;
- `./server/src/components/users/repository/mock.json`
- `./server/src/components/address/repository/mock.json`

##### End points
| method | url | Description |
| --- | --- | --- |
|POST| `/api/user/signin` | to sign in  |
|POST| `/api/user/signup` | to sign up |
|GET| `/api/user/` | to get the list of users |
|GET| `/api/user/:id` | to get the user information |
|POST| `/api/user/` | to save the user |
|POST| `/api/user/:id` | to edit the user |
|DELETE| `/api/user/:id` | to delete the user |
|GET| `/api/user/checkusername/:username` | to check if the username is already taken |
|POST| `/api/user/updateaddresses/:id` | to update all the user addresses |


### React Native
##### Explanation
This application has been implemented using Expo. There are 4 main screens in this application:
1. SignIn Screen
2. SignUp Screen
3. Home Screen (Tab screen)
	1. List screen >> To show the users list
	2. Sign out
4. User Account Edit Screen (Tab screen)
	1. User Main Information
	2. User Addresses
	3. Delete User 

##### Configuration
The program also has the ability to work without connecting to the server. There are some json files which contain with mock data.
You can find these files in the following path: **`./mobile/src/store/mock`**.
You can find the configuration for this application in **`./mobile/src/constants/settings.js`**.
To use mock files set the `USE_MOCK_SERVICES` in this file to `true`;
All urls to call the server endpoints are inside a file in the following path: **`./mobile/src/constants/urls/Urls.dev.js`**
In `Urls.dev.js` set the `BASE_URL` with the Node-Js server url (IP address is recommended).

### Screen shots
##### Sign in screen
<img src="https://github.com/MortiTotti/react-native-user-management/blob/master/screenshots/sign-in.png" width="400" aspectRatio="1/2">

##### Sign up screen
<img src="https://github.com/MortiTotti/react-native-user-management/blob/master/screenshots/sign-up.png" width="400" aspectRatio="1/2">

##### Home - Users screen
<img src="https://github.com/MortiTotti/react-native-user-management/blob/master/screenshots/users-screen.jpg" width="400" aspectRatio="1/2">

##### User Main Information
<img src="https://github.com/MortiTotti/react-native-user-management/blob/master/screenshots/user-edit-screen.png" width="400" aspectRatio="1/2">

##### User Addresses
<img src="https://github.com/MortiTotti/react-native-user-management/blob/master/screenshots/user-edit-address.png" width="400" aspectRatio="1/2">

##### Delete User 
<img src="https://github.com/MortiTotti/react-native-user-management/blob/master/screenshots/user-delete-account.png" width="400" aspectRatio="1/2">

