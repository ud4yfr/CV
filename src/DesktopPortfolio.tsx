import React from "react";

import Boot from "~/pages/Boot";
import Desktop from "~/pages/Desktop";
import Login from "~/pages/Login";

export default function DesktopPortfolio() {
  const [login, setLogin] = useState<boolean>(false);
  const [booting, setBooting] = useState<boolean>(false);
  const [restart, setRestart] = useState<boolean>(false);
  const [sleep, setSleep] = useState<boolean>(false);

  const shutMac = (event: React.MouseEvent): void => {
    event.stopPropagation();
    setRestart(false);
    setSleep(false);
    setLogin(false);
    setBooting(true);
  };

  const restartMac = (event: React.MouseEvent): void => {
    event.stopPropagation();
    setRestart(true);
    setSleep(false);
    setLogin(false);
    setBooting(true);
  };

  const sleepMac = (event: React.MouseEvent): void => {
    event.stopPropagation();
    setRestart(false);
    setSleep(true);
    setLogin(false);
    setBooting(true);
  };

  if (booting) {
    return <Boot restart={restart} sleep={sleep} setBooting={setBooting} />;
  }

  if (login) {
    return (
      <Desktop
        setLogin={setLogin}
        shutMac={shutMac}
        sleepMac={sleepMac}
        restartMac={restartMac}
      />
    );
  }

  return (
    <Login
      setLogin={setLogin}
      shutMac={shutMac}
      sleepMac={sleepMac}
      restartMac={restartMac}
    />
  );
}
