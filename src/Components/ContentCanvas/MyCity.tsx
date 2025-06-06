import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";

import SkyWithSun from "./UiCanvas/SkyWithSun";
import CityFloorAndWalls from "./UiCanvas/CityFloorAndWalls";
import Game from "./Game/Game";
import Cameras from "./UiCanvas/Cameras";
import MunitionZone from "./Game/UtilityGame/MunitionZone";

import { useStartGameStore } from "../useStartGameStore";
import MiniMap2D from "./MiniMap2D/MiniMap2D";
import { Environment, OrbitControls } from "@react-three/drei";
import LeftStreet from "./Streets/LeftStreet";
import RightStreet from "./Streets/RightStreet";

const MyCity = () => {
  // const characterRef = useRef<Group | null>(null);
  const showGameScene = useStartGameStore((state) => state.showGameScene);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        camera={{ position: [0, 100, 300], fov: 60 }}
        shadows
        style={{
          visibility: showGameScene ? "visible" : "hidden",
          transition: "visibility 0s 0.5s",
        }}
      >
        <Physics gravity={[0, -9.81, 0]}>
          {/* <Environment files="src/assets/bgMilkyWay.jpg" background /> */}
          <SkyWithSun />

          {/* <OrbitControls /> */}
          <Cameras />

          <LeftStreet />
          <RightStreet />
          <CityFloorAndWalls />
          <Game />

          <MunitionZone />
        </Physics>
        <MiniMap2D />
      </Canvas>
    </div>
  );
};

export default MyCity;
// near: 1, far: 20000
