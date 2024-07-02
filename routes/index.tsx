import SolidProtocolExample from "../islands/SolidProtocolExample.tsx";

export default function Home() {
  return (
    <main>
      <header>
        <div className="h-limit-wrapper">
          <hgroup>
            <h2>Getting Started</h2>
            <h3>with Inrupt JavaScript Client Libraries</h3>
          </hgroup>
        </div>
      </header>
      <SolidProtocolExample />
    </main>
  );
}
