# React Context API – Step-by-Step Notes

1. Create the `context` Folder  
Inside the `src` directory, create a new folder named `context`.

src/
└── context/

2. Create `UserContext.js`  
Inside the `context` folder, create a file called `UserContext.js`.  
This file will hold the context object.

Purpose of Context:
- Context acts like a global variable
- It helps share data across components without prop drilling

Code: UserContext.js

```js
import { createContext } from "react";

const UserContext = createContext();

export default UserContext;
```

3. Create the Context Provider  
Context only creates a container.  
Provider is responsible for passing data.  
Provider must be wrapped at the top level (App.jsx or main.jsx).  
Provider is a JSX component.

4. Create `UserContextProvider.js`

Inside the same `context` folder, create `UserContextProvider.js`.

Code: UserContextProvider.js

```js
import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
```

Explanation:
- useState manages shared state (user)
- value decides what data is globally accessible
- children represents wrapped components

5. Wrap Provider in App.jsx or main.jsx  
You can wrap the provider in:
- main.jsx (recommended for large apps)
- App.jsx

Code: App.jsx

```js
import React from "react";
import UserContextProvider from "./context/UserContextProvider";

const App = () => {
  return (
    <UserContextProvider>
      <h1>Shayan</h1>
    </UserContextProvider>
  );
};

export default App;
```
# React Context API – Step-by-Step Notes

1. Create the `context` Folder  
Inside the `src` directory, create a new folder named `context`.

src/
└── context/

2. Create `UserContext.js`  
Inside the `context` folder, create a file called `UserContext.js`.  
This file will hold the context object.

Purpose of Context:
- Context acts like a global variable
- It helps share data across components without prop drilling

Code: UserContext.js

```js
import { createContext } from "react";

const UserContext = createContext();

export default UserContext;
```

3. Create the Context Provider  
Context only creates a container.  
Provider is responsible for passing data.  
Provider must be wrapped at the top level (App.jsx or main.jsx).  
Provider is a JSX component.

4. Create `UserContextProvider.js`

Inside the same `context` folder, create `UserContextProvider.js`.

Code: UserContextProvider.jsx

```js
import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
```

Explanation:
- useState manages shared state (user)
- value decides what data is globally accessible
- children represents wrapped components

5. Wrap Provider in App.jsx or main.jsx  
You can wrap the provider in:
- main.jsx (recommended for large apps)
- App.jsx

Code: App.jsx

```js
import React from "react";
import UserContextProvider from "./context/UserContextProvider";

const App = () => {
  return (
    <UserContextProvider>
      <h1>Shayan</h1>
    </UserContextProvider>
  );
};

export default App;
```
