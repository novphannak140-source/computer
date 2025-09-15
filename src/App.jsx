import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Accessories from "./pages/Accessories";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import MonitorStand from "./routers/MonitorStand";
import Mouse from "./routers/Mouse";
import Keyborad from "./routers/Keyborad";
import Monitor from "./routers/Monitor";
import Laptop from "./routers/Laptop";
import Rtx from "./routers/Rtx";
import HeadPhone from "./routers/HeadPhone";
import Teble from "./routers/Teble";
import Pc from "./routers/Pc";
import DynamiceMonitor from "./ux/DynamiceMonitor";
import { CardMonitor } from "./ux/CardMonitor";
import DynamicePc from "./ux/DynamicePc";
import { CardPc } from "./ux/CardPc";
import DynamiceLaptop from "./ux/DynamiceLaptop";
import { CardLaptop } from "./ux/CardLaptop";
import DynamiceHeadPhone from "./ux/DynamiceHeadPhone";
import { CardHeadPhone } from "./ux/CardHeadphone";
import DynamiceKeyborad from "./ux/DynamiceKeyborad";
import { CardKeyborad } from "./ux/CardKeyborad";
import DynamiceMonitorStand from "./ux/DynamiceMonitorStand";
import { CardMonitorStand } from "./ux/CardMonitorStand";
import DynamiceTable from "./ux/DynamiceTable";
import { CardTable } from "./ux/CardTable";
import DynamiceRtx from "./ux/DynamiceRtx";
import { CardRtx } from "./ux/CardRtx";
import DynamiceMouse from "./ux/DynamiceMouse";
import { CardMouse } from "./ux/CardMouse";
import NavlocalContect from "./components/NavlocalContect";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/product" element={<Product />} />
          {/* MonitorStand */}
          <Route
            path="/monitorstand"
            element={<MonitorStand data={CardMonitorStand} />}
          />
          <Route
            path="/cardmonitorstand/:id"
            element={<DynamiceMonitorStand user={CardMonitorStand} />}
          />
          {/* MonitorStand */}

          {/* Mouse */}
          <Route path="/mouse" element={<Mouse data={CardMouse} />} />
          <Route
            path="/cardmouse/:id"
            element={<DynamiceMouse user={CardMouse} />}
          />
          {/* Mouse */}

          {/* Keyborad */}
          <Route path="/keyborad" element={<Keyborad data={CardKeyborad} />} />
          <Route
            path="/cardkeyborad/:id"
            element={<DynamiceKeyborad user={CardKeyborad} />}
          />
          {/* Keyborad */}

          {/* Monitor  */}
          <Route path="/monitor" element={<Monitor data={CardMonitor} />} />
          <Route
            path="/monitoruser/:id"
            element={<DynamiceMonitor user={CardMonitor} />}
          />
          {/* Monitor */}

          {/* Laptop  */}
          <Route path="/laptop" element={<Laptop data={CardLaptop} />} />
          <Route
            path="/cardlaptop/:id"
            element={<DynamiceLaptop user={CardLaptop} />}
          />
          {/* Laptop */}

          {/* Rtx */}
          <Route path="/rtx" element={<Rtx data={CardRtx} />} />
          <Route path="/cardrtx/:id" element={<DynamiceRtx user={CardRtx} />} />
          {/* Rtx */}

          {/* HeadPhone */}
          <Route
            path="/headphone"
            element={<HeadPhone data={CardHeadPhone} />}
          />
          <Route
            path="/cardheadphone/:id"
            element={<DynamiceHeadPhone user={CardHeadPhone} />}
          />
          {/* HeadPhone */}

          {/* Table */}
          <Route path="/teble" element={<Teble data={CardTable} />} />
          <Route
            path="/cardtable/:id"
            element={<DynamiceTable user={CardTable} />}
          />
          {/* Table */}
          {/* pc */}
          <Route path="/pc" element={<Pc data={CardPc} />} />
          <Route path="/cardpc/:id" element={<DynamicePc user={CardPc} />} />
          {/* pc */}
        </Routes>
        <NavlocalContect />
      </Router>
    </>
  );
}

export default App;
