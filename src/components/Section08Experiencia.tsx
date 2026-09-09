import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import packagingImg from '../assets/images/genesis_packaging_box_1788375067488.jpg';

export const Section08Experiencia: React.FC = () => {
  const videoSrc = '/unboxing.mp4';
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const handleVideoError = () => {
    setHasError(true);
    setIsPlaying(false);
  };

  const handleVideoLoaded = () => {
    setHasError(false);
    if (videoRef.current) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {
        setIsPlaying(false);
      });
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current || !videoRef.current.duration) return;
    setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
  };

  return (
    <section
      id="experiencia"
      className="relative bg-[#FBF6E5] text-[#1A1A1A] py-24 sm:py-36 px-6 sm:px-12 overflow-hidden border-t border-[#8B1A1A]/10"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Video Unboxing Experience */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative w-full max-w-md border border-[#8B1A1A]/20 bg-[#1A1A1A] shadow-2xl p-2 sm:p-3">
              {/* Video container with vertical/editorial aspect ratio */}
              <div
                onClick={togglePlay}
                className="relative aspect-[9/16] sm:aspect-[4/5] w-full overflow-hidden bg-black/90 cursor-pointer group flex items-center justify-center"
              >
                {!hasError ? (
                  <video
                    ref={videoRef}
                    src={videoSrc}
                    poster="/unboxing-poster.jpg"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onLoadedData={handleVideoLoaded}
                    onError={handleVideoError}
                    onTimeUpdate={handleTimeUpdate}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  /* Fallback when video file is not available */
                  <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center text-[#FBF6E5] bg-[#1A1A1A]">
                    <img
                      src={packagingImg}
                      alt="Unboxing da embalagem ENOUGH"
                      className="absolute inset-0 w-full h-full object-cover opacity-35"
                    />
                    <div className="relative z-10 space-y-4 max-w-xs">
                      <div className="w-14 h-14 mx-auto rounded-full bg-[#8B1A1A] flex items-center justify-center shadow-lg">
                        <Play className="w-6 h-6 text-[#FBF6E5] ml-0.5" />
                      </div>
                      <div>
                        <h4 className="font-editorial text-xl font-normal text-[#FBF6E5]">
                          Vídeo de Unboxing
                        </h4>
                        <p className="text-xs font-body text-[#FBF6E5]/70 mt-1 leading-relaxed">
                          A experiência sensorial da abertura da caixa ENOUGH.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Ambient vignette and overlay controls for active video */}
                {!hasError && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                    {/* Center Play/Pause indication */}
                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${
                        isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
                      }`}
                    >
                      <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white shadow-xl">
                        {isPlaying ? (
                          <Pause className="w-6 h-6" />
                        ) : (
                          <Play className="w-6 h-6 ml-0.5" />
                        )}
                      </div>
                    </div>

                    {/* Top corner control: Mute/Unmute toggle */}
                    <div className="absolute top-3 right-3 flex items-center gap-2 z-20">
                      <button
                        type="button"
                        onClick={toggleMute}
                        aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
                        className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-colors cursor-pointer"
                      >
                        {isMuted ? (
                          <VolumeX className="w-4 h-4" />
                        ) : (
                          <Volume2 className="w-4 h-4" />
                        )}
                      </button>
                    </div>

                    {/* Bottom playback progress line */}
                    <div className="absolute bottom-0 inset-x-0 h-1 bg-white/20 z-20">
                      <div
                        className="h-full bg-[#8B1A1A] transition-all duration-150"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Caption Footer */}
              <div className="pt-3 px-1 text-center font-editorial text-sm sm:text-base tracking-wide text-[#FBF6E5]/90 italic">
                Cada detalhe foi pensado pra você
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Meaning & Intention */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="lg:col-span-6 space-y-7"
          >
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#8B1A1A] font-body">
                A EXPERIÊNCIA FÍSICA
              </span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-6xl text-[#1A1A1A] font-normal leading-[1.1] tracking-tight">
              O significado continua depois da escolha.
            </h2>

            <div className="space-y-4 font-body text-base sm:text-lg text-[#1A1A1A]/80 leading-relaxed max-w-lg">
              <p>
                Da peça à embalagem, cada detalhe existe com intenção.
              </p>
              <p>
                Porque aquilo que carregamos conosco também pode nos lembrar daquilo que não queremos esquecer.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Section08Experiencia;
