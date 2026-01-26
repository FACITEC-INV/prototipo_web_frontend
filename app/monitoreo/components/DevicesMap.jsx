'use client';
import { $allDispositivos } from '@/stores/monitoreo/selectDispositivosStatus';
import { useStore } from '@nanostores/react';
import L from 'leaflet';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

const DevicesMap = () => {
  const devicesState = useStore($allDispositivos);
  return (
    <div className="card bg-neutral-200 shadow-sm">
      <div className="card-body h-[400px] rounded-lg shadow-md p-2">
        <h2 className="card-title">Mapa de ubicación de los dispositivos de monitoreo</h2>
        <div className='w-full h-full'>
          <MapContainer
            className="h-full rounded-lg"
            center={[-24.181926454190975, -54.6980453951156]}
            zoom={8}
            scrollWheelZoom={false}>
            <TileLayer
              attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`}
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
              devicesState.map(d => (
                <Marker key={`mark-${d.ubicacion.replaceAll(' ', '')}`} position={d.ubicacion.replaceAll(',', '').split(' ')}>
                  <Popup>
                    {d.rio}
                  </Popup>
                </Marker>

              ))
            }
          </MapContainer>
        </div>
      </div>
    </div>
  )
}

export default DevicesMap;
