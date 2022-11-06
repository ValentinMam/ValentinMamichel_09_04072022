# 30/10/22

## Front-End 
 
- install live-server: `npm install live-server`

## Back-End 

- install cross-env: `npm install cross-env`


Premier rapport de test sur le projet:

```
npm run test
```



```
 PASS  src/__tests__/DashboardFormUI.js (14.237 s)
 FAIL  src/__tests__/Login.js (14.799 s)
  ● Given that I am a user on login page › When I do fill fields in correct format and I click on admin button Login In › Then I should be identified as an HR admin in app     

    TypeError: Cannot read property 'value' of null

  ● Given that I am a user on login page › When I do fill fields in correct format and I click on admin button Login In › Then I should be identified as an HR admin in app     

    TypeError: Cannot read property 'value' of null

  ● Given that I am a user on login page › When I do fill fields in correct format and I click on admin button Login In › Then I should be identified as an HR admin in app     

    expect(jest.fn()).toHaveBeenCalled()

    Expected number of calls: >= 1
    Received number of calls:    0

  ● Given that I am a user on login page › When I do fill fields in correct format and I click on admin button Login In › It should renders HR dashboard page

    expect(received).toBeTruthy()

    Received: null

 PASS  src/__tests__/routes.js
 PASS  src/__tests__/Dashboard.js (18.103 s)
 PASS  src/__tests__/Logout.js
 FAIL  src/__tests__/Bills.js
  ● Given I am connected as an employee › When I am on Bills Page › Then bills should be ordered from earliest to latest

    expect(received).toEqual(expected) // deep equality

    - Expected  - 1
    + Received  + 1

      Array [
        "2004-04-04",
    +   "2001-01-01",
        "2003-03-03",
        "2002-02-02",
    -   "2001-01-01",
      ]

 PASS  src/__tests__/ErrorPage.js
 PASS  src/__tests__/Actions.js
 PASS  src/__tests__/VerticalLayout.js        
 PASS  src/__tests__/LoadingPage.js
 PASS  src/__tests__/NewBill.js
---------------------|---------|----------|---------|---------|----------------------
File                 | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s    
---------------------|---------|----------|---------|---------|----------------------
All files            |   66.81 |    78.89 |   61.76 |   67.73 |                      
 constants           |     100 |      100 |     100 |     100 |                      
  routes.js          |     100 |      100 |     100 |     100 |                      
  usersTest.js       |       0 |        0 |       0 |       0 |                      
 containers          |    60.3 |    65.45 |   50.94 |   61.41 | 
  Bills.js           |   48.28 |       50 |      25 |      50 | 14,20,24-27,36-56   
  Dashboard.js       |   89.29 |    80.49 |   79.17 |   95.83 | 142-145
  Login.js           |   58.54 |        0 |   36.36 |   58.54 | 29,48-57,63-72,78-92 
  Logout.js          |     100 |      100 |     100 |     100 | 
  NewBill.js         |       0 |        0 |       0 |       0 | 6-73
 views               |     100 |      100 |     100 |     100 | 
  Actions.js         |     100 |      100 |     100 |     100 | 
  BillsUI.js         |     100 |      100 |     100 |     100 | 
  DashboardFormUI.js |     100 |      100 |     100 |     100 | 
  DashboardUI.js     |     100 |      100 |     100 |     100 | 
  ErrorPage.js       |     100 |      100 |     100 |     100 | 
  LoadingPage.js     |     100 |      100 |     100 |     100 | 
  LoginUI.js         |     100 |      100 |     100 |     100 | 
  NewBillUI.js       |     100 |      100 |     100 |     100 | 
  VerticalLayout.js  |     100 |      100 |     100 |     100 | 
---------------------|---------|----------|---------|---------|----------------------

Test Suites: 2 failed, 9 passed, 11 total
Tests:       3 failed, 39 passed, 42 total
Snapshots:   0 total
Time:        30.617 s

```



# 06/11/22

## Front-End 

- ESLint: `npm install eslint --save-dev`
- Prettier: `npm install prettier --save-dev`
- ESLint-config-prettier: `npm install eslint-config-prettier --save-dev`


```
PS D:\Développeur d'application\ValentinMamichel_09_04072022\bill-app\front-end> npm run lint

> lint
> npx eslint src


D:\Développeur d'application\ValentinMamichel_09_04072022\bill-app\front-end\src\__mocks__\store.js
  71:10  error  'bill' is defined but never used  no-unused-vars
  77:10  error  'bill' is defined but never used  no-unused-vars

D:\Développeur d'application\ValentinMamichel_09_04072022\bill-app\front-end\src\__tests__\Actions.js
   9:1  error  'describe' is not defined  no-undef
  10:3  error  'describe' is not defined  no-undef
  11:5  error  'test' is not defined      no-undef
  14:7  error  'expect' is not defined    no-undef
  17:3  error  'describe' is not defined  no-undef
  18:5  error  'test' is not defined      no-undef
  22:7  error  'expect' is not defined    no-undef

D:\Développeur d'application\ValentinMamichel_09_04072022\bill-app\front-end\src\__tests__\Bills.js
  13:1   error  'describe' is not defined                        no-undef
  14:3   error  'describe' is not defined                        no-undef
  15:5   error  'test' is not defined                            no-undef
  31:13  error  'windowIcon' is assigned a value but never used  no-unused-vars
  34:5   error  'test' is not defined                            no-undef
  47:7   error  'expect' is not defined                          no-undef

D:\Développeur d'application\ValentinMamichel_09_04072022\bill-app\front-end\src\__tests__\Dashboard.js
   16:1   error  'jest' is not defined        no-undef
   20:1   error  'describe' is not defined    no-undef
   21:3   error  'describe' is not defined    no-undef
   22:5   error  'test' is not defined        no-undef
   24:7   error  'expect' is not defined      no-undef
   27:3   error  'describe' is not defined    no-undef
   28:5   error  'test' is not defined        no-undef
   30:7   error  'expect' is not defined      no-undef
   33:3   error  'describe' is not defined    no-undef
   34:5   error  'test' is not defined        no-undef
   36:7   error  'expect' is not defined      no-undef
   39:3   error  'describe' is not defined    no-undef
   40:5   error  'test' is not defined        no-undef
   42:7   error  'expect' is not defined      no-undef
   45:3   error  'describe' is not defined    no-undef
   46:5   error  'test' is not defined        no-undef
   48:7   error  'expect' is not defined      no-undef
   52:3   error  'describe' is not defined    no-undef
   53:5   error  'test' is not defined        no-undef
   75:34  error  'jest' is not defined        no-undef
   78:34  error  'jest' is not defined        no-undef
   81:34  error  'jest' is not defined        no-undef
   91:7   error  'expect' is not defined      no-undef
   95:7   error  'expect' is not defined      no-undef
   98:7   error  'expect' is not defined      no-undef
  102:7   error  'expect' is not defined      no-undef
  106:7   error  'expect' is not defined      no-undef
  110:7   error  'expect' is not defined      no-undef
  114:3   error  'describe' is not defined    no-undef
  115:5   error  'test' is not defined        no-undef
  136:34  error  'jest' is not defined        no-undef
  142:7   error  'expect' is not defined      no-undef
  143:7   error  'expect' is not defined      no-undef
  146:7   error  'expect' is not defined      no-undef
  150:3   error  'describe' is not defined    no-undef
  151:5   error  'test' is not defined        no-undef
  173:34  error  'jest' is not defined        no-undef
  179:7   error  'expect' is not defined      no-undef
  180:7   error  'expect' is not defined      no-undef
  185:7   error  'expect' is not defined      no-undef
  189:3   error  'describe' is not defined    no-undef
  190:5   error  'test' is not defined        no-undef
  193:7   error  'expect' is not defined      no-undef
  198:1   error  'describe' is not defined    no-undef
  199:3   error  'describe' is not defined    no-undef
  200:5   error  'test' is not defined        no-undef
  223:34  error  'jest' is not defined        no-undef
  228:7   error  'expect' is not defined      no-undef
  230:7   error  'expect' is not defined      no-undef
  233:3   error  'describe' is not defined    no-undef
  234:5   error  'test' is not defined        no-undef
  256:34  error  'jest' is not defined        no-undef
  261:7   error  'expect' is not defined      no-undef
  263:7   error  'expect' is not defined      no-undef
  268:1   error  'describe' is not defined    no-undef
  269:3   error  'describe' is not defined    no-undef
  270:5   error  'test' is not defined        no-undef
  291:34  error  'jest' is not defined        no-undef
  295:7   error  'expect' is not defined      no-undef
  298:7   error  'expect' is not defined      no-undef
  304:1   error  'describe' is not defined    no-undef
  305:3   error  'describe' is not defined    no-undef
  306:5   error  'test' is not defined        no-undef
  320:7   error  'expect' is not defined      no-undef
  322:7   error  'expect' is not defined      no-undef
  323:7   error  'expect' is not defined      no-undef
  325:5   error  'describe' is not defined    no-undef
  326:7   error  'beforeEach' is not defined  no-undef
  327:9   error  'jest' is not defined        no-undef
  343:7   error  'test' is not defined        no-undef
  352:27  error  'process' is not defined     no-undef
  354:9   error  'expect' is not defined      no-undef
  357:7   error  'test' is not defined        no-undef
  367:27  error  'process' is not defined     no-undef
  369:9   error  'expect' is not defined      no-undef

D:\Développeur d'application\ValentinMamichel_09_04072022\bill-app\front-end\src\__tests__\DashboardFormUI.js
  41:1  error  'describe' is not defined  no-undef
  42:3  error  'describe' is not defined  no-undef
  43:5  error  'test' is not defined      no-undef
  46:7  error  'expect' is not defined    no-undef
  47:7  error  'expect' is not defined    no-undef
  48:7  error  'expect' is not defined    no-undef
  49:7  error  'expect' is not defined    no-undef
  50:7  error  'expect' is not defined    no-undef
  51:7  error  'expect' is not defined    no-undef
  52:7  error  'expect' is not defined    no-undef
  53:7  error  'expect' is not defined    no-undef
  56:3  error  'describe' is not defined  no-undef
  57:5  error  'test' is not defined      no-undef
  60:7  error  'expect' is not defined    no-undef
  61:7  error  'expect' is not defined    no-undef
  62:7  error  'expect' is not defined    no-undef
  65:3  error  'describe' is not defined  no-undef
  66:5  error  'test' is not defined      no-undef
  69:7  error  'expect' is not defined    no-undef
  72:3  error  'describe' is not defined  no-undef
  73:5  error  'test' is not defined      no-undef
  76:7  error  'expect' is not defined    no-undef

D:\Développeur d'application\ValentinMamichel_09_04072022\bill-app\front-end\src\__tests__\ErrorPage.js
   8:1  error  'describe' is not defined  no-undef
   9:3  error  'describe' is not defined  no-undef
  10:5  error  'test' is not defined      no-undef
  13:7  error  'expect' is not defined    no-undef
  14:7  error  'expect' is not defined    no-undef
  19:3  error  'describe' is not defined  no-undef
  20:5  error  'test' is not defined      no-undef
  24:7  error  'expect' is not defined    no-undef

D:\Développeur d'application\ValentinMamichel_09_04072022\bill-app\front-end\src\__tests__\LoadingPage.js
   8:1  error  'describe' is not defined  no-undef
   9:3  error  'describe' is not defined  no-undef
  10:5  error  'test' is not defined      no-undef
  13:7  error  'expect' is not defined    no-undef

D:\Développeur d'application\ValentinMamichel_09_04072022\bill-app\front-end\src\__tests__\Login.js
   10:1   error  'describe' is not defined  no-undef
   11:3   error  'describe' is not defined  no-undef
   12:5   error  'test' is not defined      no-undef
   16:7   error  'expect' is not defined    no-undef
   19:7   error  'expect' is not defined    no-undef
   22:28  error  'jest' is not defined      no-undef
   28:7   error  'expect' is not defined    no-undef
   32:3   error  'describe' is not defined  no-undef
   33:5   error  'test' is not defined      no-undef
   38:7   error  'expect' is not defined    no-undef
   42:7   error  'expect' is not defined    no-undef
   45:28  error  'jest' is not defined      no-undef
   51:7   error  'expect' is not defined    no-undef
   55:3   error  'describe' is not defined  no-undef
   56:5   error  'test' is not defined      no-undef
   65:7   error  'expect' is not defined    no-undef
   71:7   error  'expect' is not defined    no-undef
   78:20  error  'jest' is not defined      no-undef
   81:20  error  'jest' is not defined      no-undef
   95:21  error  'jest' is not defined      no-undef
  105:28  error  'jest' is not defined      no-undef
  106:21  error  'jest' is not defined      no-undef
  109:7   error  'expect' is not defined    no-undef
  110:7   error  'expect' is not defined    no-undef
  111:7   error  'expect' is not defined    no-undef
  122:5   error  'test' is not defined      no-undef
  123:7   error  'expect' is not defined    no-undef
  128:1   error  'describe' is not defined  no-undef
  129:3   error  'describe' is not defined  no-undef
  130:5   error  'test' is not defined      no-undef
  134:7   error  'expect' is not defined    no-undef
  137:7   error  'expect' is not defined    no-undef
  140:28  error  'jest' is not defined      no-undef
  146:7   error  'expect' is not defined    no-undef
  150:3   error  'describe' is not defined  no-undef
  151:5   error  'test' is not defined      no-undef
  156:7   error  'expect' is not defined    no-undef
  160:7   error  'expect' is not defined    no-undef
  163:28  error  'jest' is not defined      no-undef
  169:7   error  'expect' is not defined    no-undef
  173:3   error  'describe' is not defined  no-undef
  174:5   error  'test' is not defined      no-undef
  185:7   error  'expect' is not defined    no-undef
  191:7   error  'expect' is not defined    no-undef
  198:20  error  'jest' is not defined      no-undef
  201:20  error  'jest' is not defined      no-undef
  215:21  error  'jest' is not defined      no-undef
  225:28  error  'jest' is not defined      no-undef
  226:21  error  'jest' is not defined      no-undef
  229:7   error  'expect' is not defined    no-undef
  230:7   error  'expect' is not defined    no-undef
  231:7   error  'expect' is not defined    no-undef
  242:5   error  'test' is not defined      no-undef
  243:7   error  'expect' is not defined    no-undef

D:\Développeur d'application\ValentinMamichel_09_04072022\bill-app\front-end\src\__tests__\Logout.js
  32:1   error  'describe' is not defined  no-undef
  33:3   error  'describe' is not defined  no-undef
  34:5   error  'test' is not defined      no-undef
  47:27  error  'jest' is not defined      no-undef
  52:7   error  'expect' is not defined    no-undef
  53:7   error  'expect' is not defined    no-undef

D:\Développeur d'application\ValentinMamichel_09_04072022\bill-app\front-end\src\__tests__\NewBill.js
   5:10  error  'screen' is defined but never used   no-unused-vars
   7:8   error  'NewBill' is defined but never used  no-unused-vars
   9:1   error  'describe' is not defined            no-undef
  10:3   error  'describe' is not defined            no-undef
  11:5   error  'test' is not defined                no-undef

D:\Développeur d'application\ValentinMamichel_09_04072022\bill-app\front-end\src\__tests__\VerticalLayout.js
   9:1  error  'describe' is not defined  no-undef
  10:3  error  'test' is not defined      no-undef
  18:5  error  'expect' is not defined    no-undef
  19:5  error  'expect' is not defined    no-undef

D:\Développeur d'application\ValentinMamichel_09_04072022\bill-app\front-end\src\__tests__\routes.js
  12:1  error  'describe' is not defined  no-undef
  13:3  error  'describe' is not defined  no-undef
  14:5  error  'test' is not defined      no-undef
  23:7  error  'expect' is not defined    no-undef
  26:3  error  'describe' is not defined  no-undef
  27:5  error  'test' is not defined      no-undef
  36:7  error  'expect' is not defined    no-undef
  39:3  error  'describe' is not defined  no-undef
  40:5  error  'test' is not defined      no-undef
  49:7  error  'expect' is not defined    no-undef
  52:3  error  'describe' is not defined  no-undef
  53:5  error  'test' is not defined      no-undef
  62:7  error  'expect' is not defined    no-undef
  65:3  error  'describe' is not defined  no-undef
  66:5  error  'test' is not defined      no-undef
  75:7  error  'expect' is not defined    no-undef

D:\Développeur d'application\ValentinMamichel_09_04072022\bill-app\front-end\src\app\Router.js
   24:9   error  'onNavigate' is not defined    no-undef
   36:9   error  'onNavigate' is not defined    no-undef
   50:13  error  'onNavigate' is not defined    no-undef
   62:9   error  'onNavigate' is not defined    no-undef
   74:9   error  'onNavigate' is not defined    no-undef
   85:13  error  'onNavigate' is not defined    no-undef
   97:24  error  'e' is defined but never used  no-unused-vars
  103:7   error  'onNavigate' is not defined    no-undef
  111:7   error  'onNavigate' is not defined    no-undef
  128:9   error  'onNavigate' is not defined    no-undef
  142:13  error  'onNavigate' is not defined    no-undef
  157:9   error  'onNavigate' is not defined    no-undef
  172:9   error  'onNavigate' is not defined    no-undef
  183:13  error  'onNavigate' is not defined    no-undef

D:\Développeur d'application\ValentinMamichel_09_04072022\bill-app\front-end\src\app\datepicker.js
   6:7  error  'WEEK' is assigned a value but never used      no-unused-vars
   8:7  error  'weekdays' is assigned a value but never used  no-unused-vars
  59:7  error  'Datepicker' is defined but never used         no-unused-vars

D:\Développeur d'application\ValentinMamichel_09_04072022\bill-app\front-end\src\containers\Bills.js
  33:33  error  '$' is not defined  no-undef
  34:5   error  '$' is not defined  no-undef
  39:5   error  '$' is not defined  no-undef

D:\Développeur d'application\ValentinMamichel_09_04072022\bill-app\front-end\src\containers\Dashboard.js
   85:5   error  '$' is not defined  no-undef
   88:5   error  '$' is not defined  no-undef
   91:5   error  '$' is not defined  no-undef
   98:21  error  '$' is not defined  no-undef
   99:33  error  '$' is not defined  no-undef
  100:5   error  '$' is not defined  no-undef
  105:16  error  '$' is not defined  no-undef
  106:7   error  '$' is not defined  no-undef
  119:9   error  '$' is not defined  no-undef
  121:7   error  '$' is not defined  no-undef
  122:7   error  '$' is not defined  no-undef
  123:7   error  '$' is not defined  no-undef
  126:7   error  '$' is not defined  no-undef
  128:7   error  '$' is not defined  no-undef
  131:7   error  '$' is not defined  no-undef
  134:5   error  '$' is not defined  no-undef
  135:5   error  '$' is not defined  no-undef
  138:5   error  '$' is not defined  no-undef
  147:21  error  '$' is not defined  no-undef
  157:21  error  '$' is not defined  no-undef
  171:7   error  '$' is not defined  no-undef
  172:7   error  '$' is not defined  no-undef
  177:7   error  '$' is not defined  no-undef
  178:7   error  '$' is not defined  no-undef
  183:7   error  '$' is not defined  no-undef

D:\Développeur d'application\ValentinMamichel_09_04072022\bill-app\front-end\src\containers\Login.js
  42:15  error  'err' is defined but never used  no-unused-vars
  66:15  error  'err' is defined but never used  no-unused-vars

D:\Développeur d'application\ValentinMamichel_09_04072022\bill-app\front-end\src\containers\Logout.js
   8:5   error  '$' is not defined             no-undef
  11:18  error  'e' is defined but never used  no-unused-vars

D:\Développeur d'application\ValentinMamichel_09_04072022\bill-app\front-end\src\views\Actions.js
  2:8  error  'downloadBlueIcon' is defined but never used  no-unused-vars

✖ 259 problems (259 errors, 0 warnings)

```
- 259 problems (259 errors, 0 warnings)

