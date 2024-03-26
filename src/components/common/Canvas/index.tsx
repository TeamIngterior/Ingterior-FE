import { useEffect, useState, useRef } from 'react';
import { debounce } from 'lodash';

import * as S from './styles';
import Marker from '@assets/marker_default.svg';
import Disabled from '@assets/marker_disabled.svg';

interface MarkerCoords {
  x: number;
  y: number;
}

interface TooltipProps {
  x?: number;
  y?: number;
}

function Tooltip({ x, y }: TooltipProps) {
  if (!x || !y) return null;

  return (
    <div
      style={{
        position: 'absolute',
        width: '280px',
        left: x - 140,
        top: y + 24,
        borderRadius: '4px',
        backgroundColor: '#FBEAE9',
        color: '#000',
        padding: '8px 16px',
        zIndex: 10,
      }}
    >
      마커를 하자의 위치로 드래그하세요.
    </div>
  );
}

const DISABLED_MARKER_ARRAY: MarkerCoords[] = [
  { x: 100, y: 100 },
  { x: 200, y: 200 },
  { x: 300, y: 300 },
];

function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const markerPositionRef = useRef<MarkerCoords | null>(null);
  const activeMarkerRef = useRef<MarkerCoords | null>(null);
  const [markerCoords, setMarkerCoords] = useState<MarkerCoords[]>([]);
  const [tooltipVisible, setTooltipVisible] = useState<boolean>(true);
  const [firstMarkerPlaced, setFirstMarkerPlaced] = useState<boolean>(false);

  const saveMarkerCoordsDebounced = useRef(
    debounce((coords: MarkerCoords[]) => {
      setMarkerCoords(coords);
    }, 250)
  ).current;

  useEffect(() => {
    const canvas = canvasRef.current;

    const canvasParent = canvas?.parentNode as HTMLElement;
    const ctx = canvas?.getContext('2d');

    const markerImage = new Image();
    markerImage.src = Marker;

    const disabledImage = new Image();
    disabledImage.src = Disabled;

    const imageSrcs = ['https://source.unsplash.com/random'];
    const loadedImages: HTMLImageElement[] = [];
    const currIndex = 0;
    let canvasWidth: string | number, canvasHeight: string | number;

    function resize() {
      if (!canvas) return;

      canvasWidth = canvasParent.clientWidth;
      canvasHeight = canvasParent.clientHeight;
      canvas.style.width = canvasWidth + 'px';
      canvas.style.height = canvasHeight + 'px';
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }

      const originalCanvasWidth = 588;
      const originalCanvasHeight = 588;

      const ratioX: number = Number(canvasWidth) / originalCanvasWidth;
      const ratioY: number = Number(canvasHeight) / originalCanvasHeight;

      preloadImages()
        .then(() => drawImage())
        .then(() => {
          if (markerPositionRef.current) {
            const { x, y } = markerPositionRef.current;
            const newX = x * ratioX;
            const newY = y * ratioY;
            drawMarker(newX, newY);
          }

          // 모든 이미지가 로드된 이후 disabled marker 그리기
          Promise.all([markerImage.decode(), disabledImage.decode()]).then(
            () => {
              drawDisabledMarkers();
            }
          );
        });
    }

    function preloadImages() {
      return new Promise<void>((resolve, reject) => {
        let loaded = 0;
        imageSrcs.forEach((src) => {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            loaded += 1;
            loadedImages.push(img);
            if (loaded === imageSrcs.length) return resolve();
          };
        });
      });
    }

    function drawImage() {
      const image = loadedImages[currIndex];
      ctx?.clearRect(0, 0, canvas!.width, canvas!.height);
      ctx?.drawImage(image, 0, 0, canvas!.width, canvas!.height);
    }

    function handleMouseEvent(event: MouseEvent) {
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      switch (event.type) {
        case 'mousedown':
          handleMouseDown(x, y);
          break;
        case 'mousemove':
          handleMouseMove(x, y);
          break;
        case 'mouseup':
          handleMouseUp();
          break;
        case 'click':
          handleClick(x, y);
          break;
        default:
          break;
      }
    }

    function handleClick(x: number, y: number) {
      clearMarker();
      drawMarker(x, y);
      markerPositionRef.current = { x, y };
      drawDisabledMarkers();
    }

    function handleMouseDown(x: number, y: number) {
      if (!canvas) return;

      if (markerPositionRef.current) {
        const { x: markerX, y: markerY } = markerPositionRef.current;
        const distance = Math.sqrt((x - markerX) ** 2 + (y - markerY) ** 2);
        if (distance <= 5) {
          activeMarkerRef.current = { x: markerX, y: markerY };
          canvas.addEventListener('mousemove', handleMouseEvent);
          canvas.addEventListener('mouseup', handleMouseEvent);
        }
      }
    }

    function handleMouseMove(x: number, y: number) {
      if (activeMarkerRef.current) {
        clearMarker();
        drawMarker(x, y);
        activeMarkerRef.current = { x, y };
      }

      drawDisabledMarkers();
    }

    function handleMouseUp() {
      if (!canvas) return;

      canvas.removeEventListener('mousemove', handleMouseEvent);
      canvas.removeEventListener('mouseup', handleMouseEvent);
      activeMarkerRef.current = null;
    }

    function clearMarker() {
      ctx?.clearRect(0, 0, canvas!.width, canvas!.height);
      drawImage();
    }

    function drawMarker(x: number, y: number) {
      const text = (
        DISABLED_MARKER_ARRAY.length +
        markerCoords.length +
        1
      ).toString();

      if (markerImage.complete && ctx) {
        ctx?.drawImage(markerImage, x - 24, y - 24, 48, 48);

        ctx.font = '16px Arial';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText(text, x - 1, y + 3);
      } else {
        markerImage.onload = function () {
          if (ctx) {
            ctx?.drawImage(markerImage, x - 24, y - 24, 48, 48);

            ctx.font = '16px Arial';
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.fillText(text, x - 1, y + 3);
          }
        };
      }

      saveMarkerCoordsDebounced([{ x, y }]);
    }

    function drawDisabledMarkers() {
      DISABLED_MARKER_ARRAY.forEach(({ x, y }, index) => {
        const ratioX = (canvasRef.current?.width ?? 0) / 588;
        const ratioY = (canvasRef.current?.height ?? 0) / 588;
        const newX = x * ratioX;
        const newY = y * ratioY;
        disabledDrawMarker(newX, newY, index);
      });
    }

    function disabledDrawMarker(x: number, y: number, index: number) {
      if (!ctx) return;

      const text = (index + 1).toString();

      if (disabledImage.complete) {
        ctx?.drawImage(disabledImage, x - 16, y - 20, 32, 40);

        ctx.font = '16px Arial';
        ctx.fillStyle = '#1e1e1e';
        ctx.textAlign = 'center';
        ctx.fillText(text, x - 1, y + 4);
      } else {
        disabledImage.onload = function () {
          ctx.drawImage(disabledImage, x - 16, y - 20, 32, 40);

          ctx.font = '16px Arial';
          ctx.fillStyle = '#1e1e1e';
          ctx.textAlign = 'center';
          ctx.fillText(text, x - 1, y + 4);
        };
      }
    }

    window.addEventListener('resize', debounce(resize, 100));
    canvas?.addEventListener('click', handleMouseEvent);
    canvas?.addEventListener('mousedown', handleMouseEvent);
    resize();

    return () => {
      window.removeEventListener('resize', debounce(resize, 100));
      canvas?.removeEventListener('click', handleMouseEvent);
      canvas?.removeEventListener('mousedown', handleMouseEvent);
    };
  }, []);

  useEffect(() => {
    console.log(...markerCoords, 'markerCoords');

    if (markerCoords.length > 0 && !firstMarkerPlaced) {
      setTooltipVisible(true);
      setFirstMarkerPlaced(true);
    } else {
      setTooltipVisible(false);
    }
  }, [markerCoords]);

  return (
    <S.CanvasWrapper>
      <S.CanvasContainer>
        <canvas ref={canvasRef}></canvas>

        {tooltipVisible && (
          <Tooltip x={markerCoords[0]?.x} y={markerCoords[0]?.y} />
        )}
      </S.CanvasContainer>
    </S.CanvasWrapper>
  );
}

export default Canvas;
