import { useRef, useEffect, useState } from 'react';

import Button from '@/components/common/Button';
import DefaultModal from '../../DefaultModal';

import * as S from './styles';
import * as CS from '@/components/modal/styles';

// import Map from 'ol/Map';
// import View from 'ol/View';
// import TileLayer from 'ol/layer/Tile';
// import XYZ from 'ol/source/XYZ';

import 'ol/ol.css'; //스타일
import { Map as OlMap, View } from 'ol'; //뷰 관리
import { fromLonLat, get as getProjection } from 'ol/proj'; //위경도
import { Tile as TileLayer } from 'ol/layer'; //지도타일
import { OSM } from 'ol/source'; //지도정보

function AddConstructionImage() {
  const [mapObject, setMapObject] = useState({});

  useEffect(() => {
    const map = new OlMap({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'map',
      view: new View({
        projection: 'EPSG:3857',
        center: fromLonLat([126.752, 37.4713], 'EPSG:3857'),
        zoom: 13,
      }),
    });
    setMapObject({ map });
  }, []);

  return (
    <DefaultModal name="addConstructionImage" className="addConstructionImage">
      {/* 모달 컨텐츠 */}
      <CS.ModalContentContainer>
        <CS.ModalHeader>영역 안에 이미지를 맞춰주세요.</CS.ModalHeader>
        <CS.ModalContent>
          <div id="map" style={{ height: '50rem' }} />
        </CS.ModalContent>

        <CS.ModalButtonContainer>
          <Button size="lg" $fullWidth={true}>
            추가하기
          </Button>
        </CS.ModalButtonContainer>
      </CS.ModalContentContainer>
    </DefaultModal>
  );
}

export default AddConstructionImage;
