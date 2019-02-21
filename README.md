# react-native-user-management
A simple react native user management app

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
Server side stack is Node js - Express js.

##### Configuration
you can find the configuration file in **`./server/src/settings.json`**.

###### Options  for settings.json 
```
{
  	"db_type": "in_memory",
    "db_config": {
        "host": "192.168.1.104",
        "user": "mmttt89",
        "password": "hhayty",
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
This application has been implemented using Expo.

##### Configuration
you can find the configuration for this application in **`./client/src/constants/settings.js`**.
To use mock data without calling any API service from the server set the `USE_MOCK_SERVICES` in this file to `true`;
To set the server endpoints urls, find the file in this path: `./mobile/src/constants/urls/Urls.dev.js` and change the `BASE_URL`;


### Screen shots
##### Sign in screen
<img src="https://github.com/MortiTotti/react-native-user-management/blob/master/screenshots/sign-in.png" width="400" aspectRatio="1/2">

##### Sign up screen
<img src="https://github.com/MortiTotti/react-native-user-management/blob/master/screenshots/sign-up.png" width="400" aspectRatio="1/2">

##### Home - Users screen
<img src="https://github.com/MortiTotti/react-native-user-management/blob/master/screenshots/users-screen.png" width="400" aspectRatio="1/2">

##### Edit User screen
<img src="https://github.com/MortiTotti/react-native-user-management/blob/master/screenshots/user-edit-screen.png" width="400" aspectRatio="1/2">

##### Edit User Address screen
<img src="https://github.com/MortiTotti/react-native-user-management/blob/master/screenshots/user-edit-address.png" width="400" aspectRatio="1/2">

##### Remove User account screen
<img src="https://github.com/MortiTotti/react-native-user-management/blob/master/screenshots/user-delete-account.png" width="400" aspectRatio="1/2">

