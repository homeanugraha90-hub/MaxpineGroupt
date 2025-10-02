import { Play, Pause, Volume2, VolumeX, Maximize2, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import vid from "../../assets/All home imgs/video-2.mp4";

export default function VideoSection() {
  const videoRef = useRef(null);
  const fullscreenVideoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState({ current: "00:00", total: "00:00" });

  // Format seconds → mm:ss
  const formatTime = (secs) => {
    if (isNaN(secs)) return "00:00";
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  //  Sync video progress
  useEffect(() => {
    const vidEl = isFullscreen ? fullscreenVideoRef.current : videoRef.current;
    if (!vidEl) return;

    const updateTime = () => {
      setProgress((vidEl.currentTime / vidEl.duration) * 100 || 0);
      setTime({
        current: formatTime(vidEl.currentTime),
        total: formatTime(vidEl.duration),
      });
    };

    vidEl.addEventListener("timeupdate", updateTime);
    return () => vidEl.removeEventListener("timeupdate", updateTime);
  }, [isFullscreen]);

  //  Play / Pause toggle
  const handlePlayPause = () => {
    const vidEl = isFullscreen ? fullscreenVideoRef.current : videoRef.current;
    if (!vidEl) return;

    if (vidEl.paused) {
      vidEl.play();
      setIsPlaying(true);
    } else {
      vidEl.pause();
      setIsPlaying(false);
    }
  };

  //  Mute / Unmute
  const toggleMute = () => {
    const vidEl = isFullscreen ? fullscreenVideoRef.current : videoRef.current;
    if (!vidEl) return;

    vidEl.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  //  Seek on progress bar click
  const handleSeek = (e) => {
    const vidEl = isFullscreen ? fullscreenVideoRef.current : videoRef.current;
    if (!vidEl) return;

    const rect = e.target.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    vidEl.currentTime = percent * vidEl.duration;
  };

  //  Fullscreen (Custom Modal)
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    setIsPlaying(false); // reset play state when switching
  };

  return (
    <>
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Take a Virtual Tour
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our luxurious properties from the comfort of your home with our immersive virtual tours
            </p>
          </div>

          {/* Video Container */}
          <div className="relative max-w-6xl mx-auto">
            <div className="group relative aspect-video bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
              {/* Video */}
              <video
                ref={videoRef}
                src={vid}
                className="object-cover w-full h-full"
                muted={isMuted}
              />

              {/* Overlay when paused */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-black/20 bg-opacity-30"></div>
              )}

              {/* Center Play Button (only when paused) */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={handlePlayPause}
                    className="group relative w-20 h-20 lg:w-24 lg:h-24 bg-[#20ae9b] hover:bg-[#265e57] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                  >
                    <div className="absolute inset-0 bg-[#20ae9b] rounded-full animate-ping opacity-75"></div>
                    <Play
                      className="w-8 h-8 lg:w-10 lg:h-10 text-white ml-1 relative z-10"
                      fill="currentColor"
                    />
                  </button>
                </div>
              )}

              {/* Video Controls (group-hover fixes visibility) */}
              <div className="absolute bottom-0 left-0 right-0 px-4 pb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Progress Bar with draggable seek */}
                <div
                  className="w-full h-2 bg-black/40 rounded cursor-pointer mb-2 relative"
                  onClick={handleSeek}
                >
                  <div
                    className="h-full bg-[#20ae9b] rounded"
                    style={{ width: `${progress}%` }}
                  ></div>
                  <div
                    className="absolute top-1/2 -translate-y-1/2 h-3 w-3 bg-white rounded-full shadow"
                    style={{ left: `${progress}%` }}
                  ></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Play/Pause button */}
                    <button
                      onClick={handlePlayPause}
                      className="w-10 h-10 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5" />
                      ) : (
                        <Play className="w-5 h-5" />
                      )}
                    </button>

                    {/* Mute button */}
                    <button
                      onClick={toggleMute}
                      className="w-10 h-10 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5" />
                      ) : (
                        <Volume2 className="w-5 h-5" />
                      )}
                    </button>

                    {/*  Show time with remaining */}
                    <div className="bg-black bg-opacity-50 rounded-full px-3 py-1 text-white text-sm">
                      {time.current} / {time.total}
                    </div>
                  </div>

                  {/* Fullscreen */}
                  <button
                    onClick={toggleFullscreen}
                    className="w-10 h-10 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center text-white transition-colors"
                  >
                    <Maximize2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
