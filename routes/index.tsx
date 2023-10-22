import {useSignal} from "@preact/signals";

export default function Home() {
  const count = useSignal(3);
  return (<>
      <header>
        <div className="h-limit-wrapper">
          <hgroup>
            <h2>Getting Started</h2>
            <h3>with Inrupt JavaScript Client Libraries</h3>
          </hgroup>
        </div>
      </header>
      <main>
        <div className="h-limit-wrapper">
          <form id="login-form" action="#">
            <fieldset className="x-fieldset x-fieldset--grid-2">
              <label htmlFor="select-ident-provider">1. Select your Identity Provider: </label>
              <div>
                <select id="select-ident-provider" name="select-ident-provider" className="x-input">
                  <option value="">--Please select an Identity Provider (IdP)--</option>
                  {/*!-- Update the select-idp option if not using PodSpaces --*/}
                  <option value="https://login.inrupt.com">https://login.inrupt.com (PodSpaces)</option>
                </select>

                <button className="x-btn x-theme-primary x-filled">Login</button>
              </div>
            </fieldset>
            <fieldset>
            </fieldset>
          </form>

          <form id="read-form" action="#">
            <fieldset>
              <label htmlFor="user-web-id">2. Logged in with your WebID: </label>
              <input type="text" id="user-web-id" name="user-web-id" size="50" disabled/>

              <button>Get Pod URL(s)</button>
            </fieldset>
          </form>

          <form id="write">
            <legened>3.Create a private reading list in my Pod.</legened>
            <label id="podlabel" htmlFor="select-pod">a. Write to your Pod: </label>

            <select id="select-pod" name="select-pod">
              <option value="">--Please select your Pod--</option>
            </select>

            <span>getting-started/readingList/myList</span>

            <label id="listLabel" htmlFor="titles">b. Enter items to read: </label>
            <textarea id="titles" name="titles" rows="5" cols="42">Leaves of Grass
RDF 1.1 Primer</textarea>
            <button name="btnCreate" id="btnCreate">Create</button>

            <fieldset id="results">
              <label>Create Reading List Status</label>
              <span id="labelCreateStatus"></span>
              <label id="labelRetrieved" htmlFor="savedtitles">Retrieved to validate:</label>
              <textarea id="savedtitles" name="savedtitles" rows="5" cols="42" disabled></textarea>
            </fieldset>
          </form>
        </div>
      </main>
      <footer>
        <div className="h-limit-wrapper">
          <p>&copy; elycruz 2023</p>
        </div>
      </footer>
    </>
  );
}
