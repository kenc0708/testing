import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  Circle,
  useMapEvents,
} from 'react-leaflet';
import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import M from '../../../../../Assets/placeholder.png';


// const
const position = [22.316392, 114.18020044226338];
const customPosition = [22.4253658,114.030971];

const icon = L.icon({
  iconUrl: M,
  iconSize: [38, 38],
});

const customIcon = L.icon({
  iconUrl: 'https://www.homeijan.com/public/uploads/product_categories/category-bg-07.png',
  iconSize: [38, 38],
});

function ClickHandler(props) {
  const { setSelectPosition } = props;
  const map = useMap();

  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      setSelectPosition({ lat, lon: lng });
    },
  });

  return null;
}


function ResetCenterView(props) {
  const { selectPosition } = props;
  const maps = useMap();

  useEffect(() => {
    if (selectPosition) {
      maps.setView(
        L.latLng(selectPosition?.lat, selectPosition?.lon),
        maps.getZoom(),
        {
          animate: true,
        },
      );
    }
  }, [selectPosition]);

  return null;
}

const Map = (props) => {
  const { selectPosition, setSelectPosition } = props;
  const locationSelection = [selectPosition?.lat, selectPosition?.lon];

  return (
    <div className="Map">
      <MapContainer
        
        center={position}
        zoom={16}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {selectPosition && (
          <Marker position={locationSelection} icon={icon}>
            <Popup>
              {selectPosition?.lat}, {selectPosition?.lon}
            </Popup>
          </Marker>
        )}
        <Marker position={customPosition} icon={customIcon} />
        {selectPosition && (
          <Circle center={locationSelection} radius={500} />
        )}
        <ResetCenterView selectPosition={selectPosition} />
        <ClickHandler setSelectPosition={setSelectPosition} />
      </MapContainer>
    </div>
  );
};

export default Map;