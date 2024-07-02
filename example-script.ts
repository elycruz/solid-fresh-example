// import {
//   fetch,
//   getDefaultSession,
//   handleIncomingRedirect,
//   login,
// } from "@inrupt/solid-client-authn-browser";

const login = (_x: any) => null;

function loginToSelectedIdP(selectedIdP: string) {
  return login({
    oidcIssuer: selectedIdP,
    redirectUrl: new URL("/", window.location.href).toString(),
    clientName: "Getting started app",
  });
}
