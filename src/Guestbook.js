import React, { useState, useRef, useCallback, useEffect, useImperativeHandle, forwardRef } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import useEmblaCarousel from 'embla-carousel-react';
import styled from 'styled-components';
import { primaryBlue, secondaryGold, backgroundColorMain } from './colors';
import { db } from './firebase';
import { collection, addDoc, getDocs, orderBy, query } from 'firebase/firestore';
// ─── Layout ────────────────────────────────────────────────────────────────────

const PageWrapper = styled.div`
  min-height: 100vh;
  background: ${backgroundColorMain};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 24px 100px;
  font-family: 'Poppins', sans-serif;
`;

const Title = styled.h1`
  font-family: 'DMSerifText', serif;
  font-size: 2.4rem;
  color: ${primaryBlue};
  margin: 0 0 6px;
  text-align: center;
`;

const Subtitle = styled.p`
  color: #999;
  font-size: 0.88rem;
  margin: 0 0 36px;
  text-align: center;
`;

// ─── Carousel ─────────────────────────────────────────────────────────────────

const CarouselOuter = styled.div`
  width: 100%;
  max-width: 620px;
`;

const CarouselViewport = styled.div`
  overflow: hidden;
  width: 100%;
`;

const CarouselContainer = styled.div`
  display: flex;
`;

const CarouselSlide = styled.div`
  flex: 0 0 100%;
  min-width: 0;
`;

const CarouselNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 8px;
`;

const NavBtn = styled.button`
  background: ${({ $disabled }) => ($disabled ? '#e0dbd3' : primaryBlue)};
  color: white;
  border: none;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  font-size: 1.2rem;
  cursor: ${({ $disabled }) => ($disabled ? 'default' : 'pointer')};
  transition: background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: ${({ $disabled }) => ($disabled ? '#e0dbd3' : secondaryGold)};
  }
`;

const SlideCounter = styled.span`
  font-size: 0.85rem;
  color: #aaa;
  min-width: 70px;
  text-align: center;
  font-style: italic;
`;

// ─── Book Layout ───────────────────────────────────────────────────────────────

const BookLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0;
  width: 100%;
`;

const BookWrap = styled.div`
  flex: 1;
  position: relative;
  box-shadow: -4px 0 18px rgba(0,0,0,0.10), 4px 4px 24px rgba(0,0,0,0.13);
  border-radius: 2px 10px 10px 2px;
  background: #fffef9;
  border: 1.5px solid #ddd8ce;
  overflow: hidden;
  /* book spine illusion */
  border-left: 6px solid #d4c9b8;
`;

const CanvasWrapper = styled.div`
  position: relative;
  width: 100%;
  /* 8.5 x 11 aspect ratio */
  aspect-ratio: 8.5 / 11;
  cursor: ${({ $textMode }) => ($textMode ? 'text' : 'crosshair')};
`;

const TextOverlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: ${({ $textMode }) => ($textMode ? 'all' : 'none')};
  z-index: 10;
`;

const FloatingInput = styled.input`
  position: absolute;
  background: transparent;
  border: 1px dashed ${secondaryGold};
  outline: none;
  font-family: ${({ $fontFamily }) => $fontFamily || 'Poppins, sans-serif'};
  font-size: ${({ $fontSize }) => $fontSize || '16'}px;
  color: ${({ $color }) => $color || primaryBlue};
  min-width: 80px;
  padding: 2px 4px;
  z-index: 20;
  box-sizing: border-box;
`;

const PlacedText = styled.div`
  position: absolute;
  font-family: ${({ $fontFamily }) => $fontFamily || 'Poppins, sans-serif'};
  font-size: ${({ $fontSize }) => $fontSize || '16'}px;
  color: ${({ $color }) => $color || primaryBlue};
  white-space: pre;
  pointer-events: none;
  user-select: none;
`;

// ─── Toolbar ───────────────────────────────────────────────────────────────────

const Toolbar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  background: #fffef9;
  border: 1.5px solid #ddd8ce;
  border-left: none;
  border-radius: 0 10px 10px 0;
  padding: 20px 12px;
  width: 64px;
  box-shadow: 4px 4px 18px rgba(0,0,0,0.08);
`;

const Divider = styled.div`
  width: 32px;
  height: 1px;
  background: #e5e0d8;
  margin: 2px 0;
`;

const ToolLabel = styled.span`
  font-size: 0.6rem;
  color: #bbb;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const ColorDot = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  border: 2.5px solid ${({ $selected }) => ($selected ? primaryBlue : 'transparent')};
  box-shadow: ${({ $selected }) => ($selected ? '0 0 0 1.5px #fff inset' : 'none')};
  cursor: pointer;
  padding: 0;
  transition: border 0.15s;
`;

const SizeBtn = styled.button`
  width: ${({ $size }) => 10 + $size * 2}px;
  height: ${({ $size }) => 10 + $size * 2}px;
  max-width: 38px;
  max-height: 38px;
  border-radius: 50%;
  background: ${({ $active }) => ($active ? primaryBlue : '#e8e3db')};
  border: none;
  cursor: pointer;
  transition: background 0.15s;
`;

const ToolBtn = styled.button`
  width: 38px;
  height: 32px;
  border-radius: 7px;
  background: ${({ $active }) => ($active ? primaryBlue : '#f0ece5')};
  color: ${({ $active }) => ($active ? 'white' : primaryBlue)};
  border: none;
  cursor: pointer;
  font-size: 0.72rem;
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
`;

const IconBtn = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 7px;
  background: ${({ $active }) => ($active ? secondaryGold : '#f0ece5')};
  color: ${({ $active }) => ($active ? 'white' : primaryBlue)};
  border: none;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
  &:hover { background: ${secondaryGold}; color: white; }
`;

const DoneBtn = styled.button`
  background: #18181b;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 7px 16px;
  font-size: 0.82rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s;
  white-space: nowrap;
  height: 42px;
  &:hover { background: #3f3f46; }
  &:disabled { background: #d4d4d8; color: #a1a1aa; cursor: default; }
`;

const AddPageBtn = styled.button`
  background: transparent;
  color: #18181b;
  border: 1.5px solid #e4e4e7;
  border-radius: 6px;
  padding: 7px 14px;
  font-size: 0.82rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  cursor: pointer;
  height: 42px;
  white-space: nowrap;
  transition: border-color 0.15s, background 0.15s;
  &:hover { background: #f4f4f5; border-color: #a1a1aa; }
`;

const SaveStatus = styled.div`
  font-size: 0.75rem;
  color: ${({ $error }) => ($error ? '#c0392b' : '#2e7d32')};
  text-align: center;
  margin-top: 4px;
  min-height: 18px;
`;

// ─── Saved Entries ─────────────────────────────────────────────────────────────

const SavedOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: #fffef9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 30;
`;

const SavedImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`;

// ─── Constants ─────────────────────────────────────────────────────────────────

const COLORS = [
  '#1C1917', '#C2714F', '#5B8C6A', '#4A7DA8',
  '#A84A6B', '#6A4AC2', '#C2B44F', '#888',
];
const SIZES = [2, 5, 10, 18];
const TOTAL_PAGES = 4;
const TEXT_FONT = "'Times New Roman', Georgia, serif";
const TEXT_SIZE = 16;

const stampContext = require.context('./images/stamps', false, /\.(png|jpe?g|gif|webp|svg)$/i);
const STAMPS = stampContext.keys().map((key, i) => ({
  id: `stamp-${i}`,
  src: stampContext(key),
  label: key.replace(/^\.\//, '').replace(/\.[^.]+$/, ''),
}));

// ─── Stamp Tray ────────────────────────────────────────────────────────────────

const StampTray = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 8px 10px;
  background: #fffef9;
  border: 1.5px solid #ddd8ce;
  border-top: none;
  border-radius: 0 0 10px 2px;
  align-items: center;
  flex-wrap: wrap;
`;

const StampThumb = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  border-radius: 6px;
  border: 1.5px solid #e5e0d8;
  background: #fdfaf5;
  cursor: grab;
  transition: box-shadow 0.15s;
  &:hover { box-shadow: 0 2px 8px rgba(0,0,0,0.15); }
  &:active { cursor: grabbing; }
`;

const StampTrayLabel = styled.span`
  font-size: 0.6rem;
  color: #bbb;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
`;

const PlacedStamp = styled.img`
  position: absolute;
  width: 60px;
  height: 60px;
  object-fit: contain;
  pointer-events: none;
  user-select: none;
`;

// ─── Single Guestbook Page (canvas only) ──────────────────────────────────────

// ─── Single Guestbook Page ─────────────────────────────────────────────────────

const GuestbookPage = forwardRef(function GuestbookPage(
  { canvasRef, color, size, erasing, textMode, savedImageUrl },
  ref
) {
  const wrapperRef = useRef(null);
  const [placedTexts, setPlacedTexts] = useState([]);
  const [activeInput, setActiveInput] = useState(null);
  const [placedStamps, setPlacedStamps] = useState([]);

  useImperativeHandle(ref, () => ({
    clearAll() {
      canvasRef.current?.clearCanvas();
      setPlacedTexts([]);
      setPlacedStamps([]);
      setActiveInput(null);
    },
    undo() {
      canvasRef.current?.undo();
    },
    exportImage() {
      return canvasRef.current?.exportImage('png');
    },
  }));

  const handleCanvasClick = (e) => {
    if (!textMode) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (activeInput && activeInput.value.trim()) {
      setPlacedTexts(prev => [...prev, { ...activeInput, font: TEXT_FONT, fontSize: TEXT_SIZE, color }]);
    }
    setActiveInput({ x, y, value: '' });
  };

  const commitActiveInput = () => {
    if (activeInput && activeInput.value.trim()) {
      setPlacedTexts(prev => [...prev, { ...activeInput, font: TEXT_FONT, fontSize: TEXT_SIZE, color }]);
    }
    setActiveInput(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const stampSrc = e.dataTransfer.getData('stampSrc');
    if (!stampSrc || !wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - 30;
    const y = e.clientY - rect.top - 30;
    setPlacedStamps(prev => [...prev, { id: Date.now(), src: stampSrc, x, y }]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <BookWrap>
        <CanvasWrapper
          ref={wrapperRef}
          $textMode={textMode && !savedImageUrl}
          onClick={handleCanvasClick}
          onDragOver={!savedImageUrl ? handleDragOver : undefined}
          onDrop={!savedImageUrl ? handleDrop : undefined}
        >
          <ReactSketchCanvas
            ref={canvasRef}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
            strokeWidth={erasing ? size * 4 : size}
            strokeColor={erasing ? '#fffef9' : color}
            canvasColor="#fffef9"
            withTimestamp={false}
          />
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 5 }}>
            {placedStamps.map(s => (
              <PlacedStamp key={s.id} src={s.src} style={{ left: s.x, top: s.y }} alt="" />
            ))}
          </div>
          <TextOverlay $textMode={textMode && !savedImageUrl}>
            {placedTexts.map((t, i) => (
              <PlacedText key={i} style={{ left: t.x, top: t.y }} $fontFamily={t.font} $fontSize={t.fontSize} $color={t.color}>
                {t.value}
              </PlacedText>
            ))}
            {activeInput && (
              <FloatingInput
                autoFocus
                style={{ left: activeInput.x, top: activeInput.y }}
                $fontFamily={TEXT_FONT}
                $fontSize={TEXT_SIZE}
                $color={color}
                value={activeInput.value}
                onChange={e => setActiveInput(prev => ({ ...prev, value: e.target.value }))}
                onKeyDown={e => { if (e.key === 'Enter') commitActiveInput(); if (e.key === 'Escape') setActiveInput(null); }}
                onBlur={commitActiveInput}
              />
            )}
          </TextOverlay>
          {/* Saved image covers the canvas */}
          {savedImageUrl && (
            <SavedOverlay>
              <SavedImg src={savedImageUrl} alt="saved page" />
            </SavedOverlay>
          )}
        </CanvasWrapper>
      </BookWrap>

      {!savedImageUrl && (
        <StampTray>
          <StampTrayLabel>Stamps →</StampTrayLabel>
          {STAMPS.map(stamp => (
            <StampThumb
              key={stamp.id}
              src={stamp.src}
              alt={stamp.label}
              draggable
              onDragStart={e => e.dataTransfer.setData('stampSrc', stamp.src)}
            />
          ))}
        </StampTray>
      )}
    </div>
  );
});

// ─── Main Guestbook ────────────────────────────────────────────────────────────

export default function Guestbook() {
  // pages: array of { key, savedImageUrl }
  const [pages, setPages] = useState(() =>
    Array.from({ length: TOTAL_PAGES }, (_, i) => ({ key: i, savedImageUrl: null }))
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const [color, setColor] = useState(COLORS[0]);
  const [size, setSize] = useState(5);
  const [erasing, setErasing] = useState(false);
  const [textMode, setTextMode] = useState(false);

  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState('');

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, watchDrag: false });

  // Keep parallel ref arrays in sync with pages length
  const canvasRefs = useRef([]);
  const pageRefs = useRef([]);
  // Ensure refs arrays match pages length
  while (canvasRefs.current.length < pages.length) canvasRefs.current.push(React.createRef());
  while (pageRefs.current.length < pages.length) pageRefs.current.push(React.createRef());

  const activePage = () => pageRefs.current[selectedIndex]?.current;
  const handleUndo = () => activePage()?.undo();
  const handleClear = () => activePage()?.clearAll();

  // Load saved entries from Firestore on mount
  useEffect(() => {
    const load = async () => {
      try {
        const q = query(collection(db, 'guestbook'), orderBy('pageIndex', 'asc'), orderBy('createdAt', 'asc'));
        const snap = await getDocs(q);
        const docs = snap.docs.map(d => ({ id: d.id, ...d.data() }));

        // Build pages from Firestore — find max page index
        if (docs.length === 0) return;
        const maxIdx = Math.max(...docs.map(d => d.pageIndex ?? 0));
        const totalNeeded = Math.max(TOTAL_PAGES, maxIdx + 1);

        const newPages = Array.from({ length: totalNeeded }, (_, i) => {
          // Take the last saved entry for each pageIndex
          const entry = [...docs].reverse().find(d => (d.pageIndex ?? 0) === i);
          return { key: i, savedImageUrl: entry?.imageDataUrl ?? null };
        });
        setPages(newPages);

        // Scroll to last page that has a saved image, or the last page
        const lastSaved = [...newPages].reverse().findIndex(p => p.savedImageUrl !== null);
        const targetIdx = lastSaved >= 0 ? newPages.length - 1 - lastSaved : 0;
        setSelectedIndex(targetIdx);
        // Embla scroll after it's ready
        setTimeout(() => emblaApi?.scrollTo(targetIdx, true), 100);
      } catch (e) {
        console.error('Failed to load entries', e);
      }
    };
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDone = async () => {
    const pageRef = pageRefs.current[selectedIndex];
    if (!pageRef?.current) return;
    setSaving(true);
    setSaveStatus('');
    try {
      const dataUrl = await pageRef.current.exportImage();
      await addDoc(collection(db, 'guestbook'), {
        imageDataUrl: dataUrl,
        pageIndex: selectedIndex,
        createdAt: Date.now(),
      });
      setPages(prev => prev.map((p, i) =>
        i === selectedIndex ? { ...p, savedImageUrl: dataUrl } : p
      ));
      setSaveStatus('Saved! ✓');
    } catch (e) {
      console.error(e);
      setSaveStatus('Error saving — check Firebase config.');
    } finally {
      setSaving(false);
      setTimeout(() => setSaveStatus(''), 4000);
    }
  };

  const handleAddPage = () => {
    const newIdx = pages.length;
    canvasRefs.current.push(React.createRef());
    pageRefs.current.push(React.createRef());
    setPages(prev => [...prev, { key: Date.now(), savedImageUrl: null }]);
    // Wait for embla to register the new slide, then scroll to it
    setTimeout(() => {
      emblaApi?.reInit();
      setTimeout(() => emblaApi?.scrollTo(newIdx), 50);
    }, 50);
  };

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const currentPageSaved = pages[selectedIndex]?.savedImageUrl != null;

  return (
    <PageWrapper>
      <Title>Guestbook</Title>

      <CarouselOuter>
        <BookLayout>
          <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
            <CarouselViewport ref={emblaRef}>
              <CarouselContainer>
                {pages.map((page, i) => (
                  <CarouselSlide key={page.key}>
                    <GuestbookPage
                      ref={pageRefs.current[i]}
                      canvasRef={canvasRefs.current[i]}
                      color={color}
                      size={size}
                      erasing={erasing}
                      textMode={textMode}
                      savedImageUrl={page.savedImageUrl}
                    />
                  </CarouselSlide>
                ))}
              </CarouselContainer>
            </CarouselViewport>

            <SaveStatus $error={saveStatus.startsWith('Error')}>{saveStatus}</SaveStatus>

            <CarouselNav style={{ marginTop: 4 }}>
              <NavBtn $disabled={!canScrollPrev} onClick={() => emblaApi?.scrollPrev()}>←</NavBtn>
              <SlideCounter>page {selectedIndex + 1} of {pages.length}</SlideCounter>
              <NavBtn $disabled={!canScrollNext} onClick={() => emblaApi?.scrollNext()}>→</NavBtn>
            </CarouselNav>
            <div style={{ display: 'flex', gap: 8, marginTop: 10, justifyContent: 'flex-start' }}>
              {!currentPageSaved && (
                <DoneBtn disabled={saving} onClick={handleDone}>
                  {saving ? 'Saving…' : 'Done'}
                </DoneBtn>
              )}
              {currentPageSaved && (
                <DoneBtn
                  onClick={() => setPages(prev => prev.map((p, i) =>
                    i === selectedIndex ? { ...p, savedImageUrl: null } : p
                  ))}
                  style={{ background: 'transparent', color: '#18181b', border: '1.5px solid #18181b' }}
                >
                  Edit
                </DoneBtn>
              )}
              <AddPageBtn onClick={handleAddPage}>+ Add a page</AddPageBtn>
            </div>
          </div>

          <Toolbar>
            <ToolLabel>Color</ToolLabel>
            {COLORS.map(c => (
              <ColorDot key={c} $color={c} $selected={color === c} onClick={() => setColor(c)} />
            ))}
            <Divider />
            <ToolLabel>Size</ToolLabel>
            {SIZES.map(s => (
              <SizeBtn
                key={s}
                $size={s}
                $active={size === s && !erasing}
                onClick={() => { setSize(s); setErasing(false); }}
              />
            ))}
            <Divider />
            <IconBtn $active={erasing} title="Eraser" onClick={() => { setErasing(e => !e); setTextMode(false); }}>
              🧽
            </IconBtn>
            <IconBtn title="Undo" onClick={handleUndo}>↩</IconBtn>
            <IconBtn title="Clear page" onClick={handleClear}>🗑</IconBtn>
            <Divider />
            <ToolLabel>Text</ToolLabel>
            <IconBtn $active={textMode} title="Text tool" onClick={() => { setTextMode(t => !t); setErasing(false); }}>
              T
            </IconBtn>
          </Toolbar>
        </BookLayout>
      </CarouselOuter>
    </PageWrapper>
  );
}
