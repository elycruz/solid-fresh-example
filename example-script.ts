import {
  login,
  handleIncomingRedirect,
  getDefaultSession,
  fetch
} from "@inrupt/solid-client-authn-browser";

function loginToSelectedIdP(selectedIdP: string) {
  return login({
    oidcIssuer: selectedIdP,
    redirectUrl: new URL("/", window.location.href).toString(),
    clientName: "Getting started app"
  });
}
