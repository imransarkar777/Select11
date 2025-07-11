import AvailablePlayers from "../AvailablePLayers/AvailablePlayers";
import SelectedPlayers from "../SelectedPlayes/SelectedPlayers";

const Playground = () => {
  const handleShowAvailable = () => {
    return <AvailablePlayers></AvailablePlayers>;
  };
  const handleShowSelected = () => {};

  return (
    <div className="flex justify-between">
      <div>  </div>
      <div>
        <button onClick={() => handleShowAvailable()}> Available </button>
        <button onClick={handleShowSelected}> Selected </button>
      </div>
    </div>
  );
};

export default Playground;
