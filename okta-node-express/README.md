Okta Node.js Express sample
===========================

This application shows how to protect your application using Okta. Packages passport and passport-saml and are used to handle the SAML authentication and connect was used to compress the requests from the node server.

The idea is only to show how to integrate and what options to provide when configuring Okta. Please follow best practices for securing your application like setting a random secure token for session etc.

You need the X509 cert string and target url from Okta. Config them in [config.json](config.json)  You can get these details from the Okta team when you ask them to configure you application in Okta.


For the sample configuration, please refer the my.thoughtworks.com page for okta samples.

In order to configure your okta application, remember to create it from the SAML 2.0 Template using the following parameters:

| Setting              | Value                                                     |
| ---------------------|---------------------------------------------------------- |
| Post Back URL        | http://localhost:3000/login/callback                      |
| ID Format            | EmailAddress                                              |
| Recipient            | http://localhost:3000/                                    |
| Audience Restriction | http://localhost:3000/                                    |
| authnContextClassRef | PasswordProtectedTransport                                |
| Response             | Signed                                                    |
| Assertion            | Signed                                                    |
| Request              | Compressed                                                |
| Destination          | http://localhost:3000/login/callback                      |
| Attribute Statements | email&#124;${user.email},firstName&#124;${user.firstName} |

Setup
-----
`npm install`

Running
-------
`npm start`

The app will be available at http://localhost:3000




