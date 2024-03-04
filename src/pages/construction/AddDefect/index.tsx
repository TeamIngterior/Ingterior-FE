import { useEffect, useState, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';

import PageNav from '@/components/common/PageNav';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';

import * as S from './styles';
import * as CS from '@components/template/styles';
import * as IS from '@components/common/Input/styles';
import * as IES from '@components/common/FileUploader/ImageEditor/styles';

import MultiUploader from '@/components/common/FileUploader/MultiUploader';

import { Map as OLMap, View } from 'ol';
import { Image as ImageLayer } from 'ol/layer';
import { ImageStatic as ImageStaticSource } from 'ol/source';
import Overlay from 'ol/Overlay';

interface Marker {
  id: number;
  longitude: number;
  latitude: number;
  label: string;
}

interface MapProps {
  imageSrc: string;
  markers: Marker[];
}

const DEFECT_ADDITION_NAV = [
  {
    title: '메인',
    path: '/',
  },
  {
    title: '현장 목록',
    path: '/construction/list',
  },
  {
    title: '하자 체크',
    path: '/construction/detail',
  },
  {
    title: '새 하자 추가',
    path: '',
  },
];

function AddDefect() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [markers, setMarkers] = useState<Overlay[]>([]);
  const [cooridnates, setCoordinates] = useState<[number, number][]>([]);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
    setError,
  } = useForm({
    mode: 'onBlur',
  });

  // 한글 글자수 200자 제한
  const maxDefectDescriptionLength = 200;

  const autoResize = (element: EventTarget & HTMLTextAreaElement) => {
    element.style.height = 'auto';
    element.style.height = element.scrollHeight + 'px';
  };

  const onSubmit = async (data: any) => {
    console.log('하자 추가', data);
  };

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<OLMap | null>(null);
  const overlayRef = useRef<Overlay | null>(null);
  const imageUrl = 'https://via.placeholder.com/500';

  useEffect(() => {
    if (!mapContainerRef.current) return;

    let overlay = overlayRef.current;

    if (!overlay) {
      overlay = new Overlay({
        element: document.createElement('div'),
      });
      overlayRef.current = overlay;
      mapRef.current?.addOverlay(overlay);
    }

    const map = new OLMap({
      target: mapContainerRef.current,
      layers: [
        new ImageLayer({
          source: new ImageStaticSource({
            url: imageUrl,
            projection: 'EPSG:3857',
            imageExtent: [0, 0, 500, 500],
          }),
        }),
      ],
      view: new View({
        zoom: 2,
        center: [250, 250],
        extent: [0, 0, 500, 500],
      }),
      interactions: [],
      controls: [],
    });

    const handleClick = (event: any) => {
      const clickedCoord = event.coordinate;
      addMarker(clickedCoord);
    };

    map.on('click', handleClick);

    mapRef.current = map;

    return () => {
      if (mapRef.current && overlayRef.current) {
        mapRef.current.removeOverlay(overlayRef.current);
        mapRef.current.un('click', handleClick);
      }
    };
  }, []);

  useEffect(() => {
    console.log('coordinates', cooridnates);
  }, [cooridnates]);

  //   useEffect(() => {
  //     console.log('markers', markers);

  //     markers.forEach((marker, index) => {
  //       const markerIndex = index + 1;
  //       const markerElement = marker.getElement() as HTMLElement;
  //       markerElement.className = `marker-${markerIndex}`;
  //       markerElement.textContent = `${markerIndex}`;

  //       // 첫번째 마커에만 툴팁 추가
  //       if (index === 0) {
  //         const tooltipElement = document.createElement('div');
  //         tooltipElement.className = 'tooltip';
  //         tooltipElement.style.position = 'absolute';
  //         tooltipElement.style.width = 'fit-content';
  //         tooltipElement.style.whiteSpace = 'nowrap';
  //         tooltipElement.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  //         tooltipElement.style.color = 'white';
  //         tooltipElement.textContent = '마커를 하자의 위치로 드래그하세요';

  //         // 툴팁 닫기 버튼 추가
  //         const closeButton = document.createElement('span');
  //         closeButton.className = 'close';
  //         closeButton.textContent = 'x';
  //         closeButton.addEventListener('click', () => {
  //           tooltipElement.style.display = 'none';
  //         });
  //         tooltipElement.appendChild(closeButton);

  //         // 툴팁 클릭 시 닫기
  //         tooltipElement.addEventListener('click', () => {
  //           tooltipElement.style.display = 'none';
  //         });

  //         const tooltipOverlay = new Overlay({
  //           element: tooltipElement,
  //           position: marker.getPosition(),
  //           offset: [0, -30], // 마커 위에 표시되도록 오프셋 지정
  //         });
  //         mapRef.current?.addOverlay(tooltipOverlay);
  //       }
  //     });
  //   }, [markers]);

  useEffect(() => {
    console.log('markers', markers);

    if (markers.length > 0) {
      // 첫 번째 마커
      const firstMarker = markers[0];
      const markerElement = firstMarker.getElement() as HTMLElement;
      const markerIndex = 1;
      markerElement.className = `marker-${markerIndex}`;
      markerElement.textContent = `${markerIndex}`;

      // 첫 번째 마커에만 툴팁 추가
      if (!firstMarker.get('tooltipAdded')) {
        const tooltipElement = document.createElement('div');
        tooltipElement.className = 'tooltip';
        tooltipElement.style.position = 'absolute';
        tooltipElement.style.width = 'fit-content';
        tooltipElement.style.whiteSpace = 'nowrap';
        tooltipElement.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        tooltipElement.style.color = 'white';
        tooltipElement.textContent = '마커를 하자의 위치로 드래그하세요';

        // 툴팁 닫기 버튼 추가
        const closeButton = document.createElement('span');
        closeButton.className = 'close';
        closeButton.textContent = 'x';
        closeButton.addEventListener('click', () => {
          tooltipElement.style.display = 'none';
        });
        tooltipElement.appendChild(closeButton);

        // 툴팁 클릭 시 닫기
        tooltipElement.addEventListener('click', () => {
          tooltipElement.style.display = 'none';
        });

        const tooltipOverlay = new Overlay({
          element: tooltipElement,
          position: firstMarker.getPosition(),
          offset: [0, -30], // 마커 위에 표시되도록 오프셋 지정
        });
        mapRef.current?.addOverlay(tooltipOverlay);

        // 툴팁이 추가되었음을 표시
        firstMarker.set('tooltipAdded', true);
      }
    }
  }, [markers]);

  const addMarker = (coord: [number, number]) => {
    if (overlayRef.current) {
      console.log('coord', coord);

      const markerElement = document.createElement('div');
      markerElement.style.width = '20px';
      markerElement.style.height = '20px';
      markerElement.style.backgroundColor = 'red';

      const markerIndex = markers.length + 1;
      markerElement.className = 'marker';
      overlayRef.current.setPosition(coord);

      if (mapRef.current) {
        const marker = new Overlay({
          position: coord,
          element: markerElement,
          stopEvent: false,
        });

        setCoordinates((prevCoordinates) => [...prevCoordinates, coord]);
        setMarkers((prevMarkers) => [...prevMarkers, marker]);

        markerElement.addEventListener('mousedown', (event) => {
          let isDragging = false;
          const startPosition = [event.clientX, event.clientY];
          const startMarkerPosition = marker.getPosition() || [0, 0];

          const onMouseMove = (event: MouseEvent) => {
            const dx = event.clientX - startPosition[0];
            const dy = event.clientY - startPosition[1];
            const newPosition = [
              startMarkerPosition[0] + dx,
              startMarkerPosition[1] - dy,
            ];
            marker.setPosition(newPosition);
            setCoordinates((prevCoordinates) => [...prevCoordinates, coord]);
            isDragging = true;
          };

          const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            if (isDragging) {
              console.log('마커 위치 변경 완료:', marker.getPosition());
            }
          };

          document.addEventListener('mousemove', onMouseMove);
          document.addEventListener('mouseup', onMouseUp);
        });

        mapRef.current.addOverlay(marker);
      }
    }
  };

  return (
    <S.AddDefectContainer>
      <CS.TemplateTitle>하자 체크</CS.TemplateTitle>

      {/* 페이지 네비게이션 */}
      <PageNav navList={DEFECT_ADDITION_NAV} />

      <S.AddDefectForm onSubmit={handleSubmit(onSubmit)}>
        {/* 컨텐츠 */}
        <S.AddDefectContent>
          {/* 캔버스 영역 */}
          <div
            ref={mapContainerRef}
            style={{ width: '100%', height: '400px' }}
          ></div>

          {/* 인풋 영역  */}
          <S.AddDefectInputContainer>
            {/* 하자 위치 */}
            <Input
              type="text"
              inputType="input"
              label="하자 위치"
              labelOption={<span className="required">*</span>}
              {...register('defectLocation', {
                required: '빈 칸으로 남겨둘 수 없습니다',
              })}
              placeholder="하자 위치(이름)을 입력해 주세요"
              errors={errors}
            />

            {/* 하자 설명 */}
            <Controller
              name="defectDescription"
              control={control}
              defaultValue=""
              render={({ field, fieldState: { error } }) => (
                <div>
                  <IS.InputLabel>
                    하자 설명
                    <span className="subLabel">
                      &nbsp;&#40;선택 / 최대 200자 까지 &#41;
                    </span>
                  </IS.InputLabel>
                  <IS.Textarea
                    {...field}
                    className="valiableHeight"
                    spellCheck="false"
                    autoComplete="off"
                    placeholder="하자 설명을 입력해 주세요"
                    onChange={(e) => {
                      if (e.target.value.length <= maxDefectDescriptionLength) {
                        field.onChange(e);
                        autoResize(e.target);
                      }
                    }}
                  />
                  {error && (
                    <IS.InputErrorMessage>
                      {error.message === 'maxLength'
                        ? error.message
                        : '빈 칸으로 남겨둘 수 없습니다'}
                    </IS.InputErrorMessage>
                  )}
                </div>
              )}
            />

            {/* 하자 이미지 */}
            <Controller
              name="defectImage"
              control={control}
              render={({ field: { onChange } }) => (
                <div>
                  <IS.InputLabel>
                    하자 이미지 추가하기
                    <span className="subLabel">&nbsp;&#40;선택&#41;</span>
                  </IS.InputLabel>
                  <MultiUploader
                    onSelectItem={(files) => {
                      setSelectedFiles(files);
                      onChange(files);
                    }}
                  />
                  <IES.ImageEditorContext className="detail">
                    &#8211;&nbsp;최대 8장까지 추가 가능합니다.
                    <br />
                    &#8211;&nbsp;파일 형식은 Jpg, Jpeg, Png, Gif만 가능합니다.
                    <br />
                    &#8211;&nbsp;최대 5MB까지 업로드 가능합니다.
                  </IES.ImageEditorContext>
                </div>
              )}
            />
          </S.AddDefectInputContainer>
        </S.AddDefectContent>

        {/* 버튼 */}
        <Button
          type="button"
          size="lg"
          className="addDefectButton"
          $styleType={'disabled'}
          $fullWidth={true}
        >
          추가하기
        </Button>
      </S.AddDefectForm>
    </S.AddDefectContainer>
  );
}

export default AddDefect;
