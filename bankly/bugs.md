# first impressions :

1. In app.js , module.exports was written twice, solution removed.
2. When inspecting auth.js in /routes :
    - /register:
      1. Comments says wrong username/password should return 401. there's no validation method for this so this error is never raised. ( IMPLEMENT VALIDATION FOR THIS )
      2. User.register does not return "admin" value. added return statement for admin (default=false)
      3. registered fine wtih right params.
    - /login:
      1. no bugs so far.
3. When inspecting auth.js in /middleware:
   - authUser:
        1. This was doing nothing but maybe inserting the payload into req object. it needs to fail if there's no valid token. fixed by moving return next statement to if scope and throwing an unauthorized error if not valid.
4. When inspecting users.js in /routes :
   - /GET:
        1. No bugs so far
   - /GET/:username :
        1. No bugs so far
   - /PATCH/:username :
        1. Using to many middlewares. it should not use the requireAdmin, it should evaluate if it's admin after user is logged in. OtherWise the current user won't be able do edit, only admin.
        2. Update working properly.
   - /DELETE/:username :
        1. Again, only admins are allowed to remove because of middleware, it should be the same functionality as the PATCH route. fixed by Replacing requireAdmin for requireLogin and adding auth validation inside the route.

5. When inspectin routes.test.js :
   - beforeAll:
        1. first query to insert users is missing parameters , only values added. modified to " INSERT INTO users(username, first_name, last_name, email, phone, password, admin) ..." 
        2. Added validation with jscon schema for /PATCH " should disallow patching not-allowed-fields
        3. modified test "should deny access if not admin", included option do allow if right user, so testing token(not-admin) to delete different user.